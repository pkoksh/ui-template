---
KEY: unicodeByteMode
KIND: config-property
PATH: props/cfg/unicode-byte-mode
ALIAS: 한글, 자리의, 바이트, 수를, 설정합니다
ALIAS_EN: unicode, byte, mode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/unicode-byte-mode
---
# UnicodeByteMode ***(cfg)***

> 한글 1자리의 바이트 수를 설정합니다. 

> 자바스크립트에서는 모든 글자를 1바이트로 인식합니다. 그러나 한글은 DB의 언어 설정에 따라 2바이트 이상으로 인식되어야 하는 경우가 있습니다. 이런 경우 이 속성을 사용하여 한글의 바이트 수를 설정할 수 있습니다. 

> `utf-8` 형식에서는 문자에 따라서 바이트 수가 달라지게 되는데 이런 경우 설정 인자를 `"utf-8"`로 설정하면 `utf-8` 형식에 맞게 처리 합니다.

### Type
`number|string`

### Options
|Value|Description|
|-----|-----|
|`number`|한글 1자리의 바이트 수 설정 (`default: 1`)|
|`string`|`"utf-8"`로 설정, `utf-8` 형식에 맞게 바이트 수 계산 |


### Example
```javascript
options.Cfg = {
    ...
    UnicodeByteMode: "utf-8"              // 한글의 바이트 수를 utf-8 형식에 맞춰 처리
    ...
};
```

```js
options.Cfg = {
    ...
    UnicodeByteMode: 3,              // 한글 1자리의 바이트 사이즈를 3으로 설정
    ...
};
```

### Read More
- [Size col](/docs/props/col/size)
- [Size cell](/docs/props/cell/size)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.10|기능 추가|
