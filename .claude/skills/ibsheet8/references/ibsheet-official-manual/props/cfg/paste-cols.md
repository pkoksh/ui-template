---
KEY: pasteCols
KIND: config-property
PATH: props/cfg/paste-cols
ALIAS: 클립보드의, 내용을, 시트에, 붙여넣을, 어떤
ALIAS_EN: paste, cols
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/paste-cols
---
# PasteCols ***(cfg)***

> `ctrl+v` 를 통해 클립보드의 내용을 시트에 붙여넣을 때, 어떤 열을 기준으로 데이터가 붙여넣어질지 설정합니다.

> 맨 앞에 열 부터 붙여넣을 지, 포커스가 있는 위치 우측으로 붙여넣을 지 등을 설정할 수 있습니다.

> [(col)CanCopyPaste](/docs/props/col/can-copy-paste)속성에 따라 붙여넣기 가능/불가능 여부가 결정됩니다.

> 시트 내에서 드래그를 통한 선택은 [(cfg)SelectingCells](./selecting-cells)를 통해 설정가능합니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|포커스가 된 열에만 붙여넣기가 됨.(포커스 된 셀을 기준으로 아래로 덮어씌움)|
|`1`|포커스 위치와 무관하게 맨 왼쪽 열을 기준으로 보여지는 열에 붙여넣기가 됨.( `SelectingCells:0` 인 경우에 해당 값이 `default`)|
|`2`|1번과 유사하게 왼쪽부터 붙여넣기가 되는데 히든된 열까지 포함해서 붙여넣기 함.|
|`3`|포커스된 셀을 기준으로 우측, 아래로 붙여넣기 함.(`defaut`)|


### Example
```javascript
options = {
    Cfg :{
      PasteCols: 1 // 맨 왼쪽부터 보여지는 열에 붙여넣기 한다.
    }
};
```

### Read More
- [CanCopyPaste col](/docs/props/col/can-copy-paste)
- [SelectingCells cfg](./selecting-cells)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|