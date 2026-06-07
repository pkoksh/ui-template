---
KEY: storageKeyId
KIND: config-property
PATH: props/cfg/storage-key-id
ALIAS: 로컬, 스토리지, 혹은, 세션, 스토리지에
ALIAS_EN: storage, key, id
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/storage-key-id
---
# StorageKeyId ***(cfg)***

> 로컬 스토리지 혹은 세션 스토리지에 현재 시트의 정보가 저장될 때 시트의 Id를 대신해 Key 값의 `postFix`로 설정할 커스텀 Id를 설정하는 옵션입니다.
> 
 해당 옵션을 설정하시면 Key값이 `StorageKeyPrefix+"^시트id"`와 같이 설정되지 않으며, 그 대신 `StorageKeyPrefix+"^설정값"`으로 설정됩니다.
> 
 [StorageSession](./storage-session) 값이 없으면 동작하지 않습니다.

### Type
`string`


### Example
```javascript
options.Cfg = {
    StorageSession: 1,       // 로컬 스토리지에 현재 시트 정보를 저장할 수 있고 가져올 수 있도록 설정
    StorageKeyId: "customId", // `StorageKeyPrefix+"^customId"`를 키 값으로 하여 로컬 스토리지에 현재 시트 정보를 저장합니다.
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
|core|8.2.0.7|기능 추가|
