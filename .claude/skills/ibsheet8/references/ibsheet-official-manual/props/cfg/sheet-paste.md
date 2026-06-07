---
KEY: sheetPaste
KIND: config-property
PATH: props/cfg/sheet-paste
ALIAS: 전용, 기능입니다, 설정시, 복사기능, 이용시
ALIAS_EN: sheet, paste
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/sheet-paste
---
# SheetPaste ***(cfg)***

> `IE` 전용 기능입니다. 설정시 복사기능 이용시 권한프롬프트가 나오지 않습니다.

> 기본값은 `0(false)`이고 IE에서는 복사기능 사용시 `execCommand('copy')` 기능을 사용하고 있습니다.

> `1(true)` 값을 사용할시 시트내부복사 기능을 사용합니다. 

> 단, `execCommand('copy')` 를 사용하면서 권한프롬프트를 끄고 싶다면 인터넷 옵션에서 보안에 들어가 권한을 허용하시면 됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|execCommand('copy') 를 사용합니다. (권한 프롬프트) (`default`)|
|`1(true)`|시트 내부 복사 기능을 이용합니다. (권한 프롬프트x)|

### Example

```
options.Cfg = {
    SheetPaste: true              // 시트 내부복사 기능을 사용합니다.
};
```



### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|