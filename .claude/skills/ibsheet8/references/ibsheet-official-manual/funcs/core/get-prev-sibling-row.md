---
KEY: getPrevSiblingRow
KIND: method
PATH: funcs/core/get-prev-sibling-row
ALIAS: sheet.getPrevSiblingRow, getPrevSiblingRow(), 트리나, 그룹사용시, 같은, 부모를, 갖는
ALIAS_EN: get, prev, sibling, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-prev-sibling-row
---
# getPrevSiblingRow ***(method)***
> 트리나 그룹사용시 같은 부모를 갖는 동일 레벨의 위에 위치한 행을 리턴합니다.

> 같은 부모 내에서 더 이상 동일레벨이 없는 경우 `null`이 리턴됩니다.


### Syntax
```javascript
object getPrevSiblingRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|


### Return Value
***row object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
//현재 선택된 행의 자식 노드 중에 chk열에 값이 1인 행들을 찾아 배경색을 변경한다.
function work(){
	var row = sheet.getFocusedRow();//현재 선택된 행
	var crow = sheet.getLastRow(row); //마지막 자식을 얻음
	if(crow){
	    var chkRows = [];
	    do{
	        if(crow["chk"] == 1){
                //배경색을 회색으로 변경
	            sheet.setAttribute( {row:crow , attribute:"Color" , val:"#AAAAAA",render:0} );
	        }
	        crow = sheet.getPrevSiblingRow(crow);
	    }while(crow);
        //수정 후 한꺼번에 렌더링
        sheet.renderBody();
	}
}
```

### Read More
- [getNextSiblingRow method](./get-next-sibling-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
