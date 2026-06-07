---
KEY: onBeforeGoToPage
KIND: event
PATH: events/on-before-go-to-page
ALIAS: 다른, 페이지로, 이동, 호출되는, 이벤트입니다
ALIAS_EN: on, before, go, to, page
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-go-to-page
---
# onBeforeGoToPage ***(event)***
> 다른 페이지로 이동 시 호출되는 이벤트입니다.

> 리턴 값이 `1(true)`인 경우 페이지를 이동하지 않습니다.

> 새로운 페이지로 스크롤을 내려서 이동하고 [SearchMode](/docs/props/cfg/search-mode): 2, 3에서 포커스를 이동시에는 호출되지 않습니다.

### Syntax

```
    onBeforeGoToPage:function(paramObject) {

    }
or
    sheet.bind("onBeforeGoToPage" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|시트 객체|
|page|`object`|이동할 페이지의 [페이지 객체](/docs/appx/page-object)|
|pagepos|`number`|이동할 페이지 번호(`0부터 시작`)|

### Return
***boolean***

### Example
```javascript
// 현재 페이지의 col이라는 열이름의 열에 있는 모든 셀들이 체크되었는지 확인하는 함수
// 체크된 경우 true 아닌 경우 false 리턴
function CheckAllChecked(sheet, col) {
    var row = sheet.getFocusedPage().firstChild;
    while (row) {
        if (!row[col]) return false;
        row = row.nextSibling;
    }
    return true;

}

options.Events = {
    onBeforeGoToPage:function(evtParam){
        // 현재 페이지의 sCheck열이 모두 체크된 경우 페이지 이동이 가능합니다.
        if (CheckAllChecked(params.sheet, "sCheck")) return false;
        alert("체크 덜했습니다.")
        return true;
    }
}
```

### Read More

- [goToPage method](/docs/funcs/core/go-to-page)
- [onAfterGoToPage event](./on-after-go-to-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
