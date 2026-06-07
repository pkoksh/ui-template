---
KEY: defaultBorder
KIND: config-property
PATH: props/cfg/default-border
ALIAS: 시트의, 기본, 눈금선, 보임, 여부를
ALIAS_EN: default, border
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/default-border
---
# !DefaultBorder ***(cfg)***

> 시트의 기본 눈금선 보임 여부를 설정합니다


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|시트 눈금선 보이지 않음|
|`1(true)`|시트 눈금선 보임 (`default`)|


### Example
```javascript
options.Cfg = {
  DefaultBorder: 0 // 시트 눈금선 보이지 않음
};
```

### Read More
- [ExportData method](/docs/funcs/core/export-data)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
