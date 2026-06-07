---
KEY: buttonClass
KIND: cell-property
PATH: props/cell/button-class
ALIAS: 열의, 이고, 속성의, 값이, 경우
ALIAS_EN: button, class
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/button-class
---
# !ButtonClass ***(cell)***
> 열의 [Type](/docs/props/cell/type)이 `Button`이고 **[Button](/docs/props/cell/button)속성의 값이 "Class"인 경우**, 셀 버튼에 적용할 css class 명을 설정합니다.

> 여기서 설정한 값은 "IBTool" + "설정명" 의 이름으로 셀의 clsss로 적용됩니다.

> 가령 ButtonClass에 "MYBTN"으로 값을 설정하면 실제 열에는 "IBToolMYBTN"의 css class 가 적용됩니다.



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|열에 부여할 css class 명(","를 이용해서 여러개를 지정도 가능).|

### Example
```javascript
//1. 메소드를 통해 속성 설정
sheet.setAttribute(sheet.getRowById("AR99"), "EDate", "ButtonClass", "MYBTN" );


//2. 객체에 직접 접근해서 속성 설정(열이름이 CLS 로 가정)
var ROW = sheet.getRowById("AR10");
ROW["CLSButtonClass"] = "BTN";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성설정(열이름이 CLS 로 가정)
{
    data:[
        {... , "CLSButtonClass":"MYBTN" , ...}
    ]
}
```

### Read More
- [AddClass cell](/docs/props/cell/add-class)
- [Button col](/docs/props/col/button)
- [ButtonText col](/docs/props/col/button-text)
- [UseButton cfg](/docs/props/cfg/use-button)
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
