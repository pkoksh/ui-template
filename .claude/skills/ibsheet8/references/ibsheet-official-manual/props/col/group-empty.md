---
KEY: groupEmpty
KIND: column-property
PATH: props/col/group-empty
ALIAS: 또는, 공백, 대해서, 그룹핑을, 할지
ALIAS_EN: group, empty
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/group-empty
---
# GroupEmpty ***(col)***
> `0` 또는 `""(공백)` 에 대해서 그룹핑을 할지 여부를 설정합니다.

> 그룹핑 제외된 행은 상단에 위치하게 됩니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|0이나 ""(공백) 모두 그룹핑 불가|
|`1`|0은 그룹핑 가능하나 ""(공백)은 그룹핑 불가|
|`2`|0이나 ""(공백) 모두 그룹핑 가능 (`default`)|



### Example
```javascript
//""(공백) 행을 그룹에서 제외시킨다.
options.Cols = [
    ...
    {Type: "Text", Name: "Product_Name", Width: 100, GroupEmpty: 0, ...},
    ...
];
```

### Read More
- [GroupFormat cfg](/docs/props/cfg/group-format)
- [CanGroup col](./can-group)
- [GroupDef col](./group-def)
- [GroupWidth col](./group-width)
- [GroupSole col](./group-sole)
- [GroupSingle col](./group-single)
- [GroupDeleted col](./group-deleted)
- [GroupChar col](./group-char)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
