---
KEY: onSelectFile
KIND: event
PATH: events/on-select-file
ALIAS: 함수를, 호출하여, 사용자가, 엑셀파일이나, 텍스트
ALIAS_EN: on, select, file, text, string
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-select-file
---
# onSelectFile ***(event)***
> [importData](/docs/funcs/core/import-data), [loadExcel](/docs/funcs/excel/load-excel), [loadText](/docs/funcs/excel/load-text) 함수를 호출하여 사용자가 엑셀파일이나 텍스트 파일을 선택시 발생합니다.

> 위 함수 호출시 먼저 파일선택창이 열리고, 여기서 파일을 선택했을 때 발생합니다. 

> 해당 이벤트에서 false를 리턴할 경우, 파일 업로드가 취소됩니다.

### Syntax

```
    onSelectFile : function(paramObject) {

    }
or
    sheet.bind("onSelectFile" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|type|`string`|[importData](/docs/funcs/core/import-data), [loadExcel](/docs/funcs/excel/load-excel), [loadText](/docs/funcs/excel/load-text) 함수 호출에 따라 `EXCEL, TEXT`|
|filename|`string`|선택한 파일 명|

### Return
***none***

### Example
```javascript
options.Events = {
    onSelectFile:function(evtParam){
       //업로드 완료시까지 화면에 block을 띄운다.
       $.blockUI({ message: '<h1><img src="busy.gif" />파일 업로드 작업중입니다...</h1>' });
    }
}
```

### Read More
- [importData method](/docs/funcs/core/import-data)
- [loadExcel method](/docs/funcs/excel/load-excel)
- [loadText method](/docs/funcs/excel/load-text)
- [onImportFinish event](./on-import-finish)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
