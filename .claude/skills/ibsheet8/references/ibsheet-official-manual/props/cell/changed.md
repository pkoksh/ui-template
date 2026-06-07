---
KEY: changed
KIND: cell-property
PATH: props/cell/changed
ALIAS: 셀의, 변경, 여부를, 나타냅니다
ALIAS_EN: changed, change, modify
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/changed
---
# Changed ***(cell)***

> 셀의 변경 여부를 나타냅니다.

> 셀의 값을 수정시 자동으로 `1(true)`로 수정되고, 값을 원래 값으로 복원하면 자동으로 속성이 제거됩니다.

> 별도로 [NoColor](./no-color) 속성을 설정하지 않으면, 수정시 셀의 배경색상은 css/default(테마)/main.css파일에 .IBColorChangedCell 로 설정한 색상 (기본값:#EEE 연한 회색)으로 변경됩니다.

> 이 속성은 직접 값을 변경하기 보다는 수정 여부를 확인하는 용도로 사용할 것을 권합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`1(true)`|수정됨|


### Example
```javascript
//셀값의 수정여부를 확인합니다. (열이름이 CLS 라고 가정)
var row = sheet.getRowById("AR10");
if (row["CLSChanged"]) {
    //셀값이 수정되었습니다...
}
```

### Read More
- [Changed row](/docs/props/row/changed)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
