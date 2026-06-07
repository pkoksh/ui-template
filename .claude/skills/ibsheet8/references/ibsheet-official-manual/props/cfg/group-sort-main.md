---
KEY: groupSortMain
KIND: config-property
PATH: props/cfg/group-sort-main
ALIAS: 그룹핑, 사용시, 그룹, 열에, 대해서
ALIAS_EN: group, sort, main
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/group-sort-main
---
# GroupSortMain ***(cfg)***

> 그룹핑 사용시 그룹 열에 대해서 오름차순/내림차순 정렬 여부를 설정합니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`1`|오름차순 정렬 (`default`)|
|`2`|내림차순 정렬|


### Example
```javascript
options.Cfg = {
    "GroupSortMain": 2       //그룹핑 되는 열에 대해 내림차순으로 정렬한다.
};
```

### Read More
- [Group cfg](./group)
- [GroupMain cfg](./group-main)
- [Solid appendix](/docs/appx/solid)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
