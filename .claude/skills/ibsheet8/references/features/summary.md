# 합계행 / 소계 (FormulaRow & SubTotal)

## 개요

IBSheet8은 데이터의 합계, 평균, 최대값, 최소값, 건수 등을 표시하기 위한 두 가지 방식을 제공합니다.

- **FormulaRow**: `Foot` 영역에 고정된 합계행을 생성하여 열 단위 집계값을 표시합니다.
- **makeSubTotal**: 기준 열의 데이터 값에 따라 소계/누계 행을 데이터 영역에 동적으로 추가합니다.

**주의**: 데이터 하단에 합계행이 필요하면 Foot 배열을 수동으로 만들지 말고 **FormulaRow 속성을 사용**하세요.

---

## FormulaRow (합계행)

`Foot` 영역에 고정된 행을 생성하여 열의 합계, 평균 등의 집계값을 표시합니다.

**주의**: 데이터 하단에 합계행이 필요하면 Foot 배열을 수동으로 만들지 말고 **FormulaRow 속성을 사용**하세요.

- 생성된 행의 `id`는 `"FormulaRow"`이며, `NoColor:2` 속성이 기본 적용됩니다.
- `SearchMode:3, 4, 5`에서는 사용할 수 없습니다.
- 숫자형 컬럼(`Int`, `Float`)을 제외한 컬럼은 `"Count"`만 사용 가능합니다.

### 타입

`string` | `function`

### 집계 옵션

| 값 | 설명 |
|----|------|
| `"Sum"` 또는 `"합계 {Sum} 원"` | 열의 합계값 |
| `"Avg"` 또는 `"평균 {Avg}"` | 열의 평균값 |
| `"Max"` 또는 `"최대값 {Max}"` | 열의 최대값 |
| `"Min"` 또는 `"최소값 {Min}"` | 열의 최소값 |
| `"Count"` 또는 `"{Count} 건"` | 행의 개수 |
| `function` | 사용자 정의 함수 |

> `{Sum}`, `{Avg}` 등의 치환자를 텍스트와 함께 사용하면 `"합계 1,000 원"` 형태로 표현됩니다.

### 기본 예제

```javascript
options.Cols = [
  {
    Type: "Int",
    Name: "qt",
    FormulaRow: "Sum",       // 합계
    Width: 120
  },
  {
    Type: "Int",
    Name: "rate",
    FormulaRow: "Avg",       // 평균
    Width: 120
  },
  {
    Type: "Int",
    Name: "brnSaleAmt",
    FormulaRow: "최대값 {Max}",  // 텍스트 + 값 형태
    Width: 120
  }
];
```

### 사용자 정의 함수 예제

함수의 파라미터 `fr`을 통해 `Sheet`, `Row`, `Col`에 접근할 수 있습니다.

```javascript
{
  Type: "Text",
  Name: "user",
  FormulaRow: function(fr) {
    var rows = fr.Sheet.getDataRows();
    var count = 0;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].TextColor == "#FF0000") {
        count++;
      }
    }
    return "경고 :" + count + "건";
  },
  Width: 120
}
```

### FormulaRow 셀 값 직접 변경

```javascript
// 객체 직접 접근하여 값 교체
sheet.getRowById("FormulaRow")["sDetailVisible"] = 1;  // Visible 속성 변경
sheet.getRowById("FormulaRow")["sDetail"] = "가나다";
sheet.refreshRow(sheet.getRowById("FormulaRow"));

// setValue로 값 교체
sheet.setValue(sheet.getRowById("FormulaRow"), "sDetail", "가나다");
```

---

## FormulaRow API 메서드

### setFormulaRow

합계행의 계산 방식을 변경하거나 행을 감출 수 있습니다.

```javascript
sheet.setFormulaRow(val, cols, visible, render);
```

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| val | `string` \| `object` | 필수 | `"Sum"`, `"Avg"`, `"Min"`, `"Max"` 중 하나. object 형태 `{"ColName1":"Sum","ColName2":"Avg"}` 사용 시 cols 불필요 |
| cols | `string` | 선택 | 계산할 열이름 (복수개는 `,`로 연결) |
| visible | `boolean` | 선택 | `0`: 감춤 (default), `1`: 보임 |
| render | `boolean` | 선택 | `0`: 반영 안함 (default), `1`: 즉시 반영. `0` 사용 시 작업 후 `rerender()` 필요 |

```javascript
// 합계행 계산을 평균값으로 변경
sheet.setFormulaRow("Avg", "AMT1,AMT2", 1, 1);

// 합계행 감추기
sheet.setFormulaRow({ visible: 0 });
```

### setFormulaRowPosition

합계행의 위치를 상단 또는 하단으로 변경합니다.

```javascript
sheet.setFormulaRowPosition(pos, norender);
```

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| pos | `number` | 필수 | `0`: 상단으로 이동, `1`: 하단으로 이동 (default) |
| norender | `boolean` | 선택 | `0`: 즉시 반영 (default), `1`: 반영 안함. `1` 사용 시 `renderBody()` 먼저 실행 필요 |

