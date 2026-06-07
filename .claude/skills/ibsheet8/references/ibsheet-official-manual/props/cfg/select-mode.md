---
KEY: selectMode
KIND: config-property
PATH: props/cfg/select-mode
ALIAS: 마우스, 조작으로, 또는, 행을, 선택
ALIAS_EN: select, mode, selection
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/select-mode
---
# SelectMode ***(cfg)***

> 마우스 조작으로 셀 또는 행을 선택 시 동작을 변경합니다.

> `SelectMode: 1, 2`에서 shift + 드래그 시 기존에 선택된 영역들은 선택이 해제됩니다.
<!--!
  * `[비공개 설명]` SelectMode: 0 (기존)은 shift + 드래그 시 SelectingCells: 0이 아닐 때만 선택을 해제  
!-->
### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`| ctrl + 클릭, 마우스드래그 선택으로 포커스가 변경되지 않습니다. (default)
 새로운 선택 영역 중 이미 선택된 셀이 포함된 경우 기존에 선택된 셀과 새로운 영역의 선택이 해제됩니다. |
|`1`| ctrl + 클릭, 마우스 드래그 선택으로 포커스가 변경됩니다. 
 shift + 클릭으로 선택 시 기존의 선택을 취소하고 새롭게 선택된 영역을 유지합니다.|
|`2`| ctrl + 클릭, 마우스 드래그 선택으로 포커스가 변경됩니다. 
 shift + 클릭으로 선택 시 기존의 선택과 새롭게 선택된 영역을 유지합니다.|

### Example
```javascript
options.Cfg = {
   SelectMode: 1  
};
```

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.28|기능 추가|