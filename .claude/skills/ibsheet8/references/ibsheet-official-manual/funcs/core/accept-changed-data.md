---
KEY: acceptChangedData
KIND: method
PATH: funcs/core/accept-changed-data
ALIAS: sheet.acceptChangedData, acceptChangedData(), 시트, 내에, 변경된, 내용, 입력
ALIAS_EN: accept, changed, data, sheet, grid, input, import
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/accept-changed-data
---
# acceptChangedData ***(method)***

> 시트 내에 변경된 내용(입력, 수정, 삭제)을 적용 합니다.

> 행의 상태가 `Added(입력)`, `Changed(수정)`인 행은 상태만 클리어되고, `Deleted(삭제)`인 행은 삭제 됩니다.

> 인자로 [데이터 로우 객체](/docs/appx/row-object)를 지정하면 해당 행에 대해서만 적용 합니다.


### Syntax
```javascript
void acceptChangedData( row );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|선택|[데이터 로우 객체](/docs/appx/row-object)|


### Return Value
***none***


### Example
```javascript
//저장 작업 완료 CallBack 함수
function SaveSuccessCallBack(data){
    //수정한 내용을 모두 반영한다.
    sheet.acceptChangedData();
}
```

### Read More

- [applySaveResult method](./apply-save-result)
- [hasChangedData method](./has-changed-data)
- [getChangedData method](./get-changed-data)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
