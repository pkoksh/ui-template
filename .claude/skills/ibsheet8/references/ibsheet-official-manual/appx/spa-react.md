---
KEY: spaReact
KIND: appendix
PATH: appx/spa-react
ALIAS: 환경에서, 개발, 방법을, 가이드
ALIAS_EN: spa, react
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/spa-react
---
# react 환경에서 IBSheet 개발 ***(appendix)***

> React 환경에서 IBSheet의 개발 방법을 가이드 합니다.
> 
> 개발 순서는 다음과 같습니다. 
> 1. ibsheet-loader를 이용한 IBSheet js 파일 import
> 2. <IBSheetReact> 컴포넌트를 통한 IBSheet 객체 생성
> 3. typescript 사용시 interface를 통한 개발 편의 확보


## 1. ibsheet-loader를 통한 IBSheet js 파일 import

ibsheet.js 파일은 npmjs를 통해 배포할 수 없는 구조로 되어 있습니다. 따라서 public 폴더에 ibsheet.js 와 css 파일을 복사해 두고, ibsheet-loader를 통해 객체를 import하는 방법을 제공하고 있습니다.

**entry point에 해당하는 html 파일에 직접 ibsheet.js 나 css 파일을 include 하는 경우에는 ibsheet-loader를 사용하실 필요가 없습니다.**


### 1.1 ibsheet-loader 설치


#### using npm([Official](https://nodejs.org/))
```bash
$ npm i @ibsheet/loader
```



### 1.2 loader를 이용한 ibsheet.js 및 관련 파일 import
loader를 사용시 `ibsheet.js`와 `plugin`, `locale`, `css` 파일을 import 하실 필요가 없습니다. (loader가 import 합니다.)

```js
import loader from '@ibsheet/loader'

const loaderOption = {
    name: 'ibsheet',
    baseUrl: '/ibsheet', // ibsheet.js 파일 위치 (리액트 환경의 경우 /public/ibsheet/ibsheet.js 파일이 위치함을 의미)
    //theme: "mint",  // css 파일 테마  (설정이 없으면 /css/default/main.css 사용, 생략가능)
    locales: ["en","ko"], // locale 파일 (설정이 없으면 /locale/ko.js 파일 사용, 생략가능)
    plugins: [  // plugin 파일 
        "dialog",
        "common",
        "excel"
    ],
    // ibsheet license string
    license: "W2FtSztPKCJzazYxYjJxbn8QYkI6Rjd0ODh4bDBkLWMrKwQnTXcJYS4gXTwlZjF5AhpYJ3FCPxMjPWVgMWYydA=="
};
loader.load(loaderOption); //실제 ibsheet파일을 import
```
- `loader.load()`를 통한 import는 메인 페이지(entry point)에서 **1회**만 하시면 됩니다.
- `baseUrl<public/path>` 속성에서 지정한 위치에 ibsheet.js와 css, locale, plugins 파일이 있어야 합니다.



## 2. IBSheetReact 컴포넌트를 이용한 ibsheet 객체 생성

### 해당 컴포넌트는 <mark>Node.js v18 이상과 호환되는 React v18 이상에서 지원</mark>됩니다.

### 2.1 @ibsheet/react 컴포넌트 설치

#### using npm([Official](https://nodejs.org/))
```bash
npm i @ibsheet/react
```

### 2.2 IBSheetReact 컴포넌트를 이용한 시트 생성

IBSheetReact 컴포넌트를 이용하여 시트를 생성하고, 생성된 객체를 이용한 후속작업(행추가 함수)을 수행합니다.


