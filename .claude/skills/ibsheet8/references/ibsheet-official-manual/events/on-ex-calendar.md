---
KEY: onExCalendar
KIND: event
PATH: events/on-ex-calendar
ALIAS: 외부, 달력을, 제어할, 있는, 시트
ALIAS_EN: on, ex, calendar, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-ex-calendar
---
# onExcalendar ***(event)***

> 외부 달력을 제어할 수 있는 시트 이벤트를 발생시키도록 합니다.</br> 
> 시트의 `onScroll`, `onKeyDown`, `onAfterFilter`, `onClick` 이벤트 발생 시점에 해당 이벤트가 발생됩니다.</br>
> `onClickSide` 이벤트에서 외부 달력을 시트 셀 영역에 표시하고, 해당 이벤트에서 외부 달력을 제거할 수 있습니다.

### Syntax

```plaintext
    onExcalendar: function (paramObject) {

    }
or
    sheet.bind("onExcalendar" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|------|------|-------------|
| sheet | `object` | 이벤트가 발생한 시트 객체 |
| params | `object` | 전달되는 이벤트(`onScroll`, `onKeyDown`, `onAfterFilter`, `onClick`) 가 가지는 param 인자 |
| evType | `string` | 전달되는 이벤트(`onScroll`, `onKeyDown`, `onAfterFilter`, `onClick`) Name |
| eventName | `string` | 해당 이벤트 Name(`onExcalendar`) |



### Return

**_boolean_**

### Example

```javascript
// Cols 옵션에서 셀 영역에 외부 달력을 표시하는 예시 (dateRangePicker)
"Cols": [
  {
    "Header": "날짜-daterangepicker","Type": "Date","Name": "DateData","Width": 200,"Align": "Center","CanEdit": 1,"Format": "yyyy-MM-dd","EmptyValue": "날짜를 입력해주세요","DataFormat":"yyyyMMdd",
    "Button": "https://www.ibsheet.com/demo/js/lib/sheet/Main/calendar.png",
    OnClickSide: function (evtParam) {
      var eRow = evtParam.row;
      var eCol = evtParam.col;
      var DateCol = "DateData";
      var cellPos = evtParam.sheet.getCell(eRow, eCol).getBoundingClientRect();
      sheetPopCalendar(evtParam, cellPos, DateCol,true); //단일 달력
    }
  },
  {
    "Header": "예약 날짜(From~To)-daterangepicker","Type": "Date",
    "Name": "FromToData","Width": 250,"Align": "Center","CanEdit": 1,"Format": "yyyy-MM-dd","EmptyValue": "날짜를 입력해주세요","DataFormat":"yyyyMMdd",
    "Button": "https://www.ibsheet.com/demo/js/lib/sheet/Main/calendar.png", 
    "Range": 1, /*날짜를 범위나 여러개 선택 가능하게 설정*/
    OnClickSide: function (evtParam) {
      var eRow = evtParam.row;
      var eCol = evtParam.col;
      var DateCol = "FromToData"; 
      var cellPos = evtParam.sheet.getCell(eRow, eCol).getBoundingClientRect();
      sheetPopCalendar(evtParam, cellPos, DateCol);
    }
  }
]

options.Events = {
  // 외부 달력 이벤트 닫기 (onScroll, onKeyDown, onAfterFilter, onClick)
  onExcalendar : function (evtParam) {

    var isCal = false;
    var evtName = evtParam.evType;

    if (document.getElementsByClassName('daterangepicker ltr show-calendar opensright')[0] && document.getElementsByClassName('daterangepicker ltr show-calendar opensright')[0].style.display != 'none') isCal = true;

    switch (evtName) {
      case "onScroll":
        if (isCal) $('#CalendarInput').data('daterangepicker').remove();
        break;
      case "onAfterFilter":
        // 필터행 초기화인 경우
        if (evtParam.sheet.FCol == "FromData" && evtParam.sheet.FRow[evtParam.sheet.FCol] == '') {
          evtParam.sheet.doFilter("ToData",'');
          if (isCal) $('#CalendarInput').data('daterangepicker').remove();
        }
        break;
      case "onKeyDown": //esc키를 누를
        if (evtParam.params.name == "Esc" && isCal) $('#CalendarInput').data('daterangepicker').remove();
        break;
      case "onClick":
        console.log('onClick');
        break;
    }
  }
}

