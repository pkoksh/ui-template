---
KEY: layout
KIND: style-guide
PATH: styleGuide/layout
ALIAS: 각, 영역별, 명칭, 소개
ALIAS_EN: layout
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/styleGuide/layout
---
# 각 영역별(Layout) 명칭 소개

## 헤더와 데이터
헤더 영역은 각 컬럼에서 Header속성에 설정한 값이 출력 되는 영역으로 해당 컬럼에서 사용되는 데이터에 대한 설명을 나타내는 영역입니다.

데이터 영역은 헤더 영역의 하단에 위치하며, 바인딩 된 데이터가 출력 되는 영역입니다.

일반적으로 데이터 영역과 구분을 위해 배경색을 적용하여 쉽게 알아보실 수 있습니다.

```javascript
var OPT = {
  //틀고정 좌측 컬럼 설정
  "LeftCols": [
    {"Type": "Int","Width": 50,"Align": "Center","Name": "SEQ"}
  ],
  //중앙(메인) 컬럼 설정
  "Cols": [
    {"Header": ["회사명","회사명"],"Type": "Text","Name": "sCorp","MinWidth": "100","Align": "Center","CanEdit": 1, RelWidth: 1},
    {"Header": ["사원수","사원수"],"Type": "Int","Name": "sPerson","Width": "80","Align": "Right","CanEdit": 1},
    {"Header": ["금년신입","금년신입"],"Type": "Int","Name": "sNewPerson","Width": "70","Align": "Right","CanEdit": 1},
    {"Header": ["평균연봉","평균연봉"],"Type": "Float","Name": "sPay","Width": "100","Align": "Right","CanEdit": 1},
    {"Header": ["평균보너스","평균보너스"],"Type": "Float","Name": "sBonus","Width": "100","Align": "Right","CanEdit": 1},
    {"Header": ["전년매출","전년매출"],"Type": "Int","Name": "sPreYear","Width": "120","Align": "Right","CanEdit": 1,"Format": "#,### 만원"},
    {"Header": ["금년매출","금년매출"],"Type": "Float","Name": "sYear","Width": "120","Align": "Right","CanEdit": 1},
    {"Header": ["전년대비\n 증감율","전년대비\n 증감율"],"Type": "Float","Name": "sGrow","Width": "100","Align": "Right","CanEdit": 1,"Format": "#,##0.##\\%"},
    {"Header": ["내년기대\n 증감율","내년기대\n 증감율"],"Type": "Float","Name": "sPreGrow","Width": "100","Align": "Right","CanEdit": 1,"Format": "#,##0.##%"}
  ]
}
```

![헤더와 데이터 영역](/assets/imgs/styleguide_layout_base.png "헤더와 데이터 영역")
<!-- IMAGE: 스크린샷/예시 이미지 - 헤더와 데이터 영역 -->

* * *

## 좌우측 고정영역(Section)

좌우측 고정영역([Section col](/docs/props/col/section))은 시트에서 좌, 우측에 각각 고정적으로 컬럼을 출력하기 위해 사용되는 영역으로, 시트 생성 시 좌측 영역은 LeftCols에서 설정하며, 우측 영역은 RightCols를 통해 설정합니다.

LeftCols가 설정되어 출력 되는 영역을 Left Section, Cols가 설정되어 출력 되는 영역을 Center Section, RightCols가 설정되어 출력 되는 영역을 Right Section이라고 구분합니다.

```javascript
var OPT = {
  //틀고정 좌측 컬럼 설정
  "LeftCols": [
    {"Header": ["기간","기간","기간"],"Type": "Text","Name": "Year","Width": "160","Align": "Center","CanEdit": 0,"RawSort": 1},
  ],
  //틀고정 우측 컬럼 설정
  "RightCols": [
    {"Header": ["세대당 \n 인구","세대당 \n 인구","세대당 \n 인구"],"Type": "Float","Name": "PG","Radio": 1,"Width": "100","Align": "Right","CanEdit": 1,"RawSort": 1},
    {"Header": ["65세이상 \n 고령자","65세이상 \n 고령자","65세이상 \n 고령자"],"Type": "Int","Name": "Elder","Radio": 1,"Width": "100","Align": "Right","CanEdit": 1,"RawSort": 1}
  ]
  ...
}
```

![좌우측 고정영역](/assets/imgs/styleguide_layout_section.png "좌우측 고정영역")
<!-- IMAGE: 스크린샷/예시 이미지 - 좌우측 고정영역 -->

* * *

## 스크롤 영역
스크롤 영역은 시트의 스크롤이 출력 되는 영역으로 데이터의 길이가 시트의 높이보다 길 경우 세로 스크롤이 출력되며, 컬럼의 길이가 시트가 출력 되는 영역보다 길 경우 가로 스크롤이 출력됩니다.

세로 스크롤은 시트 가장 우측에 위치하며, 가로 스크롤은 시트 가장 하단에 위치합니다.

![스크롤 영역](/assets/imgs/styleguide_layout_scroll.png "스크롤 영역")
<!-- IMAGE: 스크린샷/예시 이미지 - 스크롤 영역 -->

* * *

## Space
Space영역은 시트에서 빈 공간의 행을 표현하며, 시트 내의 열의 너비에 영향을 받지 않는 다양한 셀 객체를 넣을 수 있는 영역입니다.

Solid 행이나 NoData 행이 여기에 해당합니다.

시트에서 데이터가 출력 되고 남은 영역도 Space 영역에 해당합니다.

![Space](/assets/imgs/styleguide_layout_space.png "Space")
<!-- IMAGE: 스크린샷/예시 이미지 - Space -->

* * *

## 그 외 (Group헤더, Formula, InfoRow등)
그 외에 Group 기능을 사용할 때, 시트 상단에 Grouping된 컬럼의 헤더 Text가 출력되는 Group Header가 있습니다.

![Group헤더](/assets/imgs/styleguide_layout_group_header.png "Group헤더")
<!-- IMAGE: 스크린샷/예시 이미지 - Group헤더 -->

[InfoRowConfig cfg](/docs/props/cfg/info-row-config)속성을 통해 시트 상단 혹은 하단에 별도의 행을 통해 조회된 데이터의 개수나 페이지 네비게이션을 설정할 수 있는 InfoRow 영역도 존재합니다.

InfoRow를 상단에 출력

![InfoRow 상단](/assets/imgs/styleguide_layout_inforow_top.png "InfoRow 상단")
<!-- IMAGE: 스크린샷/예시 이미지 - InfoRow 상단 -->

InfoRow를 하단에 출력

![InfoRow 하단](/assets/imgs/styleguide_layout_inforow_bottom.png "InfoRow 하단")
<!-- IMAGE: 스크린샷/예시 이미지 - InfoRow 하단 -->

그 외에도 컬럼에서 [FormulaRow col](/docs/props/col/formula-row)에서 설정한 계산 값이 출력 되는 Formula영역이 있습니다.

![FormulaRow](/assets/imgs/styleguide_layout_formula_row.png "FormulaRow")
<!-- IMAGE: 스크린샷/예시 이미지 - FormulaRow -->