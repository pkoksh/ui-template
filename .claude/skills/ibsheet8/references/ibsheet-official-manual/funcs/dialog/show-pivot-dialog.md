---
KEY: showPivotDialog
KIND: method
PATH: funcs/dialog/show-pivot-dialog
ALIAS: sheet.showPivotDialog, showPivotDialog(), 피벗, 데이터를, 확인하기, 위한, 다이얼로그를
ALIAS_EN: show, pivot, dialog
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/dialog/show-pivot-dialog
---
# showPivotDialog ***(method)***

> 피벗 데이터를 확인하기 위한 다이얼로그를 오픈합니다.

> 피벗 데이터를 만들 열을 우측으로 드래그하여 설정하신 후, 피벗 테이블 생성 버튼을 클릭하시면 원본시트 위치에 동적으로 생성된 피벗 시트가 보여집니다.

> <mark>해당 함수는 `"/plugins/ibsheet-dialog.js"` 파일이 포함되어 있어야 사용하실 수 있습니다.</mark>

> **<mark>주의</mark> : 피벗 다이얼로그 사용 시, 필터 다이얼로그([UseFilterDialog (cfg)](/docs/props/cfg/use-filter-dialog))는 사용 하실 수 없습니다.**

###
![피봇다이얼로그](/assets/imgs/showPivotDialog.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 피봇다이얼로그 -->

### Syntax
```javascript
object showPivotDialog(width, height, name, pivotParams, useStorage);
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|width|`number`|선택|다이얼로그 창의 너비 (`default: 500`)|
|height|`number`|선택|다이얼로그 창의 높이 (`default: 600`)|
|name|`string`|선택|다이얼로그 이름 (`default: "pivotDialog_" + 시트id`)|
|pivotParams|`object`|선택|[makePivotTable method](/docs/funcs/core/make-pivot-table) 옵션 사용
 (`format`, `callback`, `hideTotal` 사용 가능)|
|useStorage|`boolean`|선택|피벗 생성 정보 저장 기능 보여지기 여부 (`default: 0(false)`)
해당 기능을 사용할 때에는 [StorageSession](/docs/props/cfg/storage-session)를 설정해야 합니다
`0(false)`:피벗 생성 정보 저장 기능 미표시 (`default`)
`1(true)`:피벗 생성 정보 저장 기능 표시|


### Return Value
***none***

### Example
```javascript
//피봇 다이얼로그 오픈
sheet.showPivotDialog();

//객체 방식
sheet.showPivotDialog({ width: 700, height: 700 });

sheet.showPivotDialog({
      width: 700,
      height: 700,
      pivotParams: {
        format: '#,### 만원',
        callback: function (evt) {
          var dataRows = evt.sheet.getDataRows();

          for (var i = 0; i < dataRows.length; i++) {
            if (evt.sheet.getValue(dataRows[i], 'SUMsSalary') > 20000000) {
              evt.sheet.setAttribute(dataRows[i], 'SUMsSalary', 'TextColor', '#FF0000', 1);
              evt.sheet.setAttribute(dataRows[i], 'MainCol', 'Color', '#FF0000', 1);
              evt.sheet.setAttribute(dataRows[i], 'MainCol', 'TextColor', '#FFFFFF', 1);
            } else { evt.sheet.setAttribute(dataRows[i], 'SUMsSalary', 'TextColor', '#0000FF', 1); }
          }
        }
      },
      useStorage: true
    });
```

### Read More
- [makePivotTable method](/docs/funcs/core/make-pivot-table)
- [switchPivotSheet method](/docs/funcs/core/switch-pivot-sheet)
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)
- [StorageSession cfg](/docs/props/cfg/storage-session)

### Since

|product|version|desc|
|---|---|---|
|dialog|0.0.0|기능 추가|
|dialog|0.0.6|`showType` 기능 추가|
|dialog|0.0.7|`pivotParams` 기능 추가|
|dialog|0.0.8|기능 명 변경 (`createPivotDialog` -> `showPivotDialog`)|
|dialog|0.0.11|`useStorage` 기능 추가|
|dialog|1.0.29|`showPivotDialog` 의 `pivotType` 관련 기능 개선|
|dialog|1.0.39|`pivotParams`에 `hideTotal` 파라미터 기능 추가|
