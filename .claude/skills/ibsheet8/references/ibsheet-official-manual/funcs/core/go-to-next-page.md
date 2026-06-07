---
KEY: goToNextPage
KIND: method
PATH: funcs/core/go-to-next-page
ALIAS: sheet.goToNextPage, goToNextPage(), 현재, 페이지의, 다음, 페이지로, 이동합니다
ALIAS_EN: go, to, next, page
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/go-to-next-page
---
# goToNextPage ***(method)***
> 현재 페이지의 다음 페이지로 이동합니다.



### Syntax
```javascript
boolean goToNextPage();
```

### Return Value
***boolean*** : 페이지 이동 성공여부(이미 마지막 페이지인 경우 false가 리턴)

### Example
```javascript
//다음페이지로 이동
function NextPage(){
    var rtn = sheet.goToNextPage();
    if(!rtn) {
        alert("마지막 페이지 입니다.");
    }
}
```

### Read More
- [goToPage method](./go-to-page)
- [goToPrevPage method](./go-to-prev-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
