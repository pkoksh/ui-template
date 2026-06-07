---
KEY: Alias
KIND: cell-property
PATH: props/cell/Alias
ALIAS: 열의, 경우, 실제, 파일명, 대신
ALIAS_EN: alias
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/Alias
---
# Alias ***(cell)***
> 열의 [Type](/docs/props/cell/type)이 `File`인 경우 실제 파일명 대신 보여질 셀 값을 설정합니다.

> 지정하지 않을 경우 실제 파일명이 셀 값에 보여지게 됩니다.
>
> 구분자를 포함하여 해당 셀의 파일들의 가명을 개별 설정할 수 있습니다.
<!--!
> `[비공개 설명]` 배열로도 개별 설정이 가능

> `Format`이 설정된 경우 적용되지 않습니다.
!-->

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|`File`컬럼 셀에 파일명 대신 보여질 문자열|

### Example
```javascript
//1. 메소드를 통해 속성 설정
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Alias", "myFile" );


//2. 객체에 직접 접근해서 속성 설정(열이름이 CLS 로 가정)
var ROW = sheet.getRowById("AR10");
ROW["CLSAlias"] = "myFile";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성설정(열이름이 CLS 로 가정)
{
    data:[
        {... , "CLSAlias":"myFile" , ...}
    ]
}

//4. 개별 설정을 하는 경우
{
    data: [
        {
            "CLS": "testFile.xlsx;testFile2.xlsx",
            "CLSAlias": "file1;file2"
        }
    ]
}
```

### Read More
- [Type appendix](/docs/appx/type)
- [File Type 업로드 appendix](/docs/appx/file-type-upload)
- [Path cell](/docs/props/cell/path)
- [Format]

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|기능 추가|
|core|8.3.0.21|개별 설정 동작 개선|