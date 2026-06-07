---
KEY: groupTree
KIND: config-property
PATH: props/cfg/group-tree
ALIAS: 그룹핑, 그룹, 기준, 컬럼에서, 트리
ALIAS_EN: group, tree, hierarchy
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/group-tree
---
# GroupTree ***(cfg)***
> 그룹핑 시 각 그룹 기준 컬럼에서 트리 노드를 사용합니다.

> 옵션에 따라 트리 아이콘, [CanEdit](./can-edit)여부를 다르게 설정할 수 있습니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|사용 안함 (`default`)|
|`1`|편집 불가([CanEdit: 0](./can-edit)), 트리 아이콘이 왼쪽에 위치|
|`2`|편집 불가([CanEdit: 0](./can-edit)), 트리 아이콘이 오른쪽에 위치|
|`3`|편집 가능([CanEdit: 1](./can-edit)), 트리 아이콘이 왼쪽에 위치|
|`4`|편집 가능([CanEdit: 1](./can-edit)), 트리 아이콘이 오른쪽에 위치|


### Example
```javascript
options.Cfg = {
    Group: "gender,age",    // 시트 로딩시 colName 이 성별, 나이인 열으로 그룹핑
    GroupTree: 3,           // 성별, 나이 컬럼에 각각 접힘/펼침 트리 노드 생성
};
```

### Read More
- [Group cfg](./group)
<!--!
- `[비공개]` [GroupTreeCol cfg](./group-tree-col)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.21|기능 추가|