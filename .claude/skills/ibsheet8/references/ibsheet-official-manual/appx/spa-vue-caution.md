---
KEY: spaVueCaution
KIND: appendix
PATH: appx/spa-vue-caution
ALIAS: 환경에서, 개발, 시, 주의사항, 컴포넌트를
ALIAS_EN: spa, vue, caution
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/spa-vue-caution
---
# vue 환경에서 IBSheet 개발 시 주의사항 ***(appendix)***

> Vue 환경에서 IBSheetVue 컴포넌트를 이용한 개발 시 주의사항 입니다.


## onMounted 와 IBSheet 객체 생성

- IBSheet 객체는 비동기로 생성되기 때문에 **onMounted** 시점에서 시트의 생성이 완료 되지 않았을 수 있습니다.
- IBSheet 객체의 생성이 완료 된 이후에 **onRenderFirstFinish** 이벤트 발생합니다.
- 생성 시점을 명확하게 하시려면 IBSheetVue 컴포넌트에 <mark>v-if</mark>를 추가하여 onMounted 이후에 생성 되게끔 조절하는 것이 좋습니다.


[App.vue 파일]
```html
<script setup>
import { IBSheetVue, IB_Preset } from '@ibsheet/vue';
import { ref, shallowRef, onMounted } from 'vue';
import { sheetData } from './data.js';

// 시트 생성 시점
const createSheet = ref(false);

// 시트 객체를 담을 ref 객체
const mySheet = shallowRef(null);

// 시트 객체 너비/높이 style
const customStyle = {
  width: '100%',
  height: '400px',
  border: '1px solid #ccc',
};

const sheetOptions = {
  LeftCols: [
    {
      Header: 'No',
      Type: 'Int',
      Width: 50,
      Align: 'Center',
      Name: 'SEQ',
      CanMove: 0,
      CanFocus: 0,
    },
  ],
  //중앙(메인) 컬럼 설정
  Cols: [
    {
      Header: '선택',
      Type: 'Bool',
      Name: 'CHK',
      Width: '50',
      Align: 'Center',
      CanEdit: 1,
    },
    {
      Header: '대차계약번호',
      Type: 'Text',
      Name: 'CONTRACTNO',
      Width: '120',
      Align: 'Center',
      CanEdit: 0,
    },
    {
      Header: '대차지점',
      Type: 'Text',
      Name: 'DELIVERYDEPTNAME',
      Width: '120',
      Align: 'Center',
      CanEdit: 0,
      TextColor: 'BLUE',
    },
    {
      Header: '차량번호',
      Type: 'Text',
      Name: 'CARNO',
      Width: '120',
      Align: 'Center',
      CanEdit: 1,
      Tip: 1,
    },
    {
      Header: '차명(FULL차명)',
      Type: 'Text',
      Name: 'CARNAMEMSTNAME',
      Width: '200',
      Align: 'Left',
      CanEdit: 1,
    },
    {
      Header: '24시간기본요금',
      Type: 'Float',
      Name: 'RENTFEE',
      Width: '120',
      Align: 'Right',
      CanEmpty: 1,
      Format: ',#.##',
    },
    {
      Header: '출고일자',
      Type: 'Date',
      Name: 'RENTDATE',
      Width: '100',
      Align: 'Center',
      Format: 'yyyy/MM/dd',
      DataFormat: 'yyyyMMdd',
      CanEdit: 0,
    },
    {
      Header: '입고일자',
      Type: 'Date',
      Name: 'RETURNDATE',
      Width: '100',
      Align: 'Center',
      Format: 'yyyy/MM/dd',
      DataFormat: 'yyyyMMdd',
      CanEdit: 0,
    },
    {
      Header: '대차유형',
      Type: 'Text',
      Name: 'PROMOCODE',
      Width: '100',
      Align: 'Center',
      CanEdit: 1,
    },
    {
      Header: '순서',
      Type: 'Text',
      Name: 'NO',
      Width: '50',
      Align: 'Center',
      DefaultValue: 'defaultValue',
    },
    {
      Header: '할인율',
      Type: 'Int',
      Name: 'DISCOUNTRATE',
      Width: '50',
      Align: 'Center',
      Format: '#,##0',
      CanEdit: 1,
    },
  ],
  Events: {
    // 시트 생성 완료 이벤트
    onRenderFirstFinish: (evt) => {
      // 시트객체 생성시 1회만 발생합니다.
      // v-if를 통해 항상 onMounted 이후에 생성됩니다.
      mySheet.value = evt.sheet; // 생성된 시트 객체를 ref객체에 담음
      mySheet.value.loadSearchData(sheetData);
    },
  },
};

// 화면 마운트 시점 (IBSheet객체는 만들어지기 전)
onMounted(async () => {
  // 화면 초기화 로직 수행
  // ....
  // 서버 데이터 가져오기 (시간이 걸리는 작업이 있다고 가정)
  await new Promise((resolve) => setTimeout(resolve, 500));

  // v-if 를 통해 onMounted 함수 마지막 부분에서 시트객체 생성
  createSheet.value = true;
});
</script>

<template>
  <h1>IBSheet + Vue</h1>
  <IBSheetVue v-if="createSheet" :options="sheetOptions" :style="customStyle" />
</template>

```

[v-if를 통한 시트객체 생성 예제](https://stackblitz.com/edit/vitejs-vite-qljaavkt?file=data.js)

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.0|기능 추가|
