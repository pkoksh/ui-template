---
KEY: copyRows
KIND: method
PATH: funcs/core/copy-rows
ALIAS: sheet.copyRows, copyRows(), 지정한, 행들을, 특정, 위치로, 복사합니다
ALIAS_EN: copy, rows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/copy-rows
---
# copyRows ***(method)***

> 지정한 행들을 특정 위치로 복사합니다.

> 내부적으로는 여러개 행을 복사 후 추가(ctrl+c, ctrl+v)하는 행위이기 때문에 [onAfterRowCopy](/docs/events/on-after-row-copy) 이벤트와 [onAfterRowAdd](/docs/events/on-after-row-add)이벤트가 발생합니다.

### Syntax
```javascript
object copyRows( rows, next, empty, parent, child, forceVisible );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|rows|`object`|필수|[데이터 로우 객체](/docs/appx/row-object) 배열|
|next|`object`|선택|[데이터 로우 객체](/docs/appx/row-object)
(next로 지정한 행의 위에 rows행들이 복사됨. 값이 없으면 마지막 행에 복사)|
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
***array[row object]*** : 복사된 [데이터 로우 객체](/docs/appx/row-object)들

### Example
```javascript
//AR5,AR6,AR9행을 최상단에 복사
sheet.copyRows({rows:[
    sheet.getRowById("AR5"),
    sheet.getRowById("AR6"),
    sheet.getRowById("AR9")
    ], next:sheet.getFirstRow()});




//CHK열에 체크한 행들을 sheet2에 맨 마지막 행으로 복사
function work(){
    var chkRows = sheet.getRowsByChecked("CHK");
    sheet2.copyRows({rows:chkRows});
}
```

### Read More
- [copyRow method](./copy-row)
- [addRow method](./add-row)
- [moveRow method](./move-rows)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
