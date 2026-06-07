---
KEY: pasteFocused
KIND: config-property
PATH: props/cfg/paste-focused
ALIAS: 시트에서, 복사한, 데이터를, 붙여넣을때, 데이터가
ALIAS_EN: paste, focused
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/paste-focused
---
# PasteFocused ***(cfg)***

> 시트에서 `ctrl+c` 로 복사한 데이터를 `ctrl+v` 로 붙여넣을때 데이터가 붙여질 방식을 설정합니다. 

> 붙여넣기를 할때는 반드시 해당 시트에 포커스된 행 또는 셀이 있어야 합니다.  



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|포커스된 행에는 붙여넣기를 안함.|
|`3`|포커스된 행과 그 하위 레벨의 행들만 붙여넣기 함. 만약 복사한 범위가 선택된 영역의 행 크기와 다를 경우 일치하지 않는 영역은 무시됨 (`default`)|
|`6`|포커스된 행 상단에 신규행을 추가하여 붙여넣기 함.|
|`9`|포커스된 행 하단으로 붙여넣기 하다가 더 이상 덮어씌울 행이 없는 경우에는 행을 추가하여 붙여넣기 함.|


### Example
```javascript
options = {
    Cfg :{
      PasteFocused: 6,  // ctrl+v 시 신규행을 추가
    }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
