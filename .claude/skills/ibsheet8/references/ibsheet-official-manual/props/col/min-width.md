---
KEY: minWidth
KIND: column-property
PATH: props/col/min-width
ALIAS: 열의, 최소, 너비를, 단위로, 설정합니다
ALIAS_EN: min, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/min-width
---
# MinWidth ***(col)***
> 열의 최소 너비를 pixel단위로 설정합니다.

> 사용자가 드래그를 통해 열의 너비를 조정할 때, 지정한 크기 이하로 작아지지 않게 합니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|열의 최소 너비(pixel단위)|


### Example
```javascript
//특정 열의 최소 너비를 110px로 설정합니다.
options.Cols = [
    ...
    {Type: "Enum", Name: "DeptNm", MinWidth: 110, ...},
    ...
];
```

### Read More
- [Width col](./width)
- [MaxWidth col](./max-width)
- [RelWidth col](./rel-width)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
