---
KEY: menu
KIND: appendix
PATH: appx/menu
ALIAS: 마우스, 우측, 버튼, 클릭시, 보여질
ALIAS_EN: menu
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/menu
---
# Menu  ***(appendix)***
> 마우스 우측 버튼 클릭시 보여질 컨텍스트 메뉴의 모양과 내용을 설정합니다.

> 단순한 컨텍스트 메뉴를 사용 시에는 구분자로 연결한 문자열로 설정할 수 있습니다. (ex: Menu:"|저장|취소|미리보기" )

> 보다 복잡한 구조의 컨텍스트 메뉴를 표현할 때는 json 형식으로 설정해야 합니다.

> 메뉴를 선택하거나, 확인 버튼을 클릭하면 onSelectMenu 이벤트를 통해 선택한 내용을 확인할 수 있습니다.


## Menu 속성
Menu에서 설정되는 속성은 크게 두가지로 나뉩니다.
1. 메뉴 객체 대한 속성
2. 메뉴 내에 특정 item 에 대한 속성

```js
  {
    "Menu":{
      "Buttons":[ "Ok", "Cancel" ],
      "Items":[
        {"Name":"미국","Value":1,"Bool":1},
        {"Name":"일본","Value":0,"Bool":1},
        {"Name":"중국","Value":0,"Bool":1},
        {"Name":"북한","Value":1,"Bool":1}
      ],
      "OnSave":function(item,data) {
        alert("["+data.join(",")+"]를 선택하셨습니다.");
      }
    }
  }
```
![메뉴기능](/assets/imgs/menuBasic.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 메뉴기능 -->



### 1. 메뉴 객체 대한 속성
|Name|Type|Description|
|---|---|---|
|*Items*|`array[object]`|메뉴에 보여질 아이템들을 배열 형태로 설정합니다.|
|*Default*|`object`|Items 배열 내에 설정된 모든 하위 아이템 객체에 공통으로 적용해야 할 내용을 설정합니다.
ex)
 //하위 아이템들을 체크박스 형식으로 설정
Default:{ Bool:1 },   Items:[{}, {}, {}] |
|*SaveType*|`number`|여러 아이템을 선택 혹은 수정 후 최종적으로 onSelectMenu이벤트로 전달될 값을 설정합니다.
설정에 따라 리턴되는 값은 다음과 같습니다.
0 : 빈값이 아닌 아이템만 리턴됩니다. Bool속성을 사용하는 아이템은 체크된 경우 Name속성이 리턴되며, 편집가능한 타입의 아이템은 Name:Value형태로 리턴됩니다.
1 : 수정된 아이템들만 리턴됩니다. Bool속성을 사용하는 아이템은 Name: 0, Name: 1 형태로 리턴되며, 편집가능한 타입의 아이템은  Name: Value 형태로 리턴됩니다.
2 : 모든 값들이 리턴됩니다. Bool속성을 사용하는 아이템은 Name: 0, Name: 1 형태로 리턴되며, 편집가능한 타입의 아이템은 Name: Value 형태로 리턴됩니다.
3 : 모든 값들이 리턴됩니다. Bool속성을 사용하는 아이템은  0/1 형태로 리턴되며, 편집가능한 타입의 아이템은 Value 만 리턴됩니다.
4 : 모든 값들이 리턴됩니다. Bool속성을 사용하는 아이템은  0/1 대신 언체크는 ""(공백)/체크는 Name이 리턴되며, 편집가능한 타입의 아이템은 Value 만 리턴됩니다.|
|*Buttons*|`array[string]`|메뉴 하단에 표시될 버튼을 배열로 설정합니다. 
설정할 수 있는 버튼은 다음과 같습니다.
"Ok":선택한 값을 리턴
"Clear":Bool속성 사용하는 아이템에 대해 전체 선택 혹은 선택 취소
"Cancel":선택값을 무시하고 메뉴 닫기
ex)
"Buttons":[ "Ok", "Cancel" ]|
|*ExpandTime*|`number`|Level속성을 통해 하위 아이템을 트리 형식으로 표현할 때 상위 아이템에 마우스 호버 시 설정된 시간(ms단위) 이후에 자동으로 하위 아이템 메뉴가 펼쳐집니다.
0으로 설정시 항상 하위 아이템 메뉴가 펼쳐진 상태로 보여지며 접기 위한 아이콘도 표시되지 않습니다. (default:200)|
|*CollapseOther*|`boolean`|트리 형식 사용시 사용자가 어떤 상위 아이템을 클릭하여 하위 아이템 메뉴가 보여지도록 펼치면, 자동으로 기존에 펼쳐져 있던 다른 상위 아이템의 하위 아이템 메뉴를 접게 합니다.(default:1)|
|*ShowHint*|`boolean`|메뉴 크기가 작아서 일부 내용이 안보이는 경우, 마우스 커서 호버시 해당 아이템의 너비를 늘려 가려진 부분을 보여줍니다.|

