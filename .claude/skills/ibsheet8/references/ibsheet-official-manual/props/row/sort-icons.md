---
KEY: sortIcons
KIND: row-property
PATH: props/row/sort-icons
ALIAS: 정렬, 아이콘의, 화면, 표시여부와, 동작을
ALIAS_EN: sort, icons, align, alignment
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/sort-icons
---
# SortIcons ***(Row>Header)***

> 정렬 아이콘의 화면 표시여부와 동작을 설정합니다. 

> 해당 기능과 [SortIcons cfg](/docs/props/cfg/sort-icons)를 같이 사용하는 경우 옵션 `0`은 해당 옵션이 적용되고, 옵션 `1, 2`는[SortIcons cfg](/docs/props/cfg/sort-icons)이 적용됩니다. 



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`| 아이콘이 모두 숨겨지고 정렬 불가 |
|`1`| 모든 정렬 아이콘 표시(정렬되기 전에는 .IBSort0Right 이미지가 표시) , `MultiRecord`에서는 사용 불가 |
|`2`| 정렬한 열에만 아이콘이 표시됨 (`default`) |


### Example
```javascript
options.Def.Header  = {
    SortIcons: 1       // 모든 정렬 아이콘 표시
};
```

### Read More
- [SortIcons cfg](/docs/props/cfg/sort-icons)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
