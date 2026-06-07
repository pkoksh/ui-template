---
KEY: suggest
KIND: column-property
PATH: props/col/suggest
ALIAS: 포탈, 사이트, 검색창의, 자동완성과, 마찬가지로
ALIAS_EN: suggest
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/suggest
---
# Suggest ***(col)***

> 포탈 사이트 검색창의 자동완성과 마찬가지로 셀 안에 들어갈 내용 리스트를 정의해 두면, 입력시 리스트 중에 시작글자가 동일한 값이 필터링되어 보여집니다. 

> 첫번째 글자를 구분자로 하는 문자열로 설정합니다.


###
![Suggest](/assets/imgs/suggest.gif "Suggest")
<!-- IMAGE: 스크린샷/예시 이미지 - Suggest -->


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|첫글자를 구분자로 하는 문자열 ( ex: "\|우럭\|광어\|참돔\|볼락\|도다리\|부시리")


### Example
```javascript
// CarName 열에 추천어를 미리 등록
options.Cols = [
    ...
    {
        Type: "Text",
        Suggest: "|싼타페 현대|포터2 현대|그랜저 현대|카니발 기아...",
        Name: "CarName",
        Width: 120, 
        ...
    },
    ...
];
```

### Try it
- [Demo of Suggest](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/Suggest/)

### Read More
- [SuggestType col](./suggest-type)
- [SuggestMin col](./suggest-min)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
