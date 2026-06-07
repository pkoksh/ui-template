---
KEY: focusMode
KIND: config-property
PATH: props/cfg/focus-mode
ALIAS: 편집, 상태인, 셀에서, 이동시, 동작을
ALIAS_EN: focus, mode, edit, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/focus-mode
---
# EditTabMode ***(cfg)***
> 편집 상태인 셀에서 `tab / shift + tab` 키 이동시 동작을 설정한다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`| `CanEdit:0,3,4`, `CanFocus:0,2`가 설정되지 않은 셀로 편집을 유지하면서 tab 이동한다. 
 (`default`)|
|`1(true)`|`CanEdit`, `CanFocus`유무와 상관없이 tab 이동한다.
 편집이 가능한 컬럼은 편집을 유지하면서 이동하고 편집이 불가한 컬럼에 foucs시 편집을 종료한다.|

### Example
```javascript
options.Cfg :{
    EditTabMode: 1
};
```

### Read More

- [CanEdit Cfg](./can-edit)
- [CanEdit Row](../row/can-edit)
- [CanEdit Col](../col/can-edit)
- [CanEdit Cell](../cell/can-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.53|기능 추가|