---
KEY: autoSelectFirstenum
KIND: config-property
PATH: props/cfg/auto-select-firstenum
ALIAS: 컬럼, 아이템의, 첫번째, 값이, 선택
ALIAS_EN: auto, select, firstenum, selection
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/auto-select-firstenum
---
# AutoSelectFirstEnum ***(cfg)***

> `Enum` 컬럼 아이템의 첫번째 값이 선택 되도록 설정 합니다.

> 행 추가, setAttribute 함수로 Enum/EnumKeys 설정시에 동작 합니다.

> 단 Enum/EnumKeys를 동시에 설정 할 경우 `EnumKeys`를 먼저 설정해야 getValue시 첫번째 아이템의 값으로 읽을 수 있습니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|기능 사용 안함 (`default`)|
|`1(true)`|Enum 아이템의 첫번째 값이 선택 되도록 설정|

### Example
```javascript
options.Cfg = {
    AutoSelectFirstEnum : 1(true)
};


sheet.setAttribute(sheet.getFocusedRow(), "ComboData", "EnumKeys", "|101|102");
sheet.setAttribute(sheet.getFocusedRow(), "ComboData", "Enum", "|진행중|완료");

```

### Read More
- [addRow](/docs/funcs/core/add-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.5|기능 추가|
