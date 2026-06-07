---
KEY: sheetHeight
KIND: appendix
PATH: appx/sheet-height
ALIAS: 시트객체, 높이, 설정, 시트객체의, 높이를
ALIAS_EN: sheet, height, config, setting, option
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/sheet-height
---
# 시트객체 높이 설정  ***(appendix)***
> 시트객체의 높이를 설정하는 방법을 알아봅니다.

## 1. 시트의 높이
시트의 높이는 시트 생성시 **el** 객체에 부여한 높이를 따릅니다.

가령 el객체가 다음과 같이 500px로 설정되어 있다면 시트의 높이는 500px가 됩니다.
```html
<div id="sheetDIV" style="width:100%;height:500px"></div>

<script>
//시트 객체 생성
IBSheet.create({
    id:"sheet1",
    el:"sheetDIV",
    options:{...}
});
</script>
```

- 여기서 만약 el 객체에 높이가 없다면 자동으로 800px 높이를 갖게 됩니다.
- 시트객체의 높이가 정적인 행(헤더,합계 행)조차 표현하지 못할 정도로 작은 경우에는 시트가 생성되지 않습니다.

## 2. 시트의 높이 수정
시트의 너비나 높이를 창에 크기에 따라서 늘어나거나 줄어들게 끔 하고자 하신다면 el객체의 너비/높이는 100%로 설정하시고, 시트의 부모 DIV객체에 너비/높이를 부여하여 조정하시는 것이 좋습니다.

```html
<!-- 시트 부모 DIV -->
<div class="sheet_wrapper" style="width:100%;min-height:200px;height:calc(100% - 130px)">
    <!-- 시트 객체 -->
    <div id="sheetDIV" style="width:100%;height:100%"></div>
</div>
```

el의 너비나 높이를 **percent**로 부여할 때는 상위(부모) 객체의 너비나 높이가 <mark>명확</mark>해야 합니다.

가령 el객체의 높이가 100%인데, 부모 DIV의 높이가 정의되지 않았을 시에는 시트가 생성되지 않습니다.

고정된 사이즈로 시트의 높이를 변경하고자 하실때도, 시트 객체보다는 부모객체를 조정해 주세요.

```js
//.sheet_wrapper 객체의 높이를 680px로 변경
sheet.MainTag.parentNode.style.height = "680px";
```


## 3. 조회된 데이터에 따른 높이 자동 수정

조회된 데이터의 양에 따라 시트의 높이를 자동으로 조정하시려면 (Cfg)[NoVScroll](/docs/props/cfg/no-v-scroll):1을 사용하시면 됩니다.

NoVScroll은 SearchMode:0에서는 동작하지 않습니다.

## 4. 시트에 최대 높이 설정

조회된 데이터가 적을때는 높이를 작게하여 보여주다가, 조회된 데이터가 일정 건수보다 많아졌을때 시트의 높이를 고정하고 세로스크롤이 보여지게 끔 하기 위해서는 다음과 같은 로직을 조회 종료 이벤트([onSearchFinish](/docs/events/on-search-finish))에서 호출하여 주세요.

```js
var options = {
    Cols:[],
    Events:{
        onSearchFinish:function(evtParam){
            //조회된 데이터가 10개 행 이상일때는 세로 스크롤을 사용해 보여준다.
            resizeSheet( evtParam.sheet, evtParam.getDataRows().length, 10);
        }
    }

};

/*
공통함수
특정 건수 이상 조회시 스크롤을 생성 (시트객체 , 조회된 데이터 행수, 보여질 기준행 수 )
*/
function resizeSheet(sheet,dataRowCnt, baseRowCnt){
    var p = sheet.MainTag.parentNode;  //시트 부모 객체
    var h = sheet.MainTag.clientHeight; //시트객체 높치

    //시트에서 데이터 영역을 제외한 나머지 영역에 대한 높이
    var hOtherRows = h - sheet.MainTable.tBodies[0].querySelector('.IBBodyMid').clientHeight - sheet.MainTable.tBodies[0].querySelector(".HeightSpace").parentNode.offsetHeight;

    //기준행과 조회된 데이터행 수에 따라 부모의 크기를 바꾼다.
    if(dataRowCnt < baseRowCnt){
        p.style.height = ((dataRowCnt * sheet.RowHeight) + hOtherRows)+"px";
    }else{
        p.style.height = ((baseRowCnt * sheet.RowHeight) + hOtherRows)+"px";
    }
}
```

### Read More
- [NoVScroll cfg](/docs/props/cfg/no-v-scroll)
- [onSearchFinish event](/docs/events/on-search-finish) 


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|추가|
