---
KEY: strongDisable
KIND: config-property
PATH: props/cfg/strong-disable
ALIAS: 메소드, 호출, 제외한, 나머지, 사용자
ALIAS_EN: strong, disable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/strong-disable
---
# !StrongDisable ***(cfg)***

> `disable` 메소드 호출 후 `enable`을 제외한 나머지 사용자 호출 메소드를 동작할 수 없게 합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|`disable()` 호출 후 `API` 호출을 제한하지 않음 (`default`)|
|`1(true)`|`disable()` 호출 후 `enable()`만 호출 가능하게 설정|

### Example
```javascript
options.Cfg = {
    StrongDisable: true
};
```

### Read More
- [enable method](/docs/funcs/core/enable)
- [disable method](/docs/funcs/core/disable)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.2|기능 추가|
