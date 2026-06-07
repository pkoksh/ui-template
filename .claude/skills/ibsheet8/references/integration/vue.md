# Vue 연동

Vue 환경에서 IBSheet의 개발 방법을 가이드합니다.

## 개발 순서

1. ibsheet-loader를 이용한 IBSheet js 파일 import
2. `<IBSheetVue>` 컴포넌트를 통한 IBSheet 객체 생성
3. TypeScript 사용 시 interface를 통한 개발 편의 확보

---

## 1. ibsheet-loader를 통한 IBSheet js 파일 import

ibsheet.js 파일은 npmjs를 통해 배포할 수 없는 구조로 되어 있습니다. 따라서 public 폴더에 ibsheet.js와 css 파일을 복사해 두고, ibsheet-loader를 통해 객체를 import하는 방법을 제공합니다.

> entry point에 해당하는 html 파일에 직접 ibsheet.js나 css 파일을 include하는 경우에는 ibsheet-loader를 사용할 필요가 없습니다.

### 1.1 ibsheet-loader 설치

```bash
npm i @ibsheet/loader
```

### 1.2 loader를 이용한 ibsheet.js 및 관련 파일 import

loader 사용 시 `ibsheet.js`와 `plugin`, `locale`, `css` 파일을 직접 import할 필요가 없습니다. (loader가 import합니다.)

```js
import loader from '@ibsheet/loader'

const loaderOption = {
    name: 'ibsheet',
    baseUrl: '/ibsheet', // ibsheet.js 파일 위치 (Vue 환경의 경우 /public/ibsheet/ibsheet.js 파일 위치)
    //theme: "mint",     // css 파일 테마 (설정이 없으면 /css/default/main.css 사용, 생략가능)
    locales: ["en","ko"], // locale 파일 (설정이 없으면 /locale/ko.js 파일 사용, 생략가능)
    plugins: [           // plugin 파일
        "dialog",
        "common",
        "excel"
    ],
    // ibsheet license string
    license: "YOUR_LICENSE_KEY"
};
loader.load(loaderOption); // 실제 ibsheet 파일을 import
```

**주의사항:**
- `loader.load()`를 통한 import는 메인 페이지(entry point)에서 **1회**만 수행합니다.
- `baseUrl` 속성에서 지정한 위치에 ibsheet.js와 css, locale, plugins 파일이 있어야 합니다.

---

## 2. IBSheetVue 컴포넌트를 이용한 시트 객체 생성

### 지원 환경
- Node.js v18 이상
- Vue 3 이상

### 2.1 @ibsheet/vue 컴포넌트 설치

```bash
npm i @ibsheet/vue
```

### 2.2 IBSheetVue 컴포넌트를 이용한 시트 생성

IBSheetVue 컴포넌트를 이용하여 시트를 생성하고, 생성된 객체를 이용한 후속작업을 수행합니다.

**[App.vue 파일]**
```html
<script setup>
import { IBSheetVue, IB_Preset } from '@ibsheet/vue';
import { shallowRef } from 'vue';

// 시트 객체를 담을 ref 객체
const mySheet = shallowRef(null);

const sheetOptions = {
  Cfg: {
    Style: 'mint',
  },
  Cols: [
    { Header: 'No', Type: 'Text', Name: 'SEQ', RelWidth: 30 },
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
      console.log(`${evt.oldval}값이 ${evt.val}로 변경되었습니다.`);
    },
    // 시트 생성 완료 이벤트
    onRenderFirstFinish: (evt) => {
      // 시트객체 생성시 1회만 발생합니다.
      mySheet.value = evt.sheet; // 생성된 시트 객체를 ref객체에 담음
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

const handleAddRow = () => {
  mySheet.value.addRow();
};
const handleLoadData = () => {
  mySheet.value.loadSearchData(sheetData);
};
const handleGetData = () => {
  const saveData = mySheet.value.getSaveJson();
  if (saveData.data.length) {
    alert('수정된 행 데이터 \n\n\n' + JSON.stringify(saveData));
  } else {
    if (saveData.Code == 'IBS000') {
      alert('수정된 데이터가 없습니다.');
    } else if (saveData.Code == 'IBS010') {
      alert(
        `${mySheet.value.getRowIndex(saveData.row)} 행의 ${saveData.col} 열은 필수 입력 항목입니다.`
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

---

## 3. Vue + TypeScript 사용

@ibsheet/vue 컴포넌트에 포함된 TypeScript interface를 이용할 수 있습니다.

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
  mySheet.value = evt.sheet;
};

// 시트 초기화 구문
const sheetOptions: IBSheetOptions = {
  Cfg: {
    SearchMode: 0,
  },
  Def: {
    Col: { RelWidth: 1 },
  },
  Cols: [
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

const customStyle = {
  width: '500px',
  height: '400px',
  border: '1px solid #ccc',
};

const handleAddRow = () => {
  mySheet.value.addRow();
};
const handleExportXls = () => {
  mySheet.value.exportData({ fileName: 'ibsheet_vue_typescript_example.xlsx' });
};
const handleLoadData = () => {
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

---

## 4. 주의사항: onMounted와 IBSheet 객체 생성 시점

IBSheet 객체는 비동기로 생성되기 때문에 **onMounted** 시점에서 시트의 생성이 완료되지 않았을 수 있습니다.

- IBSheet 객체의 생성이 완료된 이후에 **onRenderFirstFinish** 이벤트가 발생합니다.
- 생성 시점을 명확하게 하려면 IBSheetVue 컴포넌트에 **v-if**를 추가하여 onMounted 이후에 생성되도록 조절하는 것이 좋습니다.

### v-if를 이용한 시트 생성 시점 제어

```html
<script setup>
import { IBSheetVue, IB_Preset } from '@ibsheet/vue';
import { ref, shallowRef, onMounted } from 'vue';

// 시트 생성 시점 제어
const createSheet = ref(false);

// 시트 객체를 담을 ref 객체
const mySheet = shallowRef(null);

const customStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
};

const sheetOptions = {
  Cols: [
    { Header: 'No', Type: 'Int', Width: 50, Name: 'SEQ' },
    { Header: '이름', Type: 'Text', Name: 'name', Width: 200 },
    { Header: '나이', Type: 'Int', Name: 'age', Width: 100 },
  ],
  Events: {
    onRenderFirstFinish: (evt) => {
      // v-if를 통해 항상 onMounted 이후에 생성됩니다.
      mySheet.value = evt.sheet;
      mySheet.value.loadSearchData(sheetData);
    },
  },
};

const sheetData = [
  { name: 'John Doe', age: 30 },
  { name: 'Jane Smith', age: 25 },
];

// 화면 마운트 시점 (IBSheet 객체는 아직 생성되기 전)
onMounted(async () => {
  // 화면 초기화 로직 수행
  // 서버 데이터 가져오기 등 시간이 걸리는 작업
  await new Promise((resolve) => setTimeout(resolve, 500));

  // v-if를 통해 onMounted 함수 마지막 부분에서 시트 객체 생성
  createSheet.value = true;
});
</script>

<template>
  <h1>IBSheet + Vue</h1>
  <IBSheetVue v-if="createSheet" :options="sheetOptions" :style="customStyle" />
</template>
```

---

## 참고

- IBSheet 8.3.0.0 버전부터 지원
