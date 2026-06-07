---
KEY: noUpload
KIND: column-property
PATH: props/col/no-upload
ALIAS: 지정한, 열의, 저장, 여부를, 설정합니다
ALIAS_EN: no, upload, save, persist, store
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/no-upload
---
# NoUpload ***(col))***

> 지정한 열의 저장 여부를 설정합니다.

> `1(true)` 로 설정한 열의 경우 저장 함수(`doSave, getSaveString 등`) 호출시 상태와 무관한게 서버로 전송되지 않습니다.
### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|서버로 전송 (`default`)|
|`1(true)`|서버로 전송 제외(지정한 컬럼은 서버로 전송하지 않습니다.)|

### Example
```javascript
//특정 열은 저장시 서버로 전송 제외하기
sheetOption.Cols = [
    ...
    {Header: "상세 내용", Type: "Text", Name: "Description", Width: 200, NoUpload: 1},
    ...
];
```
### Read More
- [doSave method](/docs/funcs/core/do-save)
- [getSaveString method](/docs/funcs/core/get-save-string)
- [getSaveJson method](/docs/funcs/core/get-save-json)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
