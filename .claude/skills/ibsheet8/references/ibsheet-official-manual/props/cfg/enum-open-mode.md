---
KEY: enumOpenMode
KIND: config-property
PATH: props/cfg/enum-open-mode
ALIAS: 포커스, 이동, 간에, 목록, 열기
ALIAS_EN: enum, open, mode, focus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/enum-open-mode
---
# EnumOpenMode ***(cfg)***

> 포커스 이동 간에 Enum목록 열기 방법을 설정합니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|0(false)|포커스 시 Enum 리스트 목록을 표시하지 않음|
|1(true)|포커스 시 Enum 리스트 목록을 표시 (`default`)|

### Example
```javascript
options.Cfg = {
  EnumOpenMode: false      // 포커스 시 Enum 리스트 목록을 표시하지 않음
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.11|기능 추가|
