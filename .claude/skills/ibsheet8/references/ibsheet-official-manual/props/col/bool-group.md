---
KEY: boolGroup
KIND: column-property
PATH: props/col/bool-group
ALIAS: 내에서, 동일, 그룹으로, 묶을지, 여부를
ALIAS_EN: bool, group
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/bool-group
---
# BoolGroup ***(col)***
> [Type](/docs/appx/type)이 `Bool`인 열 내에서 동일 그룹으로 묶을지 여부를 설정합니다.

> 입력하는 숫자가 그룹에 인덱스가 되어 같은 값을 갖고있는 셀 간에는 하나만 체크가 됩니다.(마치 라디오처럼 체크될때 따른 셀은 자동으로 언체크 됩니다.)

> 따라서 컬럼에 `BoolGroup`을 설정할 경우 컬럼 전체가 같은 `BoolGroup` 값을 가지게 되면서 컬럼 전체 중 하나의 셀만 체크됩니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|라디오처럼 하나로 묶을 그룹 인덱스|

### Example
```javascript
//열 내에서 단일 셀만 체크 가능하게 합니다.
options.Cols = [
    ...
    {Type: "Bool", Name: "st1", BoolGroup: 1, ...},
    ...
];
```

### Read More
- [BoolGroup cell](/docs/props/cell/bool-group)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
