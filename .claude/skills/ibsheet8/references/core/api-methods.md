# API 메서드 레퍼런스

## 기본 규칙
1. 모든 메서드의 arguments는 object로 사용할 수도 있음
```javascript
const row = mySheet.copyRow( mySheet.getFocusedRow(), mySheet.getFirstRow() );
const row = mySheet.copyRow({row: mySheet.getFocusedRow(), next: mySheet.getFirstRow() });
```
2. IBSheet8의 생성시 sync 옵션을 설정하지 않으면 기본적으로 비동기로 생성되며, 생성 후에 onRenderFirstFinish event가 발생함
3. IBSheet8의 api에서 boolean 값은 true/false 대신 1/0 으로 설정
4. setValue, setAttribute 에는 render 속성을 통해 수정값을 즉시 반영할지 여부를 선택할 수 있음
5. [전체 api 리스트](../ibsheet-official-manual/funcs/index.md)
---
## 시트 생성/제거

```javascript
const sheet = IBSheet.create({
  id: "sheetId",
  el: "containerId",
  options: { Cfg: {}, Cols: [], Events: {} },
  data: [], // 생략가능
  sync: 1 // 생략가능(default: 0)
});

IBSheet.dispose("sheet"); //dom 영역과 공통 변수등 javascript객체도 제거
```
## 시트 접근

```javascript
const sheet = window["sheetId"]; // IBSheet.create로 생성시 window객체 안에 지정한 id값으로 담김
```
---

## 데이터 로드

### 로컬 데이터 로드
[loadSearchData](../ibsheet-official-manual/funcs/core/load-search-data)
```javascript
// 로컬 데이터
sheet.loadSearchData({ 
  data: jsonArray,
  sync: 1, //sync 여부(default: 0) 
  append: 1, //기존데이터 하단에 추가여부 (default: 0)
});
```

### 서버 데이터 로드 
[doSearch](../ibsheet-official-manual/funcs/core/do-search)
```javascript
// 서버 데이터
sheet.doSearch({
  url: "/api/list",
  method: "POST",
  param: "name=홍길동&saNo=3245" // 또는  { "name": "홍길동", "saNo": 3245 }
  reqHeader: {"Content-Type":"application/json", ...} // request header에 추가할 내용
});

```
### 전체 데이터 제거

```javascript
sheet.removeAll();
```

---

## 데이터 추출

### 데이터를 object 로 추출({"data": jsonArray} 구조)
[getSaveJson](../ibsheet-official-manual/funcs/core/get-save-json)
```javascript
const changedData = sheet.getSaveJson(); // 상태가 변한(Added,Changed,Deleted) 행들만 추출
const checkedData = sheet.getSaveJson({ col: "checkColName" }); // checkColName 열에 값이 true 인 데이터만 추출
const allRows = sheet.getSaveJson({ saveMode: 0 }); // 모든 데이터 추출 (0:전체, 1:전체(Deleted만 제외), 2:Added,Changed,Deleted(default))
```

**반환 형식:**
```javascript
{ data: [{ "STATUS": "Added", id: 행id, colName1: "값1", colName2: "값2".. }, ...] }
```

### 데이터를 querystring 으로 추출

```javascript
const changedData = sheet.getSaveString(); // 상태가 변한(Added,Changed,Deleted) 행들을 querystring 형태로 추출
```

**반환 형식:**
```javascript
"STATUS=Changed&colName1=값1&colName2=값2"
```

### 행 데이터 추출

```javascript
const rowData = sheet.getRowValue(row); // object 형식으로 추출 {"EMPNO":1234,"EMPNAME":'chris'...}
```

---

## 데이터 저장

### ibsheet8를 통한 ajax 통신 및 저장
- doSave는 데이터 수집:getSaveJson(또는 getSaveString) -> 전송:ajax -> 결과반영:applySaveResult(내부에 acceptChangedData) 가 순차적으로 동작하기 때문에 개별적으로 데이터를 수집하거나 결과를 반영하는 함수를 호출할 필요가 없음.

[doSave](../ibsheet-official-manual/funcs/core/do-save)
```javascript
sheet.doSave({
  url: "/api/save",
  param: "name=홍길동&saNo=3245", // 함께 서버로 전송할 파라미터 (object도 가능 {"name":"홍길동",...})
  saveMode: 2, //수정된 데이터만 전달
  queryMode: 1, // json or querystring 선택
  quest: 1 // 저장 전에 confirm 생성
});
```

