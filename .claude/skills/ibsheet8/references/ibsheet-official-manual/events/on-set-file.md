---
KEY: onSetFile
KIND: event
PATH: events/on-set-file
ALIAS: 에서, 셀에, 파일, 업로드, 직전
ALIAS_EN: on, set, file
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-set-file
---
# onSetFile ***(event)***
> `Type:File`에서 셀에 파일 업로드 직전, 파일 선택 창의 파일 선택 완료 직후 발생합니다. 

> `files`인자로 선택한 파일 정보를 확인할 수 있습니다.

> `1(true)`를 리턴하는 경우 파일 타입에 값 입력이 중단되고 파일이 올라가지 않습니다


### Syntax
```
    onSetFile  : function(paramObject) {

    }
or
    sheet.bind("onSetFile " , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|시트 객체|
|row|`object`|	셀이 위치한 데이터 로우 객체|
|col|`string`|셀의 열이름|
|files|`array`|선택한 파일 객체 (`FileList`)|


### Return
***boolean***

### Example
```javascript
options.Events = {
  // 파일 업로드 창에서 선택한 파일명 확인
  onSetFile: function(evtParam) {
    console.log(evtParam.files[0].name);
  }
}
```

### Read More
- [File Type 업로드 appendix](/docs/appx/file-type-upload)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|기능 추가|
