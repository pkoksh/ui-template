---
KEY: format
KIND: appendix
PATH: appx/format
ALIAS: 데이터가, 화면에, 보여질, 형식을, 정의합니다
ALIAS_EN: format
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/format
---
# Format ***(appendix)***
> 데이터가 화면에 보여질 형식을 정의합니다.

> 가령 Type이 "Int"이고 Format이 "#,###원"인 경우, 실제값이 15000이라면 시트에는 **15,000원** 으로 표시됩니다.

> ***[타입](./type)별로 정의되는 구문이 다르며***, 실제 셀값은 변경되지 않습니다.(저장작업을 통해 서버로 전송시 실제 값(포맷이 적용되지 않은 값)이 전송됩니다.) 

>`"결과: #,###원"처럼 Format을 사용하며 ':' 등 특수문자를 사용하시는 경우 특수문자 앞에 '\\'를 붙여주셔야 합니다.`
---

## 1. 타입이 Text, Lines 인 경우

### 구분자로 연결된 문자열 형식으로 실제 값의 앞,뒤에 붙이고 싶은 문자를 설정하거나,원래 문자열 중 일부 글자를 다른 글자로 변경할수 있습니다. Object형식을 사용하는 경우에는 Key:Value 형식으로 실제 값과 그에 대해 보여질 값으로 설정 하실 수 있습니다.

**1) 구분자 활용 방식**
  * 첫문자를 구분자로 사용하여 구분된 설정 값들의 나열로 정의됩니다.

  * 구분자로 사용된 문자는 설정할 내용에 포함되선 안됩니다.

### Syntax
```javascript
// 구분자 활용 방식 '|'이 구분자
Format: "|LetterType|Prefix|Postfix|Search|Flags|Replace"
```

|Value|Description|
|---|---|
|LetterType|대소문자를 구분할지 여부 및 기타 설정
0 : 대소문자 구분 없음
1 : 영문을 소문자로 표현
2 : 영문을 대문자로 표현
3 : 각 지역 문자의 소문자 사용
4 : 각 지역 문자의 대문자 사용|
|Prefix|셀 값 앞에 붙일 문자열|
|Postfix|셀 값 뒤에 붙일 문자열|
|Search|정규 표현식으로 찾을 문자열로, Replace 구문에 있는 값으로 대체되어 보일 문자열|
|Flags|자바스크립트 정규식의 Flag(i,g,m 사용 가능)
*i : 대소문자 구분 안함, g : 처음부터 끝까지 모두 변경 , m : 줄넘김 포함 검색*|
|Replace|Search 구문으로 찾은 문자열을 대체할 문자열|

### Example
*열 설정*
```javascript
options.Cols = [
    {
        Name:"sTitle",
        Type:"Text",
        //셀의 값을 모두 대문자로 보여줍니다. 또한 앞에 '☜☜☜', 뒤에 '☞☞☞' 문자를 추가하고, 셀 값에 있는 "=" 문자열을 ":::" 로 대체합니다.
        Format:"|2|☜☜☜|☞☞☞|=|ig|:::"
    },
    ...
]
```
*조회 데이터*
```json
{"Data":[
    {... "sTitle":"붉은 악마=Red Devils", ...}
]}
```
*시트내에 보여지는 데이터*

![보여지는 데이터](/assets/imgs/textFormat2.png "보여지는 데이터")
<!-- IMAGE: 스크린샷/예시 이미지 - 보여지는 데이터 -->





**2) 객체 방식**
  * JSON 형태로 (문자열도 가능), 실제값과 화면에 보여질 문자열의 쌍으로 구성됩니다.
  * 영문자를 사용하는 경우 대소문자를 **반드시** 구분해야하며, 화면에 보여질 값에 HTML 코드를 사용할 수 있습니다.

### Syntax
```javascript
// 객체 방식
Format: "{'Key1':'Value1', 'Key2':'Value2', 'key3':'Value3' ... }"
```

**[구분자 활용 방식]**

|Value|Description|
|---|---|
|Key|셀의 실제 값(서버에서 조회되거나 저장시 서버로 전송됨)|
|Value|Data에 설정된 값을 대체할 문자열(화면에 보여질 문자)|

