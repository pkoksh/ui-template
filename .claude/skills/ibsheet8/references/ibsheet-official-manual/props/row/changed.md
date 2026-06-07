---
KEY: changed
KIND: row-property
PATH: props/row/changed
ALIAS: 행의, 변경, 여부를, 나타냅니다
ALIAS_EN: changed, change, modify
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/changed
---
# Changed ***(row)***

> 행의 변경 여부를 나타냅니다.

> 행의 값을 수정시 자동으로 `1(true)`로 수정되고, 값을 원래 값으로 복원하면 자동으로 속성이 제거됩니다.

> 별도로 [NoColor](./no-color) 속성을 설정하지 않으면, 수정시 배경색상은 css/default(테마)/main.css파일에 `.IBColorChanged`로 설정한 색상 (`기본값:#FFFFD6` 연한노란색)으로 변경됩니다.

> 이 속성은 직접 값을 변경하기 보다는 수정 여부를 확인하는 용도로 사용할 것을 권합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`1(true)`|수정됨|


### Example
```javascript
// 전체 데이터 중에 수정된 행의 개수를 확인
// 아래 예제는 Changed 속성을 확인해보기 위해 작성되었으며,
// 실제 수정된 행의 개수를 확인하려면 getRowsByStatus()함수를 사용하시면 됩니다.
var rows = sheet.getDataRows();
var cnt = 0;
for (var i = 0; i < rows.length; i++) {
    if (rows[i]["Changed"]) cnt++;
}
alert(cnt+"개의 수정된 행이 존재합니다.");
```

### Read More
- [Added row](./added)
- [Deleted row](./deleted)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
