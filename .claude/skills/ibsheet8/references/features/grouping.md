# 그룹핑 (Grouping)

## 개요

IBSheet8의 그룹핑은 특정 열의 값을 기준으로 데이터 행을 묶어 트리 형태로 표시하는 기능입니다.
Solid Row의 `Kind: "Group"`을 설정하면 사용자가 헤더 셀을 드래그&드롭하여 동적으로 그룹핑을 구성할 수 있습니다.

---

## Cfg 속성

### Group

시트 로딩 시 그룹핑할 열의 `Name`을 `,` 구분자로 설정합니다.

> 열 이름 사이에 **띄어쓰기 없이** 붙여 작성해야 합니다.

```javascript
Cfg: {
  Group: "sName,sIndutyCodeName"  // sName → sIndutyCodeName 순서로 그룹핑
}
```

- `Solid Row의 Kind: "Group"`을 함께 설정하면, 그룹행에 헤더 텍스트가 표시되고 사용자가 드래그&드롭으로 그룹 열을 변경할 수 있습니다.
- `Solid Row의 Kind: "Group"`을 설정하지 않으면, 초기 그룹핑은 적용되지만 사용자가 변경할 수 없습니다.

### GroupMain

그룹 트리를 표시할 열을 지정합니다. 설정하지 않으면 자동으로 기준 열이 지정됩니다.

```javascript
Cfg: {
  GroupMain: "sName"  // sName 열에 그룹 트리 표시
}
```

### GroupFormat

그룹 행에 표시되는 텍스트 형식을 설정합니다.

| 치환자 | 설명 |
|--------|------|
| `{%s}` | 그룹 기준 값 |
| `{%c}` | 그룹 내 데이터 행 개수 |
| `{%vc}` | 감춰진 행을 제외한 데이터 행 개수 (v8.1.0.27+) |

```javascript
Cfg: {
  GroupFormat: "<span style='color:black'>{%s}</span> <span style='color:red'>({%c}건)</span>"
}
```

> HTML 태그를 사용하여 스타일을 적용할 수 있습니다.

### GroupSort

그룹핑 시 기준 열에 대한 정렬 처리 여부를 설정합니다. (v8.3.0.35+)

| 값 | 설명 |
|----|------|
| `0` | 정렬 없이 현재 상태로 그룹핑 |
| `1` | 정렬 후 그룹핑 (`default`) |

```javascript
Cfg: {
  GroupSort: 0  // 정렬 처리 하지 않고 현재 상태로 그룹핑
}
```

---

## Cols 속성

### CanGroup

열의 그룹핑 가능 여부를 설정합니다. 사용자가 헤더를 드래그하여 동적 그룹핑할 때 특정 열을 제외할 수 있습니다.

| 값 | 설명 |
|----|------|
| `0 (false)` | 그룹핑 불가 |
| `1 (true)` | 그룹핑 가능 (`default`) |

```javascript
{ Header: "업소명", Name: "sName", CanGroup: 0 }  // 이 열은 드래그 그룹핑 불가
```

### GroupWidth

그룹핑 시 그룹 트리가 위치할 열(`GroupMain` 지정 열)의 너비를 조정합니다.
값을 `1`로 설정하면 데이터 양에 따라 자동 조절됩니다.

```javascript
{ Header: "업소명", Name: "sName", GroupWidth: 1 }  // 자동 너비 조절
{ Header: "업소명", Name: "sName", GroupWidth: 210 }  // 210px로 고정
```

### GroupDef

그룹핑될 때 그룹 행에 적용될 `Def` 설정 ID를 지정합니다. `Def` 영역에 커스텀 기능을 정의하고 해당 ID를 참조합니다.

> `Def`에 커스텀 설정 시 반드시 `Def: "Group"`을 포함해야 정상 동작합니다.

```javascript
Def: {
  // 커스텀 그룹 행 정의
  "myGroupRow": { Def: "Group", Color: "#FFADAD", CanEdit: 0, CanFocus: 0 }
}

Cols: [
  { Header: "분류코드명", Name: "sIndutyCodeName", GroupDef: "myGroupRow", Color: "#EFFFEF" }
]
```

### GroupSubTotal

그룹 소계 기능 사용 시 소계 행에 적용할 옵션을 설정합니다. `Cfg.UseGroupSubTotal` 설정이 필요합니다.

| 속성 | 타입 | 필수 | 설명 |
|------|------|------|------|
| Type | string | 필수 | `"Sum"`, `"Avg"`, `"Count"`, `"Max"`, `"Min"` |
| Color | string | 선택 | 소계 행 배경색 (기본: `"#FFFFEF"`) |
| Format | string | 선택 | 소계 값 포맷 (기본: 열의 Format 값) |

