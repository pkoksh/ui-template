---
KEY: data
KIND: style-guide
PATH: styleGuide/data
ALIAS: 데이터, 본문, 영역
ALIAS_EN: data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/styleGuide/data
---
# 데이터(본문 영역)

## 짝/홀수 행 배경색
짝수 혹은 홀수 행일 때 강조 배경색은 [Alternate cfg](/docs/props/cfg/alternate)의 설정에 따라 적용됩니다.

### **.IBColorDefault**
`.IBColorDefault`는 Alternate 대상이 아닌 일반 데이터행의 배경색을 관리하는 클래스입니다.

### **.IBColorAlternate**
`.IBColorAlternate`는 Alternate 대상인 데이터행의 배경색을 관리하는 클래스입니다.

<mark>`.IBColorDefault`와 `.IBColorAlternate` 클래스는 시트 생성 시점에 읽어서 적용되기 때문에 생성 이후 css를 변경하더라도 적용되지 않습니다.</mark>

[Alternate cfg](/docs/props/cfg/alternate)는 `.IBColorAlternate`외에 [AlternateColor row](/docs/props/row/alternate-color)와 외부 클래스를 이용하는 [AlternateClass row](/docs/props/row/alternate-class)를 통해 배경색을 설정하실 수 있습니다.

```javascript
var OPT = {
  Def: {
    Row: {
      AlternateColor: 'skyblue'
    }
  }
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 Alternate
![기본 테마의 Alternate](/assets/imgs/styleguide_data_alternate_default.png "기본 테마의 Alternate")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 Alternate -->|커스텀 Alternate
![커스텀 Alternate 적용](/assets/imgs/styleguide_data_alternate_custom.png "커스텀 Alternate 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 Alternate 적용 -->|

* * *

## 행 높이 설정
행의 높이가 css를 통해 수정되었을 때에는 정상적으로 스크롤 동작이 이뤄지지 않을 수 있습니다.

<mark>행 높이 변경이 필요한 경우, css가 아니라 속성을 통해서 설정을 진행해주시기 바랍니다.</mark>

먼저, 행의 최소 높이는 [Size cfg](/docs/props/cfg/size)에 맞춰 설정해주시기 바랍니다.

그 외의 행 높이 설정은 [Height row](/docs/props/row/height)를 통해 설정하셔야 합니다.

```javascript
var OPT = {
  Def: {
    Row: {
      Height: 100
    }
  }
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 행의 기본 높이
![기본 테마의 Alternate](/assets/imgs/styleguide_data_alternate_default.png "기본 테마의 Alternate")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 Alternate -->|행의 높이 100px
![행의 높이 100px 적용](/assets/imgs/styleguide_data_row_height.png "행의 높이 100px 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 행의 높이 100px 적용 -->|

* * *

## 셀 여백 설정
### **.IBType**
`.IBType`은 시트의 여백을 관리하는 클래스입니다.

```css
.IBType {
  /* 좌우 여백 제거 */
  padding: 6px 0px 5px 0px;
}
```

기본 테마의 여백

![기본 테마의 여백](/assets/imgs/styleguide_data_wrap_default.png "기본 테마의 여백")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 여백 -->

셀의 좌우 여백 제거

![셀의 좌우 여백 제거 적용](/assets/imgs/styleguide_data_wrap_lr0.png "셀의 좌우 여백 제거 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 셀의 좌우 여백 제거 적용 -->

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#type?customCss=%0A.IBType%20%7B%0A%20%20%2F*%20%EC%A2%8C%EC%9A%B0%20%EC%97%AC%EB%B0%B1%20%EC%A0%9C%EA%B1%B0%20*%2F%0A%20%20padding%3A%206px%200px%205px%200px%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

* * *

## 셀 데이터 정렬
<mark>IBSheet에서 내에서 문자열 정렬 기능을 사용하실 경우, 별도의 css를 이용하여 정렬하시지 마시고, 정렬 속성 (`Align`, `VAlign`)을 통해 정렬하시기를 권장 드립니다.</mark>

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
    Row: {
      Height: 50
    }
  }
  Cols: [
    {"Header": "Align Left","Type": "Text","Name": "TextData1","Width": 120,"Align": "Left","CanEdit": 1},
    {"Header": "Align Center","Type": "Text","Name": "TextData2","Width": 120,"Align": "Center","CanEdit": 1},
    {"Header": "Align Right","Type": "Text","Name": "TextData3","Width": 120,"Align": "Right","CanEdit": 1},
  ]
}
```

가로 정렬

![가로 정렬](/assets/imgs/styleguide_data_align.png "가로 정렬")
<!-- IMAGE: 스크린샷/예시 이미지 - 가로 정렬 -->


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
    Row: {
      Height: 50
    }
  }
  Cols: [
    {"Header": "VAlign Top","Type": "Text","Name": "TextData1","Width": 120,"Align": "Center","CanEdit": 1, "VAlign": 'Top'},
    {"Header": "VAlign Middle","Type": "Text","Name": "TextData2","Width": 120,"Align": "Center","CanEdit": 1, "VAlign": 'Middle'},
    {"Header": "VAlign Bottom","Type": "Text","Name": "TextData3","Width": 120,"Align": "Center","CanEdit": 1, "VAlign": 'Bottom'},
  ]
}
```

세로 정렬

![세로 정렬](/assets/imgs/styleguide_data_valign.png "세로 정렬")
<!-- IMAGE: 스크린샷/예시 이미지 - 세로 정렬 -->

* * *

## NoData행 (조회된 데이터가 없을 때 사용)
[NoDataMessage cfg](/docs/props/cfg/no-data-message) 설정을 통해, **생성 후 혹은 조회 후 데이터가 없을 경우 데이터 영역에 '조회된 데이터가 없습니다.' 문구를 출력**합니다.

[NoDataMessage cfg](/docs/props/cfg/no-data-message)가 설정되어 있을 때, [NoDataMiddle cfg](/docs/props/cfg/no-data-middle)를 설정하여 해당 **메시지의 위치를 데이터 영역의 중단 영역으로 위치**하도록 조정할 수 있습니다.

### **.IBNoDataRow**
`.IBNoDataRow`는 조회된 데이터가 없는 경우, 데이터가 없음을 표시하는 NoData 행을 관리하는 클래스입니다.

```css
.IBNoDataRow {
  /* NoData행의 배경색을 연한 파랑색으로 */
  background-color: #c1edff;
  /* 출력 되는 문구의 글씨 굵기를 굵게 */
  font-weight: bold;
}
```

기본 테마에서 NoDataMessage: 3 적용

![기본 테마에서 NoDataMessage: 3 적용](/assets/imgs/styleguide_data_nodata_1.png "기본 테마에서 NoDataMessage: 3 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마에서 NoDataMessage: 3 적용 -->

기본 테마에서 NoDataMessage: 3, NoDataMiddle: true 적용

![기본 테마에서 NoDataMessage: 3, NoDataMiddle: true 적용](/assets/imgs/styleguide_data_nodata_2.png "기본 테마에서 NoDataMessage: 3, NoDataMiddle: true 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마에서 NoDataMessage: 3, NoDataMiddle: true 적용 -->

커스텀 배경색 및 글자 굵기 적용

![커스텀 배경색 및 글자 굵기 적용](/assets/imgs/styleguide_data_nodata_3.png "커스텀 배경색 및 글자 굵기 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 배경색 및 글자 굵기 적용 -->

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#header?customCss=%0A.IBNoDataRow%20%7B%0A%20%20%2F*%20NoData%ED%96%89%EC%9D%98%20%EB%B0%B0%EA%B2%BD%EC%83%89%EC%9D%84%20%EC%97%B0%ED%95%9C%20%ED%8C%8C%EB%9E%91%EC%83%89%EC%9C%BC%EB%A1%9C%20*%2F%0A%20%20background-color%3A%20%23c1edff%3B%0A%20%20%2F*%20%EC%B6%9C%EB%A0%A5%20%EB%90%98%EB%8A%94%20%EB%AC%B8%EA%B5%AC%EC%9D%98%20%EA%B8%80%EC%94%A8%20%EA%B5%B5%EA%B8%B0%EB%A5%BC%20%EA%B5%B5%EA%B2%8C%20*%2F%0A%20%20font-weight%3A%20bold%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

* * *

## 편집 모드 스타일
### **.IBEditInput, .IBEditTextarea**
`.IBEditInput, .IBEditTextarea`는 별도의 편집 기능을 가지는 Enum, Radio, Bool Type 외에 편집 모드 활성화 시 해당 셀의 데이터를 수정 가능한 Input 혹은 TextArea를 관리하는 클래스입니다.

```css
.IBEditInput, .IBEditTextarea {
  /* 글자색 변경, 기본 css에서 !important;로 관리되고 있어 수정사항 적용 시 동일하게 !important; 적용 필요 */
  color: yellow !important;
  /* 배경색 변경, 기본 css에서 !important;로 관리되고 있어 수정사항 적용 시 동일하게 !important; 적용 필요 */
  background-color: green !important;
}
```

기본 테마의 편집 모드 활성화 시

![기본 테마의 편집 모드 활성화](/assets/imgs/styleguide_data_editmode_default.png "기본 테마의 편집 모드 활성화")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 편집 모드 활성화 -->

커스텀 배경색 및 글자색 적용

![커스텀 배경색 및 글자색 적용](/assets/imgs/styleguide_data_editmode_custom.png "커스텀 배경색 및 글자색 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 배경색 및 글자색 적용 -->

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#focus?customCss=%0A.IBEditInput%2C%20.IBEditTExtarea%20%7B%0A%20%20%2F*%20%EA%B8%80%EC%9E%90%EC%83%89%20%EB%B3%80%EA%B2%BD%2C%20%EA%B8%B0%EB%B3%B8%20css%EC%97%90%EC%84%9C%20!important%3B%EB%A1%9C%20%EA%B4%80%EB%A6%AC%EB%90%98%EA%B3%A0%20%EC%9E%88%EC%96%B4%20%EC%88%98%EC%A0%95%EC%82%AC%ED%95%AD%20%EC%A0%81%EC%9A%A9%20%EC%8B%9C%20%EB%8F%99%EC%9D%BC%ED%95%98%EA%B2%8C%20!important%3B%20%EC%A0%81%EC%9A%A9%20%ED%95%84%EC%9A%94%20*%2F%0A%20%20color%3A%20yellow%20!important%3B%0A%20%20%2F*%20%EB%B0%B0%EA%B2%BD%EC%83%89%20%EB%B3%80%EA%B2%BD%2C%20%EA%B8%B0%EB%B3%B8%20css%EC%97%90%EC%84%9C%20!important%3B%EB%A1%9C%20%EA%B4%80%EB%A6%AC%EB%90%98%EA%B3%A0%20%EC%9E%88%EC%96%B4%20%EC%88%98%EC%A0%95%EC%82%AC%ED%95%AD%20%EC%A0%81%EC%9A%A9%20%EC%8B%9C%20%EB%8F%99%EC%9D%BC%ED%95%98%EA%B2%8C%20!important%3B%20%EC%A0%81%EC%9A%A9%20%ED%95%84%EC%9A%94%20*%2F%0A%20%20background-color%3A%20green%20!important%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>

### **.IBEditCellBorder**
`.IBEditCellBorder`는 편집 모드가 활성화 되었을 때, 해당 영역의 border를 관리하는 클래스입니다.

```css
.IBEditCellBorder {
  /* border 색상 변경 */
  border-color: red;
}
```

기본 테마의 편집 모드 활성화 시

![기본 테마의 편집 모드 활성화](/assets/imgs/styleguide_data_editmode_default.png "기본 테마의 편집 모드 활성화")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 편집 모드 활성화 -->

커스텀 Border 색 적용

![커스텀 Border 색 적용](/assets/imgs/styleguide_data_editmode_border.png "커스텀 Border 색 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 Border 색 적용 -->

<a target="_blank" href="https://www.ibsheet.com/v8/cssguide/index.html#focus?customCss=%0A.IBEditCellBorder%20%7B%0A%20%20%2F*%20border%20%EC%83%89%EC%83%81%20%EB%B3%80%EA%B2%BD%20*%2F%0A%20%20border-color%3A%20red%3B%0A%7D%0A"><b>![확인하기](/assets/imgs/approval.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 확인하기 -->확인하기</b></a>