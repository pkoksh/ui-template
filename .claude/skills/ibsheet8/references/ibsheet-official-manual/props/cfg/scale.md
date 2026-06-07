---
KEY: scale
KIND: config-property
PATH: props/cfg/scale
ALIAS: 주어진, 배율, 따라, 시트, 전체를
ALIAS_EN: scale, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/scale
---
# Scale ***(cfg)***

> 주어진 배율(zoom factor)에 따라 시트 전체를 확대하거나 축소합니다. 

> 1.0보다 작은 값은 시트를 축소합니다. (0.1 미만으로 사용하실 수 없습니다.) 

> 1.0보다 큰 값은 시트를 확대합니다. 


> **<mark>주의</mark> : 해당 속성은 `Menu`, `Dialog`, `Message`에는 영향을 주지 않습니다.**

> **<mark>주의</mark> : 시트 div의 너비나 높이를 100%와 같이 비율로 설정하여 사용하시는 경우 `NoVScroll`이나 `NoHScroll`을 같이 사용하실 때, 설정하신 배율에 따라 시트의 영역 전체가 확대/축소 될 수 있습니다.**


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|number|시트의 배율 설정 (`default: 1.0`)|


### Example
```javascript
options.Cfg = {
  Scale: 0.5      // 시트를 0.5배로 출력합니다다.
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.11|기능 추가|
