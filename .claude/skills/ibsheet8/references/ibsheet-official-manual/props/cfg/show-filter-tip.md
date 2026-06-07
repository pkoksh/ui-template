---
KEY: showFilterTip
KIND: config-property
PATH: props/cfg/show-filter-tip
ALIAS: 필터행에, 마우스, 오버시, 사용법을, 팁으로
ALIAS_EN: show, filter, tip
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/show-filter-tip
---
# !ShowFilterTip ***(cfg)***

> 필터행에 마우스 오버시 사용법을 팁으로 표시할지 여부를 설정합니다

> 설정시 Text, Lines, Int, Float, Date 다섯 가지 컬럼 필터행에 사용법이 표시됩니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|마우스 오버시 팁으로 표시하지 않습니다. (`default`)|
|`1(true)`|마우스 오버시 팁으로 표시합니다.|

### Example
```javascript
options.Cfg = {
    ShowFilterTip: true,  // 마우스 오버시 사용법을 팁으로 표시합니다.
};
```

### Read More
- [ShowFilter cfg](/docs/props/cfg/show-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.67|기능 추가|