### 2. 메뉴 내 특정 item에 대한 속성
|Name|Type|Description|
|---|---|---|
|*Name*
**필수**|`string`|각 아이템의 이름을 설정합니다. 
Text속성을 설정하지 않는 경우 Name으로 설정한 값이 아이템 리스트에 보여집니다.
Value속성이 설정되지 않는 경우 Name으로 설정한 값이 전달됩니다.
 Name은 아이템 별로 고유해야 합니다.|
|*Text*|`string`|메뉴에 보여질 아이템 텍스트를 설정합니다. 
Text속성을 설정하지 않는 경우 Name으로 설정한 값이 아이템 리스트에 보여집니다.|
|*Value*|`string`|특정 아이템을 선택시 전달할 값을 설정합니다.
Value속성이 설정되지 않는 경우 Name으로 설정한 값이 전달됩니다.
다만 Bool:1 로 각 아이템에 체크박스를 두는 경우에는 용도가 완전히 달라져서 체크박스에 대한 초기 선택 여부로 사용됩니다.|
|*Icon*|`string`|아이템 텍스트 왼쪽에 보여질 아이콘의 url을 설정합니다.|
|*IconWidth*|`number`|아이콘 객체의 너비를 설정합니다.|
|*LeftHtml*|`string`|아이템 텍스트 왼쪽에 원하는 HTML객체를 넣습니다.|
|*LeftWidth*|`number`|왼쪽 HTML객체의 너비를 설정합니다.|
|*RightHtml*|`string`|아이템 텍스트 오른쪽에 원하는 HTML객체를 넣습니다.|
|*RightWidth*|`number`|오른쪽 HTML객체의 너비를 설정합니다.|
|*Height*|`number`|아이템 객체의 최소 높이를 설정합니다.(설정하지 않는 경우 내용의 높이에 따라 자동 결정됩니다.)|
|*Hidden*|`boolean`|특정 아이템 객체의 감춤 여부를 설정합니다. 
아이템이 자식 메뉴를 갖고 있는 경우, 자식도 모수 숨겨집니다.|
|*Disabled*|`boolean`|특정 아이템을 비활성화 합니다. 
아이템이 보이지만 선택이 불가능한 상태가 됩니다.|
|*Default*|`object`|Items 배열 내에 설정된 모든 하위 아이템 객체에 공통으로 적용해야 할 내용을 설정합니다.
ex)
 //하위 아이템들에게 동일한 Icon을 적용한다.
