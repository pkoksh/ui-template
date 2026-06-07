---
KEY: inEditMode
KIND: config-property
PATH: props/cfg/in-edit-mode
ALIAS: 시트의, 편집, 시점을, 설정합니다
ALIAS_EN: in, edit, mode, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/in-edit-mode
---
# InEditMode ***(cfg)***

> 시트의 편집 시점을 설정합니다.

> 일반적으로 편집하고자 하는 셀을 더블클릭하거나, 해당 셀에 포커스가 있는 상태에서 F2 혹은 Enter 키 입력시 편집이 시작됩니다. 

> 편집 상태에서 Esc 키 입력시 편집상태가 종료됩니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|- 이미 포커스된 셀을 클릭할 때
- Enter나 F2 키를 입력할 때
- 포커스 되지 않은 셀을 더블 클릭할 때
|
|`1`|- 셀을 클릭시
- 포커스 상태에서 Enter나 F2 키 입력시|
|`2`|- 이미 포커스된 셀을 클릭할 때
- Enter나 F2 키를 입력할 때
- 포커스 되지 않은 셀을 더블 클릭할 때
- 포커스 상태에서 입력할 때
(`default`)|
|`3`|- 이미 포커스된 셀을 더블 클릭할 때
- Enter나 F2 키를 입력할 때
- 포커스 상태에서 입력할 때
|


### Example
```javascript
options.Cfg = {
    InEditMode: 1,        //클릭시 즉시 편집상태로 전환
    ...
};
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
