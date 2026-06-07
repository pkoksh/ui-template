---
KEY: minHeight
KIND: row-property
PATH: props/row/min-height
ALIAS: 설정된, 행의, 최소, 높이를, 설정합니다
ALIAS_EN: min, height
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/min-height
---
# !MinHeight ***(row)***
> `RelHieight(Row)`가 설정된 행의 최소 높이를 설정합니다.

> !Wrap 속성 사용시 데이터의 양에 따라 높이가 늘어나거나 줄어들수 있는데, 최소한의 높이를 지정합니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|행의 최소 높이 (pixel 단위)|



### Example
```javascript
options.Def.Row = {
    "MinHeight": 50,
}
```

### Read More
- [MaxHeight row](./max-height)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
