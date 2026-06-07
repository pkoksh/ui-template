---
KEY: mergeCellsMatch
KIND: config-property
PATH: props/cfg/merge-cells-match
ALIAS: 머지된, 데이터, 수정시, 전체, 머지
ALIAS_EN: merge, cells, match, data, all, total
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/merge-cells-match
---
# MergeCellsMatch ***(cfg)***

> 머지된 데이터 수정시 전체 머지 영역의 데이터를 수정합니다. 

> [setValue](/docs/funcs/core/set-value)를 통한 값 변경 시에도 적용됩니다. 

> [onBeforeChange](/docs/events/on-before-change), [onAfterChange](/docs/events/on-after-change)는 값이 변경된 전체 셀 마다 발생합니다.

> 해당 기능은 자동 머지([DataMerge](/docs/props/cfg/data-merge))를 이용한 머지 영역에서만 동작됩니다.

> `주의` 복사붙여넣기(ctrl+c/ctrl+v) 를 통해 데이터를 수정할 때에는 셀 단위로 사용해야 합니다.

### Type
`boolean`

### Options 
|Value|Description|
|-----|-----|
|`0(false)`|머지된 셀 수정시 첫번째 셀의 값만 변경 (`default`)|
|`1(true)`|머지된 셀 수정시 전체 머지 영역의 값 변경|

### Example
```javascript
options.Cfg = {
    MergeCellsMatch: true
};
```

### Read More
- [DataMerge Cfg](/docs/props/cfg/data-merge)
- [setValue Method](/docs/funcs/core/set-value)
- [onBeforeChange Event](/docs/events/on-before-change)
- [onAfterChange Event](/docs/events/on-after-change)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
|core|8.1.0.49|복사붙여넣기를 통한 값 변경에도 기능 적용|
