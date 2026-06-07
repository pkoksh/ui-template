---
KEY: useCache
KIND: config-property
PATH: props/cfg/use-cache
ALIAS: 파일의, 브라우저, 캐쉬, 사용, 여부를
ALIAS_EN: use, cache
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/use-cache
---
# UseCache ***(cfg)***

> `img` 파일의 브라우저 캐쉬 사용 여부를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|브라우저 캐쉬 사용 안함 (`default`)|
|`1(true)`|브라우저 캐쉬 사용함|

### Example
```javascript
options.Cfg = {
   UseCache: 1 // 브라우저 캐쉬 사용
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|기능 추가|
