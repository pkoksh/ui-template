---
KEY: onCancleFile
KIND: event
PATH: events/on-cancle-file
ALIAS: 에서, 셀에서, 파일, 업로드, 선택
ALIAS_EN: on, cancle, file, select, selection
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-cancle-file
---
# onCancelFile ***(event)***
> `Type:File`에서 셀에서 파일 업로드 할 때, 파일 선택 창의 파일 선택 취소 혹은 닫기 후 발생합니다. 


### Syntax
```
    onCancelFile  : function(paramObject) {

    }
or
    sheet.bind("onCancelFile " , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|시트 객체|
|row|`object`|	셀이 위치한 데이터 로우 객체|
|col|`string`|셀의 열이름|


### Return
***none***

### Example
```javascript
options.Events = {
  // 파일 업로드 창에서 취소하는 시점에 취소 alert 띄우기
  onCancelFile: function(evtParam) {
    alert('파일 선택 취소');
  }
}
```

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.86|기능 추가|
