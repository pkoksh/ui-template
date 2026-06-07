---
KEY: getCanEdit
KIND: method
PATH: funcs/core/get-can-edit
ALIAS: sheet.getCanEdit, getCanEdit(), 특정, 셀의, 편집, 가능, 여부를
ALIAS_EN: get, can, edit, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-can-edit
---
# getCanEdit ***(method)***

> 특정 셀의 편집 가능 여부를 확인합니다.


### Syntax
```javascript
number getCanEdit( row, col );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|필수|열이름|

### Return Value
***number***

|value|설명|
|-----|-----|
|`0`|편집 불가(읽기 전용)
![CanEdit](/assets/imgs/canEdit0.png "CanEdit")
<!-- IMAGE: 스크린샷/예시 이미지 - CanEdit -->|
|`1`|편집 가능
![CanEdit](/assets/imgs/canEdit1.png "CanEdit")
<!-- IMAGE: 스크린샷/예시 이미지 - CanEdit -->|
|`2`|행의 내용은 편집 불가하지만, 편집 미리보기를 제공
![CanEdit](/assets/imgs/canEdit2.png "CanEdit")
<!-- IMAGE: 스크린샷/예시 이미지 - CanEdit -->|

### Example
```javascript
//특정 셀에 편집 가능 여부를 확인.
var edit = sheet.getCanEdit(sheet.getFocusedRow(), "RES_ENDDATE");
if (!edit) {
    alert("마감되었습니다");
}
```

### Read More
- [CanEdit row](/docs/props/row/can-edit)
- [CanEdit col](/docs/props/col/can-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
