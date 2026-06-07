---
KEY: sharedEvent
KIND: appendix
PATH: appx/shared-event
ALIAS: 공통, 이벤트, 처리, 방법, 시스템
ALIAS_EN: shared, event
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/shared-event
---
# 공통 이벤트(event) 처리 방법 ***(appendix)***
> 시스템 내에 모든 시트에서 동일하게 이벤트를 처리하기 위한 방법을 가이드 합니다.

> 시트의 이벤트 처리 방법은 javascript의 일반적인 이벤트 핸들링 방식(addEventListener)과 달라 하나의 이벤트에 하나의 업무(함수)만 연결 가능합니다.

> 이러한 연유로 조회나 저장과 같은 ajax 통신 이후에 공통적인 후 처리(오류 발생시 메세지 처리나 페이지 이동)와 개별 페이지 내에서 이벤트 수행이 같이 설정되어야 하는 경우 어려움이 발생합니다.





## 공통에서 설정한 이벤트를 개별페이지 설정시 덮어씌우는 경우

모든 시트에서 조회시 오류가 발생하였을 때에 대한 후처리 로직을 공통 개발자가 [CommonOptions](/docs/static/common-options) 에 정의했다고 가정했을 때,
```javascript
// ibsheet-common.js 내에 [CommonOptions](/docs/static/common-options)를 통해 이벤트 설정
IBSheet.CommonOptions = {
    "Events":{
        //모든 화면의 시트에서 조회 결과 Result 값이 -100인 경우, session 종료로 판단, 로그인 화면으로 이동 시킨다.
        "onBeforeDataLoad" : function(evtParam){
            if( evtParam.result == -100 ){
                alert("세션이 종료되었습니다.\n로그인 화면으로 이동합니다.");
                location.href = "/login.do";
            }else if( evtParam.result < 0 ){
                alert("오류가 발생하였습니다.\n"+evtParam.message);
            }
        }
    }
}
```
아래와 같이 개별 화면 개발자가 onBeforeDataLoad 이벤트를 사용하면 [CommonOptions](/docs/static/common-options) 에서 정의한 이벤트는 덮어씌어집니다.
```javascript
// 개별 화면에서 시트 이벤트 설정
sheetOption = {
    "Cfg":{},
    "Cols":[ ... ],
    "Events":{
        "onBeforeDataLoad" : function(evtParam){
            var data = evtParam.data;
            for( var i = 0; i < data.length; i++ ){
                //조회 된 데이터 중 ValidReq 컬럼의 값이 N인 행의 배경색을 "#FFAABB"로 표시
                if( data[i]["ValidReq"] == 'N' ){
                    data[i]["Color"] = "#FFAABB";
                }
            }
        }
    }
};
```

## 공통 이벤트를 처리하기 위한 방법
ibsheet-common.js 파일 내에 [IBSheet.onBeforeCreate()](/docs/static/on-before-create) 함수에서 각 화면에서 설정한 이벤트를 저장해 두었다가 공통 처리 로직 이후에 호출시켜 줍니다.

