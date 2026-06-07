---
KEY: exportValue
KIND: cell-property
PATH: props/cell/export-value
ALIAS: 엑셀, 다운로드, 보여질, 글자를, 설정합니다
ALIAS_EN: export, value, excel, xlsx
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/export-value
---
# ExportValue ***(cell)***

> 엑셀 다운로드 시 보여질 글자를 설정합니다.

> `Link`, `Img` 타입에서는 데이터 포맷을 맞춰줘야 정상적으로 셀 값이 보여집니다.

> 예시) Link 타입: "||ExportValue 설정 값|"

> 예시) Img 타입: "|../image.jpg|50|50|0|0|||"

> 그외에 타입에서는 설정한 string값 대로 다운로드 됩니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|엑셀 다운로드 시 보여질 문자|



### Example
```javascript
// 1. 메소드를 통해 특정 셀에 속성 적용 (열이름 : CLS )
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "ExportValue", "먼저 '실적대차' 열의 내용을 확인해 주세요.");

// 2. 객체에 직접 접근해서 속성 적용 (열이름 : CLS )
var ROW = sheet.getRowById("AR10");
ROW["CLSExportValue"] = "마감되었습니다.";
// 변경내용 확인
sheet.refreshCell({ row:ROW, col:"CLS" });

// 3. 조회 데이터 내에서 속성 적용  (열이름 : CLS )
{
    data:[
        {... , "CLSExportValue": "공사 시작일을 먼저 입력해 주세요." , ...}
    ]
}
```

### Read More
- [exportData method](/docs/funcs/core/export-data)
- [down2Excel method](/docs/funcs/excel/down-to-excel)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.19|기능 추가|
|excel|1.0.6|기능 추가|
