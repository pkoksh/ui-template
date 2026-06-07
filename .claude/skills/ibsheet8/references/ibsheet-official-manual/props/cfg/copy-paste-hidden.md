---
KEY: copyPasteHidden
KIND: config-property
PATH: props/cfg/copy-paste-hidden
ALIAS: 숨긴, 열에, 붙여넣기, 가능여부를, 설정합니다
ALIAS_EN: copy, paste, hidden
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/copy-paste-hidden
---
# CopyPasteHidden ***(cfg)***

> 숨긴 행/열에 붙여넣기 가능여부를 설정합니다. (비트연산으로 제공합니다)



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|숨김 처리된 행, 열은 붙여넣기가 불가능 (`default`)|
|`1`|숨김 처리된 열은 붙여넣기가 가능, 숨긴 처리된 행은 불가능|
|`2`|숨김 처리된 행은 붙여넣기가 가능, 숨긴 처리된 열은 불가능|


### Example
```javascript
options = {
    "Cfg":{
      "CopyPasteHidden":3,  // 숨김 처리된 행, 열에 붙여넣기 기능 사용
    }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