### 외부 라이브러리를 통한 저장

```javascript
const param = sheet.getSaveString(); //변경된 데이터 추출
$.ajax({
  url: '/api/save',
  method: 'post',
  data: param,
  success: function(data, status, xhr) {
    const io = data?.IO;
    if( io ) {
      // 저장 결과 반영
      sheet.applySaveResult(io.Result, io.Message, xhr.response);
    }
  }
});
```
---

## 행 객체 얻기

```javascript
const allRows = sheet.getDataRows(); // 전체 데이터행 배열을 얻음. clone된게 아니기 때문에 배열에 내용을 추가하거나 삭제하면 안됨.
const count = sheet.getDataRows().length; 
const headRow = sheet.getRowById("Header"); // 해더행 객체 (헤더행이 2개 이상인 경우에는 Header, HR1, HR2, HR3 ... )
const sumRow = sheet.getRowById("FormulaRow"); // 합계행(FormulaRow) 객체
const row10th = sheet.getRowByIndex(10); // 10번째 데이터 행 객체
const row11th = sheet.getNextRow(row10th); 
const row9th = sheet.getPrevRow(row10th); 
const firstRow = sheet.getFirstRow(); 
const lastRow = sheet.getLastRow();
const focusedRow = sheet.getFocusedRow();
const addedRows = sheet.getRowsByStatus("Added"); // 추가된 행들을  얻음(배열)
const checkedRows = sheet.getRowsByChecked("CHK"); // 'CHK'열에 체크된 행들을 얻음(배열)
const focusedRowIndex = sheet.getRowIndex( row10th ); // 10 
```
---

## 행 조작

### 행 추가

```javascript
const newRow = sheet.addRow();//마지막 행에 추가
const newRow = sheet.addRow({next: row, init: { colName1: "한국", colName3: "A" } });// row행 위에 신규행 추가
```

### 행 삭제

```javascript
sheet.removeRow(row); // 행객체에서 해당 행이 제거되고, DOM도 제거됨
```

### 행 상태를 Deleted로 변경(실제 삭제되진 않음)

```javascript
sheet.deleteRow(row, 1); // 두번째 인자(0:삭제취소, 1:삭제). 행에 Deleted:1 이 추가됨.
```

### 행 이동/복사
```javascript
sheet.moveRow(row, targetRow) // targetRow 행 위로 row 행 이동

sheet.copyRow(row, targetRow) // targetRow 행 위로 row 와 동일한 값을 갖는 행 추가
```




---

## 셀 값 조작

```javascript
const value = sheet.getValue(row, "colName"); // 포맷팅이 제거된 실제 값
sheet.setValue(row, "colName", "새 값");
sheet.setValue({row: row, col: "colName", val: "새 값", render: 0 });// 렌더:0 설정시 실제 화면에 렌더링하지 않고, 렌더함수 호출시에 화면에 반영됨.
const text = sheet.getString(row, "colName");  // 포맷팅된 값
```

⚠️ **함정 — `setValue(row, col, val, 0)` 4번째 인자는 `render` 플래그이지 `suppressEvent` 가 아니다**

positional 4번째 인자를 OnChange 발화 억제(suppressEvent) 의도로 `0` 으로 보내면 **render=0 이라 DOM 갱신이 생략**되어, 일괄적용/체크박스 자동 토글 같은 다건 setValue 가 내부 데이터에는 반영되지만 **화면에는 안 보이는 회귀** 가 발생한다. 콘솔 에러도 없고 `getValue` 로 읽으면 새 값이라 디버깅 어려움.

```javascript
// ❌ "OnChange 미발화" 의도로 0 — 실제는 render=0 (DOM 미반영, getValue 만 갱신)
sheet.setValue(row, 'entsRqstDt', '20250420', 0)

// ✅ render=1 — 즉시 DOM 반영 (기본 동작과 동일)
sheet.setValue(row, 'entsRqstDt', '20250420', 1)

// ✅ 다건 처리 시 매 행 render=0 후 마지막에 rerender()/renderBody() 1회 — 성능 최적
for (const r of rows) sheet.setValue(r, 'entsRqstDt', val, 0)
sheet.renderBody()
```

회귀 사례: UILM5021M00 일괄적용 버튼 — `setValue(r, 'entsRqstDt', bndeAplyDate, 0)` 로 N행 변경했는데 화면에 변경 안 보이는 버그. 4번째 인자를 `1` 로 교체 후 정상 반영.

