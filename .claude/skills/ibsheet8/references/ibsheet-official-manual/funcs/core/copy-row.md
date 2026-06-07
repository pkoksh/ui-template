---
KEY: copyRow
KIND: method
PATH: funcs/core/copy-row
ALIAS: sheet.copyRow, copyRow(), 지정한, 행을, 특정, 위치로, 복사합니다
ALIAS_EN: copy, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/copy-row
---
# copyRow ***(method)***

> 지정한 행을 특정 위치로 복사합니다.

### Syntax
```javascript
object copyRow( row , next , empty , parent , child, forceVisible );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|next|`object`|선택|[데이터 로우 객체](/docs/appx/row-object)
(next로 지정한 행의 위에 row행이 복사됨. 값이 없으면 맨 마지막행에 복사)|
|empty|`boolean`|선택|복사 시 데이터 포함 여부
`1(true)`로 설정하여 사용 시 [onAfterRowCopy](/docs/events/on-after-row-copy) 이벤트 미발생
`0(false)`:데이터 포함 (`default`)
`1(true)`:데이터 미포함|
|parent|`object`|선택|[데이터 로우 객체](/docs/appx/row-object) (트리 사용시 부모에 해당하는 행 지정)|
|child|`boolean`|선택|트리 사용시 자식행도 복사할 지 여부
`0(false)`:자식행 미포함 (`default`)
`1(true)`:자식행 포함|
|forceVisible|`boolean`|선택|보이지 않는 행을 복사할 때 보이도록 설정
`0(false)`:행을 감춤(Visible:`0(false)`) 상태로 변경 시키고 복사 (`default`)
`1(true)`:행을 보임(Visible:`1(true)`) 상태로 변경 시키고 복사|

### Return Value
***object*** : 복사된 [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
//AR5 행을 포커스 행 위로 복사
var row = sheet.copyRow({row:sheet.getRowById("AR5"), next:sheet.getFocusedRow()});

//AR5 행을 포커스 행 아래로 복사
var row = sheet.copyRow({row:sheet.getRowById("AR5"), "next":sheet.getNextRow(sheet.getFocusedRow())});

//복사한 행을 감춘다.
row["Visible"] = 0;
sheet.renderBody();
```

### Read More
- [addRow method](./add-row)
- [moveRow method](./move-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|