---
KEY: canPaste
KIND: cell-property
PATH: props/cell/can-paste
ALIAS: 행에서, 특정, 열에, 붙여넣기를, 제한합니다
ALIAS_EN: can, paste
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/can-paste
---
# CanPaste ***(cell)***
> 행에서 특정 열에 대한 붙여넣기를 제한합니다.

> `ctrl+c` 를 통해 복사시 클립보드에 저장되지만 `ctrl+v` 를 통해 붙여넣기는 되지 않습니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|붙여넣기 불가|
|`1(true)`|붙여넣기 가능 (`default`)|


### Example
```javascript
// 적용 방법 1.
var ROW = sheet.getRowById("AR1");
ROW["sMoneyCanPaste"] = 0;

// 적용 방법 2.
var OPT = {
  "Def": {
    "Row": {
      "컬럼이름": {
        CanPaste: 0
      }
      // or
      "컬럼이름CanPaste": 0
    }
  }
}
```

### Read More



### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.0|기능 추가|
<!-- |`[비공개]` core|8.2.0.0|기능 공개| -->