---
KEY: showCalendar
KIND: static-member
PATH: static/show-calendar
ALIAS: 열의, 타입을, 설정시, 사용할, 있는
ALIAS_EN: show, calendar
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/static/show-calendar
---
# showCalendar ***(static)***
> 열의 타입을 `Date`로 설정시 사용할 수 있는 달력 컨트롤을 시트 외부에 input객체 주변에서도 사용하실 수 있습니다.

> 달력 컨트롤이 제공하는 `API`와 `event`를 통해 다양한 기능을 사용하실 수 있습니다.


### Syntax
```javascript
object IBSheet.showCalendar(calOption, position, callback);
```


## 각 Parameter 기능

### **1. calOption(object)**

`calOption`을 통해 달력에 최초 날짜나 하단에 보여질 버튼, 여러날짜 선택 여부 등을 설정하실 수 있습니다.

|Name|Type|Description|
|---|---|---|
|Date|`mixed`( `string` \| `number` \| `date` )|최초 보여질 날짜를 의미. 
다음 3가지 형식으로 입력가능
1) 문자형으로 입력 (`Format`과 함께 사용)
2) 1970년 1월 1일을 기준으로 한 `timestamp` 숫자형 (ex: `new Date().getTime()` 과 동일한 숫자)
3) javascript `Date 객체` (ex: `new Date(년,월-1,일,시,분,초)` 와 같은 `Date`객체 ) |
|Format|`string`|문자형으로 `Date` 입력시 `Date`와 함께 사용하며, `Date`의 형식을 정의합니다. 
 `y(년), M(월), d(일), H(시간), m(분), s(초)`등의 예약어와 예약어를 제외한 문자를 조합해서 사용 가능합니다. 
 ex: `{Date: "2020-04-10", Format: "yyyy-MM-dd"}` |
|Range|`boolean`|달력 내에서 드래그를 통해 여러 날짜를 선택하게 할지 여부
`0(false)`:드래그 불가 (`default`)
`1(true)`:드래그 허용
!["드래그선택"](/assets/imgs/showCalendar1.png "드래그선택")
<!-- IMAGE: 스크린샷/예시 이미지 - "드래그선택" -->|
|TimeFormat|`string`|달력 하단에 `시, 분, 초` 값을 표시할 지 여부를 설정합니다. 'hh:mm'과 같이 설정해서 시, 분만 표시하거나 'hh:mm:ss'와 같이 설정해서 시, 분, 초를 모두 표시하실 수 있습니다. 
 `Range`를 설정하지 않은 년, 월, 일이 모두 표시되는 달력에서만 적용 가능하며, **'hh:mm', 'hh:mm:ss' 형식(혹은 hh, mm, ss 사이에 '/', '-' 등을 기입한 형식)** 으로만 설정하실 수 있습니다. 
 ex: `{Date: "2020-04-10", Format: "yyyy-MM-dd", TimeFormat: "hh:mm:ss"}` 
