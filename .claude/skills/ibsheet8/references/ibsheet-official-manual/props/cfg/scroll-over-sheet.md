---
KEY: scrollOverSheet
KIND: config-property
PATH: props/cfg/scroll-over-sheet
ALIAS: 시트와, 브라우저에서, 세로, 스크롤이, 있을
ALIAS_EN: scroll, over, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/scroll-over-sheet
---
# ScrollOverSheet ***(cfg)***
> 시트와 브라우저에서 세로 스크롤이 있을 때 시트에서 스크롤이 끝난 후, 상위 부모의 스크롤이 동작하도록 하는 기능 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|기능 사용 안함 (`default`)|
|`1(true)`|세로 스크롤이 끝난 후, 상위 부모의 스크롤이 동작합니다.|


### Example
```javascript
// 시트의 스크롤이 끝난 후, 부모의 스크롤이 동작하도록 기능 사용
options.Cfg = {
    ScrollOverSheet: true
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.18|기능 추가|
