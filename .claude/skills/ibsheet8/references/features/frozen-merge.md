# 틀고정 및 셀 병합

## 열 틀고정 (Frozen Columns)

IBSheet8의 시트는 세로로 `Left(Section:0)`, `Center(Section:1)`, `Right(Section:2)` 영역으로 나뉩니다.
초기화 시 `LeftCols`, `Cols`, `RightCols` 배열로 각 영역에 열을 배치하며, 런타임에 `setFixedLeft`, `setFixedRight`, `setFixedCols` 메서드로 동적 변경이 가능합니다.

> **주의:** `SEQ` 열은 `LeftCols`에 명시하지 않아도 항상 Hidden 상태로 자동 생성됩니다. `setFixedLeft`, `setFixedCols`의 `left` 인자에는 반드시 `SEQ` 열을 포함하여 계산해야 합니다.

> Hidden 열도 고정 열 수에 포함됩니다.

### 초기화 시 영역 설정

```javascript
var options = {
  Cfg: {
    LeftCanResize: 1,   // 좌측 영역 크기 조절 허용
    LeftWidth: 200,      // 좌측 영역 너비
    RightCanResize: 1,  // 우측 영역 크기 조절 허용
    RightWidth: 150      // 우측 영역 너비
  },
  LeftCols: [  // 좌측 고정 열
    { Header: "NO", Type: "Int", Name: "SEQ", Width: 50 },
    { Header: "선택", Type: "Bool", Name: "chk", Width: 50 }
  ],
  Cols: [  // 가운데 스크롤 영역
    { Header: "이름", Name: "name", Type: "Text", Width: 120 },
    { Header: "매출", Name: "revenue", Type: "Int", Width: 120, Format: "#,### 원" }
  ],
  RightCols: [  // 우측 고정 열
    { Header: "합계", Name: "total", Type: "Int", Width: 120, Format: "#,### 원" }
  ]
};
```

### 동적 틀고정 변경

```javascript
// 좌측에 4개 열 고정 (SEQ 포함), 머지 재적용
sheet.setFixedLeft(4, 1);

// 우측에 2개 열 고정
sheet.setFixedRight(2);

// 좌측 4개, 우측 1개 동시 설정
sheet.setFixedCols(4, 1);

// 좌측 틀고정 해제 (모든 열이 Center 영역으로 이동)
sheet.setFixedLeft(0);

// 우측 틀고정 해제
sheet.setFixedRight(0);
```

### setFixedLeft / setFixedRight 파라미터

| Name | Type | Required | Description |
|------|------|----------|-------------|
| count | `number` | 선택 | 고정할 열 개수 (`0` 설정 시 해당 영역의 열이 모두 Center로 이동) |
| reMerge | `boolean` | 선택 | 열 이동 후 기존 머지 재적용 여부 (`0`: 미적용(default), `1`: 재적용) |
| sync | `boolean` | 선택 | 렌더링 동기 처리 (`0`: 비동기(default), `1`: 동기) |

### setFixedCols 파라미터

| Name | Type | Required | Description |
|------|------|----------|-------------|
| left | `number` | 선택 | 좌측 영역 열 개수 (SEQ 열 포함하여 계산) |
| right | `number` | 선택 | 우측 영역 열 개수 |
| reMerge | `boolean` | 선택 | 열 이동 후 기존 머지 재적용 여부 (`0`: 미적용(default), `1`: 재적용) |
| sync | `boolean` | 선택 | 렌더링 동기 처리 (`0`: 비동기(default), `1`: 동기) |

## 행 틀고정 (Frozen Rows)

IBSheet8의 시트는 가로로 `헤더`, `바디`, `푸터` 영역으로 나뉩니다.
헤더/푸터 영역에는 커스텀 행(Head/Foot)을 배치할 수 있고, 바디 영역의 데이터 행은 `setFixedTop`, `setFixedBottom`으로 상/하단에 고정할 수 있습니다.

**주의**: 데이터 하단에 합계행이 필요한 경우 반드시 [**FormulaRow:"Sum"**](./formula.md) 을 사용하세요.

### 커스텀 행을 통한 고정 (Head / Foot)

