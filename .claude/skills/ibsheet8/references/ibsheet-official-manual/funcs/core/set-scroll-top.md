---
KEY: setScrollTop
KIND: method
PATH: funcs/core/set-scroll-top
ALIAS: sheet.setScrollTop, setScrollTop(), 세로, 스크롤, 바를, 단위로, 이동시킵니다
ALIAS_EN: set, scroll, top
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-scroll-top
---
# setScrollTop ***(method)***
> 세로 스크롤 바를 pixel단위로 이동시킵니다.

### Syntax
```javascript
boolean setScrollTop( pos );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|pos|`number`|필수|y축 기준 이동할 거리|

### Return Value
***boolean*** : 이동여부 (동일한 위치로 pos 설정시 `0(false)` 리턴)

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
- [getScrollTop method](./get-scroll-top)
- [getScrollLeft method](./get-scroll-left)
- [setScrollLeft method](./set-scroll-left)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
