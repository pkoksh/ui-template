---
KEY: treeCheckSync
KIND: config-property
PATH: props/cfg/tree-check-sync
ALIAS: 트리기능을, 사용하는, 시트에서, 사용, 부모자식
ALIAS_EN: tree, check, sync
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/tree-check-sync
---
# TreeCheckSync ***(cfg)***

> [MainCol](/docs/props/cfg/main-col)을 통해 트리기능을 사용하는 시트에서 `Icon: "Check"` 사용 시 부모자식 간의 관계에 따라 부모를 체크시 자동으로 자식노드도 체크 되게 할지 여부를 설정합니다.

> 트리를 사용하는 경우, `Icon: "Check"` 가 설정된 모든 컬럼에서 유효하게 동작합니다. 



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|일반모드(부모/자식 관계와 무관하게 체크)|
|`1`|관계모드(부모/자식 관계에 따라 자동으로 체크/언체크, 자식이 일부분만 체크된 경우 부모의 체크 박스가 '?'로 체크됨) (`default`)|
|`2`|관계모드(부모/자식 관계에 따라 자동으로 체크/언체크, 자식이 일부분만 체크된 경우 부모의 체크 박스가 'v'로 체크됨) |

### Example
```javascript
options.Cfg = {
   "TreeCheckSync": 0
};
```

### Read More
- [MainCol cfg](/docs/props/cfg/main-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.4|기능 추가|
|core|8.2.0.2|2 mode 추가|