Default:{ Icon:"./image/icon/bt.gif", IconWidth:24 },   Items:[{},{},{}] |
|*Caption*|`boolean`|특정 아이템을 머릿말로 사용합니다.
이 기능을 설정시 해당아이템은 선택되지 않습니다.
<pre>Menu:{
  Items:[
    {Name:"N1",Text:"연령별",Caption:1},
    {Name:"N2",Text:"경행대"},
    {Name:"N3",Text:"성인"},
    {Name:"N4",Text:"청소년"},
    {Name:"N5",Text:"어린이"}
  ] 
}</pre>
![Caption](/assets/imgs/menuCaption.png "Caption")
<!-- IMAGE: 스크린샷/예시 이미지 - Caption -->|
|*Items*|`array[object]`|특정 아이템 아래 하위 아이템 객체를 설정합니다.|
|*Level*|`boolean`|하위 아이템 객체들을 Tree 형식으로 표현합니다.
![Level](/assets/imgs/menuLevel.png "Level")
<!-- IMAGE: 스크린샷/예시 이미지 - Level -->|
|*Expanded*|`number`|Level속성을 통해 아이템을 Tree 형식으로 표현할때 아이템의 펼침 여부를 설정합니다.
-1 : 펼쳐져있고 닫기 불가
1 : 펼쳐저 있고 닫기 가능
0 : 닫혀 있음
<b>이 속성은 상위의 CollapseOther 나 ExpandTime 속성에 영향을 받습니다.</b>|
|*Menu*|`boolean`|하위 아이템 객체들을 부모아이템 우측에 메뉴 형식으로 표현합니다.
![Menu](/assets/imgs/menuMenu.png "Menu")
<!-- IMAGE: 스크린샷/예시 이미지 - Menu -->|
|*Columns*|`number`|하위 아이템 객체를 여러개 열으로 나누어 표현합니다.
<pre>Menu:{
  Items:[
    {
      Columns:2,
      Items:[
        {Name:"안보전략"},
        {Name:"군사발전"},
        {Name:"국방자원"}
      ] 
    }
  ]
}</pre>
![Columns](/assets/imgs/menuColumns.png "Columns")
<!-- IMAGE: 스크린샷/예시 이미지 - Columns -->
|*ColumnSizes*|`string`|열당 들어갈 아이템 개수를 ","를 구분자로 설정합니다.
가령 Columns:3 이고 ColumnSizes:"3,2,4"인 경우, 다음과 같이 표시됩니다.
![ColumnSizes](/assets/imgs/menuColumnSizes.png "ColumnSizes")
<!-- IMAGE: 스크린샷/예시 이미지 - ColumnSizes -->|
|*Bool*|`boolean`|아이템 텍스트 우측에 체크박스를 표시합니다.
이 속성이 적용된 아이템은 클릭시 체크박스의 값이 변경됩니다.
체크된 전체 아이템은 Buttons속성을 통해 "확인"버튼을 클릭하시면 onSelectMenu 이벤트로 전달됩니다.
![Bool](/assets/imgs/menuBool.png "Bool")
<!-- IMAGE: 스크린샷/예시 이미지 - Bool -->|
|*Group*|`number`|Bool속성을 사용하는 아이템들 간에 Radio 그룹을 형성하여 같은 그룹 내에서는 하나의 아이템만 선택가능하게 합니다.
Group의 값은 1이상의 숫자로 설정할 수 있습니다.|
|*UnCheck*|`boolean`|Group 속성을 사용하는 아이템에서 Radio에 대한 선택을 해제할 수 있는지 여부를 설정합니다.|
|*GroupAll*
*CheckAll*|`number`
`boolean`|Bool 속성을 사용하는 아이템들 중에서 같은 GroupAll 속성값을 갖는 아이템들은 CheckAll설정이 되어있는 아이템이 체크될때 같이 체크 됩니다.<pre>//과일전체 아이템 선택시 사과,배,오렌지 아이템도 선택됩니다.
Menu:{
  Items:[
    {Name:"과일전체",Bool:1,GroupAll:200,CheckAll:1},
    {Name:"사과",Bool:1,GroupAll:200},
    {Name:"배",Bool:1,GroupAll:200},
    {Name:"오렌지",Bool:1,GroupAll:200},
  ] 
}</pre>|
|*NoAll*|`boolean`|설정한 아이템은 "전체취소(Clear)/전체선택(All)"버튼의 영향을 받지 않게 됩니다.|
|*Enum*|`boolean`|하위 아이템을 부모아이템 우측에 콤보 형태로 표현할지 여부를 설정합니다.
![Enum](/assets/imgs/menuEnum.png "Enum")
<!-- IMAGE: 스크린샷/예시 이미지 - Enum -->|
|*Edit*|`boolean`|아이템 텍스트 우측에 편집 가능한 input 객체를 표시합니다.
{Name:"이름",Edit:1,Width:150}설정시
![Edit](/assets/imgs/menuEdit.png "Edit")
<!-- IMAGE: 스크린샷/예시 이미지 - Edit -->|
|*Width*|`number`|Enum속성 사용시 콤보 박스의 너비를 설정합니다.
Edit 속성 사용시 input 객체의 너비를 설정합니다.|
|*Left*|`boolean`|Bool속성 사용시 체크박스를 왼쪽에 위치시킵니다.
Enum속성을 사용시 콤보박스를 왼쪽에 위치시킵니다.
Edit속성을 사용시 input 객체를 왼쪽에 위치시킵니다.|
---

## Menu 이벤트
전역으로 발생하는 onShowMenu나 onSelectMenu 이벤트 외에 메뉴별로 각각 이벤트를 설정할 수 있습니다.
메뉴에 설정되는 이벤트도 속성과 마찬가지로 전역 이벤트와 특정 아이템에 설정하는 이벤트로 나뉩니다.

### 1. 메뉴 전체 이벤트

#### OnSave
메뉴를 선택하거나 확인 버튼을 클릭시 발생합니다.(메뉴가 닫히고 나서 발생)
1. 특정 아이템을 클릭하는 경우
item인자에 클릭한 item객체가 넘어오고, Name/Value 속성을 통해 값을 확인하실수 있습니다.
data에는 null이 담깁니다.
2. 편집가능한 아이템을 수정 후 확인 버튼을 클릭하는 경우
item인자는 null이 넘어오고, data인자에 선택한 아이템의 값이 배열로 담겨 넘어옵니다.

