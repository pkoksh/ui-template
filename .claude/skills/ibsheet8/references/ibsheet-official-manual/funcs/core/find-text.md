---
KEY: findText
KIND: method
PATH: funcs/core/find-text
ALIAS: sheet.findText, findText(), 내에, 특정, 문자열을, 가지는, 첫번
ALIAS_EN: find, text
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/find-text
---
# findText ***(method)***
> 열 내에 특정 문자열을 가지는 첫번 째 [데이터 로우 객체](/docs/appx/row-object)를 반환합니다.


### Syntax
```javascript
object findText( col, searchText, startRow, matchMode, caseSensitive, excludeKeys );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|col |`string`|필수|열 이름|
|searchText |`string`|필수|찾을 문자열|
|startRow |`object`|선택|검색 시작 행의 [데이터 로우 객체](/docs/appx/row-object) (`default: 시트의 첫번째 행`)|
|matchMode|`number`|선택|문자열 매칭 모드
`-1`:전체가 동일한 값 (`default`)
`0`:앞 부분이 같은 값
`1`:뒷 부분이 같은 값
`2`:일부가 같은 값|
|caseSensitive |`boolean`|선택|대소문자 구별 여부
`0(false)`:대소문자 구별 안함 (`default`)
`1(true)`:대소문자 구별 적용|
|excludeKeys |`boolean`|선택|[Enum](/docs/props/col/enum) 열 검색 시 [EnumKeys](/docs/props/col/enum-keys)를 검색에 포함 할 지 여부
`0(false)`:[Enum](/docs/props/col/enum) 열 검색 시 [EnumKeys](/docs/props/col/enum-keys)를 검색에 포함 안함
`1(true)`:[Enum](/docs/props/col/enum) 열 검색 시 [EnumKeys](/docs/props/col/enum-keys)를 검색에 포함 (`default`)|

### Return Value
***object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
// sTitle 열의 셀 값에서 Java Project1과 일치하는 첫 번째 데이터 로우 객체를 리턴합니다.
var row = sheet.getFirstRow();
var sdata = sheet.findText("sTitle", "Java project1", row, -1, 1);
```

### Read More

- [getString method](./get-string)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.21|`excludeKeys` 기능 추가|
