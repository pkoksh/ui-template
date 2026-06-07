---
KEY: link
KIND: cell-property
PATH: props/cell/link
ALIAS: 셀에, 데이터를, 태그로, 감싸고, 속성에
ALIAS_EN: link
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/link
---
# Link ***(cell)***

> 셀에 데이터를 \<a> 태그로 감싸고 href 속성에 들어갈 URL을 설정합니다.

> [LinkBase](./link-base)와 [LinkTarget](./link-target) 속성을 같이 사용하여 상대경로나 클릭시에 target window를 설정할 수 있습니다.

> **이 옵션은 반드시 CanEdit가 0으로 설정되어야 동작합니다.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|클릭시 이동할 URL|


### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Link", "./cbt/exam02.do");


//2. 객체에 직접 접근해서 속성 적용 (열이름: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSLink"] = "/cbs/recalcSum.do";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름: CLS)
{
    data:[
        {... , "CLSLink":"/abs/endPointJ.do" , ...}
    ]
}
```

### Read More
- [LinkBase cell](./link-base)
- [LinkTarget cell](./link-target)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
