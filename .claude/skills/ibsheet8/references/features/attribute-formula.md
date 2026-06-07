# 속성 Formula (attribute+Formula)

열의 속성(`CanEdit`, `Color`, `TextColor`, `Format` 등)을 Formula를 통해 동적으로 설정하는 기능입니다.

## 필수 설정

속성 Formula를 사용하려면 반드시 `CanFormula`와 `CalcOrder`를 설정해야 합니다.

```javascript
Def: {
  Row: {
    CanFormula: 1,
    // 열이름+속성명 형식, 띄어쓰기 없이 붙여서 작성
    CalcOrder: "yearSumColor,rateCanEdit"
  }
}
```

> **주의**: `CalcOrder`에 이름을 작성할 때 띄어쓰기가 있으면 Formula가 정상 동작하지 않습니다.

---

## 기본 문법

`속성명 + Formula` 형태로 컬럼 속성에 선언합니다.

```javascript
Cols: [
  {
    Type: "Int", Name: "yearSum",
    ColorFormula: function(fr) {
      return fr.Value > 100 ? '#FF0000' : '#FFFFAA';
    }
  },
  {
    Type: "Text", Name: "Total",
    // 함수 방식 (param 내용: Row, )
    FormatFormula: function(param) {
      if (param.Row["SaupJuminNo"].length == 10) {
        return "###-##-#####";
      } else {
        return "######-#######";
      }
    }
  }
]
```

### Formula function의 파라미터 속성

| 타입 | 설명 |
|------|------|
| `Row` | 현재 계산 중인 행 객체 |
| `Col` | 현재 계산 중인 열 이름 |
| `Value` | Row[Col] 의 값 |
| `Attr` | CalcOrder에 설정한 값 (열이름+속성명)  |

> **주의**: 문자열 방식보다는 함수 방식을 사용할 것을 권함.(CSP 문제)

---

## 주요 속성 Formula

### ColorFormula — 배경색

```javascript
{
  Type: "Int", Name: "sCount",
  ColorFormula: function(fr) {
    if (fr.Value < 0) return "rgb(245, 226, 24)";
    if (fr.Value == 0) return "";
    return "rgb(11, 231, 109)";
  }
}
```

### TextColorFormula — 글자색

```javascript
{
  Type: "Int", Name: "sMoney",
  TextColorFormula: function(fr) {
    return fr.Value < 3000 ? '#ff0000' : '#f0694e';
  }
}
```

### CanEditFormula — 편집 가능 여부

```javascript
{
  Type: "Text", Name: "Total",
  CanEditFormula: function(fr) {
    return fr.Row["CHK"] == 1 && fr.Row["AMT"] > 10 ? 1 : 0;
  }
}

{
  Type: "Float", Name: "rate",
  CanEditFormula: function(fr) {
    return fr.Row["CHK"] == 1 && fr.Row["yearSum"] > 150;
  }
}
```

### FormatFormula — 표시 형식

```javascript
{
  Type: "Text", Name: "bizNo",
  FormatFormula: function(param) {
    if (param.Row["SaupJuminNo"].length == 10) {
      return "###-##-#####";
    } else {
      return "######-#######";
    }
  }
}
```

---

## 전체 예시

```javascript
var options = {};

options.Def = {
  Row: {
    CanFormula: 1,
    // 열이름+속성명 형식으로 계산 순서 지정 (띄어쓰기 금지)
    CalcOrder: "sCountColor,sMoneyTextColor,sResult,yearSumColor,rateCanEdit"
  }
};

options.Cols = [
  { Type: "Bool", Name: "CHK" },
  {
    Type: "Int", Name: "sCount",
    // 값에 따라 배경색 변경
    ColorFormula: function(fr) {
      if (fr.Value < 0) return "rgb(245, 226, 24)";
      if (fr.Value == 0) return "";
      return "rgb(11, 231, 109)";
    }
  },
  {
    Type: "Int", Name: "sMoney",
    // 값에 따라 글자색 변경
    TextColorFormula: function(fr) {
      return fr.Value < 3000 ? '#ff0000' : '#f0694e';
    }
  },
  {
    Type: "Float", Name: "sResult",
    // 일반 Formula (값 계산)
    Formula: function(fr) {
      return fr.Row["sCount"] * fr.Row["sPrice"] - (fr.Row["sCount"] * fr.Row["sPrice"] * fr.Row["sDiscount"]) / 100;
    }
  },
  {
    Type: "Int", Name: "yearSum",
    // 함수 방식 배경색 Formula
    ColorFormula: function(fr) {
      return fr.Value > 100 ? '#FF0000' : '#FFFFAA';
    }
  },
  {
    Type: "Float", Name: "rate",
    // 함수 방식 편집 가능 여부 Formula
    CanEditFormula: function(fr) {
      return fr.Row["CHK"] == 1 && fr.Row["yearSum"] > 150;
    }
  }
];
```

