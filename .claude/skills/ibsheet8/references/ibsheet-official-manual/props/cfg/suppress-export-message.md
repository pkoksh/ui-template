---
KEY: suppressExportMessage
KIND: config-property
PATH: props/cfg/suppress-export-message
ALIAS: 서버, 모듈, 클라이언트, 모듈을, 이용해
ALIAS_EN: suppress, export, message, server, ajax
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/suppress-export-message
---
# SuppressExportMessage ***(cfg)***

> 서버 모듈, 클라이언트 모듈을 이용해 파일을 다운로드하거나 업로드할 때 대기 메시지를 띄울지 여부를 결정합니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|파일 다운로드, 업로드시 대기 이미지 띄움 (`default`)|
|`1`|파일 다운로드, 업로드시 대기 이미지 띄우지 않음|

### Example
```javascript
options.Cfg = {
    SuppressExportMessage : 1 // 서버 모듈, 클라이언트 모듈 파일 다운로드, 업로드시 대기 이미지 띄우지 않도록 설정
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.95|기능 추가|
|excel|1.1.4|기능 추가|