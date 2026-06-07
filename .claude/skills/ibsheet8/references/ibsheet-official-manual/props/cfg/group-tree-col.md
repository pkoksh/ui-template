---
KEY: groupTreeCol
KIND: config-property
PATH: props/cfg/group-tree-col
ALIAS: 설정된, 경우, 그룹핑된, 컬럼들이, 표시될
ALIAS_EN: group, tree, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/group-tree-col
---
# !GroupTreeCol ***(cfg)***
> [GroupTree](./group-tree)가 설정된 경우 그룹핑된 컬럼들이 표시될 [Section](/docs/props/col/section)을 설정합니다.

> [GroupTree](./group-tree)로 설정된 그룹에만 동작합니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|그룹핑 된 열 표시가 좌측 섹션에 위치|
|`1`|그룹핑 된 열 표시가 가운데 섹션에 위치 (`default`)|
|`2`|그룹핑 된 열 표시가 우측 섹션에 위치|


### Example
```javascript
options.Cfg = {
    Group: "gender,age" // 성별, 나이 컬럼에 각각 접힘/펼침 트리 노드 생성
    GroupTree: 3,       // CanEdit:1, 트리 아이콘이 왼쪽에 위치
    GroupTreeCol: 2,    // 그룹핑된 컬럼들을 우측 섹션에 위치
};
```

### Read More
- [Group cfg](./group)
- [GroupTree cfg](./group-tree)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.21|기능 추가|
