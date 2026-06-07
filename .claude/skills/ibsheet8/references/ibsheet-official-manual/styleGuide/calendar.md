---
KEY: calendar
KIND: style-guide
PATH: styleGuide/calendar
ALIAS: 달력
ALIAS_EN: calendar
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/styleGuide/calendar
---
# 달력

## 달력

### **.IBPickMY**
`.IBPickMY`은 이전 달, 다음 달 그리고 년/월의 문자열 및 년/월, 월/일의 달력 변환 기능이 있는 영역을 관리하는 클래스입니다.

```css
.IBPickMY{
  /* 배경색 변경 */
  background: #000000;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 달력 상단 영역
![커스텀 달력 상단 영역 적용](/assets/imgs/styleguide_date_md_my_custom.png "커스텀 달력 상단 영역 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 달력 상단 영역 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickMY%7B%0A%20%20%2F*%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background%3A%20%23000000%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>


### **.IBPickBL**
`.IBPickBL`은 이전 달로 이동하는 버튼의 이미지를 관리하는 클래스입니다.

```css
.IBPickBL {
  /* 이미지 및 크기 변경 */
  background: no-repeat center 5px/20px url(data:image/svg+xml;base64,<BASE64_OMITTED length=820 preview=PD94bWwgdmVyc2lvbj0i...>) #FFFFFF;
  transform: rotate(90deg) translate(5px, -5px);
  width: 25px;
  height: 25px;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 이전달 버튼
![커스텀 이전달 버튼 적용](/assets/imgs/styleguide_date_md_bl_custom.png "커스텀 이전달 버튼 적용")
<!-- IMAGE: 버튼 이미지 - 커스텀 이전달 버튼 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickBL%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EB%B0%8F%20%ED%81%AC%EA%B8%B0%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background%3A%20no-repeat%20center%205px%2F20px%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNzA3MSAxNC43MDcxQzEyLjMxNjYgMTUuMDk3NiAxMS42ODM0IDE1LjA5NzYgMTEuMjkyOSAxNC43MDcxTDYuMjkyODkgOS43MDcxMUM1LjkwMjM3IDkuMzE2NTggNS45MDIzNyA4LjY4MzQyIDYuMjkyODkgOC4yOTI4OUM2LjY4MzQyIDcuOTAyMzcgNy4zMTY1OCA3LjkwMjM3IDcuNzA3MTEgOC4yOTI4OUwxMiAxMi41ODU4TDE2LjI5MjkgOC4yOTI4OUMxNi42ODM0IDcuOTAyMzcgMTcuMzE2NiA3LjkwMjM3IDE3LjcwNzEgOC4yOTI4OUMxOC4wOTc2IDguNjgzNDIgMTguMDk3NiA5LjMxNjU4IDE3LjcwNzEgOS43MDcxMUwxMi43MDcxIDE0LjcwNzFaIiBmaWxsPSIjMDAwMDAwIi8%2BDQo8L3N2Zz4%3D)%20%23FFFFFF%3B%0A%20%20transform%3A%20rotate(90deg)%20translate(5px%2C%20-5px)%3B%0A%20%20width%3A%2025px%3B%0A%20%20height%3A%2025px%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickBR**
`.IBPickBR`은 다음 달로 이동하는 버튼의 이미지를 관리하는 클래스입니다.

