---
KEY: downExcelFillImage
KIND: config-property
PATH: props/cfg/down-excel-fill-image
ALIAS: 이용하여, 엑셀을, 다운로드, 머지, 영역에
ALIAS_EN: down, excel, fill, image
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/down-excel-fill-image
---
# !DownExcelFillImage ***(cfg)***

> [ExportData](/docs/funcs/core/export-data)를 이용하여 엑셀을 다운로드 할 때 머지 영역에 들어가는 이미지를 셀에 채우도록 설정합니다


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|머지 영역의 이미지를 채우지 않음 (`default`)|
|`1`|이미지를 늘려 확대하여 머지 영역 셀에 가득 채움|
<!--!
|`[비공개]` `2`|이미지를 반복하여 늘려 머지 영역 셀에 가득 채움|
!-->

### Example
```javascript
options.Cfg = {
  DownExcelFillImage: 1 // 이미지를 늘려 확대하여 다운로드
};

sheet.exportData(); // 엑셀 다운로드
```

### Read More
- [ExportData method](/docs/funcs/core/export-data)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.5|기능 추가|
