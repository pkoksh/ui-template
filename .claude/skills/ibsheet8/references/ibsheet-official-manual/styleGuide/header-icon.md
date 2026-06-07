---
KEY: headerIcon
KIND: style-guide
PATH: styleGuide/header-icon
ALIAS: 헤더, 영역, 아이콘
ALIAS_EN: header, icon
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/styleGuide/header-icon
---
# 헤더 영역(아이콘)

## 필수 입력 아이콘

### **.IBRequired**

`.IBRequired`는 Header영역에서 필수 값을 항목의 아이콘을 관리하는 클래스입니다.

```css
.IBRequired {
  /* 노란색 별 이미지를 빨간 색 별 이미지로 교체 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=884 preview=PHN2ZyB4bWxucz0iaHR0...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 필수 값 아이콘
![기본 테마의 필수 값 아이콘](/assets/imgs/styleguide_header_icon_req1.png "기본 테마의 필수 값 아이콘")
<!-- IMAGE: 아이콘 이미지 - 기본 테마의 필수 값 아이콘 -->|커스텀 필수 값 아이콘
![커스텀 필수 값 아이콘 적용](/assets/imgs/styleguide_header_icon_req2.png "커스텀 필수 값 아이콘 적용")
<!-- IMAGE: 아이콘 이미지 - 커스텀 필수 값 아이콘 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#filternsort?customCss=%0A.IBRequired%20%7B%0A%20%20%2F*%20%EB%85%B8%EB%9E%80%EC%83%89%20%EB%B3%84%20%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A5%BC%20%EB%B9%A8%EA%B0%84%20%EC%83%89%20%EB%B3%84%20%EC%9D%B4%EB%AF%B8%EC%A7%80%EB%A1%9C%20%EA%B5%90%EC%B2%B4%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ny45NCA0Ny45NCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0Ny45NCA0Ny45NCI%2BPHBhdGggZD0iTTI2LjI4NSAyLjQ4Nmw1LjQwNyAxMC45NTZjLjM3Ni43NjIgMS4xMDMgMS4yOSAxLjk0NCAxLjQxMmwxMi4wOTEgMS43NTdjMi4xMTguMzA4IDIuOTYzIDIuOTEgMS40MzEgNC40MDNsLTguNzQ5IDguNTI4Yy0uNjA4LjU5My0uODg2IDEuNDQ4LS43NDIgMi4yODVsMi4wNjUgMTIuMDQyYy4zNjIgMi4xMDktMS44NTIgMy43MTctMy43NDYgMi43MjJsLTEwLjgxNC01LjY4NWMtLjc1Mi0uMzk1LTEuNjUxLS4zOTUtMi40MDMgMGwtMTAuODE0IDUuNjg1Yy0xLjg5NC45OTYtNC4xMDgtLjYxMy0zLjc0Ni0yLjcyMmwyLjA2NS0xMi4wNDJjLjE0NC0uODM3LS4xMzQtMS42OTItLjc0Mi0yLjI4NWwtOC43NDktOC41MjhjLTEuNTMyLTEuNDk0LS42ODctNC4wOTYgMS40MzEtNC40MDNsMTIuMDkxLTEuNzU3Yy44NDEtLjEyMiAxLjU2OC0uNjUgMS45NDQtMS40MTJsNS40MDctMTAuOTU2Yy45NDYtMS45MTkgMy42ODItMS45MTkgNC42MjkgMHoiIGZpbGw9IiNmZjAwMDAiLz48L3N2Zz4%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

* * *

## 정렬 아이콘

### **.IBSort1Left, .IBSort1Right, .IBSort2Left, .IBSort2Right, .IBSort3Left, .IBSort3Right, .IBSort4Left, .IBSort4Right, .IBSort5Left, .IBSort5Right, .IBSort6Left, .IBSort6Right**

정렬 아이콘은 최대 3순위까지의 오름차순, 내림차순 아이콘을 제공합니다.

`.IBSort1Left, .IBSort1Right`는 1순위 오름차순 정렬 아이콘을 관리하는 클래스입니다.

`.IBSort2Left, .IBSort2Right`는 2순위 오름차순 정렬 아이콘을 관리하는 클래스입니다.

`.IBSort3Left, .IBSort3Right`는 3순위 오름차순 정렬 아이콘을 관리하는 클래스입니다.

`.IBSort4Left, .IBSort4Right`는 1순위 내림차순 정렬 아이콘을 관리하는 클래스입니다.

`.IBSort5Left, .IBSort5Right`는 2순위 내림차순 정렬 아이콘을 관리하는 클래스입니다.

`.IBSort6Left, .IBSort6Right`는 3순위 내림차순 정렬 아이콘을 관리하는 클래스입니다.

```css
.IBSort1Left, .IBSort1Right {
  /* 1순위 오름차순 아이콘 변경 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=580 preview=PHN2ZyB4bWxucz0iaHR0...>)
}
.IBSort4Left, .IBSort4Right {
  /* 1순위 내림차순 아이콘 변경 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=580 preview=PHN2ZyB4bWxucz0iaHR0...>)
}
```
|기본 테마|커스텀 적용 |
|-----|-----|
|기본 테마의 오름차순 아이콘
![기본 테마의 오름차순 아이콘](/assets/imgs/styleguide_header_icon_sort_asc1.png "기본 테마의 오름차순 아이콘")
<!-- IMAGE: 아이콘 이미지 - 기본 테마의 오름차순 아이콘 -->|커스텀 1순위 오름차순 아이콘
![커스텀 1순위 오름차순 아이콘 적용](/assets/imgs/styleguide_header_icon_sort_asc2.png "커스텀 1순위 오름차순 아이콘 적용")
<!-- IMAGE: 아이콘 이미지 - 커스텀 1순위 오름차순 아이콘 적용 -->|
|기본 테마의 내림차순 아이콘
![기본 테마의 내림차순 아이콘](/assets/imgs/styleguide_header_icon_sort_desc1.png "기본 테마의 내림차순 아이콘")
<!-- IMAGE: 아이콘 이미지 - 기본 테마의 내림차순 아이콘 -->|커스텀 1순위 내림차순 아이콘
![커스텀 1순위 내림차순 아이콘 적용](/assets/imgs/styleguide_header_icon_sort_desc2.png "커스텀 1순위 내림차순 아이콘 적용")
<!-- IMAGE: 아이콘 이미지 - 커스텀 1순위 내림차순 아이콘 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#filternsort?customCss=%0A.IBSort1Left%2C%20.IBSort1Right%20%7B%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgdmlld0JveD0iMCAwIDMyMCAzMjAiPjxnIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBmaWxsPSJub25lIj48cGF0aCBkPSJNODIgOTcuNDAydjEyNS4xOTZNMjcuODc4IDE1MS41MjRsNTQuMTIyLTU0LjEyMiA1NC4xMjIgNTQuMTIyIi8%2BPC9nPjxnIG9wYWNpdHk9Ii4zIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZmlsbD0ibm9uZSI%2BPHBhdGggZD0iTTIzNy45OTkgMjIyLjU5OHYtMTI1LjE5Nk0yOTIuMTIyIDE2OC40NzZsLTU0LjEyMyA1NC4xMjItNTQuMTIxLTU0LjEyMiIvPjwvZz48L3N2Zz4%3D)%0A%7D%0A.IBSort4Left%2C%20.IBSort4Right%20%7B%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgdmlld0JveD0iMCAwIDMyMCAzMjAiPjxnIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjM4IDIyMi41OTh2LTEyNS4xOTZNMjkyLjEyMiAxNjguNDc2bC01NC4xMjIgNTQuMTIyLTU0LjEyMi01NC4xMjIiLz48L2c%2BPGcgb3BhY2l0eT0iLjMiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBmaWxsPSJub25lIj48cGF0aCBkPSJNODIuMDAxIDk3LjQwMnYxMjUuMTk2TTI3Ljg3OCAxNTEuNTI0bDU0LjEyMy01NC4xMjIgNTQuMTIxIDU0LjEyMiIvPjwvZz48L3N2Zz4%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

```css
.IBSort2Left, .IBSort2Right {
  /* 2순위 오름차순 아이콘 변경 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=584 preview=PHN2ZyB4bWxucz0iaHR0...>)
}
.IBSort5Left, .IBSort5Right {
  /* 2순위 내림차순 아이콘 변경 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=584 preview=PHN2ZyB4bWxucz0iaHR0...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 오름차순 아이콘
![기본 테마의 오름차순 아이콘](/assets/imgs/styleguide_header_icon_sort_asc1.png "기본 테마의 오름차순 아이콘")
<!-- IMAGE: 아이콘 이미지 - 기본 테마의 오름차순 아이콘 -->|커스텀 2순위 오름차순 아이콘
![커스텀 2순위 오름차순 아이콘 적용](/assets/imgs/styleguide_header_icon_sort_asc3.png "커스텀 2순위 오름차순 아이콘 적용")
<!-- IMAGE: 아이콘 이미지 - 커스텀 2순위 오름차순 아이콘 적용 -->|
|기본 테마의 내림차순 아이콘
![기본 테마의 내림차순 아이콘](/assets/imgs/styleguide_header_icon_sort_desc1.png "기본 테마의 내림차순 아이콘")
<!-- IMAGE: 아이콘 이미지 - 기본 테마의 내림차순 아이콘 -->|커스텀 2순위 내림차순 아이콘
![커스텀 2순위 내림차순 아이콘 적용](/assets/imgs/styleguide_header_icon_sort_desc3.png "커스텀 2순위 내림차순 아이콘 적용")
<!-- IMAGE: 아이콘 이미지 - 커스텀 2순위 내림차순 아이콘 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#filternsort?customCss=%0A.IBSort2Left%2C%20.IBSort2Right%20%7B%0A%20%20%2F*%202%EC%88%9C%EC%9C%84%20%EC%98%A4%EB%A6%84%EC%B0%A8%EC%88%9C%20%EC%95%84%EC%9D%B4%EC%BD%98%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgdmlld0JveD0iMCAwIDMyMCAzMjAiPjxnIHN0cm9rZT0iIzlERTRGNCIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBmaWxsPSJub25lIj48cGF0aCBkPSJNODIgOTcuNDAydjEyNS4xOTZNMjcuODc4IDE1MS41MjRsNTQuMTIyLTU0LjEyMiA1NC4xMjIgNTQuMTIyIi8%2BPC9nPjxnIG9wYWNpdHk9Ii4zIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZmlsbD0ibm9uZSI%2BPHBhdGggZD0iTTIzNy45OTkgMjIyLjU5OHYtMTI1LjE5Nk0yOTIuMTIyIDE2OC40NzZsLTU0LjEyMyA1NC4xMjItNTQuMTIxLTU0LjEyMiIvPjwvZz48L3N2Zz4%3D)%0A%7D%0A.IBSort5Left%2C%20.IBSort5Right%20%7B%0A%20%20%2F*%202%EC%88%9C%EC%9C%84%20%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%20%EC%95%84%EC%9D%B4%EC%BD%98%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgdmlld0JveD0iMCAwIDMyMCAzMjAiPjxnIHN0cm9rZT0iIzlERTRGNCIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjM3IDIyMi41OTh2LTEyNS4xOTZNMjkxLjEyMiAxNjguNDc3bC01NC4xMjIgNTQuMTIxLTU0LjEyMi01NC4xMjEiLz48L2c%2BPGcgb3BhY2l0eT0iLjMiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBmaWxsPSJub25lIj48cGF0aCBkPSJNODEuMDAxIDk3LjQwMnYxMjUuMTk2TTI2Ljg3OCAxNTEuNTI0bDU0LjEyMy01NC4xMjIgNTQuMTIxIDU0LjEyMiIvPjwvZz48L3N2Zz4%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

```css
.IBSort3Left, .IBSort3Right {
  /* 3순위 오름차순 아이콘 변경 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=524 preview=PHN2ZyB4bWxucz0iaHR0...>)
}
.IBSort6Left, .IBSort6Right {
  /* 3순위 내림차순 아이콘 변경 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=524 preview=PHN2ZyB4bWxucz0iaHR0...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 오름차순 아이콘
![기본 테마의 오름차순 아이콘](/assets/imgs/styleguide_header_icon_sort_asc1.png "기본 테마의 오름차순 아이콘")
<!-- IMAGE: 아이콘 이미지 - 기본 테마의 오름차순 아이콘 -->|커스텀 3순위 오름차순 아이콘
![커스텀 3순위 오름차순 아이콘 적용](/assets/imgs/styleguide_header_icon_sort_asc4.png "커스텀 3순위 오름차순 아이콘 적용")
<!-- IMAGE: 아이콘 이미지 - 커스텀 3순위 오름차순 아이콘 적용 -->|
|기본 테마의 내림차순 아이콘
![기본 테마의 내림차순 아이콘](/assets/imgs/styleguide_header_icon_sort_desc1.png "기본 테마의 내림차순 아이콘")
<!-- IMAGE: 아이콘 이미지 - 기본 테마의 내림차순 아이콘 -->|커스텀 3순위 내림차순 아이콘
![커스텀 3순위 내림차순 아이콘 적용](/assets/imgs/styleguide_header_icon_sort_desc4.png "커스텀 3순위 내림차순 아이콘 적용")
<!-- IMAGE: 아이콘 이미지 - 커스텀 3순위 내림차순 아이콘 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#filternsort?customCss=%0A.IBSort3Left%2C%20.IBSort3Right%20%7B%0A%20%20%2F*%203%EC%88%9C%EC%9C%84%20%EC%98%A4%EB%A6%84%EC%B0%A8%EC%88%9C%20%EC%95%84%EC%9D%B4%EC%BD%98%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgdmlld0JveD0iMCAwIDMyMCAzMjAiPjxnIHN0cm9rZS13aWR0aD0iMjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZmlsbD0ibm9uZSI%2BPGcgc3Ryb2tlPSIjRkNBOTkyIj48cGF0aCBkPSJNODIgOTcuNDAydjEyNS4xOTZNMjcuODc4IDE1MS41MjRsNTQuMTIyLTU0LjEyMiA1NC4xMjIgNTQuMTIyIi8%2BPC9nPjxnIG9wYWNpdHk9Ii4zIiBzdHJva2U9IiNmZmYiPjxwYXRoIGQ9Ik0yMzcuOTk5IDIyMi41OTh2LTEyNS4xOTZNMjkyLjEyMiAxNjguNDc2bC01NC4xMjMgNTQuMTIyLTU0LjEyMS01NC4xMjIiLz48L2c%2BPC9nPjwvc3ZnPg%3D%3D)%0A%7D%0A.IBSort6Left%2C%20.IBSort6Right%20%7B%0A%20%20%2F*%203%EC%88%9C%EC%9C%84%20%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%20%EC%95%84%EC%9D%B4%EC%BD%98%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgdmlld0JveD0iMCAwIDMyMCAzMjAiPjxnIHN0cm9rZS13aWR0aD0iMjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZmlsbD0ibm9uZSI%2BPGcgc3Ryb2tlPSIjRkNBOTkyIj48cGF0aCBkPSJNMjM4IDIyMi41OTh2LTEyNS4xOTZNMjkyLjEyMiAxNjguNDc2bC01NC4xMjIgNTQuMTIyLTU0LjEyMi01NC4xMjIiLz48L2c%2BPGcgb3BhY2l0eT0iLjMiIHN0cm9rZT0iI2ZmZiI%2BPHBhdGggZD0iTTgyLjAwMSA5Ny40MDJ2MTI1LjE5Nk0yNy44NzggMTUxLjUyNGw1NC4xMjMtNTQuMTIyIDU0LjEyMSA1NC4xMjIiLz48L2c%2BPC9nPjwvc3ZnPg%3D%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

* * *

## 필터 다이얼로그 아이콘

### **.IBFilterDialog0Right**
`.IBFilterDialog0Right`는 필터 다이얼로그가 적용 전 상태의 아이콘을 관리하는 클래스입니다.

### **.IBFilterDialog1Right**
`.IBFilterDialog1Right`는 필터 다이얼로그가 적용 된 상태의 아이콘을 관리하는 클래스입니다.

```css
.IBFilterDialog0Right {
  /* 필터 다이얼로그 적용 전 상태 아이콘 변경 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=632 preview=PHN2ZyB3aWR0aD0iNjRw...>)
}
.IBFilterDialog1Right{
  /* 필터 다이얼로그 적용 된 상태 아이콘 변경 */
  background-image: url(data:image/svg+xml;base64,<BASE64_OMITTED length=632 preview=PHN2ZyB3aWR0aD0iNjRw...>)
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 필터 다이얼로그 아이콘
![기본 테마의 필터 다이얼로그 아이콘](/assets/imgs/styleguide_header_icon_filter_dialog_1.png "기본 테마의 필터 다이얼로그 아이콘")
<!-- IMAGE: 아이콘 이미지 - 기본 테마의 필터 다이얼로그 아이콘 -->|커스텀 필터 다이얼로그 아이콘
![커스텀 필터 다이얼로그 아이콘 적용](/assets/imgs/styleguide_header_icon_filter_dialog_2.png "커스텀 필터 다이얼로그 아이콘 적용")
<!-- IMAGE: 아이콘 이미지 - 커스텀 필터 다이얼로그 아이콘 적용 -->|

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#filternsort?customCss=%0A.IBFilterDialog0Right%20%7B%0A%20%20%2F*%20%ED%95%84%ED%84%B0%20%EB%8B%A4%EC%9D%B4%EC%96%BC%EB%A1%9C%EA%B7%B8%20%EC%A0%81%EC%9A%A9%20%EC%A0%84%20%EC%83%81%ED%83%9C%20%EC%95%84%EC%9D%B4%EC%BD%98%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwMDAwIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI%2BPC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI%2BPC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTE5IDVINUwxMiAxMy40TDE5IDVaIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg%2BIDxwYXRoIGQ9Ik0xMiAxMy40TDE5IDVINUwxMiAxMy40Wk0xMiAxMy40VjE5IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg%2BIDwvZz48L3N2Zz4%3D)%0A%7D%0A.IBFilterDialog1Right%7B%0A%20%20%2F*%20%ED%95%84%ED%84%B0%20%EB%8B%A4%EC%9D%B4%EC%96%BC%EB%A1%9C%EA%B7%B8%20%EC%A0%81%EC%9A%A9%20%EB%90%9C%20%EC%83%81%ED%83%9C%20%EC%95%84%EC%9D%B4%EC%BD%98%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background-image%3A%20url(data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwMDAwIj48ZyBpZD0iU1ZHUmVwb19iZ0NhcnJpZXIiIHN0cm9rZS13aWR0aD0iMCI%2BPC9nPjxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI%2BPC9nPjxnIGlkPSJTVkdSZXBvX2ljb25DYXJyaWVyIj4gPHBhdGggZD0iTTE5IDVINUwxMiAxMy40TDE5IDVaIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg%2BIDxwYXRoIGQ9Ik0xMiAxMy40TDE5IDVINUwxMiAxMy40Wk0xMiAxMy40VjE5IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg%2BIDwvZz48L3N2Zz4%3D)%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

* * *

## 문자열 정렬
<mark>IBSheet에서 내에서 문자열 정렬 기능을 사용하실 경우, 별도의 css를 이용하여 정렬하시지 마시고, 정렬 속성 (`Align`, `VAlign`)을 통해 정렬하시기를 권장 드립니다.</mark>

시트 생성 시점에서 헤더 행에서의 정렬 기능을 사용하기 위해서는 string형태로 값을 지정하던 사항을 object형태로 설정하고, 기존의 Text를 Value속성으로 설정하신 후, object 내에서 속성을 설정하셔서 정렬을 사용햐셔야 합니다.

시트가 생성이 완료된 이후에 헤더 행의 정렬 기능을 사용하시기 원하시는 경우에는 [setAttribute func](/docs/funcs/core/set-attribute)를 이용하시면 됩니다.

왼쪽, 가운데, 오른쪽의 가로 정렬은 Align속성 [Align row](/docs/props/row/align), [Align col](/docs/props/col/align), [Align cell](/docs/props/cell/align)을 통해 이루어집니다.

해당 속성을 통해 해당 컬럼에 정렬 class가 적용됩니다.

### **.IBAlignLeft**

`.IBAlignLeft`은 왼쪽 정렬 속성이 설정된 영역에 적용되는 클래스입니다.

### **.IBAlignCenter**

`.IBAlignCenter`은 가운데 정렬 속성이 설정된 영역에 적용되는 클래스입니다.

### **.IBAlignRight**

`.IBAlignRight`은 오른쪽 정렬 속성이 설정된 영역에 적용되는 클래스입니다.

```javascript
var OPT = {
  Def: {
    Header: {
      Height: 50
    }
  }
  Cols: [
    {"Header": {"Value": "Align Left", "Align": "Left"},"Type": "Text","Name": "TextData1","Width": 120,"CanEdit": 1},
    {"Header": {"Value": "Align Center", "Align": "Center"},"Type": "Text","Name": "TextData2","Width": 120,"CanEdit": 1},
    {"Header": {"Value": "Align Right", "Align": "Center"},"Type": "Text","Name": "TextData3","Width": 120,"CanEdit": 1},
  ]
}
```

가로 정렬

![가로 정렬](/assets/imgs/styleguide_header_icon_align.png "가로 정렬")
<!-- IMAGE: 아이콘 이미지 - 가로 정렬 -->

상단, 중단, 단의 세로 정렬은 VAlign속성 [VAlign row](/docs/props/row/v-align), [VAlign col](/docs/props/col/v-align), [VAlign cell](/docs/props/cell/v-align)을 통해 이루어집니다.

해당 속성을 통해 해당 컬럼에 정렬 class가 적용됩니다.

### **.IBVAlignTop**

`.IBVAlignTop`은 상단 정렬 속성이 설정된 영역에 적용되는 클래스입니다.

### **.IBVAlignMiddle**

`.IBVAlignMiddle`은 중단 정렬 속성이 설정된 영역에 적용되는 클래스입니다.

### **.IBVAlignBottom**

`.IBVAlignBottom`은 하단 정렬 속성이 설정된 영역에 적용되는 클래스입니다.

```javascript
var OPT = {
  Def: {
    Header: {
      Height: 50
    }
  }
  Cols: [
    {"Header": {"Value": "VAlign Top", "VAlign": "Top"},"Type": "Text","Name": "TextData1","Width": 120,"CanEdit": 1},
    {"Header": {"Value": "VAlign Middle", "VAlign": "Middle"},"Type": "Text","Name": "TextData2","Width": 120,"CanEdit": 1},
    {"Header": {"Value": "VAlign Bottom", "VAlign": "Bottom"},"Type": "Text","Name": "TextData3","Width": 120,"CanEdit": 1},
  ]
}
```

세로 정렬

![세로 정렬](/assets/imgs/styleguide_header_icon_valign.png "세로 정렬")
<!-- IMAGE: 아이콘 이미지 - 세로 정렬 -->