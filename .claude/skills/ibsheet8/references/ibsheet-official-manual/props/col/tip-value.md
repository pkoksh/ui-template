---
KEY: tipValue
KIND: column-property
PATH: props/col/tip-value
ALIAS: 열의, 내용이, 특정값일때, 풍선도움말로, 보여줄
ALIAS_EN: tip, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/tip-value
---
# Tip+Value ***(col)***

> 열의 내용이 특정값일때 풍선도움말로 보여줄 문자를 설정합니다.

> 가령 TipY:"선택하셨습니다", TipN:"취소하셨습니다." 식으로 `Tip` 과 뒤에 `Value`를 결합한 속성명으로 보여질 문자를 설정합니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|풍선도움말에 보여질 문자열|

### Example
```javascript
//특정 열에 값이 Re인 경우 풍선도움말에 "반려되었습니다"가 표시됨
options.Cols = [
    ...
    {Type: "Text", Tip: 1, TipRe: "반려되었습니다", Name: "procs", Width: 120 ...},
    ...
];
```

### Read More
- [Tip col](./tip-value)
- [TipClass col](./tip-class)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
