---
KEY: editMask
KIND: cell-property
PATH: props/cell/edit-mask
ALIAS: 셀에, 입력가능한, 문자를, 자바스크립트, 정규식을
ALIAS_EN: edit, mask
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/edit-mask
---
# EditMask ***(cell)***
> 셀에 입력가능한 문자를 자바스크립트 정규식을 이용하여 설정합니다.

> 여기서 입력한 글자는 정규식의 `search()`를 사용하여 입력허용 여부가 결정됩니다.
>
> "입력값".search(EditMask)>=0 

> `true` 인 경우 입력 허용

> `false` 인 경우 입력 제한

>
> 띄어쓰기를 제외한 모든 글자만 입력허용 : "^\\\\S\*\$"

> 숫자만 입력 가능 : "^\\\\d\*\$"

> 알파벳 만 가능 : "^\\\\w\*\$"

> 열개 숫자만 가능 : "^\\\\d{0,10}$"

>
> 정규식에 맞지 않은 글자는 입력되지 않습니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|자바스크립트 정규식 문자|

### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름 :CLS )
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "EditMask", "^\\S*$");


//2. 객체에 직접 접근해서 속성 적용 (열이름 :CLS )
var ROW = sheet.getRowById("AR10");
ROW["CLSEditMask"] = "^\\w*$";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름 :CLS )
{
    data:[
        {... , "CLSEditMask":"^\\d{0,10}$" , ...}
    ]
}
```
### Read More
- [EditMask col](/docs/props/col/edit-mask)
- [ResultMask cell](./result-mask)
<!--!
- `[비공개]` [MaskColor cell](./mask-color)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
