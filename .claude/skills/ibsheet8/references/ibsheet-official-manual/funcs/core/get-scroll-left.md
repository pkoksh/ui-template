---
KEY: getScrollLeft
KIND: method
PATH: funcs/core/get-scroll-left
ALIAS: sheet.getScrollLeft, getScrollLeft(), 가로스크롤, 바의, 위치를, 단위로, 확인합니다
ALIAS_EN: get, scroll, left
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-scroll-left
---
# getScrollLeft ***(method)***
> 가로스크롤 바의 위치를 pixel단위로 확인합니다.

### Syntax
```javascript
number getScrollLeft( section );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|section|`number`|선택|틀고정을 기준으로 한 좌우 영역
`0`:좌측
`1`:가운데 (`default`)
`2`:우측|


### Return Value
***number*** : 가로 스크롤바에 대해 x축으로 이동한 거리(pixel단위)

### Example
```javascript
//현재 가로스크롤 바의 위치를 얻는다.
var offset = sheet.getScrollLeft(1);
//다시 렌더링
sheet.rerender();
//원래 위치로 이동시킴
sheet.setScrollLeft(offset , 1 );
```

### Read More
- [setScrollLeft method](./set-scroll-left)
- [getScrollTop method](./get-scroll-top)
- [setScrollTop method](./set-scroll-top)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
