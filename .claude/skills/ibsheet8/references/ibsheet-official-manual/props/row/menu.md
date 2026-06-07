---
KEY: menu
KIND: row-property
PATH: props/row/menu
ALIAS: 마우스, 우측, 버튼, 클릭시, 보여질
ALIAS_EN: menu
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/menu
---
# Menu ***(row)***

> 마우스 우측 버튼 클릭시 보여질 컨텍스트 메뉴를 설정합니다.



### Type
mixed( `object` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`string`|첫글자를 구분자로 한 컨텍스트 메뉴스트링 지정  (ex: @저장@임시저장@취소 or *상신*취소) |
|`object`|[Menu Object 설정 링크 참고](/docs/appx/menu)

### Example
```javascript
//헤더행에서 마우스 우측 버튼 클릭시 엑셀 다운로드에 대한 설정 활성화.
var rows = sheet.getHeaderRows();
for(var i = 0; i < rows.length; i++){
    rows[i]["Menu"] = "|엑셀다운로드|텍스트다운로드|PDF다운로드";
}

//조회 데이터에서 특정행에 컨텍스트 메뉴 기능 적용하기.
{"data":[
    {"Menu":"|상신하기|보류하기","ColName1":"Value1","ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [Menu appendix](/docs/appx/menu)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
