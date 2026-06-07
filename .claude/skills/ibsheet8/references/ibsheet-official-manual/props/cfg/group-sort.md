---
KEY: groupSort
KIND: config-property
PATH: props/cfg/group-sort
ALIAS: 그룹핑시, 기준컬럼에, 정렬, 처리, 여부를
ALIAS_EN: group, sort, align, alignment
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/group-sort
---
# GroupSort ***(cfg)***

> 그룹핑시 기준컬럼에 대한 정렬 처리 여부를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|0|Sort 처리 없이 현재 상태로 그룹핑|
|1|Sort 처리 후 그룹핑 (`default`)|


### Example
```javascript
options.Cfg = {
    "GroupSort": 0       // 정렬 처리 하지 않고 현재 상태로 그룹핑
};
```

### Read More
- [Group cfg](./group)
- [GroupMain cfg](./group-main)
- [GroupSortMain](./group-sort-main)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.35|기능 추가|
