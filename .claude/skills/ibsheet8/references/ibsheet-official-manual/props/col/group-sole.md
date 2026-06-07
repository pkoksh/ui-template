---
KEY: groupSole
KIND: column-property
PATH: props/col/group-sole
ALIAS: 해당, 열을, 기준으로, 그룹행, 생성시
ALIAS_EN: group, sole
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/group-sole
---
# GroupSole ***(col)***
> 해당 열을 기준으로 그룹행 생성시, 하위 노드가 한행인 경우 그룹에서 제외 시킬지 여부를 설정합니다. .


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|자식행이 단일행인 경우 그룹핑을 하지 않음|
|`1(true)`|자식행 개수와 무관하게 그룹핑 (`default`)|


### Example
```javascript
//단일 자식행에 대해서는 그룹핑을 하지 않는다.
options.Cols = [
    ...
    {Type: "Text", Name: "SA_DEPTID", GroupSole: 0, ...},
    ...
];
```

### Read More
- [GroupFormat cfg](/docs/props/cfg/group-format)
- [CanGroup col](./can-group)
- [GroupDef col](./group-def)
- [GroupWidth col](./group-width)
- [GroupEmpty col](./group-empty)
- [GroupSingle col](./group-single)
- [GroupDeleted col](./group-deleted)
- [GroupChar col](./group-char)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
