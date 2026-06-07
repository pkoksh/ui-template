# Formula (수식 계산)

> **Formula vs FormulaRow 구분**
> - **Formula** (이 문서): 각 행에서 열 간 값을 계산 (예: `수량 × 단가 = 금액`). `CanFormula: 1` + `CalcOrder` 필수.
> - **FormulaRow**: 데이터 하단 고정된 영역에 열 단위 합계행 자동 생성. Col 속성에 `FormulaRow: "Sum"` 설정. → [합계행 가이드](./summary.md)

**주의**: 데이터 하단에 합계행이 필요하면 Foot 배열을 수동으로 만들지 말고 **FormulaRow 속성을 사용**하세요.

열 간의 계산 로직을 문자열이나 함수로 설정하여 셀 값을 자동 계산하는 기능입니다.

## 필수 설정

Formula를 사용하려면 반드시 `CanFormula`와 `CalcOrder`를 설정해야 합니다.

```javascript
Def: {
  Row: {
    CanFormula: 1,
    // Formula가 선언된 열이름 순서대로 작성 (띄어쓰기 금지)
    CalcOrder: "yearSum,total"
  }
}
```

> **주의**: `CalcOrder`는 계산 순서를 결정합니다. `yearSum`이 먼저 계산된 후 `total`이 계산됩니다.

---

## 문자열 방식

열이름을 직접 사용하여 계산식을 작성합니다.

```javascript
Cols: [
  { Type: "Int", Name: "sCount" },
  { Type: "Int", Name: "sPrice" },
  { Type: "Float", Name: "sDiscount" },
  {
    Type: "Float", Name: "sResult",
    Formula: "sCount * sPrice - (sCount * sPrice * sDiscount) / 100"
  }
]
```

### 외부 함수 호출 (문자열)

```javascript
{
  Type: "Text", Name: "sComment",
  // 문자열 내에서 외부 함수 호출 시 Sheet, Row, Col 예약어 전달
  Formula: useFormula1
}

function useFormula1(fr) {
  // fr.Sheet, fr.Row, fr.Col 로 접근 가능
  var rtnValue = (fr.Row['QT1'] + fr.Row['QT2']) / 2;
  // 반드시 리턴이 있어야 합니다
  return rtnValue;
}
```

---

## 함수 방식

함수 객체를 직접 할당합니다. 파라미터 `fr`을 통해 `Sheet`, `Row`, `Col`에 접근합니다.

```javascript
Cols: [
  { Type: "Int", Name: "qt1" },
  { Type: "Int", Name: "qt2" },
  { Type: "Int", Name: "qt3" },
  { Type: "Int", Name: "qt4" },
  {
    Type: "Int", Name: "yearSum",
    Formula: function(fr) {
      return fr.Row["qt1"] + fr.Row["qt2"] + fr.Row["qt3"] + fr.Row["qt4"];
    }
  },
  { Type: "Float", Name: "rate" },
  {
    Type: "Float", Name: "total",
    Formula: function(fr) {
      return fr.Row["yearSum"] * fr.Row["rate"];
    }
  }
]
```

### 함수 파라미터 (fr) 예약어

| 예약어 | 설명 |
|--------|------|
| `fr.Sheet` | 시트 객체 |
| `fr.Row` | 현재 행 객체 (`fr.Row["열이름"]`으로 셀 값 접근) |
| `fr.Col` | 현재 열 이름 |

---

## Formula 셀의 편집

Formula로 계산된 셀은 기본적으로 편집이 불가능합니다. 편집을 허용하려면 `CanEditFormula`를 설정합니다.

```javascript
{
  Type: "Float", Name: "sResult",
  Formula: "sCount * sPrice",
  CanEditFormula: 1  // Formula 셀도 편집 가능
}
```

---

## 전체 예시

```javascript
var options = {};

options.Def = {
  Row: {
    CanFormula: 1,
    CalcOrder: "yearSum,total,sComment,sGrade"
  }
};

options.Cols = [
  { Type: "Int", Name: "qt1", Header: "1분기" },
  { Type: "Int", Name: "qt2", Header: "2분기" },
  { Type: "Int", Name: "qt3", Header: "3분기" },
  { Type: "Int", Name: "qt4", Header: "4분기" },
  {
    Type: "Int", Name: "yearSum", Header: "연합계",
    Formula: function(fr) {
      return fr.Row["qt1"] + fr.Row["qt2"] + fr.Row["qt3"] + fr.Row["qt4"];
    }
  },
  { Type: "Float", Name: "rate", Header: "비율" },
  {
    Type: "Float", Name: "total", Header: "총액",
    Formula: function(fr) {
      return fr.Row["yearSum"] * fr.Row["rate"];
    }
  },
  {
    Type: "Text", Name: "sComment", Header: "비고",
    Formula: "calcComment(Sheet,Row,Col)"
  },
  {
    Type: "Text", Name: "sGrade", Header: "등급",
    Formula: calcGrade
  }
];

function calcComment(fr) {
  var avg = (fr.Row['qt1'] + fr.Row['qt2']) / 2;
  return avg > 100 ? "우수" : "보통";
}

function calcGrade(obj) {
  var value = obj.Row["yearSum"];
  if (value >= 400) return "A";
  if (value >= 300) return "B";
  if (value >= 200) return "C";
  return "D";
}
```

---

## 주의사항

- Formula에서 **자기 자신의 컬럼 값을 수정하면 무한루프**에 빠질 수 있으므로 권장하지 않습니다.
- 외부 함수를 단독으로 사용하는 경우 **반드시 값을 return**해야 합니다.
- 연관된 열의 값이 편집되면 Formula가 자동으로 재계산됩니다.
- 속성 Formula(`ColorFormula`, `CanEditFormula` 등)와 함께 사용하는 경우, 일반 Formula의 **컬럼명도 `CalcOrder`에 포함**해야 합니다.
- 열 간의 계산 로직은 문자열보다 함수로 설정할 것(CSP 문제)