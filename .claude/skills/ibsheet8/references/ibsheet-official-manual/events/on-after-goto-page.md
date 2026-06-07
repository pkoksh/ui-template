---
KEY: onAfterGotoPage
KIND: event
PATH: events/on-after-goto-page
ALIAS: 다른, 페이지로, 이동, 호출되는, 이벤트입니다
ALIAS_EN: on, after, goto, page
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-goto-page
---
# onAfterGotoPage ***(event)***
> 다른 페이지로 이동 후 호출되는 이벤트입니다.

> 새로운 페이지로 스크롤을 내려서 이동하고 [SearchMode](/docs/props/cfg/search-mode): 2, 3 에서 포커스를 이동시에는 호출되지 않습니다.

### Syntax

```
    onAfterGotoPage:function(paramObject) {

    }
or
    sheet.bind("onAfterGotoPage" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|시트 객체|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onAfterGotoPage:function(evtParam){
        // 다음 페이지로 이동한 후 첫 행의 첫번째 열에 포커싱을 합니다.
        evtParam.sheet.focus({row: evtParam.sheet.getFocusedPage().firstChild, col: evtParam.sheet.getFirstCol()});
    }
}
```

### Read More

- [goToPage event](/docs/funcs/core/go-to-page)
- [onBeforeGoToPage event](./on-before-go-to-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
