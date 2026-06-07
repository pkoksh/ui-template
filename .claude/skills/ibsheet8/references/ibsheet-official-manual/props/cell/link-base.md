---
KEY: linkBase
KIND: cell-property
PATH: props/cell/link-base
ALIAS: 셀에, 속성이, 있는, 경우, 경로를
ALIAS_EN: link, base
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/link-base
---
# LinkBase ***(cell)***

> 셀에 [Link](./link)속성이 있는 경우, Base 경로를 설정합니다.

> 현재 페이지가 **/abc/test.html**이라고 가정했을때, `LinkBase` 설정에 따른 연결 URL은 다음과 같습니다.
> |Link|LinkBase|실제연결URL|
> |---|---|---|
> |/xyz/test2.html||/xyz/test2.html|
> |./xyz/test2.html||/abc/xyz/test2.html|
> |/xyz/test2.html|/kor|/kor/xyz/test2.html|
> |./xyz/test2.html|/kor|/kor/xyz/test2.html|


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|`Link`에서 설정한 URL의 Base 경로|


### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "LinkBase", "/koem");


//2. 객체에 직접 접근해서 속성 적용 (열이름: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSLinkBase"] = "/dps";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름: CLS)
{
    data:[
        {... , "CLSLinkBase":"/cust" , ...}
    ]
}
```

### Read More
- [Link cell](./link)
- [LinkTarget cell](./link-target)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
