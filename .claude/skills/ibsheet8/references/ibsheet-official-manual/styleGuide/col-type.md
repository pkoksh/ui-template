---
KEY: colType
KIND: style-guide
PATH: styleGuide/col-type
ALIAS: 컬럼, 유형에, 따른, 적용
ALIAS_EN: col, type
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/styleGuide/col-type
---
# 컬럼 유형에 따른 class 적용

## Bool/Radio 아이콘
Bool type에서는 [BoolIcon col](/docs/props/col/bool-icon)속성을 통해 **체크/언체크 checkbox 아이콘을 다른 이미지나 Html 객체로 설정**하실 수 있습니다.

Radio type에서는 [RadioIcon col](/docs/props/col/radio-icon)속성을 통해 **체크/언체크 radio 아이콘을 다른 이미지나 Html 객체로 설정**하실 수 있습니다.

### **.IBBool0, Bool0RO**
`.IBBool0, Bool0RO`은 checkbox형태에서 체크가 되지 않은 상태일 때 사용되는 이미지를 관리하는 클래스입니다.

```css
.IBBool0, IBBool0RO {
  /* 이미지 크기 조정 */
  background-size: 18px 18px;
  /* 이미지 교체 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=1508 preview=PHN2ZyB3aWR0aD0iNjRw...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 언체크 checkbox
![기본 테마의 언체크 checkbox](/assets/imgs/styleguide_bool0_default.png "기본 테마의 언체크 checkbox")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 언체크 checkbox -->|커스텀 언체크 checkbox
![커스텀 언체크 checkbox 적용](/assets/imgs/styleguide_bool0_custom.png "커스텀 언체크 checkbox 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 언체크 checkbox 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBBool0%2C%20IBBool0RO%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%ED%81%AC%EA%B8%B0%20%EC%A1%B0%EC%A0%95%20*%2F%0A%20%20background-size%3A%2018px%2018px%3B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EA%B5%90%EC%B2%B4%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmlsbD0iIzAwMDAwMCI%2BPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI%2BIDwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0%2BIDx0aXRsZT5pY19mbHVlbnRfY2hlY2tib3hfdW5jaGVja2VkXzI0X3JlZ3VsYXI8L3RpdGxlPiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gPGcgaWQ9IvCflI0tUHJvZHVjdC1JY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI%2BIDxnIGlkPSJpY19mbHVlbnRfY2hlY2tib3hfdW5jaGVja2VkXzI0X3JlZ3VsYXIiIGZpbGw9IiNmZjAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI%2BIDxwYXRoIGQ9Ik01Ljc1LDMgTDE4LjI1LDMgQzE5Ljc2ODc4MzEsMyAyMSw0LjIzMTIxNjk0IDIxLDUuNzUgTDIxLDE4LjI1IEMyMSwxOS43Njg3ODMxIDE5Ljc2ODc4MzEsMjEgMTguMjUsMjEgTDUuNzUsMjEgQzQuMjMxMjE2OTQsMjEgMywxOS43Njg3ODMxIDMsMTguMjUgTDMsNS43NSBDMyw0LjIzMTIxNjk0IDQuMjMxMjE2OTQsMyA1Ljc1LDMgWiBNNS43NSw0LjUgQzUuMDU5NjQ0MDYsNC41IDQuNSw1LjA1OTY0NDA2IDQuNSw1Ljc1IEw0LjUsMTguMjUgQzQuNSwxOC45NDAzNTU5IDUuMDU5NjQ0MDYsMTkuNSA1Ljc1LDE5LjUgTDE4LjI1LDE5LjUgQzE4Ljk0MDM1NTksMTkuNSAxOS41LDE4Ljk0MDM1NTkgMTkuNSwxOC4yNSBMMTkuNSw1Ljc1IEMxOS41LDUuMDU5NjQ0MDYgMTguOTQwMzU1OSw0LjUgMTguMjUsNC41IEw1Ljc1LDQuNSBaIiBpZD0i8J%2BOqENvbG9yIj4gPC9wYXRoPiA8L2c%2BIDwvZz4gPC9nPjwvc3ZnPg%3D%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBBool1, Bool1RO**
`.IBBool1, Bool1RO`은 checkbox형태에서 체크가 된 상태일 때 사용되는 형태의 이미지를 관리하는 클래스입니다.

```css
.IBBool1, IBBool1RO {
  /* 이미지 크기 조정 */
  background-size: 18px 18px;
  /* 이미지 교 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=780 preview=PHN2ZyB3aWR0aD0iNjRw...>);
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 체크 checkbox
![기본 테마의 체크 checkbox](/assets/imgs/styleguide_bool1_default.png "기본 테마의 체크 checkbox")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 체크 checkbox -->|커스텀 체크 checkbox
![커스텀 체크 checkbox 적용](/assets/imgs/styleguide_bool1_custom.png "커스텀 체크 checkbox 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 체크 checkbox 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBBool1%2C%20IBBool1RO%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%ED%81%AC%EA%B8%B0%20%EC%A1%B0%EC%A0%95%20*%2F%0A%20%20background-size%3A%2018px%2018px%3B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EA%B5%90%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjEgMjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iIzAwMDAwMCI%2BPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI%2BIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjZmYwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiPiA8cGF0aCBkPSJtMi41LjVoMTBjMS4xMDQ1Njk1IDAgMiAuODk1NDMwNSAyIDJ2MTBjMCAxLjEwNDU2OTUtLjg5NTQzMDUgMi0yIDJoLTEwYy0xLjEwNDU2OTUgMC0yLS44OTU0MzA1LTItMnYtMTBjMC0xLjEwNDU2OTUuODk1NDMwNS0yIDItMnoiPjwvcGF0aD4gPHBhdGggZD0ibTQuNSA3LjUgMiAyIDQtNCI%2BPC9wYXRoPiA8L2c%2BIDwvZz48L3N2Zz4%3D)%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBBool2, IBBool2RO**
`.IBBool2, Bool2RO`은 radio형태에서 체크가 되지 않은 상태일 때 사용되는 이미지를 관리하는 클래스입니다.

```css
.IBBool2, IBBool2RO {
  /* 이미지 크기 조정 */
  background-size: 18px 18px;
  /* 이미지 교체 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=756 preview=PHN2ZyB3aWR0aD0iNjRw...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 언체크 radio
![기본 테마의 언체크 radio](/assets/imgs/styleguide_bool2_default.png "기본 테마의 언체크 radio")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 언체크 radio -->|커스텀 언체크 checkbox
![커스텀 언체크 radio 적용](/assets/imgs/styleguide_bool2_custom.png "커스텀 언체크 radio 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 언체크 radio 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBBool2%2C%20IBBool2RO%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%ED%81%AC%EA%B8%B0%20%EC%A1%B0%EC%A0%95%20*%2F%0A%20%20background-size%3A%2018px%2018px%3B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EA%B5%90%EC%B2%B4%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI%2BPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI%2BIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMjJDMTcuNTIyOCAyMiAyMiAxNy41MjI4IDIyIDEyQzIyIDYuNDc3MTUgMTcuNTIyOCAyIDEyIDJDNi40NzcxNSAyIDIgNi40NzcxNSAyIDEyQzIgMTcuNTIyOCA2LjQ3NzE1IDIyIDEyIDIyWk0xMiAyMEMxNi40MTgzIDIwIDIwIDE2LjQxODMgMjAgMTJDMjAgNy41ODE3MiAxNi40MTgzIDQgMTIgNEM3LjU4MTcyIDQgNCA3LjU4MTcyIDQgMTJDNCAxNi40MTgzIDcuNTgxNzIgMjAgMTIgMjBaIiBmaWxsPSIjZmYwMDAwIj48L3BhdGg%2BIDwvZz48L3N2Zz4%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBBool3, IBBool3RO**
`.IBBool3, IBBool3RO`은 radio형태에서 체크가 된 상태일 때 사용되는 이미지를 관리하는 클래스입니다.

```css
.IBBool3, IBBool3RO {
  /* 이미지 크기 조정 */
  background-size: 18px 18px;
  /* 이미지 교체 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=908 preview=PHN2ZyB3aWR0aD0iNjRw...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 체크 radio
![기본 테마의 체크 radio](/assets/imgs/styleguide_bool3_default.png "기본 테마의 체크 radio")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 체크 radio -->|커스텀 체크 checkbox
![커스텀 체크 radio 적용](/assets/imgs/styleguide_bool3_custom.png "커스텀 체크 radio 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 체크 radio 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBBool3%2C%20IBBool3RO%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%ED%81%AC%EA%B8%B0%20%EC%A1%B0%EC%A0%95%20*%2F%0A%20%20background-size%3A%2018px%2018px%3B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EA%B5%90%EC%B2%B4%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI%2BPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI%2BIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIgMTJDMjIgMTcuNTIyOCAxNy41MjI4IDIyIDEyIDIyQzYuNDc3MTUgMjIgMiAxNy41MjI4IDIgMTJDMiA2LjQ3NzE1IDYuNDc3MTUgMiAxMiAyQzE3LjUyMjggMiAyMiA2LjQ3NzE1IDIyIDEyWk0yMCAxMkMyMCAxNi40MTgzIDE2LjQxODMgMjAgMTIgMjBDNy41ODE3MiAyMCA0IDE2LjQxODMgNCAxMkM0IDcuNTgxNzIgNy41ODE3MiA0IDEyIDRDMTYuNDE4MyA0IDIwIDcuNTgxNzIgMjAgMTJaTTEyIDE2QzE0LjIwOTEgMTYgMTYgMTQuMjA5MSAxNiAxMkMxNiA5Ljc5MDg2IDE0LjIwOTEgOCAxMiA4QzkuNzkwODYgOCA4IDkuNzkwODYgOCAxMkM4IDE0LjIwOTEgOS43OTA4NiAxNiAxMiAxNloiIGZpbGw9IiNmZjAwMDAiPjwvcGF0aD4gPC9nPjwvc3ZnPg%3D%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBRadio0Left, .IBRadio0Right**
`.IBRadio0Left, .IBRadio0Right`은 하나의 셀 안에 여러 개의 radio형태를 사용할 때, 체크가 되지 않은 상태일 때 사용되는 이미지를 관리하는 클래스입니다.

```css
.IBRadio0Left, .IBRadio0Right {
  /* 이미지 크기 조정 */
  background-size: 18px 18px;
  /* 이미지 교체 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=756 preview=PHN2ZyB3aWR0aD0iNjRw...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 다중 언체크 radio
![기본 테마의 다중 언체크 radio](/assets/imgs/styleguide_radio0_default.png "기본 테마의 다중 언체크 radio")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 다중 언체크 radio -->|커스텀 다중 언체크 radio
![커스텀 다중 언체크 radio 적용](/assets/imgs/styleguide_radio0_custom.png "커스텀 다중 언체크 radio 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 다중 언체크 radio 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBRadio0Left%2C%20.IBRadio0Right%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%ED%81%AC%EA%B8%B0%20%EC%A1%B0%EC%A0%95%20*%2F%0A%20%20background-size%3A%2018px%2018px%3B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EA%B5%90%EC%B2%B4%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI%2BPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI%2BIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMjJDMTcuNTIyOCAyMiAyMiAxNy41MjI4IDIyIDEyQzIyIDYuNDc3MTUgMTcuNTIyOCAyIDEyIDJDNi40NzcxNSAyIDIgNi40NzcxNSAyIDEyQzIgMTcuNTIyOCA2LjQ3NzE1IDIyIDEyIDIyWk0xMiAyMEMxNi40MTgzIDIwIDIwIDE2LjQxODMgMjAgMTJDMjAgNy41ODE3MiAxNi40MTgzIDQgMTIgNEM3LjU4MTcyIDQgNCA3LjU4MTcyIDQgMTJDNCAxNi40MTgzIDcuNTgxNzIgMjAgMTIgMjBaIiBmaWxsPSIjZmYwMDAwIj48L3BhdGg%2BIDwvZz48L3N2Zz4%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBRadio1Left, .IBRadio1Right**
`.IBRadio1Left, .IBRadio1Right`은 하나의 셀 안에 여러 개의 radio형태를 사용할 때, 체크가 된 상태일 때 사용되는 이미지를 관리하는 클래스입니다.

```css
.IBRadio1Left, .IBRadio1Right {
  /* 이미지 크기 조정 */
  background-size: 18px 18px;
  /* 이미지 교체 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=908 preview=PHN2ZyB3aWR0aD0iNjRw...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 다중 체크 radio
![기본 테마의 다중 체크 radio](/assets/imgs/styleguide_radio1_default.png "기본 테마의 다중 체크 radio")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 다중 체크 radio -->|커스텀 다중 체크 radio
![커스텀 다중 체크 radio 적용](/assets/imgs/styleguide_radio1_custom.png "커스텀 다중 체크 radio 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 다중 체크 radio 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBRadio1Left%2C%20.IBRadio1Right%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%ED%81%AC%EA%B8%B0%20%EC%A1%B0%EC%A0%95%20*%2F%0A%20%20background-size%3A%2018px%2018px%3B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EA%B5%90%EC%B2%B4%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI%2BPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI%2BIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjIgMTJDMjIgMTcuNTIyOCAxNy41MjI4IDIyIDEyIDIyQzYuNDc3MTUgMjIgMiAxNy41MjI4IDIgMTJDMiA2LjQ3NzE1IDYuNDc3MTUgMiAxMiAyQzE3LjUyMjggMiAyMiA2LjQ3NzE1IDIyIDEyWk0yMCAxMkMyMCAxNi40MTgzIDE2LjQxODMgMjAgMTIgMjBDNy41ODE3MiAyMCA0IDE2LjQxODMgNCAxMkM0IDcuNTgxNzIgNy41ODE3MiA0IDEyIDRDMTYuNDE4MyA0IDIwIDcuNTgxNzIgMjAgMTJaTTEyIDE2QzE0LjIwOTEgMTYgMTYgMTQuMjA5MSAxNiAxMkMxNiA5Ljc5MDg2IDE0LjIwOTEgOCAxMiA4QzkuNzkwODYgOCA4IDkuNzkwODYgOCAxMkM4IDE0LjIwOTEgOS43OTA4NiAxNiAxMiAxNloiIGZpbGw9IiNmZjAwMDAiPjwvcGF0aD4gPC9nPjwvc3ZnPg%3D%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBRadio2Left, .IBRadio2Right**
`.IBRadio0Left, .IBRadio0Right`은 하나의 셀 안에 여러 개의 checkbox형태를 사용할 때, 체크가 되지 않은 상태일 때 사용되는 이미지를 관리하는 클래스입니다.

```css
.IBRadio2Left, .IBRadio2Right {
  /* 이미지 크기 조정 */
  background-size: 18px 18px;
  /* 이미지 교체 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=1508 preview=PHN2ZyB3aWR0aD0iNjRw...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 다중 언체크 checkbox
![기본 테마의 다중 언체크 checkbox](/assets/imgs/styleguide_radio2_default.png "기본 테마의 다중 언체크 checkbox")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 다중 언체크 checkbox -->|커스텀 다중 언체크 checkbox
![커스텀 다중 언체크 checkbox 적용](/assets/imgs/styleguide_radio2_custom.png "커스텀 다중 언체크 checkbox 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 다중 언체크 checkbox 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBRadio2Left%2C%20.IBRadio2Right%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%ED%81%AC%EA%B8%B0%20%EC%A1%B0%EC%A0%95%20*%2F%0A%20%20background-size%3A%2018px%2018px%3B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EA%B5%90%EC%B2%B4%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZmlsbD0iIzAwMDAwMCI%2BPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI%2BIDwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS0%2BIDx0aXRsZT5pY19mbHVlbnRfY2hlY2tib3hfdW5jaGVja2VkXzI0X3JlZ3VsYXI8L3RpdGxlPiA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gPGcgaWQ9IvCflI0tUHJvZHVjdC1JY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI%2BIDxnIGlkPSJpY19mbHVlbnRfY2hlY2tib3hfdW5jaGVja2VkXzI0X3JlZ3VsYXIiIGZpbGw9IiNmZjAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI%2BIDxwYXRoIGQ9Ik01Ljc1LDMgTDE4LjI1LDMgQzE5Ljc2ODc4MzEsMyAyMSw0LjIzMTIxNjk0IDIxLDUuNzUgTDIxLDE4LjI1IEMyMSwxOS43Njg3ODMxIDE5Ljc2ODc4MzEsMjEgMTguMjUsMjEgTDUuNzUsMjEgQzQuMjMxMjE2OTQsMjEgMywxOS43Njg3ODMxIDMsMTguMjUgTDMsNS43NSBDMyw0LjIzMTIxNjk0IDQuMjMxMjE2OTQsMyA1Ljc1LDMgWiBNNS43NSw0LjUgQzUuMDU5NjQ0MDYsNC41IDQuNSw1LjA1OTY0NDA2IDQuNSw1Ljc1IEw0LjUsMTguMjUgQzQuNSwxOC45NDAzNTU5IDUuMDU5NjQ0MDYsMTkuNSA1Ljc1LDE5LjUgTDE4LjI1LDE5LjUgQzE4Ljk0MDM1NTksMTkuNSAxOS41LDE4Ljk0MDM1NTkgMTkuNSwxOC4yNSBMMTkuNSw1Ljc1IEMxOS41LDUuMDU5NjQ0MDYgMTguOTQwMzU1OSw0LjUgMTguMjUsNC41IEw1Ljc1LDQuNSBaIiBpZD0i8J%2BOqENvbG9yIj4gPC9wYXRoPiA8L2c%2BIDwvZz4gPC9nPjwvc3ZnPg%3D%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBRadio3Left, .IBRadio3Right**
`.IBRadio1Left, .IBRadio1Right`은 하나의 셀 안에 여러 개의 checkbox형태를 사용할 때, 체크가 된 상태일 때 사용되는 이미지를 관리하는 클래스입니다.

```css
.IBRadio3Left, .IBRadio3Right {
  /* 이미지 크기 조정 */
  background-size: 18px 18px;
  /* 이미지 교 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=780 preview=PHN2ZyB3aWR0aD0iNjRw...>);
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 다중 체크 checkbox
![기본 테마의 다중 체크 checkbox](/assets/imgs/styleguide_radio3_default.png "기본 테마의 다중 체크 checkbox")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 다중 체크 checkbox -->|커스텀 다중 체크 checkbox
![커스텀 다중 체크 checkbox 적용](/assets/imgs/styleguide_radio3_custom.png "커스텀 다중 체크 checkbox 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 다중 체크 checkbox 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBRadio3Left%2C%20.IBRadio3Right%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%ED%81%AC%EA%B8%B0%20%EC%A1%B0%EC%A0%95%20*%2F%0A%20%20background-size%3A%2018px%2018px%3B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EA%B5%90%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjEgMjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iIzAwMDAwMCI%2BPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI%2BIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjZmYwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiPiA8cGF0aCBkPSJtMi41LjVoMTBjMS4xMDQ1Njk1IDAgMiAuODk1NDMwNSAyIDJ2MTBjMCAxLjEwNDU2OTUtLjg5NTQzMDUgMi0yIDJoLTEwYy0xLjEwNDU2OTUgMC0yLS44OTU0MzA1LTItMnYtMTBjMC0xLjEwNDU2OTUuODk1NDMwNS0yIDItMnoiPjwvcGF0aD4gPHBhdGggZD0ibTQuNSA3LjUgMiAyIDQtNCI%2BPC9wYXRoPiA8L2c%2BIDwvZz48L3N2Zz4%3D)%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBRadioChecked**
`.IBRadioChecked`은 하나의 셀 안에 여러 개의 radio나 checkbox형태를 사용할 때, 선택된 대상의 Text를 관리하는 클래스입니다.

```css
.IBRadioChecked {
  /* 글자색 변경 */
  color: red;
  /* 폰트 굵기 변경 */
  font-weight: bold;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 다중 체크 중 체크 대상의 Text
![기본 테마의 다중 체크 중 체크 대상의 Text](/assets/imgs/styleguide_radio1_default.png "기본 테마의 다중 체크 checkbox")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 다중 체크 중 체크 대상의 Text -->|커스텀 다중 체크 중 체크 대상의 Text
![커스텀 다중 체크 중 체크 대상의 Text 적용](/assets/imgs/styleguide_radiochecked.png "커스텀 다중 체크 중 체크 대상의 Text 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 다중 체크 중 체크 대상의 Text 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBRadioChecked%20%7B%0A%20%20%2F*%20%EA%B8%80%EC%9E%90%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20color%3A%20red%3B%0A%20%20%2F*%20%ED%8F%B0%ED%8A%B8%20%EA%B5%B5%EA%B8%B0%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20font-weight%3A%20bold%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

## Enum(DropDown) 아이콘

### **.IBEnumLeft, .IBEnumRight, .IBEnumTop, .IBEnumBottom**
`.IBEnumLeft, .IBEnumRight, .IBEnumTop, .IBEnumBottom`은 DropDown에서 접힘 상태일 때 사용되는 이미지를 관리하는 클래스입니다.

```css
.IBEnumLeft, .IBEnumRight, .IBEnumTop, .IBEnumBottom {
  /* 이미지 교체 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=488 preview=PHN2ZyB4bWxucz0iaHR0...>);
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 DropDown 접힙 상태
![기본 테마의 DropDown 접힙 상태](/assets/imgs/styleguide_dropdown_fold_default.png "기본 테마의 DropDown 접힙 상태")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 DropDown 접힙 상태 -->|커스텀 DropDown 접힙 상태![커스텀 DropDown 접힙 상태 적용](/assets/imgs/styleguide_dropdown_fold_custom.png "커스텀 DropDown 접힙 상태 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 DropDown 접힙 상태 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBEnumLeft%2C%20.IBEnumRight%2C%20.IBEnumTop%2C%20.IBEnumBottom%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EA%B5%90%EC%B2%B4%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHZpZXdCb3g9IjAgMCAxNiAxNiI%2BDQo8cGF0aCBmaWxsPSIjZmYwMDAwIiBkPSJNMTEuMzcsNy43NzZsLTMuMDYzLDMuMDYzYy0wLjA4MiwwLjA4Mi0wLjE5MSwwLjEzLTAuMzA4LDAuMTNzLTAuMjI2LTAuMDQ4LTAuMzA4LTAuMTNMNC42Myw3Ljc3Ng0KCUM0LjU0OCw3LjY5NCw0LjUsNy41ODUsNC41LDcuNDY5YzAtMC4yMzksMC4xOTgtMC40MzgsMC40MzgtMC40MzhoNi4xMjVjMC4yMzksMCwwLjQzOCwwLjE5OCwwLjQzOCwwLjQzOA0KCUMxMS41LDcuNTg1LDExLjQ1Miw3LjY5NCwxMS4zNyw3Ljc3NnoiLz4NCjwvc3ZnPg%3D%3D)%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBEnumLeft, .IBEnumRight, .IBEnumTop, .IBEnumBottom**
`.IBEnumHeaderLeft,.IBEnumHeaderRight`은 DropDown에서 펼침 상태일 때 사용되는 이미지를 관리하는 클래스입니다.

```css
.IBEnumHeaderLeft,.IBEnumHeaderRight {
  /* 이미지 교체 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=524 preview=PHN2ZyB4bWxucz0iaHR0...>);
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 DropDown 펼침 상태
![기본 테마의 DropDown 펼침 상태](/assets/imgs/styleguide_dropdown_unfold_default.png "기본 테마의 DropDown 펼침 상태")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 DropDown 펼침 상태 -->|커스텀 DropDown 펼침 상태
![커스텀 DropDown 펼침 상태 적용](/assets/imgs/styleguide_dropdown_unfold_custom.png "커스텀 DropDown 펼침 상태 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 DropDown 펼침 상태 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBEnumHeaderLeft%2C.IBEnumHeaderRight%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EA%B5%90%EC%B2%B4%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHZpZXdCb3g9IjAgMCAxNiAxNiI%2BDQo8cGF0aCB0cmFuc2Zvcm09InJvdGF0ZSgxODAgOCA4KSIgZmlsbD0iI2ZmMDAwMCIgZD0iTTExLjM3LDcuNzc2bC0zLjA2MywzLjA2M2MtMC4wODIsMC4wODItMC4xOTEsMC4xMy0wLjMwOCwwLjEzcy0wLjIyNi0wLjA0OC0wLjMwOC0wLjEzTDQuNjMsNy43NzYNCglDNC41NDgsNy42OTQsNC41LDcuNTg1LDQuNSw3LjQ2OWMwLTAuMjM5LDAuMTk4LTAuNDM4LDAuNDM4LTAuNDM4aDYuMTI1YzAuMjM5LDAsMC40MzgsMC4xOTgsMC40MzgsMC40MzgNCglDMTEuNSw3LjU4NSwxMS40NTIsNy42OTQsMTEuMzcsNy43NzZ6Ii8%2BDQo8L3N2Zz4%3D)%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBMenuFocus**
`.IBMenuFocus`은 DropDown이 펼침 상태에서 값 선택 영역에서 선택 된 값이 있는 영역에 적용되는 클래스입니다.

```css
.IBMenuFocus {
  /* 배경색 변경 */
  background: #87f344;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 DropDown 펼침 상태의 Focus
![기본 테마의 DropDown 펼침 상태의 Focus](/assets/imgs/styleguide_dropdown_focus_default.png "기본 테마의 DropDown 펼침 상태의 Focus")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 DropDown 펼침 상태의 Focus -->|커스텀 DropDown 펼침 상태의 Focus
![커스텀 DropDown 펼침 상태의 Focus 적용](/assets/imgs/styleguide_dropdown_focus_custom.png "커스텀 DropDown 펼침 상태의 Focus 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 DropDown 펼침 상태의 Focus 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBMenuFocus%20%7B%0A%20%20%2F*%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background%3A%20%2387f344%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>


### **.IBMenuHover**
`.IBMenuHover`은 DropDown이 펼침 상태에서 값 선택 영역에서 마우스가 Hover된 영역에 적용되는 클래스입니다.

```css
.IBMenuHover {
  /* 배경색 변경 */
  background: #ddff1d;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 DropDown 펼침 상태의 Hover
![기본 테마의 DropDown 펼침 상태의 Hover](/assets/imgs/styleguide_dropdown_hover_default.png "기본 테마의 DropDown 펼침 상태의 Hover")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 DropDown 펼침 상태의 Hover -->|커스텀 DropDown 펼침 상태의 Hover
![커스텀 DropDown 펼침 상태의 Hover 적용](/assets/imgs/styleguide_dropdown_hover_custom.png "커스텀 DropDown 펼침 상태의 Hover 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 DropDown 펼침 상태의 Hover 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBMenuHover%20%7B%0A%20%20%2F*%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background%3A%20%23ddff1d%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBMenuFocus.IBMenuHover**
`.IBMenuFocus.IBMenuHover`은 DropDown이 펼침에서 값 선택 영역에서 선택된 값이 있는 영역에 마우스가 Hover되었을 때 해당 영역에 적용되는 클래스입니다.

```css
.IBMenuFocus.IBMenuHover {
  /* 배경색 변경 */
  background: #b46eff;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 DropDown 펼침 상태의 FocusHover
![기본 테마의 DropDown 펼침 상태의 FocusHover](/assets/imgs/styleguide_dropdown_focushover_default.png "기본 테마의 DropDown 펼침 상태의 FocusHover")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 DropDown 펼침 상태의 FocusHover -->|커스텀 DropDown 펼침 상태의 FocusHover
![커스텀 DropDown 펼침 상태의 FocusHover 적용](/assets/imgs/styleguide_dropdown_focushover_custom.png "커스텀 DropDown 펼침 상태의 FocusHover 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 DropDown 펼침 상태의 FocusHover 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBMenuFocus.IBMenuHover%20%7B%0A%20%20%2F*%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background%3A%20%23b46eff%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

* * *

## File 아이콘

### **.IBClearLeft, .IBClearRight, .IBClearTop, .IBClearBottom**
`.IBClearLeft, .IBClearRight, .IBClearTop, .IBClearBottom`은 File정보가 존재할 경우, 출력 되는 파일 정보 제거 아이콘을 관리하는 클래스입니다.

```css
.IBClearLeft, .IBClearRight, .IBClearTop, .IBClearBottom {
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=648 preview=PHN2ZyBmaWxsPSIjZmYw...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 파일 정보 제거 아이콘
![기본 테마의 파일 정보 제거 아이콘](/assets/imgs/styleguide_file_empty_default.png "기본 테마의 파일 정보 제거 아이콘")
<!-- IMAGE: 아이콘 이미지 - 기본 테마의 파일 정보 제거 아이콘 -->|커스텀 파일 정보 제거 아이콘
![커스텀 파일 정보 제거 아이콘 적용](/assets/imgs/styleguide_file_empty_custom.png "커스텀 파일 정보 제거 아이콘 적용")
<!-- IMAGE: 아이콘 이미지 - 커스텀 파일 정보 제거 아이콘 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type2?customCss=%0A.IBClearLeft%2C%20.IBClearRight%2C%20.IBClearTop%2C%20.IBClearBottom%20%7B%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyBmaWxsPSIjZmYwMDAwIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgZGF0YS1uYW1lPSJMYXllciAxIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZjAwMDAiPjxnIGlkPSJTVkdSZXBvX2JnQ2FycmllciIgc3Ryb2tlLXdpZHRoPSIwIj48L2c%2BPGcgaWQ9IlNWR1JlcG9fdHJhY2VyQ2FycmllciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L2c%2BPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPjx0aXRsZT48L3RpdGxlPjxwYXRoIGQ9Ik0xMTQsMTAwbDQ5LTQ5YTkuOSw5LjksMCwwLDAtMTQtMTRMMTAwLDg2LDUxLDM3QTkuOSw5LjksMCwwLDAsMzcsNTFsNDksNDlMMzcsMTQ5YTkuOSw5LjksMCwwLDAsMTQsMTRsNDktNDksNDksNDlhOS45LDkuOSwwLDAsMCwxNC0xNFoiPjwvcGF0aD48L2c%2BPC9zdmc%2B)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBFileLeft, .IBFileRight, .IBFileTop, .IBFileBottom**
`.IBFileLeft, .IBFileRight, .IBFileTop, .IBFileBottom`은 File type에서 파일 업로드 아이콘을 관리하는 클래스입니다.

```css
.IBFileLeft, .IBFileRight, .IBFileTop, .IBFileBottom {
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=1016 preview=PHN2ZyBmaWxsPSIjMDAw...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 파일 업로드 아이콘
![기본 테마의 파일 업로드 아이콘](/assets/imgs/styleguide_file_upload_default.png "기본 테마의 파일 업로드 아이콘")
<!-- IMAGE: 아이콘 이미지 - 기본 테마의 파일 업로드 아이콘 -->|커스텀 파일 업로드 아이콘
![커스텀 파일 업로드 아이콘 적용](/assets/imgs/styleguide_file_upload_custom.png "커스텀 파일 업로드 아이콘 적용")
<!-- IMAGE: 아이콘 이미지 - 커스텀 파일 업로드 아이콘 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type2?customCss=%0A.IBFileLeft%2C%20.IBFileRight%2C%20.IBFileTop%2C%20.IBFileBottom%20%7B%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjY0cHgiIHdpZHRoPSI2NHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDg1IDQ4NSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI%2BIDxnPiA8cG9seWdvbiBwb2ludHM9IjE2My4wNywyNjguNjI2IDMyMS45MywyNjguNjI2IDMyMS45MywxNTMuMDU2IDM4MC45MjYsMTUzLjA1NiAyNDIuNSwxLjM3NCAxMDQuMDc0LDE1My4wNTYgMTYzLjA3LDE1My4wNTYgIj48L3BvbHlnb24%2BIDxwYXRoIGQ9Ik0wLDMwOC42MjZ2MTc1aDQ4NXYtMTc1SDB6IE0zMzAsNDExLjEyNmMtOC4yODQsMC0xNS02LjcxNi0xNS0xNXM2LjcxNi0xNSwxNS0xNWM4LjI4NCwwLDE1LDYuNzE2LDE1LDE1IFMzMzguMjg0LDQxMS4xMjYsMzMwLDQxMS4xMjZ6IE00MDAsNDExLjEyNmMtOC4yODQsMC0xNS02LjcxNi0xNS0xNXM2LjcxNi0xNSwxNS0xNWM4LjI4NCwwLDE1LDYuNzE2LDE1LDE1IFM0MDguMjg0LDQxMS4xMjYsNDAwLDQxMS4xMjZ6Ij48L3BhdGg%2BIDwvZz4gPC9nPjwvc3ZnPg%3D%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

* * *

## Date/TimePicker등

### **.IBMain .IBDateLeft, .IBMain .IBDatesLeft, .IBMain .IBDateRight, .IBMain .IBDatesRight, .IBMain .IBDateTop, .IBMain .IBDatesTop, .IBMain .IBDateBottom, .IBMain .IBDatesBottom**
`.IBMain .IBDateLeft, .IBMain .IBDatesLeft, .IBMain .IBDateRight, .IBMain .IBDatesRight, .IBMain .IBDateTop, .IBMain .IBDatesTop, .IBMain .IBDateBottom, .IBMain .IBDatesBottom`은 DatePicker의 아이콘을 관리하는 클래스입니다.

```css
.IBMain .IBDateLeft, .IBMain .IBDatesLeft, .IBMain .IBDateRight, .IBMain .IBDatesRight, .IBMain .IBDateTop, .IBMain .IBDatesTop, .IBMain .IBDateBottom, .IBMain .IBDatesBottom {
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=2248 preview=PHN2ZyB3aWR0aD0iNjRw...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 DatePicker 아이콘
![기본 테마의 DatePicker 아이콘](/assets/imgs/styleguide_datepicker_default.png "기본 테마의 DatePicker 아이콘")
<!-- IMAGE: 아이콘 이미지 - 기본 테마의 DatePicker 아이콘 -->|커스텀 DatePicker 아이콘
![커스텀 DatePicker 아이콘](/assets/imgs/styleguide_datepicker_custom.png "커스텀 DatePicker 아이콘")
<!-- IMAGE: 아이콘 이미지 - 커스텀 DatePicker 아이콘 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBMain%20.IBDateLeft%2C%20.IBMain%20.IBDatesLeft%2C%20.IBMain%20.IBDateRight%2C%20.IBMain%20.IBDatesRight%2C%20.IBMain%20.IBDateTop%2C%20.IBMain%20.IBDatesTop%2C%20.IBMain%20.IBDateBottom%2C%20.IBMain%20.IBDatesBottom%20%7B%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI%2BPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI%2BIDxwYXRoIGQ9Ik03IDExQzcgMTAuNDQ3NyA3LjQ0NzcyIDEwIDggMTBDOC41NTIyOCAxMCA5IDEwLjQ0NzcgOSAxMUM5IDExLjU1MjMgOC41NTIyOCAxMiA4IDEyQzcuNDQ3NzIgMTIgNyAxMS41NTIzIDcgMTFaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg%2BIDxwYXRoIGQ9Ik03IDE2QzcgMTUuNDQ3NyA3LjQ0NzcyIDE1IDggMTVDOC41NTIyOCAxNSA5IDE1LjQ0NzcgOSAxNkM5IDE2LjU1MjMgOC41NTIyOCAxNyA4IDE3QzcuNDQ3NzIgMTcgNyAxNi41NTIzIDcgMTZaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg%2BIDxwYXRoIGQ9Ik0xMSAxMUMxMSAxMC40NDc3IDExLjQ0NzcgMTAgMTIgMTBDMTIuNTUyMyAxMCAxMyAxMC40NDc3IDEzIDExQzEzIDExLjU1MjMgMTIuNTUyMyAxMiAxMiAxMkMxMS40NDc3IDEyIDExIDExLjU1MjMgMTEgMTFaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg%2BIDxwYXRoIGQ9Ik0xMSAxNkMxMSAxNS40NDc3IDExLjQ0NzcgMTUgMTIgMTVDMTIuNTUyMyAxNSAxMyAxNS40NDc3IDEzIDE2QzEzIDE2LjU1MjMgMTIuNTUyMyAxNyAxMiAxN0MxMS40NDc3IDE3IDExIDE2LjU1MjMgMTEgMTZaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg%2BIDxwYXRoIGQ9Ik0xNSAxMUMxNSAxMC40NDc3IDE1LjQ0NzcgMTAgMTYgMTBDMTYuNTUyMyAxMCAxNyAxMC40NDc3IDE3IDExQzE3IDExLjU1MjMgMTYuNTUyMyAxMiAxNiAxMkMxNS40NDc3IDEyIDE1IDExLjU1MjMgMTUgMTFaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg%2BIDxwYXRoIGQ9Ik0xNSAxNkMxNSAxNS40NDc3IDE1LjQ0NzcgMTUgMTYgMTVDMTYuNTUyMyAxNSAxNyAxNS40NDc3IDE3IDE2QzE3IDE2LjU1MjMgMTYuNTUyMyAxNyAxNiAxN0MxNS40NDc3IDE3IDE1IDE2LjU1MjMgMTUgMTZaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg%2BIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAyQzguNTUyMjggMiA5IDIuNDQ3NzIgOSAzVjRIMTVWM0MxNSAyLjQ0NzcyIDE1LjQ0NzcgMiAxNiAyQzE2LjU1MjMgMiAxNyAyLjQ0NzcyIDE3IDNWNEMxOS43NjE0IDQgMjIgNi4yMzg1OCAyMiA5VjE3QzIyIDE5Ljc2MTQgMTkuNzYxNCAyMiAxNyAyMkg3QzQuMjM4NTggMjIgMiAxOS43NjE0IDIgMTdWOUMyIDYuMjM4NTggNC4yMzg1OCA0IDcgNFYzQzcgMi40NDc3MiA3LjQ0NzcyIDIgOCAyWk03IDZDNS4zNDMxNSA2IDQgNy4zNDMxNSA0IDlWMTdDNCAxOC42NTY5IDUuMzQzMTUgMjAgNyAyMEgxN0MxOC42NTY5IDIwIDIwIDE4LjY1NjkgMjAgMTdWOUMyMCA3LjM0MzE1IDE4LjY1NjkgNiAxNyA2QzE3IDYuNTUyMjkgMTYuNTUyMyA3IDE2IDdDMTUuNDQ3NyA3IDE1IDYuNTUyMjkgMTUgNkg5QzkgNi41NTIyOSA4LjU1MjI4IDcgOCA3QzcuNDQ3NzIgNyA3IDYuNTUyMjkgNyA2WiIgZmlsbD0iIzAwMDAwMCI%2BPC9wYXRoPiA8L2c%2BPC9zdmc%2B)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>


### **.IBMain .IBTimePickerLeft, .IBMain .IBDatesLeft, .IBMain .IBTimePickerRight, .IBMain .IBDatesRight, .IBMain .IBDateTop, .IBMain .IBDatesTop, .IBMain .IBDateBottom, .IBMain .IBDatesBottom**
`.IBMain .IBTimePickerLeft, .IBMain .IBDatesLeft, .IBMain .IBTimePickerRight, .IBMain .IBDatesRight, .IBMain .IBDateTop, .IBMain .IBDatesTop, .IBMain .IBDateBottom, .IBMain .IBDatesBottom`은 TimePicker의 아이콘을 관리하는 클래스입니다.

```css
.IBMain .IBTimePickerLeft, .IBMain .IBDatesLeft, .IBMain .IBTimePickerRight, .IBMain .IBDatesRight, .IBMain .IBDateTop, .IBMain .IBDatesTop, .IBMain .IBDateBottom, .IBMain .IBDatesBottom {
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=912 preview=PHN2ZyBmaWxsPSIjMDAw...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 TimePicker 아이콘
![기본 테마의 TimePicker 아이콘](/assets/imgs/styleguide_timepicker_default.png "기본 테마의 TimePicker 아이콘")
<!-- IMAGE: 아이콘 이미지 - 기본 테마의 TimePicker 아이콘 -->|커스텀 TimePicker 아이콘
![커스텀 TimePicker 아이콘](/assets/imgs/styleguide_timepicker_custom.png "커스텀 TimePicker 아이콘")
<!-- IMAGE: 아이콘 이미지 - 커스텀 TimePicker 아이콘 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type2?customCss=%0A.IBMain%20.IBTimePickerLeft%2C%20.IBMain%20.IBDatesLeft%2C%20.IBMain%20.IBTimePickerRight%2C%20.IBMain%20.IBDatesRight%2C%20.IBMain%20.IBDateTop%2C%20.IBMain%20.IBDatesTop%2C%20.IBMain%20.IBDateBottom%2C%20.IBMain%20.IBDatesBottom%20%7B%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjY0cHgiIHdpZHRoPSI2NHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI%2BIDxwYXRoIGQ9Ik0yNTYsMEMxMTQuNiwwLDAsMTE0LjYsMCwyNTZzMTE0LjYsMjU2LDI1NiwyNTZzMjU2LTExNC42LDI1Ni0yNTZTMzk3LjQsMCwyNTYsMHogTTI1Niw0NjkuMyBjLTExNy44LDAtMjEzLjMtOTUuNS0yMTMuMy0yMTMuM2MwLTExNy44LDk1LjUtMjEzLjMsMjEzLjMtMjEzLjNjMTE3LjgsMCwyMTMuMyw5NS41LDIxMy4zLDIxMy4zIEM0NjkuMywzNzMuOCwzNzMuOCw0NjkuMywyNTYsNDY5LjN6IE0yNzcuMyw4NS4zaC00Mi43djE5MkgzODR2LTQyLjdIMjc3LjNWODUuM3oiPjwvcGF0aD4gPC9nPjwvc3ZnPg%3D%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>