---
KEY: maxHeight
KIND: row-property
PATH: props/row/max-height
ALIAS: 행의, 최대, 높이를, 설정합니다
ALIAS_EN: max, height
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/max-height
---
# MaxHeight ***(row)***
> 행의 최대 높이를 설정합니다.

> Wrap 설정시 데이터의 양에 따라 행의 높이가 늘어나게 되는데, 이때 최대 증가할 수 있는 높이를 설정합니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|행의 최대 높이 (pixel 단위)|



### Example
```javascript
options.Def.Row = {
    "MaxHeight": 50,
}
```

### Read More
<!--!
- `[비공개]` [MinHeight row](./min-height) 
!-->


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
