---
KEY: showDialog
KIND: static-member
PATH: static/show-dialog
ALIAS: 시트가, 제공하는, 다이얼로그, 레이어팝업, 생성합니다
ALIAS_EN: show, dialog, modal, popup
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/static/show-dialog
---
# showDialog ***(static)***

> 시트가 제공하는 다이얼로그(레이어팝업)을 생성합니다.

### Syntax
```javascript
object IBSheet.showDialog(dialog, pos);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|dialog|`object`|필수|`dialog` 에 대한 초기화 설정([Dialog appendix참고](/docs/appx/dialog))|
|pos|`object`|선택|메뉴가 표시될 위치([Position appendix참고](/docs/appx/position))|

### Return Value
***object*** : 다이얼로그 객체

### Example
```javascript
//화면 가운데에 다이얼로그를 alert 처럼 띄운다.
var dlg = {
  "Head": "IBSheet 경고",
  "Body": "<div>선택하신 일자가 마감일 이후 입니다. 다시 선택하여 주세요.</div>",
  "Modal": 1,
  "CloseClick": 1,
  "MinHeight": 50
};
IBSheet.showDialog(
  dlg ,
  {"Align":"center, middle", "Width":document.body.clientWidth, "Height":document.body.clientHeight}
);
```
### Read More

- [showDialog method](/docs/funcs/core/show-dialog)
- [showDownloadDialog method](/docs/funcs/dialog/show-download-dialog)
- [showEditDialog method](/docs/funcs/dialog/show-edit-dialog)
- [showFindDialog method](/docs/funcs/dialog/show-find-dialog)
- [showPivotDialog method](/docs/funcs/dialog/show-pivot-dialog)
- [showUploadDialog method](/docs/funcs/dialog/show-upload-dialog)
- [Dialog appendix](/docs/appx/dialog)
- [Position appendix](/docs/appx/position)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
