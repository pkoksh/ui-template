---
KEY: showDialog
KIND: method
PATH: funcs/core/show-dialog
ALIAS: sheet.showDialog, showDialog(), 시트의, 특정, 위에, 팝업, 형태의
ALIAS_EN: show, dialog
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-dialog
---
# showDialog ***(method)***

> 시트의 특정 셀 위에 layer팝업 형태의 다이어로그를 생성합니다.
> 다이얼로그에 자세한 설정방법은 [appendix Dialog참고](/docs/appx/dialog)를 참고해 주세요.

### Syntax
```javascript
object showDialog( row, col, dialog, pos, always );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|다이얼로그를 띄울 위치의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|필수|다이얼로그를 띄울 위치의 열이름|
|dialog|`object`|필수|`dialog`에 대한 초기화 설정([appendix Dialog참고](/docs/appx/dialog))|
|pos|`object`|선택|다이얼로그가 표시될 위치 offset([appendix Position참고](/docs/appx/position))|
|always|`boolean`|선택|이미 해당 셀에 오픈된 다이얼로그가 있는 경우의 행동
`0(false)`:다이얼로그 열기/닫기에 대한 Toogle (`default`)
`1(true)`:닫지 않음|

### Return Value
***dialog object*** 다이얼로그 객체

### Example
```javascript
//첫번째 행에 간단한 형태의 Dialog를 오픈한다.
var opt = {
    row : sheet.getFirstVisibleRow(),
    col : "EMP_NM",
    dialog : {
        "Modal":1,
        "Body":"<div>퇴직금 정산이 완료되었습니다. 다음 절차로 진행하시겠습니까?</div>"
            +"<div><button type='button' onclick='func_process(1)'>계속</button>"
            +"<button type='button' onclick='func_process(0)'>중단</button></div>"
    }
};
sheet.showDialog(opt);

function func_process(b){
    if(b){
        //계속
        document.forms[0].submit();
    }else{
        //중단
        sheet.Dialog.close();
    }
}
```

### Read More
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
