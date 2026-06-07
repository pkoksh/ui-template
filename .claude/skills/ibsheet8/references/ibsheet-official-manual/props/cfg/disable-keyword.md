---
KEY: disableKeyword
KIND: config-property
PATH: props/cfg/disable-keyword
ALIAS: 필터행에서, 예약어로, 설정되어, 있는, 사용여부를
ALIAS_EN: disable, keyword
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/disable-keyword
---
# DisableKeyWord ***(cfg)***

> 필터행에서 예약어로 설정되어 있는 `;(or)` 나 `,(and)` 의 사용여부를 설정합니다.

> 해당 기능을 `1(true)` 설정시 예약어 기능이 사용되지 않습니다. 해당 기능을 사용하면 필터행에 입력된 문자열 그대로 필터링 하게 됩니다. 



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|예약어 기능 사용 (`default`)|
|`1(true)`|예약어 기능 사용하지 않음|


### Example
```javascript
// 필터행에서 예약어 `;` , `,` 를 사용하지 않도록 처리합니다.
options.Cfg = {
    DisableKeyWord: 1
};
```

### Read More
- [필터링 기능](/docs/userGuide/filter)
- [showFilterRow](/docs/funcs/core/show-filter-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.53|기능 추가|
