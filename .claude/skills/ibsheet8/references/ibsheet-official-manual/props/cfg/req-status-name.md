---
KEY: reqStatusName
KIND: config-property
PATH: props/cfg/req-status-name
ALIAS: 저장, 함수, 호출시, 행의, 상태
ALIAS_EN: req, status, name, save, persist, store, function, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/req-status-name
---
# ReqStatusName ***(cfg)***

> 저장 함수([doSave](/docs/funcs/core/do-save), [getSaveString](/docs/funcs/core/get-save-string), [getSaveJson](/docs/funcs/core/get-save-json)) 호출시 각 행의 상태(`Added`, `Changed`, `Deleted`)에 대해서 전달하는 변수 명을 설정합니다.

> 별도의 설정이 없는 경우에는 `"STATUS"`로 전달 됩니다. 

> 서버로 전달할 상태값은 `local/언어.js` 파일 안에 문자열(`"ReqStatusAdded": "Added"`\(I\), `"ReqStatusChanged": "Changed"`\(U\), `"ReqStatusDeleted": "Deleted"`\(D\), `"ReqStatusEmpty": ""`\(R\))을 수정하면 됩니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|서버로 전송될 상태 명 (`default: STATUS`)|


### Example
```javascript
options.Cfg = { "ReqStatusName": "mySheet_st" };
```
//실제 서버로 전송시 다음과 같이 전달 됩니다.
```javascript
var saveStr = sheet.getSaveString();
//saveStr
//mySheet_st=Changed&ColName1=chris&ColName2=43 ...
```
### Read More
- [doSave method](/docs/funcs/core/do-save)
- [getSaveString method](/docs/funcs/core/get-save-string)
- [getSaveJson method](/docs/funcs/core/get-save-json)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
