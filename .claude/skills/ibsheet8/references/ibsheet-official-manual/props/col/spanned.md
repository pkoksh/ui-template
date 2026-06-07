---
KEY: spanned
KIND: column-property
PATH: props/col/spanned
ALIAS: 특정, 열에, 속한, 셀들에, 대해서
ALIAS_EN: spanned
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/spanned
---
# Spanned ***(col)***
> 특정 열에 속한 셀들에 대해서 위/아래로 병합할 지 여부를 설정합니다. 

> 실제 병합은 [RowSpan](/docs/props/cell/row-span) 속성을 사용하게 됩니다. 

> 셀머지 기능 사용시 자동머지 기능과는 별도로 움직임으로 자동머지 기능을 꺼주셔야합니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|병합 불가 (`default`)|
|`1(true)`|병합 가능|

### Example
```javascript
//전체 열들에 대해서 상/하 병합을 허용
options.Def.Col = {Spanned: true};
opiotns.Cfg = {
    HeaderMerge: 0 // 자동머지 끔
};
//헤더행을 위아래로 병합
options.Cols = [
    {Header:[{Value: "매장명", RowSpan: 2, Align: "Center"},{}], Type: "Text", Name: "사원명"},
    ...
];
```

### Read More
- [RowSpan cell](/docs/props/cell/row-span)
- [Span cell](/docs/props/cell/span)
- [Spanned row](/docs/props/row/spanned)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