!["시분초"](/assets/imgs/showCalendar2.png "시분초")
<!-- IMAGE: 스크린샷/예시 이미지 - "시분초" -->|
|ReadOnly|`boolean`|달력을 볼 수만 있고 선택이 불가능하게 합니다.
`0(false)`:선택 불가
`1(true)`:선택 가능 (`default`)|
|Buttons|`number`|달력 하단에 보여질 버튼을 숫자로 설정합니다.
1 : 오늘(Today)
2 : 지우기(Clear)
4 : 선택(Ok)
8 : 어제(Yesterday)
'오늘' 버튼과 '선택' 버튼을 표시하고자 하는 경우 1+4 로 5를 넣으시면 됩니다.
!["달력버튼"](/assets/imgs/showCalendar3.png "달력버튼")
<!-- IMAGE: 버튼 이미지 - "달력버튼" -->
|Buttons2|`boolean`|년월 달력 형태의 하단에 선택 버튼을 표시할지 여부
`0(false)`:버튼 표시안함
`1(true)`:버튼 표시함 (`default`)
!["년월달력버튼"](/assets/imgs/showCalendar4.png "년월달력버튼")
<!-- IMAGE: 버튼 이미지 - "년월달력버튼" -->|
|RowsPrev|`number`|이전 월에 대해 몇 주 더 보기 기능
!["이전/다음 월보기"](/assets/imgs/showCalendar5.png "이전/다음 월보기")
<!-- IMAGE: 스크린샷/예시 이미지 - "이전/다음 월보기" -->
[RowsPrev:2, RowsNext:3 설정시 화면]|
|RowsNext|`number`|다음 월에 대해 몇 주 더 보기 기능|
|Texts|`object`|달력 버튼에 보여질 글자를 설정합니다.
설정을 안하면 영문(Today, Ok 등)으로 보여집니다.
ex: `{ Ok: "선택", Clear: "지우기", Today: "오늘",Yesterday:"어제"}`|
|Modal|`boolean`|달력을 모달 형태로 띄움
`0(false)`:모달로 띄움
`1(true)`:모달로 띄우지 않음 (`default`)|
|CloseOut|`boolean`|달력에서 마우스 커서가 빠져나가면 자동으로 닫힘 기능 사용 여부
`0(false)`:닫지 않음(`default`)
`1(true)`:닫음 |
|CloseTimeout|`number`|`CloseOut` 기능을 사용시 마우스 커서가 빠져나간 상태에서 몇초 후에 닫을지 설정.(ms단위, `default: 300ms`)|
|Weeks|`number`|달력에 주차 표현 여부 설정(`default: 0`)|
|Class|`string`|달력에 테마설정, `Class: css prefix("IB") + "Pick"`|
|ScrollUpdate|`boolean`|body 영역의 스크롤이 움직일 때 달력 창이 스크롤을 따라 움직일지 여부를 설정합니다.
`0(false)`:움직이지 않음(`default`)
`1(true)`:움직임|
|IgnoreSize|`boolean`|달력의 Size가 Cfg 설정의 `Size`와 별도로 동작 됩니다.
`0(false)`:`Size` 설정값과 동일하게 달력 적용(`default`)
`1(true)`:`Size`와 상관없이 항상 Size:"Normal"로 적용|
|StyleSize|`string`|달력의 Size를 적용합니다. [Size cfg](/docs/props/cfg/size) 와 동일한 옵션 값을 지정할 수 있습니다.|
|MsgLocale|`string`|달력에서 사용할 언어(메세지 파일) Language Prefix를 설정합니다. [MsgLocale cfg](/docs/props/cfg/msg-locale)과 동일한 옵션 값을 지정할 수 있습니다.|

### **2. position(object)**

position 속성을 통해 달력이 오픈되는 위치를 설정합니다.

(자세한 내용은 [Position appendix](/docs/appx/position)을 참고)


### **3. callback(function)**

달력에서 특정 일자를 클릭하거나 선택 버튼을 눌렀을때 발생하는 콜백함수를 설정합니다.

함수의 인자로 선택한 날자에 대한 ms 숫자값이 리턴됩니다.

`calOption`에서 `Range`속성을 통해 달력내에 여러 날짜를 선택시에는 "~"를 구분자로 ms숫자값이 리턴됩니다.

콜백 사용 예
```javascript
function callback(DD) {
    var format = "yyyy/MM/dd";
    var d_str = "";
    if (DD != "") {
        if (isNaN(DD)) {
            // Range를 통해 여러일자 선택시(1549206000000;1549551600000~1549897200000;1550070000000~1550761200000)
            var pd = DD.split(";");
            for (var i = 0; i < pd.length; i++) {
                if (pd[i].indexOf('~') > -1) {
                    var rdate = pd[i].split("~");
                    pd[i] = IBSheet.dateToString(parseInt(rdate[0]), format) + "~" + IBSheet.dateToString(parseInt(rdate[1]), format);
                } else pd[i] = IBSheet.dateToString(parseInt(pd[i]), format);
            }
            d_str = pd.join(";");

        } else {
            // 단일 일자 선택시 (1550156400000 숫자가 넘어옴)
            d_str = IBSheet.dateToString(DD, format);
        }
    }
    console.log(d_str);
}
IBSheet.showCalendar(null, {
    Mouse: 1
}, callback);
```

## Calendar 이벤트

달력 컨트롤을 생성하거나 생성된 달력에서 날짜를 선택하거나 버튼을 클릭하는 등의 이벤트가 발생했을 때에 대한 로직을 구성합니다.

이벤트는 위에 `calOption` 설정시 같이 설정합니다.

