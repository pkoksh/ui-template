---
KEY: onBeforeFileDown
KIND: event
PATH: events/on-before-file-down
ALIAS: 설정된, 열에, 위치한, 셀을, 클릭한
ALIAS_EN: on, before, file, down
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-file-down
---
# onBeforeFileDown ***(event)***
> [Type](/docs/props/col/type)이 `File` 설정된 열에 위치한 셀을 클릭한 경우 호출되는 이벤트입니다.

> 파일 다운로드 시 발생하는 이벤트로 저장된 셀에 한에서 발생합니다. 파일이 업로드 된 셀이 저장 전인 경우에는 해당 이벤트가 발생하지 않습니다. 
 
> 파일 다운로드 전에 발생하며 `true(1)`리턴시 다운로드가 동작하지 않습니다. 
 

### Syntax

```
    onBeforeFileDown : function(paramObject) {

    }
or
    sheet.bind("onBeforeFileDown" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|셀의 열이름|
|path|`string`|[Path](/docs/props/cell/path) 또는 [FilePath](/docs/props/cfg/export)로 지정된 파일이 저장된 경로|
|value|`string`|셀 값(파일 이름)|

### Return
***boolean***


### Example
```javascript
options.Events = {
    // 클릭한 셀의 파일의 호출 경로 변경
    onBeforeFileDown: function (evtParam) {
        location.href = "변경할 url" + evtParam.value;
        return true;
    }
}
```
**위의 예제에서 `false(0)` 반환 시 클릭한 셀의 경로로 다운로드 됩니다.**

### Read More
- [Path cell](/docs/props/cell/path) 

- [Export cfg](/docs/props/cfg/export) 

- [Type appendix](/docs/appx/type) 

- [File Type 업로드 appendix](/docs/appx/file-type-upload) 


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
