---
KEY: showMenu
KIND: method
PATH: funcs/core/show-menu
ALIAS: sheet.showMenu, showMenu(), 특정, 위치에, 컨텍스트, 메뉴을, 보여
ALIAS_EN: show, menu
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-menu
---
# showMenu ***(method)***
> 특정 셀 위치에 컨텍스트 메뉴을 보여 줍니다.


###
![컨텍스트 메뉴](/assets/imgs/showMenu.png "마우스 커서가 있는 위치에 컨텍스트메뉴를 띄움")
<!-- IMAGE: 스크린샷/예시 이미지 - 컨텍스트 메뉴 -->


### Syntax
```javascript
mixed showMenu( row, col, menu, pos, func, init, always, cursor );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|열이름|
|menu|`object`|필수|컨텍스트 메뉴를 구성하는 JSON 객체
|pos|`object`|선택|메뉴가 표시될 위치([Position appendix참고](/docs/appx/position))
|func|`function`|선택|컨택스트 메뉴에서 사용자가 선택시 `callback` 함수
|init|`array[string]`|선택|메뉴 내 Enum, Edit, Bool 타입인 아이템들의 초기값 설정
 Bool : 메뉴 아이템 Name의 배열로 체크 표시
 - ex) ["aa","bb"]는 Name이 aa, bb인 체크박스들은 체크 표시.
Edit, Bool : 메뉴 아이템 Name과 Value의 key-value 문자열 배열 
 - ex) 1["aa:1","bb:2"]는 Name이 aa, bb인 아이템에 1,2가 각 화면에 표시.
|always|`boolean`|선택|이미 메뉴가 보여지고 있다면 계속 보여줄지에 대한 여부
`0(false)`:컨텍스트 메뉴 보임/감춤 Toogle (`default`)
`1(true)`:컨텍스트 메뉴 보임|
|cursor|`boolean`|선택|메뉴의 `Value` 값과 셀 값이 일치하는 경우 해당 메뉴에 포커스를 위치 시킬 지에 대한 여부
`0(false)`:포커스 발생 시키지 않음 (`default`)
`1(true)`: 메뉴의 `Value`와 셀 값이 일치하는 경우 해당 메뉴에 포커스 발생

**<mark>주의</mark> : 해당 기능은 `init` 기능과 같이 사용할 수 없습니다. `init` 기능을 사용하는 경우 `cursor` 기능은 무시됩니다.**


### Return Value
***mixed( `object` )***

메뉴가 나타나면 메뉴 객체 ex(  {Items:[...],Names:[...]} )

안나타나는 경우(이미 보여지던 메뉴가 있어서 닫히는 경우)에는 `null`이 리턴

### Example
```javascript
function popup(){
	//메뉴 구조
	var menu = {
		Items : [ // 메뉴에서 아이템들간 트리 구조를 형성합니다.
			{ Text:'결제문서 상신',Name:"A01"},
			{ Text:'결제문서 임시저장',Name:"A02"},
			{ Text:'결제문서 파기/제거',Name:"A03"}
		]
	};
	//특정 셀 위에 컨텍스트 메뉴를 보여준다.
	sheet.showMenu( {
	    row:sheet.getRowById("AR2"),
	    col:"image02",
	    menu:menu,
	    func:function(evt){
	        if(evt.Name == "A01"){
	            //상신작업
	        }
	    }
	});
}

```

### Read More

- [Menu appendix](/docs/appx/menu)
- [closeDialog method](./close-dialog)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.9|`cursor` 기능 추가|
