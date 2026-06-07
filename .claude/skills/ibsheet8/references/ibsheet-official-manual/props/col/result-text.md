---
KEY: resultText
KIND: column-property
PATH: props/col/result-text
ALIAS: 위배되는, 내용이, 입력시, 으로, 보여줄
ALIAS_EN: result, text
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/result-text
---
# ResultText ***(col)***

> [ResultMask](./result-mask)에 위배되는 내용이 입력시 `alert`으로 보여줄 내용을 설정합니다.




### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|잘못된 내용이 입력시 보여질 경고문 내용|

### Example
```javascript
//이메일 주소 확인
options.Cols = [
    ...
    {Type: "Text",
        ResultMask: "^[\\w\\.\\+%-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,6}$",
        ResultText: "이메일 주소를 확인해 주세요.",
        Name: "sa_email", Width: 120 ...},
    ...
];
```
### Read More
- [ResultMask col](./result-mask)
- [ResultMessage col](./result-message)
- [EditMask col](./edit-mask)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
