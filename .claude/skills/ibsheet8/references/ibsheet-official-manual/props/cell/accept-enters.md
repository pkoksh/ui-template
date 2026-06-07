---
KEY: acceptEnters
KIND: cell-property
PATH: props/cell/accept-enters
ALIAS: 타입이, 셀에서, 편집중, 입력시, 동작에
ALIAS_EN: accept, enters
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/accept-enters
---
# AcceptEnters ***(cell)***

> 타입이 `Lines`인 셀에서 편집중 `Enter키` 입력시 동작에 대해 설정합니다. 



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|값 변경을 마치고, 편집모드를 종료합니다.|
|`1`|줄넘김문자가 삽입되고 계속 편집이 진행됩니다.
편집을 종료하려면 `Ctrl or Shift or Alt + Enter`를 입력하거나 `tab키`를 입력해야 합니다.|
|`2`|값 변경을 마치고, 편집모드를 종료합니다. 
`Ctrl or Shift or Alt + Enter`를 입력하여 줄넘김을 할 수 있습니다.|
|`3`|`Ctrl or Shift or Alt + Enter`, `Enter` 모두 줄넘김문자가 삽입됩니다.
편집을 종료하려면 `tab키`를 누르거나 마우스로 다른 셀을 클릭하여야 합니다.|


### Example
```javascript
//Lines 셀에서 편집중 Enter키 입력시 줄넘김으로 동작
sheet.setAttribute(sheet.getRowById("AR99"), "DESC", "AcceptEnters", 1);
```

### Read More
- [EnterMode cfg](/docs/props/cfg/enter-mode)
- [AcceptEnters col](/docs/props/col/accept-enters)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
