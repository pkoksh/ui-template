---
KEY: refreshPage
KIND: method
PATH: funcs/core/refresh-page
ALIAS: sheet.refreshPage, refreshPage(), 지정한, 페이지를, 렌더링
ALIAS_EN: refresh, page, render, draw
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/refresh-page
---
# refreshPage ***(method)***
> 지정한 페이지를 렌더링 합니다.

> [setAttribute](./set-attribute)함수나 데이터에 대해 직접 접근하여 수정한 내용을 한꺼번에 화면에 반영할 때 사용됩니다.


### Syntax
```javascript
void refreshPage( page, always );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|page|`object`|필수|[페이지 객체](/docs/appx/page-object)|
|always|`boolean`|선택|보여지지 않는 페이지에 대한 렌더링 여부
`0(false)`:보여지지 않는 페이지에 대해 렌더링 하지 않음 (`default`)
`1(true)`:보여지지 않는 페이지에 대해 렌더링 실행|
### Return Value
***none***

### Example
```javascript
var fr = sheet.getFocusedRow();

//선택한 행의 AMOUNT01열의 색상을 붉은색으로 변경한다.
fr["AMOUNT01Color"] = "#FF0000"
var nr = sheet.getNextRow(fr);
//선택한 행의 아래 행에 AMOUNT05열의 글자색을 파란색으로 변경한다.
nr["AMOUNT05FontColor"] = "#0000FF";

//해당 페이지에서 수정된 내용을 화면에 반영한다.
sheet.refreshPage( {page:sheet.getFocusedPage()} );
```

### Read More

- [setAttribute method](./set-attribute)
- [rerender method](./rerender)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