// onClickSide 이벤트에서 외부 달력을 표시하는 함수
function sheetPopCalendar (par, pos, DateCol, singleDatePicker, calHeight) {

  if (!par || !pos) return;

  // 달력이 표시될 시트 객체
  const sheet = par.sheet;
  
  //달력을 띄우기 위해서 input 객체를 하나 삽입
  if( $("#CalendarInput").length == 0 ) {
	
    // 속성 설정
    const inputElement = document.createElement("input");

    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("id", "CalendarInput");
    inputElement.setAttribute("tabindex", "-1"); //tab키를 눌러서 focus 이동시 숨겨진 달력 input에는 focus를 주지 않도록 설정정
    inputElement.setAttribute("style", "opacity: 0; position: absolute;");
    //inputElement.setAttribute("readonly", "true");

    //body에 달력을 띄우기 위한 input 추가
	  document.body.appendChild(inputElement);
  }

  const datepicker = $('#CalendarInput'); 
  
  const sheetDate = sheet.getValue(par.row, DateCol); //시트의 셀에 표시된 날짜값
  
  //시트 셀의 데이터를 달력 input에 설정
  datepicker.val(sheetDate); 
  
  //dom의 높이 및 공간 계산 후 달력 위치 결정
  const datepickerHeight = calHeight || 290;
  const datepickersingleDate = singleDatePicker || false;  // 달력의 높이(크기)
  const windowHeight = $(document).height();  // document의 height
  const spaceBelow = windowHeight - pos.bottom;

  const dropDirection = (spaceBelow > datepickerHeight) ? 'down' : 'up'; // 달력이 위로 펼쳐질지 아래로 펼쳐질지 계싼

  datepicker.daterangepicker({
    locale: {
      format: 'YYYY-MM-DD', // 날짜 형식
      separator: '~',      // 구분자를 ' ~ '로 설정 (From - To 사이)
      applyLabel: '적용', 
      cancelLabel: '취소', 
      fromLabel: '시작일', 
      toLabel: '종료일', 
      daysOfWeek: ['일', '월', '화', '수', '목', '금', '토'],
      monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
    },
    drops: dropDirection,
    singleDatePicker: datepickersingleDate, // 범위선택용 달력, 싱글 달력
    showDropdowns: true,     // 드롭다운 선택 가능
    autoUpdateInput: false,  // 자동 업데이트 방지 (사용자가 선택한 날짜만 표시)

  });

  //인풋의 위치를 시트의 row, col로 이동하고 input에 focus를 줘서 달력을 열리게 한다.
  let leftX = pos.x;
  if (par.row.Kind == "Filter"){ //필터행일경우 인풋의 위치를 좌측으로 이동, 필터연산자(같음, 같지않음등) 선택하기 위해서
    leftX += 30;
  }

  datepicker.css({
    position: 'absolute',
    top: `${pos.y+window.scrollY}px`,
    left: `${leftX}px`,
	  height:`${par.event.Height}px`,
	  borderTopStyle : "none",
	  borderBottomStyle : "none",
    width: '30px' 		// 너비를 적당히 설정
  }).show().focus(); 	

  // 날짜 범위 선택 후 적용 시 호출되는 콜백
  datepicker.on('apply.daterangepicker', function(ev, picker) {
    //시트에 값을 넣을때는 포멧 구분자를 제거 하고 넣는다.
    const startDate = picker.startDate.format('YYYYMMDD');
    const endDate = picker.endDate.format('YYYYMMDD');
    const dateRangeText = `${startDate} ~ ${endDate}`;
    const displayValue = picker.singleDatePicker ? startDate : dateRangeText

    // 인풋박스에 날짜 표시
    $(this).val(displayValue);
    
    // 필터행이면 필터 처리
    if (par.row.Kind === "Filter") {
      function filterOptions(data, excludeKey) {
        if (!Array.isArray(data) || data.length === 0) {
          return ["", "", ""];
        }
      
        const filtered = data.filter(item => item[0] !== excludeKey);
        const colNames = filtered.map(item => item[0]).join('|');
        const colValues = filtered.map(item => item[1]).join('|');
        const colTypes = filtered.map(item => item[2]).join('|');

        return [`|${colNames}|`, `|${colValues}|`, `|${colTypes}|`];

      }
      
      //날짜 컬럼 말고도 필터를 했다면 이어서 필터를 적용해야 한다.
      const [cols, values, operators]  = filterOptions(sheet.getFilter(0),DateCol);

      sheet.doFilter(
        `|${DateCol}${cols}`, 
        `|${displayValue}${values}`, 
        `|1${operators}`
      );
    }else{
      sheet.setValue(par.row, DateCol, displayValue);
    }  
  });

  //외부 달력을 닫기위해 필요한 이벤트(onScroll, onKeyDown, onAfterFilter, onClick)
  sheet.bind("onExcalendar" , function(evtParam) {
    let isCal = false;
    const evtName = evtParam.evType;
    const picker = $('#CalendarInput').data('daterangepicker');

    if (picker && picker.isShowing) { //달력이 떠 있는지 체크
      isCal = true;
    } 

    switch (evtName) {
      case "onScroll": //시트에서 스크롤시 달력을 닫는다.
        if (isCal) $('#CalendarInput').data('daterangepicker').remove();
        break;
      case "onKeyDown": //esc키를 누를때 달력을 닫는다.
        if (evtParam.params.name == "Esc" && isCal) $('#CalendarInput').data('daterangepicker').remove();
        break;
      case "onClick":
        // 시트 특정 영역 클릭시 달력을 닫고 싶을 때 로직 추가
        break;
    }
  });
}
```

### Read More


### Since

| product | version | desc |
|---------|---------|------|
| core | 8.3.0.5 | 기능 추가 |

