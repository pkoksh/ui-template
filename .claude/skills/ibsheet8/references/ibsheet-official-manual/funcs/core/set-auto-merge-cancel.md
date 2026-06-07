---
KEY: setAutoMergeCancel
KIND: method
PATH: funcs/core/set-auto-merge-cancel
ALIAS: sheet.setAutoMergeCancel, setAutoMergeCancel(), 데이터, 기준으로, 병합된, 것을, 해제합니다
ALIAS_EN: set, auto, merge, cancel, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-auto-merge-cancel
---
# setAutoMergeCancel ***(method)***

> 데이터 기준으로 셀 병합된 것을 해제합니다.

> 인자에 따라 병합 해제될 영역을 선택할 수 있습니다.

### Syntax
```javascript
void setAutoMergeCancel( mode );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|mode|`string`|선택|병합 해제할 영역을 선택합니다. 
미입력시 모든 영역에서 병합이이 해제됩니다.
`"Data"`:데이터 영역에 있는 병합 해제
`"Header"`:헤더 영역에 있는 병합 해제
`"Head"`:Head 영역에 있는 병합 해제
`"Foot"`:Foot 영역에 있는 병합 해제|

### Return Value
***none***

### Example
```javascript
//  데이터 영역의 셀 병합을 해제합니다.
sheet.setAutoMergeCancel( {mode:"Data"} );
```

### Read More
- [setAutoMerge method](./set-auto-merge)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.2.0.14|`mode`에 `Head`, `Foot` 추가|