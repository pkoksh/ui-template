# 컬럼 타입 레퍼런스

## 기본 정보

### 타입 리스트 (자주사용되는 순)
Text, Int, Float, Date, Enum, Bool, Lines, Button, Html, Link, Img, File, Radio,  Pass, Drag
### 참고 사항
1. 열의 Align은 Type에 따라 기본값이 달라짐

|타입|정렬|
|---|---|
|Text,Lines,Enum,Img,Link,Pass,File|Left|
|Button,Date,Bool,Radio|Center|
|Int,Float|Right|
|Html,Drag|정렬불가|

2. 열 생성시 Type 속성은 필수는 아니지만 가급적 설정할 것을 권함
3. [타입별 데이터 형식 참고](../ibsheet-official-manual/appx/type.md)
---

## Text (텍스트)

```javascript
{
  Header: "이름",
  Name: "username",
  Type: "Text",
  Align: "Center",
  EditMask: "^\\w*$", //입력허용글자 javascript 정규식
  Width: 150,
  Size: 50, //maxlength
  EmptyValue: "이름 입력" //placeholder
}
```

---

## Int (정수)

```javascript
{
  Header: "수량",
  Name: "quantity",
  Type: "Int",
  Width: 100,
  Format: "#,##0"
}
```


---

## Float (실수)

```javascript
{
  Header: "단가",
  Name: "price",
  Type: "Float",
  Format: "#,##0.00", //소숫점 세번째 자리에서 반올림된 값이 표시
}
```

---

## Int,Float 참고
- 기본적으로 숫자 유형은 사용자가 값을 지워도 0을 갖음. (Col)EmptyValue:1 을 설정해야 실제 값을 ''(공백)으로 만들수 있음.
- Int 타입 기본 포맷 "#,##0"
- Float 타입 기본 포맷 "#,##0.######"

### 숫자 형식 패턴

