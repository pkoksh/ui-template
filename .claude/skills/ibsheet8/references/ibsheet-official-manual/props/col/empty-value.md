---
KEY: emptyValue
KIND: column-property
PATH: props/col/empty-value
ALIAS: 셀에, 값이, 없을때, 보여질, 글자를
ALIAS_EN: empty, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/empty-value
---
# EmptyValue ***(col)***

> 셀에 값이 없을때 보여질 글자를 설정합니다.

> `Html` input 객체의 `placeholder`속성과 비슷한 기능으로, 값을 읽거나(getValue) 저장하거나 엑셀로 다운로드할 때는 값이 없는 상태로 처리됩니다. 

> 해당 속성에 영향을 받는 데이터는 아래와 같습니다.
```javascript
{Type: "Text", Name: "sText", EmptyValue : "값이 없습니다."}

data: [
    {"e": null},      //null 데이터
    {"e": undefined}, //undefined 데이터
    {"e": ""},        //빈문자 데이터
    {}                //데이터 없음 
]
```

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|신규 행이나 조회시 값이 없을때 보여질 내용|


### Example
```javascript
//필수 입력에 대한 안내를 설정
options.Cols = [
    ...
    {Type: "Text", Name: "sa_point", EmptyValue: "필수 입력항목 입니다.", ...},
    ...
];
```

### Read More
- [CanEmpty col](./can-empty)
- [DefaultValue col](./default-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
