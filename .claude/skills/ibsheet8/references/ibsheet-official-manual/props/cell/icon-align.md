---
KEY: iconAlign
KIND: cell-property
PATH: props/cell/icon-align
ALIAS: 좌측에, 버튼, 혹은, 체크박스, 표시하는
ALIAS_EN: icon, align
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/icon-align
---
# IconAlign ***(cell)***
> 셀 좌측에 버튼(혹은 체크박스)을 표시하는 [Icon](./icon)속성 사용시, 버튼의 위치를 설정합니다. 

> 다른 설정이 없을시 셀의 좌측에 표시됩니다..




### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Left`|셀 좌측에 Icon표시 (`default`)|
|`Right`|셀 우측에 Icon표시|


### Example
```javascript
//조회 데이터 내에서 속성 적용  (열이름: CLS )
{
    data:[
        {... , "ClsIconAlign":"Right","CLSIcon":"/images/popIcon.gif", ...}
    ]
}
```

### Read More
- [Icon cell](./icon)
- [IconWidth col](../col/icon-width)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
