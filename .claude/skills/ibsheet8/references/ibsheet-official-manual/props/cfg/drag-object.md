---
KEY: dragObject
KIND: config-property
PATH: props/cfg/drag-object
ALIAS: 행을, 드래그할, 마우스에, 보여질, 대상을
ALIAS_EN: drag, object
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/drag-object
---
# DragObject ***(cfg)***

> 행을 드래그할 때 마우스에 보여질 대상을 선택합니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|아무것도 보이지 않음|
|`1`|행 DOM 객체 (`default`)|
|`2`|행의 개수를 담고 있는 메시지|

### Example
```javascript
options.Cfg = {
    DragObject: 2
};
```

### Read More

- [CanDrag cfg](./can-drag)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
