---
KEY: added
KIND: row-property
PATH: props/row/added
ALIAS: 함수를, 추가된, 행은, 내부적으로, 해당
ALIAS_EN: added
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/added
---
# Added ***(row)***

> [addRow](/docs/funcs/core/add-row) 함수를 통해 추가된 행은  내부적으로 해당 속성 값을 1로 갖게 됩니다.

> 별도로 [NoColor](./no-color) 속성을 설정하지 않으면, 신규로 추가된 행의 배경색상은 css/default(테마)/main.css파일에 `.IBColorAdded`로 설정한 색상 (`기본값:#eee6fa` 연한파랑색)으로 변경됩니다.

> 이 속성은 직접값을 수정하기 보다는 신규행 여부를 확인하는 용도로 사용하실 것을 권합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`1(true)`|신규행|


### Example
```javascript
//삭제 버튼
function delete(sheet){
    var frow = sheet.getFocusedRow();
    //신규행은 즉시 삭제하고, 그외에는 상태만 삭제로 바꾼다.
    if (frow.Added) {
        sheet.removeRow(frow);
    } else {
        sheet.deleteRow(frow, 1);
    }
}

```

### Read More
- [Changed row](./changed)
- [Deleted row](./deleted)
- [addRow method](/docs/funcs/core/add-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