### Example
*열 설정*
```javascript
options.Cols = [
    {
        Name:"sCountry",
        Type:"Text",
        // 셀 값이 A인 경우 한국으로, B인 경우 일본으로, C인 경우 중국으로 대체되어 화면에 보입니다.
        Format:"{'A':'<b>한국</b>','B':'일본','C':'중국'}"
    }
    ...
]
```
*조회 데이터*
```json
{"Data":[
    {... "sCountry":"A", ...}
]}
```
*실제 보여지는 데이터*

![보여지는 데이터](/assets/imgs/textFormat4.png "보여지는 데이터")
<!-- IMAGE: 스크린샷/예시 이미지 - 보여지는 데이터 -->


***Text타입에서 주민등록번호나, 카드번호와 같이 숫자와 구분자로 연결된 형식의 Format을 적용하고자 하실 경우에는 [CustomFormat](/docs/props/col/custom-format)속성을 사용하세요.***









---
## 2. 타입이 Date 인 경우
* 예약어의 조합
  * y(년), M(월), d(일), H(시간), m(분), s(초)등의 예약어와 예약어를 제외한 문자를 조합해서 사용 가능합니다.
  * 포맷이 비어있는 경우 yyyy/MM/dd 형식을 기본값으로 사용합니다.
  * 년도는 yyyy(4자리 표현), yy(마지막 2자리 표현. 값이 2018이면 18, 2008이면 08로 표시), y(마지막 1~2자리 표현. 값이 2018이면 18, 2008이면 8로 표시)가 사용가능합니다.
  * 나머지 예약어는 2자리 표현과 1,2자리 표현을 사용할 수 있습니다. 예를 들어 월의 경우 MM(2자리 표현. 값이 12이면 12, 08이면 08로 표시), M(1~2자리 표현. 값이 12이면 12, 08이면 8로 표시)이 사용 가능합니다.

<!--!
  * `[비공개 설명]` H는 24시간제를, h는 12시간제를 의미합니다.
!-->
<!--!
* 메시지 파일에 따른 자동 포맷 설정 기능 
  * d, h 등의 한 자리 예약어를 사용해서 메시지 파일에 따라 자동적으로 컬럼 포맷을 설정하도록 처리하실 수 있습니다. 


|Value|Description|
|---|---|
|m|월, 일 데이터를 포함해서 포맷 형성("M/d")|
|d|년, 월, 일 데이터를 포함해서 포맷 형성("M/d/yyyy")|
|h|년, 월, 일, 시, 분 데이터를 포함해서 포맷 형성("M/d/yyyy H:mm")|
|t|시, 분 데이터를 포함해서 포맷 형성("H:mm")|
|T|시, 분, 초 데이터를 포함해서 포맷 형성("H:mm:ss")|
|Y|년, 월 데이터에 문자 포함해서 포맷 형성("4월 2013")|
|D|년, 월, 일 데이터에 문자 포함해서 포맷 형성("23일 4월 2013")|
|l|년, 월, 일 데이터에 문자 포함하고, 시, 분 데이터 덧붙여 포맷 형성("23일 4월 2013 9:10")|
|L|년, 월, 일 데이터에 문자 포함하고, 시, 분, 초 데이터 덧붙여 포맷 형성("23일 4월 2013 9:10:20")|
!-->
### Syntax
```javascript
    // 예약어의 조합
    Format: "yyyy.MM.dd"
```

### Example
*열 설정*
```javascript
    options.Cols = [
        {
            "Name" : "startDate",
            "Type" : "Date",
            "Format" : "yyyy.MM.dd",    //화면에 보이는 데이터의 형식
            "EditFormat" : "dd-MM-yyyy",//편집시 사용자에게 보여질 데이터 형식
            "DataFormat" : "yyyyMMdd"   //서버에서 데이터를 받거나 보낼때 데이터 형식
        }
        ...
    ]
```
*조회 데이터*
```json
{"Data":[
    {... "startDate":"20190725", ...} //2019년 7월 25일
]}
```
*실제 보여지는 데이터*

![보여지는 데이터](/assets/imgs/dateFormat1.png "보여지는 데이터")
<!-- IMAGE: 스크린샷/예시 이미지 - 보여지는 데이터 -->

*편집시 보여지는 데이터*

