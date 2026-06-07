# React 연동

React 환경에서 IBSheet8을 사용하는 방법을 설명합니다.

## 요구 사항

- **Node.js**: v18 이상
- **React**: v18 이상

## 개발 순서

1. `@ibsheet/loader`를 이용한 IBSheet JS 파일 로드
2. `@ibsheet/react` 컴포넌트를 통한 시트 생성
3. TypeScript 사용 시 인터페이스 활용

---

## 1. ibsheet-loader 설정

IBSheet.js 파일은 npm을 통해 직접 배포되지 않으므로, `public` 폴더에 파일을 배치하고 loader를 통해 로드합니다.

> **참고**: entry point HTML 파일에 직접 `<script>` 태그로 ibsheet.js를 포함한 경우 loader는 불필요합니다.

### 1.1 설치

```bash
npm i @ibsheet/loader
```

### 1.2 loader 설정 및 로드

```js
import loader from '@ibsheet/loader';

const loaderOption = {
  name: 'ibsheet',
  baseUrl: '/ibsheet', // public/ibsheet 폴더 기준
  // theme: 'mint',    // CSS 테마 (생략 시 default)
  locales: ['en', 'ko'],
  plugins: ['dialog', 'common', 'excel'],
  license: 'YOUR_LICENSE_KEY'
};

loader.load(loaderOption);
```

**주의사항**:
- `loader.load()`는 앱의 entry point에서 **1회만** 호출
- `baseUrl` 위치에 ibsheet.js, css, locale, plugins 파일이 있어야 함

---

## 2. IBSheetReact 컴포넌트

### 2.1 설치

```bash
npm i @ibsheet/react
```

### 2.2 기본 사용법 (JavaScript)

```jsx
import { IBSheetReact, IB_Preset } from '@ibsheet/react';
import { useRef } from 'react';

function App() {
  const mySheet = useRef(null);

  const options = {
    Cfg: { SearchMode: 0 },
    Cols: [
      { Header: 'No', Type: 'Int', Name: 'SEQ' },
      { Header: 'Name', Type: 'Text', Name: 'name' },
      { Header: 'Age', Type: 'Int', Name: 'age' },
      { Header: 'Date', Name: 'sDate_Ymd', Extend: IB_Preset.YMD, Width: 110 }
    ],
    Events: {
      onBeforeChange: (evt) => {
        console.log(`${evt.oldval} → ${evt.val}`);
      }
    }
  };

  const data = [
    { name: 'John Doe', age: 30, sDate_Ymd: '20250922' },
    { name: 'Jane Smith', age: 25, sDate_Ymd: '20241108' }
  ];

  const customStyle = {
    width: '700px',
    height: '600px',
    border: '1px solid #ccc'
  };

  const handleAddRow = () => {
    mySheet.current.addRow();
  };

  return (
    <>
      <button onClick={handleAddRow}>행추가</button>
      <IBSheetReact
        ref={mySheet}
        options={options}
        data={data}
        style={customStyle}
      />
    </>
  );
}

export default App;
```

### 2.3 IBSheetReact Props

| Prop | 타입 | 설명 |
|------|------|------|
| `ref` | `useRef` | 시트 인스턴스 참조 객체 |
| `options` | `object` | 시트 초기화 옵션 (Cfg, Cols, Events 등) |
| `data` | `array` | 초기 데이터 (생략 가능) |
| `style` | `object` | 시트 컨테이너 스타일 (width, height 등) |

---

## 3. TypeScript 사용

`@ibsheet/react`에 포함된 TypeScript 인터페이스를 활용할 수 있습니다.

### 3.1 타입 import

```tsx
import {
  IBSheetReact,
  IB_Preset,
  type IBSheetInstance,  // 시트 객체 타입
  type IBSheetOptions,   // 시트 초기화 옵션 타입
  type IBSheetEvents     // 이벤트 파라미터 타입
} from '@ibsheet/react';
```

### 3.2 TypeScript 예제

```tsx
import {
  IBSheetReact,
  IB_Preset,
  type IBSheetInstance,
  type IBSheetOptions,
  type IBSheetEvents
} from '@ibsheet/react';
import { useRef } from 'react';

function App() {
  const mySheet = useRef<IBSheetInstance | null>(null);

  const handleAfterChange: IBSheetEvents['onAfterChange'] = (evt) => {
    const headerRow = evt.sheet.getRowById('Header');
    const colName = evt.sheet.getString(headerRow, evt.col);
    alert(`'${colName}'열의 값이 ${evt.val}로 수정되었습니다.`);
  };

  const options: IBSheetOptions = {
    Cfg: { SearchMode: 0 },
    Cols: [
      { Header: 'No', Type: 'Text', Name: 'SEQ', Width: 60 },
      { Header: '이름', Type: 'Text', Name: 'name', Width: 120, RelWidth: 1 },
      { Header: '나이', Type: 'Int', Name: 'age', Width: 80 },
      { Header: '입사일', Name: 'sDate_Ymd', Extend: IB_Preset.YMD, Width: 110 },
      { Header: '', Type: 'Button', Name: 'confirm', DefaultValue: '확인' }
    ],
    Events: {
      onAfterChange: handleAfterChange
    }
  };

  const data = [
    { id: '1', name: 'John Doe', age: 30, sDate_Ymd: '20250923' },
    { id: '2', name: 'Jane Smith', age: 25, sDate_Ymd: '20251002' }
  ];

  const addRow = () => {
    mySheet.current?.addRow();
  };

  const exportXls = () => {
    mySheet.current?.exportData({ fileName: 'export.xlsx' });
  };

  const customStyle = {
    width: '800px',
    height: '600px',
    border: '1px solid #ccc'
  };

  return (
    <div>
      <div>
        <button onClick={addRow}>Add Row</button>
        <button onClick={exportXls}>Export Excel</button>
      </div>
      <IBSheetReact
        ref={mySheet}
        options={options}
        data={data}
        style={customStyle}
      />
    </div>
  );
}

export default App;
```

### 3.3 inline 핸들러 — `satisfies IBSheetEvents`

handler를 별도 const로 hoist하지 않고 `useMemo` 안에서 inline으로 작성할 때는, Events 블록 뒤에 `satisfies IBSheetEvents`를 붙여 타입 검증 + 파라미터 자동 추론을 활용한다.

```tsx
import type { IBSheetEvents, IBSheetInstance, IBSheetOptions } from '@ibsheet/react'

const options: IBSheetOptions = useMemo(() => ({
  Cols: [ /* ... */ ],
  Events: {
    onClick: (evt) => {                  // evt는 IBSheetEvents['onClick']로 자동 추론
      console.log(evt.sheet.getRowIndex(evt.row))
    },
    onAfterChange: (evt) => {
      console.log(evt.col, evt.val)
    },
  } satisfies IBSheetEvents,
}), [])
```

`(evt: any)` / `(evt: unknown)` / inline struct 타입은 사용하지 않는다. `IBSheetEvents`의 contextual typing을 막아 타입 안전성이 사라진다.

---

## 지원 버전

| 제품 | 버전 | 비고 |
|------|------|------|
| IBSheet Core | 8.3.0.0 | React 컴포넌트 지원 추가 |
