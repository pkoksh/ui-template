---
KEY: staticCursor
KIND: config-property
PATH: props/cfg/static-cursor
ALIAS: 시트, 이외의, 요소를, 클릭했을, 포커스
ALIAS_EN: static, cursor, sheet, grid, focus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/static-cursor
---
# StaticCursor ***(cfg)***

> 시트 이외의 요소를 클릭했을 때 포커스 커서의 유지여부를 설정합니다.

> 만약 다른 시트나 시트 이외의 요소를 클릭할 때 현재시트의 선택 색상 및 윤곽선을 없애고자 하는 경우 `0(false)` 으로 설정하면 됩니다. 



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|시트 이외의 요소를 클릭할 때 선택된 시트 행 또는 셀의 색상 및 윤곽선 제거. 다른 시트 클릭시 해당 시트로 선택 처리|
|`1(true)`|시트 이외의 요소를 클릭하더라도 선택된 시트 행 또는 셀의 색상 및 윤곽선 유지 (`default`)


### Example
```javascript
options.Cfg = {
  StaticCursor: 0     // 포커스를 잃을 때 선택 색상도 제거.
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
