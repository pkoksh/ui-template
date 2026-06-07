---
KEY: editSelect
KIND: config-property
PATH: props/cfg/edit-select
ALIAS: 편집, 값이, 선택될지, 여부를, 설정할
ALIAS_EN: edit, select, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/edit-select
---
# EditSelect ***(cfg)***
> 편집 될 때 `input` 의 값이 선택될지 여부를 설정할 수 있습니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|편집 시 선택안 함|
|`1`|마우스로 편집 모드로 들어갈 시 선택함|
|`2`|키보드 키로 편집 모드에 들어갈 시 선택함|
|`7`|편집 모드로 들어갈 시 항상 선택(`default`)|

### Example
```javascript
options.Cfg :{
    EditSelect: 0
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
