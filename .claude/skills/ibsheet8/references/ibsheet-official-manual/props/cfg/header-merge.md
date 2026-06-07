---
KEY: headerMerge
KIND: config-property
PATH: props/cfg/header-merge
ALIAS: 시트, 생성, 헤더, 영역에서, 값을
ALIAS_EN: header, merge, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/header-merge
---
# HeaderMerge ***(cfg)***

> 시트 생성 시 헤더 영역에서 셀 값을 기준으로 병합할지 여부 및 병합 종류를 설정합니다.

> 옵션에 대한 설명은 [DataMerge](./data-merge)와 동일합니다.

> 시트 생성 후 [setAutoMerge](/docs/funcs/core/set-auto-merge)메소드를 이용하여 헤더 영역의 병합을 동적으로 변경할 수 있습니다.

> [Span cell](/docs/props/cell/span)과 [RowSpan cell](/docs/props/cell/row-span)보다 우선 적용됩니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
| `0` | 병합 안함 (`default`)|
| `1` | 열 기준 병합|
| `2` | 행 기준 병합|
| `3` | 열 우선 병합|
| `4` | 행 우선 병합|
| `5` | 열 우선 사방 병합|
| `6` | 행 우선 사방 병합|

### Example
```javascript
options = {
    Cfg :{
        HeaderMerge: 0,  // 시트 생성 시 헤더 영역의 셀 병합을 진행하지 않습니다.
    }
};
```

### Try it
- [0 by default with setAutoMerge](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Merge/)

### Read More
- [Span cell](/docs/props/cell/span)
- [RowSpan cell](/docs/props/cell/row-span)
- [DataMerge cfg](./data-merge)
- [PrevColumnMerge cfg](./prev-column-merge)
- [setAutoMerge method](/docs/funcs/core/set-auto-merge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