![편집시 보여지는 데이터](/assets/imgs/dateFormat2.png "편집시 보여지는 데이터")
<!-- IMAGE: 스크린샷/예시 이미지 - 편집시 보여지는 데이터 -->


***Date타입에서는 [DataFormat](/docs/props/col/data-format), [EditFormat](/docs/props/col/edit-format) 속성을 통해 서버에서 갖고올 데이터 형식이나 편집시 사용자에게 보여질 형식도 설정할 수 있습니다.***


***Date타입과 그에 따른 포맷들(Format,EditFormat,DateFormat)을 [Extend](/docs/props/col/extend) 속성을 통해 한번에 정의할 수 있습니다.***
*Extend:IB_Preset 사용 설정*
```javascript
    options.Cols = [
        {
            "Name" : "startDate",
            "Extend" : IB_Preset.YMD // Type, Format, EditFormat등이 미리 정의된 변수 사용
        }
        ...
    ]
```








---
## 3. 타입이 Int, Float 인 경우
* 예약어의 조합
  * "0" : 값이 없는 경우 0을 기본값으로 채웁니다.
  * "#" : 값이 있을때만 표현됩니다.
  * "%" : 값에 100을 곱한 값이 표현됩니다.

  %는 #또는 0과 같이 사용해야합니다. ex: "#,##0.##%"

  100을 곱한 계산값이 아닌 원래값의 뒤에 "%"기호만 추가하고자 하실 때는,`"#,###\\%"` 로 설정하시면 됩니다.

  위의 예약어와 예약어를 제외한 문자를 조합해서 사용 가능합니다. ex:"$ #,##0.00"

`;(세미콜론)`으로 구분해서 값이 양수, 음수, 0일 때에 따라 화면에 보일 형식을 다르게 설정할 수 있습니다.

<b>'_', 'e', '8', '?', '*' '@'에 해당하는 문자는 사용하시려면 반드시 문자 앞에 `"\\"`을 덧붙여주셔야 합니다. </b> 


  <mark>Type이 "Int"인 컬럼은 "#,##0", "Float"인 컬럼은 "#,##0.######"를 기본 포멧으로 갖습니다.</mark>

### Syntax
```javascript
    //;을 이용하여 양수,음수,0 일때의 포맷을 다르게 설정
    Format: "#,###원;외상 #,###원;-"
```

### Example
*열 설정*
```javascript
    options.Cols = [
        {
            Name:"sNum",
            Type:"Int",
            Format:"#,###만원"
            // Format:"플러스 #,###;마이너스 #,###;없음" // 100은 플러스100 -100은 마이너스100 0은 없음 으로 표시됩니다.
        }
        ...
    ]
```
*조회 데이터*
```json
{"Data":[
    {... "sNum":56200, ...}
]}
```
*실제 보여지는 데이터*

![보여지는 데이터](/assets/imgs/intFormat.png "보여지는 데이터")
<!-- IMAGE: 스크린샷/예시 이미지 - 보여지는 데이터 -->








---
## 4. 타입이 Html 인 경우
* JSON 형태로 (문자열도 가능), 실제값과 화면에 보여질 값의 쌍으로 구성됩니다. (위에 Text 타입의 객체 방식과 동일)

### Syntax

```javascript
    // 객체 방식
    Format: "{'Key1':'Value1', 'Key2':'Value2', 'key3':'Value3' ... }"
```

|Value|Description|
|---|---|
|Key|셀의 실제 값(서버에서 조회되거나 저장시 서버로 전송됨)|
|Value|Data에 설정된 값을 대체할 문자열(HTML 태그)|

### Example
```html
<style>
    .alertCircle{
        position:relative;left:30%;width:30px;height:25px;border-radius:50px;color:#FFFFFF;line-height:25px;font-size:12px
    }
</style>
<script>
options.Cols = [
    {

        Name:"ALERT",
        Type:"Html",
        Width:80,
        Format:{
                "0":"<div class='alertCircle' style='background-color:#009688;'>안전</div>"
                ,"1":"<div class='alertCircle' style='background-color:#ff9800;'>주의</div>"
                ,"2":"<div class='alertCircle' style='background-color:#db4437;'>위험</div>"
            },
    }
    ...
]
</script>
```
|조회된 데이터|실제 보여지는 데이터|
|---|---|
|![조회데이터](/assets/imgs/htmlFormat1.png "조회 된 데이터")
<!-- IMAGE: 스크린샷/예시 이미지 - 조회데이터 -->|![보여지는 데이터](/assets/imgs/htmlFormat2.png "보여지는 데이터")
<!-- IMAGE: 스크린샷/예시 이미지 - 보여지는 데이터 -->







