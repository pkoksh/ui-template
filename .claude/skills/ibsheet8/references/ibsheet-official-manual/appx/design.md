---
KEY: design
KIND: appendix
PATH: appx/design
ALIAS: 디자인, 변경, 적용하기, 기본, 테마는
ALIAS_EN: design, change, modify
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/design
---
# !css 디자인 변경/적용하기 ***(appendix)***
> ibsheet의 기본 테마는 짙은 남색과 푸른 톤의 색상으로 /default/main.css파일을 통해 자동 설정 됩니다.

> 하지만 이러한 테마는 함수나 속성을 통해 다른 css파일을 사용하시거나, css파일의 내용을 수정함으로써 다양한 디자인을 부여하실 수 있습니다.

> ibsheet에서 제공하는 테마 이외에도 (assets/ibsheet/css) 폴더 아래에 사용자가 원하는 css파일을 생성하여 사용할 수 있습니다. 

> 아래에 ibsheet에서 제공하는 기본 테마 유형 5가지와 시트 내에 부위별 css 클래스에 대해 알아봅니다.

## 1. 기본제공 되는 테마 5가지

ibsheet는 5가지 테마를 제공하고 있습니다.


### 테마
- 기본테마<`IB`> (/css/default/main.css)

![default](/assets/imgs/defaultTheme.png "기본테마")
<!-- IMAGE: 스크린샷/예시 이미지 - default -->

- Grace 테마<`IBGR`> (/css/grace/main.css)

![Grace](/assets/imgs/graceTheme.png "Grace")
<!-- IMAGE: 스크린샷/예시 이미지 - Grace -->

- Material 테마<`IBMR`> (/css/material/main.css)

![Material](/assets/imgs/materialTheme.png "Material")
<!-- IMAGE: 스크린샷/예시 이미지 - Material -->

- Mint 테마<`IBMT`> (/css/mint/main.css)

![Mint](/assets/imgs/mintTheme.png "Mint")
<!-- IMAGE: 스크린샷/예시 이미지 - Mint -->

- Simple 테마<`IBSP`> (/css/simple/main.css)

![Simple](/assets/imgs/simpleTheme.png "Simple")
<!-- IMAGE: 스크린샷/예시 이미지 - Simple -->


## 2. 테마 파일의 이해

ibsheet의 각 클래스 명은 `테마별 prefix` + `실제 클래스 명`의 구조로 이루어집니다.

가령 /css/default/main.css 파일을 텍스트 편집기로 열어보면 `.IBHeaderRowHeight` 나 `.IBColorHoveredCell` 식의 클래스가 있는데, 이것을 보아 default 테마의 prefix는 **`IB`** 이고 뒤에 **`HeaderRowHeight`** 나 **`ColorHoveredCell`** 등의 실제 각 부위에 대한 클래스 명칭임을 알 수 있습니다.

grace테마에 해당하는 /css/grace/main.css 파일을 열어보면 `.IBGRClassFocusedCell` 이나 `.IBGREditInput` 클래스가 있는데, grace테마의 prefix는 **`IBGR`** 임을 알수 있습니다.


[/css/default/main.css 예]

```css
.IBMain{font-family:'Noto Sans CJK kr','Noto Sans KR','Noto Sans','Verdana','Malgun Gothic','Nanum Gothic',sans-serif;font-style:normal;font-weight:normal;font-variant:normal}
.IBMain *{font-family:inherit;font-style:inherit;font-weight:inherit;font-variant:inherit;text-overflow:ellipsis;word-wrap:normal;word-break:normal}
.IBMain,.IBMain *{font-size:13px;line-height:18px}
.IBWide,.IBWide *{font-size:15px;line-height:20px}
.IBGiant,.IBGiant *{font-size:21px;line-height:24px}
.IBHigh,.IBHigh *{font-size:21px;line-height:22px}
...
```

[/css/grace/main.css 예]

