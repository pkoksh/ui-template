---
KEY: etc
KIND: style-guide
PATH: styleGuide/etc
ALIAS: 기타, 스타일, 적용
ALIAS_EN: etc, style, css
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/styleGuide/etc
---
# 기타 스타일 적용

## CSS가 아니라 제품 기능으로 적용되는 스타일

[ColorState cfg](/docs/props/cfg/color-state) 설정에 따라, 추가/수정/삭제 된 행에 배경색과, 추가/삭제 된 열에 대한 배경색, 수정된 셀에 대한 배경색, 수정 불가([CanEdit cell](/docs/props/cell/can-edit))의 속성이 `false`인 셀에 대한 배경색, Focus 불가([CanFocus cell](/docs/props/cell/can-focus))의 속성이 `false`인 셀에 글자색 그리고 오류가 있는 셀에 대한 배경색이 적용될 수 있습니다.

위의 색상들은 <mark>시트 생성 시점에 읽어서 적용되기 때문에 생성 이후 css를 변경하더라도 적용되지 않습니다.</mark>

### **.IBColorAdded**
`.IBColorAdded`는 추가된 행과 열에 적용되는 배경색을 관리하는 클래스입니다.

![행 추가](/assets/imgs/styleguide_etc_func_added.png "행 추가")
<!-- IMAGE: 스크린샷/예시 이미지 - 행 추가 -->

### **.IBColorChanged**
`.IBColorChanged`는 수정된 행에 적용되는 배경색을 관리하는 클래스입니다.

![행 수정](/assets/imgs/styleguide_etc_func_changed.png "행 수정")
<!-- IMAGE: 스크린샷/예시 이미지 - 행 수정 -->

### **.IBColorDeleted**
`.IBColorDeleted`는 삭제된 행과 열에 적용되는 배경색을 관리하는 클래스입니다.

![행 삭제](/assets/imgs/styleguide_etc_func_deleted.png "행 삭제")
<!-- IMAGE: 스크린샷/예시 이미지 - 행 삭제 -->

### **.IBColorChangedCell**
`.IBColorChangedCell`는 수정된 셀에 적용되는 배경색을 관리하는 클래스입니다.

![셀 수정](/assets/imgs/styleguide_etc_func_changedcell.png "셀 수정")
<!-- IMAGE: 스크린샷/예시 이미지 - 셀 수정 -->

### **.IBColorReadOnly**
`.IBColorReadOnly`는 수정 불가인 셀에 적용되는 배경색을 관리하는 클래스입니다.

![수정 불가](/assets/imgs/styleguide_etc_func_readonly.png "수정 불가")
<!-- IMAGE: 스크린샷/예시 이미지 - 수정 불가 -->

### **.IBColorNoFocus**
`.IBColorNoFocus`는 Focus가 적용 불가인 셀에 적용되는 글자색을 관리하는 클래스입니다.

![Focus 불가](/assets/imgs/styleguide_etc_func_nofocus.png "Focus 불가")
<!-- IMAGE: 스크린샷/예시 이미지 - Focus 불가 -->

### **.IBColorError**
`.IBColorError`는 에러가 발생한 셀에 적용되는 글자색을 관리하는 클래스입니다.

![셀 에러](/assets/imgs/styleguide_etc_func_error.png "셀 에러")
<!-- IMAGE: 스크린샷/예시 이미지 - 셀 에러 -->