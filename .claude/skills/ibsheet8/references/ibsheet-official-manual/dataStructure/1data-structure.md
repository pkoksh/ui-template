---
KEY: 1dataStructure
KIND: data-structure
PATH: dataStructure/1data-structure
ALIAS: 데이터, 규격
ALIAS_EN: 1data, structure, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/dataStructure/1data-structure
---
# 데이터 규격 ***(data structure)***
조회나 저장 작업을 위해 서버 호출시 서버에서 리턴되어야 할 "응답 데이터"의 형식을 정의합니다.


## 시트 생성시 데이터 형식
```javascript
//IBSheet.create()에 data 속성을 통해 생성시 데이터 구조
IBSheet.create({
    id:"sheet", // 생성할 시트의 id
    el:"sheetDiv", // 시트를 생성할 Dom 객체 및 id
    options: options, // 생성될 시트의 속성
    // 생성될 시트의 정적데이터
    data: [
            {"sa_name":"홍길동","sa_no":"940154","sa_dept":"A021"},
            {"sa_name":"김지수","sa_no":"950757","sa_dept":"B022"}
        ]
});
```
## doSearch나 loadSearchData Method 데이터 규격
```js
// Data 속성안에 배열형태로 데이터 구성
{"Data":
    [
        {"sa_name":"홍길동","sa_no":"940154","sa_dept":"A021"},
        {"sa_name":"김지수","sa_no":"950757","sa_dept":"B022"}
    ]
}
```

## doSearchPaging Method 데이터 규격
```js
// Data 속성안에 배열형태로 데이터 구성 (cfg)PageLength 에서 설정한 개수만큼
{"Data":
    [
        {"sa_name":"홍길동","sa_no":"940154","sa_dept":"A021"},
        {"sa_name":"김지수","sa_no":"950757","sa_dept":"B022"}
    ],
 "Total":25410      //<-- DB상의 전체건수 전체 건수
}
```

## 데이터와 결과 규격
```js
// Data 속성안에 배열형태로 데이터 구성
{"Data":
    [
        {"sa_name":"홍길동","sa_no":"940154","sa_dept":"A021"},
        {"sa_name":"김지수","sa_no":"950757","sa_dept":"B022"}
    ],
  "IO": {"Result": 0, Message: "조회 성공"}
}
```

## 조회 데이터 내에 Row property,Cell property 적용(중요)
```js
// 조회 데이터 안에 Row property에 해당하는 내용을 데이터와 함께 적용
{"Data":
    [
        //                                       행의 색상을 붉은색으로 표시
        {"sa_name":"홍길동","sa_no":"940154",...      , Color:"#FF8888"},
        //                                             행 편집 불가
        {"sa_name":"김지수","sa_no":"950757",...      , CanEdit:0}
    ]
}
```
```js
// 조회 데이터 안에 "컬럼명+Cell Property" 형식으로 설정시 Cell 기능 부여
{"Data":
    [
        //                                     sn_id cell 글자색 설정
        {"sn_id":"209321","lot":"k0923123",  sn_idTextColor:"#FF0000"},
        //                                     lot cell 편집 불가
        {"sn_id":"209327","lot":"r2019283",   lotCanEdit:0},
        //  pos 컬럼(Enum타입)에 item을 해당 셀만 다르게 설정
        {"pos":"A02", posEnum: "|성남시|부천시|광명시|화성시", posEnumKeys: "|A00|A01|A02|A03"}
    ]
}
```

## 조회 데이터  내에 JSON Event 적용
```js
// 조회 데이터에 JSON 이벤트를 포함할수 있습니다.
{"Data":
    [
        //           sa_name컬럼의 값 수정시 sawonPop() 함수 호출
        {"sa_name":"홍길동",sa_nameOnChange:"sawonPop"},
    ],
}
```
조회 작업시 서버에서 리턴 된 데이터는 [onReceiveData](/docs/events/on-receive-data), [onBeforeDataLoad](/docs/events/on-before-data-load), [onDataLoad](/docs/events/on-data-load) 이벤트를 통해 확인하실 수 있습니다.

## Tree 데이터 규격

