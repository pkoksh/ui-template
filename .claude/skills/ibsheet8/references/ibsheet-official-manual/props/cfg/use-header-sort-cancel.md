---
KEY: useHeaderSortCancel
KIND: config-property
PATH: props/cfg/use-header-sort-cancel
ALIAS: 일반적으로, 헤더, 셀을, 클릭하여, 소팅하는
ALIAS_EN: use, header, sort, cancel
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/use-header-sort-cancel
---
# UseHeaderSortCancel ***(cfg)***
> 일반적으로 헤더 셀을 클릭하여 소팅하는 경우 오름차순, 내림차순이 번갈아가며 정렬되는데,
> `UseHeaderSortCancel`을 `1(true)`로 설정하면, 오름차순, 내림차순 후  **정렬취소** 순서로 변경됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
| `0(false)` | 헤더클릭 정렬 순서가 오름차순, 내림차순 순서로 정렬 (`default`) |
| `1(true)` | 헤더클릭 정렬 순서가 오름차순, 내림차순, 정렬취소 순서로 정렬 |

### Example
```javascript
options = {
    Cfg :{
        UseHeaderSortCancel: true,
        ...
    }
};
```

### Read More
- [HeaderSortMode cfg](/docs/props/cfg/header-sort-mode)
- [MaxSort cfg](/docs/props/cfg/max-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|기능 추가|