---

## 일반 Formula와 함께 사용할 때

속성 Formula와 일반 Formula를 같이 사용하는 경우, 일반 Formula가 선언된 **컬럼명**도 `CalcOrder`에 포함해야 합니다.

```javascript
Def: {
  Row: {
    CanFormula: 1,
    // sResult: 일반 Formula, sCountColor: 속성 Formula
    CalcOrder: "sResult,sCountColor,rateCanEdit"
  }
}

Cols: [
  {
    Type: "Float", Name: "sResult",
    Formula: function(fr) {                    // 일반 Formula
      return fr.Row["sCount"] * fr.Row["sPrice"];
    }
  },
  {
    Type: "Int", Name: "sCount",
    ColorFormula: function(fr) {               // 속성 Formula
      return fr.Value < 0 ? '#FF0000' : '';
    }
  },
  {
    Type: "Float", Name: "rate",
    CanEditFormula: function(fr) {             // 속성 Formula
      return fr.Row["CHK"] == 1 ? 1 : 0;
    }
  }
]
```

---

## 체크리스트

- `CanFormula: 1` 설정 여부
- `CalcOrder`에 `열이름+속성명` 형식으로 등록 여부
- `CalcOrder` 항목 간 띄어쓰기 없이 작성 여부
- 일반 Formula 병용 시 `CalcOrder`에 해당 컬럼명 포함 여부
- 함수 방식 사용 시 반드시 값을 `return` 하는지 여부

---

⚠️ **함정 — remount(`key`) + `loadSearchData` 패턴 그리드에서 속성 Formula 가 아예 호출되지 않는다 → `setAttribute` 직접 적용으로 대체**

React `<IBSheetReact key={n}>` 재마운트 + `onRenderFirstFinish` 안 `loadSearchData` 로 데이터를 적재하는 그리드에서, 위 필수 설정(`CanFormula:1` + `CalcOrder` 등록)을 전부 갖춰도 **`ColorFormula` 가 단 한 번도 호출되지 않는 사례** 가 있다 (UIQC1101M00 — 함수 내 카운터 계측으로 0회 확정, `renderBody()` 강제 호출에도 0회, `recalcAll` 류 메서드 부재). `CanEditFormula` 도 일부 셀에서 엮이지 않아 컬럼 `CanEdit:1` 디폴트가 누수(편집 불가여야 할 셀이 편집됨)된다.

```javascript
// ❌ Formula 에 의존 — 이 그리드 패턴에서는 호출 자체가 안 됨 (회색/편집제어 미적용)
{ Name: 'lowVal', CanEdit: 1,
  ColorFormula: (fr) => fr.Row.mtod !== '2' ? '#d2d2d2' : '',
  CanEditFormula: (fr) => (fr.Row.Added && fr.Row.mtod === '2' ? 1 : 0) }

// ✅ 데이터 확정 시점(onSearchFinish / addRow 직후)에 setAttribute 로 직접 적용
//    setAttribute 는 런타임 우선순위가 Formula/Cols 초기값보다 높고, 항상 렌더에 반영된다.
Events: {
  onSearchFinish: (evt) => applyCellStyles(evt.sheet),   // ← loadSearchData "동기 직후" 는
}                                                         //    getDataRows() 가 빈 배열일 수 있음
function applyCellStyles(sheet) {
  for (const r of sheet.getDataRows()) {
    const match = String(sheet.getValue(r, 'mtod')) === '2'
    const isAdded = Boolean(r.Added)
    sheet.setAttribute(r, 'lowVal', 'Color', match ? '' : '#d2d2d2', 0)
    sheet.setAttribute(r, 'lowVal', 'CanEdit', match && isAdded ? 1 : 0, 0)
  }
  sheet.renderBody()
}
```

**핵심 2가지**: ① 색/편집 제어가 안 먹으면 Formula 디버깅보다 `setAttribute(row, col, 'Color'/'CanEdit', v, 0)` + `renderBody()` 로 전환이 빠르고 확실하다. ② 적용 시점은 **`onSearchFinish`** — `loadSearchData` 호출 직후 동기 시점에는 행이 아직 없어 루프가 0회 돈다 (행추가 경로는 `addRow` 직후 호출 OK).
