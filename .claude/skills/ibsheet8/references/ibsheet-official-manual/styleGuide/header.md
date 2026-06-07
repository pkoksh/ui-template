---
KEY: header
KIND: style-guide
PATH: styleGuide/header
ALIAS: 헤더, 영역
ALIAS_EN: header
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/styleGuide/header
---
# 헤더 영역

## 헤더 셀 배경색

### **.IBCellHeader**

IBCellHeader는 Header영역의 셀의 배경색 및 border를 관리하는 클래스입니다.

```css
.IBCellHeader {
  /* 셀 배경색 변경 */
  background: #585858;
}
```

기본 테마의 헤더

![기본 테마의 헤더](/assets/imgs/styleguide_header_style1.png "기본 테마의 헤더")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 헤더 -->

커스텀 배경색 적용

![커스텀 배경색 적용](/assets/imgs/styleguide_header_style2.png "커스텀 배경색 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 배경색 적용 -->

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#header?customCss=.IBCellHeader%7B%0A%20%20%2F*%20%EC%85%80%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background%3A%23585858%3B%0A%7D"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

* * *

## 헤더 border 설정

### **.IBCellHeader**

IBCellHeader는 Header영역의 셀의 배경색 및 border를 관리하는 클래스입니다.

```css
.IBCellHeader {
  /* 하단 border 색상 변경 */
  border-bottom: 1px solid #ff0000;
  /* 우측 border 색상 변경 */
  border-right: 1px solid #50ffee;
}
```

기본 테마의 헤더

![기본 테마의 헤더](/assets/imgs/styleguide_header_style1.png "기본 테마의 헤더")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 헤더 -->

커스텀 Border 색 적용

![커스텀 Border 색 적용](/assets/imgs/styleguide_header_style3.png "커스텀 Border 색 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 Border 색 적용 -->

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#header?customCss=.IBCellHeader%7B%0A%20%20%2F*%20%ED%95%98%EB%8B%A8%20border%20%EC%83%89%EC%83%81%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20border-bottom%3A1px%20solid%20%23ff0000%3B%0A%20%20%2F*%20%EC%9A%B0%EC%B8%A1%20border%20%EC%83%89%EC%83%81%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20border-right%3A1px%20solid%20%2350ffee%3B%0A%7D"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>