# IBSheet8 초기화 가이드

IBSheet8 그리드를 페이지에 생성하고 초기화하는 방법을 설명합니다.

## 목차

- [개요](#개요)
- [기본 설정](#기본-설정)
- [IBSheet.create() API](#ibsheetcreate-api)
- [options 객체 구성](#options-객체-구성)
- [초기화 타이밍](#초기화-타이밍)
- [데이터 로드](#데이터-로드)
- [시트 정리 (Cleanup)](#시트-정리-cleanup)
- [예제 코드](#예제-코드)

---

## 개요

IBSheet8 초기화는 다음 3단계로 이루어집니다:

1. **라이브러리 로드**: IBSheet8 스크립트 및 메세지파일, 스타일시트 포함
2. **컨테이너 준비**: 그리드가 렌더링될 HTML 요소 정의
3. **시트 생성**: `IBSheet.create()` API 호출

---

## 기본 설정

### HTML 기본 구조

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>IBSheet8 예제</title>

  <!-- IBSheet8 스타일시트 -->
  <link rel="stylesheet" href="ibsheet/css/default/ibsheet.css">

  <!-- IBSheet8 스크립트 -->
  <script src="ibsheet/ibsheet.js"></script>

  <!-- IBSheet8 메세지 파일 -->
  <script src="ibsheet/locale/ko.js"></script>
</head>
<body>
  <!-- 그리드 컨테이너 -->
  <div id="sheetContainer" style="width:100%; height:500px;"></div>

  <script>
    document.addEventListener("DOMContentLoaded", function() {
      // 시트 생성
      IBSheet.create({
        id: "sheet",
        el: "sheetContainer",
        options: {
          Cfg: { /* 설정 */ },
          Cols: [ /* 컬럼 정의 */ ]
        }
      });
    });
  </script>
</body>
</html>
```

### 컨테이너 요소

컨테이너는 반드시 **고정된 높이**를 가져야 합니다:

```html
<!-- 픽셀 단위 -->
<div id="sheetContainer" style="width:100%; height:500px;"></div>

<!-- 뷰포트 단위 -->
<div id="sheetContainer" style="width:100%; height:80vh;"></div>

<!-- calc 사용 -->
<div id="sheetContainer" style="width:100%; height:calc(100vh - 100px);"></div>
```

> **주의**: `height: 100%`를 사용하려면 부모 요소들도 모두 높이가 지정되어 있어야 합니다.

---

## IBSheet.create() API

시트를 생성하는 핵심 API입니다.

### 문법

```javascript
IBSheet.create(config);
```

### 파라미터

| 파라미터 | 타입 | 필수 | 설명 |
|---------|------|------|------|
| `id` | String | O | 시트 고유 ID. `window[id]`로 접근 가능 |
| `el` | String \| HTMLElement | O | 컨테이너 요소 ID 또는 DOM 요소 |
| `options` | Object | O | 시트 옵션 (Cfg, Cols, Events 등) |
| `data` | Array | X | 초기 로드할 데이터 배열 |
| `sync` | Number | X | 동기화 옵션 (0: 비동기(default), 1: 동기) |

### 반환값

생성된 시트 객체를 반환합니다. 비동기 모드(기본값)에서는 완전한 초기화 전에 반환될 수 있으므로 `onRenderFirstFinish` 이벤트 사용을 권장합니다.

### 시트 접근 방법

```javascript
// 방법 1: 전역 객체로 접근
const sheet = window["sheet"];

// 방법 2: IBSheet API 사용
const sheet = IBSheet["sheet"];

// 방법 3: create() 반환값 저장
const sheet = IBSheet.create({ ... });
```

---

## options 객체 구성

### Cfg (시트 전체 설정)

시트의 전역 동작을 설정합니다:

```javascript
Cfg: {
  SearchMode: 2,       // 렌더링 모드
  CanEdit: 1,          // 편집 가능 여부
  HeaderMerge: 1,      // 헤더 머지
  DataMerge: 0,        // 데이터 머지
  Alternate: 1,        // 홀짝 행 배경색
  ShowFilter: false    // 필터행 표시
}
```

주요 Cfg 속성:

| 속성 | 타입 | 기본값 | 설명 |
|-----|------|-------|------|
| `SearchMode` | Number | 2 | 0: Fastload, 1: ClientPaging, 2: Lazyload, 3: ServerPaging |
| `CanEdit` | Boolean | 1 | 시트 전체 편집 가능 여부 |
| `HeaderMerge` | Number | 0 | 헤더 영역 자동 머지 |
| `DataMerge` | Number | 0 | 데이터 영역 자동 머지 |
| `ShowFilter` | Boolean | false | 필터행 생성 여부 |
| `Alternate` | Number | 0 | 홀짝 행 배경색 (0: 미사용, 1: 단일, 2: 구분) |
| `MainCol` | String | - | 트리 그리드의 트리 표시 컬럼명 |

> 상세 속성은 [cfg-properties.md](cfg-properties.md)를 참조하세요.

### Cols (컬럼 정의)

컬럼 배열을 정의합니다:

```javascript
Cols: [
  {
    Header: "번호",
    Name: "no",
    Type: "Int",
    Width: 60,
    Align: "Center",
    CanEdit: false
  },
  {
    Header: "이름",
    Name: "name",
    Type: "Text",
    Width: 120,
    Required: true
  },
  {
    Header: "상태",
    Name: "status",
    Type: "Enum",
    Width: 100,
    Align: "Center",
    EnumKeys: "|A|B|C",  // 첫 글자가 구분자 — 리딩 "|" 필수
    Enum: "|활성|대기|종료"
  },
  {
    Header: "금액",
    Name: "amount",
    Type: "Int",
    Width: 100,
    Align: "Right",
    Format: "#,##0"
  },
  {
    Header: "등록일",
    Name: "regDate",
    Type: "Date",
    Width: 100,
    Align: "Center",
    Format: "yyyy-MM-dd"
  }
]
```

주요 컬럼 속성:

| 속성 | 타입 | 설명 |
|-----|------|------|
| `Header` | String | 헤더 텍스트 (멀티라인: `"1행\n2행"`) |
| `Name` | String | 컬럼 식별자 (필수, 데이터 키와 매핑) |
| `Type` | String | 컬럼 타입 (Text, Int, Float, Date, Enum, Bool, Button 등) |
| `Width` | Number | 컬럼 너비 (픽셀) |
| `Align` | String | 정렬 (Left, Center, Right) |
| `CanEdit` | Boolean | 편집 가능 여부 |
| `Required` | Boolean | 필수 입력 여부 |
| `DefaultValue` | Any | 신규 행 기본값 |
| `Format` | String | 표시 포맷 (숫자: `#,##0`, 날짜: `yyyy-MM-dd`) |

> 상세 속성은 [initialize-column-properties.md](./initialize-column-properties.md)를 참조하세요.

### Events (이벤트 핸들러)

시트 이벤트를 처리합니다:

```javascript
Events: {
  // 시트 렌더링 완료 (비동기 초기화 후 작업에 사용)
  onRenderFirstFinish: function(evt) {
    console.log("시트 초기화 완료");
    this.loadSearchData({ data: initialData });
  },

  // 셀 클릭
  onClick: function(evt) {
    console.log("클릭:", evt.row, evt.col, evt.value);
  },

  // 값 변경 전 (return false로 취소)
  onBeforeChange: function(evt) {
    if (evt.col === "amount" && evt.value < 0) {
      alert("금액은 0 이상이어야 합니다.");
      return false;
    }
  },

  // 값 변경 후
  onAfterChange: function(evt) {
    console.log("변경됨:", evt.col, evt.oldValue, "->", evt.value);
  },

  // 행 추가 후
  onAfterRowAdd: function(evt) {
    console.log("행 추가:", evt.row);
  },

  // 행 삭제 전
  onBeforeRowDelete: function(evt) {
    return confirm("삭제하시겠습니까?");
  }
}
```

> 상세 이벤트는 [events.md](events.md)를 참조하세요.

---

## 초기화 타이밍

### DOMContentLoaded 사용

DOM이 완전히 로드된 후 시트를 생성합니다:

```javascript
document.addEventListener("DOMContentLoaded", function() {
  IBSheet.create({ ... });
});
```

### 동기/비동기 초기화

```javascript
// 비동기 초기화 (기본값) - 빠른 페이지 로드
IBSheet.create({
  id: "sheet",
  el: "container",
  options: {
    Events: {
      onRenderFirstFinish: function() {
        // 이 시점에 시트 완전 초기화
        this.loadSearchData({ data: myData });
      }
    }
  }
});

// 동기 초기화 - create() 반환 후 바로 사용 가능
const sheet = IBSheet.create({
  id: "sheet",
  el: "container",
  options: { ... },
  sync: 1  // 동기 모드
});
sheet.loadSearchData({ data: myData });
```

### onRenderFirstFinish 활용

비동기 모드에서 초기화 완료 후 작업을 수행할 때 사용합니다:

```javascript
Events: {
  onRenderFirstFinish: function(evt) {
    // 1. 초기 데이터 로드
    this.loadSearchData({ data: initialData });

    // 2. 특정 셀 포커스
    this.focus(0, "name");

    // 3. 외부 컴포넌트와 연동
    updateSummary(this.getRowCount());
  }
}
```

---

## 데이터 로드

### 초기 데이터 전달

`create()` 호출 시 `data` 파라미터로 전달:

```javascript
IBSheet.create({
  id: "sheet",
  el: "container",
  options: { ... },
  data: [
    { name: "홍길동", amount: 10000, regDate: "2024-01-15" },
    { name: "김철수", amount: 25000, regDate: "2024-02-20" }
  ]
});
```

### loadSearchData() 메서드

로컬 데이터를 로드합니다:

```javascript
sheet.loadSearchData({
  data: jsonArray,    // 데이터 배열
  sync: 1,            // 동기 로드 (선택)
  append: 0           // 0: 교체, 1: 추가
});
```

### doSearch() 서버 연동

서버에서 데이터를 조회합니다:

```javascript
sheet.doSearch({
  url: "/api/list",
  method: "POST",
  param: { searchType: "all", keyword: "검색어" },
  reqHeader: { "Content-Type": "application/json" }
});
```

---

## 시트 정리 (Cleanup)

### sheet.dispose()

시트를 제거하고 리소스를 해제합니다:

```javascript
sheet.removeAll(); // 로드된 데이터 제거

sheet.dispose();  // 객체로 제거

IBSheet.disposeAll();  // 모든 시트 객체 제거
```

> 프레임워크별 상세 연동은 [react.md](../integration/react.md), [vue.md](../integration/vue.md)를 참조하세요.

---

## 예제 코드

### 기본 그리드

```javascript
document.addEventListener("DOMContentLoaded", function() {
  IBSheet.create({
    id: "basicSheet",
    el: "sheetContainer",
    options: {
      Cfg: {
        SearchMode: 2,
        CanEdit: true
      },
      Cols: [
        { Header: "No", Name: "no", Type: "Int", Width: 60, CanEdit: false },
        { Header: "이름", Name: "name", Type: "Text", Width: 120 },
        { Header: "이메일", Name: "email", Type: "Text", Width: 180 },
        { Header: "연락처", Name: "phone", Type: "Text", Width: 120 },
        { Header: "가입일", Name: "joinDate", Type: "Date", Width: 100, Format: "yyyy-MM-dd" }
      ],
      Events: {
        onRenderFirstFinish: function() {
          this.loadSearchData({
            data: [
              { no: 1, name: "홍길동", email: "hong@test.com", phone: "010-1234-5678", joinDate: "2024-01-15" },
              { no: 2, name: "김철수", email: "kim@test.com", phone: "010-2345-6789", joinDate: "2024-02-20" }
            ]
          });
        }
      }
    }
  });
});
```

### CRUD 그리드

```javascript
document.addEventListener("DOMContentLoaded", function() {
  IBSheet.create({
    id: "crudSheet",
    el: "sheetContainer",
    options: {
      Cfg: {
        SearchMode: 0,  // Fastload - 전체 데이터 로드
      },
      Def: {
        Row: {
          //Formula 사용시 필수 CanFormula, CalcOrder
          CanFormula: 1,
          CalcOrder: "total"
        }
      },
      Cols: [
        { Header: "상태", Name: "_STATUS", Type: "Status", Width: 50 },
        { Header: "선택", Name: "_CHK", Type: "Bool", Width: 50 },
        { Header: "상품명", Name: "productName", Type: "Text", Width: 150, Required: true },
        { Header: "단가", Name: "price", Type: "Int", Width: 100, Format: "#,##0" },
        { Header: "수량", Name: "quantity", Type: "Int", Width: 80 },
        { Header: "합계", Name: "total", Type: "Int", Width: 100, Format: "#,##0",
          Formula: "price * quantity", CanEdit: false }
      ],
    }
  });
});

// 행 추가
function addRow() {
  const sheet = window["crudSheet"];
  sheet.addRow({ init: { productName: "신규 상품", price: 0, quantity: 1 } });
}

// 선택 행 삭제
function deleteRows() {
  const sheet = window["crudSheet"];
  sheet.deleteRow({ check: 1 });  // 체크된 행 삭제
}

// 변경 데이터 저장
function saveData() {
  const sheet = window["crudSheet"];

  // 변경된 데이터만 추출 (Added: 추가, Changed: 수정, Deleted: 삭제)
  const saveData = sheet.getSaveJson();

// 유효성 검사 (오류 코드가 있는 경우)
  if (saveData.Code && saveData.Code.startsWith("ISB")) {
    alert("error occured!!")
    return;
  }
  console.log("저장 데이터:", saveData);

  // ajax를 통한 서버 전송 및 결과 받기

  // 서버 전송 후 저장 성공시 상태 초기화
  sheet.acceptChanges();
}
```

---

## 참고 자료

- [Cfg 속성 상세](./initialize-cfg-properties.md)
- [컬럼 속성 상세](./initialize-column-properties.md)
- [컬럼 타입](./initialize-column-type-property.md)
- [이벤트](./events.md)
- [API 메서드](./api-methods.md)
- [React 연동](../integration/react.md)
- [Vue 연동](../integration/vue.md)
