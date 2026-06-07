---
KEY: onBeforeExport
KIND: event
PATH: events/on-before-export
ALIAS: 다운로드, 함수, 호출시, 서버로, 시트의
ALIAS_EN: on, before, export, function, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-export
---
# onBeforeExport ***(event)***
> 다운로드 함수([exportData](/docs/funcs/core/export-data), [down2Excel](/docs/funcs/excel/down-to-excel), [down2Text](/docs/funcs/excel/down-to-text), [down2Pdf](/docs/funcs/excel/down-to-pdf)) 호출시, 서버로 시트의 데이터 전송 전에 발생합니다.

> 시트의 정보와 데이터를 하나의 문자열로 묶어, `Data`에 담고, 지정한 `jsp(혹은 aspx)`로 `response` 합니다. 

> 해당 이벤트에서 `1(true)`를 리턴하면 다운로드를 중단할 수 있습니다.

### Syntax

```
    onBeforeExport : function(paramObject) {

    }
or
    sheet.bind("onBeforeExport" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|type|`string`|[exportData](/docs/funcs/core/export-data), [down2Excel](/docs/funcs/excel/down-to-excel), [down2Text](/docs/funcs/excel/down-to-text), [down2Pdf](/docs/funcs/excel/down-to-pdf) 함수 호출에 따라 `EXCEL, TEXT, PDF`|
|formElem|`object`|서버로 전송할 데이터를 담고 있는 객체

`Data` 확인
다운로드 함수에서 `reqHeader`를 설정하지 않았을 경우`evtParam.formElem.Data.value` 확인하고 `reqHeader`를 설정했을 경우 `evtParam.formElem.get("Data")`로 확인
`exportData`에서는 확인 불가|
|data|`object`|다운로드 할 파일을 blob 형태로 제공. `data.blob` 으로 전달 되며 수정 가능
`exportData`에서만 사용 가능|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeExport:function(evtParam){
        // 사용자 등급에 따라 다운로드시 경고를 보여주거나 중단시킨다.
        if(userLvl < 3){
            alert("민감한 데이터를 포함하고 있습니다.\n사용에 주의해 주세요.");
        }else{
            alert("다운로드 권한이 없습니다.");
            evtParam.sheet.hideMessage();
            return true;
        }
    }
}
```

### Read More
- [exportData method](/docs/funcs/core/export-data)
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [down2Text method](/docs/funcs/excel/down-to-text)
- [onExportFinish event](./on-export-finish)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|기능 추가|
|excel|3.0.6|data parameter 추가|
