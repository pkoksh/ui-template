# 컬럼 포맷 레퍼런스

## 개요

`Format`은 **셀에 표시되는 데이터의 형식**을 정의한다. 실제 값은 변경되지 않으며, 저장 시 원본 값이 전송된다.

- Format은 **Type에 따라 문법이 다름**
- 특수문자(`:` 등)를 포함할 경우 앞에 `\\`를 붙임 (예: `"Result\\: #,###won"`)

> 상세: [Format appendix](../ibsheet-official-manual/appx/format.md)

---

## 1. Text / Lines 타입 포맷

JSON 형식으로 실제 값과 표시 값의 쌍을 정의. 표시 값에 HTML 사용 가능.

```javascript
{ Name: "sCountry", Type: "Text", Format: "{'A':'<b>한국</b>','B':'일본','C':'중국'}" }
```

> 주민번호, 카드번호 등 자릿수 포맷은 [CustomFormat](#4-customformat-textlines-전용) 사용

⚠️ **함정 — `Type:'Text'` 에 Date 토큰(`HH:mm`, `yyyy-MM-dd` 등) Format 적용하면 raw 값 앞에 mask prefix 가 결합되어 깨진 출력**

`Format` 의 Date 토큰(`HH`, `mm`, `ss`, `yyyy`, `MM`, `dd` 등) 은 **Date/Int/Float 타입 전용**. `Type:'Text'` 셀에 그대로 적용하면 IBSheet 내부 Format 파서가 Text 값을 Date 로 파싱 시도하다 실패하면서 **token 문자열을 raw 앞에 prefix 로 붙여 출력**한다.

```javascript
// ❌ Type:'Text' + Format:'HH:mm' — 서버 응답 '09:41:43' 에 mask token 결합 → 화면 ':mm09:41:43'
{ Name: 'tstTm', Type: 'Text', Format: 'HH:mm' }

// ✅ Type:'Text' 는 Format 제거 — raw 값 그대로 표시 (Nexacro displaytype="normal" 등가)
{ Name: 'tstTm', Type: 'Text' }
// 응답 '09:41:43' → 표시 '09:41:43'

// ✅ Format 으로 시:분만 표시하려면 Type:'Date' + DataFormat 필요
{ Name: 'tstTm', Type: 'Date', Format: 'HH:mm', DataFormat: 'HH:mm:ss' }
```

**Why**: Text Format 의 정식 문법은 JSON 값-라벨 매핑(`"{'A':'한국'}"`) 또는 CustomFormat 자릿수 패턴(`"###-####-####"`) 만 인식. Date 토큰은 Text 파서가 인식하지 못해 fallback 출력에서 raw 와 결합된 결과를 그대로 노출. 빌드/런타임 에러 없이 silent 깨짐.

회귀 사례: UIDI0510M00 (장비별 Log) 시간 컬럼 `Type:'Text' + Format:'HH:mm'` → 사용자 보고 "조회 누르면 시간 컬럼이 `:mm09:41:43` 같은 식으로 나옴". `Format` 제거 후 정상 raw 표시.

XFDL 매핑: `<Cell text="bind:xxx" displaytype="normal" />` → IBSheet `Type:'Text'` (Format 없음). `displaytype="date"` + `calendardateformat` 이 명시된 경우만 `Type:'Date' + Format` 사용.

---

## 2. Date 타입 포맷

Date 타입은 **Format, EditFormat, DataFormat** 3가지를 함께 설정하는 경우가 많다.

| 속성 | 역할 | 예시 |
|------|------|------|
| **Format** | 시트에 표시되는 형식 | `"yyyy.MM.dd"` |
| **EditFormat** | 셀 편집 시 표시되는 형식 | `"yyyyMMdd"` |
| **DataFormat** | 서버와 데이터 송수신 형식 | `"yyyyMMdd"` |

- Format 미설정 시 기본값: `yyyy/MM/dd`
- DataFormat 미설정 시 Format과 동일한 형식으로 송수신
- EditFormat 미설정 시 Format과 동일한 형식으로 편집

### 예약어

| 예약어 | 설명 | 예약어 | 설명 |
|--------|------|--------|------|
| yyyy/yy | 4자리/2자리 연도 | HH/H | 24시간 (2자리/1~2자리) |
| MM/M | 월 (2자리/1~2자리) | mm/m | 분 (2자리/1~2자리) |
| dd/d | 일 (2자리/1~2자리) | ss/s | 초 (2자리/1~2자리) |

### 예제
```javascript
{
    Name: "startDate", Type: "Date",
    Format: "yyyy.MM.dd",       // 시트 표시: "2019.07.25"
    EditFormat: "yyyyMMdd",     // 편집 시: "20190725"
    DataFormat: "yyyyMMdd"      // 서버 송수신: "20190725"
}
// 서버 "20190725" → 표시 "2019.07.25" → 편집 "20190725" → 저장 "20190725"
```

### ⚠️ 백엔드 응답이 밀리초 포함 (`yyyy-MM-dd HH:mm:ss.000`) 인 경우

Seegene LIS 일부 API 는 Timestamp 를 `"2024-10-30 23:40:42.000"` 처럼 **밀리초 `.000` 이 붙은 문자열**로 반환한다. 이 경우 `DataFormat` 에 밀리초 리터럴까지 포함시키지 않으면 IBSheet 가 파싱에 실패하여 **셀이 비어서 표시**된다 (Format 은 표시용이라 무관).

```javascript
{
    Name: "updtDtm", Type: "Date",
    Format: "yyyy-MM-dd HH:mm:ss",         // 표시: "2024-10-30 23:40:42"
    DataFormat: "yyyy-MM-dd HH:mm:ss.000"  // 서버 원본: "2024-10-30 23:40:42.000"
}
```

- **증상**: Network 탭에서는 데이터가 정상 수신됐는데 해당 Date 컬럼만 빈 셀로 렌더
- **원인**: `DataFormat` 이 `"yyyy-MM-dd HH:mm:ss"` 로 설정되어 뒤의 `.000` 을 파싱 못 함
- **해결**: DataFormat 에 리터럴 `.000` 까지 명시 (혹은 백엔드 응답 포맷과 정확히 일치시킨다)
- **참고**: 원본 Nexacro Grid 의 `calendardateformat` 은 표시용 Format 에만 해당하고, 송수신 포맷은 Dataset 컬럼 type=DATETIME 이 자동 처리했기에 XFDL 변환 시 놓치기 쉬움

### ⚠️ 서버값이 datetime(Oracle `SYSDATE`) + 행추가는 8자리 `YYYYMMDD` 혼재 — 단일 DataFormat 불가 → `Type:'Text' + CustomFormat 함수`

`REG_DTM` 같은 컬럼이 백엔드에서 `INSERT ... VALUES (SYSDATE)` 로 채워지면 조회 응답은 Oracle DATE→String(`2026-05-28 13:45:30.0` 등 driver 의존)이고, 화면 `addRow` 는 `dayjs().format('YYYYMMDD')`(8자리)를 넣는다. `Type:'Date'` 의 **단일 `DataFormat` 으로는 두 포맷을 동시에 파싱 못 해** 한쪽이 빈 셀이 된다.

→ `Type:'Text'` 로 두고 **CustomFormat 함수**로 표시만 통일. INSERT=SYSDATE / UPDATE=감사필드 미사용 패턴(`REG_DTM` 변경 안 함) 이면 표시 변환이 저장값 무영향.

```javascript
// 8자리 / datetime / 대시 입력 모두 → 'YYYY-MM-DD' 로 통일
const fmtRegDtm = (v: unknown): string => {
  if (v == null || v === '') return ''
  const s = String(v).trim()
  if (/^\d{8}$/.test(s)) return `${s.slice(0,4)}-${s.slice(4,6)}-${s.slice(6,8)}`
  const d = dayjs(s); return d.isValid() ? d.format('YYYY-MM-DD') : s
}
// @ibsheet/react 타입은 CustomFormat 을 string 으로만 선언 → 함수는 캐스트 필요
{ Name: 'regDtm', Type: 'Text', CanEdit: 0, CustomFormat: fmtRegDtm as unknown as string }
```

⚠️ `Type:'Text' + Format:'yyyy-MM-dd'` 는 §1 의 Date 토큰 함정에 그대로 걸려 raw 값 prefix 가 붙음. 위 CustomFormat 경로가 정답.

회귀 사례: UIDI0680M00 ADAGIO 균정보 (등록일자) — `Type:'Text' + Format:'yyyy-MM-dd'` 로 변환돼 raw datetime 노출("등록일자 형식 다름" 사용자 보고). CustomFormat 함수로 통일.

### Extend(IB_Preset)를 이용한 일괄 설정

Date 컬럼의 Format/EditFormat/DataFormat 등을 매번 지정하는 대신, `/plugins/ibsheet-common.js`에 정의된 `IB_Preset` 변수와 [Extend](../ibsheet-official-manual/props/col/extend.md) 속성으로 일괄 적용할 수 있다.

```javascript
// ibsheet-common.js에 미리 정의
var IB_Preset = {
    YMD: {Type:"Date", Format:"yyyy-MM-dd", EditFormat:"yyyyMMdd", DataFormat:"yyyyMMdd", Width:110},
    YMDHM: {Type:"Date", Format:"yyyy-MM-dd HH:mm", DataFormat:"yyyyMMddHHmm", CanEdit:0, Width:150},
    USD: {Type:"Float", Format:"$ #,##0.#", Width:120, CanResize:0, Color:"#FFFF88"},
};

// 사용 시: Extend로 프리셋 적용, 필요 시 개별 속성 오버라이드
options.Cols = [
    {Name: "birthDate", Extend: IB_Preset.YMD},
    {Name: "regDate",   Extend: IB_Preset.YMDHM},
    {Name: "salary",    Extend: IB_Preset.USD},
    {Name: "startDate", Extend: IB_Preset.YMD, CanEdit: 1},  // 개별 속성 추가
];
```

> **주의**: Extend와 동일 속성이 함께 지정된 경우, **먼저 설정된 속성이 우선**된다. `{Width:300, Extend:preset}` → Width=300 (Extend의 Width 무시)

> 상세: [DataFormat](../ibsheet-official-manual/props/col/data-format.md), [EditFormat](../ibsheet-official-manual/props/col/edit-format.md), [Extend](../ibsheet-official-manual/props/col/extend.md)

---

## 3. Int / Float 타입 포맷

| 예약어 | 설명 |
|--------|------|
| `0` | 값이 없으면 0으로 채움 |
| `#` | 값이 있을 때만 표시 |
| `%` | 100을 곱하여 표시 (단순 기호: `\\%`) |

- **기본 포맷**: Int → `#,##0` / Float → `#,##0.######`
- `;`으로 양수/음수/0 각각 다른 포맷 지정 가능

### 주요 패턴

| 패턴 | 입력 | 표시 |
|------|------|------|
| `#,##0` | 1234567 | 1,234,567 |
| `#,##0.00` | 1234.5 | 1,234.50 |
| `#,##0.##` | 0.1 | 0.1 |
| `#,##0원` | 56200 | 56,200원 |
| `$ #,##0.00` | 1234.5 | $ 1,234.50 |
| `#,##0.##%` | 0.1234 | 12.34% |
| `0000` | 12 | 0012 |

```javascript
// 양수/음수/0 구분 포맷
{ Name: "sNum", Type: "Int", Format: "플러스 #,###;마이너스 #,###;없음" }
```

---

## 4. CustomFormat (Text/Lines 전용)

원본 데이터에 마스킹이나 자릿수 포맷을 적용. `Format`과 별개 속성.

| 예약어 | 입력 | 표시 |
|--------|------|------|
| `PhoneNo` | 01073213834 | 010-7321-3834 |
| `IdNoMask` | 8501242384211 | 850124-2****** |
| `SaupNo` | 6258412458 | 625-84-12458 |
| `CardNo` | 1234567890123456 | 1234-5678-9012-3456 |
| `###-#####` | 12345678 | 123-45678 |

- `|` 구분자로 여러 포맷 지정 → 자릿수에 따라 자동 매칭
- 함수 지정 가능: `CustomFormat: function(v, sheet, col) { return ...; }`

```javascript
{ Type: "Text", Name: "cNo", CustomFormat: "IdNoMask|SaupNo" }
// 13자리 → 850124-2****** / 10자리 → 625-84-12458
```

---

## 참고 자료
- [Format appendix](../ibsheet-official-manual/appx/format.md)
- [CustomFormat](../ibsheet-official-manual/props/col/custom-format.md)
- [DataFormat](../ibsheet-official-manual/props/col/data-format.md) / [EditFormat](../ibsheet-official-manual/props/col/edit-format.md)
- [Extend (col)](../ibsheet-official-manual/props/col/extend.md)
- [Type appendix](../ibsheet-official-manual/appx/type.md)
- [컬럼 타입 레퍼런스](./column-type-property.md)
