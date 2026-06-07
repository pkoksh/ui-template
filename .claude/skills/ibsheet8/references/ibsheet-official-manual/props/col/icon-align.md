---
KEY: iconAlign
KIND: column-property
PATH: props/col/icon-align
ALIAS: 좌측에, 버튼, 혹은, 체크박스, 표시하는
ALIAS_EN: icon, align
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/icon-align
---
# IconAlign ***(col)***
> 셀 좌측에 버튼(혹은 체크박스)을 표시하는 [Icon](./icon)속성 사용시, 버튼의 위치를 설정합니다.

> 기본적으로 셀의 좌측에 표시되면 오른쪽에 표시 할 수도 있습니다..




### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Left`|셀 좌측에 `Icon` 표시 (`default`)|
|`Right`|셀 우측에 `Icon` 표시|


### Example
```javascript
options.Cols = [
    ...
    //Enum 버튼을 셀 우측에 표시한다.
    {Type: "Enum", Name: "brnSaleAmt", IconAlign: "Right", Enum: "|사장|부장|차장|과장", EnumKeys: "|AA|BB|CC|DD" ...},
    ...
];
```

### Read More
- [Icon col](./icon)
- [IconWidth cell](../cell/icon-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.4|기능 추가|
