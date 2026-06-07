# 유효성 검사 (Validation)

IBSheet8은 편집 중, 편집 완료 시, 저장 시 세 단계에 걸쳐 유효성 검사를 지원합니다.

---

## 1. 편집 중 유효성 검사 - EditMask

셀 편집 중 입력 가능한 문자를 자바스크립트 정규식으로 제한합니다. 정규식에 맞지 않는 글자는 입력 자체가 되지 않습니다.

내부적으로 `"입력값".search(EditMask) >= 0` 판정을 사용하며, `true`이면 입력 허용, `false`이면 입력 제한됩니다.

### 컬럼 레벨 설정

```javascript
options.Cols = [
  // 숫자만 입력 가능
  { Type: "Text", Name: "code", EditMask: "^\\d*$", Width: 100 },
  // 알파벳만 입력 가능
  { Type: "Text", Name: "engName", EditMask: "^\\w*$", Width: 120 },
  // 띄어쓰기를 제외한 모든 글자 입력 가능
  { Type: "Text", Name: "noSpace", EditMask: "^\\S*$", Width: 120 },
  // 최대 10자리 숫자만 가능
  { Type: "Text", Name: "shortNum", EditMask: "^\\d{0,10}$", Width: 100 }
];
```

### ⚠️ Nexacro `editinputtype="digit"` → `EditMask` (`InputCharFilter` 는 IBSheet 미지원)

XFDL `<Cell ... edittype="text" editinputtype="digit"/>` (숫자만 입력) 변환 시 `EditMask: "^\\d*$"` 를 쓴다. **`InputCharFilter` 속성은 IBSheet8 에 존재하지 않음** — 빌드/런타임 에러 없이 **silent 무효**(아무 문자나 입력됨) 가 되니 절대 사용 금지.

```javascript
// ❌ InputCharFilter — IBSheet 미지원, 무시됨 → 숫자 제한 미동작
{ Name: 'srchSeq', Type: 'Text', CanEdit: 1, InputCharFilter: '0-9' }
// ✅ EditMask
{ Name: 'srchSeq', Type: 'Text', CanEdit: 1, EditMask: '^\\d*$' }
```

회귀 사례: UIDI0640/0680 균정보 — `editinputtype="digit"` 조회순서 컬럼이 `InputCharFilter:'0-9'` 로 변환돼 숫자 제한 미동작. `EditMask` 로 교체.

### 셀 레벨 설정

특정 셀에만 EditMask를 적용하거나 조회 데이터에서 셀별로 다르게 지정할 수 있습니다.

```javascript
// 1. setAttribute로 특정 셀에 적용
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "EditMask", "^\\S*$");

// 2. 데이터 로우 객체에 직접 설정
var row = sheet.getRowById("AR10");
row["CLSEditMask"] = "^\\w*$";
sheet.refreshCell({ row: row, col: "CLS" });

// 3. 조회 데이터에서 셀별 지정
{
  data: [
    { "CLSEditMask": "^\\d{0,10}$" }
  ]
}
```

---

## 2. 편집 완료 시 유효성 검사 - ResultMask

셀 편집 종료 시 입력된 값 전체를 정규식으로 검사합니다. EditMask가 글자 입력 시점에서 제한하는 것과 달리, ResultMask는 편집 완료 시점에 최종 값을 검증합니다.

### 기본 사용법

```javascript
options.Cols = [
  // 이메일 검증 - alert 메시지 표시
  {
    Type: "Text",
    Name: "email",
    ResultMask: "^[\\w\\.\\+%-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,6}$",
    ResultText: "이메일 주소를 확인해 주세요.",
    Width: 200
  },
  // 이메일 검증 - DIV 레이어 팝업 메시지 표시
  {
    Type: "Text",
    Name: "email2",
    ResultMask: "^[\\w\\.\\+%-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,6}$",
    ResultMessage: "이메일 주소를 확인해 주세요.",
    ResultMessageTime: 800,
    Width: 200
  },
  // 아이디 검증 - 6~10자 영문
  {
    Type: "Text",
    Name: "userId",
    ResultMask: "^(([A-Z]|[a-z]){6,10})$",
    ResultText: "아이디는 6~10글자 이내의 영문자로 작성해주세요.",
    Width: 150
  }
];
```

