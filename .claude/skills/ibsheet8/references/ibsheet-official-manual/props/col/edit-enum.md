---
KEY: editEnum
KIND: column-property
PATH: props/col/edit-enum
ALIAS: 열에서, 드랍리스트가, 펼쳐졌을때, 보여지는, 아이템의
ALIAS_EN: edit, enum
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/edit-enum
---
# EditEnum ***(col)***
> [Type](/docs/appx/type)이 `Enum`인 열에서 드랍리스트가 펼쳐졌을때 보여지는 아이템의 `Text`를 [Enum](./enum)에서 설정한 값과 다르게 하고자 할때 사용합니다.

> '\t'구분자를 이용하여 아이템을 여러개의 컬럼으로 표현할 수 있습니다.

###
**1. 일반적인 EditEnum 사용** 

![EditEnum](/assets/imgs/editEnum.png "EditEnum")
<!-- IMAGE: 스크린샷/예시 이미지 - EditEnum --> 


**2. '\t' 구분자를 사용한 EditEnum 사용** 

![EditEnum2](/assets/imgs/editEnum2.png "EditEnum2")
<!-- IMAGE: 스크린샷/예시 이미지 - EditEnum2 --> 


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
    {
        Type: "Enum",
        Name: "relation1",
        Enum: "|시흥현장|안산현장|화성현장",
        EditEnum: "|경기도 시흥시 은행로216번길 26|경기도 안산시 단원구 안산천남로 245|경기도 화성시 동탄반석로 96",
        ...
    },
    {
        Type: "Enum",
        Name: "relation2",
        Enum: "|시흥현장|안산현장|화성현장",
        EditEnum: "|경기도\t시흥시\t은행로216번길 26|경기도\t안산시 단원구\t안산천남로 245|경기도\t화성시\t동탄반석로 96",
        ...
    },
    ...
];
```

### Read More
- [Enum col](./enum)
- [EnumKeys col](./enum-keys)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
