---
KEY: headerSortActionMode
KIND: config-property
PATH: props/cfg/header-sort-action-mode
ALIAS: 헤더, 클릭, 어떻게, 소팅할지, 결정합니다
ALIAS_EN: header, sort, action, mode, click
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/header-sort-action-mode
---
# HeaderSortActionMode ***(cfg)***

> 헤더 클릭/Ctrl 클릭 시 어떻게 소팅할지 결정합니다.</br>
> 옵션에 따라 단일 열에 대한 소팅과 다중 열에 대한 소팅이 실행됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
| `0(false)` | 클릭 시 다중 소팅을 사용하며, Ctrl 클릭 시 단일 소팅을 사용합니다. (`default`)|
| `1(true)` | 클릭 시 단일 소팅을 사용하며, Ctrl 클릭 시 다중 소팅을 사용합니다.|

### Example
```javascript
options.Cfg = {
    HeaderSortActionMode: true,
    ...
};
```

### Read More
- [MaxSort cfg](/docs/props/cfg/max-sort)
- [HeaderSortMode cfg](/docs/props/cfg/header-sort-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|기능 추가|
