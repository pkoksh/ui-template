---
KEY: caseSensitive
KIND: cell-property
PATH: props/cell/case-sensitive
ALIAS: 소팅시, 혹은, 필터, 기능, 사용시
ALIAS_EN: case, sensitive, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/case-sensitive
---
# CaseSensitive ***(cell)***
> 소팅시(혹은 필터 기능 사용시) 대소문자 구분 여부를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|대소문자 구분 안함|
|`1(true)`|대소문자 구분 사용 (`default`)|


### Example
```javascript
//특정 셀 데이터에 대해서 소팅시 대소문자 구분 안함.
//조회 데이터 내에서 속성 적용  (열이름 :CLS )
{
    data:[
        {... , "CLSCaseSensitive":"0" , ...}
    ]
}
```

### Read More
- [RawSort cell](./raw-sort)
- [NumberSort cell](./number-sort)
- [SortValue cell](./sort-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
