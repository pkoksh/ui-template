---
KEY: mergeVisibleDom
KIND: config-property
PATH: props/cfg/merge-visible-dom
ALIAS: 에서, 보이는, 영역만, 머지할지에, 여부를
ALIAS_EN: merge, visible, dom
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/merge-visible-dom
---
# MergeVisibleDom ***(cfg)***

> [SearchMode](/docs/props/cfg/search-mode):0 에서 보이는 영역만 머지할지에 대한 여부를 설정합니다. 

> [MergeCellsMatch Cfg](/docs/props/cfg/merge-cells-match) 와 함께 사용시 보이지 않는 영역까지 머지된 셀에 대해서 데이터 값을 자동으로 바꾸게 할 수 있습니다.
<!-- 해당 기능은 자동 머지([DataMerge](/docs/props/cfg/data-merge))를 이용한 머지 영역에서만 동작됩니다. 
 -->

### Type
`boolean`

### Options 
|Value|Description|
|-----|-----|
|`0(false)`|자동 머지시 전체 머지 영역의 값 병합|
|`1(true)`|자동 머지시 보여지는 셀의 영역까지만 병합 (`default`)|

### Example
```javascript
options.Cfg = {
    MergeVisibleDom: false
};
```

### Read More
- [DataMerge Cfg](/docs/props/cfg/data-merge)
- [MergeCellsMatch Cfg](/docs/props/cfg/merge-cells-match)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.26|기능 추가|
