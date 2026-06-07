---
KEY: selection
KIND: style-guide
PATH: styleGuide/selection
ALIAS: 에, 따른, 스타일, 적용
ALIAS_EN: selection, style, css
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/styleGuide/selection
---
# Focus, Hover, Select에 따른 스타일 적용

## 포커스 영역

시트에서 Focus 시, Focus 된 셀은 FocusCell로, 해당 행에서 그 외의 영역은 FocusRow로 나뉘어집니다.

### **.IBFocusCellBorder**
`.IBFocusCellBorder`은 Focus 된 Cell의 Border를 관리하는 클래스입니다.

```css
.IBFocusCellBorder {
  /* border 색상 변경 */
  border: 2px solid #ec5151;
}
```

기본 테마의 Focus 행

![기본 테마의 Focus 행](/assets/imgs/styleguide_focusrow_default.png "기본 테마의 Focus 행")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 Focus 행 -->

커스텀 Focus Cell Border

![커스텀 Focus Cell Border 적용](/assets/imgs/styleguide_forcusrow_cell_custom.png "커스텀 Focus Cell Border 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 Focus Cell Border 적용 -->

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#focus?customCss=%0A.IBFocusCellBorder%20%7B%0A%20%20%2F*%20border%20%EC%83%89%EC%83%81%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20border%3A%202px%20solid%20%23ec5151%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBFocusRowBackground**
`.IBFocusRowBackground`은 Focus 된 행에 배경색을 관리하는 클래스입니다.

```css
.IBFocusRowBackground {
  /* 포커스 행 배경색 변경 */
  background-color: #ba37e333;
}
```

기본 테마의 Focus 행

![기본 테마의 Focus 행](/assets/imgs/styleguide_focusrow_default.png "기본 테마의 Focus 행")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 Focus 행 -->

커스텀 Focus Row Background

![커스텀 Focus Row Background 적용](/assets/imgs/styleguide_forcusrow_background_custom.png "커스텀 Focus Row Background 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 Focus Row Background 적용 -->

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#focus?customCss=%0A.IBFocusRowBackground%20%7B%0A%20%20%2F*%20%ED%8F%AC%EC%BB%A4%EC%8A%A4%20%ED%96%89%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background-color%3A%20%23ba37e333%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBFocusRowBorder**
`.IBFocusRowBorder`은 Focus 된 행에 출력 되는 Border를 관리하는 클래스입니다.

```css
.IBFocusRowBorder {
  /* border 두께  색상 변경 */
  border: 2px solid #ff8500;
}
```

기본 테마의 Focus 행

![기본 테마의 Focus 행](/assets/imgs/styleguide_focusrow_default.png "기본 테마의 Focus 행")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 Focus 행 -->

커스텀 Focus Row Border

![커스텀 Focus Row Border 적용](/assets/imgs/styleguide_forcusrow_border_custom.png "커스텀 Focus Row Border 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 Focus Row Border 적용 -->

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#focus?customCss=%0A.IBFocusRowBorder%20%7B%0A%20%20%2F*%20border%20%EC%84%A0%20%EB%91%90%EA%BB%98%20%EB%B3%80%EA%B2%BD%20%EB%B0%8F%20%EC%83%89%EC%83%81%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20border%3A%202px%20solid%20%23ff8500%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

* * *

## Hover 행, 셀

시트에서 Hover 시, Hover 된 셀은 HoverCell로, 해당 행에서 그 외의 영역은 HoverRow로 나뉘어집니다.

### **.IBColorHoveredCell**
`.IBColorHoveredCell`은 Hover 된 셀의 배경색을 관리하는 클래스입니다.

시트 생성 시점에 해당 클래스의 정보를 읽어 Hover 된 셀의 배경색에 적용됩니다. 시트 생성 이후에 해당 클래스를 변경하여도 색상이 바로 적용되지는 않습니다.

예제에서는 확인을 위해 해당 셀에 해당 클래스를 추가하였습니다.

```css
.IBColorHoveredCell {
  /* 배경색 변경 */
  background-color: #ffaffb !important;
}
```

기본 테마의 Hover 행

![기본 테마의 Hover 행](/assets/imgs/styleguide_hover_default.png "기본 테마의 Hover 행")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 Hover 행 -->

커스텀 Hover Cell Background

![커스텀 Hover Cell Background 적용](/assets/imgs/styleguide_hover_cell_custom.png "커스텀 Hover Cell Background 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 Hover Cell Background 적용 -->

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#focus?customCss=%0A.IBColorHoveredCell%20%7B%0A%20%20%2F*%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background-color%3A%20%23ffaffb%20!important%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBHoverCellBorder**
`.IBHoverCellBorder`은 Hover 된 셀의 Border를 관리하는 클래스입니다.

```css
.IBHoverCellBorder {
  /* border 두께 및 색상 변경 */
  border: 2px solid #f81313;
}
```

기본 테마의 Hover 행

![기본 테마의 Hover 행](/assets/imgs/styleguide_hover_default.png "기본 테마의 Hover 행")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 Hover 행 -->

커스텀 Hover Cell Border

![커스텀 Hover Cell Border 적용](/assets/imgs/styleguide_hover_cell_boder_custom.png "커스텀 Hover Cell Border 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 Hover Cell Border 적용 -->

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#focus?customCss=%0A.IBHoverCellBorder%20%7B%0A%20%20%2F*%20border%20%EB%91%90%EA%BB%98%20%EB%B0%8F%20%EC%83%89%EC%83%81%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20border%3A%202px%20solid%20%23f81313%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBHoverRowBackground**
`.IBHoverRowBackground`은 Hover 된 행의 배경색을 관리하는 클래스입니다.

```css
.IBHoverRowBackground {
  /* 배경색 변경 */
  background: #5a19ff1a;
}
```

기본 테마의 Hover 행

![기본 테마의 Hover 행](/assets/imgs/styleguide_hover_default.png "기본 테마의 Hover 행")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 Hover 행 -->

커스텀 Hover Row Background

![커스텀 Hover Row Background 적용](/assets/imgs/styleguide_hover_row_background_custom.png "커스텀 Hover Row Background 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 Hover Row Background 적용 -->

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#focus?customCss=%0A.IBHoverRowBackground%20%7B%0A%20%20%2F*%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background%3A%20%235a19ff1a%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBHoverRowBorder**
`.IBHoverRowBorder`은 Hover 된 행에 출력 되는 Border를 관리하는 클래스입니다.

```css
.IBHoverRowBorder {
  /* border 두께 및 색상 변경 */
  border: 2px solid #ae59ff;
}
```

기본 테마의 Hover 행

![기본 테마의 Hover 행](/assets/imgs/styleguide_hover_default.png "기본 테마의 Hover 행")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 Hover 행 -->

커스텀 Hover Row Border

![커스텀 Hover Row Border 적용](/assets/imgs/styleguide_hover_row_border_custom.png "커스텀 Hover Border Background 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 Hover Row Border 적용 -->

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#focus?customCss=%0A.IBHoverRowBorder%20%7B%0A%20%20%2F*%20border%20%EB%91%90%EA%BB%98%20%EB%B0%8F%20%EC%83%89%EC%83%81%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20border%3A%202px%20solid%20%23ae59ff%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

* * *

## 선택(Select) 영역

### **.IBColorSelected,.IBColorSelectedCell**
`.IBColorSelected,.IBColorSelectedCell`은 시트 생성 시점에 해당 클래스의 정보를 읽어 선택(Selct)된 영역에 해당하는 셀에 배경색을 적용됩니다. 

<mark>시트 생성 이후에 해당 클래스를 변경하여도 색상이 바로 적용되지는 않습니다.</mark>

예제에서는 확인을 위해 해당 셀에 해당 클래스를 추가하였습니다.

```css
.IBColorSelected,.IBColorSelectedCell {
  /* 배경색 변경 */
  background-color: #dcbdff;
}
```

기본 테마의 Selected

![기본 테마의 Selected](/assets/imgs/styleguide_select_default.png "기본 테마의 Selected")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 Selected -->

커스텀 Selected

![커스텀 Selected 적용](/assets/imgs/styleguide_select_custom.png "커스텀 Selected 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 Selected 적용 -->

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#focus?customCss=%0A.IBColorSelected%2C.IBColorSelectedCell%20%7B%0A%20%20%2F*%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20background-color%3A%20%23dcbdff%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>