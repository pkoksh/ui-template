---
KEY: linkTarget
KIND: cell-property
PATH: props/cell/link-target
ALIAS: 셀에, 속성이, 있는, 경우, 클릭시
ALIAS_EN: link, target
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/link-target
---
# LinkTarget ***(cell)***

> 셀에 [Link](./link)속성이 있는 경우, 클릭시 이동할 `target Window`를 설정합니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|클릭시 이동 할 Target Window(_blank ,_parent ,_self ,_top, 특정 window명)|


### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름 :CLS )
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "LinkTarget", "_self");


//2. 객체에 직접 접근해서 속성 적용 (열이름 :CLS )
var ROW = sheet.getRowById("AR10");
ROW["CLSLinkTarget"] = "_blank";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름 :CLS )
{
    data:[
        {... , "CLSLinkTarget":"_parent" , ...}
    ]
}
```

### Read More
- [Link cell](./link)
- [LinkBase cell](./link-base)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
