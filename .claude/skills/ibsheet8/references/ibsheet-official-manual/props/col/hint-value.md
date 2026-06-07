---
KEY: hintValue
KIND: column-property
PATH: props/col/hint-value
ALIAS: 힌트는, 열의, 너비가, 좁아, 셀의
ALIAS_EN: hint, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/hint-value
---
# HintValue ***(col)***

> 힌트는 열의 너비가 좁아 셀의 내용의 일부가 안보일 때, 마우스 커서가 올라간 셀에 한해 일시적으로 셀의 너비를 늘려 안보이던 뒷 내용을 보여주는 기능입니다.

> 힌트기능 사용시 원래 셀의 내용 대신에 설정한 내용이 보여지게끔 설정합니다.


###
![힌트활성화](/assets/imgs/hint1.png "마우스 커서가 셀에 올라갔을때 힌트를 통해 감춰진 부분이 보여짐")
<!-- IMAGE: 스크린샷/예시 이미지 - 힌트활성화 -->

[**힌트기능 사용 예**]

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|힌트기능 활성화시(마우스커서가 셀 위에 Over시) 보여질 문자|



### Example
```javascript
//특정 열에 힌트기능을 사용합니다.
options.Cols = [
    ...
    {Type: "Text", HintValue: "이번 분기는 마감되었습니다.", ShowHint: 2, Name: "DESC", Width: 120 ...},
    ...
];
```

### Read More
- [ShowHint col](./show-hint)
- [ShowHint row](/docs/props/row/show-hint)
- [onShowHint event](/docs/events/on-show-hint)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
