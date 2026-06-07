---
KEY: color
KIND: cell-property
PATH: props/cell/color
ALIAS: 셀의, 배경, 색상을, 설정합니다
ALIAS_EN: color, background
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/color
---
# Color ***(cell)***

> 셀의 배경 색상을 설정합니다.

> 색상은 상태에 따른 배경 색상의 영향을 받습니다.

> rgb(255,255,255)는 투명색이 됩니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|HEX형식 (ex:#FF00F0)
rgb형식 (ex:rgb(244,200,40)|

### Example

```javascript
//조회 데이터 내에서 속성 적용  (열이름 :CLS )
{
    data:[
        {... , "CLSColor":"#ADADAD" , ...}
    ]
}
```

### Read More
- [TextColor cell](./text-color)
- [TextStyle cell](./text-style)
- [TextSize cell](./text-size)
- [TextFont cell](./text-font)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
