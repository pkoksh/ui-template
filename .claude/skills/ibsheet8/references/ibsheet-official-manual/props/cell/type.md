---
KEY: type
KIND: cell-property
PATH: props/cell/type
ALIAS: 셀이, 갖고있는, 데이터, 유형을, 의미합니다
ALIAS_EN: type, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/type
---
# Type ***(cell)***

> 셀이 갖고있는 데이터 유형을 의미합니다.

> 일반적인 텍스트나 숫자(정수,실수) 체크박스, 드랍다운리스트 와 같은 타입이 존재합니다.

> 자세한 내용은 [Type appendix](/docs/appx/type)를 참고하세요.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|`Text,Int,Float,Date,Bool,Enum` 등 정해진 문자열|


### Example
```javascript
//1. 메소드를 통해 특정 셀의 타입을 변경
sheet.setAttribute(sheet.getRowById("AR99"), "AMT", "Type", "Float");


//2. 객체에 직접 접근해서 타입변경 (CLS열의 타입을 "Date"로 변경)
var ROW = sheet.getRowById("AR10");
ROW["CLSType"] = "Date";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 타입 변경
{
    data:[
        {... "CLS":"20171225", "CLSType": "Date", ...}
    ]
}
```

### Read More
- [Type appendix](/docs/appx/type)
- [Type col](/docs/props/col/type)
- [getType method](/docs/funcs/core/get-type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
