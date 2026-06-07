---
KEY: highlightAfterSort
KIND: config-property
PATH: props/cfg/highlight-after-sort
ALIAS: 정렬, 동작, 이후, 포커스, 처리
ALIAS_EN: highlight, after, sort, align, alignment, focus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/highlight-after-sort
---
# HighlightAfterSort ***(cfg)***

> 정렬 동작 이후 포커스 처리 동작을 설정합니다. 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|포커스 클리어 및 세로스크롤 위치를 유지합니다. |
|`1`|정렬 동작 이전 포커스 행 유지 및 해당 셀의 위치로 세로스크롤을 이동합니다. (`default`)|
|`2`|정렬 동작 이전 포커스 행 유지 및 가로스크롤 및 세로스크롤 위치를 최상단으로 초기화 합니다. |
|`3`|정렬 동작 이후에도 항상 첫번째 행에 포커스 이동 및 세로스크롤 위치를 해당 셀 위치로 이동 합니다.|
|`4`|포커스 행 위치에 포커스 유지, 만약 25행을 포커스하고 정렬을 하면 항상 25 번째 행에 포커스가 유지됩니다. (세로스크롤 위치 유지합니다.)|

### Example
```javascript
options.Cfg = {
    HighlightAfterSort: 2 // 정렬이 동작되면 이전 포커스 행을 유지하고 세로스크롤 위치는 최상단으로 초기화.
};
```

### Read More
- [doSort method](/docs/funcs/core/do-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.63|기능 추가|
