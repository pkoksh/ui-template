---
KEY: numberSort
KIND: cell-property
PATH: props/cell/number-sort
ALIAS: 셀의, 데이터를, 숫자형식으로, 소팅할지, 여부를
ALIAS_EN: number, sort
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/number-sort
---
# NumberSort ***(cell)***

> 셀의 데이터를 숫자형식으로 소팅할지 여부를 설정합니다.

> 일반적으로 `Int, Float, Date Type`은 숫자형식으로, 그 외의 [Type](/docs/appx/type)은 문자형식으로 소팅이 이루어집니다.

> 여기서 값을 `0(false)`으로 설정하면, Type과 무관하게 문자형식으로 소팅되고, `1(true)`로 설정시 숫자형식으로 소팅이 이루어집니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|문자형식의 소팅|
|`1(true)`|숫자형식의 소팅|


### Example
```javascript
//조회 데이터 내에서 속성 적용  (열이름: CLS)
//특정 셀에 대해 숫자형식으로 소팅
{
    data:[
        {... , "CLSNumberSort":"1" , ...}
    ]
}
```

### Read More
- [RawSort cell](./raw-sort)
- [SortValue cell](./sort-value)
- [CaseSensitive cell](./case-sensitive)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
