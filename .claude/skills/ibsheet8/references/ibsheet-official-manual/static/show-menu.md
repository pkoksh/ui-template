---
KEY: showMenu
KIND: static-member
PATH: static/show-menu
ALIAS: 원하는, 위치에, 컨텍스트, 메뉴를, 띄웁니다
ALIAS_EN: show, menu
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/static/show-menu
---
# showMenu ***(static)***

> 원하는 위치에 컨텍스트 메뉴를 띄웁니다. 

> 생성된 메뉴 객체를 리턴합니다.

### Syntax
```javascript
void IBSheet.showMenu(menu, pos, func, init);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|menu|`object`|필수|컨텍스트 메뉴로 보여질 메뉴객체([Menu appendix참고](/docs/appx/menu))|
|pos|`object`|선택|메뉴가 표시될 위치([Position appendix참고](/docs/appx/position))|
|func|`function`|선택|메뉴 내에서 `item`선택하거나 버튼 클릭시 콜백 함수([Menu appendix의 OnSave참고](/docs/appx/menu))|
|init|`array[string]`|선택|메뉴 내에 `Bool, Enum, Edit` 사용시 초기화 값
ex:
`Bool`의 경우 ["confirm", "reject"] 식으로 `Name`을 배열로 넣으면 체크됨
`Enum`의 경우 ["country: 1"] 식으로 "name: value"식으로 입력
`Edit`의 경우 ["inp1:사유를 입력해주세요"] 식으로 입력|

### Return Value
***object***

### Example
```javascript
//특정 버튼 클릭시 버튼 하단에 컨텍스트 메뉴를 띄우자
document.getElementById("btnConfirm").addEventListener("click", function(){
    var menu = {
      Items: [
            {Text: "결제작업", Caption: 1},
            {Name: "confirmAll", Text: "전결", Bool: 1, Group: 1},
            {Name: "confirm", Text: "결제", Bool: 1, Group: 1},
            {Name: "reject", Text: "반려", Bool: 1, Group: 1},
            {Name: "pendding", Text: "보류", Bool: 1, Group: 1}
        ]
    };
    pos = {"Tag": "btnConfirm"};
    IBSheet.showMenu(menu, pos, function(item,data){
		if (item.Name == "confirmAll") {
			//전결 process..
		} else if (item.Name == "confirm") {
			//결제 process..
		}
    }, ["confirm"]);
},false);

```
### Read More

- [Menu appendix](/docs/appx/menu)
- [Position appendix](/docs/appx/position)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
