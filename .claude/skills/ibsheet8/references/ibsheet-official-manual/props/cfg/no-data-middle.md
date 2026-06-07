---
KEY: noDataMiddle
KIND: config-property
PATH: props/cfg/no-data-middle
ALIAS: 조회, 데이터가, 없는, 경우, 표시되는
ALIAS_EN: no, data, middle, search, query, fetch, load, retrieve
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/no-data-middle
---
# NoDataMiddle ***(cfg)***

> 조회 된 데이터가 없는 경우 표시되는 NoData행을 화면 가운데에 표시합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|NoData행을 상단에 표시 (`default`)|
|`1(true)`|NoData행을 화면 가운데에 표시|

NoDataMiddle : 0 (`default`)

![NoDataMiddle:0](/assets/imgs/NoDataMiddle0.png "NoDataMiddle:0")
<!-- IMAGE: 스크린샷/예시 이미지 - NoDataMiddle:0 -->



NoDataMiddle : 1 

![NoDataMiddle:1](/assets/imgs/NoDataMiddle.png "NoDataMiddle:1")
<!-- IMAGE: 스크린샷/예시 이미지 - NoDataMiddle:1 -->



### Example
```javascript
options.Cfg = {
  NoDataMiddle: 1,  // 조회된 데이터가 없는 경우 화면 가운데에 표시
  ...
};
```

### Try it
- [True](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/NoDataMessage/)

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.36|기능 추가|
