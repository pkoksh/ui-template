---
KEY: create
KIND: static-member
PATH: static/create
ALIAS: 지정한, 위치에, 시트객체를, 생성합니다
ALIAS_EN: create
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/static/create
---
# create ***(static)***

> 지정한 위치에 시트객체를 생성합니다.

> 시트객체가 생성되면 `IBSheet`객체에 배열형식으로 추가(push)됩니다.



- 'el' <mark>객체의 크기</mark>에 따라 시트의 너비/높이가 결정됩니다.
- 'el'객체의 너비/높이가 정의되지 않은 경우에는 <mark>너비는 100%, 높이는 800px</mark>로 설정됩니다.
- sync속성을 1로 사용 시 onRenderFirstFinish 이벤트에서는 window[id] 형식으로 시트에 접근할 수없습니다.(evtParam.sheet로만 접근 가능)

### Syntax
```javascript
object IBSheet.create(id, el, options, data, sync);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|id|`string`|필수|시트객체의 `id` (여기서 지정한 `id`는 `window` 객체에 `프로퍼티`로 생성됩니다.[전역변수]|
|el|`string`|필수|시트객체가 생성될 div객체의 `id` (해당객체 안에 시트객체가 생성됨)|
|[options](/docs/appx/init-structure)|`object`|필수|초기화 정보를 갖고있는 `json 객체`|
|data|`array[object]`|선택|생성과 동시에 로드 될 `데이터 배열`|
|sync|`boolean`|선택|시트를 동기로 생성합니다
`0(false)`:비동기 방식 (`default`)
`1(true)`:동기 방식|

### Return Value
***object***

### Example
```javascript
var opt = {
        //각 열에 대한 정의 (열의 이름, 유형(Type), 포맷(Format)등을 설정)
        Cols:[
            {Header: {Value: "이름"}, Name: "sa_nm", Type: "Text"},
            {Header: {Value: "사원번호" }, Name: "sa_id", Type: "Text", Align: "center"},
            {Header: {Value: "부서"}, Name: "sa_dept", Type: "Enum",
                Enum: "|경영지원|총무|인사|설계|시공1|시공2", EnumKeys: "|01|02|03|04|05|06"},
            {Header: {Value: "직급"}, Name: "sa_position", Type: "Enum",
                Enum: "|대표|상무|이사|부장|차장|과장|대리|사원", EnumKeys: "|A1|A2|A3|B0|B1|C4|C5|C6"},
            {Header: {Value: "입사일"}, Name: "sa_enterdate", Type: "Date",Width:100, Format: "yyyy/MM/dd"},
            {Header: {Value: "비고"}, Name: "sa_desc", Type: "Lines"}
        ]
    };
var dataArr = [
    {sa_nm: "홍길동", sa_id: "9821450", sa_dept: "04", sa_position: "B0", sa_enterdate: "19980305", sa_desc: ""},
    {sa_nm: "김한국", sa_id: "9510427", sa_dept: "01", sa_position: "A3", sa_enterdate: "19890317", sa_desc: ""}
];

//시트객체 생성
IBSheet.create({
    id: "sheet", // 생성할 시트의 id
    el: "sheetDiv", // 시트를 생성할 Dom 객체 및 id
    options: opt, // 생성될 시트의 속성
    data: dataArr, // 생성될 시트의 정적데이터
    sync: 1 // 동기로 시트 생성( 비동기로 시트 생성)
});

//el에 html element 설정
IBSheet.create({
    "id": "sheet", // 시트객체 이름 (SPA에서는 사용 X)
    "el": document.querySelector("div.part1 .gridarea"), // 시트를 생성할 html element 
    "options": opt, // 초기화 구문
    "data": dataArr//초기 데이터
});
```
### Read More
 - [IBSheet.CommonOptions static](./common-options)
 - [IBSheet.onBeforeCreate static](./on-before-create)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.45|sync 기능 추가|
