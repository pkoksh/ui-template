---
KEY: onImportFinish
KIND: event
PATH: events/on-import-finish
ALIAS: 엑셀, 텍스트, 로드시, 호출되는, 이벤트
ALIAS_EN: on, import, finish, excel, xlsx, text, string, event
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-import-finish
---
# onImportFinish ***(event)***

> 엑셀/텍스트 로드시 호출되는 이벤트 입니다.\
> 해당 이벤트에서 `1(true)`를 리턴하면 데이터 로드 작업이 중단됩니다.

### Syntax

```plaintext
    onImportFinish:function(paramObject) {

    }
or
    sheet.bind("onImportFinish" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|------|------|-------------|
| sheet | `object` | 엑셀/텍스트가 로딩 중인 시트 객체 |
| type | `string` | 텍스트/엑셀 여부(`EXCEL, TEXT`) |
| data | `object` | 시트에 로딩될 엑셀/텍스트 데이터 |
| result | `number` | **로딩 결과 코드**
`0`:성공
`음수`:로딩 에러 발생 |
| message | `string` | **로딩 결과 메세지**
`""`:성공
`그외`:에러 메세지 |

\
loadExcel시 에러 발생가 발생 했을 경우, 각 음수 코드에 대응하는 에러는 다음과 같습니다.()\
**에러 코드는 서버 모듈에 한정해서 대응되며, 반드시 1.1.15 버전 이후의 서버 모듈을 사용하시고 해당 버전 이후의 jsp로 최신화해주셔야 합니다.**

| Code | Description |
|------|-------------|
| `-1` | load.setMaxRow로 설정한 갯수보다 더 많이 행을 로드하려는 경우 |
| `-2` | load.setStrictHeaderMatch 설정시, 시트 헤더가 엑셀에 하나라도 존재하지 않는 경우 |
| `-3` | load.setMaxColumns로 설정한 갯수보다 더 많이 열을 로드하려는 경우 |
| `-10` | load.setMaxFileSize로 설정한 사이즈보다 더 사이즈가 큰 파일을 로드하려는 경우 |
| `-18` | load.setDisallowDuplicatedHeader 설정시, 로드하는 엑셀 헤더에 중복되는 데이터가 존재할 경우 |
| `-100` | load.setUsePoi(false), load.setUseJXL(false)로 설정되어있고 xls파일을 로드 할 경우
| `-201` | workbookPassword 설정시 비밀번호가 틀렸을 경우 |

### Return

**_boolean_**

### Example

```javascript
options.Events = {
    onImportFinish:function(evtParam){
        if (evtParam["type"] == "TEXT") {
            document.getElementById("myDiv").innerText = evtParam["type"] + "파일을 load 하였습니다.";
        }
          
        // SuppressExportMessage를 설정하지 않고 onImportFinish 이벤트에서 true를 리턴하여 작업을 중단하실 때는 
        // hideMessage()를 호출하여 대기 이미지를 닫아주셔야 됩니다.
        evtParam.sheet.hideMessage();

        return true; // 리턴이 true이면 이후 작업(데이터 로드)을 중단한다.
    }
}
```

### Read More

- [importData method](/docs/funcs/core/import-data)
- [loadExcel method](/docs/funcs/excel/load-excel)

### Since

| product | version | desc |
|---------|---------|------|
| core | 8.0.0.0 | 기능 추가 |
| core | 8.0.0.26 | `result`, `message` 파라미터 추가 |
| core | 8.1.0.6 | return 동작 추가 |

