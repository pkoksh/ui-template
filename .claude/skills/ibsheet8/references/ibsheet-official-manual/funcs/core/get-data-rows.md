---
KEY: getDataRows
KIND: method
PATH: funcs/core/get-data-rows
ALIAS: sheet.getDataRows, getDataRows(), 시트가, 가지고, 있는, 전체, 데이터
ALIAS_EN: get, data, rows, all, total
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-data-rows
---
# getDataRows ***(method)***

> 시트가 가지고 있는 전체 데이터 행을 리턴합니다. 


> **<mark>주의</mark> :** 

**- `Type:"Text"` 컬럼에 숫자 데이터를 조회 할 경우 리턴 되는 데이터형은 숫자형입니다.**

   **문자 형태로 리턴 되길 원하는 경우 (Col)[OrigSearchData](/docs/props/col/orig-search-data)를 설정 하세요.**

**- `Type:"Date", Format, DataFormat, EditFormat` 컬럼에에서 리턴 되는 데이터형은 숫자형(timestamp)입니다.**

   **20010101과 같은 형태로 리턴 받길 원할경우 [getValue](./get-value) 또는 [dateToString](/docs/static/date-to-string) 함수를 통하여 데이터를 변환 하세요.**

**- row 객체에 직접 접근 하여 값 변경시 상태에(Changed) 영향을 미치지 않습니다.**


<!--! [비공개] SearchMode:5 기능 추가로 인한 비공개 처리
> 일반조회의 경우 조회한 모든 데이터 행을 리턴하며, 서버 스크롤 조회([SearchMode](/docs/props/cfg/search-mode):3)의 경우 해당 페이지까지 조회해온 데이터 행을 리턴 합니다. 

> 만약 서버페이징([SearchMode](/docs/props/cfg/search-mode):4)의 경우 조회한 페이지 데이터만 리턴 합니다.  
1,3,5 페이지를 조회 했을 경우 1,3,5 페이지의 데이터를 리턴 합니다. 

[AlwaysSearchPage](/docs/props/cfg/always-search-page):1 로 설정한 경우 currentPage 인자를 1로 설정하면 현재 보여지고 있는 페이지의 데이터만 리턴 합니다.

!-->

### Syntax
```javascript
array getDataRows( noSubTotal);
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|noSubTotal |`boolean`|선택|소계/누계 행을 제외할지 여부
`0(false)`:소계/누계 행 포함 (`default`)
`1(true)`:소계/누계 행 제외|
<!--![비공개] SearchMode:5 기능 추가로 인한 비공개 처리
|currentPage |`boolean`|선택|현재 보여지는 페이지 데이터 반환 여부
`0(false)`:전체 페이지 데이터 반환 (`default`)
`1(true)`:현재 보여지는 페이지 데이터 반환|
!-->

### Return Value
***array[row object]*** : [데이터 로우 객체](/docs/appx/row-object)를 담고있는 배열

### Example
```javascript
// 전체 데이터행을 가져온다.
var Rows = sheet.getDataRows();

for(var i=0; i<Rows.length; i++){
    // 마감열(saveName:close_data)에 값을 일괄변경하는 경우 , render속성을 꺼야 속도가 빠르다.
    sheet.setValue({row:Rows[i], col:"close_data", val:"변경", render:0}); 
    //Rows[i].close_data = "변경"; row 객체에 접근하여 값 변경. 상태에 영향을 미치지 않는다.
}
//변경사항 적용한다.
sheet.rerender(1);
```

### Read More
- [getTotalRowCount method](./get-total-row-count)
- [OrigSearchData col](/docs/props/col/orig-search-data)
- [getShownRows method](./get-shown-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.4|`noSubTotal` 인자 추가로 소계/누계 행을 제외한 데이터 행만 가져오는 기능 추가|
<!--![비공개] SearchMode:5 기능 추가로 인한 비공개 처리
|core|8.1.0.23|`currentPage` 인자 추가로 현재 보여지는 페이지의 데이터 행만 가져오는 기능 추가|
!-->
