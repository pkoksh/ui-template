# 이벤트 레퍼런스

## 이벤트 공통 주의사항
1. ibsheet8의 모든 이벤트는 object 형태의 파라미터 1개를 갖고 있습니다.
2. 일부 이벤트에는 return 값을 통해 이벤트 진행을 중단할 수 있는데, 중단이 필요한 경우에는 1(또는 true)를 리턴해야 중단됩니다.
3. [전체 이벤트 리스트](../ibsheet-official-manual/events/index.md)
4. IBSheet8의 이벤트 이름은 **"Start↔Finish"** 또는 **"Before↔After"** 쌍을 사용합니다. **"Start↔End" 패턴은 사용하지 않습니다.**
   - `onSearchStart` ↔ `onSearchFinish` (O) — `onSearchEnd`는 존재하지 않음 (X)
   - `onRenderStart` ↔ `onRenderFinish` (O)
   - `onBeforeSort` ↔ `onAfterSort` (O)

## 이벤트 등록

```javascript
// 생성 시 등록
IBSheet.create({
  options: {
    Events: {
      onRenderFirstFinish: function(evt) { },
      onClick: function(evt) { }
    }
  }
});

// 동적 등록
sheet.bind("onClick", function(evt) { });
```
### bind를 통한 이벤트 등록시 주의 사항
1. 동일 이벤트에 대한 bind() 재호출은 기존 핸들러를 덮어씁니다.
2. 시트 생성시 호출되는 onRenderFirstFinish 이벤트는 bind로 등록할 수 없습니다.
3. 이벤트는 객체 생성 시점에 등록하는 것을 권장하며, 생성 이후 등록은 공통 이벤트 처리에 불리합니다.
---

## 라이프사이클 이벤트

### [onRenderFirstFinish](../ibsheet-official-manual/events/on-render-first-finish.md)

시트 최초 렌더링 완료.

```javascript
onRenderFirstFinish: function(evt) {
  evt.sheet.loadSearchData({ url: "/api/data/list" });
}
```

---

## 클릭/선택 이벤트

### [onClick](../ibsheet-official-manual/events/on-click.md)

- 마우스로 클릭시 발생. (포커스 이동 전에 발생)
- 클릭한 셀의 값을 얻고자 할때는 `evt.row[evt.col]`로 확인 가능
- 가급적 onClick 이벤트 보다는 onAfterClick을 사용할 것

```javascript
onClick: function(evt) {
  console.log(`포커스 된 셀을 다시 클릭했는지 여부 : ${evt.row == evt.sheet.getFocusedRow() }`);
}
```

### [onAfterClick](../ibsheet-official-manual/events/on-after-click.md)
- 마우스 클릭 시 포커스 이동, 체크/언체크(Bool,Radio) 후 발생

```javascript
onAfterClick: function(evt) {
  console.log(`${evt.sheet.getRowIndex(evt.row)}행 클릭!`);
}
```

onClick, onAfterClick 이벤트 파라미터 (두 이벤트 동일)

| 속성 | 설명 |
|------|------|
| evt.row | 행 객체 |
| evt.col | 컬럼명 |
| evt.x | 마우스 커서 x 좌표 |
| evt.y | 마우스 커서 y 좌표 |
| evt.event | javascript 마우스 이벤트 객체 |


### [onIconClick](../ibsheet-official-manual/events/on-icon-click.md)

- 셀 텍스트 좌측에 [Icon](../ibsheet-official-manual/props/col/icon.md)를 클릭시 onIconClick 이벤트 발생
- 두 이벤트 모두 CanEdit나 Disable 여부와 무관하게 발생함

```javascript
onIconClick: function(evt) {
  if(evt.col == "employee") showEmployeePopup(evt.sheet.getRowValue(evt.row));
}
```


