---
KEY: ignoreHeaderColMerge
KIND: config-property
PATH: props/cfg/ignore-header-col-merge
ALIAS: 속성을, 헤더, 영역에도, 적용할지, 여부를
ALIAS_EN: ignore, header, col, merge
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/ignore-header-col-merge
---
# IgnoreHeaderColMerge ***(cfg)***

> `ColMerge` 속성을 헤더 영역에도 적용할지 여부를 결정합니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`| ColMerge 속성을 헤더 영역에도 적용합니다. |
|`1(true)`| ColMerge 속성을 헤더 영역에 적용하지 않습니다. (`default`)|


### Example
```javascript
options.Cfg = {
    IgnoreHeaderColMerge: false, // ColMerge 속성을 헤더 영역에도 적용합니다.
};
```

### Read More
- [ColMerge col](/docs/props/col/col-merge)
- [ColMerge cell](/docs/props/cell/col-merge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