```javascript
Cfg: {
  Group: "sName",
  UseGroupSubTotal: 1  // 1: 소계행 신규 추가, 2: 그룹행에 소계 표시
}

Cols: [
  { Header: "상품가격", Name: "sPrice", Type: "Int", GroupSubTotal: { Type: "Sum", Color: "#FFDDAA", Format: "#,###" } }
]
```

---

## Def.Group (그룹 행 기본 설정)

`Def.Group`으로 모든 그룹 행에 적용되는 기본 설정을 정의합니다. 개별 셀에 Formula 등 속성을 지정할 수 있습니다.

```javascript
Def: {
  Row: {
    CanFormula: 1  // 수식 사용 활성화
  },
  Group: {
    Expanded: 1,               // 그룹 기본 펼침 상태 (1: 펼침, 0: 접힘)
    Color: "#e7f1ff",          // 그룹 행 배경색
    sPrice: {
      Formula: sPriceFormula   // sPrice 열에 대한 그룹 행 수식 (합계 등)
    }
  }
}
```

---

## Solid Row - 그룹 행 (Kind: "Group")

`Solid` 배열에 `Kind: "Group"`을 설정하면 시트 상단에 그룹 조작 영역이 생성됩니다. 사용자가 헤더 셀을 이 영역으로 드래그하여 그룹핑을 추가/변경할 수 있습니다.

### 기본 그룹 행

```javascript
Solid: [{
  Kind: "Group",
  Space: -1,   // 시트 밖 상단에 위치
  id: "Group"
}]
```

### 커스텀 그룹 행 (버튼 추가)

`Cells` 속성으로 커스텀 셀을 구성할 수 있습니다.

```javascript
Solid: [{
  Kind: "Group",
  Space: -1,
  id: "Group",
  Cells: "Custom,btnMinus,btnPlus",
  btnMinus: {
    Type: "Button",
    Button: "Button",
    AddClass: "GroupRowBtn",
    ButtonText: "<i class='fa fa-folder' style='color:#BBB'></i>",
    OnClick: minusClick,  // 전체 접기 등 커스텀 동작
    Width: 25
  },
  btnPlus: {
    Type: "Button",
    Button: "Button",
    AddClass: "GroupRowBtn",
    ButtonText: "<i class='fa fa-folder-open' style='color:#BBB'></i>",
    OnClick: plusClick,   // 전체 펼치기 등 커스텀 동작
    Width: 25
  }
}]
```

### Space 위치값

| Space | 위치 |
|-------|------|
| `-1` | 시트 밖 상단 |
| `0` | 시트 안 헤더 위 |
| `1` | 시트 안 헤더 아래 |

---

## 그룹핑 API 메서드

### doGroup

지정한 열들로 그룹핑을 실행합니다.

```javascript
// 단일 열 그룹핑
sheet.doGroup("sName");

// 다중 열 그룹핑 (쉼표 구분, 띄어쓰기 없이)
sheet.doGroup("sName,sIndutyCodeName");
```

### showGroupRow

그룹 행을 동적으로 생성합니다. (v8.3.0.9+)

```javascript
// 그룹 행만 생성
sheet.showGroupRow();

// 그룹 행 생성 + 그룹핑 실행
sheet.showGroupRow("sName");

// 다중 열 그룹핑
sheet.showGroupRow(["sName", "sPrice"]);

// 포맷 지정
sheet.showGroupRow("sName", '{%s} <font color="gray">({%c}건)</font>');
```

### hideGroupRow

그룹 행을 제거하거나 숨깁니다. (v8.3.0.9+)

```javascript
sheet.hideGroupRow();   // 그룹 행 제거 (default)
sheet.hideGroupRow(0);  // 그룹 행 숨김 (제거하지 않음)
```

### getGroupRows

그룹으로 생성된 그룹 행들을 반환합니다.

```javascript
var groupRows = sheet.getGroupRows();
// 반환값: { 그룹열이름1: [그룹행들], 그룹열이름2: [그룹행들], ... }
```

---

## 그룹핑 이벤트

### onBeforeGroup

그룹 실행/해제 전에 호출됩니다. `true`를 리턴하면 그룹핑을 취소합니다.

| 파라미터 | 타입 | 설명 |
|----------|------|------|
| sheet | object | 시트 객체 |
| group | string | 그룹 기준 열 이름들 |

```javascript
Events: {
  onBeforeGroup: function(e) {
    // 특정 열로의 그룹핑 제한
    if (e.group.indexOf("sAddr") > -1) {
      alert("주소 열로는 그룹핑할 수 없습니다.");
      return true;  // 그룹 취소
    }
    // 그룹 열 개수 제한
    if (e.group.split(",").length > 3) {
      alert("4개 이상의 열로 그룹핑할 수 없습니다.");
      return true;
    }
  }
}
```

