---
KEY: groupSingle
KIND: column-property
PATH: props/col/group-single
ALIAS: 해당, 열을, 기준으로, 그룹행, 생성시
ALIAS_EN: group, single
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/group-single
---
# GroupSingle ***(col)***
> 해당 열을 기준으로 그룹행 생성시, 하위노드의 값이 모두 동일한 경우(그룹 기준이 되는 열의 모든 값이 동일한 경우) 그룹열을 생성할지 여부를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|열의 모든 내용이 같은 경우 그룹 열을 생성하지 않음|
|`1(true)`|열의 모든 내용이 동일해도 그룹 열 생성 (`default`)|


### Example
```javascript
//열 내에 모든 값이 같은 경우 그룹열 생성 안함
options.Cols = [
    ...
    {Type: "Text", Name: "SA_DEPTID", GroupSingle: 0, ...},
    ...
];
```

### Read More
- [GroupFormat cfg](/docs/props/cfg/group-format)
- [CanGroup col](./can-group)
- [GroupDef col](./group-def)
- [GroupWidth col](./group-width)
- [GroupEmpty col](./group-empty)
- [GroupSole col](./group-sole)
- [GroupDeleted col](./group-deleted)
- [GroupChar col](./group-char)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
