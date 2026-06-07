---
KEY: reversedTree
KIND: config-property
PATH: props/cfg/reversed-tree
ALIAS: 트리, 그룹을, 사용하는, 시트에서, 아래를
ALIAS_EN: reversed, tree, hierarchy
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/reversed-tree
---
# !ReversedTree ***(cfg)***
> 트리, 그룹을 사용하는 시트에서 아래를 기준으로 트리를 표시합니다.
> [SearchMode: 2](/docs/props/cfg/search-mode)에서만 사용가능합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|위에서 부터 트리를 표시합니다. (`default`)|
|`1(true)`|아래에서 부터 트리를 표시합니다.|


### Example
```javascript
options = {
    options.Cfg = {
        ReversedTree: 1   // 트리 구조의 시트에서 아래에서부터 트리를 표시
    };
};
```

### Read More
- [Group cfg](/docs/props/cfg/group)
- [데이터 규격 - Tree 데이터 로드](/docs/appx/data-structure)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