```css
.IBGRMain{font-family:'Noto Sans CJK kr','Noto Sans KR','Noto Sans','Verdana','Malgun Gothic','Nanum Gothic',sans-serif;font-style:normal;font-weight:normal;font-variant:normal}
.IBGRMain *{font-family:inherit;font-style:inherit;font-weight:inherit;font-variant:inherit;text-overflow:ellipsis;word-wrap:normal;word-break:normal}
.IBGRMain,.IBGRMain *{font-size:13px;line-height:18px}
.IBGRWide,.IBGRWide *{font-size:15px;line-height:20px}
.IBGRGiant,.IBGRGiant *{font-size:21px;line-height:24px}
.IBGRHigh,.IBGRHigh *{font-size:21px;line-height:22px}
...
```

***ibsheet에서 테마를 설정할때는 해당 테마의 <mark>prefix</mark>가 무엇인지 알아야합니다.***

## 3. 테마 변경 방법
기본테마 대신 다른 테마 파일을 사용하는 방법에는 두 가지 방법이 있습니다.

### 정적 테마 변경
시트 생성시점에서 default 대신에 미리 지정한 테마를 사용하게 끔 설정하는 방법입니다.

주로 공통 속성을 설정하는 [CommonOptions](/docs/static/common-options)에서 [Style](/docs/props/cfg/style) 속성을 통해 설정하게 됩니다.

ex)
```html
<!--//설정할 theme에 해당하는 css 파일이 link테그를 통해 화면에 추가되어 있어야 합니다. -->
<link rel="stylesheet" type="text/css" href="../ibsheet/css/default/main.css">
<link rel="stylesheet" type="text/css" href="../ibsheet/css/mint/main.css">
<link rel="stylesheet" type="text/css" href="../ibsheet/css/simple/main.css">
<script>
IBSheet.CommonOptions = {
    Cfg: {
        //사용할 css파일의 prefix 명
        Style: "IBMT", //mint테마
    }
    ...
}
</script>
```

### 동적 테마 변경
이미 시트가 생성된 상태(`default` 테마가 적용된)에서 다른 테마로 교체하는 방법입니다.

```javascript
// prefix , css파일 경로 ,  즉시반영여부
sheet.setTheme("IBMT", "../assets/ibsheet/css/mint/main.css",1)
```

## 4. 시트 부위별 class 명
다음은 각 부분을 수정하기 위핸 클래스명 입니다.(`default` 테마 기준)

***전체영역***

|클래스명|역할|
|---|---|
|`.IBMain`|전체 폰트 사이즈,유형(family)  
**개별설정이 없으면 이 설정을 상속받음**|
|`.IBType`|전체 셀의 padding  
**개별 설정이 없으면 이 설정을 상속받음**|

***헤더영역***

|클래스명|역할|
|---|---|
|`.IBHeaderRowHeight`|헤더 행의 높이|
|`.IBCellHeader`|헤더 행의 배경색,border 색(border가 없는 경우 `.IBCellBase`설정을 상속)|
|`.IBHeaderText`|헤더 행의 font(글자색,사이즈, 유형)|
|`.IBColorHoveredCellHeader`|헤더 셀 Hover시 색상|

***데이터영역***

|클래스명|역할|
|---|---|
|`.IBRowHeight`|데이터 행 높이|
|`.IBCellBase`|데이터 셀 border|
|`.IBHoverRowBackground`|데이터 행 Hover 시 배경 색상|
|`.IBHoverRowBorder`|데이터 행 Hover 시 border 색상|
|`.IBColorHoveredCell`|데이터 셀 Hover 시 배경 색상|
|`.IBHoverCellBorder`|데이터 셀 Hover 시 border 색상|
|`.IBFocusRowBackground`|데이터 행 focus 시 배경 색상|
|`.IBFocusRowBorder`|데이터 행 focus 시 border 색상|
|`.IBColorFocusedCell`|데이터 셀 focus 시 배경 색상|
|`.IBFocusCellBorder`|데이터 셀 focus 시 border 색상|
|`.IBColorSelected`|데이터 셀 select 시 배경 색상|
|`.IBColorReadOnly`|편집 불가능한 셀의 배경색|
|`.IBEditCellBorder`|편집 input 객체 border|
|`.IBColorDefault`|기본 행의 배경색|
|`.IBColorAlternate`|짝수 행의 배경색 *(cfg)[Alternate](/docs/props/cfg/alternate) 속성에 영향을 받음*|

**기타 영역**

