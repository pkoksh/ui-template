---
KEY: rowObject
KIND: appendix
PATH: appx/row-object
ALIAS: 행, 객체, 등의, 함수를, 얻게
ALIAS_EN: row, object
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/row-object
---
# 행 객체(Row Object)  ***(appendix)***
> sheet.[getFocusedRow](/docs/funcs/core/get-focused-row)()나 sheet.[getRowById](/docs/funcs/core/get-row-by-id)("AR11") 등의 함수를 통해 얻게 되는 데이터 행 객체는 해당 행의 값과, 각 열 별로 설정한 속성값([CanEdit](/docs/props/row/can-edit)나 [Visible](/docs/props/row/visible) 등) 그리고 주변행이나 부모행에 대한 링크 정보를 갖고 있습니다.

## Row의 값
행 객체가 갖고 있는 각 열의 값을 확인하거나 수정하실 수 있습니다.
```javascript
var row = sheet.getRowById("AR1");
var AmtColumnValue = row["AMT"]; //AMT 열의 값을 얻습니다.
row["AMT"] = 2300; //AR1행의 AMT 열의 값을 2300으로 수정합니다.
//수정된 값은 화면에 즉시 반영되지 않고, refreshCell() 이나 refreshRow()함수를 호출하셔야 반영됩니다.
```

## Row의 속성값
행 객체의 각 열에 부여한 속성을 확인 하거나 수정하실 수 있습니다.
```javascript
var row = sheet.getFocusedRow();
var isEditable = row["AMTCanEdit"]; //AMT 열의 수정가능여부를 확인합니다.
row["AMTCanEdit"] = 0; //포커스된 행의 AMT열의 수정가능여부를 수정불가로 변경합니다.
//속성값에 따라 refreshCell() 이나 refreshRow()함수를 호출하셔야 반영될 수 있습니다.
```

## Row의 링크정보
행객체는 각 행의 위의 행,아래 행, 부모행, 자식행에 대한 링크를 갖고 있습니다.

|Name|Description|
|---|---|
|nextSibling|아래 행 객체(트리 사용시에는 같은 부모 안에서 아래 형제 행. 없으면 null)|
|previousSibling|위 행 객체(트리 사용시에는 같은 부모 안에서 위 형제 행. 없으면 null)|
|firstChild|트리 사용시 현재 행 객체의 첫번째 자식행 객체|
|lastChild|트리 사용시 현재 행 객체의 마지막 자식행 객체|
|parentNode|부모행 객체|

```javascript
var row = sheet.getFocusedRow();
var nextRow = row.nextSibling; //포커스 된 행의 아래 행 객체
var parentRow = row.parentNode; //포커스 된 행의 부모행 객체
```

### Read More

- [행(Row) 구조에 대한 이해 getting started](/docs/start/row)
- [getFocusedRow method](/docs/funcs/core/get-focused-row)
- [getRowById method](/docs/funcs/core/get-row-by-id)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
