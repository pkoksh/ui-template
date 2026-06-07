---
KEY: wheelFixed
KIND: config-property
PATH: props/cfg/wheel-fixed
ALIAS: 헤드, 영역, 영역에, 마우스가, 위치할
ALIAS_EN: wheel, fixed
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/wheel-fixed
---
# !WheelFixed ***(cfg)***

> 헤드 영역, 풋 영역에 마우스가 위치할 때 스크롤이 동작할지 여부를 결정합니다 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|기능 사용 안함 (`default`)|
|`1(true)`|헤드 영역, 풋 영역에 마우스가 위치할 때 스크롤이 동작|

### Example
```javascript
options.Cfg = {
  WheelFixed: 1, // 헤드 영역, 풋 영역에 마우스가 위치할 때 스크롤이 동작합니다
  ...
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
