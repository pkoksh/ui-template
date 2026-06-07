---
KEY: accept
KIND: column-property
PATH: props/col/accept
ALIAS: 컬럼에, 업로드를, 허용할, 파일, 형식을
ALIAS_EN: accept
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/accept
---
# Accept ***(col)***

> [File Type](/docs/appx/file-type-upload) 컬럼에 업로드를 허용할 파일 형식을 지정하는 속성입니다.

> `input type="file"` 의 accept 속성과 동일하게 동작합니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|[File Type](/docs/appx/file-type-upload) 컬럼에 업로드를 허용할 파일 형식을 지정|


### Example
```javascript
// Type: File인 컬럼에 이미지 파일만 업로드 하도록 설정
options.Cols = [
    ...
    {Type: "File", Name: "CarName", Width: 120, Accept: 'image/*' ...},
    ...
];
```

### Read More
* [File Type 업로드](/docs/appx/file-type-upload)
* [Accept Cell](/docs/props/cell/accept)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
