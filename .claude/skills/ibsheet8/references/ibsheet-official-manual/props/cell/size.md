---
KEY: size
KIND: cell-property
PATH: props/cell/size
ALIAS: 셀에, 입력가능한, 글자수를, 설정합니다
ALIAS_EN: size
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/size
---
# Size ***(cell)***
> 셀에 입력가능한 글자수를 설정합니다. 

> [cfg.UnicodeByteMode](/docs/props/cfg/unicode-byte-mode)를 설정할 경우 한글의 바이트 수를 계산하여 입력을 제한합니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|입력가능한 글자수|

### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Size", 20);


//2. 객체에 직접 접근해서 속성 적용 (열이름: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSSize"] = 15;
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름: CLS)
{
    data:[
        {... , "CLSSize": 10, ...}
    ]
}
```
### Read More
- [Size col](/docs/props/col/size)
- [SizeIgnoreDecimalSep cel](/docs/props/cell/size-ignore-decimal-sep)
- [UnicodeByteMode cfg](/docs/props/cfg/unicode-byte-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
