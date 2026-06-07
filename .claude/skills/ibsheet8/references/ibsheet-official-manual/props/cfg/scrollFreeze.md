---
KEY: scrollFreeze
KIND: config-property
PATH: props/cfg/scrollFreeze
ALIAS: 브라우저, 스크롤이, 이동되지, 않도록, 처리하는
ALIAS_EN: scroll, freeze
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/scrollFreeze
---
# !ScrollFreeze ***(cfg)***

> 브라우저 스크롤이 이동되지 않도록 처리하는 기능입니다.

> `body` 태그에 `overflow:hidden;` 을 사용 했을 때, 조회 후 브라우저 스크롤을 이동시키고 싶지 않은 경우에 사용할 수 있습니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`| 기능 사용 안함 (`default`)|
|`1(true)`| 기능 사용|


### Example
```javascript
// body 태그에 overflow:hidden; 을 사용했을 경우
options.Cfg = {
  ScrollFreeze: 1
};

// 조회 후 브라우저 스크롤을 이동시키고 싶지 않은 경우
sheet.ScrollFreeze = 1;
sheet.loadSearchData({sync:1});
sheet.ScrollFreeze = 0;
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.45|기능 추가|
|core|8.1.0.61|기능 변경|