초기화 시 `Head`, `Foot` 속성으로 스크롤과 무관하게 항상 표시되는 커스텀 행을 생성할 수 있습니다.

```javascript
var options = {
  Head: [  // 헤더 영역 하단에 고정되는 커스텀 행 (절대 합계행을 만드는 공간이 아님!!!)
    {
      id: "myHeadRow1",
      Spanned: 1,
      deptName: {
        Type: "Text", Value: "미수금 포함 여부",
        Span: 2, Color: "#EDEDED", Align: "Center", TextStyle: 1
      },
      qt1: { Type: "Bool" },
      qt2: { Type: "Bool" }
    }
  ],
  Foot: [  // 푸터 영역에 고정되는 커스텀 행 (절대 합계행을 만드는 공간이 아님!!!)
    {
      id: "myFootRow1",
      Spanned: 1,
      Color: "#666666",
      TextColor: "#FFFFFF",
      deptName: { Value: "2025년 자료", TextColor: "#FFBBBB", Span: 5 },
      qt4: { Type: "Int", Format: "#,###", Value: 1248423 }
    }
  ]
};
```

#### showFixedRows로 동적 생성

초기화 이후에도 `showFixedRows` 메서드로 Head/Foot 행을 동적으로 추가할 수 있습니다. 객체의 `Kind` 속성으로 Head 또는 Foot을 지정합니다.

```javascript
// Foot 행 1개 동적 생성
sheet.showFixedRows([{
  Kind: "Foot",
  id: "myFootRow",
  chk: { Type: "Text", Value: "", CanEdit: 0, CanFocus: 0 }
}]);

// Head 행 1개 + Foot 행 1개 동시 생성
sheet.showFixedRows([
  { Kind: "Head", id: "headRow1", name: { Value: "상단 고정 행" } },
  { Kind: "Foot", id: "footRow1", name: { Value: "하단 고정 행" } }
]);
```

### 데이터 행 상/하단 고정 (setFixedTop / setFixedBottom)

바디 영역의 데이터 행을 상단 또는 하단에 고정하여 스크롤되지 않게 할 수 있습니다.

> **제약:** `setFixedTop`은 `SearchMode: 0, 3`에서는 사용할 수 없습니다. `setFixedBottom`은 `SearchMode: 1, 2`에서만 사용 가능합니다.

> **제약:** `DataMerge`와 함께 사용할 수 없으며, 데이터 행이 최소 4개 이상이어야 합니다.

```javascript
// 상단에 데이터 행 4개 고정
sheet.setFixedTop(4, 1);

// 하단에 데이터 행 2개 고정 (맨 아래 행부터)
sheet.setFixedBottom(2, 1);

// 상단 고정 해제
sheet.setFixedTop(0, 1);

// 하단 고정 해제
sheet.setFixedBottom(0, 1);
```

### setFixedTop / setFixedBottom 파라미터

| Name | Type | Required | Description |
|------|------|----------|-------------|
| count | `number` | 선택 | 고정할 데이터 행 개수 |
| render | `boolean` | 선택 | 즉시 화면 반영 여부 (`0`: 미반영 → 이후 `rerender()` 필요, `1`: 즉시 반영(default)) |

---

## 셀 병합 (Merge)

### 자동 병합 (DataMerge / HeaderMerge)

`Cfg`의 `DataMerge`(데이터 영역)와 `HeaderMerge`(헤더 영역) 속성으로 같은 값을 가진 셀을 자동 병합합니다.
시트 생성 후에는 `setAutoMerge` 메서드로 동적 변경이 가능합니다.

> `Span`, `RowSpan` 셀 속성보다 우선 적용됩니다.

#### DataMerge / HeaderMerge 옵션

| Value | Description |
|-------|-------------|
| `0` | 병합 안함 (`default`) |
| `1` | 열 기준 병합 — 같은 열에서 상하로 같은 값이면 행을 병합 |
| `2` | 행 기준 병합 — 같은 행에서 좌우로 같은 값이면 열을 병합 |
| `3` | 열 우선 병합 — 열 기준 병합 후, 병합되지 않은 셀에 행 기준 병합 |
| `4` | 행 우선 병합 — 행 기준 병합 후, 병합되지 않은 셀에 열 기준 병합 |
| `5` | 열 우선 사방 병합 — 열 기준 병합하면서 이웃한 열도 같은 값이면 병합 |
| `6` | 행 우선 사방 병합 — 행 기준 병합하면서 이웃한 행도 같은 값이면 병합 |

