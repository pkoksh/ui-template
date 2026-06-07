---
KEY: sortPos
KIND: row-property
PATH: props/row/sort-pos
ALIAS: 소팅시, 지정한, 행의, 위치를, 고정합니다
ALIAS_EN: sort, pos
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/sort-pos
---
# SortPos ***(row)***
> 소팅시 지정한 행의 위치를 고정합니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`양수`|위에서부터 순서대로 원하는 `SortPos`가 지정된 행들 가운데 지정한 순번에 위치하게 됩니다.
 가령 `2`로 설정하면 헤더 아래 `SortPos`가 설정된 행들 중에 두번째 행에 고정됩니다.
 만약 `SortPos`를 지정한 행이 하나밖에 없다면 첫번째 행에 위치하게 됩니다.|
|`음수`|아래에서부터 순서대로 원하는 인덱스에 위치하게 됩니다.
가령 `1`로 설정하면 맨 아래 행에 고정됩니다.|


### Example
```javascript
//지정한 행들을 소팅시 최상단에 위치시킨다.
var row = sheet.getFocusedRow();
row["SortPos"] = 1;
```

### Read More
- [CanSort col](/docs/props/col/can-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
