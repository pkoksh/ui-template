---
KEY: canSort
KIND: config-property
PATH: props/cfg/can-sort
ALIAS: 헤더, 클릭을, 통한, 정렬, 기능의
ALIAS_EN: can, sort, header, align, alignment
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/can-sort
---
# CanSort ***(cfg)***

> 헤더 클릭을 통한 열 정렬(`Sort`) 기능의 허용 여부를 설정합니다. 

> [SortIcons cfg](./sort-icons) 설정에 따라 헤더 정렬 아이콘을 숨길 수 있습니다. 



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|정렬 기능 사용 안함|
|`1(true)`|정렬 기능 사용 (`default`)|


### Example
```javascript
options.Cfg = {
    CanSort: false,   // 정렬 기능 사용 안함
};
```

### Try it
- [True by default](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/CanSort-true/)

### Read More
- [SortIcons cfg](./sort-icons)
- [CanSort row](/docs/props/row/can-sort)
- [CanSort col](/docs/props/col/can-sort)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
