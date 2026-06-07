---
KEY: canButtonClickEvent
KIND: config-property
PATH: props/cfg/can-button-click-event
ALIAS: 이고, 경우, 이벤트, 사용을, 허용할지
ALIAS_EN: can, button, click, event
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/can-button-click-event
---
# !CanButtonClickEvent ***(cfg)***

> Type이 Button이고 `Disabled: 1` 일 경우 이벤트 사용을 허용할지 불허용할지 기능 추가.

> 허용, 불허용 Event list는 다음과 같습니다. 

> * `onAfterClick`
> * `onClick`
> * `onDblClick`
> * `onLongClick`
> * `onRightClick`
> * `onRigthtLongClick`
> * `OnClick`


### Type
`boolean`


### Options
|Value|Description|
|-----|-----|
|`0(false)`|`Type: Button, Disabled: 1` 인 버튼만 이벤트가 일어나지 않음. (`default`)|
|`1(true)`|`Type: Button`, `Disabled`의 유무와 상관없이 이벤트가 발생. |


### Example
```javascript
options.Cfg = {
  ...
  // Disabled가 유무랑 상관없이 이벤트 발생!
  CanButtonClickEvent: 1
  ...
};
```

### Read More
- [Disabled col](/docs/props/col/disabled)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|기능 추가|
