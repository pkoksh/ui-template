---
KEY: disposeAll
KIND: static-member
PATH: static/dispose-all
ALIAS: 객체, 안에, 포함된, 모든, 시트객체
ALIAS_EN: dispose, all
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/static/dispose-all
---
# disposeAll ***(static)***

> javascript Window 객체 안에 포함된 모든 `시트객체`를 제거합니다.

> SPA(Single Page Application)형식의 화면을 개발하다보면, 페이지 이동(컴포넌트 로드)시 DOM 안에 element는 제거되지만, Window객체의 javascript 전역변수는 유지되는 것을 볼 수 있습니다.

> 시트도 생성시 전역변수 형태로 Window에 담기므로 SPA형식의 시스템을 구축시에는 페이지 이동(컴포넌트 로드)중에 해당 함수를 호출하여 Window의 시트객체를 클리어 주어야 합니다.

### Syntax
```javascript
void IBSheet.disposeAll(dialogs, unload);
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|dialogs|`boolean`|선택|`static` 메소드들에 의해 생성된 달력, 메뉴, 다이얼로그들을 모두 제거합니다.|
|unload|`boolean`|선택|SPA 환경에서 컴포넌트 마다 `ibsheet.js`를 불러오는 경우, 시트를 완전히 제거할 때 시트 관련 메모리를 해제합니다.|

### Return Value
***none***

### Example
```javascript
//SPA형식으로 페이지를 로드
function movePage(url){
    //페이지 이동 전에 현재 Window의 시트를 클리어
    IBSheet.disposeAll(true);

    //새 페이지로 이동
    $("#contents").load(url, function(response, status, xhr) {
        //이동후 작업
    });
}
```
### Read More
- [IBSheetLoader](https://ibsheet.github.io/loader-manual/)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.3|`unload` 인자 추가|