이벤트 사용 예
```javascript
var calOption = {
    Buttons: 1,
    OnCanEditDate: function (date) {
        //일자가 2019.01.20일 보다 작으면 선택 못하게 막음
        var sdate = new Date(2019, 0, 20, 0, 0, 0);
        if (date < sdate) {
            return false;
        } else {
            return true;
        }
    }
}
IBSheet.showCalendar(calOptions, {
    Mouse: 1
});
```
!["특정일자선택불가"](/assets/imgs/calCantSelect.png "특정일자선택불가")
<!-- IMAGE: 스크린샷/예시 이미지 - "특정일자선택불가" -->


|이벤트 명|호출시점|Parameter|return|
|---|---|---|---|
|`OnClose`|달력 컨트롤이 닫힐 때 발생|||
|`OnSave`|달력에서 특정 일자를 선택시 발생
`callback` 인자를 통해 함수를 연결하는 경우, 이 이벤트 기능을 대신하게 됩니다.|선택한 일자 ms|`0(false)`를 리턴시 선택을 취소|
|`OnChange`|`Range`속성을 사용하여 드래그로 여러 일자를 선택 시 발생|선택한 일자 ms|
|`OnCanEditDate`|달력 컨트롤이 오픈될 때 모든 일자에 대해 발생|javascript `Date 객체`|`0(false)`를 리턴시 해당 일자는 선택 불가능하게 표시됨|
|`OnGetCalendarDate`|달력 컨트롤이 오픈될 때 모든 일자에 대해 발생|1. **date** 일자에 대한 javascript `Date 객체`
2. **text** 화면에 표시될 일자
3. **classes** 각 일자별 적용될 css class 배열 [normal, hover, selected, selected+hover]
4. **range** 달력의 `Range` 속성을 사용하여 여러 일자가 선택되어 있는 경우 시작일과 마지막일 배열 [startdate,enddate], `Range`속성을 사용하지 않는 경우에는 `undefind` |해당 일자에 표시될 문자. 문자가 없는 경우 해당일자부분에 `undefined`가 표시됨.|
|`OnButtonClick`|달력 하단에 버튼을 클릭 시 발생|버튼의 종류에 따른 숫자값
`1 : OK, 2 : Cancel, 3 : Today, 4 : Yesterday`|리턴값으로 `Parameter`로 받은 버튼 숫자를 리턴, `0(false)`을 리턴시 클릭을 취소함|
|`OnClickWeek`|달력 주차 클릭 시 발생|1. **year** 클릭 한 주차의 년도 
 2. **week** 클릭 한 주차|


## 달력 컨트롤 닫기

사용자가 클릭을 통해 닫는 것이 아니라 외부함수를 통해 현재 열려있는 달력 컨트롤을 닫으려면 다음과 같이 합니다.
```javascript
var cal = IBSheet.showCalender(); //달력 컨트롤 생성
cal.Close(); //닫기
```


### Return Value
***object*** : 달력 객체


### Example
```html
<script>
function showCal(dateInputElement) {
    var dateInput = document.getElementById(dateInputElement);
    var calOption = {
        Date: dateInput.value
    };
    var position = {
        Mouse: 1
    };
    var callback = function (rtnDate) {
        var format = "yyyy/MM/dd";
        var d_str = "";
        if (rtnDate != "") {
            if (isNaN(rtnDate)) {
                // Range를 통해 여러일자 선택시(1549206000000;1549551600000~1549897200000;1550070000000~1550761200000)
                var pd = rtnDate.split(";");
                for (var i = 0; i < pd.length; i++) {
                    if (pd[i].indexOf('~') > -1) {
                        var rdate = pd[i].split("~");
                        pd[i] = IBSheet.dateToString(parseInt(rdate[0]), format) + "~" + IBSheet.dateToString(parseInt(rdate[1]), format);
                    } else pd[i] = IBSheet.dateToString(parseInt(pd[i]), format);
                }
                d_str = pd.join(";");

            } else {
                // 단일 일자 선택시 (1550156400000 숫자가 넘어옴)
                d_str = IBSheet.dateToString(rtnDate, format);
            }
        }
        dateInput.value = d_str;
    }
    //달력 오픈
    var calObj = IBSheet.showCalendar(calOption, position, callback);
}
</script>
<input type="text" id="startDate" value="2018-09-25"><img src="cal.gif" onclick="showCal('startDate')">
```


### Read More
[Position appendix](/docs/appx/position)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.34|ScrollUpdate 옵션 기본값 변경|
|core|8.1.0.88|`calOption`에 `IgnoreSize`, `StyleSize` 옵션 추가|
|core|8.1.0.89|`OnClickWeek` 이벤트 추가|