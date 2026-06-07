---
KEY: showPopupMenu
KIND: method
PATH: funcs/core/show-popup-menu
ALIAS: sheet.showPopupMenu, showPopupMenu(), 마우스, 커서가, 있는, 위치에, 컨텍스트
ALIAS_EN: show, popup, menu
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-popup-menu
---
# showPopupMenu ***(method)***
> 마우스 커서가 있는 위치에 컨텍스트 메뉴을 보여 줍니다.

> static [showMenu](/docs/static/show-menu)와 기능은 동일하나, `callback` 이벤트에서 this를 통해 호출한 시트객체를 얻을 수 있다는 점이 다릅니다.

###
![showPopupMenu](/assets/imgs/showPopupMenu.png "마우스 커서가 있는 위치에 컨텍스트메뉴를 띄움")
<!-- IMAGE: 스크린샷/예시 이미지 - showPopupMenu -->


### Syntax
```javascript
void showPopupMenu( menu, func );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|menu|`object`|필수|컨텍스트 메뉴를 구성하는 `JSON 객체`|
|func|`function`|선택|컨택스트 메뉴에서 사용자가 선택시 `callback` 함수|

### Return Value
***none***

### Example
```javascript
//화면 전체에서 마우스 우클릭시 컨텍스트 메뉴를 보여줍니다.
$(document).ready(function(){
    //마우스 우측 클릭시 이벤트
    document.oncontextmenu = function(evt){
	evt.preventDefault();
        //메뉴 구조
	var menu = {
            Items : [ // 메뉴에서 아이템들간 트리 구조를 형성합니다.
                { Text:'결제문서 상신',Name:"A01"},
                { Text:'결제문서 임시저장',Name:"A02"},
                { Text:'결제문서 파기/제거',Name:"A03"}
            ]
	};
        //컨텍스트 메뉴를 보여준다.
	sheet.showPopupMenu( menu , function(str){
	    switch(str.Name){
                case "A01":
                //결제 상신 작업
                break;
                case "A02":
                //임시 저장 작업
                break;
                case "A03":
                //파기/제거 작업
                break;
            }//end swicth
	});
	return false;
    }//end oncontextmenu
});//end ready
```

### Read More

- [closeDialog method](./close-dialog)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
