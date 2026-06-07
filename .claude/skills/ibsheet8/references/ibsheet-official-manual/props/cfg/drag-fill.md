---
KEY: dragFill
KIND: config-property
PATH: props/cfg/drag-fill
ALIAS: 포커스, 오른쪽, 하단을, 드래그, 채우기
ALIAS_EN: drag, fill, focus, right
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/drag-fill
---
# DragFill ***(cfg)***
> 포커스 된 셀 오른쪽 하단을 드래그 시 채우기 동작 활성화 여부를 설정합니다.

> <!-- `[비공개]` shift + 드래그 액션을 공유합니다.-->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|드래그 채우기 동작 비활성 (`default`)|
|`1(true)`|드래그 채우기 동작 활성|


### Example
```javascript
options.Cfg = {
   "DragFill": true // 채우기 동작 활성화
};
```

### Read More
<!--!
- `[비공개]` [IBSheet8 Actions](../../appx/ibsheet8-actions.md)
-->
### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.24|기능 추가|
