---
KEY: focusWholeRow
KIND: config-property
PATH: props/cfg/focus-whole-row
ALIAS: 시트, 선택시, 포커스를, 해당, 셀에만
ALIAS_EN: focus, whole, row, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/focus-whole-row
---
# FocusWholeRow ***(cfg)***

> 시트 셀 선택시 포커스를 해당 셀에만 처리할지 해당 행 전체에 처리할지를 설정합니다.

> `제약사항` 해당 기능 사용시 `Lines` 타입 컬럼은 편집 불가 `(CanEdit:0)` 로 설정됩니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|시트 셀 단위로 포커스 처리 (`default`)|
|`1(true)`|시트 행 단위로 포커스 처리|


### Example
```javascript
options.Cfg = {
    FocusWholeRow: true     // 행단위로 포커스 처리
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
