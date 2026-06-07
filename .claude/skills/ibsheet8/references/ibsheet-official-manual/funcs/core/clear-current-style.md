---
KEY: clearCurrentStyle
KIND: method
PATH: funcs/core/clear-current-style
ALIAS: sheet.clearCurrentStyle, clearCurrentStyle(), 스타일, 행으로, 저장된, 현재, 시트의
ALIAS_EN: clear, current, style, css
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/clear-current-style
---
# clearCurrentStyle ***(method)***
> 스타일 행으로 저장된 현재 시트의 스타일 관련 정보를 제거하는 메소드입니다. 

> [StyleRowConfig](/docs/props/cfg/style-row-config)의 `StorageType`이 1인 경우, 로컬 스토리지에 저장된 스타일 정보를 제거합니다. ([StorageSession](/docs/props/cfg/storage-session) 값이 0인 경우에는 제거 동작을 하지 않습니다.)

> `StorageType`이 2인 경우, 스타일 행의 `ServerUrl`의 경로로 저장된 스타일 정보를 제거하는 요청을 전송합니다.

### Syntax
```javascript
boolean clearCurrentStyle();
```

### Return Value
***boolean*** : 함수 정상 동작 여부

### Example
```javascript
options.Cfg = {
    StorageSession: 1        // 로컬 스토리지에 현재 시트 정보를 저장할 수 있고 가져올 수 있도록 설정
};

        ...

// 저장된 스타일 정보를 제거한다.
sheet.clearCurrentStyle();
```

### Read More
- [StorageSession cfg](/docs/props/cfg/storage-session)
- [StyleRowConfig cfg](/docs/props/cfg/style-row-config)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.18|기능 추가|
|core|8.3.0.33|서버 삭제 요청 기능 개선|