### [onButtonClick](../ibsheet-official-manual/events/on-button-click.md)
- 셀 텍스트 우측의 [Button](../ibsheet-official-manual/props/col/button.md)를 클릭시 onButtonClick 이벤트 발생
```javascript
onButtonClick: function(evt) {
  console.log(`${evt.sheet.getRowIndex(evt.row)}행의 팝업버튼이 클릭되었습니다.`);
}
``` 

---

## 편집 이벤트

### [onStartEdit](../ibsheet-official-manual/events/on-start-edit.md)

- 편집 시작시 발생하는 이벤트로 Bool,Radio 타입에서는 호출되지 않음

```javascript
onStartEdit: function(evt) {
  if (evt.sheet.getValue(evt.row, "status") === "완료") {
    return true;  // 편집 방지
  }
}
```

### [onEditEnd](../ibsheet-official-manual/events/on-end-edit.md)

- 편집 모드 종료시 발생하는 이벤트

```javascript
onEndEdit: function(evt) {
  if (evt.col == 'SCORE' && evt.val > 100) {
    alert('스코어는 100점을 초과해서 입력할 수 없습니다.');
    return true;  // 편집 방지
  }
}
```


### [onBeforeChange](../ibsheet-official-manual/events/on-before-change.md)

- 값 변경 전 이벤트. **return '값' 으로 저장될 데이터 변경 가능.**
- api(setValue)를 통한 변경에는 호출되지 않음
- 기존과 동일한 값으로 수정했을 때에도 호출됨.

```javascript
onBeforeChange: function(evt) {
  if (evt.col === "quantity" && evt.val < 0) {
    alert("음수 불가");
    return evt.oldval; // 이전 값으로 되돌림
  }
  // 값 변환
  if (evt.col === "code") {
    return evt.val.toUpperCase();
  }
}
```

| 속성 | 설명 |
|------|------|
| evt.row | 행 객체 |
| evt.col | 열 이름 |
| evt.val | 수정된 값 |
| evt.oldval | 변경 전 값 |

### [onAfterChange](../ibsheet-official-manual/events/on-after-change.md)

- 값 변경 후. 연관 필드 계산에 사용.
- api(setValue)를 통한 변경에는 호출되지 않음
- 기존과 동일한 값으로 수정했을 때에는 호출되지 않음

```javascript
onAfterChange: function(evt) {
  if (evt.col === "quantity" || evt.col === "price") {
    const total = evt.sheet.getValue(evt.row, "quantity") * evt.sheet.getValue(evt.row, "price");
    evt.sheet.setValue(evt.row, "total", total);
  }
}
```

⚠️ **함정 — Bool 컬럼 단일선택 로직은 `onClick` 이 아니라 `onAfterChange` 로**

원본 Nexacro 의 `oncellclick` 은 **셀 값이 토글된 후** 실행 — `getColumn(row, "cntcMbyYn") === "Y"` 로 토글된 값 검사 가능.

IBSheet8 의 `onClick` 은 **Bool 토글 전 시점** — `getValue(row, "cntcMbyYn")` 가 이전 값(아직 토글 안 됨) 이라 `if (newVal === 'Y')` 분기 보장 X.

```javascript
// ❌ Bool 단일선택 — onClick 사용 시 newVal 보장 X
onClick: (evt) => {
  if (evt.col === "cntcMbyYn") {
    const v = evt.sheet.getValue(evt.row, "cntcMbyYn")
    if (v !== "Y") return  // ← 토글 전 값이라 잘못된 분기
    // ... 다른 행 'N' 셋팅
  }
}

// ✅ onAfterChange — 토글 후 값으로 정확 분기
onAfterChange: (evt) => {
  if (evt.col === "cntcMbyYn" && evt.row) {
    const v = evt.sheet.getValue(evt.row, "cntcMbyYn")  // 토글된 값 'Y'
    if (v === "Y") {
      // 다른 행 모두 'N' 셋팅 (단일선택)
      evt.sheet.getDataRows().forEach(r => {
        if (r !== evt.row && evt.sheet.getValue(r, "cntcMbyYn") === "Y") {
          evt.sheet.setValue(r, "cntcMbyYn", "N")
        }
      })
    }
  }
}
```

