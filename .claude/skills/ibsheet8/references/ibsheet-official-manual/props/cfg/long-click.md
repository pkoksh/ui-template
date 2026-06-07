---
KEY: longClick
KIND: config-property
PATH: props/cfg/long-click
ALIAS: 마우스, 버튼, 또는, 모바일, 기기에서의
ALIAS_EN: long, click
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/long-click
---
# !LongClick ***(cfg)***

> 마우스 버튼 또는 모바일 기기에서의 화면 터치시 눌렀다 뗄 때까지의 시간을 설정합니다.  

> 기본은 `500 ms(millisecond, 0.5초)` 로 해당 시간 동안 마우스를 누르면 [onLongClick](/docs/events/on-long-click) 이벤트가 호출됩니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|클릭시 `onLongClick` 이벤트로 처리할 시간 (`default: 500ms`)|


### Example
```javascript
options.Cfg = {
  LongClick: 1000,       // 1초 동안 누를때 onLongClick() 호출
  ...
};
```

### Read More
- [onLongClick event](/docs/events/on-long-click)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
