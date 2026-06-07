---
KEY: groupDef
KIND: column-property
PATH: props/col/group-def
ALIAS: 열이, 그룹핑될때, 그룹행에, 적용될, 공통
ALIAS_EN: group, def
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/group-def
---
# GroupDef ***(col)***
> 열이 그룹핑될때, 그룹행에 적용될 공통 설정을 지정합니다.

> 시트 초기화시 `Def` 영역에 커스텀하게 기능을 설정해 두고, 해당 열에서 `Def`에 정의된 ID를 지정해 설정하실 수 있습니다.

> `Def` 영역에 커스텀하게 기능을 설정할 때 `Def` 속성에 <b>반드시 `Group`을 설정</b>해야 정상적으로 동작합니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|Def에 설정한 커스텀 기능 ID|



### Example
```javascript
options.Def = {
    //커스텀 그룹행 설정
    "myGroupRow": {Def: "Group", Color: "#FFADAD", CanEdit: 0, CanFocus: 0}
};

//특정 열에 대해 그룹핑 불허
options.Cols = [
    ...
    {Type: "Text", Name: "SA_DEPTID", GroupDef: "myGroupRow", ...},
    ...
];
```

### Read More
- [GroupFormat cfg](/docs/props/cfg/group-format)
- [CanGroup col](./can-group)
- [GroupWidth col](./group-width)
- [GroupEmpty col](./group-empty)
- [GroupSole col](./group-sole)
- [GroupSingle col](./group-single)
- [GroupDeleted col](./group-deleted)
- [GroupChar col](./group-char)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
