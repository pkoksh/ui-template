---
KEY: spaVue
KIND: appendix
PATH: appx/spa-vue
ALIAS: 환경에서, 개발, 방법을, 가이드
ALIAS_EN: spa, vue
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/spa-vue
---
# vue 환경에서 IBSheet 개발 ***(appendix)***

> Vue 환경에서 IBSheet의 개발 방법을 가이드 합니다.
> 
> 개발 순서는 다음과 같습니다. 
> 1. ibsheet-loader를 이용한 IBSheet js 파일 import
> 2. <IBSheetVue> 컴포넌트를 통한 IBSheet 객체 생성
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



## 2. IBSheetVue 컴포넌트를 이용한 ibsheet 객체 생성

### 해당 컴포넌트는 <mark>Node.js v18 이상과 호환되는 Vue 3 이상에서 지원</mark>됩니다.

### 2.1 @ibsheet/vue 컴포넌트 설치

#### using npm([Official](https://nodejs.org/))
```bash
npm i @ibsheet/vue
```

### 2.2 IBSheetVue 컴포넌트를 이용한 시트 생성

IBSheetVue 컴포넌트를 이용하여 시트를 생성하고, 생성된 객체를 이용한 후속작업(행추가 함수)을 수행합니다.

[App.vue 파일]
```html
<script setup>
import { IBSheetVue, IB_Preset } from '@ibsheet/vue';
import { shallowRef } from 'vue';

// 시트 객체를 담을 ref 객체
const mySheet = shallowRef(null);

const sheetOptions = {
  // Your IBSheet configuration options
  Cfg: {
    Style: 'mint',
  },
  Cols: [
    // 헤더 타이틀  ,   컬럼 유형,    컬럼 명,    열너비 비율율
    { Header: 'No', Type: 'Text', Name: 'SEQ', RelWidth: 30 },
    //                                                           필수 입력 여부,최대 입력 글자 수
    {
      Header: 'Name',
      Type: 'Text',
      Name: 'name',
      RelWidth: 120,
      Required: 1,
      Size: 10,
    },
    { Header: 'Age', Type: 'Int', Name: 'age', RelWidth: 60 },
    { Header: 'Ymd', Name: 'sDate_Ymd', Extend: IB_Preset.YMD, RelWidth: 110 },
  ],
  Events: {
    // 값 변경 이벤트
    onBeforeChange: (evt) => {
      console.log(`${evt.oldval}값이 ${evt.val}로 변경되었습니다. `);
    },
    // 시트 생성 완료 이벤트
    onRenderFirstFinish: (evt) => {
      // 시트객체 생성시 1회만 발생합니다.
      mySheet.value = evt.sheet; // 생성된 시트 객체를 ref객체에 담음음
    },
  },
};

// 조회 데이터
const sheetData = [
  { name: 'John Doe', age: 30, sDate_Ymd: '20251011' },
  { name: 'Jane Smith', age: 25, sDate_Ymd: '20251205' },
];

// 시트 객체 너비/높이 style
const customStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
};

const handleAddRow = (evt) => {
  // 행 추가
  mySheet.value.addRow();
};
const handleLoadData = (evt) => {
  // 데이터 로드
  mySheet.value.loadSearchData(sheetData);
};
const handleGetData = (evt) => {
  //               수정된 데이터 추출
  const saveData = mySheet.value.getSaveJson();
  // 정상 처리
  if (saveData.data.length) {
    alert('수정된 행 데이터 \n\n\n' + JSON.stringify(saveData));
  } else {
    // 오류 발생
    if (saveData.Code == 'IBS000') {
      alert('수정된 데이터가 없습니다.');
    } else if (saveData.Code == 'IBS010') {
      alert(
        `${mySheet.value.getRowIndex(saveData.row)} 행의 ${
          saveData.col
        } 열은 필수 입력 항목입니다.`
      );
    }
  }
};
</script>

<template>
  <h1>IBSheet + Vue</h1>
  <div class="btn">
    <button @click="handleAddRow">행 추가</button>
    <button @click="handleGetData">수정된 데이터 확인</button>
    <button @click="handleLoadData">데이터로드</button>
  </div>
  <IBSheetVue :options="sheetOptions" :style="customStyle" />
</template>
```
[vue 예제](https://stackblitz.com/edit/vitejs-vite-brpanol5)

<mark>[IBSheet 객체 생성 시점에 따른 주의 사항](./spa-vue-caution)</mark>


## 3. vue + typescript 를 이용한 개발시 IBSheet interface 사용
@ibsheet/vue 컴포넌트에 포함된 typescript interface를 이용 할 수 있습니다.

앞선 1. ibsheet-loader를 통해 ibsheetjs 파일을 로드하는 부분은 동일합니다.

```html
<script setup lang="ts">
import {
  IBSheetVue,
  IB_Preset,
  type IBSheetInstance,
  type IBSheetOptions,
  type IBSheetEvents,
} from '@ibsheet/vue';
import { shallowRef } from 'vue';

// 시트 객체를 담을 ref 객체
const mySheet = shallowRef<IBSheetInstance>(null);

// 시트 클릭 이벤트
const handleAfterClick: IBSheetEvents['onAfterClick'] = (evt) => {
  console.log(
    `${evt.sheet.getRowIndex(evt.row)}행, ${evt.sheet.getString(
      evt.sheet.getRowById('Header'),
      evt.col
    )}열이 클릭되었습니다.`
  );
};
// 시트 객체 생성 이벤트 (객체 생성시 1회 발생)
const handleRenderFinish: IBSheetEvents['onRenderFirstFinish'] = (evt) => {
  // ref 객체에 생성된 시트 객체를 넣어 줌
  mySheet.value = evt.sheet;
};

// 시트 초기화 구문
const sheetOptions: IBSheetOptions = {
  // Your IBSheet configuration options
  Cfg: {
    SearchMode: 0,
  },
  Def: {
    Col: { RelWidth: 1 },
  },
  Cols: [
    // 헤더 타이틀,  컬럼 유형(필수), 컬럼 명(필수), 열 너비 비율
    { Header: 'No', Type: 'Text', Name: 'SEQ', RelWidth: 50 },
    {
      Header: { Value: '', HeaderCheck: 1, IconAlign: 'Center' },
      Type: 'Bool',
      Name: 'CHK',
      CanSort: 0,
      RelWidth: 50,
    },
    { Header: '이름', Type: 'Text', Name: 'name', RelWidth: 200 },
    { Header: '나이', Type: 'Int', Name: 'age', RelWidth: 100 },
    {
      Header: '입사일',
      Name: 'sDate_Ymd',
      Extend: IB_Preset.YMD,
      RelWidth: 120,
    },
  ],
  Events: {
    onAfterClick: handleAfterClick,
    onRenderFirstFinish: handleRenderFinish,
  },
};
const sheetData = [
  { name: 'John Doe', age: 30, sDate_Ymd: '20251011' },
  { name: 'Jane Smith', age: 25, sDate_Ymd: '20251205' },
];

// 시트객체 너비, 높이
const customStyle = {
  width: '500px',
  height: '400px',
  border: '1px solid #ccc',
};

const handleAddRow = () => {
  // 신규 행 추가
  mySheet.value.addRow();
};
const handleExportXls = () => {
  // 엑셀 다운로드 (클라이언트 모듈 사용)
  mySheet.value.exportData({ fileName: 'ibsheet_vue_typescript_example.xlsx' });
};
const handleLoadData = () => {
  // 데이터 로드드
  mySheet.value.loadSearchData(sheetData);
};
</script>

<template>
  <div class="btn">
    <button @click="handleAddRow">Add Row</button>
    <button @click="handleLoadData">Load Data</button>
    <button @click="handleExportXls">Export Xls</button>
  </div>
  <IBSheetVue :options="sheetOptions" :style="customStyle" />
</template>

```
[vue+typescript 예제](https://stackblitz.com/edit/vitejs-vite-fx91nwtn)
### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.0|기능 추가|
