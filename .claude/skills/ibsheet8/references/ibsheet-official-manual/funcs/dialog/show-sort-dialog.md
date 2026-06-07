---
KEY: showSortDialog
KIND: method
PATH: funcs/dialog/show-sort-dialog
ALIAS: sheet.showSortDialog, showSortDialog(), 시트의, 정렬을, 설정할, 있는, 다이얼로그
ALIAS_EN: show, sort, dialog, modal, popup
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/dialog/show-sort-dialog
---
# showSortDialog ***(method)***

> 시트의 정렬을 설정할 수 있는 다이얼로그 창을 오픈합니다.

> 확인 버튼 클릭시 다이얼로그에서 설정한 순서대로 정렬이 실행됩니다.

> <mark>해당 함수는 `"/plugins/ibsheet-dialog.js"` 파일이 포함되어 있어야 사용하실 수 있습니다.</mark>

> 다이얼로그에 대한 자세한 수정은 `ibsheet-dialog.js`파일에서 하실 수 있습니다.

###
![다운로드](/assets/imgs/showSortDialog.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 다운로드 -->

### Syntax
```javascript
object showSortDialog( width, height, headerIndex, name, excludeHideCol, useOptions );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|width|`number`|선택|다이얼로그 창의 너비 (`default: 600`)|
|height|`number`|선택|다이얼로그 창의 높이 (`default: 200`)|
|headerIndex|`number`|선택|헤더행이 여러 줄인 경우 몇 번째 헤더행을 다이얼로그의 기준 컬럼 셀 값으로 표시할 지 여부
(`default: 모든 헤더행의 타이틀을 구분자 "/"로 연결하여 표시`)|
|name|`string`|선택|다이얼로그 이름 (`default: "sortSheet_" + 시트id`)|
|excludeHideCol|`boolean`|선택|숨겨진 컬럼에 대한 처리 여부
 `true`로 설정하는 경우 숨겨진 컬럼은 기준 컬럼 셀에서 보이지 않는다 
`0(false)`:다이알로그 출력 시, 숨겨진 컬럼 포함 (`default`)
`1(true)`:다이알로그 출력 시 숨겨진 컬럼 제외|
|useOptions|`boolean`|선택|정렬에 대한 추가 옵션을 설정할 수 있는 컬럼들을 보일지 여부
`true`로 설정하는 경우 [NumberSort](/docs/props/col/number-sort), [RawSort](/docs/props/col/raw-sort), [CaseSensitive](/docs/props/col/case-sensitive) 설정 컬럼이 보여진다. 
`0(false)`:다이알로그 출력 시 정렬에 대한 추가 옵션 설정 컬럼 숨김 (`default`)
`1(true)`:다이알로그 출력 시 정렬에 대한 추가 옵션 설정 컬럼 보임|

### Return Value
***none***

### Example
```javascript
// 정렬 다이얼로그 오픈
sheet.showSortDialog(600, 400);

// 객체 방식
sheet.showSortDialog({
  width: 600,
  height: 400,
  excludeHideCol: 1, // 숨긴 열 기준 컬럼으로 사용 안함
  useOptions: 1 // 추가 옵션 기능 사용
});
```

### Read More
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)
- [NumberSort col](/docs/props/col/number-sort)
- [RawSort col](/docs/props/col/raw-sort)
- [CaseSensitive col](/docs/props/col/case-sensitive)

### Since

|product|version|desc|
|---|---|---|
|dialog|0.0.8|기능 추가|
