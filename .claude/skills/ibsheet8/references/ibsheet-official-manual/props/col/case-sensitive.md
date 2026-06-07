---
KEY: caseSensitive
KIND: column-property
PATH: props/col/case-sensitive
ALIAS: 소팅시, 혹은, 필터, 사용시, 대소문자
ALIAS_EN: case, sensitive, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/case-sensitive
---
# CaseSensitive ***(col)***

> 열 소팅시(혹은 필터 사용시) 대소문자 구분 여부를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|대소문자 구분 안함|
|`1(true)`|대소문자 구분 사용 (`default`)|


### Example
```javascript
//특정 열 소팅시 대소문자를 구분.
options.Cols = [
    ...
    {Type: "Text", Name: "SA_DEPTID", CaseSensitive: 1, ...},
    ...
];
```

### Read More
- [RawSort col](./raw-sort)
- [CanSort col](./can-sort)
- [NumberSort col](./number-sort)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
