---
KEY: undo
KIND: config-property
PATH: props/cfg/undo
ALIAS: 사용자가, 수정한, 값이나, 수정된, 값을
ALIAS_EN: undo
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/undo
---
# Undo ***(cfg)***

> 사용자가 수정한 값이나 [setValue](/docs/funcs/core/set-value)를 통해 수정된 값을 `ctrl+z`를 통해 실행 취소하거나, `ctrl+y`를 통해 다시 실행하는 기능 허용 여부를 설정합니다.

> 셀의 값을 수정하거나, 상태를 삭제로 변경하거나, 신규로 추가한 행에 대해서 취소 처리하는 등의 작업을 수행합니다. 

> 컬럼의 이동이나 소팅, 행의 완전삭제([removeRow](/docs/funcs/core/remove-row))등에 대해서는 취소기능을 지원하지 않습니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|Undo 기능을 사용하지 않습니다. (`default`)|
|`1(true)`|Undo 기능을 사용합니다.|

### Example
```javascript
options.Cfg = {
    Undo: 1,              // Undo기능 사용여부
    ...
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
