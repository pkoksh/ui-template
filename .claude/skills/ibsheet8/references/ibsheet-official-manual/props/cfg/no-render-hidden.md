---
KEY: noRenderHidden
KIND: config-property
PATH: props/cfg/no-render-hidden
ALIAS: 시트, 생성후, 최초, 조회할, 보이지
ALIAS_EN: no, render, hidden, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/no-render-hidden
---
# NoRenderHidden ***(cfg)***

> 시트 생성후 최초 조회할 때 보이지 않는 컬럼은 Dom에 생성하지 않도록 합니다.

> 해당 기능을 사용하면 보이지 않는 컬럼 (Visible: 0) 은 화면에 랜더링되지 않아 많은 컬럼이 있는 경우 보다 빠르게 랜더링 될 수 있습니다.

> `주의` 단, 해당 옵션 사용 후 `showCol, hideCol` 을 이용하여 컬럼을 보이거나 숨기게 할 경우에는 반드시 `render` 인자를 `0` 으로 사용 후 마지막에 `rerender` 함수를 호출해야 합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|보이지 않는 컬럼(Visible:0) 을 Dom에 미리 생성함 (`default`)|
|`1(true)`|보이지 않는 컬럼(Visible:0) 을 Dom에 미리 생성하지 않음|


### Example
```javascript
options = {
  "Cfg":{
    "NoRenderHidden": 1,  // 보이지 않는 컬럼을 Dom 에 미리 생성하지 않도록 설정
  }
};
```

### Read More
- [showCol](/docs/funcs/core/show-col)
- [hideCol](/docs/funcs/core/hide-col)
- [rerender](/docs/funcs/core/rerender)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.21|기능 추가|
