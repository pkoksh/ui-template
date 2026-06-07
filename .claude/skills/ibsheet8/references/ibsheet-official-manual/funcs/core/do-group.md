---
KEY: doGroup
KIND: method
PATH: funcs/core/do-group
ALIAS: sheet.doGroup, doGroup(), 지정한, 열들을, 함수를, 그룹핑
ALIAS_EN: do, group
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/do-group
---
# doGroup ***(method)***
> 지정한 열들을 함수를 통해 그룹핑 합니다.
### Syntax
```javascript
void doGroup( cols );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|cols|`string`|필수|그룹할 열이름을 ","를 구분자로 순서대로 입력


### Return Value
***none***

### Example
```javascript
//부서와 팀컬럼을 순서대로 그룹핑
sheet.doGroup("dempNm,teamNm");
```

### Read More
- [Group cfg](/docs/props/cfg/group)
- [onBeforeGroup event](/docs/events/on-before-group)
- [onAfterGroup  event](/docs/events/on-after-group)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.3|groupcols 인자명 변경 -> cols, 다른 API와 통일|
