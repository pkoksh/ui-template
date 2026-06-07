---
KEY: hasChangedData
KIND: method
PATH: funcs/core/has-changed-data
ALIAS: sheet.hasChangedData, hasChangedData(), 시트, 내에, 변경된, 내용, 입력
ALIAS_EN: has, changed, data, sheet, grid, input, import
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/has-changed-data
---
# hasChangedData ***(method)***
> 시트 내에 변경된 내용(입력, 수정, 삭제)이 있는지 확인합니다.



### Syntax
```javascript
number hasChangedData(dataonly);
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|dataonly|`boolean`|선택|수정 여부 확인을 Sheet전체 영역과 Data영역만 대상으로 지정할 지 여부
`0(false)`:Sheet전체 영역 대상 지정(`default`)
`1(true)`:Data영역만 대상 지정|


### Return Value
***number*** : 수정된 내용이 있으면 1, 없으면 0

### Example
```javascript
window.onbeforeunload = function() {
    if(sheet.hasChangedData()) {
        return "시트에 수정된 내용이 있습니다.\n계속 진행시 수정하신 내용은 잃어버리게 됩니다.";
    }
}

sheet.hasChangedData(true); //데이터 영역에서 수정된 내용이 있는 경우 1, 없으면 0
```
### Read More
- [acceptChangedData method](./accept-changed-data)
- [getChangedData method](./get-changed-data)
- [getSaveJson method](./get-save-json)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.3.0.20|dataonly 인자 추가|