```javascript
// 합계행을 상단으로 이동
sheet.setFormulaRowPosition(0);

// 합계행을 하단으로 이동
sheet.setFormulaRowPosition({ pos: 1 });
```

---

## 소계/누계 (makeSubTotal)

기준 열의 데이터에 따라 소계/누계 행을 시트에 추가합니다. 기준 열의 왼쪽 열에 소계 설명("소계 : 값")이 표시됩니다.

### 제약사항

- `SearchMode`: `0, 2`만 지원
- 조회 시 소계를 사용하는 경우 `onDataLoad` 이벤트에서 호출해야 합니다.
- `usermerge:0`(default)을 사용하면 `DataMerge`, `PrevColumnMerge` 설정이 무시됩니다.
- `addRow`는 소계 그룹 안에서 사용할 수 없으며, 그룹 밖(맨위, 맨아래)에만 행 추가가 가능합니다.

### Syntax

```javascript
sheet.makeSubTotal(subTotalRows, usermerge, excludeSubTotalRowCount);
```

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| subTotalRows | `array[object]` | 필수 | 소계 행에 대한 설정 배열 |
| usermerge | `boolean` | 선택 | `0`: 병합 동작 실행 안함 (default), `1`: 사용자 설정 `DataMerge`, `PrevColumnMerge`에 따라 병합 |
| excludeSubTotalRowCount | `boolean` | 선택 | `0`: 소계/누계 행을 SEQ, InfoRow 개수에 포함 (default), `1`: 제외 |

### subTotalRows 속성

| 속성 | 타입 | 필수 | 설명 |
|------|------|------|------|
| stdCol | `string` | 필수 | 기준 열 |
| sumCols | `string` | 선택 | 합계 계산할 열이름 (`\|`로 연결) |
| avgCols | `string` | 선택 | 평균 계산할 열이름 (`\|`로 연결) |
| countCols | `string` | 선택 | 행의 수로 계산할 열이름 (`\|`로 연결) |
| color | `string` | 선택 | 소계 행 배경색 |
| showCumulate | `boolean` | 선택 | `0`: 누계 행 표시 안함 (default), `1`: 누계 행 표시 |
| cumulateColor | `string` | 선택 | 누계 행 배경색 |
| sort | `string` | 선택 | `""`: 정렬 안함 (default), `"asc"`: 오름차순, `"desc"`: 내림차순 |
| position | `string` | 선택 | `"bottom"`: 그룹 하단 (default), `"top"`: 그룹 상단, `"bottomAll"`: 최하단, `"topAll"`: 최상단 |
| mode | `number` | 선택 | `0`: 모든 그룹 소계행 표시 (default), `1`: 2개 이상 그룹만, `2`: 1개 이상 그룹만 |
| hidden | `boolean` | 선택 | `0`: Visible:0 행 소계 제외 (default), `1`: 포함 |
| captionCol | `array[object]` | 선택 | 캡션 정보 설정 (아래 참조) |

### captionCol 속성

| 속성 | 타입 | 설명 |
|------|------|------|
| col | `string` | 캡션이 설정될 열이름 (`sumCols`, `countCols`, `avgCols` 계산 열에는 적용 안됨) |
| val | `string` \| `function` | 소계 캡션 값 |
| cumVal | `string` | 누계 캡션 값 |
| span | `number` | captionCol의 col 기준으로 열머지 할 값 |

**captionCol 예약어**

| 예약어 | 설명 |
|--------|------|
| `%s` | '소계(누계)'를 의미 |
| `%col` | 소계 기준값 출력 |
| `%cnt` | 소계(누계) 건수 표시 |
| `%capCol` | col에 설정된 컬럼의 마지막 행 값을 소계행에 표시 |

### 기본 예제

```javascript
Events: {
  onDataLoad: function(evt) {
    evt.sheet.makeSubTotal([
      {
        stdCol: "sPolicy",
        avgCols: "A|D",
        countCols: "E",
        showCumulate: 1,
        sort: "desc",
        captionCol: [
          { col: "sPolicy", val: "%s: %col" }
        ]
      },
      {
        stdCol: "sUnit",
        sumCols: "B|C",
        showCumulate: 1
      }
    ]);
  }
}
```

### captionCol 함수 사용 예제

```javascript
sheet.makeSubTotal([
  {
    stdCol: "sPolicy",
    sumCols: "A|B|C|D",
    position: "bottom",
    captionCol: [
      {
        col: "E",
        val: function(fr) {
          var val = (fr.Row["A"] + fr.Row["B"]) * 10;
          return "E: " + val + "퍼센트!";
        }
      },
      {
        col: "F",
        val: function(fr) {
          return "1,000,000";  // 숫자 데이터는 구분자를 붙여서 리턴
        }
      }
    ]
  }
]);
```

### SEQ 제외 및 span 설정 예제

```javascript
sheet.makeSubTotal({
  subTotalRows: [
    {
      stdCol: "sPolicy",
      sumCols: "B|C|D",
      avgCols: "A",
      position: "bottom",
      captionCol: [
        { col: "sPolicy", val: "%s: %col", cumVal: "%s: %col", span: 3 },
        { col: "E", val: " ", cumVal: " ", span: 2 }
      ]
    }
  ],
  excludeSubTotalRowCount: 1  // 소계/누계 행을 SEQ에서 제외
});
```