|클래스명|역할|
|---|---|
|`.IBInfoRow`|건수정보 표시행 **InfoRow**|
|`.IBFormulaRow`|합계행|
|`.IBNoDataRow`|NoData 행 *"조회된 데이터가 없습니다" 표시행*|
|`.IBHeadRow`|상단 고정행 *(row)Color나 (row)TextColor 속성을 통해 설정할 것을 권함*|
|`.IBFootRow`|하단 고정행 (FormulaRow 포함) *(row)Color나 (row)TextColor 속성을 통해 설정할 것을 권함*|
|`.IBDialogButton, u.IBSheetButton`|버튼 타입 설정시 button 디자인
 <!-- **개별 버튼 디자인을 설정하려면 (col)[ButtonClass](/docs/props/col/button-class)내용을 참고** -->|
|`.IBTipMain,.IBTipBody`|풍선도움말 (툴팁)|
|`.IBHintMain,.IBHintOuter`|힌트|
|`.IBMessage`|메세지 **[shoMessage()](/docs/funcs/core/show-message),[showMessageTime()](/docs/funcs/core/show-message-time)을 통해 보여지는 메세지 상자**|
|`.IBEnumMenuList`|드롭 다운 리스트(Enum타입)의 item 크기 (main.css에 없을 경우 추가하여 사용)|
|`.IBEnumMenuListText`|드롭 다운 리스트(Enum타입)의 item font설정 (main.css에 없을 경우 추가하여 사용)|

**각종 icon**

|클래스명|역할|
|---|---|
|`.IBSort1Right,.IBSort2Right,.IBSort3Right`|정렬 icon|
|`.IBDateRight`|달력 icon|
|`.IBEnumLeft, .IBEnumRight, .IBEnumTop, .IBEnumBottom`|Enum icon|
|`.IBBool0,IBBool1,IBBool0RO,IBBool1RO`|체크박스 icon
*순서대로 [편집가능 언체크, 편집가능 체크, 편집불가능 언체크, 편집불가능 체크]*|
|`.IBBool2,.IBBool3,IBBool2RO,.IBBool3RO`|라디오 icon
*순서대로 [편집가능 언체크, 편집가능 체크, 편집불가능 언체크, 편집불가능 체크]*|

***페이지네비게이션***

|클래스명|역할|
|---|---|
|`.IBToolPagerFirst, .IBToolPagerFirst1`|첫번째 페이지로 이동 버튼|
|`.IBToolPagerPrev, .IBToolPagerPrev1`|이전 페이지로 이동 버튼|
|`.IBToolPagerNext, .IBToolPagerNext1`|다음 페이지로 이동 버튼|
|`.IBToolPagerLast, .IBToolPagerLast1`|마지막 페이지로 이동 버튼|
|`.IBPagerEdit > div`|현재 페이지 표시 객체|


## 5. Size 속성에 따른 className
간혹 기본적인 시트의 크기(글자,행의 높이 등)를 늘리거나 줄이고 싶은 경우가 있습니다.

가령 좁은화면에서 많은 내용을 보기 위해 글자의 크기나, 행의 높이를 줄이거나, 혹은 시인성을 높이기 위해 이러한 것을 기존값보다 늘리고자 하는 경우인데 이럴 때 [Size](/docs/props/cfg/size) 속성을 사용하게 됩니다.

[Size](/docs/props/cfg/size) 속성은 기본값(Normal) 보다 더 크게하는 High,Big 이나 더 작게하는 Low,Small 등이 값을 설정하게 되는데,이러한 속성 값에 대응하기 위해 css 파일에도 별도로 클래스를 두고 있습니다.

아래는 simple 테마 main.css 파일 내용 일부입니다.

```css
.IBSPRowHeight{height:30px}   /* 기본행의 높이 */
.IBSPHigh .IBSPRowHeight{height:40px}  /* Size가 High인 경우 행의 높이 */
.IBSPBig .IBSPRowHeight{height:50px}   /* Size가 Big인 경우 행의 높이 */
.IBSPLow .IBSPRowHeight{height:27px}   /* Size가 Low인 경우 행의 높이 */
.IBSPSmall .IBSPRowHeight{height:22px} /* Size가 Small인 경우 행의 높이 */
```

