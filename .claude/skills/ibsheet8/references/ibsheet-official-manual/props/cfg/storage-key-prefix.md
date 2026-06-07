---
KEY: storageKeyPrefix
KIND: config-property
PATH: props/cfg/storage-key-prefix
ALIAS: 로컬, 스토리지, 혹은, 세션, 스토리지에
ALIAS_EN: storage, key, prefix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/storage-key-prefix
---
# StorageKeyPrefix ***(cfg)***

> 로컬 스토리지 혹은 세션 스토리지에 현재 시트의 정보가 저장될 때 사용되는 Key값의 `prefix`를 설정하는 옵션입니다.
> 
 기본적으로 Key값은 `StorageKeyPrefix+"^시트id"` 로 설정되고 `StorageKeyPrefix` 옵션에 값이 없을 때 는 현재 페이지의 경로를 `StorageKeyPrefix`의 기본값으로 설정합니다.
> 
 [StorageSession](./storage-session) 값이 없으면 동작하지 않습니다.


### Type
`string`


### Example
```javascript
options.Cfg = {
    StorageSession: 1,       // 로컬 스토리지에 현재 시트 정보를 저장할 수 있고 가져올 수 있도록 설정
    StorageKeyPrefix: "IBSheet/product/intro"       // 스토리지에 저장할 내용의 Key 값의 prefix를 설정 IBSheet/product/intro^sheet 로 설정됨
};

sheet.saveCurrentInfo();      // 로컬 스토리지에 현재 시트 정보를 저장
sheet.clearCurrentInfo();     // 로컬 스토리지에 현재 시트 정보를 제거
```

### Read More
- [StorageSession cfg](./storage-session)
- [StorageCompressMode cfg](./storage-compress-mode)
- [saveCurrentInfo method](/docs/funcs/core/save-current-info)
- [clearCurrentInfo method](/docs/funcs/core/clear-current-info)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
