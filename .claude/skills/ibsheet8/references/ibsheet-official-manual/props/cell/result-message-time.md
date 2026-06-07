---
KEY: resultMessageTime
KIND: cell-property
PATH: props/cell/result-message-time
ALIAS: 보여질, 시간, 설정합니다, 단위
ALIAS_EN: result, message, time
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/result-message-time
---
# ResultMessageTime ***(cell)***

> [ResultMessage](./result-message)가 보여질 시간(term)을 설정합니다.(ms단위)

> 설정한 시간만큼 메세지가 보여지고 자동으로 사라집니다.

> 이 속성을 설정하지 않으면 "확인"버튼을 누를 때까지 메세지가 보여지게 됩니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|메세지가 보여실 시간(ms단위)|

### Example
```javascript
//이메일 주소 확인
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "ResultMask", "^[\\w\\.\\+%-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,6}$");
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "ResultMessage", "이메일 주소를 확인해 주세요.");
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "ResultMessageTime", 800);
```

### Read More
- [ResultText cell](./result-text)
- [ResultMessage cell](./result-message)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
