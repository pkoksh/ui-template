---
KEY: css
KIND: style-guide
PATH: styleGuide/css
ALIAS: 기본, 적용
ALIAS_EN: css
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/styleGuide/css
---
# 기본 CSS 적용

## CSS 파일 링크
html파일에서 link tag로 사용하시려는 css파일을 호출하셔야 합니다.
아래 예제코드에서는 demo사이트에서 사용되는 기본 테마의 css를 경로를 설정한 사항입니다.
```html
<!-- ibsheet css -->
<link rel="stylesheet" href="https://demo.ibsheet.com/ibsheet/v8/samples/customer-sample/assets/ibsheet/css/default/main.css"/>
```
* * *

## CSS 파일이 적용되지 않은 경우
IBSheet는 사용 시, 테마에 맞는 CSS 파일을 호출하셔야 합니다.
만약 해당 테마에 맞는 CSS파일이 호출되지 않은 경우 아래 캡처와 같이 sheet div안에 tag가 생성되었으나, tag에 맞는 css정보를 찾지 못하여 하얀색 화면만 보일 수 있습니다.


sheet영역 개발자도구 확인

![sheet영역 개발자도구](/assets/imgs/styleguide_css_sheet_developer_tool.png "sheet영역 개발자도구")
<!-- IMAGE: 스크린샷/예시 이미지 - sheet영역 개발자도구 -->

sheet영역 개발자도구에서 선택한 영역

![sheet영역 개발자도구 선택영역](/assets/imgs/styleguide_css_sheet_developer_tool_selection.png "sheet영역 개발자도구 선택영역")
<!-- IMAGE: 스크린샷/예시 이미지 - sheet영역 개발자도구 선택영역 -->