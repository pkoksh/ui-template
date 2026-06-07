---
KEY: getNextSiblingRow
KIND: method
PATH: funcs/core/get-next-sibling-row
ALIAS: sheet.getNextSiblingRow, getNextSiblingRow(), 트리나, 그룹사용시, 같은, 부모를, 갖는
ALIAS_EN: get, next, sibling, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-next-sibling-row
---
# getNextSiblingRow ***(method)***

> 트리나 그룹사용시 같은 부모를 갖는 동일 레벨의 아래 행을 리턴합니다.

> 같은 부모 내에서 더 이상 동일레벨이 없는 경우 `null`이 리턴됩니다.

### Syntax
```javascript
object getNextSiblingRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|


### Return Value
***row object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
//AR55행의 아래 자식행들 안에 CHK값이 1인 행을 찾는다.
var row = sheet.getRowById("AR55");
var crow = sheet.getFirstRow(row); //첫번째 자식을 얻음
if(crow){
    var chkRows = [];
    do{
        if (crow["CHK"] == 1) {
            chkRows.push(crow);
        }
        crow = sheet.getNextSiblingRow(crow);
    }while(crow);
}
```
### Read More
- [getPrevSiblingRow method](./get-prev-sibling-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