---

## 5. 타입이 Link 인 경우

**1) 구분자 활용 방식**
  * 첫문자를 구분자로 사용하여 구분된 설정 값들의 나열로 정의됩니다.

  * 구분자로 사용된 문자는 설정할 내용에 포함되선 안됩니다.

### Syntax
```javascript
    // 구분자 활용 방식 '|'이 구분자
    Format: "|UrlPrefix|UrlPostfix|HtmlPrefix|HtmlPostfix"
```

|Value|Description|
|---|---|
|UrlPrefix|실제 링크 url의 앞에 추가될 문자열|
|UrlPostfix|실제 링크 url의 뒤에 추가될 문자열|
|HtmlPrefix|화면에 보일 링크 텍스트의 앞에 추가될 html 코드|
|HtmlPostfix|화면에 보일 링크 텍스트의 뒤에 추가될 html 코드|

### Example
```javascript
    options.Cols = [
        {
            Name:"sLink",
            Type:"Link",
            //1. anchor 태그의 앞에 URL
            //2. anchor 태그의 뒤 URL
            //3. anchor 태그 앞에 붙여질 text or html
            //4. anchor 태그 뒤에 붙여질 text or html
            Format:"|/EMS/gm1/board.do?contents=|&group=USER4"
            +"|<img src='./assets/imgs/hot.svg' style='width:20px;height:20px;'>"
            +"|<img src='./assets/imgs/new.jpg' style='width:20px;height:20px;'>"
        }
        ...
    ]
```
조회된 데이터 ([Link 타입에 대한 데이터 구조 참고](./type))
```json
{"Data":[
    {... "LinkData":"|487141|Best way to save and edit text data without a database|_self " ...}
]}
```
|실제 보여지는 데이터|link 된 내용|
|---|---|
|![보여지는 데이터](/assets/imgs/linkFormat1.png "보여지는 데이터")
<!-- IMAGE: 스크린샷/예시 이미지 - 보여지는 데이터 -->|![보여지는 데이터](/assets/imgs/linkFormat2.png "보여지는 데이터")
<!-- IMAGE: 스크린샷/예시 이미지 - 보여지는 데이터 -->|






**2) 객체 방식**
 * JSON 형태로 (문자열도 가능), 옵션과 추가할 문자열의 쌍으로 구성됩니다.

### Syntax

```javascript
    // 객체 방식
    Format: "{'UrlPrefix':'Value1', 'UrlPostfix':'Value2', 'HtmlPrefix':'Value3', 'HtmlPostfix':'Value4'}"
```

|Value|Description|
|---|---|
|UrlPrefix|실제 링크 url의 앞에 추가될 문자열|
|UrlPostfix|실제 링크 url의 뒤에 추가될 문자열|
|HtmlPrefix|화면에 보일 링크 텍스트의 앞에 추가될 html 코드|
|HtmlPostfix|화면에 보일 링크 텍스트의 뒤에 추가될 html 코드|

### Example
```javascript
    options.Cols = [
       {
           Name: "sLink",
           Type: "Link",
           Format: {
                    UrlPrefix:"/EMS/gm1/board.do?contents=",
                    UrlPostfix:"&group=USER4",
                    HtmlPrefix:"<img src='./assets/imgs/hot.svg' style='width:20px;height:20px;'>",
                    HtmlPostfix:"<img src='./assets/imgs/new.jpg' style='width:20px;height:20px;'>"
                },
        }
        ...
    ]
```
조회된 데이터 ([Link 타입에 대한 데이터 구조 참고](./type))
```json
{"Data":[
    {... "LinkData":"|487141|Best way to save and edit text data without a database|_self " ...}
]}
```
|실제 보여지는 데이터|link 된 내용|
|---|---|
|![보여지는 데이터](/assets/imgs/linkFormat1.png "보여지는 데이터")
<!-- IMAGE: 스크린샷/예시 이미지 - 보여지는 데이터 -->|![보여지는 데이터](/assets/imgs/linkFormat2.png "보여지는 데이터")
<!-- IMAGE: 스크린샷/예시 이미지 - 보여지는 데이터 -->|








