# IBSheet8 초기화 Cfg 프로퍼티 
## 기본 정의
- Cfg 속성은 특정 열이나 행이 아닌 시트 전체에 영향을 미치는 속성으로 초기화 과정에서 설정함

### Cfg 속성 사용 예

```javascript
document.addEventListener("DOMContentLoaded", function() {
    // 시트 생성
    IBSheet.create({
      id: "sheet",
      el: "sheetContainer",
      options: {
        Cfg: {
          SearchMode: 0, //FastLoad 사용
          DataMerge: 3, //열 우선 병합
          HeaderMerge: 0,// 헤더 영역 병합 안함
          CanEdit: 0 //전체 데이터 편집 불가
        }, 
        ...
      }
    });
  });
```
---

## 주요 Cfg 속성

- [모든 속성 정보](../ibsheet-official-manual/props/cfg/index.md)

### 개별 시트 설정 (각 화면별 시트에 주로 사용되는 속성)
|속성명|유형|설명|
|---|---|---|
|CanEdit|Boolean|시트 전체 영역 편집 여부 (0으로 설정시 행/열등에 설정한 CanEdit를 무시, default:1)|
|SearchMode|Number|렌더링방식 및 페이징 설정 (0:Fastload, 1:ClientPaging, 2:Lazyload(default), 3:ServerPaging)|
|DataMerge|Number|데이터 영역 자동 머지 설정 (0:머지안함(default), 1:열 머지, 2:행 머지, 3:열 우선 머지, 4: 행 우선 머지)|
|HeaderMerge |Number|헤더 영역 자동 머지 설정 (0:머지안함(default), 1:열 머지, 2:행 머지, 3:열 우선 머지, 4: 행 우선 머지)|
|MainCol|String|트리 시트 생성시 트리가 표시될 열 이름|
|NoVScroll|Boolean|시트에 세로 스크롤을 없애고 로드되는 데이터 수만큼 높이 증감 기능|
|MaxVScroll|Number|NoVScroll 사용시 최대 높이 (설정된 높이 이상의 데이터가 로드 되면 세로 스크롤 생성)|
|MultiRecord|Number|멀티레코드 기능 사용 여부(0:사용안함, 1:사용함, 2:사용함+헤더행 수와 데이터행 수 불일치 허용)
|ShowFilter|Boolean|필터행 생성 여부|
|ZIndex|Number|시트 div의 z-index 설정(설정한 값을 기준으로 시트 위에 생성되는 달력,다이얼로그 등의 z-index도 변경됨)|


### 시트 공통 설정 (주로 ibsheet-common.js 파일에 CommonOptions를 통해 프로젝트 전체 시트에 설정)
|속성명|유형|설명|
|---|---|---|
|Alternate|Number|홀수/짝수행의 배경색 설정 (0:사용안함, 1:모든행을 단일색상으로, 2: 홀/짝행 색상 다르게)|
|Export|Object|파일 import/export 함수 사용시 서버측 URL 설정 (Url: jsp파일들에 대한 서버 url, Down2ExcelUrl: down2Excel함수 호출시 url, ...)|
|DataAutoTrim|Boolean|데이터 좌우 공백 제거 여부|
|EnterMode|Number|시트에서 편집 중 Enter키 입력시 포커스 이동 위치 (0:포커스 이동 안함,1:아래로 이동,3: 오른쪽으로 이동)|
|FitWidth|Boolean| 시트 너비에 비해 열이 적을때 오른쪽 끝에 빈 열을 추가 여부|
|Hover|Number|마우스 커서 호버시 셀또는 행에 하이라이트 기능 (0:Hover사용안함, 1:셀단위, 2:행단위 , 3:행열 하이라이트 ) |
|IgnoreFocused|Boolean|조회 후 포커스 여부 (default:0 조회 후 포커스 갖음)|
|InEditMode|Number|편집모드로 진입하는 시점 결정 (1: 클릭즉시 편집모드,2: 더블클릭이나 포커스된 셀을 다시 클릭시 편집모드(default))|
|MaxSort|Number|소팅 가능한 최대 열 수 (default:3)|
|NoDataMessage|Number|조회 데이터가 없을때([]빈 배열) 메세지 표시 여부(0:메세지표시 안함, 1:시트생성시 메세지표시, 2:조회시 메세지표시, 3:시트생성,조회시 메세지표시)|
|NoDataStr|String|조회 데이터가 없을때 표시 메세지 문자열 (default: 라이브러리 locale 의존 — 한국어 환경 "조회된 데이터가 없습니다.")|
|Undo|Boolean|Undo/Redo기능 사용 여부|

⚠️ **함정 — Nexacro Grid 의 "No data" 와 IBSheet8 한국어 locale 의 "조회된 데이터가 없습니다." 불일치**

원본 Nexacro Grid 의 빈 데이터 메시지는 "No data" (영문) 인 경우가 많은데 (예: SL/CUST/UISL0021T07 — 캡처 기준 "No data" 표시), `@ibsheet/react` 의 IBSheetReact 를 직접 사용하면 한국어 locale 기본값 "조회된 데이터가 없습니다." 가 표시되어 원본과 다르게 보인다. 변환된 화면 캡처와 원본 캡처를 비교하면 빈 데이터 메시지가 한국어로 차이남.

```typescript
// ❌ Cfg 에 NoDataStr 미지정 — 라이브러리 기본 한국어 "조회된 데이터가 없습니다." 표시 (원본과 차이)
const sheetOptions: IBSheetOptions = {
  Cfg: {
    FitColumns: 1,
    CanEdit: 0,
  },
  Cols: [...]
}

// ✅ 원본 Nexacro Grid 와 동일한 "No data" 매핑
const sheetOptions: IBSheetOptions = {
  Cfg: {
    FitColumns: 1,
    CanEdit: 0,
    NoDataStr: 'No data',  // ← 원본 캡처와 동일 메시지
  },
  Cols: [...]
}
```

**판정 신호**: 변환 화면 캡처와 원본 캡처를 비교했을 때 빈 데이터 영역의 메시지가 한국어/영문 차이로 두드러지면 → `Cfg.NoDataStr` 명시.

**참고**: `src/components/grid/IBSheet.tsx` (ID 기반 wrapper) 는 `NoDataStr: 'No data'` 가 이미 default 로 들어가 있어 자동 일치. 그러나 `IBSheetReact` (lazy import) 를 직접 사용하는 화면은 wrapper 를 거치지 않아 default 미적용 → 명시 필수.

---