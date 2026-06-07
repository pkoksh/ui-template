---
KEY: decimalAdjust
KIND: config-property
PATH: props/cfg/decimal-adjust
ALIAS: 타입, 컬럼, 데이터의, 근사값, 처리방식을
ALIAS_EN: decimal, adjust
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/decimal-adjust
---
# DecimalAdjust ***(cfg)***

> Int, Float 타입 컬럼 데이터의 근사값 처리방식을 설정합니다. 


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`round`|근사값을 반올림으로 처리합니다. (`default`)|
|`floor`|근사값을 내림으로 처리합니다.|
|`ceil`|근사값을 올림으로 처리합니다.|

### Example
```javascript
options.Cols = [
    ...
    {Type: "Int", Name: "Pvt_TSum", DecimalAdjust: "floor", ...}, // 근사값 처리 방식을 내림으로 설정
    ...
];
```

### Try it
- ["round" by default](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/DecimalAdjust-round/)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.11|기능 추가|
