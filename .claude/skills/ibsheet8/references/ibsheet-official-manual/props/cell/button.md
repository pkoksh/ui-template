---
KEY: button
KIND: cell-property
PATH: props/cell/button
ALIAS: 셀의, 우측에, 원하는, 아이콘이미지, 체크박스
ALIAS_EN: button
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/button
---
# Button ***(cell)***
> 셀의 우측에 원하는 아이콘이미지, 체크박스 혹은 버튼을 표시하는 기능입니다. 

> 열의 [Type](/docs/appx/type)이 `Date`거나 `Enum`인 경우에는 설정과 상관없이 달력이나 드롭다운 모양의 버튼이 표시됩니다.

>
> 열의 타입이 `Button`인 경우에는 셀 버튼에 대한 기능으로 동작하게 됩니다.

> *셀의 좌측에 버튼을 설정하고자 할때는 [Icon](/docs/props/cell/icon)속성을 확인하세요.*

###
![Button속성](/assets/imgs/button1.png "Button속성")
<!-- IMAGE: 버튼 이미지 - Button속성 -->
[그림1]


![Button속성](/assets/imgs/button2.png "Button속성")
<!-- IMAGE: 버튼 이미지 - Button속성 -->
[그림2]


![Button속성](/assets/imgs/button3.png "Button속성")
<!-- IMAGE: 버튼 이미지 - Button속성 -->
[그림3]




### Type
`string`

### Options
**열의 Type이 Button이 아닌 경우**

|Value|Description|
|-----|-----|
|`Clear`|셀 우측에 셀 내용을 지우기위한 버튼이 표시됩니다. [그림1] 참고|
|`Check`|셀 우측에 체크박스를 표시합니다. [그림2] 참고|
|`Html`|[ButtonText](/docs/props/cell/button-text) 속성으로 원하는 HTML태그를 넣으면 셀 우측에 표시됩니다.|
|`공백`|원래 보여져야 하는 버튼 이미지를 감춥니다.
 가령 Date 타입 열은 기본적으로 달력버튼이 표시되는데 이 속성을 이용하여 버튼을 감출수 있습니다.
|`기타`|이미지 파일에 대한 url을 넣으면 버튼의 배경으로 이미지가 표시됩니다. [그림3] 참고
(이미지는 gif, png, jpg만 가능  / 클릭시 `onButtonClick이벤트`가 호출)|
<!--!
|`[비공개]` `Expand`|접음/펼침 기능을 사용하기 위한 버튼이 표시됩니다.|
!-->


**열의 Type이 Button인 경우**

|value|desc|
|---|---|
|`Button`|일반적인 버튼 형태로 보여줍니다. 
[UseButton](/docs/props/cfg/use-button)속성의 값에 따라 셀의 값을 \<u>태그 또는 \<button>태그로 만들어 줍니다.|
|`Html`|속성을 `Html`로 설정하고 셀의 값을 `Html` 형태로 사용하실 수 있습니다.  (ex: <div class="button>버튼\</div>)|
<!--!
|`[비공개]` `Class`|셀에 커스텀 css Class를 적용합니다.
가령 기본테마를 사용하면서 Button속성의 값을 `Class`로, [ButtonClass](/docs/props/cell/button-class)속성의 값을 "CUST_BTN"으로 설정하면,
실제 해당셀의 클래스는 **IBToolCUST_BTN** 으로 설정됩니다.|
!-->

### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름 :CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Button", "Clear");


//2. 객체에 직접 접근해서 속성 적용 (열이름 :CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSButton"] = "/images/alBtn.gif";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름 :CLS)
{
    data:[
        {..., "CLSButton":"Check", ...}
    ]
}
```

### Read More

- [Type appendix](/docs/appx/type)
- [ButtonText cell](/docs/props/cell/button-text)
- [UseButton cfg](/docs/props/cfg/use-button)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
