---
KEY: copyHeaderText
KIND: config-property
PATH: props/cfg/copy-header-text
ALIAS: 해당, 기능은, 버전, 이후로, 지원하지
ALIAS_EN: copy, header, text
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/copy-header-text
---
# !CopyHeaderText ***(cfg)*** `[Deprecated]`

> 해당 기능은 8.1.x.x 버전 이후로 지원하지 않습니다.

> 8.2.x.x 버전 이후로 삭제됩니다.

<details>

> 복사 시 헤더 텍스트도 복사할지 여부를 설정합니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|헤더 텍스트 복사 안함 (`default`)|
|`1(true)`|헤더 텍스트 복사|


### Example
```javascript
options.Cfg = {
    CopyHeaderText: true,        // 헤더 텍스트 복사
};
```

### Read More

</details>

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.0|`Deprecated`|
