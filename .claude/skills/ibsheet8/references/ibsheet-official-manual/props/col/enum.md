---
KEY: enum
KIND: column-property
PATH: props/col/enum
ALIAS: 이나, 보여질, 설정합니다
ALIAS_EN: enum
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/enum
---
# Enum ***(col)***
> [Type](/docs/appx/type)이 `Enum`이나 `Radio`일 때 보여질 item을 설정합니다.

> 첫번째 글자를 구분자로 설정하게 됩니다.

> [EnumKeys](./enum-keys) 속성을 통해 item의 실제값을 설정할 수 있습니다.

###
![Enum타입](/assets/imgs/enum1.png "Enum")
<!-- IMAGE: 스크린샷/예시 이미지 - Enum타입 -->
[그림1]

![Radio타입](/assets/imgs/radioEnum.png "Radio")
<!-- IMAGE: 스크린샷/예시 이미지 - Radio타입 -->
[그림2]



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|첫번째 글자를 구분자로 하는 문자열 (ex:"#사장#부사장#전무#상무#이사#부서장#차장#과장#대리#주임#사원")|



### Example
```javascript
//Enum 열에 item을 설정한다.
options.Cols = [
    ...
    {Type: "Enum", Name: "relation", Enum: "|직계존속|직계비속|배우자|자녀" ...},
    또는 
    {Type: "Enum", Name: "relation", Enum: "#직계존속#직계비속#배우자#자녀" ...},
    ...
];
```

### Read More
- [EnumFilter col](./enum-filter)
- [EnumKeys col](./enum-keys)
- [IconAlign col](./icon-align)
- [MenuHSeparator cfg](/docs/props/cfg/menu-h-separator)
- [Related col](./related)
- [ShowImage cfg](/docs/props/cfg/showImage)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
