---
KEY: accept
KIND: cell-property
PATH: props/cell/accept
ALIAS: 셀에, 업로드를, 허용할, 파일, 형식을
ALIAS_EN: accept
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/accept
---
# Accept ***(cell)***

> [File Type](/docs/appx/file-type-upload) 셀에 업로드를 허용할 파일 형식을 지정하는 속성입니다.

> `input type="file"` 의 accept 속성과 동일하게 동작합니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|[File Type](/docs/appx/file-type-upload) 셀에 업로드를 허용할 파일 형식을 지정|


### Example
```javascript
// Type: File인 셀에 이미지 파일만 업로드 하도록 설정
sheet.setAttribute(sheet.getRowById("AR99"), "FileUpload", "Accept", 'image/*');
```

### Read More
* [File Type 업로드](/docs/appx/file-type-upload)
* [Accept Col](/docs/props/col/accept)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
