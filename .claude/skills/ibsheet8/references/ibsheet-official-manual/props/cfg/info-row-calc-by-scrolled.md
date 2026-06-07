---
KEY: infoRowCalcByScrolled
KIND: config-property
PATH: props/cfg/info-row-calc-by-scrolled
ALIAS: 설정시, 스크롤, 계산이, 실행되지, 않게
ALIAS_EN: info, row, calc, by, scrolled
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/info-row-calc-by-scrolled
---
# !InfoRowCalcByScrolled ***(cfg)***

> `InfoRow`에 Formula 설정시 스크롤 할 때 Formula 계산이 실행되지 않게 하는 설정입니다.

> 기본 설정 `cfg.InfoRowCalcByScrolled = true` 시 스크롤 할 때 마다 Formula 계산이 실행되므로 성능문제가 발생할 수 있습니다.

> 해당 속성을 이용하여 `Formula` 계산이 일어나지 않도록 할 수 있습니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|스크롤 할 때 Formula 계산 실행되지 않음.|
|`1(true)`|스크롤 할 때 마다 Formula 계산 실행 (`default`)|

### Example
```javascript
options.Cfg = {
  InfoRowCalcByScrolled: false      // 스크롤시 Formula 계산 실행 안됨.
};
```

### Read More
- [InfoRowConfig cfg](/docs/props/cfg/info-row-config)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|기능 추가|
