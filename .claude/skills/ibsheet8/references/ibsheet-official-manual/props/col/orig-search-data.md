---
KEY: origSearchData
KIND: column-property
PATH: props/col/orig-search-data
ALIAS: 조회시, 숫자, 문자, 등의, 데이터
ALIAS_EN: orig, search, data, number, int, integer, numeric
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/orig-search-data
---
# OrigSearchData ***(col)***

> 조회시 숫자, 문자 등의 데이터 형식을 변경하지 않고 그대로 `Row`객체에 저장합니다. 

> `getValue`, `getString`에는 영향을 주지 않습니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|조회시 숫자, 문자 타입의 데이터를 각각의 타입에 맞는 형식으로 변형하여 저장 (`default`)|
|`1(true)`|조회시 숫자, 문자 타입의 데이터를 변형하지 않고 그대로 유지|

### Example
```javascript
// 조회 데이터의 형식을 변형하지 않고 그대로 Row 객체에 저장
options.Cols = [
    ...
    {Type: "Text", OrigSearchData: 1, Name: "CarName", Width: 120, ...},
    ...
];

//조회 데이터
[
    {"CarName":"1234"}
]

//OrigSearchData 설정 전 getDataRows 함수로 CarName 리턴값
CarName: 1234 , 숫자형으로 리턴

//OrigSearchData 설정 후 getDataRows 함수로 CarName 리턴값
CarName: "1234" , 문자형으로 리턴

```

### Read More
- [시트 객체 구조](/docs/appx/init-structure)
- [loadSearData method](/docs/funcs/core/load-search-data)
- [doSearch method](/docs/funcs/core/do-search)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.17|기능 추가|
