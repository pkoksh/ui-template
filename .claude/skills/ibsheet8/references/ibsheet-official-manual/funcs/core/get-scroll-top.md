---
KEY: getScrollTop
KIND: method
PATH: funcs/core/get-scroll-top
ALIAS: sheet.getScrollTop, getScrollTop(), 세로스크롤바의, 위치를, 확인합니다
ALIAS_EN: get, scroll, top
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-scroll-top
---
# getScrollTop ***(method)***
> 세로스크롤바의 위치를 확인합니다.

### Syntax
```javascript
number getScrollTop();
```


### Return Value
***number*** : 세로 스크롤바에 대해 y축으로 이동한 거리(pixel단위)

### Example
```javascript
//현재 세로스크롤 바의 위치를 얻는다.
var offset = sheet.getScrollTop();
//다시 렌더링
sheet.rerender();
//원래 위치로 이동시킴
sheet.setScrollTop(offset);
```

### Read More
- [setScrollTop method](./set-scroll-top)
- [getScrollLeft method](./get-scroll-left)
- [setScrollLeft method](./set-scroll-left)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
