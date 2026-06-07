---
KEY: noChanged
KIND: column-property
PATH: props/col/no-changed
ALIAS: 열의, 값이, 변경되었을때, 수정, 상태를
ALIAS_EN: no, changed, edit, modify, update, change
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/no-changed
---
# NoChanged ***(col)***

> 열의 값이 변경되었을때 수정 상태를 변경 하지 않도록 설정합니다.

> 값이 `1(true)`로 설정되어 있다면 열의 값이 변경되어도 수정 상태를 변경하지 않습니다.

> 수정 상태를 변경(`Changed`)하지 않지만 수정 관련된 이벤트는 발생합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|열 값을 수정하면 수정 상태를 변경 (`default`)|
|`1(true)`|열 값을 수정해도 수정 상태를 변경하지 않음|

### Example
```javascript
// 특정 열의 값이 수정될때 수정 상태가 변경되지 않도록 설정
options.Cols = [
    {Type: "Int", Name: "sNumber", NoChanged: true, Width: 70 ...},
    ...
];
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
