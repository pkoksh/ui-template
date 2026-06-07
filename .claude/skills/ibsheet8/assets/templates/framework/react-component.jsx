/**
 * IBSheet8 + React 예제
 *
 * 사전 준비:
 *   npm i @ibsheet/loader @ibsheet/react
 *
 * IBSheet JS 파일은 npm 배포가 불가하므로 public/ibsheet/ 폴더에 배치하고
 * loader를 통해 로드합니다.
 *
 * 참고: https://stackblitz.com/edit/vitejs-vite-ejncmlbw (JS)
 *       https://stackblitz.com/edit/vitejs-vite-bsfserm2 (TS)
 */

// ============================================================
// 1. Entry Point (main.jsx 등)에서 loader 설정 - 앱 전체에서 1회만 호출
// ============================================================
/*
import loader from '@ibsheet/loader';

const loaderOption = {
  name: 'ibsheet',
  baseUrl: '/ibsheet',           // public/ibsheet 폴더 기준
  // theme: 'mint',              // CSS 테마 (생략 시 default)
  locales: ['en', 'ko'],
  plugins: ['dialog', 'common', 'excel'],
  license: 'YOUR_LICENSE_KEY'
};

loader.load(loaderOption);
*/

// ============================================================
// 2. 기본 사용법 (JavaScript)
// ============================================================
import { IBSheetReact, IB_Preset } from '@ibsheet/react'
import { useRef } from 'react'

export function BasicExample() {
  const mySheet = useRef(null)

  const options = {
    Cfg: { SearchMode: 0 },
    Cols: [
      { Header: 'No', Type: 'Int', Name: 'SEQ' },
      { Header: 'Name', Type: 'Text', Name: 'name' },
      { Header: 'Age', Type: 'Int', Name: 'age' },
      { Header: 'Date', Name: 'sDate_Ymd', Extend: IB_Preset.YMD, Width: 110 },
    ],
    Events: {
      onBeforeChange: (evt) => {
        console.log(`${evt.oldval} → ${evt.val}`)
      },
    },
  }

  const data = [
    { name: 'John Doe', age: 30, sDate_Ymd: '20250922' },
    { name: 'Jane Smith', age: 25, sDate_Ymd: '20241108' },
  ]

  const customStyle = {
    width: '700px',
    height: '600px',
    border: '1px solid #ccc',
  }

  const handleAddRow = () => {
    mySheet.current.addRow()
  }

  return (
    <>
      <button onClick={handleAddRow}>행추가</button>
      <IBSheetReact ref={mySheet} options={options} data={data} style={customStyle} />
    </>
  )
}

export default BasicExample

// ============================================================
// 3. TypeScript 사용법 (참고용 - .tsx 파일에서 사용)
// ============================================================
/*
import {
  IBSheetReact,
  IB_Preset,
  type IBSheetInstance,   // 시트 객체 타입
  type IBSheetOptions,    // 시트 초기화 옵션 타입
  type IBSheetEvents      // 이벤트 파라미터 타입
} from '@ibsheet/react';
import { useRef } from 'react';

function TypeScriptExample() {
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
*/

// ============================================================
// IBSheetReact Props 요약
// ============================================================
// | Prop      | 타입     | 설명                                    |
// |-----------|----------|-----------------------------------------|
// | ref       | useRef   | 시트 인스턴스 참조 객체                 |
// | options   | object   | 시트 초기화 옵션 (Cfg, Cols, Events 등) |
// | data      | array    | 초기 데이터 (생략 가능)                 |
// | style     | object   | 시트 컨테이너 스타일 (width, height 등) |
