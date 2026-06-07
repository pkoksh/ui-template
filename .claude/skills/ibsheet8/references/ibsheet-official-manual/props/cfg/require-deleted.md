---
KEY: requireDeleted
KIND: config-property
PATH: props/cfg/require-deleted
ALIAS: 이전, 버전에서, 삭제행을, 검사에, 포함하고
ALIAS_EN: require, deleted
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/require-deleted
---
# !RequireDeleted ***(cfg)***

> **<mark>`8.0.0.6` 이전 버전에서 삭제행을 Required 검사에 포함하고 있어 추가한 기능으로 Default가 제외로 동작하므로 해당 기능은 공개하지 않습니다</mark>**

> 삭제된 행(`Deleted`)을 [Required](/docs/props/col/required) 검사에 포함시키는 기능 

> 이 속성을 설정하지 않는 경우 [Required](/docs/props/col/required)가 있는 열에서 [doSave](/docs/funcs/core/do-save), [getSaveJson](/docs/funcs/core/get-save-json), [getSaveString](/docs/funcs/core/get-save-string) 메소드 실행 시 삭제된 행은 `Required` 검사를 제외합니다 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|삭제 행은 [Required](/docs/props/col/required) 검사에서 제외 (`default`)|
|`1(true)`|삭제 행도 [Required](/docs/props/col/required) 검사에 포함|

### Example
```javascript
options.Cfg = {
    RequireDeleted: true // 삭제행도 Required 검사에 포함
};

options.Cols = [
    {
        Type: "Text",
        Name: "sName",
        Required: 1, // "sName" 컬럼에 Required 설정
        ...
    },
    {
        Type: "Int",
        Name: "sSalary",
        Width: 70,
        ...
    },
    ...
];
```

### Read More
- [Required col](/docs/props/col/required)
- [doSave method](/docs/funcs/core/do-save)
- [getSaveJson method](/docs/funcs/core/get-save-json)
- [getSaveString method](/docs/funcs/core/get-save-string)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|기능 추가|
