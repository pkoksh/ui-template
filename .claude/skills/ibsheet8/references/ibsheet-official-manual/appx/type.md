---
KEY: type
KIND: appendix
PATH: appx/type
ALIAS: 열의, 종류를, 정의합니다
ALIAS_EN: type
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/type
---
# Type  ***(appendix)***
> 각 열의 종류를 정의합니다.

### 열의 종류별 기능
|Type|Preview|Description|
|---|---|---|
|*Text*|![Text](/assets/imgs/typeText.png)
<!-- IMAGE: 스크린샷/예시 이미지 - Text -->|가장 일반적인 형태로 숫자,문자 구분없이 사용이 가능하면 데이터에 줄넘김 문자를 사용하더라도 한 행으로 보여집니다.|
|*Lines*|![Text](/assets/imgs/typeLines.png)
<!-- IMAGE: 스크린샷/예시 이미지 - Text -->|Text 타입과 마찬가지로 숫자,문자 구분없이 사용이 가능하며, 데이터에 줄넘김 문자(`\n` 또는 `\r\n`)를 포함시 행의 높이를 높여 보여줍니다.|
|*Int*|![Text](/assets/imgs/typeInt.png)
<!-- IMAGE: 스크린샷/예시 이미지 - Text -->|정수 유형으로 숫자 외에 "-" 기호만 허용 됩니다.
기본값은 0을 갖으며, ""(공백)을 기본값으로 설정하려면 Cols설정시에 CanEmpty:1를 설정해야 합니다.
 포맷에 따라 실제 값과 다르게 보여질 수 있습니다.
<mark>기본 Format:"#,##0"</mark>|
|*Float*|![Text](/assets/imgs/typeFloat.png)
<!-- IMAGE: 스크린샷/예시 이미지 - Text -->|실수 유형으로 숫자 외에 "-"와 "." 기호만 허용 됩니다.(","을 입력시 소수점 구분자로 처리)
기본값은 0을 갖으며, ""(공백)을 기본값으로 설정하려면 Cols설정시에 CanEmpty:1를 설정해야 합니다.
포맷에 따라 실제 값과 다르게 보여질 수 있습니다.
가령 5432.629라는 실제값을 같는 열에 포맷을  [Format](./format):"#,##0.00"으로 설정한 경우, 시트에는 5,432.63 으로 보여지게 됩니다.
<mark>기본 Format:"#,##0.######"</mark>|
|*Date*|![Text](/assets/imgs/typeDate.png)
<!-- IMAGE: 스크린샷/예시 이미지 - Text -->|날짜 유형으로 달력팝업이나 직접 입력을 통해 날짜를 수정할 수 있습니다.
제품 내부적으로는 new Date().getTime() 형식의 타임스탬프 숫자 값으로 관리됩니다.
이로 인해([DataFormat](/docs/props/col/data-format))을 설정하지 않은 경우, 2019-07-25와 같은 날짜 문자열이 아니라 1563980400000과 같은 타임스탬프 숫자 값으로 추출됩니다.
"Type":"Date" 일경우 반드시 `DataFormat`를 설정해야 합니다.

[EditFormat](/docs/props/col/edit-format),[Format](/docs/props/col/format)을 통해 데이터 로드시 형식과 편집시 형식, 보여질 형식을 지정할 수 있습니다.|
|*Button*|![Text](/assets/imgs/typeButton.png)
<!-- IMAGE: 버튼 이미지 - Text -->|버튼을 보여주고 클릭시 이벤트(onClick)를 통해 기능을 정의하여 사용하실 수 있습니다.
별 다른 설정이 없는 경우에는 \<u\>태그를 통해 버튼을 생성합니다.
[Button](/docs/props/col/button)속성을 통해 직접적인 \<button\>태그를 사용한 버튼과 HTML형식의 버튼을 설정하실 수 있습니다.
`Button` 타입의 버튼 클릭 시 동작을 막고자 한다면 [Disabled](/docs/props/col/disabled) 속성을 통하여 제어 가능합니다.|
|*Link*|![Text](/assets/imgs/typeLink.png)
<!-- IMAGE: 스크린샷/예시 이미지 - Text -->|셀에 보이는 텍스트 클릭시 연결되는 URL 그리고 target을 설정하여 사용하실 수 있습니다.
텍스트는 [TextStyle](/docs/props/col/text-style), [TextColor](/docs/props/col/text-color)를 사용하여 스타일 변경이 가능합니다
데이터는 다음과 같은 순서로 구분자를 이용한 문자열로 입력하거나 조회 되어야 합니다.
**\|URL\|Text\|Target**
여기서 Target는 Link를 클릭시 이동할 target(_blank ,_parent ,_self ,_top ,특정 window명)이 됩니다. 
ex) "\|./pos/acceptCos.do\|조건확인\|_self "

 **데이터로 가져온 문자열의 가장 첫번째 문자가 구분자로 사용됩니다.**  |
