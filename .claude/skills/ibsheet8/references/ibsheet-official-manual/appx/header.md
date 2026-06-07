---
KEY: header
KIND: appendix
PATH: appx/header
ALIAS: 여러줄의, 헤더를, 설정하거나, 헤더에, 내용을
ALIAS_EN: header
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/header
---
# Header  ***(appendix)***
> 여러줄의 헤더를 설정하거나, 헤더에 내용을 수정하거나 체크박스 등을 삽입하는 방법에 대해 알아봅니다.

## 1. 단일 헤더행
가장 간단하게 Cols값 설정시 Header속성을 통해 헤더 타이틀을 설정하실 수 있습니다.
```javascript
init.Cols = [
    {Header:"첫번째 열 타이틀", Type:"Int", Name:"sActSum", Width:100},
    {Header:"두번째 열 타이틀", Type:"Date", Name:"sDate", Width:120},
    ...
]
```
[단일헤더행]

![단일 헤더행](/assets/imgs/onelineHeader.png "단일 헤더행")
<!-- IMAGE: 스크린샷/예시 이미지 - 단일 헤더행 -->

## 2. 여러줄 헤더행
Header 속성에 값을 배열형태로 설정하시면 두줄 이상의 헤더행을 설정하실 수 있습니다.
```javascript
init.Cols = [
    {Header:["경제활동인구","취업자","소계"], Type:"Int", Name:"sEmplySum"},
    {Header:["경제활동인구","취업자","남자"], Type:"Int", Name:"sEmplyM"},
    {Header:["경제활동인구","취업자","여자"], Type:"Int", Name:"sEmplyW"},
    ...
];
```
[다중헤더행]

![여러줄 헤더행](/assets/imgs/multilineHeader.png "여러줄 헤더행")
<!-- IMAGE: 스크린샷/예시 이미지 - 여러줄 헤더행 -->



## 3. 헤더행 내용 수정
데이터 행과 마찬가지로 해더행 객체를 통해 행의 값을 얻거나 수정하실 수 있습니다. 해더행의 ID는 다음과 같은 형식으로 자동을 부여됩니다.

1) 헤더행이 한 줄인 경우, 헤더행의 ID는 `Header`입니다.
2) 헤더행이 두 줄 이상인 경우, 첫번째 헤더행의 ID는 `Header`이고 두번째 이후부터는 `HR1`,`HR2`.. 로 부여됩니다.
```javascript
//첫번째 헤더행의 sPosition 열의 내용 얻기
var hdStr = sheet.getValue( sheet.getRowById("Header"), "sPosition" );

//세번째 헤더행의 sPosition 열에 내용 수정하기
sheet.setValue( sheet.getRowById("HR2"), "sPosition" , "직책" )
```

## 4. 헤더에 글자색,배경색 변경 및 이미지 넣기
열 설정시 Header 속성에 값을 문자열이 아닌 object 형태를 통해서 헤더 셀이 배경색이나 글자색등 다양한 기능을 설정하실 수 있습니다.

아래 예제에서 Header속성 내에 Color,TextColo,Type 등을 확인해 보세요.
```javascript
init.Cols = [
    //헤더 셀에 배경색을 "#FF0000"으로 설정
    {Header:{Value:"헤더 타이틀1", Color:"#FF0000"}, Type:"Text", Width:150, Name:"Col1"},
    //헤더 셀에 글자색을 "#FFFF00"으로 설정
    {Header:{Value:"헤더 타이틀2", TextColor:"#FFFF00"}, Type:"Text", Width:120, Name:"Col2"},
    //헤더 셀에 객체를 설정
    {Header:{Value:"|./assets/imgs/am.jpg|||||",Type:"Img"}, Type:"Text", Width:120, Name:"Col3"},
    ...
];
```
[헤더 색상,타입변경]

![헤더색상,타입변경](/assets/imgs/multiFuncHeader.png "헤더색상,타입변경")
<!-- IMAGE: 스크린샷/예시 이미지 - 헤더색상,타입변경 -->


## 5. 헤더체크박스
Type이 Bool인 열은 `HeaderCheck`속성을 통해서 헤더 셀에 체크박스를 설정하실 수 있습니다.
```javascript
init.Cols = [
    {Header:"No", Name:"SEQ", Width:"90"},
    {Header:{Value:"확인",HeaderCheck:1}, Type:"Bool", Name:"sCheck", Width:"60"},
    {Header:"회사", Type:"Text", Name:"sCompany", Width:"150"},
    ...
]
```
[헤더셀 체크박스]

![헤더셀 체크박스](/assets/imgs/headerCheck.png "헤더셀 체크박스")
<!-- IMAGE: 스크린샷/예시 이미지 - 헤더셀 체크박스 -->

### Read More
- [HeaderCheck col](/docs/props/col/header-check)
- [Header col](/docs/props/col/header)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