|인자|유형|기능설명|
|---|---|---|
|item|`object`|메뉴에서 선택한 아이템 객체|
|data|`array`|메뉴에서 선택한 아이템들의 값|

#### OnButton
하단에 버튼을 클릭시 발생합니다.

OnSave보다 먼저 발생합니다.

false를 리턴시 버튼 클릭에 대한 후 처리 기능을 막을수 있습니다.

|인자|유형|기능설명|
|---|---|---|
|button|`string`|선택한 버튼 문자열|


### 2. 아이템 개별 이벤트
#### OnClick
특정 메뉴 아이템을 클릭시 발생 합니다.

리턴값에 따라 다양한 기능을 부여할 수 있습니다.

* false를 리턴시 : 아이템 클릭 후 발생하는 모든 기능을 실행하지 않고 메뉴를 계속 탐색할 수 있습니다.
* true를 리턴시  : 아이템 클릭 후 발생하는 모든 기능을 실행하지 않고 메뉴를 닫습니다.
* null을 리턴시  : 클릭으로인한 기본 동작(메뉴 아이템 선택)을 실행합니다.

이벤트 안에서 클릭한 아이템(MenuItem)은 this로 (아이템 Name의 경우 this.Name으로 접근) 바인딩됩니다.

this.Owner를 통해 해당 아이템을 가지고 있는 전체 메뉴 객체에 접근 가능하며 부모 아이템 이나 메뉴는 this.Parent로 접근 가능합니다.

시트 셀에서 메뉴가 생성된 경우 this.Owner.Sheet, this.Owner.Row, this.Owner.Col로 메뉴가 생성된 시트, 행, 열이 접근가능합니다.


#### OnChanged
수정이 가능한 형태의 아이템(Bool, Enum, Edit 속성 사용)에서 변경사항이 있을시 발생합니다. (변경사항 적용되기전 발생)

아이템은 Owner(Menu)라는 프로퍼티를 통해 해당 아이템을 가지고 있는 전체 메뉴를 접근 가능합니다.

이벤트 안에서 클릭한 아이템(MenuItem)은 this로(아이템 Name의 경우 this.Name으로 접근하고, 원래의 값은 this.Value로 접근)바인딩됩니다.

this.Owner를 통해 해당 아이템을 가지고 있는 전체 메뉴 객체에 접근 가능하며 부모 아이템이나 메뉴는 this.Parent로 접근 가능합니다.

시트 셀에서 메뉴가 생성된 경우 this.Owner.Sheet, this.Owner.Row, this.Owner.Col로 메뉴가 생성된 시트, 행, 열이 접근가능합니다.

값이 설정되기 위해 반드시 Value를 리턴해야 하며 변경사항을 무시하기 위해선 this.Value를 리턴해야합니다.

---

## Example
```js
{
  Menu:{
    Buttons:["Ok","Cancel"],
    Items:[
      {
      Menu:1,
      Name:"과일",
        Items:[
          {Name:"과일이름",Caption:1},
          {Name:"사과",Bool:1},
          {Name:"배",Bool:1},
          {Name:"오렌지",Bool:1}
        ]
      },
      {
        Enum:1,
        Name:"채소",
        Items:[
          {Name:"당근"},
          {Name:"오이"},
          {Name:"가지"},
          {Name:"토마토"}
        ]
      },
      {
        Level:1,
        Expanded:1,
        Default:{OnClick:ItemClickHandler},
        Name:"나물",
        Items:[
          {Name:"도라지"},
          {Name:"더덕"},
          {Name:"미나리"}
        ]
      }
    ],
    OnButton:function(button){
      if(button == "Cancel"){
        if(!confirm("정말로 취소하시겠습니까?")){
          return false;
        }
      }
    }
  }
}
```   
![Menu](/assets/imgs/menu.png "Menu")
<!-- IMAGE: 스크린샷/예시 이미지 - Menu -->


### Read More
- [Menu row](/docs/props/row/menu)
- [EnumMenu col](/docs/props/col/enum-menu)
- [Menu col](/docs/props/col/menu)
- [EnumMenu row](/docs/props/row/enum-menu)
- [Menu cell](/docs/props/cell/menu)
- [onSelectMenu event](/docs/events/on-select-menu)
- [onShowMenu event](/docs/events/on-show-menu)
- [showMenu static](/docs/static/show-menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
