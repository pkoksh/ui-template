---
KEY: showHtmlEditDialog
KIND: method
PATH: funcs/dialog/show-html-edit-dialog
ALIAS: sheet.showHtmlEditDialog, showHtmlEditDialog(), 행의, 내용을, 다이얼로그로, 열어, 보여줍니다
ALIAS_EN: show, html, edit, dialog
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/dialog/show-html-edit-dialog
---
# !showHtmlEditDialog ***(method)***

> 한 행의 내용을 다이얼로그로 열어 보여줍니다.

> 시트를 사용하지 않은 tml tag를 이용한 편집 다이얼로그입니다.

> <mark>해당 함수는 `"/plugins/ibsheet-dialog.js"` 파일이 포함되어 있어야 사용하실 수 있습니다.</mark>

> 다이얼로그에 대한 자세한 수정은 `ibsheet-dialog.js`파일에서 하실 수 있습니다.

###
<!-- 이미지가 들어갈 부분 -->

### Syntax
```javascript
object showHtmlEditDialog( row, width, height, headerIndex, name, excludeHideCol );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|다이얼로그로 보여질 [데이터 로우 객체](/docs/appx/row-object)
|width|`number`|선택|다이얼로그 창의 너비 (`default: 700`)|
|height|`number`|선택|다이얼로그 창의 높이 (`default: 400`)|
|headerIndex|`number`|선택|헤더행이 여러 줄인 경우 몇 번째 헤더행을 다이얼로그의 타이틀로 표시할 지 여부
(`default: 모든 헤더행의 타이틀을 구분자 "/"로 연결하여 표시`)|
|name|`string`|선택|다이얼로그 이름 (`default: "htmlEditSheet_" + 시트id`)|
|excludeHideCol|`boolean`|선택|숨겨진 컬럼에 대한 처리 여부
`0(false)`:다이알로그 출력 시, 숨겨진 컬럼 포함 (`default`)
`1(true)`:다이알로그 출력 시 숨겨진 컬럼 제외|

### Return Value
***none***

### Example
```javascript
// 특정 열의 셀 클릭 시 다이얼로그 오픈
options.Events = {
  onAfterClick:function(evtParam){
    if(evtParam.col == "DetailBtn"){
      sheet.showHtmlEditDialog(evtParam.row);
    }
  }
}

// 객체 방식
sheet.showHtmlEditDialog({row: sheet.getFocusedRow(), width: 700, height: 700});
```

### Read More
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)

### Since

|product|version|desc|
|---|---|---|
|dialog|1.0.4|기능 추가|
