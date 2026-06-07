---
KEY: noHScroll
KIND: config-property
PATH: props/cfg/no-h-scroll
ALIAS: 시트에, 가로스크롤바를, 표시하지, 않는, 기능으로
ALIAS_EN: no, scroll
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/no-h-scroll
---
# NoHScroll ***(cfg)***

> 시트에 가로스크롤바를 표시하지 않는 기능으로 시트 컬럼의 개수 만큼 너비가 결정됩니다.

> 해당 기능은 `SearchMode: 0 (FastLoad)`에서는 사용할 수 없습니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|시트내 가로 스크롤 사용 (`default`)|
|`1(true)`|가로 스크롤 사용안함|


### Example
```javascript
options = {
    Cfg:{
      NoHScroll: true,  //시트 내에 가로스크롤을 표시하지 않고, 너비를 조절함
    },
};
```

### Read More
- [NoVScroll cfg](./no-v-scroll)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
