---
KEY: iconSrc
KIND: column-property
PATH: props/col/icon-src
ALIAS: 속성에서, 지정하여, 바로, 사용, 가능하기
ALIAS_EN: icon, src
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/icon-src
---
# !IconSrc ***(col)***

> **<mark>Icon 속성에서 url을 지정하여 바로 사용 가능하기 때문에 해당 기능은 비공개를 유지합니다</mark>**

> 셀 좌측에 버튼을 표시하는 [Icon](./icon)속성의 값을 `Icon`으로 설정시, 버튼 이미지의 `url`를 설정합니다. 

> 이미지는 `gif, jpg, png` 만 지원합니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|셀 좌측 버튼의 이미지 `url`|


### Example
```javascript
options.Cols = [
    ...
    //셀의 좌측에 이미지로 버튼을 추가합니다.
    {
        Type: "Text",
        Name: "brnSaleAmt",
        Icon: "Icon",
        IconSrc: "/pcd/img/popIcon.png",
        IconWidth: 15,
        Width: 120,
        ...
    },
    ...
];
```

### Read More
- [Icon col](./icon)
- [IconWidth col](./icon-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
