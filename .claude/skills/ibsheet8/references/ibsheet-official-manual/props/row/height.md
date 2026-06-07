---
KEY: height
KIND: row-property
PATH: props/row/height
ALIAS: 행의, 높이를, 설정합니다
ALIAS_EN: height
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/height
---
# Height ***(row)***
> 행의 높이를 설정합니다.

> `Height` 속성에 설정된 값보다 셀 높이가 커져야하는 경우(셀의 내용이 많아서) 셀 내용에 맞춰 행의 높이가 설정됩니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|행의 높이 (pixel 단위)|



### Example
```javascript
options.Def.Row = {
    "Height": 50,
}
```

### Read More
- [Size cfg](/docs/props/cfg/size) 
- [MaxHeight row](./max-height)
<!--!
- `[비공개]` [MinHeight row](./min-height)
!-->


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
