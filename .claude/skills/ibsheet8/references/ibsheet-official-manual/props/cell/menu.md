---
KEY: menu
KIND: cell-property
PATH: props/cell/menu
ALIAS: 특정, 위에서, 마우스, 우측, 버튼
ALIAS_EN: menu
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/menu
---
# Menu ***(cell)***
> 특정 셀 위에서 마우스 우측 버튼 클릭시 보여질 컨텍스트 메뉴를 설정합니다.

> 7장의 [Menu appendix](/docs/appx/menu)내용을 참고해 주세요.

### Type
mixed( `object` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`string`|첫글자를 구분자로 한 컨텍스트 메뉴스트링 지정  (ex: @저장@임시저장@취소 or *상신*취소) |
|`object`|[Menu Object 설정 링크 참고](/docs/appx/menu)

### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Menu", "|진행|취소");


//2. 객체에 직접 접근해서 속성 적용 (열이름: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSMenu"] = "|보류|결제|전결";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름: CLS)
{
    data:[
        {... , "CLSMenu":"|국내|해외" , ...}
    ]
}
```

### Read More
- [Menu appendix](/docs/appx/menu)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