### 일반적인 Tree 데이터 형태
```js
// Items 속성안에 자식 행을 추가하는 형태로 구성
{"Data":
    [
        //1 Depth
        {sProduct:"내부 시스템 개발 사업",sCustomer:"B사",sDate:"20180116", sCustomerRowSpan:2,
            //2 Depth
            Items:[
                {sProduct:"글로벌 통합 인사시스템",sKind:"프로젝트", sCount:"1",sPrice:"192"},
                {sProduct:"LEGACY SW 공급",sKind:"소프트웨어", sCount:"1",sPrice:"420"}
            ]
        },
        //1 Depth
        {sProduct:"복무급여고도화시스템",sCustomer:"D사",sDate:"20171031",
            //2 Depth
            Items:[
                {sProduct:"병원 전자구매 및 조달시스템",sKind:"납품",sCount:"1",sPrice:"303",sDiscount:"10" }
            ]
        },
        //1 Depth
        {sProduct:"2017~2018 솔루션 납품 및 판매",sCustomer:"E사",sDate:"20170520",
            //2 Depth
            Items:[
                {sProduct:"병원 개발/CDP 구축",sKind:"프로젝트",sCount:"1",sPrice:"29"},
                {sProduct:"성능개량사업 군수지원교보재",sKind:"프로젝트",sCount:"1",sPrice:"15.5",sDiscount:"5"},
                {sProduct:"SHE시스템 구축",sKind:"프로젝트",sCount:"1",sPrice:"79"},
                {sProduct:"Cost Quotation System",sKind:"프로젝트",sCount:"1",sPrice:"3"},
                {sProduct:"전사업무지원시스템",sKind:"프로젝트",sCount:"1",sPrice:"59.5"},
                {sProduct:"통합판매관리시스템",sKind:"프로젝트",sCount:"1",sPrice:"39"},
                {sProduct:"E-HR시스템",sKind:"유지보수",
                    //3 Depth
                    Items:[
                        {sProduct:"물산 E-HR시스템",sKind:"기타",sCount:"1",sPrice:"4"},
                        {sProduct:"제조 E-HR시스템",sKind:"기타",sCount:"1",sPrice:"4" }
                    ]
                },
                {sProduct:"건설 외주실적 단가시스템",sKind:"납품",sCount:"1",sPrice:"95"},
                {sProduct:"인재육성시스템",sKind:"프로젝트",sCount:"1",sPrice:"7"},
                {sProduct:"웹사이트 액티브X제거 관련 SW 구매",sKind:"프로젝트", sCount:"1",sPrice:"22.5" }
        ]}
    ]
}
```

### 간단한 Tree 데이터 형태

```js
var treeData = {
    "Data":[
        {Level:0 ,sProduct:"병원 개발/CDP 구축",sKind:"프로젝트",sCount:"1",sPrice:"29"},
        {Level:1 ,sProduct:"성능개량사업 군수지원교보재",sKind:"프로젝트",sCount:"2",sPrice:"15.5",sDiscount:"5"},
        {Level:3 ,sProduct:"SHE시스템 구축",sKind:"프로젝트",sCount:"1",sPrice:"79"},
        {Level:2 ,sProduct:"Cost Quotation System",sKind:"프로젝트",sCount:"1",sPrice:"3"},
        {Level:3 ,sProduct:"전사업무지원시스템",sKind:"프로젝트",sCount:"1",sPrice:"59.5"},
        {Level:3 ,sProduct:"통합판매관리시스템",sKind:"프로젝트",sCount:"1",sPrice:"39"},
    ]
}
```
위와같이 Level을 통해 각 행의 Depth를 가져온 후 데이터 로드시점에서 ibsheet-common.js에서 제공하는 convert함수를 통해 변환하여 로드한다. (Level의 대소문자 주의)
```js
var convertData = IBSheet.v7.convertTreeData(treeData);
sheet.loadSearchData(convertData));
```


<hr>


## getChangedData 메소드로 수정된 데이터만 추출시
```javascript
// 서버에 request로 보내지는 Data 객체는 다음과 같은 사항을 포함
// 1) 변경 대상이 되는 셀의 행 id
// 2) 셀 변경 사항의 종류(추가/삭제/변경)
// 3) 변경 대상이 되는 셀의 열이름을 프로퍼티로 하고 해당하는 프로퍼티의 값으로 변경된 데이터 값
Data: {"IO": { }, "Changes": [{"id": "AR1", "Changed": 1, "열이름": "변경된 값"}]}
```

## 저장시 데이터 규격

서버사이드에서 저장작업 후 클라이언트 측으로 전달되어야 하는 json 구조는 아래와 같습니다.


```javascript
// 서버에서 시트로 보낼 응답 규격
성공시 : {"IO": {"Result": 0 , Message:"저장 되었습니다."}} // Result에 0이상의 양수 설정
실패시 : {"IO": {"Result": -100, Message:"오류내용..." }} //  Result 값을 -1 ~ 7을 제외한 음수로 설정.
```
저장 결과가 성공인 경우 `입력/수정` 상태의 행은 `조회` 상태로 돌아가고 `삭제` 상태의 행은 시트에서 `제거` 됩니다. 

