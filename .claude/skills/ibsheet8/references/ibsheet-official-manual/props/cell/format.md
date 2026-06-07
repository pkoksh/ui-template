---
KEY: format
KIND: cell-property
PATH: props/cell/format
ALIAS: 원본, 데이터에, 마스킹된, 데이터를, 정의합니다
ALIAS_EN: format
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/format
---
# Format ***(cell)***
> 원본 데이터에 대한 마스킹된 데이터를 정의합니다.

> 원본 데이터와 무관하게 사용자에게 마스크를 적용한 데이터를 보여줍니다.

> [Format](/docs/appx/format)은 열의 Type에 따라 다양하게 정의될 수 있습니다. 자세한 내용은 7장 appendix의 [Format](/docs/appx/format)을 참고해 주세요.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|열의 Type에 따른 다양한 포맷설정 문자열|


### Example
```javascript
//날짜 포맷을 정의합니다.
{
    data:[
        {... , "CLSFormat":"dd.MM.yyyy" , ...}
    ]
}
```

### Read More
- [Format appendix](/docs/appx/format)
- [EditFormat cell](./edit-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
