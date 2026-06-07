---
KEY: groupWidth
KIND: column-property
PATH: props/col/group-width
ALIAS: 열이, 그룹핑, 그룹, 트리가, 생성될
ALIAS_EN: group, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/group-width
---
# GroupWidth ***(col)***
> 열이 그룹핑 될 때, 그룹 트리가 생성될 열(`GroupMain` 옵션에 지정된 열. `GroupMain` 옵션이 없을 시 `SEQ`를 제외한 첫 번째 열)의 너비를 지정한 크기로 조정합니다.

값을 1로 설정 시 열의 데이터 양에 따라 자동으로 조절됩니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|그룹핑 될때 열의 너비(pixel단위)|



### Example
```javascript
//열이 그룹핑될 때 그룹 트리가 위치될 열의 너비를 210px로 수정
options.Cols = [
    ...
    {Type: "Text", Name: "SA_Name", Width: 100, GroupWidth: 210, ...},
    ...
];
```

### Read More
- [GroupFormat cfg](/docs/props/cfg/group-format)
- [CanGroup col](./can-group)
- [GroupDef col](./group-def)
- [GroupEmpty col](./group-empty)
- [GroupSole col](./group-sole)
- [GroupSingle col](./group-single)
- [GroupDeleted col](./group-deleted)
- [GroupChar col](./group-char)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
