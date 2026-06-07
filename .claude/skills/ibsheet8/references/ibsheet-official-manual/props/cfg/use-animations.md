---
KEY: useAnimations
KIND: config-property
PATH: props/cfg/use-animations
ALIAS: 시트, 애니메이션, 사용, 여부를, 설정합니다
ALIAS_EN: use, animations, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/use-animations
---
# !UseAnimations ***(cfg)***

> 시트 애니메이션 사용 여부를 설정합니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|애니메이션 사용 안함 (`default`)|
|`1(true)`|애니메이션 사용|

### Animations

|Action|Animation|
|-------|----------|
|`Ctrl+Del` (행 삭제, 삭제 취소)|`.IBZoomOut`, `.IBZoomIn`|
|`Ctrl+Space` (행 선택, 선택 취소)|`.IBRotateX90`|
|셀 편집|`.IBZoomIn`|
|[Menu](/docs/appx/menu) 펼치기, 접기|`.IBAnimateCenterTop`, `.IBZoomInY`, `.IBZoomOutY`|
|[Tip](/docs/props/cell/tip) 보이기, 숨기기|`.IBAnimateLeftTop`, `.IBZoomIn`, `.IBZoomOut`|
|[Hint](/docs/props/cell/show-hint) 보이기, 숨기기|`.IBShow`, `.IBHide`|
|[Message](/docs/funcs/core/show-message-time) 보이기, 숨기기|`.IBZoomIn`, `.IBZoomOut`|
|달력 보이기, 숨기기|`.IBAnimateRightTop`,`.IBZoomIn`, `.IBZoomOut`|


### Example
```javascript
options.Cfg = {
  UseAnimations: 1 // 시트 애니메이션 사용
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.0|기능 추가|
