---
KEY: hideRow
KIND: method
PATH: funcs/core/hide-row
ALIAS: sheet.hideRow, hideRow(), 지정한, 행을, 감춥니다
ALIAS_EN: hide, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/hide-row
---
# hideRow ***(method)***
> 지정한 행을 감춥니다.

> 두번째 `del` 인자의 값이 `1(true)` 일 경우 실제 DOM을 삭제하고 숨겨집니다. ([SearchMode](/docs/props/cfg/search-mode) : 2 일 경우 사용)

> 대량으로 행을 감추거나 보이게 끔 하고자 할때는 `norender`값을 `1`로 설정하여 작업하신 후, `render()함수`를 호출하여 한꺼번에 화면에 반영하는 것이 좋습니다.


### Syntax
```javascript
void hideRow( row, del, norender, nomerge );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|감출 [데이터 로우 객체](/docs/appx/row-object)|
|del |`boolean`|선택<mark>(사용주의)</mark>|DOM 삭제 여부 
해당 기능은 **권장하지 않습니다**.
`0(false)`:DOM 삭제 안함 (`default`)
`1(true)`:DOM 삭제|
|norender|`boolean`|선택<mark>(사용주의)</mark>|즉시 화면에 반영할 것인지 여부
해당 기능을 사용한 뒤, 다른 동작을 실행 할 경우 `renderBody()`를 반드시 먼저 실행 해야 합니다.
`0(false)`: 즉시 반영 (`default`)
`1(true)`: 반영 안함

|nomerge|`boolean`|선택|[DataMerge cfg](/docs/props/cfg/data-merge) 값이 `0` 외의 값일 때, 머지 계산을 바로 할 것인지 여부
`0(false)`:행 삭제 후, 머지 계산 (`default`)
`1(true)`:행 삭제 후, 머지 계산 안함|


### Return Value
***none***

### Example
```javascript
//44번째행을 감춥니다.
sheet.hideRow( sheet.getRowByIndex(44) );


//특정 행을 모두 감춥니다.
var rows = sheet.getDataRows();
for(var i=0; i<rows.length; i++){
    if(rows[i]["deptNm"] != "지원부서"){
        // 행을 감출때 렌더링을 일단 막음
        sheet.hideRow( {'row':rows[i],'norender':1});
    }
}
//데이터 영역에 변경된 내용을 한꺼번에 렌더링 한다.
sheet.renderBody();
```

### Read More
- [showRow method](./show-row)
- [SearchMode cfg](/docs/props/cfg/search-mode)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
