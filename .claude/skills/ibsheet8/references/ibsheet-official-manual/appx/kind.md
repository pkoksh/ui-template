---
KEY: kind
KIND: appendix
PATH: appx/kind
ALIAS: 시트, 내에, 모든, 행은, 각각의
ALIAS_EN: kind, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/kind
---
# Kind  ***(appendix)***
> 시트 내에 모든 행은 각각의 역할(기능)이 있습니다.
가장 일반적인 역할로는 헤더와 데이터 행이 있을수 있는데, 그 외에도 헤더의 하단에 붙어 있는 필터나 그룹 등 다양한 기능이 존재합니다.
### Kind의 종류
|Kind|Description|
|---|---|
|*Group*|헤더 상단에 위치하여 지정한 열에 대한 그룹핑 기능을 수행합니다.
![그룹](/assets/imgs/groupRow.png "그룹행")
<!-- IMAGE: 스크린샷/예시 이미지 - 그룹 -->|
|*Header*|데이터 영역 상단에 항상 보여지게 되는 행으로 열의 위치 변경, 소팅 등의 기본적인 기능을 가지고 있습니다.
![헤더](/assets/imgs/header.png "헤더행")
<!-- IMAGE: 스크린샷/예시 이미지 - 헤더 -->|
|*Filter*|헤더와 데이터 영역 사이에 위치하며, 각 셀에 값을 입력시 열 별로 해당 값을 포함하는 행만 남기고 나머지 행을 감추는 기능을 가지고 있습니다.
![필터](/assets/imgs/filter.png "필터행")
<!-- IMAGE: 스크린샷/예시 이미지 - 필터 -->|
|*Search*|필터와 데이터 행 사이에 위치하여 입력한 값을 포함하는 행만 남기고 나머지 행을 감추는 기능을 합니다.
![찾기](/assets/imgs/searchRow.png "찾기행")
<!-- IMAGE: 스크린샷/예시 이미지 - 찾기 -->|
|*Data*|일반적인 데이터 행입니다.
![데이터](/assets/imgs/dataRow.png "데이터행")
<!-- IMAGE: 스크린샷/예시 이미지 - 데이터 -->|
|*Head*|헤더 행 아래 고정된 행을 의미합니다.
![Head](/assets/imgs/kindHead.png "Head")
<!-- IMAGE: 스크린샷/예시 이미지 - Head -->|
|*Foot*|합계 행이나 데이터 행 아래 고정된 행을 의미합니다.
![Head](/assets/imgs/kindFoot.png "Head")
<!-- IMAGE: 스크린샷/예시 이미지 - Head -->|
|*Space*|빈 공간의 행으로 시트 내의 열의 너비에 영향을 받지 않는 다양한 셀 객체를 넣을 수 있습니다.(일반적인 솔리드 행)
또한 행의 위치도 헤더의 위나, 푸터의 위나 아래 등 다양한 곳에 위치할 수 있습니다.
![스페이스](/assets/imgs/spaceRow.png "스페이스행")
<!-- IMAGE: 스크린샷/예시 이미지 - 스페이스 -->|

### Read More
- [Kind row](/docs/props/row/kind)
- [getRowKind method](/docs/funcs/core/get-row-kind)
- [Solid appendix](/docs/appx/solid)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
