---
KEY: ignoreFocused
KIND: config-property
PATH: props/cfg/ignore-focused
ALIAS: 시트는, 데이터, 조회, 포커스를, 보여지는
ALIAS_EN: ignore, focused, data, search, query, fetch, load, retrieve
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/ignore-focused
---
# IgnoreFocused ***(cfg)***

> 시트는 데이터 조회 후 포커스를 보여지는 첫번째 행 첫번째 열에 위치시킵니다. 

> 해당 속성을 `1(true)`로 설정하면 조회 후 시트가 포커스를 갖고 오지 않게 합니다. 



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|조회 후 포커스를 첫 번째 행, 열로 가져옴 (`default`)|
|`1(true)`|조회 후 포커스를 가져오지 않음|


### Example
```javascript
options.Cfg = {
    IgnoreFocused: true,        // 조회 후 포커스를 가져오지 않게 한다.
};
```

### Read More
- [Focus method](/docs/funcs/core/focus)
- [onFocus event](/docs/events/on-focus)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
