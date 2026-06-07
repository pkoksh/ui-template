---
KEY: noUpload
KIND: row-property
PATH: props/row/no-upload
ALIAS: 지정한, 행의, 저장, 여부를, 설정합니다
ALIAS_EN: no, upload, save, persist, store
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/no-upload
---
# NoUpload ***(row)***

> 지정한 행의 저장 여부를 설정합니다.

> `1(true)`로 설정한 행의 경우 저장 함수([doSave](/docs/funcs/core/do-save), [getSaveString](/docs/funcs/core/get-save-string) 등) 호출시 상태와 무관하게 무시됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|서버로 전송 (데이터행 `default: 0(false)`)|
|`1(true)`|서버로 전송 제외(필터나 합계행 `default: 1(true)`)|

### Example
```javascript
function save(){
    //특정행은 저장시 서버로 전송 제외하기
    var rows = sheet.getDataRows();
    for(var i = 0; i < rows.length; i++){
        if (rows[i]["CHK"] == 0 && rows[i]["UpYEAR"] < 2018) {
            rows[i]["NoUpload"] = 1;
        }
    }
    //저장함수 호출
    sheet.doSave(url);
}
```
### Read More
- [doSave method](/docs/funcs/core/do-save)
- [getSaveString method](/docs/funcs/core/get-save-string)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