---

## 6. 타입이 Img 인 경우
**1) 구분자 활용 방식**
  * 첫문자를 구분자로 사용하여 구분된 설정 값들의 나열로 정의됩니다.

  * 구분자로 사용된 문자는 설정할 내용에 포함되선 안됩니다.


### Syntax
```javascript
    // 구분자 활용 방식 '|'이 구분자
    Format: "|UrlPrefix|UrlPostfix|HtmlPrefix|HtmlPostfix|LinkPrefix|LinkPostfix"
```

|Value|Description|
|---|---|
|UrlPrefix|이미지의 src 속성 앞에 추가될 문자열|
|UrlPostfix|이미지의 src 속성 뒤에 추가될 문자열|
|HtmlPrefix|이미지 태그 앞에 추가될 html 코드|
|HtmlPostfix|이미지 태그 뒤에 추가될 html 코드|
|LinkPrefix|이미지 클릭시 이동할 링크 앞에 추가될 경로 URL|
|LinkPostfix|이미지 클릭시 이동할 링크 뒤에 추가될 경로 URL|

### Example
```javascript
    options.Cols = [
        {
            Name: "sImg",
            Type: "Img",
            //1. img 태그의 src 값의 앞에 추가될 경로
            //2. img 태그의 src 값의 뒤에 추가될 경로
            //3. img 태그 앞에 넣고 싶은 text나 html
            //4. img 태그 뒤에 넣고 싶은 text나 html
            //5. 이미지를 클릭시 연결될 URL의 앞에 추가될 경로
            //6. 이미지를 클릭시 연결될 URL의 뒤에 추가될 경로
            Format: "|http://ibsheet.com/demo/images/icons/|.jpg|<button cls='imgMBtn'>|</button>|/EMS/gm1/board.do?contents=|&group=USER4"
        }
        ...
    ]
```
([Image 타입에 대한 데이터 구조 참고](./type))





**2) 객체 방식**
 * JSON 형태로 (문자열도 가능), 옵션과 추가할 문자열의 쌍으로 구성됩니다.

### Syntax

```javascript
    // 객체 방식
    Format: "{'UrlPrefix':'Value1', 'UrlPostfix':'Value2', 'HtmlPrefix':'Value3', 'HtmlPostfix':'Value4', 'LinkPrefix':'Value5', 'LinkPostfix':'Value6'}"
```

|Value|Description|
|---|---|
|UrlPrefix|이미지의 src 속성 앞에 추가될 문자열|
|UrlPostfix|이미지의 src 속성 뒤에 추가될 문자열|
|HtmlPrefix|이미지 태그 앞에 추가될 html 코드|
|HtmlPostfix|이미지 태그 뒤에 추가될 html 코드|
|LinkPrefix|이미지 클릭시 이동할 링크 앞에 추가될 경로 URL|
|LinkPostfix|이미지 클릭시 이동할 링크 뒤에 추가될 경로 URL|

### Example
```javascript
    options.Cols = [
       {
           Name: "sImg",
           Type: "Img",
           Format: { 
                    UrlPrefix: "http://ibsheet.com/demo/images/icons/", 
                    UrlPostfix: ".jpg",
                    HtmlPrefix: "<button cls='imgMBtn'>", 
                    HtmlPostfix: "</button>",
                    LinkPrefix: "/EMS/gm1/board.do?contents=",
                    LinkPostfix: "&group=USER4"
           }
        }
        ...
    ]
```


### Read More
- [Type appendix](./type)
- [CustomFormat col](/docs/props/col/custom-format)
- [DataFormat col](/docs/props/col/data-format)
- [EditFormat col](/docs/props/col/edit-format)
- [Format col](/docs/props/col/format)
- [CustomFormat cell](/docs/props/cell/custom-format)
- [DataFormat cell](/docs/props/cell/data-format)
- [EditFormat cell](/docs/props/cell/edit-format)
- [Format cell](/docs/props/cell/format)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
