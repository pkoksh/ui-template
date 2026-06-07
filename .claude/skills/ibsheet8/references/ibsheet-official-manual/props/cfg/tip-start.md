---
KEY: tipStart
KIND: config-property
PATH: props/cfg/tip-start
ALIAS: 기능을, 이용하여, 풍선도움말을, 기능, 사용시
ALIAS_EN: tip, start
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/tip-start
---
# TipStart ***(cfg)***

> `Tip`기능을 이용하여 풍선도움말을 기능 사용시, 마우스 커서가 멈춘 후 부터 풍선도움말이 보여지기까지 시간을 설정합니다..

> 단위는 `ms` 이며, 설정하지 않으면 500ms 후에 풍선도움말이 표시됩니다.

> `0`으로 설정시 풍선도움말이 표시되지 않으며, `1`로 설정시 즉시 보여지게 됩니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`value`|커서가 멈춘 후, 풍선도움말이 표시될때까지 대기시간(ms단위) (`default: 500`)|


### Example
```javascript
options = {
    Cfg:{
      TipStart: 300  //0.3초 후에 풍선도움말이 표시됩니다.
    },
    Def:{
      Row:{
        Tip: 1  // 데이터 모든 행에서 풍선도움말 표시
      }
    }
};
```

### Read More
- [Tip row](/docs/props/row/tip)
- [Tip col](/docs/props/col/tip)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|기능 추가|