```js
import { IBSheetReact, IB_Preset } from '@ibsheet/react';
import { useRef } from 'react';
function App() {
  // 시트 ref 객체
  const mySheet = useRef(null);

  // 시트 초기화
  const options = {
    Cfg: {
      SearchMode: 0
    },
    Cols: [
      { Header: 'No', Type: 'Int', Name: 'SEQ' },
      { Header: 'Name', Type: 'Text', Name: 'name' },
      { Header: 'Age', Type: 'Int', Name: 'age' },
      { Header: 'Ymd', Name: 'sDate_Ymd', Extend: IB_Preset.YMD, Width: 110 },
    ],
    Events: {
      // 시트 생성 시점에서 이벤트 설정
      onBeforeChange: function (evt) {
        console.log(`${evt.oldval}값이 ${evt.val}값으로 수정되었습니다.`);
      },
    },
  };
  const DATA = [
    { name: 'John Doe', age: 30, sDate_Ymd: '20250922' },
    { name: 'Jane Smith', age: 25, sDate_Ymd: '20241108' }
  ];
  // 시트 객체 크기 결정
  const customStyle = {
    width: '700px',
    height: '600px',
    border: '1px solid #ccc',
  };

  // 행추가 버튼 클릭시 호출됨
  const handleAddRow = () => {
    mySheet.current.addRow();
  };
  return (
    <>
      <div className="btn">
        <button type="button" onClick={handleAddRow}>
          행추가
        </button>
      </div>
      <IBSheetReact
        ref={mySheet} // 시트 ref 객체
        options={options} // 시트 초기화
        data={DATA} // 초기 데이타 (생략 가능)
        style={customStyle} // 시트객체 크기
      />
    </>
  );
}
export default App;
```
[react 예제](https://stackblitz.com/edit/vitejs-vite-ejncmlbw)

## 3. react + typescript 를 이용한 개발시 IBSheet interface 사용
@ibsheet/react 컴포넌트에 포함된 typescript interface를 이용 할 수 있습니다.

앞선 1. ibsheet-loader를 통해 ibsheetjs 파일을 로드하는 부분은 동일합니다.

```js
import {
  IBSheetReact,
  IB_Preset,
  type IBSheetInstance, // 시트 객체 
  type IBSheetOptions,  // 시트 초기화 option
  type IBSheetEvents    // 시트 이벤트 파라미터
} from '@ibsheet/react';
import { useRef } from 'react';

function App() {
  // 시트 객체
  let mySheet = useRef<IBSheetInstance | null>(null);

  // onAfterChange 이벤트 핸들
  const handelAfterChange:IBSheetEvents["onAfterChange"] = (evt) => {
    alert(`'${evt.sheet.getString(evt.sheet.getRowById("Header"),evt.col)}'열의 값이 ${evt.val}로 수정되었습니다.`);
  }

  // 시트 초기화
  const options: IBSheetOptions = {
    Cfg: {
      SearchMode: 0
    },
    Cols: [
      { Header: 'No', Type: 'Text', Name: 'SEQ', Width: 60},
      { Header: '이름', Type: 'Text', Name: 'name', Width: 120, RelWidth: 1 },
      { Header: '나이', Type: 'Int', Name: 'age', Width: 80 },
      { Header: '입사일', Name: 'sDate_Ymd', Extend: IB_Preset.YMD, Width: 110 },
      { Header: '', Type: 'Button', Name: 'confirm', DefaultValue: "확인"}
    ],
    Events: {
      onAfterChange: handelAfterChange
    }
  };

  // 임시 초기 데이터터
  const data = [
    { id: '1', name: 'John Doe', age: 30, sDate_Ymd:'20250923' },
    { id: '2', name: 'Jane Smith', age: 25, sDate_Ymd:'20251002' },
  ];


  // Add Row 버튼 클릭 핸들
  const addRow = () => {
    if (mySheet.current) {
      mySheet.current.addRow();
    }
  };

  // Export xls 버튼 핸들
  const exportXls = () => {
    if (mySheet.current) {
      mySheet.current.exportData({fileName:'ibsheet_react_typescript_example.xlsx'});
    }
  };

  // 시트 너비,높이
  const customStyle = {
    width: '800px',
    height: '600px',
    border: '1px solid #ccc',
  };

  return (
    <div>
      <div>
        <button onClick={addRow}>Add Row</button>
        <button onClick={exportXls}>Export xls</button>
      </div>

      <IBSheetReact
        ref={mySheet} // 시트 ref 객체
        options={options} //시트초기화 구문
        data={DATA} //데이터 (생략가능)
        style={customStyle} // 시트객체 크기
      />
    </div>
  );
}
export default App;
```
[react+typescript 예제](https://stackblitz.com/edit/vitejs-vite-bsfserm2)


### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.0|기능 추가|
