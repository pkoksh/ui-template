---
KEY: iconWidth
KIND: column-property
PATH: props/col/icon-width
ALIAS: 좌측에, 버튼을, 표시하는, 속성, 사용
ALIAS_EN: icon, width, property, attribute
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/icon-width
---
# IconWidth ***(col)***
> 셀 좌측에 버튼을 표시하는 [Icon](./icon) 속성 사용 시, 커스텀 이미지를 사용하는 경우 버튼의 영역 너비를 설정합니다. 

> 너비는 pixel 단위로 설정됩니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|셀 좌측 버튼의 너비.|


### Example
```javascript
options.Cols = [
    ...
    //셀의 좌측에 이미지로 버튼을 추가합니다.
    {Type: "Text", Name: "brnSaleAmt", Icon: "Icon", IconSrc: "/pcd/img/popIcon.png", IconWidth: 15, Width: 120 ...},
    ...
];
```

### Read More
- [Icon col](./icon)
- [IconSrc col](./icon-src)
- [IconWidth cell](../cell/icon-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
