---
KEY: multiRecordShapeLoad
KIND: config-property
PATH: props/cfg/multi-record-shape-load
ALIAS: 멀티레코드, 기능을, 사용하는, 시트에서, 모양대로
ALIAS_EN: multi, record, shape, load
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/multi-record-shape-load
---
# !MultiRecordShapeLoad ***(cfg)***

> 멀티레코드([MultiRecord](/docs/props/cfg/multi-record)) 기능을 사용하는 시트에서 모양대로 엑셀 파일 업로드를 지원하는 기능입니다.

> 서버 모듈 업로드([loadExcel](/docs/funcs/excel/load-excel))에 대해서만 지원됩니다. 클라이언트 모듈 업로드([importData](/docs/funcs/core/import-data))는 지원하지 않습니다.

> 다이얼로그를 이용한 업로드 하는 [showUploadDialog](/docs/funcs/dialog/show-upload-dialog)에서는 지원되지 않습니다.



### Type
`number`


### Options
|Value|Description|
|-----|-----|
|`0`|열이 일렬로 되어 있는 엑셀 파일 업로드 (`default`)|
|`1`|열이 시트에서 보이는대로 되어있는 엑셀 파일 업로드|


### Example
```javascript
options.Cfg = {
   MultiRecord: 1,  // 멀티레코드 전용 시트로 설정
   MultiRecordShape: 1,  // 멀티레코드 시트의 모양대로 엑셀 파일 다운로드
   MultiRecordShapeLoad: 1,  // 멀티레코드 시트의 모양대로 엑셀 파일 업로드
   ...
};

// API 사용
sheet.loadExcel(); // 엑셀 업로드 실행
```

### Read More

- [MultiRecord cfg](/docs/props/cfg/multi-record)
- [loadExcel method](/docs/funcs/excel/load-excel)

### Since

|product|version|desc|
|---|---|---|
|excel|1.0.4|기능 추가|
