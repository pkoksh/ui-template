---
KEY: dataFormat
KIND: column-property
PATH: props/col/data-format
ALIAS: 날짜, 타입의, 열에서, 로딩할, 데이터의
ALIAS_EN: data, format, date, datetime
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/data-format
---
# DataFormat ***(col)***

> 날짜 타입의 열에서 로딩할 데이터의 포멧을 설정합니다.

> 가령 조회 데이터의 날짜가 "25012017" 와 같다면 DataFormat에는 "ddMMyyyy" 로,

> 데이터가 "20171225" 와 같다면 DataFormat에는 "yyyyMMdd" 로 설정되어야 합니다.

> 해당 열에 데이터가 서버로 전송되기 위해 추출 될 때, ([doSave](/docs/funcs/core/do-save), [getSaveString](/docs/funcs/core/get-save-string))도 지정한 포멧으로 전송됩니다.


**날짜 예약어**

|표시|의미|
|---|---|
|`yyyy`|년도(4자리)|
|`MM`|월(2자리)|
|`dd`|일(2자리)|
|`HH`|시간(2자리)|
|`mm`|분(2자리)|
|`ss`|초(2자리)|

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|yyyyMMdd 등 정해진 문자열|


### Example
```javascript
//특정 열에서 년월일 데이터 구조를 설정합니다.
options.Cols = [
    ...
    {Type: "Date", Format: "yyyy.MM.dd HH:ss", DataFormat: "yyyyMMddHHmmss", Name: "enterDate", Width: 120 ...},
    ...
];
```

### Read More
- [Format col](/docs/props/col/format)
- [EditFormat col](/docs/props/col/edit-format)
- [Format appendix](/docs/appx/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
