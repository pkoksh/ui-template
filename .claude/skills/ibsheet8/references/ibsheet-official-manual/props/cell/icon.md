---
KEY: icon
KIND: cell-property
PATH: props/cell/icon
ALIAS: 셀의, 좌측에, 원하는, 아이콘, 이미지
ALIAS_EN: icon
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/icon
---
# Icon ***(cell)***
> 셀의 좌측에 원하는 아이콘 이미지,체크박스 혹은 버튼을 표시하는 기능입니다. 

> 셀의 우측에 버튼을 표시하는 [Button](./button) 속성과 유사한 기능입니다.

> 열의 타입이 `Button`인 경우에는 사용하실 수 없습니다.

###
![Icon속성](/assets/imgs/Icon1.png "Icon속성")
<!-- IMAGE: 아이콘 이미지 - Icon속성 -->
[그림1]

![Icon속성](/assets/imgs/Icon2.png "Icon속성")
<!-- IMAGE: 아이콘 이미지 - Icon속성 -->
[그림2]


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Clear`|셀 좌측에 셀 내용을 지우기 위한 버튼이 표시됩니다.|
|`Date`|셀 좌측에 달력 아이콘을 보여줍니다. 열의 타입이 "Date"인 경우에만 클릭시 달력이 표시됩니다.[그림2] 참고|
|`Check`|셀 좌측에 체크박스를 표시합니다.|
|`공백`|원래 보여져야 하는 Icon 이미지를 감춥니다.|
|`기타`|이미지 파일에 대한 url을 넣으면 아이콘의 배경으로 이미지가 표시됩니다. [그림1] 참고
(이미지는 gif,png,jpg만 가능)|
<!--!
|`[비공개]` `Expand`|접음/펼침 기능을 사용하기 위한 버튼이 표시됩니다.|
!-->

*[IconWidth](../col/icon-width) 속성을 통해 아이콘 영역의 넓이를 설정할 수 있습니다.
아이콘을 클릭시 [onIconClick](/docs/events/on-icon-click)이벤트가 호출됩니다.
`"Clear"`나 `"Check"`로 설정하면 [OnClickSide](/docs/props/event/on-click-side) 이벤트만 호출합니다.*


### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름 :CLS )
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Icon", "Clear");


//2. 객체에 직접 접근해서 속성 적용 (열이름 :CLS )
var ROW = sheet.getRowById("AR10");
ROW["CLSIcon"] = "Check";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름 : CLS)
{
    "data":[
        {... , "CLSIcon":"/images/popIcon.gif", ...}
    ]
}

//4. 조회 데이터 내에서 속성 적용  (열이름 : CLS)
{
    "data":[
        {... , "ClsIcon":"Check", "CLSChecked":1, ...}
    ]
}
```

### Read More

- [IconWidth cell](./icon-width)
- [Button cell](./button)
- [Checked cell](/docs/props/cell/checked)
- [Icon col](../col/icon)
- [IconWidth col](../col/icon-width)
- [setIconCheck method](/docs/funcs/core/set-icon-check)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
