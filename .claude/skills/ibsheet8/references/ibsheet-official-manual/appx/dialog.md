---
KEY: dialog
KIND: appendix
PATH: appx/dialog
ALIAS: 지정한, 위치에, 레이어팝업, 형식의, 다이얼로그를
ALIAS_EN: dialog
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/dialog
---
# Dialog  ***(appendix)***
> 지정한 위치에 레이어팝업 형식의 다이얼로그를 생성합니다.

> 시트 안에서 다이얼로그 생성시 sheet.showDialog() 함수를 사용하고, 시트 외부에서는 IBSheet.showDialog() 를 통하여 사용하실 수 있습니다.

## 사용 가능한 속성
|Name|Type|Description|
|---|---|---|
|Head|`string`|다이얼로그 상단에 들어갈 타이틀|
|Foot|`string`|다이얼로그 하단에 들어갈 타이틀|
|Header|`string`|**시트의 특정 셀 위에 다이얼로그를 생성할 때 해당 셀이 다이얼로그의 헤더가 됩니다**.
이 속성은 해당 셀에 보여질 문자열(다이얼로그가 닫히면 자동으로 사라짐)을 설정합니다.
아래 속성 설명에서 헤더라 함은 모두 이 셀을 의미합니다.|
|HeadClose|`boolean`|Head가 설정되어 있을 때, 헤더 타이틀 우측편에 닫기 위한 X 버튼을 보여줄지 여부|
|CanFocus|`boolean`|다이얼로그 생성시 포커스를 갖게 할 것인지 여부|
|Modal|`boolean`|다이얼로그 생성시 화면에 다른 객체에 접근하지 못하게끔 합니다.|
|Body|`string`|다이얼로그 안에 구성할 HTML 내용을 설정합니다.|
|Wrap|`boolean`|다이얼로그 내부의 내용이 다이얼로그 너비보다 큰 경우 줄넘김 시킬지 여부를 설정합니다.|
|MaxHeight|`number`|헤더를 제외한 다이얼로그의 최대 높이를 설정합니다.
MaxHeight값보다 다이얼로그 내부의 내용이 크면 세로 스크롤바가 생성됩니다.|
|MinHeight|`number`|헤더를 제외한 다이얼로그의 최소 높이를 설정합니다.|
|MaxWidth|`number`|다이얼로그의 최대 너비
다이얼로그 안에 내용이 MaxWidth보다 크면 overflow-x:hidden으로 감춰집니다.
0으로 설정하면 다이얼로그 안에 셀의 너비에 맞게 자동으로 크기가 결정됩니다.|
|MinWidth|`number`|다이얼로그의 최소 너비
0으로 설정하면 다이얼로그 안에 셀의 너비에 맞게 자동으로 크기가 결정됩니다.|
|Area|`object`|다이얼로그를 브라우저 내에 특정 범위 안에서만 보여지게끔 합니다.
(지정한 영역을 넘어서 창크기를 조절하거나 다이얼로그의 위치를 이동할 수 없음)
영역은 X, Y (영역의 시작점)과 Width, Height(영역의 크기)로 설정합니다.
ex ) { X:100, Y:100, Width:400, Height:500 }|
|Position|`object`|다이얼로그의 생성 위치를 설정합니다.([Position appendix](/docs/appx/position)을 참고)|
|HeadDrag|`boolean`|다이얼로그의 헤드(헤더아님)를 드래그하여 다이얼로그의 위치를 변경할 지 여부를 설정합니다.|
|Shadow|`boolean`|다이얼로그에 우측아래로 그림자를 표현할 지 여부|
|ShadowHeader|`boolean`|다이얼로그 헤더의 우측아래로 그림자를 표현할 지 여부|
|CloseOut|`boolean`|마우스커서가 다이얼로그 밖으로 나가거나 다이얼로그 헤더 위로 가면 다이얼로그를 닫습니다.|
|CloseTimeout|`number`|다이얼로그에서 커서가 벗어났을 때 지정한 시간이 경과시 닫습니다(기본값 300, 밀리초 단위)|
|CloseClickHeader|`boolean`|다이얼로그 헤더를 클릭하면 다이얼로그를 닫습니다.|
|CloseAfter|`number`|다이얼로그가 오픈 된 이후 특정 시간 경과 후 자동으로 다이얼로그를 닫습니다.(밀리초 단위)|
|CloseClick|`boolean`|다이얼로그를 클릭시 다이얼로그를 닫습니다.|
|ZIndex|`number`|해당 다이얼로그가 갖게 될 z-index를 설정합니다.(default:258)|


## 다이얼로그 객체
showDialog()의 리턴 값이나 sheet.Dialog 를 통해 현재 생성된 다이얼로그에 접근할 수 있습니다.

