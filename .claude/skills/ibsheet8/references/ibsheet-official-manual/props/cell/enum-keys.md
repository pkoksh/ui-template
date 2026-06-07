---
KEY: enumKeys
KIND: cell-property
PATH: props/cell/enum-keys
ALIAS: 속성을, 설정한, 아이템들의, 값을, 설정합니다
ALIAS_EN: enum, keys
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/enum-keys
---
# EnumKeys ***(cell)***
> [Enum](./enum) 속성을 통해 설정한 아이템들의 값을 설정합니다.

> 첫번째 글자를 구분자로 설정하게 됩니다.

> 이 속성을 설정하면, 실제 조회나 저장시 `EnumKey`로 설정한 값이 서버로 전송됩니다.


> **<mark>주의</mark> : EnumKeys는 [Enum](./enum) 당 유일한 하나의 Key로 동일한 값을 중복해서 사용하면 안됩니다.** 

> **<mark>주의</mark> : [Type](/docs/appx/type)이 `Radio`인 컬럼에서는 [Enum](./enum)과 `EnumKeys`의 길이를 동일하게 사용해야 체크 동작이 정상적으로 이뤄집니다.** 



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|첫번째 글자를 구분자로 하는 문자열 (ex:"#01#02#03#04")|

### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름 :CLS )
sheet.setAttribute( sheet.getRowById("AR99") , "CLS" , "EnumKeys" ,"|01|02|03|04");


//2. 객체에 직접 접근해서 속성 적용 (열이름 :CLS )
var ROW = sheet.getRowById("AR10");
ROW["CLSEnumKeys"] = "@A1@B0@B1@C1";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름 :CLS )
{
    data:[
        {... , "CLSEnumKeys":"#AA#ED#K9" , ...}
    ]
}
```

### Read More
- [Enum cell](./enum)
- [Related cell](./related)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
