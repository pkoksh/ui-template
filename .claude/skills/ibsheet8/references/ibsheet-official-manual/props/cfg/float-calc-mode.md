---
KEY: floatCalcMode
KIND: config-property
PATH: props/cfg/float-calc-mode
ALIAS: 컬럼에서, 계산, 설정한, 소수점, 길이보다
ALIAS_EN: float, calc, mode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/float-calc-mode
---
# FloatCalcMode ***(cfg)***
> `Float` Type 인 컬럼에서 계산 시 (col)[Format](/docs/props/col/format)과 설정한 소수점 길이보다 짧게 출력되거나 예상했던 결과값보다 소수점 자릿수가 길게 출력되는 경우 보정치 값을 변경하도록 설정합니다.

소수점 계산의 보정치는 JavaScript의 `부동 소수점` 연산 문제로 인하여 `1e5` 즉, 1 * 10의 5승인 `100000`을 기본 값으로 설정하여 계산합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`| 보정치 값을 `1e5`으로 설정하여 계산 (`default`)|
|`1(true)`|(col)[Format](/docs/props/col/format)에 설정된 소수점 길이에 맞춰 계산 시 보정치 값을 조정하여 계산|

### Example
```javascript
options.Cfg :{
    FloatCalcMode: true
};
```

### Read More

- [Format Col](../col/format)
- [Format Cell](../cell/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.47|기능 추가|