---
KEY: tip
KIND: column-property
PATH: props/col/tip
ALIAS: 위에, 마우스, 커서, 오버시, 풍선도움말을
ALIAS_EN: tip
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/tip
---
# Tip ***(col)***

> 열 위에 마우스 커서 오버시 풍선도움말을 표시합니다.

> 설정을 통해 풍선도움말 사용 여부와 풍선도움말에서 표시될 내용까지 설정할 수 있습니다.

### Type
mixed( `boolean` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`0(false)`|풍선도움말 사용 안함 (`default`)|
|`1(true)`|풍선도움말 사용|
|`string`|풍선도움말에서 표시 될 내용 설정|

### Example
```javascript
//특정 열에 풍선도움말 기능을 활성화 합니다.
options.Cols = [
    ...
    {Type: "Text", Tip: 1, Name: "DESC", Width: 120 ...},
    ...
];
```

### Read More
- [Tip+Value col](./tip-value)
- [TipClass col](./tip-class)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
