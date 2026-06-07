---
KEY: downToTextConfig
KIND: config-property
PATH: props/cfg/down-to-text-config
ALIAS: 함수, 호출시, 들어가는, 인자를, 공통으로
ALIAS_EN: down, to, text, config, function, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/down-to-text-config
---
# Down2TextConfig ***(cfg)***

> [down2Text](/docs/funcs/excel/down-to-text) 함수 호출시 들어가는 인자를 공통으로 설정합니다.

> [CommontOptions (static)](/docs/static/common-options)에 Cfg속성에 설정하시면 모든 화면에서 [down2Text](/docs/funcs/excel/down-to-text) 함수 호출시 기본적인 속성을 설정하실 수 있습니다.

### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|[down2Text](/docs/funcs/excel/down-to-text) 함수에 들어가는 인자와 동일(각 화면에서 동일한 속성을 설정시 화면에서 설정한 값이 반영됩니다.)|



### Example
```javascript
options.Cfg  = {
  // 모든 화면에서 텍스트 다운로드시 기본 속성을 설정
  "Down2TextConfig":{
    "downHeader": 0,
    "downSum": 0
  }
};
```

### Read More
- [down2Text method](/docs/funcs/excel/down-to-text)
- [CommontOptions static](/docs/static/common-options)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|기능 추가|