```css
.IBPickBR {
  /* 이미지 및 크기 변경 */
  background: no-repeat center 5px/20px url(data:image/svg+xml;base64,<BASE64_OMITTED length=820 preview=PD94bWwgdmVyc2lvbj0i...>) #FFFFFF;
  transform: rotate(-90deg) translate(-5px, -5px);
  width: 25px;
  height: 25px;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 다음달 버튼
![커스텀 다음달 버튼 적용](/assets/imgs/styleguide_date_md_br_custom.png "커스텀 다음달 버튼 적용")
<!-- IMAGE: 버튼 이미지 - 커스텀 다음달 버튼 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickBR%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EB%B0%8F%20%ED%81%AC%EA%B8%B0%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background%3A%20no-repeat%20center%205px%2F20px%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNzA3MSAxNC43MDcxQzEyLjMxNjYgMTUuMDk3NiAxMS42ODM0IDE1LjA5NzYgMTEuMjkyOSAxNC43MDcxTDYuMjkyODkgOS43MDcxMUM1LjkwMjM3IDkuMzE2NTggNS45MDIzNyA4LjY4MzQyIDYuMjkyODkgOC4yOTI4OUM2LjY4MzQyIDcuOTAyMzcgNy4zMTY1OCA3LjkwMjM3IDcuNzA3MTEgOC4yOTI4OUwxMiAxMi41ODU4TDE2LjI5MjkgOC4yOTI4OUMxNi42ODM0IDcuOTAyMzcgMTcuMzE2NiA3LjkwMjM3IDE3LjcwNzEgOC4yOTI4OUMxOC4wOTc2IDguNjgzNDIgMTguMDk3NiA5LjMxNjU4IDE3LjcwNzEgOS43MDcxMUwxMi43MDcxIDE0LjcwNzFaIiBmaWxsPSIjMDAwMDAwIi8%2BDQo8L3N2Zz4%3D)%20%23FFFFFF%3B%0A%20%20transform%3A%20rotate(-90deg)%20translate(-5px%2C%20-5px)%3B%0A%20%20width%3A%2025px%3B%0A%20%20height%3A%2025px%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickMYDown**
`.IBPickMYDown`은 년/월 달력으로 변경하는 버튼의 이미지를 관리하는 클래스입니다.

```css
.IBPickMYDown {
  /* 이미지 변경 */ 
  background: no-repeat right/20px url(data:image/svg+xml;base64,<BASE64_OMITTED length=820 preview=PD94bWwgdmVyc2lvbj0i...>);
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 년/월 달력으로 변경 버튼
![커스텀 년/월 달력으로 변경 버튼 적용](/assets/imgs/styleguide_date_md_down_custom.png "커스텀 년/월 달력으로 변경 버튼 적용")
<!-- IMAGE: 버튼 이미지 - 커스텀 년/월 달력으로 변경 버튼 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickMYDown%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EB%B3%80%EA%B2%BD%20*%2F%20%0A%20%20background%3A%20no-repeat%20right%2F20px%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNzA3MSAxNC43MDcxQzEyLjMxNjYgMTUuMDk3NiAxMS42ODM0IDE1LjA5NzYgMTEuMjkyOSAxNC43MDcxTDYuMjkyODkgOS43MDcxMUM1LjkwMjM3IDkuMzE2NTggNS45MDIzNyA4LjY4MzQyIDYuMjkyODkgOC4yOTI4OUM2LjY4MzQyIDcuOTAyMzcgNy4zMTY1OCA3LjkwMjM3IDcuNzA3MTEgOC4yOTI4OUwxMiAxMi41ODU4TDE2LjI5MjkgOC4yOTI4OUMxNi42ODM0IDcuOTAyMzcgMTcuMzE2NiA3LjkwMjM3IDE3LjcwNzEgOC4yOTI4OUMxOC4wOTc2IDguNjgzNDIgMTguMDk3NiA5LjMxNjU4IDE3LjcwNzEgOS43MDcxMUwxMi43MDcxIDE0LjcwNzFaIiBmaWxsPSIjMDAwMDAwIi8%2BDQo8L3N2Zz4%3D)%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBMain span**
`.IBMain span`은 달력에서 년/월의 문자열이 출력 되는 영역을 관리하는 클래스입니다.

