---
KEY: menu
KIND: guide
PATH: userGuide/menu
ALIAS: 메뉴, 기능
ALIAS_EN: menu
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/userGuide/menu
---
# 메뉴 기능

사용자가 헤더 셀에서 마우스 우클릭을 통해 메뉴를 띄우거나 데이터 행에서 마우스 우클릭으로 컬럼 메뉴를 띄울 수 있습니다.

단, 이 기능은 <b>각 화면에 해당 기능이 설정된 경우에만</b> 사용할 수 있으며, 보여지는 메뉴의 구성도 화면개발 시 자유롭게 설정할 수 있습니다.




## *컨텍스트 메뉴*

데이터 행에서 마우스 우클릭을 통해 메뉴를 띄웁니다.

메뉴 구성은 설정에 따라 자유롭게 설정할 수 있습니다.


![컨텍스트 메뉴](/assets/imgs/showMenu.png "마우스 커서가 있는 위치에 컨텍스트메뉴를 띄움")
<!-- IMAGE: 스크린샷/예시 이미지 - 컨텍스트 메뉴 -->

[**컨텍스트 메뉴 기능 예1**]


![컨텍스트 메뉴](/assets/imgs/contextmenu.gif "마우스 커서가 있는 위치에 컨텍스트메뉴를 띄움")
<!-- IMAGE: 스크린샷/예시 이미지 - 컨텍스트 메뉴 -->

[**컨텍스트 메뉴 기능 예2**]




## *컨텍스트 메뉴 기능 응용*

시트 내에서 마우스 우측버튼 클릭시 다양한 기능의 컨텍스트 메뉴를 구성하여 사용하실 수 있습니다.


아래 예제는 엑셀 다운로드 기능을 데이터 영역에 설정한 예제입니다.


![컬럼메뉴](/assets/imgs/menuIcon.png "컬럼메뉴에서 엑셀 다운로드 기능 선택")
<!-- IMAGE: 아이콘 이미지 - 컬럼메뉴 -->

[**컨텍스트 메뉴 기능 예3**]

## `ibsheet-common.js`의 컨텍스트 메뉴

`ibsheet-common.js`에서는 시트의 헤더를 마우스 우클릭하면 기본적으로 컨텍스트 메뉴가 설정되어 있습니다.

### 1. 컬럼 표시 여부 메뉴

- `컬럼 표시 여부` 메뉴는 시트에 [onReadMenu](/docs/events/on-read-menu) 이벤트가 설정되어 있는 경우에는 생성되지 않습니다.
- 해당 메뉴는 [onReadMenu](/docs/events/on-read-menu) 이벤트가 처음 발생한 시점의 시트 열 상태를 기준으로 구성됩니다. 즉, 처음 보여지는 열들을 기준으로 메뉴 항목이 설정됩니다.
- `IBSheet.MenuFunctions` 객체 내 메뉴 구성에 사용되는 함수들이 저장되어있습니다.

```javascript
// ibsheet-common.js
_IBSheet.MenuFunctions = {
  getContextMenu: getContextMenu,
  // setItemBool: setItemBool,
  // toggleCols: toggleCols,
};

// 특정 위치에 '컬럼 표시 여부' 메뉴 표시 예시
sheet.showMenu({
    row: sheet.getRowById("AR2"),
    col: "TextData",
    menu: IBSheet.MenuFunctions.getContextMenu(sheet)
});
```