---
KEY: goToPrevPage
KIND: method
PATH: funcs/core/go-to-prev-page
ALIAS: sheet.goToPrevPage, goToPrevPage(), 현재, 페이지의, 이전, 페이지로, 이동합니다
ALIAS_EN: go, to, prev, page
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/go-to-prev-page
---
# goToPrevPage ***(method)***
> 현재 페이지의 이전 페이지로 이동합니다.



### Syntax
```javascript
boolean goToPrevPage();
```

### Return Value
***boolean*** : 페이지 이동 성공여부(현재 페이지가 첫페이지인 경우 false가 리턴)

### Example
```javascript
//이전페이지로 이동
function PrevPage(){
    var rtn = sheet.goToPrevPage();
    if (!rtn) {
        alert("첫 페이지 입니다.");
    }
}
```

### Read More
- [goToPage method](./go-to-page)
- [goToNextPage method](./go-to-next-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