OnChange 발화 억제가 필요하면 **별도 가드 ref** (`skipOnChangeRef`) 를 OnChange 핸들러 초입에서 체크하는 방식이 정답. 4번째 인자는 OnChange 와 무관.

---

## 포커스/선택

```javascript
const frow = sheet.getFocusedRow(); 
const fcol = sheet.getFocusedCol()
sheet.focus(row, "colName") // 포커스 이동
sheet.blur() // 포커스 해제

const selRangeArr = sheet.getSelectedRanges(); 
const selRows = sheet.getSelectedRows();
sheet.selectAllRows(); // 전체 행 선택
sheet.clearSelection();
sheet.selectRange(startRow, startCol, endRow, endCol, 1); // 특정 영역 선택
```

---

## 체크박스

```javascript
sheet.setCheck(row, "checkColName", 1); //check
sheet.setCheck(row, "checkColName", 0); //uncheck
sheet.setCheck(row, "checkColName", null);// toggle check
const checkedRows = sheet.getRowsByChecked("checkColName");
sheet.setAllCheck("checkColName");
```

---

## 컬럼 조작

```javascript
const colNames = sheet.getCols(); // 전체 컬럼명 배열 ["SEQ", "EMPNO", "EMPNAME"... ]
const firstCol = sheet.getFirstCol();
const lastCol = sheet.getLastCol();
sheet.showCol("colName");
sheet.hideCol("colName");
sheet.setAttribute(null, "colName", "CanEdit", 0); // 열 조작시 row 값을 null로 설정
sheet.setAttribute(null, "colName", "CanSort", 1);
const colWidth = sheet.getAttribute(null, "colName", "Width");
const colType = sheet.getAttribute(null, "colName", "Type");
```

---

## 정렬/필터
[doFilter](../ibsheet-official-manual/funcs/core/do-filter)
```javascript
sheet.doSort("colName1,-colName2"); //colName앞에 -가 있을시 DESC 정렬
sheet.clearSort();

sheet.showFilterRow(); // 필터행 생성

if(sheet.getRowById("Filter").Visible) {
  sheet.doFilter({cols: "|colName1|colName2", vals: "|총무|3500", operators: "|1|5" }); // 반드시 Filter 행이 있는 경우에만 사용가능
}
sheet.clearFilter();
sheet.hideFilterRow();
```

---

## 검색

```javascript
const firstFoundRow = sheet.findText("colName", "찾을 글자");
```

---

## 스타일

```javascript
sheet.setAttribute( row, null, "Color", "#FF0000"); //행 색상 변경
sheet.setAttribute( row, null, "TextFont", "Times New Roman"); //행 font family 설정
sheet.setAttribute( null, "colName", "TextStyle", 1 ); //열 글자 Bold 설정
sheet.setAttribute( null, "colName", "TextSize", "27px" ); //열 글자 크기 설정
sheet.setAttribute( null, "colName", "Class", "grid-warning" ); //열에 .grid-warning class 설정
sheet.setAttribute( row, "colName", "TextColor", "#0000FF"); //셀 글자색 변경
```

---

## 렌더 함수

```javascript
sheet.refreshCell(row, "colName"); //셀 렌더링
sheet.refreshRow(row); //행 렌더링
sheet.renderBody(); //데이터 영역 렌더링
sheet.rerender(); //전체 영역 렌더링
```

---

## 내보내기
[exportData](../ibsheet-official-manual/funcs/core/export-data)
```javascript
sheet.exportData({fileName: "데이터목록.xlsx", sheetName: "Sheet1", downRows: "Visible", downCols: "Visible", sheetDesign: 1});
```

---

## 병합
[setAutoMerge](../ibsheet-official-manual/funcs/core/set-auto-merge)
```javascript
sheet.setAutoMerge(0, 3); // 인접한 셀 기준 자동 병합
sheet.setAutoMergeCancel();

sheet.setMergeRange(startRow, "colName1", endRow, "colName4"); // 특정 영역 강제 머지 (SearchMode:0에서는 사용 불가)
```

---

## 트리
```javascript
sheet.showTreeLevel(3, 0, 1); //3 level까지 펼침
sheet.setExpandRow(sheet.getFocusedRow(), null, 0); //focus된 행을 접기
const isExpanded = sheet.getAttribute(row, null, "Expanded"); //행 펼침 여부 확인
```