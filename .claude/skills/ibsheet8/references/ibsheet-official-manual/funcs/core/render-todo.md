---
KEY: renderTodo
KIND: method
PATH: funcs/core/render-todo
ALIAS: sheet.renderTodo, renderTodo(), 사용하고, 해당, 함수는, 사용하지, 않습니다
ALIAS_EN: render, todo
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/render-todo
---
# !render ***(method)***

> **<mark>`rerender`를 사용하고 해당 함수는 사용하지 않습니다. 비공개 유지</mark>**

> rerender()만 남기고 이 함수는 없애는게 좋을듯.

> 설명을 뭐라고 써야할지 모르겠음.

### Syntax
```javascript
void render();
```

### Return Value
***none***

### Example
```javascript
var fr = sheet.getFocusedRow();

//속성 변경시 render를 0으로 설정하여 화면에 반영하지 않는다.
sheet.setAttribute({row:fr,attr:"Color",val:"#DDDDDD", render:0});
sheet.setAttribute({row:fr,col:"AMOUNT02",attr:"FontColor",val:"#FF0000", render:0});

//최종 수정된 내용을 화면에 반영한다.
sheet.render();
```

### Read More

- [rerender method](./rerender)
- [renderBody method](./render-body)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
