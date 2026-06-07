---
KEY: overValueLimit
KIND: config-property
PATH: props/cfg/over-value-limit
ALIAS: 현재, 시트의, 타입의, 입력, 범위가
ALIAS_EN: over, value, limit, input, import
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/over-value-limit
---
# !OverValueLimit ***(cfg)***

> 현재 시트의 `Int`, `Float` 타입의 입력 범위가 `javascript`에서 지원하는 범위를 넘었을 때 입력 가능하게 하는 기능입니다.

> 시트의 숫자 데이터 입력 가능 범위는 -9,007,199,254,740,991 ~ 9,007,199,254,740,991 값 사이입니다.

> 해당 옵션 설정 시 데이터 입력 제한이 풀리고 값이 입력됩니다. (단, full-data가 입력되지는 않음)

> 또, `Formula` 이용에 값 표현이 정확하지 않을 수 있습니다. 

> **※ 숫자 입력범위 제한을 해제하면 편집된 숫자가 overflow될 수 있습니다.**

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|숫자 데이터 입력 범위 제한 (`default`)|
|`1(true)`|숫자 데이터 입력 범위 제한 해제|

### Example
```javascript
options.Cfg = {
  OverValueLimit: true      // 숫자 데이터 입력 범위 제한 해제
};
```

### Read More
- [Type appendix](/docs/appx/type)
- [Formula appendix](/docs/appx/formula)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
