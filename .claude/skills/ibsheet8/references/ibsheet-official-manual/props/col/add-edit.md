---
KEY: addEdit
KIND: column-property
PATH: props/col/add-edit
ALIAS: 행의, 상태가, 추가, 컬럼의, 편집
ALIAS_EN: add, edit, insert, append, create, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/add-edit
---
# AddEdit ***(col)***

> 행의 상태가 추가([Added](/docs/props/row/added))인 행의 컬럼의 편집([CanEdit](/docs/props/row/can-edit)) 가능 여부를 설정합니다.

> 조회시에는 편집 불가, 행 추가 후 데이터 편집 가능, 저장 후 편집 불가를 설정하고 싶다면 [ChangeEdit](/docs/props/col/change-edit) 를 함께 설정해주어야 합니다. 

> `주의` 해당 속성을 설정하게 되면, `(Cell,Row,Col)CanEdit` 설정 속성은 무시됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|행의 상태가 Added(추가) 일 경우 해당 컬럼 편집 불가|
|`1(true)`|행의 상태가 Added(추가) 일 경우 해당 컬럼 편집 가능|


### Example
```javascript
//addRow 를 통하여 추가된 행에 대해서는 AMT 컬럼의 편집을 막음
options.Cols = [
    ...
    {Type: "Int", AddEdit: 0, Name: "AMT", Width: 120 ...},
    ...
];

// 데이터 조회시 AMT 컬럼의 편집을 막고, addRow 를 통하여 추가한 경우에는 편집 가능, 저장 후 편집 불가로 설정
options.Cols = [
    ...
    {Type: "Int", AddEdit: 1, ChangeEdit:0, Name: "AMT", Width: 120 ...},
    ...
];

```

### Try it
- [Demo of AddEdit](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/AddEdit/)

### Read More
- [CanEdit col](/docs/props/col/can-edit)
- [CanEdit row](/docs/props/row/can-edit)
- [ChangeEdit col](/docs/props/col/change-edit)
- [Added row](/docs/props/row/added)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.87|기능 추가|