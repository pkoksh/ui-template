---
KEY: storageCompressMode
KIND: config-property
PATH: props/cfg/storage-compress-mode
ALIAS: 로컬, 스토리지, 혹은, 세션, 스토리지에
ALIAS_EN: storage, compress, mode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/storage-compress-mode
---
# StorageCompressMode ***(cfg)***

> 로컬 스토리지 혹은 세션 스토리지에 현재 시트의 정보가 저장되는 값의 내용을 압축하는 방식에 대한 옵션입니다. 

> [StorageSession](./storage-session) 값이 없으면 동작하지 않습니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|UTF16 압축, 압축률 상|
|`1`|Base64 압축, 압축률 중 (`default`)|
|`2`|Uint8Array 압축, 압축률 하|


### Example
```javascript
options.Cfg = {
    StorageSession: 1,       // 로컬 스토리지에 현재 시트 정보를 저장할 수 있고 가져올 수 있도록 설정
    StorageCompressMode: 0   // UTF16 압축으로 로컬 스토리지에 저장
};

sheet.saveCurrentInfo();      // 로컬 스토리지에 현재 시트 정보를 저장
```

### Read More
- [StorageSession cfg](./storage-session)
- [StorageKeyPrefix cfg](./storage-key-prefix)
- [saveCurrentInfo method](/docs/funcs/core/save-current-info)
- [clearCurrentInfo method](/docs/funcs/core/clear-current-info)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