|*Html*|![Text](/assets/imgs/typeHtml.png)
<!-- IMAGE: 스크린샷/예시 이미지 - Text -->|값으로 들어온 HTML태그를 별다른 변환없이 그대로 열에 보여줍니다
기본적으로 편집은 불가능하며, 엑셀 다운로드시에는 tag가 그대로 엑셀파일에 노출되기 때문에 주의가 필요합니다.|
|*Img*||열에 이미지를 표현하고 클릭시 지정한 URL로 링크를 설정하실 수 있습니다.
데이터는 다음과 같은 순서로 구분자를 이용한 문자열로 입력하거나 조회 되어야 합니다.
**\|URL\|Width\|Height\|Left\|Top\|LinkUrl\|Target\|Backgroud-size**
위에서 LinkUrl은 이미지를 사용자가 클릭시 연결할 URL경로를 의미하며, Target은 Link타입에서와 마찬가지로 a태그의 target을 의미합니다.
Width, Height, Left, Top은 각각 이미지의 너비, 높이, 원위치에서 왼쪽으로의 이동, 원위치에서 아래로의 이동을 의미합니다.(css sprites)
 Backgroud-size는 배경 이미지 크기를 의미합니다. 기본적으로 `background-size:100% 100%` 의 속성이 적용되며 css에서 사용하는 속성과 동일하게 사용하실 수 있습니다.
**데이터로 가져온 문자열의 가장 첫번째 문자가 구분자로 사용됩니다.** |
|*Enum*|![Text](/assets/imgs/typeEnum.png)
<!-- IMAGE: 스크린샷/예시 이미지 - Text -->|HTML의 select 태그와 유사하게 한 셀안에 여러개의 아이템을 리스트 형식으로 표현하는 타입 입니다.
 [Enum](/docs/props/col/enum)과 [EnumKeys](/docs/props/col/enum-keys) 속성으로 통해 보여질 아이템의 문자열과  값을 설정할 수 있습니다.
데이터는 EnumKeys에 정의한 값 중에 하나를 입력하거나 조회하시면 됩니다.|
|*Radio*|![Text](/assets/imgs/typeRadio.png)
<!-- IMAGE: 스크린샷/예시 이미지 - Text -->|HTML의 Radio와 유사하게 한 셀안에 여러개의 아이템을 Radio 형식으로 표현하는 타입 입니다.
 [Enum](/docs/props/col/enum)과 [EnumKeys](/docs/props/col/enum-keys) 속성으로 통해 보여질 문자열과 해당하는 값을 설정할 수 있습니다.
데이터는 EnumKeys에 정의한 값 중에 하나를 입력하거나 조회하시면 됩니다.|
|*Bool*|![Text](/assets/imgs/typeBool.png)
<!-- IMAGE: 스크린샷/예시 이미지 - Text -->![Text](/assets/imgs/typeBool2.png)
<!-- IMAGE: 스크린샷/예시 이미지 - Text -->|checkbox와 같이 내부적으로 0/1 혹은 false/true 두 종류의 값만 갖는 타입입니다.|
|*Pass*||password 형식으로 입력된 값을 보여주지 않고 글자수와 무관하게  ***로 보여줍니다.|
|*File*||파일을 선택해서 업로드 및 다운로드할 수 있는 기능을 제공합니다.
ie 9 이하에서는 사용 불가능 합니다.
`File` 타입의 좌우 버튼을 감추고자 한다면 [Disabled](/docs/props/col/disabled) 속성을 통하여 제어 가능합니다.|
|*Drag*||행을 드래그하기 위한 컬럼입니다. 드래그시 행이 드래그됩니다.|

### Read More
- [Button col](/docs/props/col/button)
- [EditFormat col](/docs/props/col/edit-format)
- [DataFormat col](/docs/props/col/data-format)
- [Enum col](/docs/props/col/enum)
- [EnumKeys col](/docs/props/col/enum-keys)
- [Type col](/docs/props/col/type)
- [Type cell](/docs/props/cell/type)
- [Format appendix](/docs/appx/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.5|기능 추가|
|core|8.1.0.88|Drag 타입 컬럼 추가|
