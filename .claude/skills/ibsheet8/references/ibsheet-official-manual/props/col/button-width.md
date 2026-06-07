---
KEY: buttonWidth
KIND: column-property
PATH: props/col/button-width
ALIAS: 이고, 속성의, 값이, 경우, 셀에
ALIAS_EN: button, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/button-width
---
# ButtonWidth ***(col)***
> [Type](/docs/appx/type)이 `Button`이고, [Button](./button)속성의 값이 `Button`인 경우, 셀에 생성되는 버튼 객체의 너비를 설정합니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|버튼 객체의 너비|

### Example
```javascript
//버튼의 너비를 80px로 설정
options.Cols = [
    ...
    {Type: "Button", Button: "Button", Name: "btn1", ButtonWidth: 80 ...},
    ...
];
```

### Read More
- [Button col](./button)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
