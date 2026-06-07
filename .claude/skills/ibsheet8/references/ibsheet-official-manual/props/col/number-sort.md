---
KEY: numberSort
KIND: column-property
PATH: props/col/number-sort
ALIAS: 열의, 데이터를, 숫자형식으로, 소팅할지, 여부를
ALIAS_EN: number, sort
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/number-sort
---
# NumberSort ***(col)***

> 열의 데이터를 숫자형식으로 소팅할지 여부를 설정합니다.

> 일반적으로 `Int, Float, Date` [Type](/docs/appx/type)은 숫자형식으로, 그 외의 [Type](/docs/appx/type)은 문자형식으로 소팅이 이루어집니다.

> 여기서 값을 `0(false)`으로 설정하면, [Type](/docs/appx/type)과 무관하게 문자형식으로 소팅되고, `1(true)`로 설정시 숫자형식으로 소팅이 이루어집니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|문자형식의 소팅 (`default`)|
|`1(true)`|숫자형식의 소팅|


### Example
```javascript
//특정 열에 대해 숫자형식으로 소팅
options.Cols = [
    ...
    {Type: "Text", Name: "SA_ID", NumberSort: 1 ...},
    ...
];
```

### Try it
- [True](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/NumberSort-true/)

### Read More
- [CanSort col](./can-sort)
- [RawSort col](./raw-sort)
- [Type appendix](/docs/appx/type)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
