---
KEY: storageSession
KIND: config-property
PATH: props/cfg/storage-session
ALIAS: 시트의, 정보를, 로컬, 스토리지, 혹은
ALIAS_EN: storage, session
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/storage-session
---
# StorageSession ***(cfg)***

> 시트의 정보를 로컬 스토리지 혹은 세션 스토리지에 저장 시킬 수 있도록 설정하는 옵션입니다.  
 로컬 스토리지 혹은 세션 스토리지에 저장이 되어 있으면 시트가 로드되는 시점에서 정보를 가져와서 시트에 반영합니다.

> **`주의`** : 시트 초기화 시점 컬럼 정보와 저장된 시트 컬럼 정보가 다를 경우 로컬 스토리지 혹은 세션 스토리지에 저장된 정보가 지워집니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|사용안함 (`default`)|
|`1`|로컬 스토리지에 저장|
|`2`|세션 스토리지에 저장|


### Example
```javascript
options.Cfg = {
    StorageSession: 1        // 로컬 스토리지에 현재 시트 정보를 저장할 수 있고 가져올 수 있도록 설정
};

sheet.saveCurrentInfo();      // 로컬 스토리지에 현재 시트 정보를 저장
sheet.clearCurrentInfo();     // 로컬 스토리지에 현재 시트 정보를 제거
```

### Read More
- [StorageKeyPrefix Cfg](./storage-key-prefix)
- [StorageCompressMode Cfg](./storage-compress-mode)
- [saveCurrentInfo method](/docs/funcs/core/save-current-info)
- [clearCurrentInfo method](/docs/funcs/core/clear-current-info)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
