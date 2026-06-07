---
KEY: filterDefaultsMaxWidth
KIND: config-property
PATH: props/cfg/filter-defaults-max-width
ALIAS: 필터, 행에서, 사용할, 생성되는, 메뉴의
ALIAS_EN: filter, defaults, max, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/filter-defaults-max-width
---
# FilterDefaultsMaxWidth ***(cfg)***

> 필터 행에서 [Defaults](/docs/props/col/defaults) 를 사용할 때 생성되는 필터 메뉴의 `MaxWidth` 를 설정합니다. 

> 생성될 필터 메뉴의 width 가 설정하는 값보다 작은 경우에는 기존의 생성될 width 가 우선되고, 설정하는 값보다 큰 경우에 필터 메뉴의 너비 축소 및 가로 스크롤이 생성됩니다. 


### Type
`number`


### Options

|Value|Description|
|-----|-----|
|`number`|필터의 Defaults 메뉴의 Maxwidth|


### Example
```javascript
options.Cfg = {
    FilterDefaultsMaxWidth: 500
};
```

### Read More
 - [Defaults col](/docs/props/col/defaults)
 - [FilterEnumIconLeft cfg](./filter-enum-icon-left)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.34|기능 추가|
