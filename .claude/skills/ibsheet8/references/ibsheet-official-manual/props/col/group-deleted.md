---
KEY: groupDeleted
KIND: column-property
PATH: props/col/group-deleted
ALIAS: 삭제예정인, 그룹핑에, 포함시킬지, 여부를, 설정합니다
ALIAS_EN: group, deleted
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/group-deleted
---
# GroupDeleted ***(col)***
> 삭제예정인 행([Deleted](/docs/props/row/deleted))을 그룹핑에 포함시킬지 여부를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|삭제 예정인 행은 그룹핑 제외|
|`1(true)`|삭제 예정인 행도 그룹핑에 포함 (`default`)|

### Example
```javascript
//삭제 예정 행에 대해 그룹핑에서 제외합니다.
options.Def.Col = {GroupDeleted: 0};
```

### Read More
- [GroupFormat cfg](/docs/props/cfg/group-format)
- [CanGroup col](./can-group)
- [GroupDef col](./group-def)
- [GroupWidth col](./group-width)
- [GroupEmpty col](./group-empty)
- [GroupSole col](./group-sole)
- [GroupSingle col](./group-single)
- [GroupChar col](./group-char)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
