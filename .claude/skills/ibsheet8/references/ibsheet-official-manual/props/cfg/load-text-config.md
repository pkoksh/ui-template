---
KEY: loadTextConfig
KIND: config-property
PATH: props/cfg/load-text-config
ALIAS: 함수, 호출시, 들어가는, 인자를, 공통으로
ALIAS_EN: load, text, config, function, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/load-text-config
---
# LoadTextConfig ***(cfg)***

> [loadText](/docs/funcs/excel/load-text) 함수 호출시 들어가는 인자를 공통으로 설정합니다.

> [CommontOptions (static)](/docs/static/common-options)에 Cfg속성에 설정하시면 모든 화면에서 [loadText](/docs/funcs/excel/load-text) 함수 호출시 기본적인 속성을 설정하실 수 있습니다.

### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|[loadText](/docs/funcs/excel/load-text) 함수에 들어가는 인자와 동일(각 화면에서 동일한 속성을 설정시 화면에서 설정한 값이 반영됩니다.)|



### Example
```javascript
options.Cfg  = {
  // 모든 화면에서 텍스트 업로드시 기본 속성을 설정
  LoadTextConfig: {
    "append": 1
  }
};
```

### Read More
- [loadText method](/docs/funcs/excel/load-text)
- [CommontOptions static](/docs/static/common-options)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|기능 추가|
