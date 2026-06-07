---
KEY: button
KIND: column-property
PATH: props/col/button
ALIAS: 셀의, 우측에, 원하는, 아이콘, 이미지
ALIAS_EN: button, icon
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/button
---
# Button ***(col)***
> 셀의 우측에 원하는 아이콘 이미지,체크박스 혹은 버튼을 표시하는 기능입니다. 

> 열의 [Type](/docs/appx/type)이 `Date`거나 `Enum`인 경우에는 설정과 상관없이 달력이나 드롭다운 모양의 버튼이 표시됩니다.

> 열의 타입이 `Button`인 경우에는 셀 버튼에 대한 기능으로 동작하게 됩니다.

> *셀의 좌측에 버튼을 설정하고자 할때는 [Icon](./icon)속성을 확인하세요.*

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

![Button속성](/assets/imgs/buttonDefaults.png "Button속성")
<!-- IMAGE: 버튼 이미지 - Button속성 -->
[그림4]



### Type
`string`

### Options
**열의 Type이 Button이 아닌 경우**

|Value|Description|
|-----|-----|
|`Button`|[ButtonText](./button-text) 속성을 통해 설정한 문자를 \<u>태그를 통해 보여줍니다.|
|`Clear`|셀 우측에 셀 내용을 지우기위한 버튼이 표시됩니다. [그림1] 참고|
|`Check`|셀 우측에 체크박스를 표시합니다. [그림2] 참고|
|`Html`|[ButtonText](./button-text) 속성으로 원하는 HTML태그를 넣으면 셀 우측에 표시됩니다.|
|`공백`|원래 보여져야 하는 버튼 이미지를 감춥니다.
 가령 `Date` 타입 열은 기본적으로 달력버튼이 표시되는데 이 속성을 이용하여 버튼을 감출수 있습니다.|
|`기타`|이미지 파일에 대한 url을 넣으면 버튼 셀의 배경으로 이미지가 표시됩니다. [그림3] 참고
(이미지는 gif, png, jpg만 가능  / 클릭시 onButtonClick이벤트가 호출)|
|`Defaults`|셀 우측에 [Defaults](./defaults) 버튼을 표시합니다. [그림4] 참고|
<!--!
|`[비공개]` `Expand`|접음/펼침 기능을 사용하기 위한 버튼이 표시됩니다.|
!-->


***Html이나 이미지 버튼을 사용시 버튼의 너비는 [WidthPad](./width-pad)속성을 통해 설정할수 있습니다.***


**열의 Type이 Button인 경우**

|value|desc|
|---|---|
|`Button`|일반적인 버튼 형태로 보여줍니다. 
[UseButton](/docs/props/cfg/use-button)속성의 값에 따라 셀의 값을 \<u>태그 또는 \<button>태그로 만들어 줍니다.|
|`Html`|속성을 `Html`로 설정하고 셀의 값을 `Html` 형태로 사용하실 수 있습니다. (ex: <div class="button>버튼\</div>)|
<!--!
|`[비공개]` `Class`|셀에 커스텀 css Class를 적용합니다.
가령 기본테마를 사용하면서 `Button속성`의 값을 "Class"로, [ButtonClass](./button-class)속성의 값을 "CUST_BTN"으로 설정하면,
실제 해당셀의 클레스는 **IBToolCUST_BTN** 으로 설정됩니다.| 
!-->

### Example
```javascript
options.Cols = [
    ...
    //셀의 우측에 체크박스를 표시
    {Type: "Text", Name: "product_name", Button: "Check", Width: 120 ...},
    //셀의 우측에 이미지로 버튼을 추가합니다.
    {Type: "Text",  Name: "brnSaleAmt", Button: "/pcd/img/popIcon.png", Width: 120 ...},
    ...
    //타입에 버튼을 설정
    {Type: "Button", Name: "btn_type", ButtonText: "Btn", Width: 120, "WidthPad": 50 ...},
    ...
];
```

### Try it
- [Demo of Button](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/Button/)

### Read More

- [WidthPad col](./width-pad)
- [ButtonText col](./button-text)
- [Defaults col](./defaults)
- [UseButton cfg](/docs/props/cfg/use-button)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