[IBSheet.onBeforeCreate()](/docs/static/on-before-create)는 [시트 객체 생성(IBSheet.create())](/docs/static/create)직전에 호출됩니다.

   
```javascript
// ibsheet 초기화 공통 설정 (obj를 통해 시트 생성시 create()에 넣은 parameter가 전달됨)
IBSheet.onBeforeCreate = function(obj){
    //Events 설정이 없는 경우 Events 객체 생성
    if( !obj.options["Events"] ){     obj.options["Events"] = {};    }

    
    obj.options.PageEvent = {};

    //각 페이지(화면)에서 정의한 이벤트를 따로 options.PageEvent라는 속성에 넣어 둔다.
    if( obj.options["Events"]["onBeforeDataLoad"] ){
        obj.options.PageEvent["onBeforeDataLoad"] = obj.options["Events"]["onBeforeDataLoad"];
    }
    if( obj.options["Events"]["onAfterSave"] ){
        obj.options.PageEvent["onAfterSave"] = obj.options["Events"]["onAfterSave"];
    }
    if( obj.options["Events"]["onEndEdit"] ){
        obj.options.PageEvent["onEndEdit"] = obj.options["Events"]["onEndEdit"];
    }

    //onBeforeDataLoad 이벤트에 대한 처리 (조회시 오류 공통 처리)
    obj.options["Events"]["onBeforeDataLoad"] = function(evtParam){
        //공통로직 처리!!!!!
        // result -1 ~ -9 까지는 이미 예약된 오류코드 
        if( evtParam.result == -100 ){
            alert("세션이 종료되었습니다.");
            location.href = "/login.do";
            return;
        }else if(evtParam.response.status == 404){
            location.href = "/noPageFound.do";
            return;
        }else if(evtParam.response.status == 500){
            location.href = "/serverError.do";
            return;
        }

        //개별 화면 이벤트에 대한 처리(위에 PageEvent에 담아둔 함수를 호출한다)
        if( evtParam.sheet.options.PageEvent && evtParam.sheet.options.PageEvent["onBeforeDataLoad"] ){
            //세션이 종료된게 아니라면 해당 페이지의 이벤트를 호출한다.
           return evtParam.sheet.options.PageEvent["onBeforeDataLoad"](evtParam);
        }
    }

    //onAfterSave 이벤트에 대한 처리 (저장시 오류 공통 처리)
    obj.options["Events"]["onAfterSave"] = function(evtParam){
        //공통로직 처리!!!!!
        // result -1 ~ -9 까지는 이미 예약된 오류코드 
        if( evtParam.result == -100 ){
            alert("세션이 종료되었습니다.");
            location.href = "/login.do";
            return;
        }else if(evtParam.result == -200){
            alert("저장 중 오류가 발생하였습니다.");
            return;
        }else if(evtParam.response.status == 404){
            location.href = "/noPageFound.do";
            return;
        }else if(evtParam.response.status == 500){
            location.href = "/serverError.do";
            return;
        }


        //개별 화면 이벤트에 대한 처리(위에 PageEvent에 담아둔 함수를 호출한다)
        if( evtParam.sheet.options.PageEvent && evtParam.sheet.options.PageEvent["onAfterSave"] ){
            //세션이 종료된게 아니라면 해당 페이지의 이벤트를 호출한다.
           return evtParam.sheet.options.PageEvent["onAfterSave"](evtParam);
        }
    }


    //onEndEdit 이벤트에 대한 처리 (편집시 커스텀 validation 공통 처리)
    obj.options["Events"]["onEndEdit"] = function(evtParam){
        // 각 컬럼 생성시 정의한 validation 관련 속성에 대한 검증을 공통으로 처리한다.
        var rtnValue = evtParam.val;

        /*
         1. maxvalue(최대입력허용값),minvalue(최소입력허용값) 속성에 대한 처리
         이런 속성은 제품에는 없지만 시트 생성시 Cols에 선언하면 getAttribute를 통해 얻을 수 있습니다.
         ex:
        OPT.Cols = [
            //                                이런 속성은 없지만 컬럼 설정시 넣어 둠
            {Header:"TOTCS", Type:"Float", Name: "roe", maxvalue:100, minvalue:0}
        ];
        */
        // 모든 화면의 시트에서 각 컬럼에 maxvalue,minvalue 속성이 있는 경우 검사
        if(evtParam.save === 1){// 사용자 편집에 의해 이벤트 발생시에만 동작
            var min = evtParam.sheet.getAttribute(evtParam.row, evtParam.col, "minvalue");
            if(typeof min != "undefined" && min > evtParam.val) {
                alert(`해당 컬럼에 최소 입력 값은 ${min}입니다`);
                return true; // true 리턴시 편집 종료가 안됨
            }
            var max = evtParam.sheet.getAttribute(evtParam.row, evtParam.col, "maxvalue");
            if(typeof max != "undefined" && max < evtParam.val) {
                alert(`해당 컬럼에 최대 입력 값은 ${max}입니다`);
                return true; // true 리턴시 편집 종료가 안됨
            }
        }

         /*
         2. replaceInput(입력값에 대한 치환) 속성에 대한 처리
         이런 속성은 제품에는 없지만 시트 생성시 Cols에 선언하면 getAttribute를 통해 얻을 수 있습니다.
         ex:
         function toUpper(str) {
            return str.toUpperCase();
         }
        OPT.Cols = [
            //                                이런 속성은 없지만 컬럼 설정시 넣어 둠
            {Header:"TOTCS", Type:"Float", Name: "roe", replaceInput:toUpper}
        ];
        */
        // 모든 화면의 시트에서 각 컬럼에 replaceInput 속성이 있는 경우 검사
        if(evtParam.save === 1){// 사용자 편집에 의해 이벤트 발생시에만 동작
            var recInp = evtParam.sheet.getAttribute(evtParam.row, evtParam.col, "replaceInput");
            if(typeof recInp === "function") {
                rtnValue = recInp(rtnValue);
                evtParam.val = rtnValue;
            }
        }



        //개별 화면 이벤트에 대한 처리(위에 PageEvent에 담아둔 함수를 호출한다)
        if( evtParam.sheet.options.PageEvent && evtParam.sheet.options.PageEvent["onEndEdit"] ){
            //세션이 종료된게 아니라면 해당 페이지의 이벤트를 호출한다.
           return evtParam.sheet.options.PageEvent["onEndEdit"](evtParam);
        }
        return rtnValue;
    }


    return obj; //반드시 리턴해 줘야 함.
}
```
위와 같이 공통 로직의 처리 이후, 개별 페이지 이벤트에 대한 처리를 할 지, 혹은 순서를 반대로 할 지 자유롭게 설정 가능합니다.

> **<mark>주의</mark> :** 

> - **위와 같은 방식을 사용하더라도 시트 생성 후, [bind](/docs/events/event) 함수를 통해 이벤트를 설정하면 공통적으로 설정한 이벤트 내용은 덮어씌어집니다.**

> **따라서 가급적 [bind](/docs/events/event) 함수를 통한 이벤트 설정은 사용하지 마실 것을 권합니다.**

> - **이벤트 별로 return이 있는 이벤트(ex:onClick)는 공통로직 구성시에 반드시 return 해줘야 정상 동작합니다.**

### Read More
- [event 사용법 기초](/docs/events/event)
- [CommonOptions static](/docs/static/common-options)
- [onBeforeCreate static](/docs/static/before-create)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
