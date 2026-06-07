<!--
  IBSheet8 + Vue 예제

  사전 준비:
    npm i @ibsheet/loader @ibsheet/vue

  IBSheet JS 파일은 npm 배포가 불가하므로 public/ibsheet/ 폴더에 배치하고
  loader를 통해 로드합니다.

  참고: https://stackblitz.com/edit/vitejs-vite-brpanol5 (JS)
        https://stackblitz.com/edit/vitejs-vite-fx91nwtn (TS)
-->

<!--
============================================================
1. Entry Point (main.js 등)에서 loader 설정 - 앱 전체에서 1회만 호출
============================================================

import loader from '@ibsheet/loader'

const loaderOption = {
  name: 'ibsheet',
  baseUrl: '/ibsheet',           // public/ibsheet 폴더 기준
  // theme: 'mint',              // CSS 테마 (생략 시 default)
  locales: ['en', 'ko'],
  plugins: ['dialog', 'common', 'excel'],
  license: 'YOUR_LICENSE_KEY'
};

loader.load(loaderOption);
-->

<!-- ============================================================ -->
<!-- 2. 기본 사용법 (JavaScript) - App.vue                         -->
<!-- ============================================================ -->
<script setup>
import { IBSheetVue, IB_Preset } from '@ibsheet/vue'
import { shallowRef } from 'vue'

// 시트 객체를 담을 ref 객체
const mySheet = shallowRef(null)

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
      console.log(`${evt.oldval}값이 ${evt.val}로 변경되었습니다.`)
    },
    // 시트 생성 완료 이벤트
    onRenderFirstFinish: (evt) => {
      // 시트객체 생성시 1회만 발생합니다.
      mySheet.value = evt.sheet // 생성된 시트 객체를 ref객체에 담음
    },
  },
}

// 조회 데이터
const sheetData = [
  { name: 'John Doe', age: 30, sDate_Ymd: '20251011' },
  { name: 'Jane Smith', age: 25, sDate_Ymd: '20251205' },
]

// 시트 객체 너비/높이 style
const customStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
}

const handleAddRow = () => {
  mySheet.value.addRow()
}
const handleLoadData = () => {
  mySheet.value.loadSearchData(sheetData)
}
const handleGetData = () => {
  const saveData = mySheet.value.getSaveJson()
  if (saveData.data.length) {
    alert('수정된 행 데이터 \n\n\n' + JSON.stringify(saveData))
  } else {
    if (saveData.Code == 'IBS000') {
      alert('수정된 데이터가 없습니다.')
    } else if (saveData.Code == 'IBS010') {
      alert(
        `${mySheet.value.getRowIndex(saveData.row)} 행의 ${saveData.col} 열은 필수 입력 항목입니다.`,
      )
    }
  }
}
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

<!--
============================================================
3. TypeScript 사용법 (참고용 - lang="ts" 사용)
============================================================

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
-->

<!--
============================================================
4. 주의사항: onMounted와 IBSheet 객체 생성 시점
============================================================
IBSheet 객체는 비동기로 생성되기 때문에 onMounted 시점에서 시트 생성이
완료되지 않았을 수 있습니다. v-if를 사용하여 시점을 제어할 수 있습니다.

<script setup>
import { IBSheetVue, IB_Preset } from '@ibsheet/vue';
import { ref, shallowRef, onMounted } from 'vue';

// 시트 생성 시점 제어
const createSheet = ref(false);
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
-->
