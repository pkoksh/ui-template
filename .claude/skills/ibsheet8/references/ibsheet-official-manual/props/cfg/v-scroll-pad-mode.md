---
KEY: vScrollPadMode
KIND: config-property
PATH: props/cfg/v-scroll-pad-mode
ALIAS: 세로, 스크롤의, 상단에, 여백을, 설정하는
ALIAS_EN: scroll, pad, mode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/v-scroll-pad-mode
---
# VScrollPadMode ***(cfg)***

> 세로 스크롤의 상단에 여백을 설정하는 옵션입니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|아무 여백도 설정하지 않음 (`default`)|
|`1`|[Kind](/docs/appx/kind)가 `Header`인 Head 행만큼 여백을 설정|

### Example
```javascript
options.Cfg = {
    VScrollPadMode: 1
};
```

### Read More
- [Kind appendix](/docs/appx/kind)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
