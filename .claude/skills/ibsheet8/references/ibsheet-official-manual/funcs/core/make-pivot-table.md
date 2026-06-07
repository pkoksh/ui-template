---
KEY: makePivotTable
KIND: method
PATH: funcs/core/make-pivot-table
ALIAS: sheet.makePivotTable, makePivotTable(), 대상, 시트의, 모든, 데이터를, 기준으로
ALIAS_EN: make, pivot, table
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/make-pivot-table
---
# makePivotTable ***(method)***

> 대상 시트의 모든 데이터를 기준으로 피벗 테이블을 생성합니다.

> 만약 피벗 생성 시점에 대상 시트가 필터링 되어 있는 경우 필터가 취소된 후 피벗이 생성됩니다.

> 생성된 피벗 테이블의 시트는 원본시트의 `"pivotSheet_" + id`로 생성됩니다. 예를 들어 원본 시트의 id가 `"sheet"`인 경우 피벗 시트의 id는 `"pivotSheet_sheet"`가 됩니다. 

> 피벗 테이블의 시트에서는 `DataMerge` 기능을 지원하지 않습니다.

> **<mark>주의</mark> : `makeSubTotal`로 행 5000개, 열 200개 이상의 피벗 테이블을 만들 경우 브라우저 성능을 보장할 수 없습니다. 
해당 개수 미만으로 생성되게 `makeSubTotal` 기준 행,열을 설정하도록 권장합니다.**



### Syntax
```javascript
object makePivotTable(criterias, init, format, type, callback, hideTotal);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|criterias|`object`|선택|피벗테이블 기준 대상 컬럼명들 설정
 row, col에는 일반 컬럼 data에는 숫자형 컬럼(`int, float`) 사용|
|init|`object`|필수|피벗테이블의 열, 행, 계산 대상 설정
 row, col에는 일반 컬럼 data에는 숫자형 컬럼(`int, float`) 사용|
|format|`string`|선택|피벗 테이블에서 보여질 포맷|
|type|`string`|선택|계산 대상 컬럼별 계산 방법 (`default: "Sum"`)
 `"Sum"`, `"Count"`, `"Max"`, `"Min"` 사용 가능
컬럼별 계산 방법을 data 컬럼 개수에 맞게 `,(쉼표)` 로 연결하여 여러 개를 설정할 수 있습니다.|
|callback|`function`|선택|피벗 시트 생성 후 호출할 콜백 함수. 피벗 시트 생성 후 [onRenderFirstFinish](/docs/events/on-render-first-finish) 시점에 발생합니다.|
|hideTotal|`object`|선택|피벗 테이블에서 총합계 표시 여부|

### criterias
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`string`|필수|행 레이블 필드 기준 컬럼 명을 구분자(",")로 연결한 문자열|
|col|`string`|필수|열 레이블 필드 기준 컬럼 명을 구분자(",")로 연결한 문자열|
|data|`string`|필수|계산 대상 기준 컬럼 명을 구분자(",")로 연결한 문자열|

### init
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`string`|필수|행 레이블 필드에 설정할 컬럼 명을 구분자(",")로 연결한 문자열|
|col|`string`|필수|열 레이블 필드에 설정할 컬럼 명을 구분자(",")로 연결한 문자열|
|data|`string`|필수|계산 대상 컬럼의 컬럼 명을 구분자(",")로 연결한 문자열|

### hideTotal
|Name|Type|Required|Description|
|----------|-----|---|----|
|hideTotalRow|`boolean`|선택|행 총합계 숨김여부 (`default: false`)|
|hideTotalRow|`boolean`|선택|열 총합계 숨김여부 (`default: false`)|


### Return Value
***object*** : 생성된 피벗 시트 객체

### Example
```javascript
// 피벗 테이블 생성
var criterias = {
  row: 'sDept,sTeam,sPosition,sName,sGender,sAgeRange,sAddr',
  col: 'sDept,sTeam,sPosition,sName,sGender,sAgeRange,sAddr',
  data: 'sAge,sPeriod,sSalary,sBonus'
}
var init = {
  row: 'sDept',
  col: 'sPosition,sTeam',
  data: 'sSalary,sAge'
}
var callback = function (evt) {
  // callback function ...
}
var hideTotal = {
  hideTotalRow: false,
  hideTotalCol: true
}

// 초기화 data 컬럼이 sSalary,sAge 두 개이므로 각각 Sum,Avg 타입을 적용하며, 열 총합계를 감춥니다.
sheet.makePivotTable(criterias, init, '#,### 만원', 'Sum,Avg', callback, hideTotalCol);
```

### Read More
- [showPivotDialog method](/docs/funcs/dialog/show-pivot-dialog)
- [switchPivotSheet method](./switch-pivot-sheet)
<!--!
- `[비공개]` [clearPivotSheet method](/docs/funcs/dialog/clear-pivot-sheet)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.17|`callback` 기능 추가|
|core|8.1.0.46|`type` 옵션 `Max`, `Min` 추가|
|core|8.1.0.94|`criterias` 인자 선택으로 변경|
|core|8.2.0.15|`pivotType` 관련 기능 개선|
|core|8.3.0.9|`hideTotal` 인자 기능 추가|