저장 결과가 실패인 경우 기존 상태를 유지하며 [doSave()](/docs/funcs/core/do-save)함수는 종료됩니다.

리턴되는 값에 `IO`나 `Result` 와 같은 속성이 없는 경우 다음과 같이 처리 됩니다.
|리턴되는 결과|서버상태|처리 형태|
|-|-|-|
|`IO` 안에 `Result`가 없는 경우|200|성공으로 판단. [onAfterSave](/docs/events/on-after-save)이벤트에 result는 0리턴|
|결과가 아무것도 없는 경우|200|실패로 판단. [onAfterSave](/docs/events/on-after-save)이벤트에 result는 -5리턴|
|서버에서 오류가 발생한 경우|400이상의 값|실패로 판단. [onAfterSave](/docs/events/on-after-save)이벤트에 result는 -3 리턴|

리턴되는 값에 `Message`가 있을 경우 `Message` 에 설정된 내용을 메세지로 표시하고, 없는 경우에는 `Result` 값에 따라 아래의 표의 기준에 해당하는 에러 메세지를 언어팩에서 가져와 표시합니다.

|Result Code|Message|언어팩 변수명|
|----------|----|---|
|-1|Url의 값이 없습니다.|"ResultErrEmptyURL"|
|-2|Url의 값이 잘못됐습니다.|"ResultErrBadURL"|
|-3|Url의 주소를 찾을 수 없습니다.|"ResultErrNotFound"|
|-4|문서 형식이 잘못됐습니다.|"ResultErrBadDocumentFormat"|
|-5|Url에서 응답이 없습니다.|"ResultErrEmptyResponse"|
|-6|연결시간이 초과됐습니다.|"ResultErrRequestTimeout"|
|-7|데이터 형식이 잘못됐습니다.|"ResultErrBadDataFormat"|
|-8 ~|알 수 없는 오류|"ResultErrUnknown"|

## Type:"File" 설정 후 저장시 데이터 규격(자세한 설정은 [File Type 업로드 (appendix)](/docs/appx/file-type-upload)참고)
```javascript
// 서버에서 시트로 보낼 응답 규격
// 성공 시
{"IO": {
    "Result": 0 ,
    "Message": "저장 되었습니다.",
    "data":[ 
            //저장처리 이후 파일 다운로드 하려면 필요
            {"file":"file.xlsx", "filePath":"/customer-sample/", "id":"AR7"},
            {"file":"file1.xlsx", "filePath":"/customer-sample/", "id":"AR4"},
           ]
    }
}
// 실패 시 Result 값을 음수로 설정.
{"IO": {"Result": -9, Meassage:"오류내용..." }}
```

```jsp
// 서버 예제
<%@ page language="java" contentType="application/json; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ page import="java.util.*, org.json.*"%>
<%
    request.setCharacterEncoding("utf-8");
    response.setContentType("application/json");
    response.setStatus(200);

    JSONObject result = new JSONObject(); // 서버에서 시트로 보낼 JSON 형식의 통신 관련 객체
    JSONObject IO = new JSONObject(); // 결과를 담고 있는 객체
    try {
        if(조건) {
            IO.put("Result", 0); // 결과를 담고 있는 객체에 Result 프로퍼티로 성공/실패 여부를 보냅니다. 0으로 설정 시 성공. -2 ~ -9로 설정 시 실패. 실패하는 경우 시트에서 오류 메시지를 띄웁니다.
            IO.put("Message", "성공"); // 서버에서 시트로 전달할 메시지(onAfterSave 이벤트의 message 인자로 받을 수 있습니다)
        } else {
            IO.put("Result", -200);
            IO.put("Message", "실패");
        }

        result.put("IO", IO);
    } catch(Exception ex) {
        result.put("Exception", ex);
    }
    out.print(result);
%>
```

저장 작업시 서버에서 리턴한 결과는 [onAfterSave](/docs/events/on-after-save)이벤트를 통해 확인하실 수 있습니다.

### Read More
- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [getChangedData method](/docs/funcs/core/get-changed-data)
- [onAfterSave event](/docs/events/on-after-save)
- [onReceiveData](/docs/events/on-receive-data)
- [onBeforeDataLoad](/docs/events/on-before-data-load)
- [onDataLoad](/docs/events/on-data-load)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
