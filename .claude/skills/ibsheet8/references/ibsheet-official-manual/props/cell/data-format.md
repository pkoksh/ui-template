---
KEY: dataFormat
KIND: cell-property
PATH: props/cell/data-format
ALIAS: 셀에, 로딩할, 데이터의, 포매팅을, 설정합니다
ALIAS_EN: data, format
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/data-format
---
# DataFormat ***(cell)***

> [Type](/docs/appx/type)이 `Date`인 셀에 로딩할 데이터의 포매팅을 설정합니다.

> 다시 말해 서버에서 가져오거나 서버로 내보낼 데이터의 포맷을 설정합니다.

> 가령 조회 데이터의 날짜가 "25012017"와 같다면 `DataFormat`에는 "ddMMyyyy"로, 데이터가 "20171225"와 같다면 "yyyyMMdd"로 설정되어야 합니다.

> 시트에서 수정한 내용이 서버로 전달 될때에도 이 속성을 통해 변경한 포맷으로 서버에 문자열이 전달됩니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|yyyyMMdd 등 정해진 문자열|

### Example
```javascript
//1. 메소드를 통해 특정 셀의 DataFormat을 변경
sheet.setAttribute(sheet.getRowById("AR99"), "EDate", "DataFormat", "yyyyMMdd");
//변경내용 확인(수정한 포맷으로 데이터 추출됨)
var json = sheet.getSaveJson();

//2. 객체에 직접 접근해서 DataFormat 변경 (CLS열의 DataFormat을 "yyyyMMddHHmm"로 변경)
var ROW = sheet.getRowById("AR10");
ROW["CLSDataFormat"] = "yyyyMMddHHmm";
//변경내용 확인(수정한 포맷으로 데이터 추출됨)
var json = sheet.getSaveJson();


//3. 조회 데이터 내에서 DataFormat 변경
{
    data:[
        {... ,"CLS":"12312018" "CLSFormat":"MMddyyyy" , ...}
    ]
}
```

### Read More
- [Format cell](./format)
- [EditFormat cell](./edit-format)
- [Format appendix](/docs/appx/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
