---
KEY: buttonClass
KIND: column-property
PATH: props/col/button-class
ALIAS: 열의, 이고, 속성의, 값이, 경우
ALIAS_EN: button, class
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/button-class
---
# !ButtonClass ***(col)***
> 열의 [Type](./type)이 `Button`이고 [Button](./button)속성의 값이 `Class`인 경우, 셀 버튼에 적용할 css class 명을 설정합니다.

> 여기서 설정한 값은 `"IBTool" + "설정명"` 의 이름으로 셀의 clsss로 적용됩니다.

> 가령 `ButtonClass`에 "MYBTN"으로 값을 설정하면 실제 열에는 "IBToolMYBTN"의 css class 가 적용됩니다.



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|열에 부여할 css class 명(","를 이용해서 여러개를 지정도 가능).|

### Example
```javascript
options.Cols = [
    ...
    //버튼 열에 클래스로 IBToolBTN,IBToolGREY를 적용
    {Type: "Button", Button: "Class", ButtonClass: "BTN,GREY", Name: "conf_btn", Width: 120, ...},
    ...
];
```

### Read More
- [Button col](./button)
- [ButtonText col](./button-text)
- [UseButton cfg](/docs/props/cfg/use-button)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
