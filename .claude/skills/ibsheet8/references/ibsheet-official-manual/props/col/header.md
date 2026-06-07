---
KEY: header
KIND: column-property
PATH: props/col/header
ALIAS: 열의, 헤더, 셀을, 정의합니다
ALIAS_EN: header
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/header
---
# Header ***(col)***
> 열의 헤더 셀을 정의합니다.

> 단순히 헤더셀에 들어가야 할 문자열을 설정 할 수도 있고, 셀의 색상이나 정렬 등의 기능을 같이 정의하거나 여러 개의 헤더행을 만들기 위해 배열로 설정 할 수도 있습니다.

> **여러 개의 헤더 행을 만드는 경우 컬럼별 헤더 배열의 길이는 같아야 합니다.**

> **<mark>주의</mark> : 헤더에 빈값을 셋팅하려면 공백데이터를 포함해야 합니다. 
Header:"<mark> </mark>"**


### Type
`mixed`( `string` \| `object` \| `array[string|object]` )


### Options
|Value|Description|
|-----|-----|
|`string`|헤더셀에 들어갈 타이틀(`\n` 줄바꿈 기호를 통해 문자열을 줄바꿈 할 수 있습니다.)|
|`object`|헤더셀에 들어갈 타이틀과 문자열 정렬, 배경색 등을 설정|
|`array`\[`string`\|`object`\]|여러개의 헤더 행을 만드는 경우 설정|

### Example
한줄 헤더행 예)
```javascript
options.Cols = [
    {   //string 형태로 사원명 지정
        Header: "사원명", // Header: "사원\n명" 을 하면 줄바꿈 되어 표시 됩니다.
        Type: "Text", MinWidth: 120, Name: "sa_name"
    },
    {  //object 형태의 사원명 지정
        Header: {Value: "부서", Color: "#EDEDED", TextColor: "#FF0000", Align: "Left"},
        Type: "Text", MinWidth: 120, Name: "deptCd"
    }
];
```
!["한줄헤더"](/assets/imgs/headerSingleRow.png)
<!-- IMAGE: 스크린샷/예시 이미지 - "한줄헤더" -->




두줄 해더행 예)
```javascript
options.Cfg = {HeaderMerge: 3}; //헤더 영역 머지모드
options.Cols = [
    //  String 형태로 간단하게 설정
    {
        Header: ["사원정보", "이름"],
        Type: "Text", MinWidth: 120, Name: "sa_name"
     },
    {
        Header: ["사원정보","사번"],
        Type: "Text", MinWidth: 80, Name: "sa_no"
    }
]

//or

options.Cfg = {HeaderMerge: 3}; //헤더 영역 머지모드
options.Cols = [
    // Object 형태로 배경이나 글자색,정렬등을 같이 설정하는 방법
    {
        Header:[
            {Value: "사원정보", Align: "Center"},
            {Value: "이름", Color: "#315C81", TextColor: "#FFEEFF", Align: "Left"}
        ],
        Type: "Text", MinWidth: 120, Name: "sa_name"
     },
    {
        Header:[
            {Value: "사원정보"},
            {Value: "사번", Color: "#315C81", TextColor: "#ED6655", Align: "Left"}
        ],
        Type: "Text", MinWidth: 80, Name: "sa_no"
    },
];
```
!["두줄헤더"](/assets/imgs/headerDoubleRow.png)
<!-- IMAGE: 스크린샷/예시 이미지 - "두줄헤더" -->


### Read More
- [HeaderMerge cfg](/docs/props/cfg/header-merge)
- [Span cell](/docs/props/cell/span)
- [RowSpan cell](/docs/props/cell/row-span)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
