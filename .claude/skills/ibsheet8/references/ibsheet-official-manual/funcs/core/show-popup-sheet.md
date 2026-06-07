---
KEY: showPopupSheet
KIND: method
PATH: funcs/core/show-popup-sheet
ALIAS: sheet.showPopupSheet, showPopupSheet(), 특정, 위치에, 시트, 객체를, 다이얼로그
ALIAS_EN: show, popup, sheet, grid, dialog, modal
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-popup-sheet
---
# showPopupSheet ***(method)***
> 특정 셀 위치에 시트 객체를 다이얼로그 형태로 띄웁니다.


###
![showPopupSheet](/assets/imgs/showPopupSheet.png "마우스 커서가 있는 위치에 시트객체를 띄움")
<!-- IMAGE: 스크린샷/예시 이미지 - showPopupSheet -->


### Syntax
```javascript
void showPopupSheet( row, col, data, width, height, dialog, pos);
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|선택|팝업을 띄울 [데이터 로우 객체](/docs/appx/row-object) (`row, col` 중에 한 인자라도 없으면 시트 가운데에 생성)|
|col |`string`|선택|팝업을 띄울 열이름 (`row, col` 중에 한 인자라도 없으면 시트 가운데에 생성)|
|data|`object`|필수|팝업으로 보여질 시트객체 (객체에 대한 초기화 및 데이터 설정)|
|width|`number`|선택|팝업의 너비|
|height|`number`|선택|팝업의 높이|
|dialog|`object`|선택|부모 팝업 객체|
|pos|`object`|선택|보여질 메뉴의 좌우/상하 위치 조정 ex) `{x:10, y:10}`|


### Return Value
***object***  생성된 시트 객체

### Example
```javascript
function popup(){
    // popup으로 나타날 시트에 대한 정의
    // PSheet 는 showPopupSheet 를 호출하는 시트객체 입니다. 해당 예제에서는 이를 PSheet 라는 변수 이름으로 정의했을 뿐 입니다.
    var sheetInfo = {};
    sheetInfo.Cols = [
        {Header: "사원번호", Type:"Text", MinWidth:80, Name:"EMPNO",  Align:"Center", CanEdit:0},
        {Header: "사원명", Type:"Text", MinWidth:80, Name:"EMPNM", Align:"Center", CanEdit:0},
        {Header: "부서명", Type:"Text", MinWidth:80, Name:"DEPT", Align:"Center", CanEdit:0},
        {Header: "직급", Type:"Text", Width:80, Name:"POSITION", Align:"Center", CanEdit:0}
    ];
    sheetInfo.Events = {
        //팝업시트에서 더블클릭시 행동
        "onDblClick":function(evt){
            if(PSheet.getFocusedRow()){
                PSheet.setValue( PSheet.getFocusedRow() , "empNm" , evt.sheet.getValue(evt.row,"EMPNM") , 1);
                PSheet.closeDialog();
            }
        }
    };
    sheetInfo.Data = [
        {EMPNO:"01514",EMPNM:"한득열",DEPT:"총무",POSITION:"부장"},
        {EMPNO:"04140",EMPNM:"김하임",DEPT:"기획",POSITION:"부장"},
        {EMPNO:"01794",EMPNM:"이수용",DEPT:"기획",POSITION:"대리"},
        {EMPNO:"03414",EMPNM:"전수학",DEPT:"예산",POSITION:"과장"}
    ];
    var popSheet = PSheet.showPopupSheet( {row:PSheet.getRowById("AR2"),col:"empNm",data:sheetInfo,width:300,height:400});
}
```

### Read More
- [closeDialog method](./close-dialog)

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