### onAfterGroup

그룹 실행/해제 후(렌더링 전) 호출됩니다.

| 파라미터 | 타입 | 설명 |
|----------|------|------|
| sheet | object | 시트 객체 |

```javascript
Events: {
  onAfterGroup: function(e) {
    console.log("그룹이 설정/해제 되었습니다.");
  }
}
```

---

## 종합 예제

```javascript
var sPriceFormula = function(f) {
  // 그룹 행의 sPrice 합계 계산 수식
  var sum = 0;
  // ... 합계 로직
  return sum;
};

var options = {
  Cfg: {
    SearchMode: 0,
    GroupMain: "sName",           // sName 열에 그룹 트리 표시
    CanSort: 0,
    GroupFormat: "<span style='color:black'>{%s}</span> <span style='color:red'>({%c}건)</span>",
    FitWidth: 1
  },
  Def: {
    Row: { CanFormula: 1 },
    Col: { Align: "Center" },
    Group: {
      Expanded: 1,                // 그룹 기본 펼침
      sPrice: { Formula: sPriceFormula },  // 그룹 행 sPrice 수식
      Color: "#e7f1ff"            // 그룹 행 배경색
    }
  },
  LeftCols: [
    { Header: "No", Name: "SEQ", MinWidth: 50 }
  ],
  Cols: [
    { Header: "업소명", Name: "sName", Type: "Text", MinWidth: 140, Align: "Left",
      CanGroup: 0, GroupWidth: 1, Width: 140 },
    { Header: "업소아이디", Name: "sShId", Type: "Text", MinWidth: 140, Width: 140, Align: "Left" },
    { Header: { Value: "분류코드명" }, Name: "sIndutyCodeName", Type: "Text", MinWidth: 140, Width: 140,
      GroupDef: "myGroupRow", Color: "#EFFFEF" },
    { Header: "분류코드", Name: "sIndutyCode", Type: "Text", MinWidth: 140, Align: "Left", Width: 140 },
    { Header: { Value: "상품명" }, Name: "sProdName", Type: "Text", MinWidth: 140, Align: "Left",
      Width: 140, Color: "#EFFFEF" },
    { Header: "업소 주소", Name: "sAddr", Type: "Text", MinWidth: 220, Align: "Left", Width: 220 },
    { Header: "업소 전화번호", Name: "sPhone", Type: "Text", MinWidth: 120, Align: "Left", Width: 120 },
    { Header: "추천수", Name: "sRcmn", Type: "Int", Format: "#,###", MinWidth: 140, Width: 140 },
    { Header: "상품가격", Name: "sPrice", Type: "Int", Format: "#,###", MinWidth: 100, Align: "Right", Width: 100 }
  ],
  Solid: [{
    Kind: "Group",
    Space: -1,                    // 시트 밖 상단에 그룹 행 배치
    id: "Group",
    Cells: "Custom,btnMinus,btnPlus",
    btnMinus: {
      Type: "Button", Button: "Button", AddClass: "GroupRowBtn",
      ButtonText: "<i class='fa fa-folder' style='color:#BBB'></i>",
      OnClick: minusClick,        // 전체 접기
      Width: 25
    },
    btnPlus: {
      Type: "Button", Button: "Button", AddClass: "GroupRowBtn",
      ButtonText: "<i class='fa fa-folder-open' style='color:#BBB'></i>",
      OnClick: plusClick,          // 전체 펼치기
      Width: 25
    }
  }]
};
```

### 예제 속성 요약

| 속성 | 위치 | 설명 |
|------|------|------|
| `GroupMain: "sName"` | Cfg | sName 열에 그룹 트리 표시 |
| `GroupFormat: "..."` | Cfg | 그룹 행 텍스트 형식 (HTML 지원) |
| `CanGroup: 0` | Col(sName) | sName 열은 드래그 그룹핑 제외 |
| `GroupWidth: 1` | Col(sName) | 그룹 트리 열 너비 자동 조절 |
| `GroupDef: "myGroupRow"` | Col(sIndutyCodeName) | 커스텀 그룹 행 설정 참조 |
| `Def.Group.Expanded: 1` | Def | 그룹 기본 펼침 상태 |
| `Def.Group.Color` | Def | 그룹 행 배경색 |
| `Def.Group.sPrice.Formula` | Def | 그룹 행 sPrice 열 수식 |
| `Solid Kind: "Group"` | Solid | 그룹 드래그&드롭 영역 생성 |
| `Solid Cells` | Solid | 커스텀 버튼 (접기/펼치기) 추가 |