### 검증 실패 메시지 옵션

| 속성 | 표시 방식 | 설명 |
|------|----------|------|
| `ResultText` | `alert()` 경고창 | 검증 실패 시 브라우저 alert 메시지 표시 |
| `ResultMessage` | DIV 레이어 팝업 | 검증 실패 시 시트 내부에 팝업 메시지 표시 |
| `ResultMessageTime` | - | ResultMessage 팝업의 표시 시간(ms) 설정 |

### onResultMask 이벤트

ResultMask 검증 실패 시 발생하는 이벤트로, 리턴값에 따라 후속 동작을 제어합니다.

| 리턴값 | 동작 |
|--------|------|
| `0` (기본값) | ResultText의 alert 메시지를 표시하고 편집 계속 |
| `1` | 경고 메시지 없이 편집 계속 |
| `2` | 값을 저장하지 않고 편집 종료 |
| `3` | 값을 셀에 저장하고 편집 종료 |
| `4` | 값을 셀에 저장하고 편집 종료 + 배경색을 빨간색으로 변경 |

```javascript
options.Events = {
  onResultMask: function(evtParam) {
    if (evtParam.col === "userId") {
      // 아이디 컬럼: alert 없이 편집 계속 진행
      return 1;
    }
    if (evtParam.col === "email") {
      // 이메일 컬럼: 잘못된 값을 저장하되 빨간 배경으로 마킹
      return 4;
    }
  }
};
```

### Error 셀 속성으로 검증 결과 확인

ResultMask 검증 실패 시 해당 셀의 `Error` 속성이 `1(true)`로 설정됩니다.

```javascript
var error = sheet.getAttribute(row, "email", "Error");
if (error) {
  // 이메일 셀에 잘못된 값이 입력되어 있음
}
```

---

## 3. 필수 입력 검사 - Required

컬럼에 `Required: 1`을 설정하면 저장 함수 호출 시 해당 컬럼의 빈 셀에 대해 경고 메시지를 표시하고 편집을 유도합니다.

```javascript
options.Cols = [
  { Type: "Text", Name: "name", Header: "이름", Required: 1 },
  { Type: "Int", Name: "salary", Header: "급여", Width: 70 }
];
```

`RequiredPosition` 옵션으로 헤더에 표시되는 필수 입력 마크의 위치를 조정할 수 있습니다.

---

## 4. 저장 시 유효성 검사

### ValidCheck (Cfg)

저장 함수(`doSave`, `getSaveJson`, `getSaveString`) 호출 시 유효성 검사를 수행하고, 실패한 셀을 마킹합니다. 유효성 검사 실패한 첫 셀에 포커스가 이동합니다.

검사 항목: `EditMask`, `ResultMask`, `Required`, `Size`

```javascript
// 기본 사용 - 검사 실패 셀에 Focus 이동 + 편집 상태
options.Cfg = {
  ValidCheck: true
};

// 상세 설정 - Focus만 이동, 편집 상태는 만들지 않음
options.Cfg = {
  ValidCheck: {
    Focus: 1,
    Edit: 0
  }
};

// 유효성 검사 실패 시 표시할 메시지 커스터마이징
options.Cfg = {
  ValidCheck: true,
  ValidateMessage: "입력값을 다시 확인해 주세요."
};
```

> **주의**: `ValidCheck`가 `false`(기본값)인 경우, 저장 함수 호출 시 `Required` 유효성 검사만 수행됩니다. `true` 또는 `object`로 설정해야 `EditMask`, `ResultMask`, `Size` 검사까지 수행됩니다.

### onValidation 이벤트