## 6. 트리 디자인 변경하기
IBSheet는 브라우저 확대/축소에 대응하기 위해 아이콘 이미지를 모두 base64의 svg 형태로 제공하고 있습니다.

따라서 트리의 노드 아이콘, 연결선등의 디자인을 변경하고자 하시는 경우에는 css파일에서 해당 svg 문자열을 찾아 모두 변경하셔야 합니다. 

트리를 구성하는 각 svg 문자열은 아래와 같습니다.

|이미지|설명|base64 코드|
|---|---|---|
||가로연결선|<div style='width:900px;word-break:break-all'>data:image/svg+xml;base64,<BASE64_OMITTED length=212 preview=PHN2ZyB4bWxucz0iaHR0...></div>|
||세로연결선|<div style='width:900px;word-break:break-all'>data:image/svg+xml;base64,<BASE64_OMITTED length=212 preview=PHN2ZyB4bWxucz0iaHR0...></div>|
|![접힌상태](/assets/imgs/treeIconPlus.png "접힌상태")
<!-- IMAGE: 아이콘 이미지 - 접힌상태 -->|접힘 아이콘([NoTreeLines](/docs/props/cfg/no-tree-lines):0)|<div style='width:900px;word-break:break-all'>data:image/svg+xml;base64,<BASE64_OMITTED length=436 preview=PHN2ZyB4bWxucz0iaHR0...></div>|
|![펼친상태](/assets/imgs/treeIconMinus.png "펼친상태")
<!-- IMAGE: 아이콘 이미지 - 펼친상태 -->|펼침 아이콘([NoTreeLines](/docs/props/cfg/no-tree-lines):0)|<div style='width:900px;word-break:break-all'>data:image/svg+xml;base64,<BASE64_OMITTED length=368 preview=PHN2ZyB4bWxucz0iaHR0...></div>|
|![불가](/assets/imgs/treeIconX.png "불가")
<!-- IMAGE: 아이콘 이미지 - 불가 -->|드래그 드롭 불가|<div style='width:900px;word-break:break-all'>data:image/svg+xml;base64,<BASE64_OMITTED length=276 preview=PHN2ZyB4bWxucz0iaHR0...></div>|
|![위로삽입](/assets/imgs/treeIconAbove.png "위로삽입")
<!-- IMAGE: 아이콘 이미지 - 위로삽입 -->|드래그 드롭시 위로 삽입|<div style='width:900px;word-break:break-all'>data:image/svg+xml;base64,<BASE64_OMITTED length=300 preview=PHN2ZyB4bWxucz0iaHR0...></div>|
|![자식으로](/assets/imgs/treeIconRight.png "자식으로")
<!-- IMAGE: 아이콘 이미지 - 자식으로 -->|드래그 드롭시 자식으로 삽입|<div style='width:900px;word-break:break-all'>data:image/svg+xml;base64,<BASE64_OMITTED length=280 preview=PHN2ZyB4bWxucz0iaHR0...></div>|
|![아래로삽입](/assets/imgs/treeIconBelow.png "아래로삽입")
<!-- IMAGE: 아이콘 이미지 - 아래로삽입 -->|드래그 드롭시 아래로 삽입|<div style='width:900px;word-break:break-all'>data:image/svg+xml;base64,<BASE64_OMITTED length=320 preview=PHN2ZyB4bWxucz0iaHR0...></div>|
|![접힌상태](/assets/imgs/treeIconFold.png "접힌상태")
<!-- IMAGE: 아이콘 이미지 - 접힌상태 -->|접힘 아이콘([NoTreeLines](/docs/props/cfg/no-tree-lines):1)|<div style='width:900px;word-break:break-all'>data:image/svg+xml;base64,<BASE64_OMITTED length=268 preview=PHN2ZyB4bWxucz0iaHR0...></div>|
|![펼친상태](/assets/imgs/treeIconExpand.png "펼친상태")
<!-- IMAGE: 아이콘 이미지 - 펼친상태 -->|펼침 아이콘([NoTreeLines](/docs/props/cfg/no-tree-lines):1)|<div style='width:900px;word-break:break-all'>data:image/svg+xml;base64,<BASE64_OMITTED length=268 preview=PHN2ZyB4bWxucz0iaHR0...></div>|

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