### 소계셀 Format 적용 (v8.0.0.25+)

`Def.SubSum`을 이용하면 소계행에만 포맷을 적용할 수 있습니다. `sumCols`, `avgCols`, `countCols`에 설정한 컬럼의 Format만 변경 가능합니다.

```javascript
Def: {
  SubSum: {
    AFormat: "합계 : #,##0.##",  // 소계행 A셀에 텍스트 + 실수형 포맷
    BFormat: "#,##0"              // 소계행 B셀에 정수형 포맷
  }
}
```

---

## 소계 관련 API 메서드

### removeSubTotal

시트 내 모든 소계/누계 행을 제거합니다.

```javascript
sheet.removeSubTotal();
```

### getSubTotalRows

생성된 소계/누계 행들을 반환합니다.

```javascript
var totalRows = sheet.getSubTotalRows();
// 반환값: {
//   subTotal: [[첫 번째 기준 열 소계행들], [두 번째 기준 열 소계행들], ...],
//   Total: [[첫 번째 기준 열 누계행들], [두 번째 기준 열 누계행들], ...]
// }
```

---

## 종합 예제

FormulaRow와 makeSubTotal을 함께 활용하는 예제입니다.

```javascript
var options = {
  Cfg: {
    SearchMode: 0
  },
  Def: {
    SubSum: {
      BFormat: "#,##0",
      CFormat: "#,##0",
      DFormat: "#,##0"
    }
  },
  Cols: [
    { Header: "정책사업", Name: "sPolicy", Type: "Text", Width: 140 },
    { Header: "단위사업", Name: "sUnit", Type: "Text", Width: 140 },
    {
      Header: "예산액", Name: "B", Type: "Int", Format: "#,##0",
      FormulaRow: "Sum",   // Foot 영역에 합계 표시
      Width: 120
    },
    {
      Header: "집행액", Name: "C", Type: "Int", Format: "#,##0",
      FormulaRow: "Sum",
      Width: 120
    },
    {
      Header: "잔액", Name: "D", Type: "Int", Format: "#,##0",
      FormulaRow: "Sum",
      Width: 120
    },
    {
      Header: "비율", Name: "A", Type: "Float",
      FormulaRow: "Avg",   // Foot 영역에 평균 표시
      Width: 100
    },
    {
      Header: "건수", Name: "E", Type: "Text",
      FormulaRow: "{Count} 건",  // Foot 영역에 건수 표시
      Width: 100
    }
  ],
  Events: {
    onDataLoad: function(evt) {
      // 데이터 로드 후 소계행 추가
      evt.sheet.makeSubTotal([
        {
          stdCol: "sPolicy",
          sumCols: "B|C|D",
          avgCols: "A",
          countCols: "E",
          showCumulate: 1,
          sort: "asc",
          position: "bottom",
          color: "#E0F0FF",
          cumulateColor: "#FFE0E0",
          captionCol: [
            { col: "sPolicy", val: "%s: %col", cumVal: "누계: %col" }
          ]
        }
      ]);
    }
  }
};
```

### 예제 속성 요약

| 속성 | 위치 | 설명 |
|------|------|------|
| `FormulaRow: "Sum"` | Col | Foot 영역에 열의 합계 표시 |
| `FormulaRow: "Avg"` | Col | Foot 영역에 열의 평균 표시 |
| `FormulaRow: "{Count} 건"` | Col | Foot 영역에 건수 + 텍스트 표시 |
| `Def.SubSum.BFormat` | Def | 소계행 B셀 포맷 지정 |
| `stdCol: "sPolicy"` | makeSubTotal | 정책사업 열 기준 소계 생성 |
| `sumCols: "B\|C\|D"` | makeSubTotal | B, C, D 열에 합계 계산 |
| `avgCols: "A"` | makeSubTotal | A 열에 평균 계산 |
| `showCumulate: 1` | makeSubTotal | 누계 행 함께 표시 |
| `captionCol` | makeSubTotal | 소계행 캡션 설정 |

---

## 주의사항

- **FormulaRow**는 `SearchMode:3, 4, 5`에서 사용할 수 없습니다.
- **makeSubTotal**은 `SearchMode:0, 2`만 지원합니다.
- makeSubTotal 호출 시 조회 시점에서는 반드시 `onDataLoad` 이벤트에서 사용해야 합니다.
- `usermerge:0`(default) 사용 시 `DataMerge`, `PrevColumnMerge` 설정이 무시됩니다.
- 소계 그룹 안에서는 `addRow`를 사용할 수 없으며, 그룹 밖(맨위, 맨아래)에만 행 추가가 가능합니다.
- `excludeSubTotalRowCount`는 서버페이지 기능 사용 시 동작하지 않습니다.
- 숫자형이 아닌 컬럼에서 FormulaRow는 `"Count"`만 사용 가능합니다.
