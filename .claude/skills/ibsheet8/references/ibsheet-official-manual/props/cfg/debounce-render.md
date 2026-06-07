---
KEY: debounceRender
KIND: config-property
PATH: props/cfg/debounce-render
ALIAS: 호출시, 걸어, 호출합니다
ALIAS_EN: debounce, render
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/debounce-render
---
# DebounceRender ***(cfg)***

> `rerender`, `renderBody` 호출시 debounce를 걸어 호출합니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
| `0` | `rerender`, `renderBody` 호출시 debounce를 걸지 않습니다. (`default`)|
| `1` | `rerender`, `renderBody` 호출시 debounce를 걸어 호출합니다. |

### Example
```javascript
options = {
    Cfg :{
        DebounceRender: 1, // `rerender`, `renderBody` 호출시 debounce를 걸어 호출합니다.
        ...
    }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.38|기능 추가|