저장 함수 호출 시 셀별로 순회하며 발생하는 이벤트로, 업무 로직에 따른 커스텀 유효성 검사를 처리합니다. `true`를 리턴하면 저장을 중단합니다.

```javascript
options.Events = {
  onValidation: function(evtParam) {
    // 특정 컬럼만 검사
    if (evtParam.col !== "TextData") return;

    var prevCol = evtParam.sheet.getPrevCol(evtParam.col);

    // 이전 컬럼 값이 100 이상이면 저장 중단
    if (evtParam.sheet.getValue(evtParam.row, prevCol) >= 100) {
      var index = evtParam.sheet.getRowIndex(evtParam.row);

      evtParam.sheet.showMessageTime({
        message: index + "행 정수(Int)컬럼 셀 값이 100보다 큽니다.",
        time: 10000,
        buttons: ["OK", "취소"]
      });

      return true; // 저장 중단
    }
  }
};
```

---

## 종합 예제

EditMask, ResultMask, Required, ValidCheck, onValidation을 함께 적용하는 예제입니다.

```javascript
var options = {
  Cfg: {
    ValidCheck: true,
    ValidateMessage: "입력값을 확인해 주세요."
  },
  Cols: [
    {
      Header: "이름", Name: "name", Type: "Text",
      Required: 1,
      Width: 100
    },
    {
      Header: "코드", Name: "code", Type: "Text",
      EditMask: "^[A-Za-z0-9]*$",       // 편집 중: 영문+숫자만 입력 가능
      ResultMask: "^[A-Z]{2}\\d{4}$",   // 편집 완료 시: "AB1234" 형식 검증
      ResultText: "코드는 영문 대문자 2자리 + 숫자 4자리 형식입니다.",
      Width: 120
    },
    {
      Header: "이메일", Name: "email", Type: "Text",
      ResultMask: "^[\\w\\.\\+%-]+@[A-Za-z0-9\\.-]+\\.[A-Za-z]{2,6}$",
      ResultMessage: "올바른 이메일 주소를 입력해 주세요.",
      ResultMessageTime: 1000,
      Width: 200
    },
    {
      Header: "수량", Name: "quantity", Type: "Int",
      Required: 1,
      Width: 80
    }
  ],
  Events: {
    onResultMask: function(evtParam) {
      if (evtParam.col === "email") {
        // 이메일: 잘못된 값도 저장하되 빨간 배경으로 표시
        return 4;
      }
      // 나머지: 기본 동작(alert 표시 후 편집 계속)
    },
    onValidation: function(evtParam) {
      // 수량이 0 이하면 저장 중단
      if (evtParam.col === "quantity") {
        var val = evtParam.sheet.getValue(evtParam.row, evtParam.col);
        if (val <= 0) {
          evtParam.sheet.showMessageTime({
            message: "수량은 1 이상이어야 합니다.",
            time: 5000
          });
          return true;
        }
      }
    }
  }
};
```

---

## 유효성 검사 흐름 요약

| 단계 | 시점 | 속성/이벤트 | 동작 |
|------|------|-------------|------|
| 편집 중 | 글자 입력 시 | `EditMask` (col/cell) | 정규식에 맞지 않는 글자 입력 차단 |
| 편집 완료 | 셀 편집 종료 시 | `ResultMask` + `ResultText`/`ResultMessage` | 최종 값 정규식 검증, 실패 시 메시지 표시 |
| 편집 완료 | ResultMask 실패 시 | `onResultMask` 이벤트 | 리턴값으로 후속 동작 제어 (0~4) |
| 저장 | 저장 함수 호출 시 | `Required` | 빈 값 검사 |
| 저장 | 저장 함수 호출 시 | `ValidCheck` (cfg) | EditMask/ResultMask/Required/Size 종합 검사 |
| 저장 | 저장 함수 호출 시 | `onValidation` 이벤트 | 커스텀 업무 로직 검증, true 리턴 시 저장 중단 |
