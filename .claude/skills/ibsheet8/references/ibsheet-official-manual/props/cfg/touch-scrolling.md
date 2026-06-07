---
KEY: touchScrolling
KIND: config-property
PATH: props/cfg/touch-scrolling
ALIAS: 모바일, 환경에서, 시트, 바디, 영역
ALIAS_EN: touch, scrolling, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/touch-scrolling
---
# TouchScrolling ***(cfg)***

> 모바일 환경에서 시트 바디 영역 터치 스크롤이 동작할지 여부를 결정합니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
| `0` | 모바일 환경에서 시트 바디 영역 터치 스크롤이 동작하지 않습니다.|
| `1` | 모바일 환경에서 시트 바디 영역 터치 스크롤이 동작합니다. (`default`)|

### Example
```javascript
options = {
    Cfg :{
        TouchScrolling: 0, // 모바일 환경에서 시트 바디 영역 터치 스크롤을 막습니다.
        ...
    }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.38|기능 추가|