```css
.IBMain span {
  /* 글자색 변경 */
  color: #ffffff;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 년/월의 문자열
![커스텀 년/월의 문자열 적용](/assets/imgs/styleguide_date_md_span_custom.png "커스텀 년/월의 문자열 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 년/월의 문자열 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBMain%20span%20%7B%0A%20%20%2F*%20%EA%B8%80%EC%9E%90%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20color%3A%20%23ffffff%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickRowW**
`.IBPickRowW`은 요일이 출력 되는 영역을 관리하는 클래스입니다.

```css
.IBPickRowW {
  /* 배경색 변경 */
  background: #affffc;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 요일 영역
![커스텀 요일 영역 적용](/assets/imgs/styleguide_date_md_week_row_custom.png "커스텀 요일 영역 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 요일 영역 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickRowW%20%7B%0A%20%20%2F*%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background%3A%20%23affffc%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickWDN.IBPickSu**
`.IBPickWDN.IBPickSu`은 월/일 달력에서 요일이 출력 되는 영역에서 일요일을 관리하는 클래스입니다.

```css
.IBPickWDN.IBPickSu {
  /* 글자색 변경 */
  color: #0043ff;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 요일 영역 중 일요일
![커스텀 요일 영역 적용 중 일요일](/assets/imgs/styleguide_date_md_week_row_sun_custom.png "커스텀 요일 영역 적용 중 일요일")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 요일 영역 적용 중 일요일 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickWDN.IBPickSu%20%7B%0A%20%20%2F*%20%EA%B8%80%EC%9E%90%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20color%3A%20%230043ff%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickWDN.IBPickSa**
`.IBPickWDN.IBPickSa`은 월/일 달력에서 요잉이 출력 되는 영역에서 토요일을 관리하는 클래스입니다.

```css
.IBPickWDN.IBPickSa {
  /* 글자색 변경 */
  color: #ec264b;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 요일 영역중 토요일
![커스텀 요일 영역중 토요일 적용](/assets/imgs/styleguide_date_md_week_row_sat_custom.png "커스텀 요일 영역중 토요일 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 요일 영역중 토요일 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickWDN.IBPickSa%20%7B%0A%20%20%2F*%20%EA%B8%80%EC%9E%90%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20color%3A%20%23ec264b%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickSu, .IBPickSu button**
`IBPickSu, .IBPickSu button`은 월/일 달력에서 날짜가 출력 되는 영역에서 일요일을 관리하는 클래스입니다.

```css
.IBPickSu, .IBPickSu button {
  /* 글자색 변경 */
  color: #0043ff;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 날짜 영역중 일요일
![커스텀 날짜 영역중 일요일 적용](/assets/imgs/styleguide_date_md_date_row_sun_custom.png "커스텀 날짜 영역중 일요일 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 날짜 영역중 일요일 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickSu%2C%20.IBPickSu%20button%20%7B%0A%20%20%2F*%20%EA%B8%80%EC%9E%90%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20color%3A%20%230043ff%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickSa, .IBPickSa button**
`.IBPickSa, .IBPickSa button`은 월/일 달력에서 날짜가 출력 되는 영역에서 토요일을 관리하는 클래스입니다.

```css
.IBPickSa, .IBPickSa button {
  /* 글자색 변경 */
  color: #ec264b;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 날짜 영역중 토요일
![커스텀 날짜 영역중 토요일 적용](/assets/imgs/styleguide_date_md_data_row_sat_custom.png "커스텀 날짜 영역중 토요일 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 날짜 영역중 토요일 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickSa%2C%20.IBPickSa%20button%20%7B%0A%20%20%2F*%20%EA%B8%80%EC%9E%90%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20color%3A%20%23ec264b%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickOM, .IBPickOMNE, .IBPickOM button**
`.IBPickOM, .IBPickOMNE, .IBPickOM button`은 월/일 달력에서 날짜가 출력 되는 영역에서 이번 달이 아닌 날짜를 관리하는 클래스입니다.

```css
.IBPickOM, .IBPickOMNE, .IBPickOM button {
  /* 글자색 변경 */
  color: #44baba
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 이번 달이 아닌 날짜
![커스텀 이번 달이 아닌 날짜 적용](/assets/imgs/styleguide_date_non_thisMonth_custom.png "커스텀 이번 달이 아닌 날짜 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 이번 달이 아닌 날짜 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickOM%2C%20.IBPickOMNE%2C%20.IBPickOM%20button%20%7B%0A%20%20%2F*%20%EA%B8%80%EC%9E%90%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20color%3A%20%2344baba%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickOM.IBPickSu, .IBPickOM.IBPickSu button**
`.IBPickOM.IBPickSu, .IBPickOM.IBPickSu button`은 월/일 달력에서 날짜가 출력 되는 영역에서 이번 달이 아닌 날짜 중 일요일를 관리하는 클래스입니다.

```css
.IBPickOM.IBPickSu, .IBPickOM.IBPickSu button {
  /* 글자색 변경 */
color: green;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 이번 달이 아닌 날짜 중 일요일
![커스텀 이번 달이 아닌 날짜 중 일요일 적용](/assets/imgs/styleguide_date_non_thisMonth_sun_custom.png "커스텀 이번 달이 아닌 날짜 중 일요일 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 이번 달이 아닌 날짜 중 일요일 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickOM.IBPickSu%2C%20.IBPickOM.IBPickSu%20button%20%7B%0A%20%20%2F*%20%EA%B8%80%EC%9E%90%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0Acolor%3A%20green%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickOM.IBPickSa, .IBPickOM.IBPickSa button**
`.IBPickOM.IBPickSa, .IBPickOM.IBPickSa button`은 월/일 달력에서 날짜가 출력 되는 영역에서 이번 달이 아닌 날짜 중 토요일를 관리하는 클래스입니다.

```css
.IBPickOM.IBPickSa, .IBPickOM.IBPickSa button {
  /* 글자색 변경 */
  color: #6decd6;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 이번 달이 아닌 날짜 중 토요일
![커스텀 이번 달이 아닌 날짜 중 토요일 적용](/assets/imgs/styleguide_date_non_thisMonth_sat_custom.png "커스텀 이번 달이 아닌 날짜 중 토요일 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 이번 달이 아닌 날짜 중 토요일 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickOM.IBPickSa%2C%20.IBPickOM.IBPickSa%20button%20%7B%0A%20%20%2F*%20%EA%B8%80%EC%9E%90%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20color%3A%20%236decd6%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickSel, .IBPick2MSel, .IBPick2YSel**
`.IBPickSel, .IBPick2MSel, .IBPick2YSel`은 선택된 날짜에 적용되는 클래스입니다.

```css
.IBPickSel, .IBPick2MSel, .IBPick2YSel {
  /* 배경색 변경 */
  background-color: #3ed736;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 날짜 선택
![커스텀 날짜 선택 적용](/assets/imgs/styleguide_date_md_pick_custom.png "커스텀 날짜 선택 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 날짜 선택 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickSel%2C%20.IBPick2MSel%2C%20.IBPick2YSel%20%7B%0A%20%20%2F*%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background-color%3A%20%233ed736%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickHover, .IBPick2MHover, .IBPick2YHover**
`.IBPickHover, .IBPick2MHover, .IBPick2YHover`은 Hover된 날짜에 적용되는 클래스입니다.

```css
.IBPickHover, .IBPick2MHover, .IBPick2YHover {
  /* 배경색 변경 */
  background-color: #faaaaa;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 날짜 Hover
![커스텀 날짜 Hover 적용](/assets/imgs/styleguide_date_md_hover_custom.png "커스텀 날짜 Hover 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 날짜 Hover 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickHover%2C%20.IBPick2MHover%2C%20.IBPick2YHover%20%7B%0A%20%20%2F*%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background-color%3A%20%23faaaaa%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickNow**
`.IBPickNow`은 월/일 달력에서 해당 일이 오늘인 경우 적용되는 클래스입니다.

```css
.IBPickNow {
  /* 배경색 변경 */
  background-color: #b1a5fd;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 달력
![기본 테마의 달력](/assets/imgs/styleguide_date_md_default.png "기본 테마의 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 달력 -->|커스텀 오늘 날짜
![커스텀 오늘 날짜 적용](/assets/imgs/styleguide_date_md_today_custom.png "커스텀 오늘 날짜 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 오늘 날짜 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickNow%20%7B%0A%20%20%2F*%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background-color%3A%20%23b1a5fd%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickMYUp**
`.IBPickMYUp`은 월/일 달력으로 변경하는 버튼의 이미지를 관리하는 클래스입니다.

```css
.IBPickMYUp {
  /* 이미지 변경 */
  background: no-repeat right/20px url(data:image/svg+xml;base64,<BASE64_OMITTED length=852 preview=PD94bWwgdmVyc2lvbj0i...>);
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 년월 달력
![기본 테마의 년월 달력](/assets/imgs/styleguide_date_ym_default.png "기본 테마의 년월 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 년월 달력 -->|커스텀 월/일 달력으로 변경 버튼
![커스텀 월/일 달력으로 변경 적용](/assets/imgs/styleguide_date_ym_up_custom.png "커스텀 월/일 달력으로 변경 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 월/일 달력으로 변경 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickMYUp%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background%3A%20no-repeat%20right%2F20px%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwKSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuNzA3MSAxNC43MDcxQzEyLjMxNjYgMTUuMDk3NiAxMS42ODM0IDE1LjA5NzYgMTEuMjkyOSAxNC43MDcxTDYuMjkyODkgOS43MDcxMUM1LjkwMjM3IDkuMzE2NTggNS45MDIzNyA4LjY4MzQyIDYuMjkyODkgOC4yOTI4OUM2LjY4MzQyIDcuOTAyMzcgNy4zMTY1OCA3LjkwMjM3IDcuNzA3MTEgOC4yOTI4OUwxMiAxMi41ODU4TDE2LjI5MjkgOC4yOTI4OUMxNi42ODM0IDcuOTAyMzcgMTcuMzE2NiA3LjkwMjM3IDE3LjcwNzEgOC4yOTI4OUMxOC4wOTc2IDguNjgzNDIgMTguMDk3NiA5LjMxNjU4IDE3LjcwNzEgOS43MDcxMUwxMi43MDcxIDE0LjcwNzFaIiBmaWxsPSIjMDAwMDAwIi8%2BDQo8L3N2Zz4%3D)%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPick2BL**
`.IBPick2BL`은 년/월 달력에서 이전 년도로 이동하는 버튼의 이미지에 적용되는 클래스입니다.

```css
.IBPick2BL {
  /* 이미지 변경 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=548 preview=PHN2ZyBmaWxsPSIjMDAw...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 년월 달력
![기본 테마의 년월 달력](/assets/imgs/styleguide_date_ym_default.png "기본 테마의 년월 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 년월 달력 -->|커스텀 이전 년도 버튼
![커스텀 이전 년도 버튼 적용](/assets/imgs/styleguide_date_ym_2bl.png "커스텀 이전 년도 버튼 적용")
<!-- IMAGE: 버튼 이미지 - 커스텀 이전 년도 버튼 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPick2BL%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI%2BPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI%2BPHBhdGggZD0iTTEuMjkzLDEyLjcwN2ExLDEsMCwwLDEsMC0xLjQxNGw1LTVBMSwxLDAsMCwxLDcuNzA3LDcuNzA3TDQuNDE0LDExSDIyYTEsMSwwLDAsMSwwLDJINC40MTRsMy4yOTMsMy4yOTNhMSwxLDAsMSwxLTEuNDE0LDEuNDE0WiI%2BPC9wYXRoPjwvZz48L3N2Zz4%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPick2BR**
`.IBPick2BR`은 년/월 달력에서 다음 년도로 이동하는 버튼의 이미지에 적용되는 클래스입니다.

```css
.IBPick2BR {
  /* 이미지 변경 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=552 preview=PHN2ZyBmaWxsPSIjMDAw...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 년월 달력
![기본 테마의 년월 달력](/assets/imgs/styleguide_date_ym_default.png "기본 테마의 년월 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 년월 달력 -->|커스텀 다음 년도 버튼
![커스텀 다음 년도 버튼 적용](/assets/imgs/styleguide_date_ym_2br.png "커스텀 다음 년도 버튼 적용")
<!-- IMAGE: 버튼 이미지 - 커스텀 다음 년도 버튼 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPick2BR%20%7B%0A%20%20%2F*%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyBmaWxsPSIjMDAwMDAwIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI%2BPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiPjwvZz48ZyBpZD0iU1ZHUmVwb190cmFjZXJDYXJyaWVyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvZz48ZyBpZD0iU1ZHUmVwb19pY29uQ2FycmllciI%2BPHBhdGggZD0iTTE2LjcwNywxOC43MDdhMSwxLDAsMCwxLTEuNDE0LTEuNDE0TDE5LjU4NiwxM0gyYTEsMSwwLDAsMSwwLTJIMTkuNTg2TDE1LjI5Myw2LjcwN2ExLDEsMCwwLDEsMS40MTQtMS40MTRsNiw2YTEsMSwwLDAsMSwwLDEuNDE0WiI%2BPC9wYXRoPjwvZz48L3N2Zz4%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPick2Footer**
`.IBPick2Footer`은 달력의 하단 영역을 관리하는 클래스입니다.

```css
.IBPick2Footer {
  /* 배경색 변경 */
  background: #abff17;
  /* 여백 변경 */
  padding: 10px 0px 10px 0px;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 년월 달력
![기본 테마의 년월 달력](/assets/imgs/styleguide_date_ym_default.png "기본 테마의 년월 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 년월 달력 -->|커스텀 달력 하단 영역>
![커스텀 달력 하단 영역 적용](/assets/imgs/styleguide_date_ym_footer_custom.png "커스텀 달력 하단 영역 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 달력 하단 영역 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPick2Footer%20%7B%0A%20%20%2F*%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background%3A%20%23abff17%3B%0A%20%20%2F*%20%EC%97%AC%EB%B0%B1%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20padding%3A%2010px%200px%2010px%200px%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBPickButton**
`.IBPickButton`은 달력의 하단 영역에 있는 버튼을 관리하는 클래스입니다.

```css
.IBPickButton{
  /* 배경색 변경 */
  background: orange;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 년월 달력
![기본 테마의 년월 달력](/assets/imgs/styleguide_date_ym_default.png "기본 테마의 년월 달력")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 년월 달력 -->|커스텀 달력 하단 영역 버튼
![커스텀 달력 하단 영역 버튼 적용](/assets/imgs/styleguide_date_ym_footer_button_custom.png "커스텀 달력 하단 영역 버튼 적용")
<!-- IMAGE: 버튼 이미지 - 커스텀 달력 하단 영역 버튼 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBPickButton%7B%0A%20%20%2F*%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background%3A%20orange%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>