이와 같은 Dialog 객체는 다음과 같은 속성과 함수를 갖습니다.

### Property
Tag : 다이얼로그안의 HTML객체를 갖고 있습니다.
```javascript
//Tag 사용 예
var dialogObj = IBSheet.showDialog(...);
var x = dialogObj.Tag.querySelector("#dlgInput").value;
```
### method
Close() : 선택한 다이얼로그 창을 닫습니다.
```javascript
//Close() 사용 예
dialogObj = sheet.Dialog; // 열려있는 Dialog 객체를 시트로 부터 얻음
dialogObj.Close(); // Dialog 객체를 닫음.
```

![dialog](/assets/imgs/dialog0.png "다이얼로그")
<!-- IMAGE: 스크린샷/예시 이미지 - dialog -->

[아래 Example  다이얼로그 사용 예]

### Example
```javascript
function openDlg() {
    var dialog = {
			Header: "계산 중",          // 다이얼로그를 오픈한 셀에 표시될 글자
			Head:"환율계산기",          // 다이얼로그 상단 타이틀
			Foot: "ibleaders co.,ltd",  // 다이얼로그 하단 타이틀
			MinWidth:0,                 // 다이얼로그 너비
			Body: "<div>"                // 다이얼로그 안 내용
				+ "<select id='inputUnit' onchange='calc()'>"
				+ "<option value='USD'>USD</option><option value='JPY'>JPY</option>"
				+ "<option value='EUR'>EUR</option><option value='CNY'>CNY</option>"
				+ "<option value='KRW'>KRW</option>"
				+ "</select>"
				+ " <input type='text' id='inputMoney' class='number' onchange='calc()'/>"
				+ "</div> "
				+ "<div style='text-align: center;'><i class='fas fa-equals'></i></div>"
				+ "<div>"
				+ "<select id='outputUnit' onchange='calc()'>"
				+ "<option value='USD'>USD</option><option value='JPY'>JPY</option>"
				+ "<option value='EUR'>EUR</option><option value='CNY'>CNY</option>"
				+ "<option value='KRW'>KRW</option></select>"
				+ " <input type='text' id='outMoney'  class='number readonly' />"
				+ "</div>"
				+ "<div style='text-align:center;padding:10px 0 5px 0;'>"
				+ "<button type='button' onclick='confirmCalc()'>확인</button>"
				+ "</div>"
    };

    sheet.showDialog({row : sheet.getRowById("AR5"), col: "AMOUNT06", dialog: dialog});
}

// 확인 버튼 클릭시
function confirmCalc() {
	var dd = sheet.Dialog;
	var v = dd.Tag.querySelector("#outMoney").value;

	dd.Row[dd.Col] = v;
	sheet.refreshCell(dd.Row,dd.Col);
	dd.Close();
}

// 다이얼로그 내에 값 변경시
function calc() {
	var dd = sheet.Dialog;
	var inpU = dd.Tag.querySelector("#inputUnit");
	var outU = dd.Tag.querySelector("#outputUnit");
	var inpV = dd.Tag.querySelector("#inputMoney");
	var outV = dd.Tag.querySelector("#outMoney");

	if (inpV.value == "") return;
	var baseCurrency = inpV.value;
	switch (inpU.value) {
		case 'EUR':
			baseCurrency = parseFloat(inpV.value) * 1.13546;
		break;
		case 'JPY':
			baseCurrency = parseFloat(inpV.value) * 0.00903;
		break;
		case 'CNY':
			baseCurrency = parseFloat(inpV.value) * 0.14929;
		break;
		case 'KRW':
			baseCurrency = parseFloat(inpV.value) * 0.00089;
		break;
	}
	switch(outU.value) {
		case 'EUR':
			outV.value = baseCurrency * 0.8807;
		break;
		case 'JPY':
			outV.value = baseCurrency * 110.803;
		break;
		case 'CNY':
			outV.value = baseCurrency * 6.6984;
		break;
		case 'KRW':
			outV.value = baseCurrency * 1118.15;
		break;
		case 'USD':
			outV.value = baseCurrency * 1;
		break;
	}
}
```

### Read More
- [showDialog method](/docs/funcs/core/show-dialog)
- [showDownloadDialog method](/docs/funcs/dialog/show-download-dialog)
- [showEditDialog method](/docs/funcs/dialog/show-edit-dialog)
- [showFindDialog method](/docs/funcs/dialog/show-find-dialog)
- [showPivotDialog method](/docs/funcs/dialog/show-pivot-dialog)
- [showUploadDialog method](/docs/funcs/dialog/show-upload-dialoㅡg)
- [showDialog static](/docs/static/show-dialog)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
