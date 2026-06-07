---
KEY: pageObject
KIND: appendix
PATH: appx/page-object
ALIAS: 페이지, 객체, 값이, 아닌, 경우
ALIAS_EN: page, object
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/page-object
---
# 페이지 객체(Page Object)  ***(appendix)***
> (cfg)[SearchMode](/docs/props/cfg/search-mode)의 값이 0이 아닌 경우, 시트는 데이터 행들을 (cfg)[PageLength](/docs/props/cfg/page-length)에서 부여한 갯수 단위로 묶어서 관리합니다.

> 이때 [페이지 객체](/docs/appx/page-object)의 개념이 생겨나는데, [페이지 객체](/docs/appx/page-object)는 자신이 갖고 있는 행들 중 첫번째 행과 마지막 행,그리고 이전 페이지와 다음 페이지에 대한 링크를 갖고 있습니다.

> 특히 페이지 네비게이션을 갖는 SearchMode:4를 사용하는 경우에는, [goToPage()](/docs/funcs/core/go-to-page)와 같은 함수를 통해 페이지 단위로 이동할 수 있습니다.


>**<mark>주의</mark> : Page 객체의 index는 0 부터 시작합니다.**


## Page 객체 얻기
getPage로 시작하는 몇가지 함수를 통해 페이지 객체를 얻을 수 있습니다.
```javascript
var page = sheet.getPageByIndex(3); //3번 페이지 객체를 얻습니다.
```


## Page 객체의 링크정보
|Name|Description|
|---|---|
|nextSibling|다음 [페이지 객체](/docs/appx/page-object)|
|previousSibling|이전 [페이지 객체](/docs/appx/page-object)|
|firstChild|페이지가 갖고 있는 행들 중 첫번째 행|
|lastChild|페이지가 갖고 있는 행들 중 마지막 행|
|parentNode|부모행 객체|
|childNodes.length|페이지가 갖고 있는 행의 개수|

```javascript
function moveNextPage(){
    //현재 보여지는 첫번째 행으로 부터 현재 페이지를 얻음.
    var page = sheet.getPageByRow( sheet.getShownRows()[0] );
    //
    if(!page.nextSibling){
        sheet.showMessage("마지막 페이지 입니다.",1200);
    }else{
        sheet.goToPage(page.nextSibling);
    }


    //첫번째 페이지로 이동하기
    sheet.goToPage(0);
}
```
### Read More
- [getShownRows method](/docs/funcs/core/get-shown-rows)
- [getPageByIndex method](/docs/funcs/core/get-page-by-index)
- [getPageByRow method](/docs/funcs/core/get-page-by-row)
- [goToPage method](/docs/funcs/core/go-to-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
