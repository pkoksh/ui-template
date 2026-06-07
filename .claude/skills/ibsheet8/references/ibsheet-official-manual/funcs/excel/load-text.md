---
KEY: loadText
KIND: method
PATH: funcs/excel/load-text
ALIAS: sheet.loadText, loadText(), 파일의, 내용을, 시트, 위로
ALIAS_EN: load, text, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/excel/load-text
---
# loadText ***(method)***

> txt 파일의 내용을 시트 위로 `import` 합니다.

> 해당 함수를 호출시 파일 다이얼로그가 나타나고, 사용자가 txt(혹은 csv)을 선택하면 선택된 파일을 서버측에 지정한 jsp(통상적으로 `LoadText.jsp`)파일로 전달 됩니다. 
 전달받은 `LoadText.jsp`에서는 txt 파일을 파싱하여 JSON string 형태로 클라이언트로 리턴하게 됩니다.

> **이 기능을 사용하시려면, 배포시 같이 보내드리는 `/plugins/ibsheet-excel.js` 파일을 include 하셔야 합니다.**
>
> `LoadText.jsp` 파일에 대한 경로는 Cfg속성 안에 [Export](/docs/props/cfg/export) Url로 설정한 위치에 있어야합니다.

> 매 시트 생성시 마다 `Export`속성을 설정하기 번거로운 경우에는 [IBSheet.CommonOptions](/docs/static/common-options) 속성을 통해 모든 시트에 공통으로 설정할 수도 있습니다.

> `/plugins/ibsheet-common.js` 파일을 참고해 주세요.
>
> 다시 정리해 보자면 다음과 같은 작업이 필요 합니다.

**자바 서버모듈**

1. `ibsheet8-1.0.x.jar` 파일을 WEB-INF/lib에 추가.
2. `/plugins/ibsheet-excel.js` 파일을 해당 페이지에 include.
3. 시트 생성시 `Cfg`에 `Export`속성을 통해 `LoadText.jsp` 파일에 대한 경로 설정

**닷넷 서버모듈**

1. `IBSheet8-4.0.dll` 파일을 bin 또는 참조에 추가.
2. `/plugins/ibsheet-excel.js` 파일을 해당 페이지에 include.
3. 시트 생성시 `Cfg`에 `Export` 속성을 통해 `LoadText.aspx` 파일에 대한 경로 설정

### Syntax
```javascript
void loadText( param );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|append|`boolean`|선택|시트의 기존 데이터를 뒤에 text파일의 내용을 추가할지 여부
설정을 하지 않으면 기존데이터는 모두 삭제한 후 데이터가 추가됨.
`0(false)`:기존 데이터 제거 후 엑셀 데이터 추가 (`default`)
`1(true)`:기존 데이터에 엑셀 데이터 추가|
|fileExt|`string`|선택|업로드 가능한 파일 확장자를 구분자("\|")로 연결하여 설정합니다. (`defualt: "txt|csv"`)|
|mode|`string`|선택| `"HeaderMatch"`, `"NoHeader"`, `"HeaderSkip"` 중에 하나의 문자열을 입력합니다.
각 문자의 의미는 다음과 같습니다.
<ul><li>`"HeaderMatch"` : 시트의 헤더행의 타이틀과 엑셀의 첫번째 행부터 타이틀을 비교해서 읽습니다.
</li><li>`"NoHeader"` : 헤더행이 없다고 가정하고 첫행부터 순서대로 각 열에 대입합니다.</li><li>`"HeaderSkip"` : 헤더행은 있지만 열비교를 하지 않고 좌측부터 순서대로 읽습니다. 시트의 헤더행의 2개라면 엑셀의 위에서 두개행을 제외하고 그 아래부터 읽는다고 생각하시면 됩니다.</li></ul>(`default: "HeaderMatch"`)|
|colSeparator|`string`|선택|열과 열 사이의 구분자 문자 (`default: '\t'(탭문자)`)|
|encoding|`string`|선택|텍스트 파일의 인코딩 형식 지정 (`default: "utf-8"`)|
|sendParam|`object`|선택|텍스트 로드시 서버로 전달할 파라미터를 설정합니다.|
|reqHeader|`object`|선택|서버 전송 헤더에 사용자가 지정한 헤더 정보를 설정합니다.|
|useXhr|`boolean`|선택| xhr 통신을 이용해 파일을 로드합니다.
`0(false)`:xhr 통신 사용 안함 (`default`)
`1(true)`:xhr 통신 사용|
<!--!
|`[비공개]` maxFileSize|`string`|선택|최대 업로드 가능한 파일 사이즈를 설정합니다. (MB단위이며 설정하지 않으면 무제한입니다.)|
!-->

### Return Value
***none***

### Example
```javascript
//text 파일 업로드
var param = {mode:"NoHeader", append:1};
sheet.loadText(param);
```

### Read More
- [loadExcel method](./load-excel)
- [down2Excel method](./down-to-excel)
- [down2Text method](./down-to-text)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|기능 추가|
|excel|0.0.8|`reqHeader` 기능 추가|
