---
KEY: rerender
KIND: method
PATH: funcs/core/rerender
ALIAS: sheet.rerender, rerender(), 시트, 전체, 영역을, 다시, 렌더링
ALIAS_EN: rerender, sheet, grid, all, total, render, draw
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/rerender
---
# rerender ***(method)***
> 시트 전체 영역을 다시 렌더링 합니다.

> [setAttribute](./set-attribute)함수나 데이터에 대해 직접 접근하여 수정한 내용을 한꺼번에 화면에 반영할 때 사용됩니다.

> 함수 호출시 시트영역이 한 번 깜빡이게 되고, 지금까지 수정한 내용이 한꺼번에 화면에 표시됩니다.

> 해당 함수는 상당한 리소스를 사용하게 됨으로 빈번하게 호출하지 말고, 업무가 종료되는 시점에서 한 번만 호출하는게 좋습니다.

### Syntax
```javascript
void rerender( scroll , sync );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|scroll|`boolean`|선택|스크롤 바의 위치를 렌더링 이전과 동일하게 유지 여부
`0(false)`:스크롤 바의 위치 유지 안함
`1(true)`:스크롤 바의 위치를 렌더링 후에도 유지 (`default`)|
|sync|`boolean`|선택|렌더링 작업을 동기로 처리 여부
`0(false)`:비동기 방식 (`default`)
`1(true)`:동기 방식|

### Return Value
***none***

### Example
```javascript
//일부 열을 감춘다.
sheet.Cols["AMT"]["Visible"] = 0;
sheet.Cols["EMP_ID"]["Visible"] = 0;
sheet.Cols["INDATE"]["Visible"] = 0;

//최종 수정된 내용을 화면에 반영한다.
sheet.rerender();
```

### Read More

- [renderBody method](./render-body)
<!--!
- `[비공개]` [render method](./render)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
