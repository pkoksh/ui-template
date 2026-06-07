---
KEY: sortIcons
KIND: config-property
PATH: props/cfg/sort-icons
ALIAS: 정렬, 아이콘의, 화면에, 표시여부, 기능
ALIAS_EN: sort, icons, align, alignment
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/sort-icons
---
# SortIcons ***(cfg)***

> 정렬 아이콘의 화면에 표시여부 와 정렬 기능 동작 위치를 설정합니다. 

> 아이콘에 대한 추가 설정 및 정렬 가능 여부는 [SortIcons(Header)](/docs/props/row/sort-icons) 에서 설정할 수 있습니다. 

> 단, 아이콘 클릭으로 정렬 할 수 있는 옵션 2 또는 3은 `Header.SortIcons:1` 을 설정하여 모든 정렬 아이콘 표시해야 사용할 수 있습니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|sort 아이콘 숨김, 셀 클릭시 오름차순 -> 내림차순 정렬|
|`1`|sort 아이콘 표시, 셀 클릭시 오름차순 -> 내림차순 정렬 (`default`)|
|`2`|sort 아이콘의 위쪽 클릭시 오름차순, 아래 클릭시 내림차순 정렬|
|`3`|셀(sort 아이콘 포함) 위쪽 클릭시 오름차순, 셀 아래쪽 클릭시 내림차순 정렬|


### Example
```javascript
options.Cfg = {
    CanSort: 1,        // 정렬 기능 사용
    SortIcons: 0       // 정렬 아이콘 표시 안함(셀 클릭으로 정렬 동작)
};
```
**또는**
```javascript
options.Cfg = {
    CanSort: 1,        // 정렬 기능 사용
    SortIcons: 2       // sort 아이콘 클릭으로만 정렬 동작
};
options.Header  = {
    SortIcons: 0,       // 아이콘이 모두 숨겨지고 정렬 불가
    SortIcons: 1,       // 모든 정렬 아이콘 표시(정렬되기 전에는 .IBSort0Right 이미지가 표시)
    SortIcons: 2       // 정렬한 열에만 아이콘이 표시됨.
};
```

### Read More
- [CanSort cfg](./can-sort)
- [SortIcons row](/docs/props/row/sort-icons)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