```javascript
var options = {
  Cfg: {
    DataMerge: 1,        // 데이터 영역: 열 기준 병합
    HeaderMerge: 0,      // 헤더 영역: 병합 안함
    PrevColumnMerge: 1   // 좌측 열의 병합 범위를 기준으로 병합 (아래 참고)
  }
};
```

#### PrevColumnMerge (앞 열 기준 병합)

행 병합(위아래 병합) 시 좌측 열의 병합 범위를 기준으로 병합 여부를 결정합니다. `DataMerge` 또는 `HeaderMerge`가 설정되어 있어야 동작합니다.

| Value | Description |
|-------|-------------|
| `0` | 앞 열 기준 병합 사용 안함 (`default`) |
| `1` | 데이터 영역에만 적용 |
| `2` | 헤더 영역에만 적용 |
| `3` | 데이터 및 헤더 영역 모두 적용 |

#### 컬럼별 병합 제외 (ColMerge)

특정 컬럼을 상하 자동 병합 대상에서 제외합니다. `0`으로 설정 시 `PrevColumnMerge`의 탐색 대상에서도 제외됩니다.

```javascript
Cols: [
  // ColMerge: 0 → 이 컬럼은 상하 병합하지 않음
  { Type: "Text", Name: "Dept", ColMerge: 0, Width: 100 },
  { Type: "Text", Name: "Team", Width: 100 }
]
```

#### 행별 병합 제외 (RowMerge)

특정 행을 자동 병합 대상에서 제외합니다.

```javascript
// 특정 데이터 행을 병합 대상에서 제외
var row = sheet.getFirstVisibleRow();
sheet.setAttribute( row, null, "RowMerge", 0);
sheet.setAutoMerge({ dataMerge: 1, headerMerge: 0, prevColumnMerge: 0 });

// 첫 번째 헤더 행을 병합 대상에서 제외
var header = sheet.getHeaderRows()[0];
sheet.setAttribute( header, null, "RowMerge", 0);
```

#### setAutoMerge로 동적 변경

```javascript
// 시트 생성 후 데이터 영역 열 기준 병합 + 앞 열 기준 병합 적용
sheet.setAutoMerge({ dataMerge: 1, headerMerge: 0, prevColumnMerge: 1 });
```

> **주의:** 소계(`makeSubTotal`) 사용 시 `DataMerge`와 `PrevColumnMerge` 설정값은 무시되고 각각 `1`로 동작합니다.

### 수동 병합 (setMergeRange / setMergeCancel)

특정 영역을 직접 지정하여 하나의 셀로 병합하거나 병합을 해제합니다.

> **제약:** `SearchMode: 0`에서는 스크롤 시 병합 상태가 유지되지 않아 정상 지원되지 않습니다.

```javascript
// AR2행~AR4행, deptCd열~empNm열을 하나의 셀로 병합
sheet.setMergeRange(
  sheet.getRowById("AR2"), "deptCd",
  sheet.getRowById("AR4"), "empNm"
);

// 병합된 셀을 분리 (병합의 시작 셀을 지정)
sheet.setMergeCancel(sheet.getRowById("AR2"), "deptCd");
```

#### setMergeRange 파라미터

| Name | Type | Required | Description |
|------|------|----------|-------------|
| row1 | `object` | 필수 | 병합 시작 행 객체 |
| col1 | `string` | 필수 | 병합 시작 열 이름 |
| row2 | `object` | 필수 | 병합 종료 행 객체 (`row1`보다 아래 위치) |
| col2 | `string` | 필수 | 병합 종료 열 이름 (`col1`보다 우측 위치) |

#### setMergeCancel 파라미터

| Name | Type | Required | Description |
|------|------|----------|-------------|
| row | `object` | 필수 | 병합된 행 객체 |
| col | `string` | 필수 | 병합된 열 이름 |