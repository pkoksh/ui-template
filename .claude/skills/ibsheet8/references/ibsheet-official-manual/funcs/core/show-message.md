---
KEY: showMessage
KIND: method
PATH: funcs/core/show-message
ALIAS: sheet.showMessage, showMessage(), 시트, 영역, 가운데에, 메세지, 띄웁니다
ALIAS_EN: show, message, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-message
---
# showMessage ***(method)***
> 시트 영역 가운데에 메세지 `Dialog`를 띄웁니다. 

> 메세지를 제거하기 전까지는 시트는 비활성화 됩니다 

> 특정 시간 이후에 메세지를 닫거나, 메세지에 확인 등에 버튼을 표시하려면 [showMessageTime()](./show-message-time)함수를 참고해 주세요.
> 메세지 `Dialog` 오픈 전에 [onShowMessage event](/docs/events/on-show-message) 이벤트가 발생합니다.

###
![showMessage](/assets/imgs/showMessage.png "시트 영역 위에 메세지 다이얼로그를 띄움")
<!-- IMAGE: 스크린샷/예시 이미지 - showMessage -->



### Syntax
```javascript
void showMessage( message, importance, type );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|message|`string`|필수|시트 위에 다이얼로그 형태로 보여질 메세지 내용|
|importance|`number`|선택|메세지 중요도 [ 시트 초기화시 `Cfg`설정에 `SuppressMessage`(`default: 3`) 속성값보다 커야만 화면에 보여짐 ]|
|type|`number`|선택|메세지 다이얼로그 생성시 시트 위에 반투명한 레이어로 덮을지 여부
`0`:안덮음 (`default`)
`1`:덮음|

### Return Value
***none***

### Example
```javascript
function popup(){
    sheet.showMessage({message:"결제기한이 만료되었습니다.", importance:4, type:1});
}
```

### Read More

- [showMessageTime method](./show-message-time)
- [hideMessage method](./hide-message)
- [SuppressMessage cfg](/docs/props/cfg/suppress-message)
- [onShowMessage event](/docs/events/on-show-message)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