[Int / Float 타입 포맷](./column-format-property.md#3-int--float-타입-포맷)
---
## Date (날짜)

```javascript
{
  Header: "등록일",
  Name: "regDate",
  Type: "Date",
  Format: "yyyy-MM-dd", // 시트에 표시되는 포맷
  EditFormat: "yyyyMMdd", // 편집시 표시되는 포맷
  DataFormat: "yyyyMMdd", // 서버에 데이터를 전송하거나 받을때 포맷
}
```

⚠️ **함정 — `setValue` 시 입력값이 `DataFormat` 과 불일치하면 silent fail (시트 셀 빈채로 표시)**

`Type:'Date'` 컬럼의 `setValue(row, col, value)` 는 입력값을 `DataFormat` 으로 파싱한다. 형식 불일치 시 **값이 무시되고 셀이 비어 보임** — 에러 없음, console 로그 없음.

마스터-디테일 폼 (외부 DatePicker → IBSheet 동기화) 에서 가장 흔히 발생.

```ts
// 컬럼: Format='yyyy-MM-dd', DataFormat 미명시 → default 'yyyyMMdd' 8자리

// ❌ React state 'YYYY-MM-DD' 10자리 (DatePicker normalizeDate 결과) 그대로 setValue
sheet.setValue(row, 'salsActDt', '2026-05-13')   // 형식 불일치 → 무시 → 빈 셀

// ✅ DataFormat 명시 + setValue 직전 dash 제거 ('YYYYMMDD' 8자리로 변환)
{ Name:'salsActDt', Type:'Date', Format:'yyyy-MM-dd', DataFormat:'yyyyMMdd' }
sheet.setValue(row, 'salsActDt', '2026-05-13'.replace(/-/g, ''))   // '20260513' → OK
```

✅ **양방향 동기화 — `getValue` 결과는 `DataFormat` raw 형식**: 행 선택(`onFocus`) 시 시트 값을 폼 state 로 가져올 때 normalize 필요.

```ts
// 시트 → state (행 선택 시): 'YYYYMMDD' 8자리 → DatePicker 와 일관된 'YYYY-MM-DD' 10자리
salsActDt: normalizeDate(String(sheet.getValue(row, 'salsActDt') ?? ''))

// state → 시트 (사용자 변경 시): 'YYYY-MM-DD' 10자리 → 'YYYYMMDD' 8자리
const sheetVal = col === 'salsActDt' && typeof val === 'string'
  ? val.replace(/-/g, '')
  : val
sheet.setValue(row, col as string, sheetVal)
```

**판정 신호**: DatePicker / 외부 input 의 onChange 핸들러에서 `sheet.setValue` 호출했는데 셀이 비어있음 (콘솔 에러 없이). DataFormat 명시 + setValue 직전 형식 변환.

**`Time` 컬럼도 동일** — `Format: 'HH:mm'` / DataFormat default `'HHmm'` 4자리. state 'HH:MM' 5자리 그대로 setValue 시 무시.

참고 화면: `SL/LTCY/UISL0041P00.tsx` (영업활동 일자 setValue 무시 버그 해결 — DataFormat 'yyyyMMdd' 명시 + dash 제거).

### 날짜 형식 패턴

[Date 타입 포맷](./column-format-property.md#2-Date-타입-포맷)

---

## Enum (드롭다운)

```javascript
{
  Header: "상태",
  Name: "pstatus",
  Type: "Enum",
  EnumKeys: "|A|B|C", //select의 value (첫글자가 구분자)
  Enum: "|대기|진행|완료", //select의 text (첫글자가 구분자)
}
```
### Enum 타입 참고
- Enum이나 EnumKeys에 없는 데이터를 load하는 경우 값은 무시됨(버려짐)
- Enum이나 EnumKeys에 없는 값을 허용하려면 (Col)EnumStrictMode: 1을 설정해야 함
- Enum만 설정하고 EnumKeys를 설정하지 않는 경우 EnumKeys도 Enum과 동일하게 취급
- Enum의 item이 많은 경우에는 (Col)EnumFilter:1 을 설정하면 드롭리스트 상단에 필터가 표시됨.

### 동적 Enum 데이터 변경

```javascript
$.ajax({
  url:'/data/getEnum',
  data: '...',
  success: function(data, ...) {
    sheet.setAttribute( null, "colName", "Enum", data.ComboText, 0 );
    sheet.setAttribute( null, "colName", "EnumKeys", data.ComboCode, 0 );
    sheet.renderBody(); //적용한 내용을 화면에 표시
  }
});
```

---

## Bool (체크박스)

```javascript
{
  Header: "사용",
  Name: "useYn",
  Type: "Bool",
  TrueValue: "Y", // default : 1
  FalseValue: "N", // default : 0
  BoolIcon: 0,    // 0 = 사각 체크박스 (XFDL checkboxcontrol 등가), 1 = 원형 (라디오)
  DefaultValue: "Y",  // 신규 행 default — 단 IBSheet 버전/환경에 따라 매핑 실패 케이스 있음
}
```

⚠️ **함정 — `getValue` 가 TrueValue/FalseValue 아닌 raw 1/0/NaN 리턴**

`TrueValue:'Y'` 로 설정해도 `sheet.getValue(row, 'useYn')` 는 **raw number 1/0** 리턴 (버전 따라). 신규 행(`addRow`)의 경우 `init.useYn:'Y'` 또는 `DefaultValue:'Y'` 가 Bool 컬럼에 매핑 안 돼 **NaN** 으로 들어가는 케이스도 확인됨. 그대로 저장 페이로드에 들어가면 DB `char(1) 'Y'/'N'` 컬럼이 **NULL/'N'** 처리해 회귀 발생.

✅ **저장 직렬화 — `adapter.ts` 의 `SheetInput.boolCols` 옵션 사용**:
```ts
// 1/0/true/'1'/'Y'/'y' → 'Y', 나머지(NaN/null/0/false 포함) → 'N'
await dsRequest(SVC_SAVE, {
  ds_sclf: { sheet, mode: 'changed', cols: SAVE_COLS, boolCols: ['useYn'] },
})
```

> 표준 SheetInput 저장이 아닌 **커스텀 DTO 직렬화**(예: cascade 호출용 양쪽 그리드 수집) 는 위 `boolCols` 어댑터를 못 쓰므로 동일 규칙의 인라인 헬퍼로 직접 변환: `const boolToYN = (v) => (v===1||v==='1'||v===true||v==='Y'?'Y':'N')`.
> 이벤트(`onBeforeChange`/`onAfterChange`) 의 `evt.val`/`evt.oldval` 도 같은 내부값 `1/0`. 단방향 체크(Nexacro `cancolumnchange`) veto 등 이벤트 처리는 `events.md` 의 "Bool 이벤트 evt.val 1/0 / onBeforeChange veto" 섹션 참조.

✅ **신규 행 `addRow` 시 Bool 컬럼은 init 으로 매핑 안 됨 → 직후 `setValue` 명시 호출**:
```ts
// ❌ init 으로 'Y' — IBSheet Bool 컬럼이 못 받음 (raw NaN)
const newRow = sheet.addRow({ init: { useYn: 'Y', _rowtype: 'I' } })

// ✅ addRow 후 setValue 명시
const newRow = sheet.addRow({ init: { _rowtype: 'I' } })
sheet.setValue(newRow, 'useYn', 'Y', 1)  // 4번째 인자 1 = render
```

> 사용자 보고 사례: UILM1078P02 신규 행 저장 시 사용여부 체크돼 있어도 저장 후 'N' 으로 들어감. 진단 로그로 `useYn_cur: NaN` 확인 → setValue 명시 호출로 해결.

⚠️ **함정 변형 — `init.{boolCol}: 'N'` 셋팅 시 FalseValue 매핑 무시하고 ✓ 로 렌더** (truthy 변환 우선)

`TrueValue:'Y', FalseValue:'N'` Bool 컬럼에 `init.cntcMbyYn: 'N'` 명시해도 — IBSheet 가 `'N'` 을 FalseValue 매핑보다 **JS truthy 변환을 먼저 적용** (`Boolean('N') === true`) → ✓ 체크 표시로 렌더. 위 `'Y'→NaN` 의 반대 케이스로, init 의 Bool 값이 의도와 다르게 들어가는 사고는 양방향 모두 발생.

```ts
// ❌ FalseValue:'N' 매핑 의도지만 IBSheet 가 ✓ 표시 (truthy 우선)
sheet.addRow({
  init: {
    salsMstRefrUkeyid: ...,
    cntcMbyYn: 'N',   // ← 'N' 이 truthy → ✓ 로 렌더
  },
})

// ✅ 원본 Dataset 컬럼 기본값(빈문자열)이 의도일 경우 — init 에서 셋팅 자체 생략
sheet.addRow({
  init: {
    salsMstRefrUkeyid: ...,
    // cntcMbyYn 미지정 → 빈값 → FalseValue 매칭 → ☐ (체크 안 됨)
  },
})

// ✅ 명시 'Y' 이 필요한 경우만 addRow 후 setValue (raw NaN 회피)
const newRow = sheet.addRow({ init: { ... } })
sheet.setValue(newRow, 'cntcMbyYn', 'Y', 1)
```

**판정 신호**: 원본 nexacro 의 `gfn_addRow + setColumn(salsMstRefrUkeyid)` 만 있고 Bool 컬럼 setColumn 안 함 = Dataset 컬럼 기본값 (빈문자열) 의도. React 의 IBSheet addRow 에서도 Bool 컬럼 init 셋팅 생략.

참고 화면: `SL/LTCY/UISL0041P00.tsx` 의 `handleAddCmpMajPsn` / `handleAddOthTstInsti` — init.cntcMbyYn / majrTrstInstYn 셋팅 제거로 ☐ 정상 표시.

---

## Lines (textarea)

```javascript
{
  Header: "기타사항",
  Name: "desc",
  Type: "Lines",
  Width: 250,
  Wrap: 1,  // Lines 타입은 default가 1
  RelWidth: 1
}
```

---

## Button (버튼)

```javascript
{
  Header: "상세",
  Name: "btnDetail",
  Type: "Button",
  DefaultValue: "보기", // 조회된 값이 없는 경우 표시됨
  // ButtonText: "보기", // 조회된 값을 무기하고 표시됨
}
```
### Button 타입 참고
- 사용자 클릭시 구현은 Events.onClick 이벤트롤 통해서 구현
- 버튼을 비활성화 시키고자 하는 경우에는 Disabled:1 을 설정


---

## Link (하이퍼링크)

```javascript
{
  Header: "URL",
  Name: "url",
  Type: "Link",
  LinkTarget: "_blank",
}
```

### Link 타입 데이터 구조
```javascript
sheet.setValue(row, "colName", "|./pos/acceptCos.do|조건확인|_self" );  //|URL|Text|Target (첫글자를 구분자로 사용)
```

---

## Img (이미지)

```javascript
{
  Header: "사진",
  Name: "photo",
  Type: "Img", //Image가 아니라 Img 임
  DefaultImage: "./img/noimage.png" // 데이터가 없는 겨우 표시되는 이미지
}
```

### Img 타입 데이터 구조
```javascript
//|URL|Width|Height|Left|Top|LinkUrl|Target|Backgroud-size (첫글자를 구분자로 사용)
// URL을 제외한 나머지는 생략가능하나 첫글자는 반드시 구분자가 들어가야 함.
sheet.setValue(row, "colName", "|./img/s0151500.png|300|200" );  
```

---


## File (바이너리 파일 업로드/다운로드)
```javascript
{
  Header: "첨부이미지",
  Name: "attachImage",
  Type: "File", 
  Accept: 'image/*',
  Width: 150
}
```
### File 타입 참고
- 파일 타입 사용시에는 getSaveJson,getSaveString 함수의 리턴값이 FormData형식으로 추출됨
- 파일데이터는 조회/저장시 데이터 규격에 주의가 필요 [파일 데이터 규격 참고](../ibsheet-official-manual/dataStructure/filte-type-structure.md)