**Why**: Nexacro `oncellclick` ≠ IBSheet `onClick` (시점 차이). 단일선택/Master 행 표시 등 토글 후 값 의존 로직은 `onAfterChange`.

**검증 사례**: UISL0021T02 의 `cntcMbyYn`(주 연락) / `majrTrstInstYn`(메인) 단일선택. 사용자가 첫 클릭 시 동작 안 함 보고 → onClick → onAfterChange 변경 후 정상.

🚨 **함정(CRITICAL) — `Type:'Bool'` 의 이벤트 `evt.val`/`evt.oldval` 은 내부값 `1/0` (TrueValue/FalseValue 아님)**

`TrueValue:'Y'`/`FalseValue:'N'` 의 'Y'/'N' 은 **서버 직렬화(loadSearchData 입력 / getSaveJson·저장 출력) 시에만** 적용되고, 이벤트의 `evt.val`/`evt.oldval` (그리고 `getValue`/`setValue`) 는 **내부값 `1/0`** 으로 동작한다. 위 `=== "Y"` 비교 예시도 환경/버전 의존이라 단정 금지. → `onBeforeChange`/`onAfterChange` 의 checked 분기는 `evt.val === 1 || evt.val === '1' || evt.val === true` 로 (방어적 `'Y'` 포함). `String(evt.val) === 'Y'` 는 `evt.val` 이 `1` 이라 **영원히 false** → veto/분기 무력화.

> `getValue` 의 raw 1/0 반환 + 서버 송신용 **`Y/N 정규화 헬퍼`** 는 `column-type-property.md` 의 "Bool (체크박스)" 섹션이 canonical (중복 정의 금지 — 송신 시 반드시 정규화).

**onBeforeChange veto (Nexacro `cancolumnchange` 등가)** — 체크 시도 차단, 해제만 허용:
```javascript
onBeforeChange: (evt) => {
  if (evt.col !== 'optnYn') return
  const isChecking = evt.val === 1 || evt.val === '1' || evt.val === true || evt.val === 'Y'
  if (isChecking) { alert('체크 해제만 가능합니다.'); return String(evt.oldval ?? 0) }  // 이전값 유지=취소
}
```

> `onBeforeChange` 는 **사용자 입력에만 발화**(`setValue`/`loadSearchData` 등 프로그램 변경엔 미발화) → 서버 cascade 로 `loadSearchData` 해 체크값이 들어와도 veto 가 오발화하지 않는다. 리턴 타입은 `string | void` (취소 시 `String(oldval)` 리턴 = 이전값 유지).

**검증 사례**: UILM2405M00 그룹등록 — 검사 체크 → 접수 자동체크(서버 LM2405M00-10 재계산) / 접수 직접체크 차단. `String(evt.val)==='Y'` 가 1/0 때문에 무력화돼 "전혀 동작 안 함" → 1/0 판정으로 정상화.

### [onBeforePaste](../ibsheet-official-manual/events/on-before-paste.md)

- ctrl+v를 통해 붙여넣기 전에 발생
- 파라미터 값을 수정하면 수정된 값이 붙여넣어짐


```javascript
onBeforePaste:function(evtParam){
  var pasteArr = evtParam.pastedtext;
    for(var i = 0; i < pasteArr.length; i++){
      //붙여넣어질 내용에 주민등록번호 패턴[######-#######]이 있으면 뒤에 6자리를 '*'로 변경
      pasteArr[i] = pasteArr[i].replace(/([0-9]{6}\-[0-9]{1})[0-9]{6}/g, "$1"+"******");
      // 붙여 넣어질 내용 중에 SN- 로 시작하는 단어가 있는 경우 붙여넣기 중단.
      if(pasteArr[i].startsWith("SN-")) return true;
    }
    
}
```
|속성|유형|설명|
|---|---|---|
|cols|array[string]|붙여넣기가 이루어질 colName 배열(수정가능)|
|pastedtext|array[string]|각 행에 붙여넣어질 내용(수정가능)|
---

