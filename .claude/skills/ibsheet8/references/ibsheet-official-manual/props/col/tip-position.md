---
KEY: tipPosition
KIND: column-property
PATH: props/col/tip-position
ALIAS: 풍선도움말, 객체의, 위치나, 크기, 정렬을
ALIAS_EN: tip, position, size
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/tip-position
---
# TipPosition ***(col)***

> 풍선도움말 객체의 위치나 크기, 정렬을 설정합니다.


### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`X`|풍선도움말의 X축 가감 위치|
|`Y`|풍선도움말의 Y축 가감 위치|


### Example

```javascript
//풍선도움말의 위치조정
options.Cols = [
    ...
    {Type: "Bool", Tip: 1, TipPosition: {X: 20, Y: -10}, Name: "procs", Width: 120 ...},
    ...
];
```

### Read More
- [Tip col](./tip)
- [TipClass col](./tip-class)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
