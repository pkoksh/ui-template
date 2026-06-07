---
KEY: saveCurrentInfo
KIND: method
PATH: funcs/core/save-current-info
ALIAS: sheet.saveCurrentInfo, saveCurrentInfo(), 현재, 시트의, 정보를, 로컬, 스토리지
ALIAS_EN: save, current, info
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/save-current-info
---
# saveCurrentInfo ***(method)***
> 현재 시트의 정보를 로컬 스토리지 혹은 세션 스토리지에 저장하는 메소드입니다.
> 
 기본적으로 Key값은 [StorageKeyPrefix](/docs/props/cfg/storage-key-prefix)+"^시트id" 로 설정됩니다.
> 
 저장되는 값은 [StorageCompressMode](/docs/props/cfg/storage-compress-mode)에 따라 압축되어서 저장됩니다.
> 
 [StorageSession](/docs/props/cfg/storage-session) 값이 없으면 동작하지 않습니다.
> 
 **`주의`** : 시트 초기화 시점 컬럼 정보와 저장하는 시트 컬럼 정보가 다를 경우 로컬 스토리지 혹은 세션 스토리지에 저장된 정보가 지워집니다.

### Syntax
```javascript
boolean saveCurrentInfo();
```

### Return Value
***boolean***

```javascript
options.Cfg = {
    StorageSession: 1        // 로컬 스토리지에 현재 시트 정보를 저장할 수 있고 가져올 수 있도록 설정
};
```

### Example
```javascript
// 현재 시트의 정보를 로컬 스토리지 혹은 세션 스토리지에 저장한다.
if (sheet.saveCurrentInfo()) {
    alert("현재 시트 정보를 저장했습니다.");
} else {
    alert("현재 시트 정보를 저장하는데 실패했습니다.");
}
```

### Read More
- [StorageSession cfg](/docs/props/cfg/storage-session)
- [StorageKeyPrefix cfg](/docs/props/cfg/storage-key-prefix)
- [StorageCompressMode cfg](/docs/props/cfg/storage-compress-mode)
- [clearCurrentInfo method](./clear-current-info)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
