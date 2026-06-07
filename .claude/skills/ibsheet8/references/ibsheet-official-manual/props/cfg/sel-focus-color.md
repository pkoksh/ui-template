---
KEY: selFocusColor
KIND: config-property
PATH: props/cfg/sel-focus-color
ALIAS: 시트, 포커스, 혹은, 영역, 선택시
ALIAS_EN: sel, focus, color, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/sel-focus-color
---
# SelFocusColor ***(cfg)***

> 시트 포커스 혹은 영역 선택시 헤더행과 SEQ 컬럼행의 배경색이 변경됩니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|기능 사용 안함 (`default`)|
|`1`|헤더행과 SEQ 컬럼행의 배경색 변경 적용|

### Example
```javascript
options.Cfg = {
    SelFocusColor : 1            // 헤더행과 SEQ 컬럼행의 배경색이 변경
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.92|기능 추가|