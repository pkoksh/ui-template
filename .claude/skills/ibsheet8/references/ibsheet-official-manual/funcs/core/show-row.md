---
KEY: showRow
KIND: method
PATH: funcs/core/show-row
ALIAS: sheet.showRow, showRow(), 숨겨진, 행을, 보여지게
ALIAS_EN: show, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-row
---
# showRow ***(method)***
> 숨겨진 행을 보여지게 합니다.

> 대량으로 행을 감추거나 보이게 끔 하고자 할때는 `norender`값을 `1`로 설정하여 작업하신 후, [renderBody()](./renderBody)나 [rerender()](./rerender)함수를 호출하여 한꺼번에 화면에 반영하는 것이 좋습니다.


### Syntax
```javascript
void showRow( row, norender );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|감춰진 [데이터 로우 객체](/docs/appx/row-object)|
|norender|`boolean`|선택<mark>(사용주의)</mark>|즉시 화면에 반영할 것인지 여부
해당 기능을 사용한 뒤, 다른 동작을 실행 할 경우 `renderBody()`를 반드시 먼저 실행 해야 합니다.
`0(false)`:즉시 반영 (`default`)
`1(true)`:반영 안함
|


### Return Value
***none***

### Example
```javascript
//35번 행을 보이게 한다.
sheet.showRow( sheet.getRowByIndex(35) );


//특정 행을 모두 보입니다.
var rows = sheet.getDataRows();
for(var i=0; i<rows.length; i++){
    if(rows[i]["deptNm"] != "지원부서"){
        // 행을 보일때 렌더링을 일단 막음
        sheet.showRow( {'row':rows[i],'norender':1});
    }
}
//데이터 영역에 변경된 내용을 한꺼번에 렌더링 한다.
sheet.renderBody();
```

### Read More

- [hideRow method](./hide-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
