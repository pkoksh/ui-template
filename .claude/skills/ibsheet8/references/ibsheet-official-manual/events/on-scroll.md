---
KEY: onScroll
KIND: event
PATH: events/on-scroll
ALIAS: 시트의, 메인, 스크롤, 가로, 세로
ALIAS_EN: on, scroll
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-scroll
---
# onScroll ***(event)***
> 시트의 메인 스크롤(가로,세로)이 움직인 후 발생하는 이벤트입니다.

> 스크롤이 움직인 후 항상 발생하기 때문에 많은 작업을 여기서 처리시 **성능이 저하**될수 있습니다.

### Syntax

```
    onScroll : function(paramObject) {

    }
or
    sheet.bind("onScroll" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|스크롤을 움직인 시트 객체|
|hpos|`number`|움직인 후 중간 섹션(section)의 scrollLeft(pixel 단위)|
|vpos|`number`|움직인 후 중간 섹션(section)의 scrollTop(pixel 단위)|
|oldhpos|`number`|움직이기전 중간 섹션(section)의 scrollLeft(pixel 단위)|
|oldvpos|`number`|움직이기전 중간 섹션(section)의 scrollTop(pixel 단위)|
|hpos0|`number`|움직인 후 왼쪽 섹션(section)의 scrollLeft(pixel 단위)|
|oldhpos0|`number`|움직이기전 왼쪽 섹션(section)의 scrollLeft(pixel 단위)|
|hpos2|`number`|움직인 후 오른쪽 섹션(section)의 scrollLeft(pixel 단위)|
|oldhpos2|`number`|움직이기전 오른쪽 섹션(section)의 scrollLeft(pixel 단위)|


### Return
***none***


### Example
```javascript
options.Events = {
    onScroll:function(evtParam){
        // 스크롤을 내린 직후 보이는 화면의 첫 행의 첫번째 열에 포커싱을 합니다.
        evtParam.sheet.focus({row: evtParam.sheet.getShownRows()[0], col: evtParam.sheet.getFirstCol()});
    }
}
```

### Read More
- [onVScrollEndPoint event](./on-v-scroll-end-point)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
