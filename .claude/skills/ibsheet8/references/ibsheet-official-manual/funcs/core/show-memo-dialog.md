---
KEY: showMemoDialog
KIND: method
PATH: funcs/core/show-memo-dialog
ALIAS: sheet.showMemoDialog, showMemoDialog(), 특정, 헤더, 셀에, 메모를, 입력할
ALIAS_EN: show, memo, dialog, header
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-memo-dialog
---
# showMemoDialog ***(method)***

> 특정 헤더 셀에 메모를 입력할 수 있는 다이얼로그 창을 띄웁니다.

> 메모기능은 시트의 헤더 셀에만 설정 가능합니다.

> 메모 값 설정을 위해서는 [MemoId cfg](/docs/props/cfg/memo-id) 가 설정되어 있어야 합니다.

> 하나의 헤더 셀에 하나의 메모 값만 설정 가능합니다.

> 메모 데이터는 브라우저의 localStorage에 관리됩니다.

![MemoId](/assets/imgs/showMemoDialog.png)
<!-- IMAGE: 스크린샷/예시 이미지 - MemoId -->

### Syntax
```javascript
boolean showMemoDialog( row , col );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|필수|열이름


### Return Value
***boolean*** : 다이얼로그 띄우기 성공여부 (메모 입력 다이얼로그가 정상적으로 띄워졌으면 true, 실패했을 경우 false 리턴)

### Example
```javascript
// 특정 헤더 셀에 메모를 입력하기 위한 다이얼로그를 띄운다.
sheet.showMemoDialog(sheet.getHeaderRows()[0], "sCorp");
```

### Read More
- [MemoId cfg](/docs/props/cfg/memo-id)
- [removeMemo method](./remove-memo)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|기능 추가|
