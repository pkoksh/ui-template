---
KEY: maxWidth
KIND: column-property
PATH: props/col/max-width
ALIAS: 사용자가, 마우스, 드래그를, 이용하여, 열의
ALIAS_EN: max, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/max-width
---
# MaxWidth ***(col)***
> 사용자가 마우스 드래그를 이용하여 열의 너비를 조정할 때, 늘릴수 있는 최대 열의 너비를 설정합니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|열의 최대 너비(pixel단위)|


### Example
```javascript
//특정 열의 최대 너비를 120px로 설정합니다.
options.Cols = [
    ...
    {Type: "Date", Name: "em_date", MaxWidth: 120, ...},
    ...
];
```

### Read More
- [Width col](./width)
- [MinWidth col](./min-width)
- [RelWidth col](./rel-width)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
