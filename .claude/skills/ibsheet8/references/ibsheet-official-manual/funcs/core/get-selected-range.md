---
KEY: getSelectedRange
KIND: method
PATH: funcs/core/get-selected-range
ALIAS: sheet.getSelectedRange, getSelectedRange(), 현재, 선택된, 영역을, 이중, 배열로
ALIAS_EN: get, selected, range
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-selected-range
---
# getSelectedRanges ***(method)***
> 현재 선택된 영역을 이중 배열로 리턴합니다.

> 가령 다음과 같이 선택 후 `default` 형태로 값을 얻을시 리턴되는 값은 다음과 같습니다.


###
![선택영역얻기](/assets/imgs/getSelectedRanges.png "선택영역얻기")
<!-- IMAGE: 스크린샷/예시 이미지 - 선택영역얻기 -->


```
[
    [row1객체, "CONTRACTNO", row2객체, "CARNO", 4, 3, 6, 3]
    ,[row1객체, "RENTFEE", row2객체, "RENTDATE", 5, 7, 4, 2]
    ,[row1객체, "CARNO", row2객체, "RENTFEE", 11, 5, 4, 3]
]
```
### Syntax
```javascript
object getSelectedRanges( rowtype, coltype );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|rowtype|`number`|선택|`0`:구분없이 선택영역 모두 추출  (`default`)
`1`:트리사용시 접힌 자식은 빼고 추출
`2`:페이지 단위로 구분해서 추출|
|coltype|`number`|선택|`0`:구분없이 모두 추출 (`default`)
`1`:영역(Left/Center/Right)별로 구분해서 추출|

### Return Value
***object (array[array])*** : 선택된 영역들에 대한 이중 배열

[시작[데이터 로우 객체](/docs/appx/row-object) , 시작열이름 , 종료[데이터 로우 객체](/docs/appx/row-object) , 종료열이름 , 시작행인덱스 , 시작열인덱스 , 선택행의개수 , 선택열의 개수]


### Example
```javascript
//선택된 셀의 개수를 알아봄
var selectRange = sheet.getSelectedRanges();
var selectCellCnt = 0;
for(var i=0;i<selectRange.length;i++){
    selectCellCnt += parseInt(selectRange[i][6]) * parseInt(selectRange[i][7]);
}
alert("총 "+selectCellCnt+"개 셀을 선택하셨습니다.");
```

### Read More
- [selectRange method](./select-range)
- [getSelectedRows method](./get-selected-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
