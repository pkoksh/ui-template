---
KEY: static
KIND: static-member
PATH: static/static
ALIAS: 객체, 란, 파일을, 화면에, 추가하면
ALIAS_EN: static
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/static/static
---
# static 객체 란

> `ibsheet.js` 파일을 화면에 추가하면 전역변수로 `IBSheet`객체가 생성됩니다. 

> 이 객체를 통해 시트가 제공하는 달력을 사용하거나, 컨텍스트 메뉴 등을 시트 외부 영역에서 사용하실 수 있습니다.

> 그리고 이 객체에는 시트가 생성될 때 마다 해당 객체에 배열 형태로 시트가 담기게 됩니다.

> 따라서 현재 화면에 존재하는 시트의 개수는 `IBSheet.length` 를 통해 확인하실 수 있습니다.

> **단, 같은 `id`를 가진 시트를 다시 생성하거나 인스턴스 객체를 `sheet.dispose()`하게 된다면 해당 배열에 `null` 값으로 공간을 차지합니다.**

>
> `IBSheet`객체가 갖고 있는 함수와 속성은 아래와 같습니다.

## 내부 함수/이벤트/속성

|Name|Type|Description|
|---|---|---|
|[create](./create)|`function`|`sheet객체`를 생성합니다|
|[disposeAll](./dispose-all)|`function`|화면에 모든 시트객체를 제거합니다|
|[showMenu](./show-menu)|`function`|시트 외부에 원하는 위치에 컨텍스트 메뉴를 생성하여 보여줍니다|
|[showCalendar](./show-calendar)|`function`|시트 외부에 원하는 위치에 시트의 달력컨트롤을 생성하여 보여줍니다|
|[showDialog](./show-dialog)|`function`|주어진 위치에 커스텀 다이얼로그를 생성하여 보여줍니다|
|[numberToString](./number-to-string)|`function`|숫자를 주어진 포맷에 맞게 마스킹된 문자로 변경하여 리턴합니다|
|[dateToString](./date-to-string)|`function`|javascript `Date객체`나 기타 날짜형식의 값을 지정한 포맷의 문자열로 리턴합니다|
|[stringToDate](./string-to-date)|`function`|마스크가 포함된 날짜형식의 문자열을 javascript `Date객체`로 변환하여 리턴합니다|
|[version](./version)|`function`|화면에 로드된 제품의 버전을 리턴합니다.
|[onBeforeCreate](./on-before-create)|`event`|초기화 공통 설정 이벤트로 모든 시트가 생성되는 시점에서 발생합니다.|
|[onRenderFirstFinishAll](./on-render-first-finish-all)|`event`|현재 화면에서 시트가 하나 이상 있을때 모든 시트가 생성되는 시점에서 한번만 발생합니다.|
|[CommonOptions](./common-options)|`property`|모든 시트에 공통으로 적용될 속성값을 설정합니다.|
|Active|`property`|현재 마우스커서가 올라간 시트객체를 리턴합니다(시트 위에 커서가 없으면 `null`을 리턴)|
|Focused|`property`|현재 포커스가 들어간 시트객체를 리턴합니다(시트가 포커스를 갖고있지 않으면 `null`을 리턴)|

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
