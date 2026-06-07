---
KEY: position
KIND: appendix
PATH: appx/position
ALIAS: 달력, 이나, 컨텍스트, 메뉴, 다이얼로그
ALIAS_EN: position, dialog, modal, popup
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/position
---
# Position  ***(appendix)***
> [달력](/docs/static/show-calendar)이나 [컨텍스트 메뉴](/docs/static/show-menu),[다이얼로그](/docs/static/show-dialog) 같이 독립적으로 오픈할 수 있는 객체에 대해서 생성 위치를 설정합니다.

### Parameters
|Name|Type|Description|
|---|---|---|
|X|`number`|화면의 최 좌측을 기준으로 가로방향 픽셀단위 위치 설정(css left와 비슷)|
|Y|`number`|화면의 최 상단을 기준으로 세로방향 픽셀단위 위치 설정(css top와 비슷)|
|Mouse|`boolean`|마우스 커서의 위치를 기준으로 생성할지 여부.
이 속성을 사용시 X,Y는 마우스 커서의 위치를 기준으로 계산됩니다.|
|Tag|`string`|달력이나 다이얼로그를 위치시키고자 하는 html 객체의 id를 설정
ex : \<div id='calDiv'>\</div>
var pos = {Tag:"calDiv"};|
|Width|`number`|다이얼로그가 표시될 수 있는 영역 너비(X를 기준으로 한 우측방향)|
|Height|`number`|다이얼로그가 표시될 수 있는 영역 높이(Y를 기준으로 한 아래방향)|
|Align|`string`|Width,Height 속성을 통한 영역을 기준으로 수평,수직 정렬 (수평정렬값,수직정렬값 식으로 문자열로 설정)
**수평정렬값**<ul><li>*prev* : left의 바깥쪽. 다이얼로그가 스크린을 벗어나면 자동으로 next로 변경됩니다.</li><li>*next* : right의 바깥쪽. 다이얼로그가 스크린을 벗어나면 자동으로 prev로 변경됩니다.</li><li>*left* : 영역 내의 왼쪽으로 정렬. 다이얼로그가 스크린을 벗어나면 자동으로 right으로 변경됩니다.</li><li>*right* : 영역 내의 오른쪽으로 정렬. 다이얼로그가 스크린을 벗어나면 자동으로 left으로 변경됩니다.</li><li>*center* : 영역 내의 가운데로 정렬. 다이얼로그가 스크린을 벗어나면 자동으로 수평으로 이동합니다.</li></ul>
**수직정렬값**<ul><li>*above* : top의 바깥쪽. 다이얼로그가 스크린을 벗어나면 자동으로 below로 변경됩니다.</li><li>*below* : bottom의 바깥쪽. 다이얼로그가 스크린을 벗어나면 자동으로 top로 변경됩니다.</li><li>*top* : 영역 내의 위쪽 정렬. 다이얼로그가 스크린을 벗어나면 자동으로 bottom으로 변경됩니다.</li><li>*bottom* : 영역 내의 아래쪽 정렬. 다이얼로그가 스크린을 벗어나면 자동으로 top으로 변경됩니다.</li><li>*middle* : 영역 내의 가운데 정렬. 다이얼로그가 스크린을 벗어나면 자동으로 수직으로 이동합니다.</li></ul>
default : "right,below" |
|Move|`boolean`|창의 크기가 변경되는 경우 상대적인 위치로 달력이나 다이얼로그의 위치를 자동으로 옮길지 여부|
|Resize|`boolean`|창의 크기가 변경되는 경우 다이얼로그의 크기도 자동으로 변경할 지 여부|
|Realign|`boolean`|창의 크기가 변경되는 경우 Align으로 설정한 위치도 자동으로 맞출지 여부|


### Example
```javascript
//화면 좌측 상단으로 기준으로 오른쪽으로 100px, 아래로 200px 이동한 위치에 생성
var pos = {X:100 , Y:200};

//마우스 커서가 있는 위치에 생성
var pos = {Mouse: true};

//특정 html element가 있는 위치 하단에 생성
var pos = {Tag:"opCalBtn"};
```

### Read More
- [showCalendar static](/docs/static/show-calendar)
- [showMenu static](/docs/static/show-menu)
- [showDialog static](/docs/static/show-dialog)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
