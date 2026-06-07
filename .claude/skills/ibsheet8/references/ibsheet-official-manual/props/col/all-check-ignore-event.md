---
KEY: allCheckIgnoreEvent
KIND: column-property
PATH: props/col/all-check-ignore-event
ALIAS: 헤더, 전체, 체크, 언체크, 시에
ALIAS_EN: all, check, ignore, event, header, total, checkbox
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/all-check-ignore-event
---
# AllCheckIgnoreEvent ***(col)***

> Type: "Bool" 헤더 전체 체크/언체크 시에 `onAfterChange` 이벤트를 호출할지 말지 설정하는 옵션입니다. 

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|`onAfterChange` 이벤트가 발생합니다. (`default`)|
|`1(true)`|`onAfterChange` 이벤트가 발생하지 않습니다.|

### Example
```javascript
options.Cols = [
    ...
    //헤더의 전체 체크박스를 클릭할시 onAfterChange이벤트가 발생하지 않습니다.
    {Header: {Value: "주관부서", HeaderCheck: 1}, Type: "Bool", Width: 80, Align: "Center", Name:"ORG_NM", AllCheckIgnoreEvent:1}
    ...
];
```

### Read More

- [setAllCheck method](/docs/funcs/core/set-all-check)
- [onAfterChange event](/docs/events/on-after-change)
- [onCheckAllFinish event](/docs/events/on-check-all-finish)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.15|기능 추가|
