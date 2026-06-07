# IBSheet8 InfoRow (페이지네이션 & 행 수 표시)

> 시트 상단 또는 하단에 **페이지 네비게이션**, **데이터 건수 정보**, **선택 영역 합계/평균**, **상태 정보** 등을 표시하는 기능.

---

## 1. InfoRowConfig (cfg 속성)

시트 옵션의 `Cfg.InfoRowConfig`로 설정한다.

### 기본 구조

```javascript
options.Cfg = {
    InfoRowConfig: {
        Visible: true,
        Layout: ["Paging", "Count"],
        Space: "Bottom",
        Format: "[BOTTOMDATAROW / TOTALROWS]"
    }
};
```

### 주요 옵션

| 옵션 | 타입 | 설명 |
|------|------|------|
| **Visible** | `boolean` | InfoRow 표시 여부. `SearchMode: 1,4,5`일 때 기본 `true`, `SearchMode: 0,2,3`일 때 기본 `false` |
| **Layout** | `array` | InfoRow에 배치할 셀 목록 (기본값: `["Paging", "Count"]`) |
| **Space** | `string` | InfoRow 위치. `"Top"` 또는 `"Bottom"` (기본값: `"Bottom"`) |
| **Format** | `string` | Count 셀의 표시 형식 (기본값: `[BOTTOMDATAROW / TOTALROWS]`) |
| **ViewCount** | `number` | Paging2 사용 시 PageLength 변경 selectBox 표시 여부. `0`: 미표시(기본), `1`: 표시 |
| **ViewFormat** | `string` | ViewCount selectBox 옵션 설정. `"10\|20\|30\|40\|50"` 형태. 미설정 시 `"10\|20\|30\|50\|100"` |
| **Paging2Count** | `number` | Paging2의 페이지 번호 표시 개수 (기본값: `5`, 최대: `10`) |

### Layout 예약어

| 예약어 | 설명 |
|--------|------|
| **Paging** | 페이지 네비게이션 (예: `1/1,000`). `SearchMode: 1,4,5`에서 동작 |
| **Paging2** | 숫자 페이지 네비게이션. **Paging과 동시 사용 불가** |
| **Count** | 데이터 건수 정보 표시 |
| **SummaryLabel** | 선택 영역의 합계/평균 정보 표시 |
| **StatusLabel** | 데이터 편집, 조회, 행 이동, 필터링, 정렬 등 상태 정보 표시 |
| 사용자 문자열 | 임의 텍스트. HTML 태그(`<Span>`, `<Div>` 등) 사용 가능 |
| `object` 형식 | Type, CanFocus 등 셀 단위 속성을 사용하여 원하는 기능 사용 가능 (예: `{Type: "Bool", Width: 50, RelWidth: 0, OnClick:function(evt){} }`) |

### Format 예약어

| 예약어 | 설명 |
|--------|------|
| `TOTALROWS` | (서버 페이징) 전체 데이터 건수 |
| `ROWCOUNT` | 조회된 데이터 건수 |
| `VISIBLECOUNT` | 보이는 데이터 건수 |
| `ADDROWS` | 추가된 데이터 건수 |
| `CHANGEROWS` | 변경된 데이터 건수 |
| `DELETEROWS` | 삭제된 데이터 건수 |
| `BOTTOMDATAROW` | 현재 보이는 마지막 행 번호 |

---

## 2. 사용 예제

### 기본 페이징 + 건수 표시

```javascript
options.Cfg = {
    InfoRowConfig: {
        Visible: true,
        Layout: ["Paging", "Count"],
        Space: "Bottom",
        Format: "CHANGEROWS 건이 수정되었습니다."
    }
};
```

### Paging2 + ViewCount selectBox

```javascript
options.Cfg = {
    InfoRowConfig: {
        Visible: true,
        Layout: ["Paging2", "Count"],
        ViewCount: 1,
        ViewFormat: "10|20|30|40|50",
        Paging2Count: 8,
        Space: "Bottom"
    }
};
```

### 커스텀 셀 (Html, 텍스트) 혼합

```javascript
options.Cfg = {
    InfoRowConfig: {
        Visible: true,
        Layout: [
            "Paging",
            "<div style='background-color:#FFFFAA'>E-HR 시스템 [DEV]</div>",
            "ABC",
            "Count"
        ],
        Space: "Bottom"
    }
};
```

### 버튼 셀 추가

```javascript
options.Cfg = {
    InfoRowConfig: {
        Visible: true,
        Layout: [
            {
                Value: "확인",
                Type: "Button",
                TextColor: "#FFFFFF",
                Color: "#53629E",
                RelWidth: 0,
                Width: 100,
                OnClick: function() { alert("확인"); }
            },
            "Count"
        ],
        Space: "Top"
    }
};
```

---

## 3. 외부 DOM에 정보 표시 메서드

InfoRow 대신 시트 외부의 DOM 요소에 정보를 출력할 수 있다.

### setCountInfoElement

데이터 행 수 정보를 외부 DOM에 표시한다.

```javascript
// 사용법
sheet.setCountInfoElement('countElem');
sheet.setCountInfoElement(document.getElementById('countElem'));
// 반환값: boolean (true: 성공, false: 실패)
```

### setSelectionSummaryInfoElement

선택 영역의 셀 개수 및 합계/평균 정보를 외부 DOM에 표시한다.

```javascript
var option = {
    Mode: "DelRow|AllRange",
    SumFormat: "#,###"
};
sheet.setSelectionSummaryInfoElement('summaryElem', option);
sheet.setSelectionSummaryInfoElement(document.getElementById('summaryElem'), option);
// 반환값: boolean (true: 성공, false: 실패)
```

> `opt` 파라미터는 [SelectionSummary cfg](https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/selection-summary) 옵션 중 `Align`, `Width`를 제외한 설정을 사용한다.

---

## 4. 관련 참조

- [InfoRowConfig cfg](https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/info-row-config)
- [SearchMode cfg](https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/search-mode)
- [SelectionSummary cfg](https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/props/cfg/selection-summary)
- [setInfoRow method](https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-info-row)
- [setCountInfoElement method](https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-count-info-element)
- [setSelectionSummaryInfoElement method](https://docs.ibsheet.com/ibsheet/v8/manual/en/#docs/funcs/core/set-selection-summary-info-element)
- [Demo: InfoRowConfig](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/InfoRowConfig/)
