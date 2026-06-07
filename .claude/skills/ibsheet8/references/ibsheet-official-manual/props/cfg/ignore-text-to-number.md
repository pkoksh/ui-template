---
KEY: ignoreTextToNumber
KIND: config-property
PATH: props/cfg/ignore-text-to-number
ALIAS: 열의, 타입이, 숫자로만, 되어, 있는
ALIAS_EN: ignore, text, to, number
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/ignore-text-to-number
---
# !IgnoreTextToNumber ***(cfg)***

> 열의 타입이 `Text`일 때, 숫자로만 되어 있는 문자열을 숫자가 아닌 문자열로 처리할 수 있도록 하는 설정입니다.

> 데이터 로우 객체의 셀 데이터, `sheet.setValue`로 설정하는 데이터 및 `sheet.getValue`의 리턴 데이터가 모두 문자열로 통일됩니다. 

> "50"이라고 입력했을때 50으로 설정되지 않도록 합니다.

> `sheet.getValue`의 리턴 데이터는 `Cfg.IgnoreTextToNumber` 값과 상관없이 `Text` 타입의 셀 데이터가 문자열(예: "50")으로 리턴됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|숫자로만 되어 있는 문자열을 숫자로 변환 (`default`)|
|`1(true)`|숫자로만 되어 있는 문자열도 문자열로 처리|

### Example
```javascript
options.Cfg = {
  IgnoreTextToNumber: true      // 숫자로만 되어 있는 문자열도 문자열로 처리
};
```

### Read More
- [getValue method](/docs/funcs/core/get-value)
- [setValue method](/docs/funcs/core/set-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.1|기능 추가|
