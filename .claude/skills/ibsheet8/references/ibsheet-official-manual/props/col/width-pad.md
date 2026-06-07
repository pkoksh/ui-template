---
KEY: widthPad
KIND: column-property
PATH: props/col/width-pad
ALIAS: 속성을, 이용하여, 우측에, 작은, 버튼을
ALIAS_EN: width, pad
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/width-pad
---
# WidthPad ***(col)***
> [Button](./button)속성을 이용하여 셀 우측에 작은 버튼을 표시할때 버튼의 너비를 설정합니다.

> 너비는 pixel단위로 설정됩니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|우측 버튼의 너비|

### Example
```javascript
options.Cols = [
    ...
    //셀 우측에 "확인"버튼을 표시한다.
    {Type: "Text", Button: "Button", ButtonText: "확인", WidthPad: 25, Name: "conf_btn", Width: 120, ...},
    ...
];
```

### Read More
- [Button col](./button)
- [UseButton cfg](/docs/props/cfg/use-button)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
