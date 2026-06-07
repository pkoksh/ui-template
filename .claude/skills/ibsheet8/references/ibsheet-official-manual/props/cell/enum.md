---
KEY: enum
KIND: cell-property
PATH: props/cell/enum
ALIAS: 셀의, 이나, 보여질, 설정합니다
ALIAS_EN: enum
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/enum
---
# Enum ***(cell)***
> 셀의 [Type](/docs/appx/type)이 `Enum`이나 `Radio`일 때 보여질 item을 설정합니다.

> 첫번째 글자를 구분자로 설정하게 됩니다.

> [EnumKeys](./enum-keys) 속성을 통해 `item`의 실제값을 설정할 수 있습니다.

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
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름 :CLS )
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Enum", "|사장|부장|차장|과장|대리|사원");


//2. 객체에 직접 접근해서 속성 적용 (열이름 :CLS )
var ROW = sheet.getRowById("AR10");
ROW["CLSEnum"] = "|성인|청소년|아동|유가";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름 :CLS )
{
    data:[
        {..., "CLSEnum":"|남성|여성", ...}
    ]
}
```

### Read More
- [EnumKeys cell](./enum-keys)
- [Related cell](./related)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
