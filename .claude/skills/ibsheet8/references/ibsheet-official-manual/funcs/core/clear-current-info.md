---
KEY: clearCurrentInfo
KIND: method
PATH: funcs/core/clear-current-info
ALIAS: sheet.clearCurrentInfo, clearCurrentInfo(), 저장된, 현재, 시트의, 정보를, 로컬
ALIAS_EN: clear, current, info
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/clear-current-info
---
# clearCurrentInfo ***(method)***
> [saveCurrentInfo()](./save-current-info)로 저장된 현재 시트의 정보를 로컬 스토리지 혹은 세션 스토리지에서 제거하는 메소드입니다.
> 
 [StorageSession](/docs/props/cfg/storage-session) 값이 0인 경우에는 제거 동작을 하지 않습니다.

### Syntax
```javascript
boolean clearCurrentInfo();
```

### Return Value
***boolean*** : 함수 정상 동작 여부. (로컬 스토리지 혹은 세션 스트로지에서 시트 정보 제겅 실패했을 때 false 리턴)

### Example
```javascript
options.Cfg = {
    StorageSession: 1        // 로컬 스토리지에 현재 시트 정보를 저장할 수 있고 가져올 수 있도록 설정
};

        ...

// 현재 시트의 정보를 로컬 스토리지 혹은 세션 스토리지에서 제거한다.
sheet.clearCurrentInfo();
```

### Read More
- [StorageSession cfg](/docs/props/cfg/storage-session)
- [StorageKeyPrefix cfg](/docs/props/cfg/storage-key-prefix)
- [StorageCompressMode cfg](/docs/props/cfg/storage-compress-mode)
- [saveCurrentInfo method](./save-current-info)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
