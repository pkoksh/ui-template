---
KEY: filterDefaultsIconLeft
KIND: config-property
PATH: props/cfg/filter-defaults-icon-left
ALIAS: 필터, 행에서, 사용할, 필터링, 생성되는
ALIAS_EN: filter, defaults, icon, left
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/filter-defaults-icon-left
---
# FilterDefaultsIconLeft ***(cfg)***

> 필터 행에서 [Defaults](/docs/props/col/defaults) 를 사용할 때 필터링 시 생성되는 필터 메뉴의 체크 박스 아이콘을 왼쪽에 위치시킬지 여부를 설정합니다

### Type
`boolean`


### Options

|Value|Description|
|-----|-----|
|`0(false)`|필터 체크 박스를 오른쪽에 위치 (`default`)|
|`1(true)`|필터 체크 박스를 왼쪽에 위치|


### Example
```javascript
options.Cfg = {
    FilterDefaultsIconLeft: true
};
```

### Read More
 - [Defaults col](/docs/props/col/defaults)
 - [FilterEnumIconLeft cfg](./filter-enum-icon-left)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
