---
KEY: format
KIND: column-property
PATH: props/col/format
ALIAS: 원본, 데이터에, 마스킹된, 데이터를, 정의합니다
ALIAS_EN: format
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/format
---
# Format ***(col)***
> 원본 데이터에 대한 마스킹된 데이터를 정의합니다.

> 원본 데이터와 무관하게 사용자에게 마스크를 적용한 데이터를 보여줍니다.

> `Format`은 열의 [Type](./type)에 따라 다양하게 정의될 수 있습니다.

> **자세한 내용은 7장 appendix의 [Format](/docs/appx/format)을 참고해 주세요.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|열의 `Type`에 따른 다양한 포맷설정 문자열|


### Example
```javascript
//날짜 포맷을 정의합니다.
options.Cols = [
    ...
    {Type: "Date", Name: "sa_enterDate", Format: 'MM-dd-yyyy' ...},
    ...
];
```

### Read More
- [Format appendix](/docs/appx/format)
- [EditFormat col](./edit-format)
- [DataFormat col](./data-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
