---
KEY: width
KIND: column-property
PATH: props/col/width
ALIAS: 열의, 너비를, 단위로, 설정합니다
ALIAS_EN: width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/width
---
# Width ***(col)***
> 열의 너비를 pixel단위로 설정합니다.

> 시트객체의 최초 생성시 열의 너비를 의미합니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|열의 너비(pixel단위)|


### Example
```javascript
//특정 열의 너비를 85px로 설정합니다.
options.Cols = [
    ...
    {Type: "Text", Name: "EMPID", Width: 85, ...},
    ...
];
```

### Read More
- [MaxWidth col](./max-width)
- [MinWidth col](./min-width)
- [RelWidth col](./rel-width)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
