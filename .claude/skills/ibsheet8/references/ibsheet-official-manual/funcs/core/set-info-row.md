---
KEY: setInfoRow
KIND: method
PATH: funcs/core/set-info-row
ALIAS: sheet.setInfoRow, setInfoRow(), 시트, 상단, 혹은, 하단에, 건수정보
ALIAS_EN: set, info, row, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-info-row
---
# setInfoRow ***(method)***
> 시트 상단 혹은 하단에 건수정보 와 페이지 네비게이션, 사용자 정의 영역을 표시합니다.




### Syntax
```javascript
void setInfoRow( visible, layout, space, format, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|visible|`boolean`|선택|정보 행 보임/감춤 여부
`0(false)`:정보 행 감춤 (`default`)
`1(true)`:정보 행 보임|
|layout|`array`\[`string`\|`object`\]|선택|페이징, 사용자 정의 영역, 건수 정보 표시 설정<ul><li>`"Paging"` : 페이지 네비게이션 활성화</li><li>`"Paging2"` : 숫자형 페이지 네비게이션 활성화</li><li>`"Count"`: 건수 정보 표시 </li><li>`"SummaryLabel"`: 선택영역의 합계/평균 정보 표시 </li><li>`"StatusLabel"`: 데이터 편집, 행이동, 필터링, 정렬, 컬럼이동, 파일 업로드/제거 정보 표시</li><li>`"사용자 영역 문자열"` : 표시하려는 문자열 `<span>`, `<div>` 태그등 사용가능</li></ul>|
|viewCount|`number`|선택|layout의 Paging2 설정시 selectBox 표시 여부 설정
`0`:표시안함 (`default`)
`1`:표시|
|viewFormat|`string`|선택|layout의 Paging2 설정시 `viewCount`의 selectBox 옵션을 설정합니다.|
|paging2Count|`number`|선택|layout의 Paging2 설정시 페이지 네비게이션에 보여지는 숫자의 개수를 설정합니다. (`default: 5, max: 10`)|
|space|`string`|선택|정보행의 위치 (`"Top"`: 상단, `"Bottom"`:하단)|
|format|`string`|선택|건수정보에 들어갈 예약어 조합 |
|render|`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함 (`default`)
`1(true)`:즉시 반영|

### Return Value
***none***

### Example
```javascript
//시트 하단에 페이지 네비게이션과 건수 정보(시트 하단 행번호/전체건수) 표시
sheet.setInfoRow( 1, ["Paging", "Count"], "Bottom", "[BOTTOMDATAROW / TOTALROWS]", 1);
```
```javascript
//시트 하단에 페이지 네비게이션과 사용자 정의 문자 표시
sheet.setInfoRow( 1, ["Paging","테스트 문자열 표시합니다."], "Bottom");
```
```javascript
//시트 하단에 건수정보 표시
sheet.setInfoRow( 1, ["Count"], "Bottom", "[BOTTOMDATAROW / TOTALROWS]", 1);
```


### Read More
- [InfoRowConfig cfg](/docs/props/cfg/info-row-config)
- [SelectionSummary cfg](/docs/props/cfg/selection-summary)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.96|StatusLabel 추가|
|core|8.1.0.97|paging2, viewCount, viewFormat, paging2Count 추가|
