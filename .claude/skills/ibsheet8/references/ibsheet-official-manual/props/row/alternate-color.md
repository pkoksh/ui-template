---
KEY: alternateColor
KIND: row-property
PATH: props/row/alternate-color
ALIAS: 가독성을, 높이기, 위해서, 홀수행, 짝수행
ALIAS_EN: alternate, color
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/alternate-color
---
# AlternateColor ***(row)***

> 가독성을 높이기 위해서 홀수행, 짝수행 행의 배경색상을 다르게 설정할 때, 짝수행에 보여질 색상을 설정합니다.

> 이 속성은 [Alternate](/docs/props/cfg/alternate)속성에 영향을 받습니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|HEX형식 (ex: #FF00F0)
rgb형식 (ex: rgb(244,200,40)|

### Example
```javascript
//데이터 영역의 짝수행 배경색을 회색으로 지정한다.
options.Def.Row = {"AlternateColor": "#DEDEDE"};
```

### Read More
- [Alternate cfg](/docs/props/cfg/alternate)
- [AlternateClass row](./alternate-class)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
