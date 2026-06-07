---
KEY: hideMobile
KIND: column-property
PATH: props/col/hide-mobile
ALIAS: 모바일, 환경에서, 열의, 보임, 감춤
ALIAS_EN: hide, mobile
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/hide-mobile
---
# HideMobile ***(col)***
> 모바일 환경에서 열의 보임 감춤/여부를 설정합니다.

> **※ iPad Pro나 Surface Pro는 모바일로 분류되지 않습니다.**

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|열 보임 (`default`)|
|`1(true)`|열 감춤|

### Example
```javascript
// 특정 열을 모바일에서 감춤
options.Cols = [
    ...
    {Type: "Int", Name: "Product_Sales", HideMobile: true, ...},
    ...
];
```

### Read More

- [BreakPoint col](/docs/props/col/break-point)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
