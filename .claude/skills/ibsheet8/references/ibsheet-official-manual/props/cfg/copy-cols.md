---
KEY: copyCols
KIND: config-property
PATH: props/cfg/copy-cols
ALIAS: 복사하여, 붙여넣기에, 사용할, 열을, 설정합니다
ALIAS_EN: copy, cols
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/copy-cols
---
# CopyCols ***(cfg)***

> 복사하여 붙여넣기에 사용할 열을 설정합니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|포커스된 열만 붙여넣기에 사용|
|`1`|모든 표시열을 붙여넣기에 사용 (`SelectingCells : 0` 인 경우 해당 값이 `default`로 설정됩니다.)|
|`2`|모든 열을 붙여넣기에 사용(숨겨진 컬럼도 포함)|
|`3`|포커스된 행에 대해서만 포커스된 셀 범위 또는 모든 표시 열(`default`)|


### Example
```javascript
options = {
    "Cfg":{
      "CopyCols": 1,  // 모든 표시열을 붙여넣기에 사용
    }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.20|기능 추가|
