---
KEY: event
KIND: event
PATH: events/event
ALIAS: 사용법, 기초, 시트의, 이벤트는, 아래와
ALIAS_EN: event
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/event
---
# event 사용법 기초
> 시트의 이벤트는 아래와 같이 두 가지 방법으로 설정할 수 있습니다.

## 1. 객체 생성시점에서 이벤트 설정하기
시트를 초기화하는 `options` 속성 설정 시 `Events` 속성을 통해 다음과 같이 설정합니다.
```javascript
var OPTS = {
    Cfg:{ ... },
    Cols:[ ... ],
    "Events":{
        onAfterChange:function(evtParam){
            ... 이벤트 발생 시 로직 구현 ...
        }
    }
};
IBSheet.create(
    id:"sheet",
    el:"sheet_div",
    options:OPTS
)
```
## 2. 객체 생성 이후 이벤트 설정하기
객체가 생성되고 난 이후에는 `bind` 함수를 통해 이벤트를 설정하실 수 있습니다.
```javascript
    // onAfterChange 이벤트
    sheet.bind("onAfterChange", function(evtParam) {

    });
```
이벤트 발생시 `evtParam`에는 각 이벤트 별로 이벤트가 발생한 `시트 객체나, 행 객체, 열이름` 등이 들어 있습니다.

> **<mark>주의</mark> : 객체 생성 이후에 이벤트를 추가하는 것은 [onBeforeCreate](/docs/static/on-before-create)에서 공통으로 처리한 로직을 무시할 수 있으므로 권장하지 않습니다.**


### Example
```javascript
options.Events = {
    onAfterChange :function(evtParam){
        if(evtParam.row["ConFirmYn"]=="Y"){
            alert("금월 결산이 종료되었습니다.</br>마감 정보를 확인하시고 수정해 주세요.");
        }else if(evtParam.value > evtParam.row["MaxBud"]){
            alert("입력값이 최대 예산치보다 높습니다.");
        }
    },
    onClick:function(evtParam){
        if(evtParam.col == "myBtn1"){
            if(formValidWork()){
                document.frm.submit();
            }
        }
    }
}


```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
