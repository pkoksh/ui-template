---
KEY: renderBody
KIND: method
PATH: funcs/core/render-body
ALIAS: sheet.renderBody, renderBody(), 영역, 데이터부분, 다시, 렌더링
ALIAS_EN: render, body, draw
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/render-body
---
# renderBody ***(method)***
> Body영역(데이터부분)를 다시 렌더링 합니다.

> [setAttribute](./set-attribute)함수나 데이터에 대해 직접 접근하여 수정한 내용을 한꺼번에 화면에 반영할 때 사용됩니다.

> 함수 호출시 시트영역이 한 번 깜빡이게 되고, 지금까지 수정한 내용이 한꺼번에 화면에 표시됩니다.

> `Head`나 `Foot` 영역은 렌더링 되지 않으므로 `Filter` 행이나 `FormulaRow`에 값을 수정시에는 반영되지 않을 수 있습니다.

> 해당 함수는 상당한 리소스를 사용하게 됨으로 빈번하게 호출하지 말고, 업무가 종료되는 시점에서 한 번만 호출하는게 좋습니다.

### Syntax
```javascript
void renderBody();
```

### Return Value
***none***

### Example
```javascript
var fr = sheet.getFocusedRow();

//속성 변경시 render를 0으로 설정하여 화면에 반영하지 않는다.
sheet.setAttribute({row:fr, attr:"Color", val:"#DDDDDD", render:0});
sheet.setAttribute({row:fr, col:"AMOUNT02", attr:"FontColor", val:"#FF0000", render:0});

//최종 수정된 내용을 화면에 반영한다.
sheet.renderBody();
```

### Read More

- [setAttribute method](./set-attribute)
- [rerender method](./rerender)
<!--!
- `[비공개]` [render method](./render) 
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
