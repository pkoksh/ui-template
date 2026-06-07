---
KEY: mergeHeightAdjust
KIND: config-property
PATH: props/cfg/merge-height-adjust
ALIAS: 같이, 높이에, 영향을, 주는, 기능을
ALIAS_EN: merge, height, adjust
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/merge-height-adjust
---
# MergeHeightAdjust ***(cfg)***

> [HtmlPrefix](/docs/props/col/html-prefix)나 [HtmlPostfix](/docs/props/col/html-postfix)와 같이 Cell의 높이에 영향을 주는 기능을 사용할 경우, 병합 영역 또는 시트의 레이아웃 깨짐 현상이 발생 시, 병합 영역의 높이를 조정합니다.

> 이 속성을 true로 설정 시, 시트 내의 병합 정보를 확인하여 수행됨으로써, 병합 정보 수에 따라 시트가 느려질 수 있습니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|병합된 행의 높이 보정 안함 (`default`)|
|`1(true)`|병합된 행의 높이 보정|

### Example
```javascript
options.Cfg = {
  MergeHeightAdjust: 1 // 병합된 영역의 높이 보정
};
```

### Read More
- [HtmlPrefix row](/docs/props/row/html-prefix)
- [HtmlPrefix col](/docs/props/col/html-prefix)
- [HtmlPrefix cell](/docs/props/cell/html-prefix)
- [HtmlPostfix row](/docs/props/row/html-postfix)
- [HtmlPostfix col](/docs/props/col/html-postfix)
- [HtmlPostfix cell](/docs/props/cell/html-postfix)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.3|기능 추가|
