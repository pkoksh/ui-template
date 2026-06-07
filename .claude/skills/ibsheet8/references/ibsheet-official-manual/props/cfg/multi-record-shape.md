---
KEY: multiRecordShape
KIND: config-property
PATH: props/cfg/multi-record-shape
ALIAS: 멀티레코드, 기능을, 사용하는, 시트에서, 엑셀
ALIAS_EN: multi, record, shape, excel, xlsx
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/multi-record-shape
---
# MultiRecordShape ***(cfg)***

> 멀티레코드([MultiRecord](/docs/props/cfg/multi-record)) 기능을 사용하는 시트에서 엑셀 파일 다운로드를 보여지는 그대로 나타나게 하는 설정입니다.

> 서버 모듈 다운로드([down2Excel](/docs/funcs/excel/down-to-excel))에 대해서만 지원됩니다. 클라이언트 모듈 다운로드([exportData](/docs/funcs/core/export-data))는 지원하지 않습니다.

> 다이얼로그를 이용한 다운로드 하는 [showDownloadDialog](/docs/funcs/dialog/show-download-dialog)에서는 지원되지 않습니다.



### Type
`number`


### Options
|Value|Description|
|-----|-----|
|`0`|열을 일렬로 표시해서 다운로드 (`default`)|
|`1`|열을 시트에서 보이는대로 표시해서 다운로드|
<!--!
|`[비공개]` `2`|Select 시 멀티레코드 모양으로 동작|
|`[비공개]` `4`|복사/붙여넣기 시 멀티레코드 모양으로 동작|
!-->


### Example
```javascript
options.Cfg = {
   MultiRecord: 1,  // 멀티레코드 전용 시트로 설정
   MultiRecordShape: 1,  // 멀티레코드 시트의 모양대로 엑셀 파일 다운로드
   ...
};

// API 사용
sheet.down2Excel({ sheetDesign: 1, merge: 1 }); // 엑셀 다운로드 실행
```

### Read More

- [MultiRecord cfg](/docs/props/cfg/multi-record)
- [down2Excel method](/docs/funcs/excel/down-to-excel)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|excel|0.0.0|기능 추가|
<!--!
|`[비공개]` core|8.0.0.17|`2(Select)`, `4(Copy/Paste)` 기능 추가|
!-->
