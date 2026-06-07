---
KEY: files
KIND: guide
PATH: intro/files
ALIAS: 파일, 구성
ALIAS_EN: files
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/intro/files
---
# 파일 구성

## ibsheet8 제품은 다음과 같은 파일,폴더로 구성되어 있습니다.


```
ibsheet 최상위 폴더
├─ ibsheet.js      // ibsheet 코어파일 (기본)
├─ ibleaders.js    // 라이선스 파일    (기본)
│
├─ css             // CSS 폴더
│   ├─ default/main.css    // 기본 테마 css 파일   (기본)
│   ├─ meterial/main.css   // meterial 테마 css 파일
│   ├─ simple/main.css     // simple 테마 css 파일
│   ├─ mint/main.css       // mint 테마 css 파일
│   └─ grace/main.css      // grace 테마 css 파일
│
├─ loacle             // 다국어 메세지 폴더
│   ├─ ko.js    // 한국어 메세지 파일  (기본)
│   └─ en.js    // 영어 메세지 파일
│
├─ fonts         // ibsheet가 사용하는 폰트(.ttf, .otf)를 담고 있는 폴더
│
└─ plugins       // 별도 기능 추가 폴더
  ├─ ibsheet-common.js    // 공통 기능 설정을 위한 상수 및 함수를 정의한 파일
  ├─ ibsheet-dialog.js    // 찾기, 다운로드, 편집 등 각종 다이얼로그 기능을 정의한 파일
  └─ ibsheet-excel.js     // 파일 import/export 기능과 관련된 함수가 정의된 파일
```

## 각 파일의 기능은 아래와 같습니다.

### *ibleaders.js*
`제품 라이선스`를 담고 있는 파일로 내용은 다음과 같습니다.
```javascript
var ibleaders = ibleaders || {};
ibleaders.license = "W2FtSztPKCBzbD8emM5ZzV7fAQnTXcJYS4gLHA0bXp0PTx1EGsBbEA6NicldTx+aXx0MG0IbRZ8HD1uL3srbz=";
```

### *ibsheet.js*
제품의 코어 파일로 안의 내용은 **`절대 수정하시면 안됩니다`.**

파일 상단에 제품에 대한 버전 정보가 있습니다.

### *css(folder)*
시트에서 사용하는 css파일(`/css/default/main.css`)이 해당 폴더에 들어있습니다.

**`css 폴더 구조 변경 안됩니다`.**

 ibsheet.js 와 같은 경로에 css 폴더가 존재 해야 합니다.


<!--
### *css/compatible(folder)* - IE9 이하 브라우저 전용 css
시트에서 보여지는 아이콘(달력이나 체크박스 등)은 기본적으로 base64 이미지(문자화 된 SVG 이미지 스트링)를 사용하지만 `gif` 파일을 이용하는 경우 이미지 아이콘과 css 파일(`/css/compatible/light/main.css`)이 해당 폴더에 들어있습니다.
-->
### *locale(folder)*
시트 내부에서 사용하는 여러가지 상수와 사용자가 보게 되는 메세지가 정의 되어 있습니다.
* 한글: `/locale/ko.js`
* 영문: `/locale/en.js`

### *fonts(folder)*
시트에서 사용하는 폰트파일(`.ttf, .otf`)이 들어있습니다.

---

### *plugins(folder)*
선택적으로 필요한 기능을 추가할 수 있는 js 파일들이 들어 있습니다.

|파일명|Description|
|-----|-----|
|`ibsheet-common.js`|모든 화면 시트에 공통으로 적용하고 싶은 기능에 대한 설정이나 열의 기능일 미리 정의해 둔 Preset 변수를 담고 있습니다. 
사용자는 이를 알맞게 수정하여 사용할 수 있습니다.|
|`ibsheet-excel.js`|엑셀다운로드/업로드,텍스트 다운로드/업로드와 관련된 기능이 포함되어있는 javascript 파일입니다.
`down2Excel()`, `loadExcel()`함수를 사용하시려면 이 파일이 항상 `ibsheet.js` 파일 이후에 include 되어야 합니다.

도움말 `Method` >> `Excel Plugin` 함수 호출시 필요 합니다.
![ibsheet-excel](/assets/imgs/ibsheet-excel.png "ibsheet-excel")
<!-- IMAGE: 스크린샷/예시 이미지 - ibsheet-excel -->|
|`ibsheet-dialog.js`|찾기 다이얼로그(ctrl+f), 상세보기 다이얼로그, 피벗 다이얼로그 등 시트에서 사용 가능한 다양한 다이얼로그에 대한 플러그인을 담고 있습니다.
 사용자는 이를 알맞게 수정하여 사용할 수 있습니다.

도움말 `Method` >> `Dialog Plugin` 함수 호출시 필요 합니다.
![ibsheet-dialog](/assets/imgs/ibsheet-dialog.png "ibsheet-dialog")
<!-- IMAGE: 스크린샷/예시 이미지 - ibsheet-dialog -->|

