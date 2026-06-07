---
KEY: showTreeLevel
KIND: method
PATH: funcs/core/show-tree-level
ALIAS: sheet.showTreeLevel, showTreeLevel(), 지정한, 레벨만큼, 트리를, 접거나, 펼칩니다
ALIAS_EN: show, tree, level
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-tree-level
---
# showTreeLevel ***(method)***
> 지정한 레벨만큼 트리를 접거나 펼칩니다.


### Syntax
```javascript
void showTreeLevel( level, ignoreEvent, childMode );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|level|`number`|필수|보고자 하는 레벨 값 (최상위 노드는 `1`부터 시작)|
|ignoreEvent|`boolean`|선택|이벤트([onBeforeExpand event](/docs/events/on-before-expand), [onAfterExpand event](/docs/events/on-after-expand)) 호출 여부를 설정
`0(false)`:이벤트 호출 (`default`)
`1(true)`:이벤트 호출하지 않음|
|childMode|`number`|선택|지정한 레벨의 하위 로우들의 접힘, 펼침 여부를 설정합니다.
`0`:접거나 펼쳐진 내용 유지 (`default`)
`1`:하위 노드 모두 접음
`2`:하위 노드 모두 펼침|

### Return Value
***none***

### Example
```javascript
//3레벨까지만 접습니다.
sheet.showTreeLevel(3);

//최상위 노드까지 접습니다.
sheet.showTreeLevel(1);

//2레벨까지 접고 이벤트를 호출하지 않습니다.
sheet.showTreeLevel(2, 1);

//3레벨까지 접고 하위 모든 노드를 접습니다.
sheet.showTreeLevel(3, 0, 1);
```
### Read More
- [onBeforeExpand event](/docs/events/on-before-expand)
- [onAfterExpand event](/docs/events/on-after-expand)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.4|`ignoreEvent` 인자 추가|
|core|8.0.0.7|`childMode` 인자 추가|