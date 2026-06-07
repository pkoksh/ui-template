---
KEY: useHeaderContextMenu
KIND: config-property
PATH: props/cfg/use-header-context-menu
ALIAS: 헤더, 컨텍스트, 메뉴의, 표시, 비표시를
ALIAS_EN: use, header, context, menu, show, visible, display
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/use-header-context-menu
---
# UseHeaderContextMenu ***(cfg)***

> 헤더 컨텍스트 메뉴의 표시/비표시를 제어할 수 있는 기능입니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|헤더 컨텍스트 메뉴 표시 안함|
|`1(true)`|헤더 컨텍스트 메뉴 표시 (`default`)|

### Example
```javascript
options.Cfg = {
    UseHeaderContextMenu: false              // 헤더 컨텍스트 메뉴 표시 안하도록 설정
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.1|기능 추가|