## 행 조작 이벤트

### [onAddRow](../ibsheet-official-manual/funcs/core/add-row.md)

- addRow 함수를 통해 새로운 행이 추가되어 렌더링 되기 전에 호출
- 이벤트 내에서 행에 초기값을 설정할 수 있음.

```javascript
onAddRow: function(evt) {
  // 위 행의 C-CODE 값과 동일한 값을 초기값으로 설정
  evt.row["C-CODE"] = evt.sheet.getPrevRow(evt.row)["C-CODE"];
}
```
### [onBeforeRowDelete](../ibsheet-official-manual/events/on-before-row-delete.md)

deleteRow(또는 deleteRows)를 이용해서 행의 상태를 삭제(Deleted:1)로 변경하거나 상태가 삭제인 행을 삭제 취소할 때 호출

```javascript
onBeforeRowDelete: function(evt) {
  if(evt.type === 0){
    if (evt.sheet.getValue(evt.row, "status") === "승인") {
      alert("승인된 항목은 삭제 불가");
      return true;
    }
    return !confirm("삭제하시겠습니까?");
  }
}
```
| 속성 | 설명 |
|------|------|
| evt.row | 삭제 행 객체 |
| evt.type | 삭제 여부 (0:삭제,1:삭제취소) |
| evt.rows | deleteRows 함수로 여러행을 삭제처리시 행 객체 배열 |

---

## 정렬/필터 이벤트

### [onBeforeSort](../ibsheet-official-manual/events/on-before-sort.md)
사용자가 헤더셀을 클릭하여 소팅시 호출되는 이벤트 
-1 리턴시 소팅 취소, 1 리턴시 헤더 소팅 아이콘만 변경되고 실제 소팅은 이루어지지 않음.

```javascript
onBeforeSort: function(evt) {
  if (evt.sheet.hasChangedData()) {
    alert("변경 데이터를 먼저 저장하세요");
    return -1;
  }
}
```
| 속성 | 설명 |
|------|------|
| evt.col | 소팅 열 이름 |
| evt.sort | 여러개 열에 대한 소팅 내역 (ex: "colName4, -colName2, colName6")<br>(열이름과 열이름 사이에 ","문자로 구분 된 문자열, 내림차순(descending) 소팅인 경우 열이름 앞에 "-" 가 붙음) |

### [onAfterSort](../ibsheet-official-manual/events/on-after-sort.md)
소팅이 이루어진 후 호출되는 이벤트

### [onBeforeFilter](../ibsheet-official-manual/events/on-before-filter.md)
필터링 전 호출. 1(true) 리턴시 필터링 취소.

### [onAfterFilter](../ibsheet-official-manual/events/on-after-filter.md)
필터링 완료 후 호출되는 이벤트

---

## 키보드 이벤트

### [onKeyDown](../ibsheet-official-manual/events/on-key-down.md)
포커스된 시트에서 키를 눌렀을 때 호출. 1(true) 리턴시 키의 기본 동작 무시.

```javascript
onKeyDown: function(evt) {
  // Ctrl+S: 저장
  if (evt.ctrlKey && evt.keyCode === 83) {
    evt.event.preventDefault();
    saveData();
  }
  // Ctrl+N: 행 추가
  if (evt.ctrlKey && evt.keyCode === 78) {
    evt.sheet.addRow();
  }
}
```

---

## 서버 통신 이벤트

### 데이터 조회 이벤트 흐름

`onSearchStart → onReceiveData → onBeforeDataLoad → onDataLoad → onSearchFinish`

