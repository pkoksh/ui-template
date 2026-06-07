---
KEY: defaultValue
KIND: column-property
PATH: props/col/default-value
ALIAS: 컬럼에, 기본, 값을, 설정합니다
ALIAS_EN: default, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/default-value
---
# DefaultValue ***(col)***
> 컬럼에 기본 값을 설정합니다.

> 신규행을 추가하거나 조회데이터 안에 해당 열에 대한 데이터가 없는 경우, 지정한 값이 자동으로 표시됩니다.

> 특히 `Button` 타입 사용시 버튼에 기본적으로 표시될 내용을 설정하면, 별도로 버튼 컬럼에 대한 조회가 없어도 해당 값이 표시됩니다. 

> 값을 읽거나(getValue) 저장하거나 엑셀로 다운로드할 때는 DefaultValue 값으로 처리됩니다. 

> `EmptyValue` 속성과 같이 설정 하였을 경우 DefaultValue가 우선 순위가 높습니다. 

> 해당 속성에 영향을 받는 데이터는 아래와 같습니다.
```javascript
{Type: "Text", Name: "sText", DefaultValue : "홍길동"}

data: [
    {"e": null},      //null 데이터
    {"e": undefined}, //undefined 데이터
    {}                //데이터 없음 
]
```
### Type
`mixed`

### Options
|Value|Description|
|-----|-----|
|`mixed`|신규 행이나 조회시 값이 없을때 기본값으로 표시할 내용|

### Example
```javascript
//버튼 컬럼에 기본 타이틀 지정
options.Cols = [
    {Header: "상세정보", Type: "Button", Name: "DetailBnt", Button: "Button", DefaultValue: "확인"},
    ...
];
```
![Default](/assets/imgs/button5.png)
<!-- IMAGE: 버튼 이미지 - Default -->

상세보기 컬럼에 조회 데이터가 없어도 "확인"이 표시됩니다.

### Read More
- [EmptyValue col](./empty-value)
- [SpaceForDefaultValue cfg](/docs/props/cfg/space-for-default-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
