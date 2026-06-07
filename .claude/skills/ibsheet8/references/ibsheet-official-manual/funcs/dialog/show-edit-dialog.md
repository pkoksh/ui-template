---
KEY: showEditDialog
KIND: method
PATH: funcs/dialog/show-edit-dialog
ALIAS: sheet.showEditDialog, showEditDialog(), 행의, 내용을, 다이얼로그로, 열어, 보여줍니다
ALIAS_EN: show, edit, dialog
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/dialog/show-edit-dialog
---
# showEditDialog ***(method)***

> 한 행의 내용을 다이얼로그로 열어 보여줍니다.

> 다이얼로그 내에서 값을 수정하실 수도 있으나, `Formula`, `Related`(관계형 Enum)는 동작하지 않습니다.

> (가급적 다이얼로그 내에서 직접 수정보다는 확인 용도로 사용하실 것을 권합니다.)

> <mark>해당 함수는 `"/plugins/ibsheet-dialog.js"` 파일이 포함되어 있어야 사용하실 수 있습니다.</mark>

> 다이얼로그에 대한 자세한 수정은 `ibsheet-dialog.js`파일에서 하실 수 있습니다.

###
![다운로드](/assets/imgs/showEditDialog.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 다운로드 -->

### Syntax
```javascript
object showEditDialog( row, width, height, headerIndex, name, excludeHideCol, nav );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|다이얼로그로 보여질 [데이터 로우 객체](/docs/appx/row-object)
|width|`number`|선택|다이얼로그 창의 너비 (`default: 700`)|
|height|`number`|선택|다이얼로그 창의 높이 (`default: 400`)|
|headerIndex|`number`|선택|헤더행이 여러 줄인 경우 몇 번째 헤더행을 다이얼로그의 타이틀로 표시할 지 여부
(`default: 모든 헤더행의 타이틀을 구분자 "/"로 연결하여 표시`)|
|name|`string`|선택|다이얼로그 이름 (`default: "editSheet_" + 시트id`)|
|excludeHideCol|`boolean`|선택|숨겨진 컬럼에 대한 처리 여부
`0(false)`:다이알로그 출력 시, 숨겨진 컬럼 포함(`default`)
`1(true)`:다이알로그 출력 시 숨겨진 컬럼 제외|
|nav|`boolean`|선택|네비게이션 기능 사용 여부
`0(false)`:네비게이션 기능 사용 안함 (`default`)
`1(true)`:네비게이션 기능 사용|

### Return Value
***none***

### Example
```javascript
// 특정 열의 셀 클릭 시 다이얼로그 오픈
options.Events = {
  onClick:function(evtParam){
    if(evtParam.col == "DetailBtn"){
      sheet.showEditDialog(evtParam.row);
      return true;
    }
  }
}

// 객체 방식
sheet.showEditDialog({row: sheet.getFocusedRow(), width: 700, height: 700});
```

### Read More
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)

### Since

|product|version|desc|
|---|---|---|
|dialog|0.0.0|기능 추가|
|dialog|0.0.8|`excludeHideCol` 기능 추가|
|dialog|0.0.10|`nav` 기능 추가|
