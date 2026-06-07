---
KEY: iconWidth
KIND: cell-property
PATH: props/cell/icon-width
ALIAS: 좌측에, 버튼을, 표시하는, 속성, 사용시
ALIAS_EN: icon, width, property, attribute
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/icon-width
---
# IconWidth ***(cell)***
> 셀 좌측에 버튼을 표시하는 [Icon](./icon)속성 사용시, 버튼의 너비를 설정합니다. 

> 너비는 pixel단위로 설정됩니다.




### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|셀 좌측 버튼의 너비|


### Example
```javascript
//조회 데이터 내에서 속성 적용  (열이름: CLS )
{
    data:[
        {... , "CLSIcon":"/images/popIcon.gif", "CLSIconWidth":22 , ...}
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
