---
KEY: checked
KIND: cell-property
PATH: props/cell/checked
ALIAS: 속성이나, 속성의, 값을, 설정하여, 안에
ALIAS_EN: checked
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/checked
---
# Checked ***(cell)***
> [Icon](/docs/props/col/icon)속성이나 [Button](/docs/props/col/button)속성의 값을 "Check" 로 설정하여 셀 안에 체크박스가 생성되었을때, 체크 여부를 확인하거나 수정합니다.


###
![ICON Check](/assets/imgs/iconCheck.png "Icon:Check 사용한 경우")
<!-- IMAGE: 아이콘 이미지 - ICON Check -->
[**Icon:"Check"사용 예**]

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|체크 해제됨|
|`1`|체크됨|
|`2`|알 수 없음(체크 박스 안에 "?"문자가 표시됨)|


### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름 :CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Checked", 1);


//2. 객체에 직접 접근해서 속성 확인 (열이름 :CLS)
var ROW = sheet.getRowById("AR10");
var cellchk = ROW["CLSChecked"];



//3. 조회 데이터 내에서 속성 적용  (열이름 :CLS)
{
    "data":[
        {... , "CLSChecked":1 , ...}
    ]
}
```

### Read More
- [Icon col](/docs/props/col/icon)
- [Button col](/docs/props/col/button)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