| 이벤트 | 시점 | 주요 용도 |
|--------|------|-----------|
| onSearchStart | 조회 시작 전 | 로딩 표시, 조회 취소 (return true) |
| onReceiveData | 서버 응답 수신 직후 | 원본 데이터 가공 |
| onBeforeDataLoad | 데이터 파싱 후, 시트 로드 전 | 로드될 데이터 수정 (evt.data) |
| onDataLoad | 시트에 데이터 로드 완료 | 행 객체 접근, makeSubTotal 호출 |
| onSearchFinish | 화면 렌더링 완료 | 로딩 제거, 건수 표시 |

### [onSearchFinish](../ibsheet-official-manual/events/on-search-finish.md)

데이터 로드 완료. (xlsx import 후에도 발생)

```javascript
onSearchFinish: function(evt) {
  console.log(`${evt.sheet.getDataRows().length}건 로드됨`);
}
```

### [onBeforeDataLoad](../ibsheet-official-manual/events/on-before-data-load.md)
loadSearchData, doSearch, doSarchPaging 함수를 통해 데이터가 시트에 로드되기 전 호출. evt.data 파라미터로 로딩 될 데이터 변경 가능.

```javascript
onBeforeDataLoad: function(evt) {
  showLoading();
  //첫번째 행의 배경색을 파란색으로 변경
  evt.data[0]["Color"] = "#0000FF";
}
```

### [onBeforeSave](../ibsheet-official-manual/events/on-before-save.md)
doSave 호출시 데이터 전송 전 호출. 1(true) 리턴시 저장 중단.

```javascript
onBeforeSave: function(evt) {
  // 서버에 보낼 데이터가 금지어1 또는 금지어2를 포함된 경우 저장 중단
  if (source.params.indexOf("금지어1") > -1 || source.params.indexOf("금지어2") > -1) {
      return true;
  }
  
}
```
|속성|설명|
|---|---|
|evt.source.params|서버에 전송할 데이터. querystring 문자열 (doSave 사용시 queryMode: 1, 2 에서 사용가능)|
|evt.source.data|서버에 전송할 데이터. json 문자열 (doSave 사용시 queryMode: 0 에서 사용가능)|

### [onAfterSave](../ibsheet-official-manual/events/on-after-save.md)
서버 저장 응답 수신 후 호출. evt.result로 성공/실패 판별.

```javascript
onAfterSave: function(evt) {
  hideLoading();
  if (evt.result< 0 ) {
    evt.sheet.acceptChangedData();
    alert("저장 완료");
  }
}
```
|속성|설명|
|---|---|
|result| 처리결과 (0 이상: 저장 성공, 0 미만: 저장 실패)|
|message|서버에서 받은 메세지|
|response|서버 응답 객체|
---

## 체크박스 이벤트

### [onBeforeCheckAll](../ibsheet-official-manual/events/on-before-check-all.md)
- 사용자가 헤더 체크를 클릭하거나 setAllCheck 함수를 통해 열전체 체크/언체크가 발생할 때 호출.
- 다른 이벤트와 달리 이 이벤트만 return false일때 중단됨.

```javascript
onBeforeCheckAll: function(evt) {
  if(document.querySelector("#code").value == "F") {
    return false;  //체크 중단
  }
}
```

### [onCheckAllFinish](../ibsheet-official-manual/events/on-check-all-finish.md)
전체 선택/해제 완료 시 호출.

---

## 포커스/스크롤 이벤트

### [onBeforeFocus](../ibsheet-official-manual/events/on-before-focus.md)
셀 포커스 이동 전 호출. 1(true) 리턴시 포커스 이동 방지.

### [onFocus](../ibsheet-official-manual/events/on-focus.md)
셀 포커스 완료 후 호출.

### [onScroll](../ibsheet-official-manual/events/on-scroll.md)
시트 스크롤(가로/세로) 이동 후 호출. 

### [ononVScrollEndPoint](../ibsheet-official-manual/events/on-v-scroll-end-point.md)
세로 스크롤바가 최상단이나 하단에 도착할때 발생

```javascript
onVScrollEndPoint: function(evt) {
  // 기존 데이터 아래에 append
  if (evt.vpos > 0) {
    loadMoreData();
  }
}
```
