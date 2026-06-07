---
KEY: path
KIND: cell-property
PATH: props/cell/path
ALIAS: 열의, 경우, 파일을, 다운받을, 경로를
ALIAS_EN: path
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/path
---
# Path ***(cell)***
> 열의 [Type](/docs/props/cell/type)이 `File`인 경우 파일을 다운받을 경로를 설정합니다.

> `File` [Type](/docs/props/cell/type)을 사용하시는 경우 반드시 설정해야 정상적으로 다운로드 됩니다. 

> 해당 속성 혹은 [FilePath](/docs/props/cfg/export)가 설정된 경우에만 [File](/docs/appx/file-type-upload)타입인 셀에 데이터가 표시됩니다. 

>
> 구분자를 포함하여 해당 셀의 파일들의 경로를 개별 설정할 수 있습니다.
<!--!
> `[비공개 설명]` 배열로도 개별 경로 설정이 가능 
!-->

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`| 파일을 다운받을 경로 |

### Example
```javascript
//1. 메소드를 통해 속성 설정
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Path", "https://api.ibleaders.com/ibsheet/v8/samples/customer/files/");


//2. 객체에 직접 접근해서 속성 설정(열이름이 CLS 로 가정)
var ROW = sheet.getRowById("AR10");
ROW["CLSPath"] = "https://api.ibleaders.com/ibsheet/v8/samples/customer/files/";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성설정(열이름이 CLS 로 가정)
{
    data:[
        {... , "CLS":"testFile.xlsx", "CLSPath":"https://api.ibleaders.com/ibsheet/v8/samples/customer/files/" , ...}
    ]
}

//4. 개별 경로를 설정을 하는 경우
{
    data: [
        {
            "CLS": "testFile.xlsx;testFile2.xlsx",
            "CLSPath": "https://api.ibleaders.com/ibsheet/v8/samples/customer/files/;https://api.ibleaders.com/ibsheet/v8/samples/customer/files2/"
        }
    ]
}
```

### Read More
- [Type appendix](/docs/appx/type)
- [File Type 업로드 appendix](/docs/appx/file-type-upload)
- [Alias cell](/docs/props/cell/Alias)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|기능 추가|
|core|8.3.0.21|개별 설정 동작 개선|