---
KEY: useLoader
KIND: appendix
PATH: appx/use-loader
ALIAS: 를, 이용한, 개발, 같이, 하나의
ALIAS_EN: use, loader
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/use-loader
---
# !ibsheet-loader를 이용한 개발 ***(appendix)***

> SPA 와 같이 하나의 document 를 재활용하는 방식으로 시스템을 개발시 기존의 **ibsheet** 생성 방법은 여러가지 문제를 발생시킵니다.

> 1. 여러 사람이 만드는 시트가 동일 document 위에 존재함으로 인한 id 충돌 문제
> 2. 다른 페이지를 로딩 하는 과정에서 이전에 생성한 시트의 객체나 전역 이벤트 등의 찌꺼기가 남는 문제
>
> 이러한 문제를 해결하고자 **ibsheet** 는 loader([IBSheetLoader manual](https://ibsheet.github.io/loader-manual/))를 별도로 제공합니다. 

> <mark>`Vue` 사용시에 시트의 객체를 data 속성에 정의하면 안됩니다. 시트 객체를 정의시 Observer 가 추가되어 call stack 에러가 발생할 수 있습니다. </mark> 

> loader 를 이용하는 방법은 다음과 같습니다.

## 1. loader 파일 import

### Using browser
```html
<script src="https://unpkg.com/@ibsheet/loader/dist/umd/ibsheet-loader.min.js"></script>
```


### Using Node.js

#### using npm([Official](https://nodejs.org/))
```bash
$ npm install --save @ibsheet/loader
```

#### using yarn([Official](https://yarnpkg.com/))
```bash
$ yarn add @ibsheet/loader
```

#### Import(JS)
```js
import loader from '@ibsheet/loader'
```

## 2. loader를 이용한 시트 생성하기
loader를 사용시엔 `ibsheet.js`와 `plugin`, `locale`, `css` 파일을 import 하실 필요가 없습니다. (loader가 import 합니다.)

### loader를 이용한 `ibsheet.js` 파일 import
```js
loader.config({
    registry: [
        {
            name: 'ibsheet',
            baseUrl: '/ibsheet', // ibsheet.js 파일 위치
            theme: "mint",  // css 파일 테마  (설정이 없으면 /css/default/main.css 사용)
            locales: ["en","ko"], // locale 파일 (설정이 없으면 /locale/ko.js 파일 사용)
            plugins: [  // plugin 파일 
                "dialog",
                "common",
                "excel"
            ],
            // ibsheet license string
            license: "W2FtSztPKCJzazYxYjJxbn8QYkI6Rjd0ODh4bDBkLWMrKwQnTXcJYS4gXTwlZjF5AhpYJ3FCPxMjPWVgMWYydA=="
        }
    ]
});
loader.load(); //실제 ibsheet파일을 로드
```
- `loader.config`를 통한 `js`, `css`파일 import는 메인 페이지(각 컴포넌트를 호출하는 메인)에서 1회만 하시면 됩니다.
- `baseUrl<public/path>` 속성에서 지정한 위칭에서 ibsheet.js와 plugins 파일들을 다운로드 함으로 해당 위치에 파일이 있어야 합니다.



### 개별 component에서 loader를 이용한 sheet 객체 생성(mounted 혹은 componentDidMount Life Cycle)
```js
import loader from '@ibsheet/loader';

// 페이지 공통 변수
const pageInfo = {'pageSheets':[]};

const OPT = {
  //공통기능 설정 부분
  "Cfg": {
      HeaderCheck: 1
  },
  //중앙(메인) 컬럼 설정
  "Cols": [
      {"Header": "선택","Type": "Bool","Name": "CHK"},
      {"Header": "부서명","Type": "Text","Name": "sDept",Width:100},
      {"Header": "팀명","Type": "Text","Name": "sTeam",Width:90},
      {"Header": "직급","Type": "Text","Name": "sPosition",Width:120},
      {"Header": "성명","Type": "Text","Name": "sName",Width:90},
      {"Header": "성별","Type": "Enum","Name": "sGender","Align": "Center","Enum": "|男|女|기타","EnumKeys": "|男|女|기타"},
      {"Header": "거주지","Type": "Text","Name": "sAddr","Align": "Center",Width:150},
      {"Header": "나이","Type": "Int","Name": "sAge","Width": "130","Align": "Right"},
      {"Header": "근속기간(년)","Type": "Int","Name": "sPeriod","Align": "Right"},
      {"Header": "급여","Type": "Int","Name": "sSalary","Align": "Right","Format": "#,###"},
      {"Header": "상여","Type": "Int","Name": "sBonus","Align": "Right","Format": "#,###"}
  ],
};

//loader를 이용한 시트 생성 (임의의 id로 시트객체가 생성)
loader.createSheet({
  el: 'leftSheetDiv',
  options: OPT,
}).then(sheet => {
  // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
  // 생성된 시트객체를 페이지 공통 객체에 넣어두고 사용
  pageInfo["sheet1"] = sheet;

  // 생성된 시트 id를 pageSheets 배열에 넣어둠
  pageInfo["pageSheets"].push(sheet.id);
});


```
<!-- 
`[비공개 설명]`
- `CommonOptions`에 `(cfg) LoaderCreateDelay: 1`를 설정할 경우 loader의 createSheet의 종료를 `onRenderFirstFinish` 이후로 변경함.
- 단, event에서 `OnAfterRenderFirstFinish` 호출 필요
```js
Event: {
  onRenderFirstFinish:function(){
    if (evt.sheet.OnAfterRenderFirstFinish) {  evt.sheet.OnAfterRenderFirstFinish(); }
  }
}
```
-->

## 3. loader를 이용한 시트 제거하기

```js
//페이지 닫을시 시트객체를 지운다. (componentWillUnmount, beforeDestroy 등 시)

function beforeUnload() {
    for(let i = 0; i < pageInfo.pageSheets.length; i++) {
        loader.removeSheet(pageInfo.pageSheets[i]);
    }
    pageInfo = null;
}
```

## 4. loader 를 이용하여 시트 전역 객체 사용하기

`IBSheetLoader.getIBSheetStatic()` 을 사용하여 시트 Static 객체를 가져올 수 있습니다. 

`create` 시점에 `id` 를 저장 후, 가져온 시트 Static 객체에 저장한 id 를 통해 키값으로 시트 객체에 접근 할 수 있습니다.

```js
import loader from '@ibsheet/loader'

// 시트 Static 객체 가져오기
const ibsheet = loader.getIBSheetStatic();
const sheetId = 'sheet';

// 시트 create 이후, ibsheet static 객체에서 sheet 아이디에 맞는 시트를 가져옵니다.
console.log(ibsheet[sheetId]);
```

## loader 셋팅 정리

1. `loader-config` 설정은 최상위 루트에서 한 번만 실행해주시면 됩니다.
2. `config`시 별도의 plugins 를 사용하지 않으면, 선언하지 않으셔도 됩니다.
3. `ibsheet-common.js` 에 있는 `IB_Preset` 의 경우, window 객체에 붙어있습니다.
4. 시트의 생성은 일반적으로 `mount` 시점, 시트를 제거하는 시점은 `unmount` 시점으로 잡아서 지정해주시면 됩니다.
5. `loader-create` 이 후, `then` 에서 `sheet` 객체가 생성되는 것을 확인할 수 있지만 해당 구간에서 데이터를 조회하시면 안됩니다. 첫 조회는 onRenderFirstFinish 를 이용해주셔야 합니다.
6. `loader.getIBSheetStatic()` 함수를 이용하여, IBSheet 전역객체를 가져올 수 있습니다.

### Read More

- [IBSheetLoader manual](https://ibsheet.github.io/loader-manual/)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
