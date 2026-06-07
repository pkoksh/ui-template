---
KEY: INDEX
KIND: index
PATH: index
---

# IBSheet8 매뉴얼 인덱스

이 문서는 IBSheet8 매뉴얼의 전체 파일 목록입니다.

총 **1102**개의 문서가 포함되어 있습니다.

## 목차

- [가이드 (Guide)](#guide) (17개)
- [메서드 (Methods)](#method) (285개)
- [이벤트 (Events)](#event) (120개)
- [설정 속성 (Config Properties)](#config-property) (262개)
- [컬럼 속성 (Column Properties)](#column-property) (167개)
- [행 속성 (Row Properties)](#row-property) (54개)
- [셀 속성 (Cell Properties)](#cell-property) (115개)
- [이벤트 속성 (Event Properties)](#event-property) (4개)
- [정적 멤버 (Static Members)](#static-member) (17개)
- [데이터 구조 (Data Structure)](#data-structure) (1개)
- [스타일 가이드 (Style Guide)](#style-guide) (12개)
- [부록 (Appendix)](#appendix) (30개)
- [index](#index) (18개)

---

## 가이드 (Guide) {#guide}

총 17개의 문서

| KEY | PATH | ALIAS |
|-----|------|-------|
| 1introduce | intro/1introduce | 시작하기 |
| basicStructure | start/basic-structure | 시트, 객체, 기본, 구조 |
| col | start/col | 열, 구조에, 대한, 이해, 시트를 |
| dragNdrop | userGuide/dragNdrop | 기능 |
| excel | userGuide/excel | 다양한, 기능 |
| feature | intro/feature | 제품의, 특징 |
| feature | userGuide/feature | 제품, 주요, 기능, 리스트 |
| files | intro/files | 파일, 구성 |
| filter | userGuide/filter | 필터링, 기능 |
| group | userGuide/group | 그룹핑, 기능 |
| header | userGuide/header | 헤더, 기능 |
| hint | userGuide/hint | 힌트, 및, 풍선, 도움말, 기능 |
| menu | userGuide/menu | 메뉴, 기능 |
| pivot | userGuide/pivot | 피벗, 기능 |
| quickStart | start/quick-start | - |
| row | start/row | 행, 구조에, 대한, 이해, 가로로 |
| search | userGuide/search | 찾기, 기능 |

## 메서드 (Methods) {#method}

총 285개의 문서

| KEY | PATH | ALIAS |
|-----|------|-------|
| acceptChangedData | funcs/core/accept-changed-data | sheet.acceptChangedData, acceptChangedData(), 시트, 내에, 변경된, 내용, 입력 |
| addCol | funcs/core/add-col | sheet.addCol, addCol(), 이미, 생성된, 시트에, 동적으로, 열을 |
| addFormula | funcs/core/add-formula | sheet.addFormula, addFormula(), 특정, 셀에, 포뮬러를, 추가합니다 |
| addRow | funcs/core/add-row | sheet.addRow, addRow(), 신규, 행을, 추가합니다 |
| addRows | funcs/core/add-rows | sheet.addRows, addRows(), 신규, 행을, 여러개, 추가합니다 |
| addSheet | funcs/core/add-sheet | sheet.addSheet, addSheet(), 스프레드, 시트에서, 신규, 탭을, 추가합니다 |
| ajax | funcs/core/ajax | sheet.ajax, ajax(), 통신을, 서버로부터, 데이터를, 받아옵니다 |
| applySaveResult | funcs/core/apply-save-result | sheet.applySaveResult, applySaveResult(), 시트의, 수정된, 내용을, 서버로, 전송했다가 |
| blur | funcs/core/blur | sheet.blur, blur(), 시트에, 포커스를, 해제합니다 |
| calculate | funcs/core/calculate | sheet.calculate, calculate(), 시트에, 설정된, 계산을, 따라, 실행합니다 |
| clear | funcs/core/clear | sheet.clear, clear(), 영역에서, 시트, 부분을, 제거합니다 |
| clearCurrentInfo | funcs/core/clear-current-info | sheet.clearCurrentInfo, clearCurrentInfo(), 저장된, 현재, 시트의, 정보를, 로컬 |
| clearCurrentStyle | funcs/core/clear-current-style | sheet.clearCurrentStyle, clearCurrentStyle(), 스타일, 행으로, 저장된, 현재, 시트의 |
| clearFilter | funcs/core/clear-filter | sheet.clearFilter, clearFilter(), 필터행의, 내용이, 초기화, 되고, 이전에 |
| clearPivotFilter | funcs/core/clear-pivot-filter | sheet.clearPivotFilter, clearPivotFilter(), 피벗, 필터가, 적용된, 경우, 필터행의 |
| clearPivotSheet | funcs/dialog/clear-pivot-sheet | sheet.clearPivotSheet, clearPivotSheet(), 피벗, 테이블을, 기존, 테이블로, 초기화 |
| clearRange | funcs/core/clear-range | sheet.clearRange, clearRange(), 시트, 내에, 특정, 영역의, 값을 |
| clearSelection | funcs/core/clear-selection | sheet.clearSelection, clearSelection(), 드래그나, 함수등을, 선택한, 영역에, 대해 |
| clearSort | funcs/core/clear-sort | sheet.clearSort, clearSort(), 헤더, 소팅을, 취소합니다 |
| closeDialog | funcs/core/close-dialog | sheet.closeDialog, closeDialog(), 시트가, 제공하는, 다이얼로그나, 닫습니다 |
| copyRow | funcs/core/copy-row | sheet.copyRow, copyRow(), 지정한, 행을, 특정, 위치로, 복사합니다 |
| copyRows | funcs/core/copy-rows | sheet.copyRows, copyRows(), 지정한, 행들을, 특정, 위치로, 복사합니다 |
| deleteCol | funcs/core/delete-col | sheet.deleteCol, deleteCol(), 지정한, 열의, 상태를, 삭제로, 변경 |
| deleteCols | funcs/core/delete-cols | sheet.deleteCols, deleteCols(), 지정한, 열들의, 상태를, 삭제, 변경 |
| deleteRow | funcs/core/delete-row | sheet.deleteRow, deleteRow(), 지정한, 행의, 상태를, 삭제로, 변경 |
| deleteRows | funcs/core/delete-rows | sheet.deleteRows, deleteRows(), 지정한, 행들의, 상태를, 삭제로, 변경 |
| deleteSheet | funcs/core/delete-sheet | sheet.deleteSheet, deleteSheet(), 스프레드, 시트에서, 탭을, 삭제합니다 |
| directDownToExcel | funcs/excel/direct-down-to-excel | sheet.directDownToExcel, directDownToExcel(), 시트에, 조회된, 데이터는, 무시하고, 헤더 |
| directLoadExcel | funcs/excel/direct-load-excel | sheet.directLoadExcel, directLoadExcel(), 사용자가, 선택한, 엑셀파일의, 내용을, 시트에 |
| disable | funcs/core/disable | sheet.disable, disable(), 시트를, 비활성화 |
| dispose | funcs/core/dispose | sheet.dispose, dispose(), 시트를, 메모리에서, 제거합니다 |
| doFilter | funcs/core/do-filter | sheet.doFilter, doFilter(), 주어진, 값을, 필터행에, 반영하고, 시트를 |
| doGroup | funcs/core/do-group | sheet.doGroup, doGroup(), 지정한, 열들을, 함수를, 그룹핑 |
| doPivotFilter | funcs/core/do-pivot-filter | sheet.doPivotFilter, doPivotFilter(), 주어진, 값을, 필터행에, 반영하여, 원본 |
| doPrint | funcs/core/do-print | sheet.doPrint, doPrint(), 시트의, 내용을, 원하는, 규격으로, 인쇄합니다 |
| doSave | funcs/core/do-save | sheet.doSave, doSave(), 시트에서, 변경된, 내용을, 추출하여, 서버로 |
| doSearch | funcs/core/do-search | sheet.doSearch, doSearch(), 통신을, 형식의, 데이터를, 가져와, 시트에 |
| doSearchPaging | funcs/core/do-search-paging | sheet.doSearchPaging, doSearchPaging(), 페이징, 조회, 사용하는, 시트에서만, 사용됩니다 |
| doSort | funcs/core/do-sort | sheet.doSort, doSort(), 지정한, 열들을, 함수를, 소팅 |
| downToExcel | funcs/excel/down-to-excel | sheet.downToExcel, downToExcel(), 시트의, 내용을, 엑셀, 파일로, 다운로드 |
| downToExcelBuffer | funcs/excel/down-to-excel-buffer | sheet.downToExcelBuffer, downToExcelBuffer(), 여러개의, 하나의, 엑셀파일에, 다운로드, 하고자 |
| downToHwpx | funcs/excel/down-to-hwpx | sheet.downToHwpx, downToHwpx(), 시트의, 내용을, 한글, 파일로, 다운로드 |
| downToHwpxBuffer | funcs/excel/down-to-hwpx-buffer | sheet.downToHwpxBuffer, downToHwpxBuffer(), 여러개의, 하나의, 한글파일에, 다운로드, 하고자 |
| downToPdf | funcs/excel/down-to-pdf | sheet.downToPdf, downToPdf(), 시트의, 내용을, 파일로, 다운로드 |
| downToText | funcs/excel/down-to-text | sheet.downToText, downToText(), 시트의, 내용을, 파일이나, 파일로, 내보내기 |
| enable | funcs/core/enable | sheet.enable, enable(), 비활성화, 시트를, 다시, 활성화, 시킵니다 |
| endEdit | funcs/core/end-edit | sheet.endEdit, endEdit(), 셀의, 편집을, 종료합니다 |
| exportData | funcs/core/export-data | sheet.exportData, exportData(), 시트의, 내용을, 엑셀, 파일로, 다운로드 |
| exportDataBuffer | funcs/core/export-data-buffer | sheet.exportDataBuffer, exportDataBuffer(), 여러개의, 하나의, 엑셀파일에, 다운로드, 하고자 |
| extractDataText | funcs/core/extract-data-text | sheet.extractDataText, extractDataText(), 시트의, 헤더를, 포함한, 모든, 데이터를 |
| findRows | funcs/core/find-rows | sheet.findRows, findRows(), 시트에서, 검색, 알맞은, 데이터를, 찾아 |
| findText | funcs/core/find-text | sheet.findText, findText(), 내에, 특정, 문자열을, 가지는, 첫번 |
| fitColWidth | funcs/core/fit-col-width | sheet.fitColWidth, fitColWidth(), 컬럼, 너비를, 인자로, 설정한, 비율 |
| fitSize | funcs/core/fit-size | sheet.fitSize, fitSize(), 특정, 열의, 너비를, 해당, 열에 |
| focus | funcs/core/focus | sheet.focus, focus(), 지정한, 특정, 셀에, 포커스를, 줍니다 |
| getAttribute | funcs/core/get-attribute | sheet.getAttribute, getAttribute(), 특정, 셀에, 설정된, 속성값을, 확인합니다 |
| getBodyHeight | funcs/core/get-body-height | sheet.getBodyHeight, getBodyHeight(), 시트, 데이터, 영역의, 높이를, 리턴합니다 |
| getBodyWidth | funcs/core/get-body-width | sheet.getBodyWidth, getBodyWidth(), 특정, 너비, 틀고정, 기준, 우측 |
| getCanEdit | funcs/core/get-can-edit | sheet.getCanEdit, getCanEdit(), 특정, 셀의, 편집, 가능, 여부를 |
| getCanFocus | funcs/core/get-can-focus | sheet.getCanFocus, getCanFocus(), 특정, 행이나, 셀이, 포커스, 있는지 |
| getCell | funcs/core/get-cell | sheet.getCell, getCell(), 특정, 셀의, 태그, 가져옵니다 |
| getCellStyle | funcs/core/get-cell-style | sheet.getCellStyle, getCellStyle(), 대체, 가능한, 동작이므로, 비공개, 처리합니다 |
| getChangedData | funcs/core/get-changed-data | sheet.getChangedData, getChangedData(), 시트, 내에, 변경된, 내용, 입력 |
| getChildRows | funcs/core/get-child-rows | sheet.getChildRows, getChildRows(), 특정, 행의, 전체, 자식, 손자 |
| getColByIndex | funcs/core/get-col-by-index | sheet.getColByIndex, getColByIndex(), 좌측부터, 열의, 기준으로, 열이름을, 확인합니다 |
| getColIndex | funcs/core/get-col-index | sheet.getColIndex, getColIndex(), 열이름에, 확인합니다 |
| getColLeft | funcs/core/get-col-left | sheet.getColLeft, getColLeft(), 특정, 열의, 위치를, 섹션의, 시작을 |
| getCols | funcs/core/get-cols | sheet.getCols, getCols(), 시트가, 갖고있는, 열을, 같은, 배열형태로 |
| getCountInfoElement | funcs/core/get-count-info-element | sheet.getCountInfoElement, getCountInfoElement(), 기능, 사용하여, 데이터, 행수, 정보를 |
| getCurrentInfo | funcs/core/get-current-info | sheet.getCurrentInfo, getCurrentInfo(), 현재, 시트의, 컬럼, 정보를, 문자열로 |
| getCurrentStyle | funcs/core/get-current-style | sheet.getCurrentStyle, getCurrentStyle(), 현재, 시트의, 설정된, 테마, 배경색 |
| getDataRows | funcs/core/get-data-rows | sheet.getDataRows, getDataRows(), 시트가, 가지고, 있는, 전체, 데이터 |
| getDataVisibleRows | funcs/common/get-data-visible-rows | sheet.getDataVisibleRows, getDataVisibleRows(), 시트에서, 보여지고, 있는, 데이터, 로우 |
| getEditCol | funcs/core/get-edit-col | sheet.getEditCol, getEditCol(), 현재, 편집, 중인, 열이름을, 반환합니다 |
| getEditRow | funcs/core/get-edit-row | sheet.getEditRow, getEditRow(), 현재, 편집, 중인, 객체를, 반환합니다 |
| getEditText | funcs/core/get-edit-text | sheet.getEditText, getEditText(), 편집, 중인, 데이터를, 반환합니다 |
| getFilter | funcs/core/get-filter | sheet.getFilter, getFilter(), 필터행에, 설정한, 내용을, 확인합니다 |
| getFirstCol | funcs/core/get-first-col | sheet.getFirstCol, getFirstCol(), 좌측, 열이름을, 확인합니다 |
| getFirstRow | funcs/core/get-first-row | sheet.getFirstRow, getFirstRow(), 상단행을, 확인합니다 |
| getFirstVisibleRow | funcs/core/get-first-visible-row | sheet.getFirstVisibleRow, getFirstVisibleRow(), 상단행을, 확인합니다 |
| getFocusedCol | funcs/core/get-focused-col | sheet.getFocusedCol, getFocusedCol(), 시트, 내에, 현재, 포커스된, 셀의 |
| getFocusedPage | funcs/core/get-focused-page | sheet.getFocusedPage, getFocusedPage(), 현재, 포커스가, 위치한, 데이터, 페이지 |
| getFocusedRow | funcs/core/get-focused-row | sheet.getFocusedRow, getFocusedRow(), 시트, 내에, 현재, 포커스된, 또는 |
| getFooterRows | funcs/common/get-footer-rows | sheet.getFooterRows, getFooterRows(), 푸터, 영역에, 있는, 데이터, 로우 |
| getFormat | funcs/core/get-format | sheet.getFormat, getFormat(), 특정, 셀의, 확인합니다 |
| getFormulaRowPosition | funcs/core/get-formula-row-position | sheet.getFormulaRowPosition, getFormulaRowPosition(), 합계행, 위치, 하단, 기본값, 상단 |
| getGroupRows | funcs/core/get-group-rows | sheet.getGroupRows, getGroupRows(), 그룹으로, 생성된, 그룹행들을, 반환합니다 |
| getHeaderRows | funcs/core/get-header-rows | sheet.getHeaderRows, getHeaderRows(), 헤더, 영역에, 있는, 로우, 객체 |
| getLastCol | funcs/core/get-last-col | sheet.getLastCol, getLastCol(), 우측, 열이름을, 확인합니다 |
| getLastPageindex | funcs/core/get-last-pageindex | sheet.getLastPageindex, getLastPageindex(), 페이징, 조회, 방식에서, 마지막, 페이지의 |
| getLastRow | funcs/core/get-last-row | sheet.getLastRow, getLastRow(), 하단행을, 확인합니다 |
| getLastVisibleRow | funcs/core/get-last-visible-row | sheet.getLastVisibleRow, getLastVisibleRow(), 보여지는, 하단행, 속성을, 확인합니다 |
| getLocale | funcs/core/get-locale | sheet.getLocale, getLocale(), 시트에, 설정된, 언어, 코드를, 가져오는 |
| getMergeRange | funcs/core/get-merge-range | sheet.getMergeRange, getMergeRange(), 특정, 셀을, 기준으로, 머지된, 영역 |
| getMessage | funcs/core/get-message | sheet.getMessage, getMessage(), 시트에서, 메시지를, 가져옵니다 |
| getMouseCol | funcs/core/get-mouse-col | sheet.getMouseCol, getMouseCol(), 현재, 마우스, 아래에, 있는, 열이름을 |
| getMouseRow | funcs/core/get-mouse-row | sheet.getMouseRow, getMouseRow(), 현재, 마우스, 아래에, 있는, 객체를 |
| getNextCol | funcs/core/get-next-col | sheet.getNextCol, getNextCol(), 지정한, 컬럼의, 다음, 컬럼명을, 리턴합니다 |
| getNextRow | funcs/core/get-next-row | sheet.getNextRow, getNextRow(), 지정한, 행의, 바로, 아래, 행을 |
| getNextShift | funcs/core/get-next-shift | sheet.getNextShift, getNextShift(), 데이터, 로우, 객체, 대상으로, 사용가능한 |
| getNextSiblingRow | funcs/core/get-next-sibling-row | sheet.getNextSiblingRow, getNextSiblingRow(), 트리나, 그룹사용시, 같은, 부모를, 갖는 |
| getNextSiblingVisibleRow | funcs/core/get-next-sibling-visible-row | sheet.getNextSiblingVisibleRow, getNextSiblingVisibleRow(), 트리나, 그룹, 사용시, 같은, 부모를 |
| getNextVisibleRow | funcs/core/get-next-visible-row | sheet.getNextVisibleRow, getNextVisibleRow(), 인자로, 받은, 행으로부터, 아래에, 보이는 |
| getPageByIndex | funcs/core/get-page-by-index | sheet.getPageByIndex, getPageByIndex(), 특정, 갖는, 페이지, 객체, 리턴합니다 |
| getPageByRow | funcs/core/get-page-by-row | sheet.getPageByRow, getPageByRow(), 특정, 데이터, 로우, 객체, 위치한 |
| getPageIndex | funcs/core/get-page-index | sheet.getPageIndex, getPageIndex(), 페이지의, 확인합니다 |
| getPageIndexByRow | funcs/core/get-page-index-by-row | sheet.getPageIndexByRow, getPageIndexByRow(), 메소드의, 이름과, 동작이, 일치하지, 않으며 |
| getParentRows | funcs/core/get-parent-rows | sheet.getParentRows, getParentRows(), 특정, 행의, 전체, 부모, 객체를 |
| getPivotFilterRows | funcs/core/get-pivot-filter-rows | sheet.getPivotFilterRows, getPivotFilterRows(), 피벗, 시트에서, 특정, 셀의, 데이터를 |
| getPrevCol | funcs/core/get-prev-col | sheet.getPrevCol, getPrevCol(), 지정한, 열의, 바로, 앞에, 위치한 |
| getPrevRow | funcs/core/get-prev-row | sheet.getPrevRow, getPrevRow(), 지정한, 행의, 바로, 위에, 위치한 |
| getPrevShift | funcs/core/get-prev-shift | sheet.getPrevShift, getPrevShift(), 데이터, 로우, 객체, 대상으로, 사용가능한 |
| getPrevSiblingRow | funcs/core/get-prev-sibling-row | sheet.getPrevSiblingRow, getPrevSiblingRow(), 트리나, 그룹사용시, 같은, 부모를, 갖는 |
| getPrevSiblingVisibleRow | funcs/core/get-prev-sibling-visible-row | sheet.getPrevSiblingVisibleRow, getPrevSiblingVisibleRow(), 트리나, 그룹사용시, 같은, 부모를, 갖는 |
| getPrevVisibleRow | funcs/core/get-prev-visible-row | sheet.getPrevVisibleRow, getPrevVisibleRow(), 인자로, 받은, 행으로부터, 위에, 보이는 |
| getRowById | funcs/core/get-row-by-id | sheet.getRowById, getRowById(), 기준으로, 데이터, 로우, 객체, 반환합니다 |
| getRowByIndex | funcs/core/get-row-by-index | sheet.getRowByIndex, getRowByIndex(), 인덱스를, 기준으로, 데이터, 로우, 객체 |
| getRowHeight | funcs/core/get-row-height | sheet.getRowHeight, getRowHeight(), 특정행의, 높이를, 단위로, 확인합니다 |
| getRowIndex | funcs/core/get-row-index | sheet.getRowIndex, getRowIndex(), 데이터, 로우, 객체, 인덱스를, 반환합니다 |
| getRowKind | funcs/core/get-row-kind | sheet.getRowKind, getRowKind(), 행의, 유형을, 확인합니다 |
| getRowsByChecked | funcs/core/get-rows-by-checked | sheet.getRowsByChecked, getRowsByChecked(), 인자, 열의, 경우, 해당, 열에 |
| getRowsByDup | funcs/core/get-rows-by-dup | sheet.getRowsByDup, getRowsByDup(), 내에, 중복된, 데이터를, 가진, 데이터 |
| getRowsByStatus | funcs/core/get-rows-by-status | sheet.getRowsByStatus, getRowsByStatus(), 특정, 상태의, 행을, 배열로, 리턴 |
| getRowsFromPage | funcs/core/get-rows-from-page | sheet.getRowsFromPage, getRowsFromPage(), 특정, 페이지, 내에, 위에서부터, 번째에 |
| getRowStatus | funcs/common/get-row-status | sheet.getRowStatus, getRowStatus(), 특정, 행의, 상태값을, 반환합니다 |
| getRowTop | funcs/core/get-row-top | sheet.getRowTop, getRowTop(), 데이터, 내에서, 좌표값을, 확인합니다 |
| getRowValue | funcs/core/get-row-value | sheet.getRowValue, getRowValue(), 특정, 데이터, 로우, 객체, 해당하는 |
| getSavedCurrentInfo | funcs/core/get-saved-current-info | sheet.getSavedCurrentInfo, getSavedCurrentInfo(), 현재, 로컬, 스토리지, 혹은, 세션 |
| getSaveJson | funcs/core/get-save-json | sheet.getSaveJson, getSaveJson(), 시트, 내에, 변경된, 내용, 입력 |
| getSaveString | funcs/core/get-save-string | sheet.getSaveString, getSaveString(), 시트, 내에, 변경된, 내용, 입력 |
| getScale | funcs/core/get-scale | sheet.getScale, getScale(), 시트의, 배율, 정보를, 확인합니다 |
| getScrollLeft | funcs/core/get-scroll-left | sheet.getScrollLeft, getScrollLeft(), 가로스크롤, 바의, 위치를, 단위로, 확인합니다 |
| getScrollTop | funcs/core/get-scroll-top | sheet.getScrollTop, getScrollTop(), 세로스크롤바의, 위치를, 확인합니다 |
| getSelectedColsTodo | funcs/core/get-selected-cols-todo | sheet.getSelectedColsTodo, getSelectedColsTodo(), 사용할, 없는, 기능입니다 |
| getSelectedRange | funcs/core/get-selected-range | sheet.getSelectedRange, getSelectedRange(), 현재, 선택된, 영역을, 이중, 배열로 |
| getSelectedRows | funcs/core/get-selected-rows | sheet.getSelectedRows, getSelectedRows(), 선택된, 객체를, 리턴한다 |
| getSelectionSummaryInfoElement | funcs/core/get-selection-summary-info-element | sheet.getSelectionSummaryInfoElement, getSelectionSummaryInfoElement(), 선택한, 영역의, 개수, 합계, 평균 |
| getSheetData | funcs/excel/get-sheet-data | sheet.getSheetData, getSheetData(), 시트의, 데이터를, 인자의, 형식으로, 추출 |
| getSheetFocused | funcs/common/get-sheet-focused | sheet.getSheetFocused, getSheetFocused(), 현재, 포커스된, 시트, 객체를, 반환합니다 |
| getSheetHeight | funcs/common/get-sheet-height | sheet.getSheetHeight, getSheetHeight(), 시트의, 높이를, 반환합니다 |
| getSheets | funcs/core/get-sheets | sheet.getSheets, getSheets(), 스프레드, 시트에, 있는, 탭들의, 목록을 |
| getSheetTag | funcs/common/get-sheet-tag | sheet.getSheetTag, getSheetTag(), 시트의, 태그를, 반환합니다, 기본으로, 태그 |
| getSheetWidth | funcs/common/get-sheet-width | sheet.getSheetWidth, getSheetWidth(), 시트의, 너비를, 반환합니다 |
| getShownCols | funcs/core/get-shown-cols | sheet.getShownCols, getShownCols(), 현재, 화면에, 보여지는, 이름을, 배열로 |
| getShownRows | funcs/core/get-shown-rows | sheet.getShownRows, getShownRows(), 현재, 화면에, 보여지는, 데이터, 로우 |
| getSpanned | funcs/core/get-spanned | sheet.getSpanned, getSpanned(), 변경되었습니다 |
| getString | funcs/core/get-string | sheet.getString, getString(), 포맷이, 적용된, 문자열로, 셀의, 값을 |
| getSubsumOptions | funcs/common/get-subsum-options | sheet.getSubsumOptions, getSubsumOptions(), 시트에, 소계, 기능을, 사용시, 설정된 |
| getSubTotalRows | funcs/core/get-sub-total-rows | sheet.getSubTotalRows, getSubTotalRows(), 생성된, 소계, 누계, 행들을, 반환합니다 |
| getTotalRowCount | funcs/core/get-total-row-count | sheet.getTotalRowCount, getTotalRowCount(), 조회모드에, 따라, 조회된, 전체, 데이터 |
| getType | funcs/core/get-type | sheet.getType, getType(), 특정, 셀의, 확인합니다 |
| getUserData | funcs/core/get-user-data | sheet.getUserData, getUserData(), 함수, 호출시, 설정한, 데이터를, 리턴 |
| getUserOptions | funcs/core/get-user-options | sheet.getUserOptions, getUserOptions(), 시트, 초기화, 설정값을, 리턴합니다 |
| getValue | funcs/core/get-value | sheet.getValue, getValue(), 특정, 셀의, 값을, 구분자를, 제거하고 |
| goToNextPage | funcs/core/go-to-next-page | sheet.goToNextPage, goToNextPage(), 현재, 페이지의, 다음, 페이지로, 이동합니다 |
| goToPage | funcs/core/go-to-page | sheet.goToPage, goToPage(), 특정, 페이지로, 이동합니다 |
| goToPageByIndex | funcs/core/go-to-page-by-index | sheet.goToPageByIndex, goToPageByIndex(), 특정, 페이지로, 이동합니다 |
| goToPrevPage | funcs/core/go-to-prev-page | sheet.goToPrevPage, goToPrevPage(), 현재, 페이지의, 이전, 페이지로, 이동합니다 |
| hasChangedData | funcs/core/has-changed-data | sheet.hasChangedData, hasChangedData(), 시트, 내에, 변경된, 내용, 입력 |
| hasFilter | funcs/core/has-filter | sheet.hasFilter, hasFilter(), 필터가, 사용됐는지, 여부를, 리턴합니다 |
| hideCol | funcs/core/hide-col | sheet.hideCol, hideCol(), 특정, 열을, 감춥니다 |
| hideFilterDialog | funcs/core/hide-filter-dialog | sheet.hideFilterDialog, hideFilterDialog(), 헤더에, 필터, 다이얼로그, 아이콘을, 숨깁니다 |
| hideFilterRow | funcs/core/hide-filter-row | sheet.hideFilterRow, hideFilterRow(), 필터, 행을, 감춥니다 |
| hideGroupRow | funcs/core/hide-group-row | sheet.hideGroupRow, hideGroupRow(), 그룹행을, 제거하거나, 숨깁니다 |
| hideHint | funcs/core/hide-hint | sheet.hideHint, hideHint(), 현재, 보여지고, 있는, 힌트를, 감춥니다 |
| hideMessage | funcs/core/hide-message | sheet.hideMessage, hideMessage(), 띄운, 메세지, 다이얼로그를, 제거합니다 |
| hideRow | funcs/core/hide-row | sheet.hideRow, hideRow(), 지정한, 행을, 감춥니다 |
| hideRows | funcs/common/hide-rows | sheet.hideRows, hideRows(), 여러, 개의, 행을, 한꺼번에, 숨깁니다 |
| hideTip | funcs/core/hide-tip | sheet.hideTip, hideTip(), 시트가, 띄운, 풍선도움말을, 감춥니다 |
| importData | funcs/core/import-data | sheet.importData, importData(), 엑셀, 파일의, 내용을, 시트, 위로 |
| isFocused | funcs/core/is-focused | sheet.isFocused, isFocused(), 특정, 행이나, 셀에, 포커스가, 있는지 |
| isSelected | funcs/core/is-selected | sheet.isSelected, isSelected(), 해당, 기능은, 버전, 이후로, 지원하지 |
| loadExcel | funcs/excel/load-excel | sheet.loadExcel, loadExcel(), 엑셀, 파일의, 내용을, 시트, 위로 |
| loadExcelBuffer | funcs/excel/load-excel-buffer | sheet.loadExcelBuffer, loadExcelBuffer(), 하나의, 엑셀파일에서, 여러개의, 시트에, 번에 |
| loadSearchData | funcs/core/load-search-data | sheet.loadSearchData, loadSearchData(), 형식의, 데이터를, 시트에, 로드합니다 |
| loadSheet | funcs/core/load-sheet | sheet.loadSheet, loadSheet(), 스프레드, 시트에서, 탭을, 선택하여, 로드합니다 |
| loadText | funcs/excel/load-text | sheet.loadText, loadText(), 파일의, 내용을, 시트, 위로 |
| makePivotTable | funcs/core/make-pivot-table | sheet.makePivotTable, makePivotTable(), 대상, 시트의, 모든, 데이터를, 기준으로 |
| makeSubTotal | funcs/core/make-sub-total | sheet.makeSubTotal, makeSubTotal(), 기준, 열의, 데이터에, 따른, 소계 |
| method | funcs/method | sheet.method, method(), 사용법, 기초, 시트가, 제공하는, 모든 |
| moveCol | funcs/core/move-col | sheet.moveCol, moveCol(), 지정한, 열의, 위치를, 이동합니다 |
| moveRow | funcs/core/move-row | sheet.moveRow, moveRow(), 지정한, 행을, 이동합니다 |
| refreshCell | funcs/core/refresh-cell | sheet.refreshCell, refreshCell(), 특정, 셀의, 변경된, 내용을, 화면에 |
| refreshPage | funcs/core/refresh-page | sheet.refreshPage, refreshPage(), 지정한, 페이지를, 렌더링 |
| refreshRow | funcs/core/refresh-row | sheet.refreshRow, refreshRow(), 특정, 행의, 변경된, 내용을, 화면에 |
| reload | funcs/core/reload | sheet.reload, reload(), 시트를, 처음, 생성했던, 상태로, 새롭게 |
| reloadData | funcs/core/reload-data | sheet.reloadData, reloadData(), 시트의, 데이터를, 처음, 생성, 시점으로 |
| remove-Col | funcs/core/remove-Col | sheet.remove-Col, remove-Col(), 지정한, 열의, 데이터와, 영역을, 삭제합니다 |
| removeAll | funcs/core/remove-all | sheet.removeAll, removeAll(), 시트의, 전체, 데이터를, 제거합니다 |
| removeMemo | funcs/core/remove-memo | sheet.removeMemo, removeMemo(), 특정, 헤더, 셀에, 저장된, 메모를 |
| removePage | funcs/core/remove-page | sheet.removePage, removePage(), 특정, 페이지를, 삭제합니다 |
| removeRow | funcs/core/remove-row | sheet.removeRow, removeRow(), 지정한, 행을, 삭제 |
| removeRows | funcs/core/remove-rows | sheet.removeRows, removeRows(), 지정한, 여러행들을, 삭제 |
| removeSubTotal | funcs/core/remove-sub-total | sheet.removeSubTotal, removeSubTotal(), 시트, 존재하는, 모든, 소계, 누계 |
| renderBody | funcs/core/render-body | sheet.renderBody, renderBody(), 영역, 데이터부분, 다시, 렌더링 |
| renderTodo | funcs/core/render-todo | sheet.renderTodo, renderTodo(), 사용하고, 해당, 함수는, 사용하지, 않습니다 |
| rerender | funcs/core/rerender | sheet.rerender, rerender(), 시트, 전체, 영역을, 다시, 렌더링 |
| resetIconCheckTodo | funcs/core/reset-icon-check-todo | sheet.resetIconCheckTodo, resetIconCheckTodo(), 해당, 기능은, 버전, 이후로, 지원하지 |
| revertCell | funcs/core/revert-cell | sheet.revertCell, revertCell(), 특정, 셀의, 변경된, 내용을, 처음 |
| revertData | funcs/core/revert-data | sheet.revertData, revertData(), 시트, 전체, 데이터를, 조회, 시점의 |
| revertRow | funcs/core/revert-row | sheet.revertRow, revertRow(), 특정, 행의, 변경된, 내용을, 처음 |
| saveCurrentInfo | funcs/core/save-current-info | sheet.saveCurrentInfo, saveCurrentInfo(), 현재, 시트의, 정보를, 로컬, 스토리지 |
| selectAllRows | funcs/core/select-all-rows | sheet.selectAllRows, selectAllRows(), 전체, 행을, 선택, 혹은, 선택해제 |
| selectCell | funcs/core/select-cell | sheet.selectCell, selectCell(), 지정한, 셀을, 선택, 혹은, 선택해제 |
| selectCol | funcs/core/select-col | sheet.selectCol, selectCol(), 지정한, 열을, 선택 |
| selectRange | funcs/core/select-range | sheet.selectRange, selectRange(), 셀부터, 셀까지, 사각형, 영역을, 선택 |
| selectRow | funcs/core/select-row | sheet.selectRow, selectRow(), 지정한, 행을, 선택 |
| setAllCheck | funcs/core/set-all-check | sheet.setAllCheck, setAllCheck(), 타입의, 전체를, 체크, 언체크 |
| setAllColValue | funcs/common/set-all-col-value | sheet.setAllColValue, setAllColValue(), 이용하여, 하나, 컬럼의, 전체, 데이터행 |
| setAllFitSize | funcs/common/set-all-fit-size | sheet.setAllFitSize, setAllFitSize(), 이용하여, 전체, 컬럼의, 너비를, 조정합니다 |
| setAttribute | funcs/core/set-attribute | sheet.setAttribute, setAttribute(), 특정, 셀에, 속성을, 설정합니다 |
| setAutoMerge | funcs/core/set-auto-merge | sheet.setAutoMerge, setAutoMerge(), 값이, 같은, 셀들을, 주어진, 기준에 |
| setAutoMergeCancel | funcs/core/set-auto-merge-cancel | sheet.setAutoMergeCancel, setAutoMergeCancel(), 데이터, 기준으로, 병합된, 것을, 해제합니다 |
| setCellStyle | funcs/core/set-cell-style | sheet.setCellStyle, setCellStyle(), 특정, 셀의, 속성, 값을, 변경합니다 |
| setCheck | funcs/core/set-check | sheet.setCheck, setCheck(), 타입의, 셀의, 값을, 체크, 언체크 |
| setColWidth | funcs/core/set-col-width | sheet.setColWidth, setColWidth(), 열의, 너비를, 가감으로, 변경합니다 |
| setCountInfoElement | funcs/core/set-count-info-element | sheet.setCountInfoElement, setCountInfoElement(), 기능, 사용시, 표시되는, 데이터, 행수 |
| setCurrentInfo | funcs/core/set-current-info | sheet.setCurrentInfo, setCurrentInfo(), 시트, 컬럼, 정보, 문자열을, 현재 |
| setCurrentStyle | funcs/core/set-current-style | sheet.setCurrentStyle, setCurrentStyle(), 문자열을, 현재, 시트의, 테마, 설정된 |
| setDebugger | funcs/core/set-debugger | sheet.setDebugger, setDebugger(), 시트의, 디버그, 모드를, 활성화하는, 메소드입니다 |
| setEditMask | funcs/core/set-edit-mask | sheet.setEditMask, setEditMask(), 해당, 기능은, 버전, 이후로, 지원하지 |
| setEditText | funcs/core/set-edit-text | sheet.setEditText, setEditText(), 사용자가, 셀을, 더블, 클릭하여, 편집모드로 |
| setEnterMode | funcs/core/set-enter-mode | sheet.setEnterMode, setEnterMode(), 설정을, 동적으로, 변경합니다 |
| setExpandRow | funcs/core/set-expand-row | sheet.setExpandRow, setExpandRow(), 트리나, 그룹, 사용시, 특정행을, 접거나 |
| setFilter | funcs/core/set-filter | sheet.setFilter, setFilter(), 필터행과, 무관하게, 현재, 시트가, 갖고 |
| setFixedBottom | funcs/core/set-fixed-bottom | sheet.setFixedBottom, setFixedBottom(), 데이터행을, 하단, 영역에, 고정시킵니다 |
| setFixedCols | funcs/core/set-fixed-cols | sheet.setFixedCols, setFixedCols(), 시트의, 좌우측, 포함될, 수를, 설정합니다 |
| setFixedLeft | funcs/core/set-fixed-left | sheet.setFixedLeft, setFixedLeft(), 지정한, 숫자만큼의, 열을, 시트의, 좌측 |
| setFixedRight | funcs/core/set-fixed-right | sheet.setFixedRight, setFixedRight(), 지정한, 숫자만큼의, 열을, 시트의, 우측 |
| setFixedTop | funcs/core/set-fixed-top | sheet.setFixedTop, setFixedTop(), 데이터행을, 상단에, 고정시킵니다 |
| setFormulaRow | funcs/core/set-formula-row | sheet.setFormulaRow, setFormulaRow(), 합계행, 계산을, 변경, 하거나, 행을 |
| setFormulaRowPosition | funcs/core/set-formula-row-position | sheet.setFormulaRowPosition, setFormulaRowPosition(), 합계행, 위치, 하단, 기본값, 상단 |
| setIconCheck | funcs/core/set-icon-check | sheet.setIconCheck, setIconCheck(), 속성이, 셀에, 체크, 값을, 변경합니다 |
| setInfoRow | funcs/core/set-info-row | sheet.setInfoRow, setInfoRow(), 시트, 상단, 혹은, 하단에, 건수정보 |
| setLocale | funcs/core/set-locale | sheet.setLocale, setLocale(), 시트에, 설정된, 언어의, 종류를, 변경하는 |
| setMergeCancel | funcs/core/set-merge-cancel | sheet.setMergeCancel, setMergeCancel(), 셀의, 병합, 취소 |
| setMergeRange | funcs/core/set-merge-range | sheet.setMergeRange, setMergeRange(), 특정, 영역을, 하나의, 셀로, 병합 |
| setMessage | funcs/core/set-message | sheet.setMessage, setMessage(), 시트에, 새로운, 메시지를, 설정합니다 |
| setRangeAttribute | funcs/common/set-range-attribute | sheet.setRangeAttribute, setRangeAttribute(), 이용하여, 범위, 내의, 속성, 값을 |
| setRangeValue | funcs/common/set-range-value | sheet.setRangeValue, setRangeValue(), 혹은, 이용하여, 범위, 내의, 값을 |
| setRowValue | funcs/core/set-row-value | sheet.setRowValue, setRowValue(), 단위별, 데이터를, 설정 |
| setScale | funcs/core/set-scale | sheet.setScale, setScale(), 배율, 설정하여, 시트를, 축소, 확대 |
| setScrollLeft | funcs/core/set-scroll-left | sheet.setScrollLeft, setScrollLeft(), 가로스크롤, 바를, 단위로, 이동시킵니다 |
| setScrollTop | funcs/core/set-scroll-top | sheet.setScrollTop, setScrollTop(), 세로, 스크롤, 바를, 단위로, 이동시킵니다 |
| setSelectingCells | funcs/core/set-selecting-cells | sheet.setSelectingCells, setSelectingCells(), 값을, 동적으로, 바꿀 |
| setSelectionSummaryInfoElement | funcs/core/set-selection-summary-info-element | sheet.setSelectionSummaryInfoElement, setSelectionSummaryInfoElement(), 선택한, 영역의, 개수, 합계, 평균 |
| setSheetSize | funcs/common/set-sheet-size | sheet.setSheetSize, setSheetSize(), 시트의, 태그, 사이즈를, 조정합니다, 해당 |
| setSize | funcs/core/set-size | sheet.setSize, setSize(), 설정을, 동적으로, 변경합니다 |
| setString | funcs/core/set-string | sheet.setString, setString(), 타입이, 셀에, 대해서, 포맷이, 적용된 |
| setTheme | funcs/core/set-theme | sheet.setTheme, setTheme(), 시트가, 사용하는, 파일을, 변경합니다 |
| setTotalRowCount | funcs/core/set-total-row-count | sheet.setTotalRowCount, setTotalRowCount(), 기능, 사용시, 표시되는, 전체, 데이터 |
| setValue | funcs/core/set-value | sheet.setValue, setValue(), 셀의, 값을, 지정한, 값으로, 수정합니다 |
| showCalendar | funcs/core/show-calendar | sheet.showCalendar, showCalendar(), 메소드를, 시트, 내부에서, 달력, 컨트롤을 |
| showChartDialog | funcs/dialog/show-chart-dialog | sheet.showChartDialog, showChartDialog(), 시트의, 선택된, 영역을, 기준으로, 차트를 |
| showCol | funcs/core/show-col | sheet.showCol, showCol(), 감췄던, 열을, 보이게 |
| showDialog | funcs/core/show-dialog | sheet.showDialog, showDialog(), 시트의, 특정, 위에, 팝업, 형태의 |
| showDownloadDialog | funcs/dialog/show-download-dialog | sheet.showDownloadDialog, showDownloadDialog(), 시트의, 내용을, 엑셀이나, 형식으로, 다운로드 |
| showEditDialog | funcs/dialog/show-edit-dialog | sheet.showEditDialog, showEditDialog(), 행의, 내용을, 다이얼로그로, 열어, 보여줍니다 |
| showFilterDialog | funcs/core/show-filter-dialog | sheet.showFilterDialog, showFilterDialog(), 헤더에, 필터, 다이얼로그, 아이콘을, 생성합니다 |
| showFilterRow | funcs/core/show-filter-row | sheet.showFilterRow, showFilterRow(), 헤더, 밑에, 필터, 행을, 보여지게 |
| showFindDialog | funcs/dialog/show-find-dialog | sheet.showFindDialog, showFindDialog(), 시트, 내에, 데이터, 텍스트, 기준 |
| showFixedRows | funcs/core/show-fixed-rows | sheet.showFixedRows, showFixedRows(), 행을, 생성합니다 |
| showGroupRow | funcs/core/show-group-row | sheet.showGroupRow, showGroupRow(), 그룹행을, 생성합니다 |
| showHint | funcs/core/show-hint | sheet.showHint, showHint(), 셀의, 힌트를, 활성화 |
| showHtmlEditDialog | funcs/dialog/show-html-edit-dialog | sheet.showHtmlEditDialog, showHtmlEditDialog(), 행의, 내용을, 다이얼로그로, 열어, 보여줍니다 |
| showMemoDialog | funcs/core/show-memo-dialog | sheet.showMemoDialog, showMemoDialog(), 특정, 헤더, 셀에, 메모를, 입력할 |
| showMenu | funcs/core/show-menu | sheet.showMenu, showMenu(), 특정, 위치에, 컨텍스트, 메뉴을, 보여 |
| showMessage | funcs/core/show-message | sheet.showMessage, showMessage(), 시트, 영역, 가운데에, 메세지, 띄웁니다 |
| showMessageTime | funcs/core/show-message-time | sheet.showMessageTime, showMessageTime(), 시트, 영역, 가운데에, 특정, 시간동안 |
| showPivotDialog | funcs/dialog/show-pivot-dialog | sheet.showPivotDialog, showPivotDialog(), 피벗, 데이터를, 확인하기, 위한, 다이얼로그를 |
| showPopupMenu | funcs/core/show-popup-menu | sheet.showPopupMenu, showPopupMenu(), 마우스, 커서가, 있는, 위치에, 컨텍스트 |
| showPopupSheet | funcs/core/show-popup-sheet | sheet.showPopupSheet, showPopupSheet(), 특정, 위치에, 시트, 객체를, 다이얼로그 |
| showProgress | funcs/core/show-progress | sheet.showProgress, showProgress(), 시트, 영역, 가운데에, 진행상태를, 표시하는 |
| showRow | funcs/core/show-row | sheet.showRow, showRow(), 숨겨진, 행을, 보여지게 |
| showSortDialog | funcs/dialog/show-sort-dialog | sheet.showSortDialog, showSortDialog(), 시트의, 정렬을, 설정할, 있는, 다이얼로그 |
| showTimePicker | funcs/core/show-time-picker | sheet.showTimePicker, showTimePicker(), 특정, 셀에, 시분초, 다이얼로그를, 띄웁니다 |
| showTip | funcs/core/show-tip | sheet.showTip, showTip(), 현재, 마우스커서가, 위치한, 곳에, 원하는 |
| showTreeLevel | funcs/core/show-tree-level | sheet.showTreeLevel, showTreeLevel(), 지정한, 레벨만큼, 트리를, 접거나, 펼칩니다 |
| showUploadDialog | funcs/dialog/show-upload-dialog | sheet.showUploadDialog, showUploadDialog(), 엑셀, 업로드할때, 옵션을, 선택할, 있는 |
| startEdit | funcs/core/start-edit | sheet.startEdit, startEdit(), 셀의, 편집모드로, 들어값니다 |
| switchPivotSheet | funcs/core/switch-pivot-sheet | sheet.switchPivotSheet, switchPivotSheet(), 피벗, 테이블, 결과, 시트와, 원본 |
| syncHeaderCheck | funcs/core/sync-header-check | sheet.syncHeaderCheck, syncHeaderCheck(), 선언된, 모든, 열에, 대해, 데이터 |
| updateClientPaging | funcs/core/update-client-paging | sheet.updateClientPaging, updateClientPaging(), 클라이언트, 페이징, 페이지에, 표시할, 행의 |
| updatePageLength | funcs/core/update-page-length | sheet.updatePageLength, updatePageLength(), 서버, 페이징, 페이지에, 표시할, 행의 |
| version | funcs/core/version | sheet.version, version(), 인스턴스화된, 시트, 객체의, 버전을, 확인합니다 |

## 이벤트 (Events) {#event}

총 120개의 문서

| KEY | PATH | ALIAS |
|-----|------|-------|
| event | events/event | 사용법, 기초, 시트의, 이벤트는, 아래와 |
| onAfterCalculate | events/on-after-calculate | 빈번하게, 발생하며, 사용, 용도가, 명확하지 |
| onAfterChange | events/on-after-change | 사용자의, 입력에, 의해, 셀의, 값이 |
| onAfterClick | events/on-after-click | 마우스로, 내부를, 클릭했을, 마지막에, 호출되는 |
| onAfterColAdd | events/on-after-col-add | 시트에, 새로운, 열이, 추가되어, 렌더링된 |
| onAfterColMove | events/on-after-col-move | 열을, 드래그를, 다른, 위치로, 움직인 |
| onAfterColResize | events/on-after-col-resize | 열의, 너비가, 사용자에, 의해, 변경 |
| onAfterColsAdd | events/on-after-cols-add | 시트에, 새로운, 또는, 복사한, 열이 |
| onAfterEdit | events/on-after-edit | 편집이, 완료되기, 편집모드의, 문자열을, 셀값으로 |
| onAfterExpand | events/on-after-expand | 트리, 사용시, 트리가, 접히거나, 펼쳐진 |
| onAfterFilter | events/on-after-filter | 시트에서, 필터링이, 진행된, 호출되는, 이벤트입니다 |
| onAfterGotoPage | events/on-after-goto-page | 다른, 페이지로, 이동, 호출되는, 이벤트입니다 |
| onAfterGroup | events/on-after-group | 시트를, 특정, 기준으로, 그룹, 실행 |
| onAfterPaste | events/on-after-paste | 시트, 내에서, 붙여넣기가, 동작, 이후에 |
| onAfterPivot | events/on-after-pivot | 피벗, 시트를, 생성, 시트가, 호출되는 |
| onAfterProgress | events/on-after-progress | 변경하면, 발생하는, 이벤트입니다 |
| onAfterRowAdd | events/on-after-row-add | 시트에, 새로운, 행이, 추가되어, 렌더링된 |
| onAfterRowCopy | events/on-after-row-copy | 시트에, 행을, 복사, 렌더링, 되기전 |
| onAfterRowDelete | events/on-after-row-delete | 행의, 상태를, 삭제, 처리한, 렌더링되기 |
| onAfterRowMove | events/on-after-row-move | 같은, 시트, 내에, 이동, 호출되는 |
| onAfterRowMoveToSheet | events/on-after-row-move-to-sheet | 서로, 다른, 시트, 사이에, 이동 |
| onAfterSave | events/on-after-save | 시트에서, 변경된, 내용을, 서버에, 전송한 |
| onAfterSectionResize | events/on-after-section-resize | 좌우측, 섹션의, 크기를, 변경하는, 경우 |
| onAfterSort | events/on-after-sort | 소팅이, 이루어진, 호출되는, 이벤트입니다 |
| onBeforeCalculate | events/on-before-calculate | 빈번하게, 발생하며, 사용, 용도가, 명확하지 |
| onBeforeChange | events/on-before-change | 사용자의, 입력에, 의해, 셀의, 값이 |
| onBeforeCheckAll | events/on-before-check-all | 시트에서, 사용자의, 클릭이나, 타입의, 전체 |
| onBeforeColMove | events/on-before-col-move | 열을, 드래그를, 다른, 위치로, 움직이기 |
| onBeforeDataLoad | events/on-before-data-load | 서버를, 호출하여, 데이터가, 시트에, 로드되기 |
| onBeforeExpand | events/on-before-expand | 트리, 사용시, 트리가, 접히거나, 펼쳐질때 |
| onBeforeExport | events/on-before-export | 다운로드, 함수, 호출시, 서버로, 시트의 |
| onBeforeFileDown | events/on-before-file-down | 설정된, 열에, 위치한, 셀을, 클릭한 |
| onBeforeFilter | events/on-before-filter | 시트에서, 필터링하기, 전에, 호출되는, 이벤트입니다 |
| onBeforeFocus | events/on-before-focus | 시트, 셀이, 포커스, 되기, 전에 |
| onBeforeGoToPage | events/on-before-go-to-page | 다른, 페이지로, 이동, 호출되는, 이벤트입니다 |
| onBeforeGroup | events/on-before-group | 시트를, 특정, 기준으로, 그룹, 실행 |
| onBeforePaste | events/on-before-paste | 시트, 내에서, 붙여넣기가, 이루지기, 전에 |
| onBeforeRowDelete | events/on-before-row-delete | 행의, 상태를, 삭제, 처리, 호출되는 |
| onBeforeSave | events/on-before-save | 서버, 데이터, 저장, 메소드, 호출시 |
| onBeforeSelect | events/on-before-select | 시트의, 셀을, 선택하거나, 선택해제하기, 호출되는 |
| onBeforeSelectAllTodo | events/on-before-select-all-todo | 시트의, 모든, 셀을, 선택하거나, 선택해제하기 |
| onBeforeSend | events/on-before-send | 통신으로, 시트의, 데이터, 변경, 사항을 |
| onBeforeSort | events/on-before-sort | 사용자가, 헤더, 셀을, 클릭하였을, 경우 |
| onBlur | events/on-blur | 시트가, 포커스를, 잃을, 호출되는, 이벤트입니다 |
| onButtonClick | events/on-button-click | 속성, 값이, 사이드, 버튼을, 클릭하는 |
| onCalculateCell | events/on-calculate-cell | 빈번하게, 발생하며, 사용, 용도가, 명확하지 |
| onCancleFile | events/on-cancle-file | 에서, 셀에서, 파일, 업로드, 선택 |
| onCanDrop | events/on-can-drop | 시트에서, 드래그, 하여, 다른, 행에 |
| onCheckAllFinish | events/on-check-all-finish | 시트에서, 사용자의, 클릭이나, 타입의, 전체 |
| onClick | events/on-click | 마우스로, 내부를, 클릭했을, 호출되는, 이벤트입니다 |
| onColResize | events/on-col-resize | 열의, 크기가, 변경될, 호출되는, 이벤트입니다 |
| onDataLoad | events/on-data-load | 데이터가, 시트, 내에서, 파싱되어, 로드된 |
| onDblClick | events/on-dbl-click | 사용자가, 마우스로, 더블클릭했을, 호출되는, 이벤트입니다 |
| onDragFinish | events/on-drag-finish | 드래그된, 행들이, 드랍이, 가장, 마지막에 |
| onEndDrag | events/on-end-drag | 드래그된, 드랍되는, 시점에, 호출되는, 이벤트입니다 |
| onEndDragCell | events/on-end-drag-cell | 드래그, 셀이, 드랍되는, 시점에, 호출되는 |
| onEndEdit | events/on-end-edit | 편집이, 완료되기, 호출되는, 이벤트입니다 |
| onExCalendar | events/on-ex-calendar | 외부, 달력을, 제어할, 있는, 시트 |
| onExportFinish | events/on-export-finish | 시트의, 내용을, 등으로, 다운로드, 하는 |
| onFocus | events/on-focus | 시트, 셀이, 포커스, 되었을때, 호출되는 |
| onHideMessage | events/on-hide-message | 시트의, 메시지가, 없어질때, 실행되는, 이벤트입니다 |
| onIconClick | events/on-icon-click | 속성, 값이, 이미지, 설정되어, 있을때 |
| onImportFinish | events/on-import-finish | 엑셀, 텍스트, 로드시, 호출되는, 이벤트 |
| onKeyDown | events/on-key-down | 포커스된, 시트에서, 사용자가, 키를, 눌렀을 |
| onKeyPress | events/on-key-press | 포커스된, 시트에서, 사용자가, 키를, 눌렀을 |
| onKeyUp | events/on-key-up | 포커스된, 시트에서, 키보드의, 눌린, 키가 |
| onLinkClick | events/on-link-click | 또는, 설정된, 열에, 위치한, 셀을 |
| onLongClick | events/on-long-click | 사용자가, 셀을, 마우스로, 설정된, 시간보다 |
| onMouseDown | events/on-mouse-down | 시트에서, 마우스가, 눌려졌을때, 호출되는, 이벤트입니다 |
| onMouseMove | events/on-mouse-move | 시트에서, 마우스를, 움직일, 호출되는, 이벤트입니다 |
| onMouseOver | events/on-mouse-over | 마우스가, 시트, 다른, 셀에, 들어갈 |
| onMouseUp | events/on-mouse-up | 시트에서, 눌려진, 마우스, 버튼이, 올라올 |
| onReadCanEditDate | events/on-read-can-edit-date | 달력창을, 보여줄, 달력, 내에, 생성되는 |
| onReadDate | events/on-read-date | 달력창을, 보여줄, 달력, 내에, 생성되는 |
| onReadDefaults | events/on-read-defaults | 설정된, 메뉴가, 화면에, 보여질, 호출되는 |
| onReadEnum | events/on-read-enum | 빈번하게, 발생하며, 사용, 용도가, 명확하지 |
| onReadEnumKeys | events/on-read-enum-keys | 해당, 기능은, 버전, 이후로, 지원하지 |
| onReadFilteringValue | events/on-read-filtering-value | 필터링, 진행, 대상이, 되는, 셀마다 |
| onReadMenu | events/on-read-menu | 마우스, 오른쪽, 클릭, 시트에, 설정된 |
| onReadSuggest | events/on-read-suggest | 셀이, 편집모드로, 들어갈, 호출되는, 이벤트로 |
| onReceiveData | events/on-receive-data | 데이터, 조회, 데이터를, 시트가, 받은 |
| onRenderFinish | events/on-render-finish | 시트가, 렌더링된, 발생되는, 이벤트입니다 |
| onRenderFirstFinish | events/on-render-first-finish | 시트가, 처음, 생성되어, 렌더링될, 호출되는 |
| onRenderPageFinish | events/on-render-page-finish | 시트의, 페이지가, 렌더링된, 호출되는, 이벤트입니다 |
| onRenderPageStart | events/on-render-page-start | 시트의, 페이지를, 렌더링하기, 호출되는, 이벤트입니다 |
| onRenderStart | events/on-render-start | 시트를, 렌더링하기, 전에, 호출되는, 이벤트입니다 |
| onResize | events/on-resize | 시트의, 크기가, 변경될, 발생합니다 |
| onResultMask | events/on-result-mask | 셀에, 입력한, 데이터가, 에서, 설정된 |
| onRightClick | events/on-right-click | 사용자가, 셀을, 마우스로, 우클릭했을, 호출되는 |
| onRightLongClick | events/on-right-long-click | 사용자가, 셀을, 마우스로, 설정된, 시간보다 |
| onRowAdd | events/on-row-add | 시트에, 새로운, 행이, 추가된, 직후 |
| onRowFilter | events/on-row-filter | 필터링, 진행, 행에, 대해, 호출되는 |
| onRowLoad | events/on-row-load | 데이터, 조회, 로우, 객체, 생성된 |
| onSave | events/on-save | 함수, 호출, 발생하는, 이벤트 |
| onScroll | events/on-scroll | 시트의, 메인, 스크롤, 가로, 세로 |
| onSearchCallback | events/on-search-callback | 해당, 기능은, 변경되었습니다 |
| onSearchFinish | events/on-search-finish | 함수를, 로드된, 데이터가, 화면에, 렌더링 |
| onSearchStart | events/on-search-start | 조회, 함수를, 통한, 데이터, 조회가 |
| onSectionResize | events/on-section-resize | 좌우측, 섹션의, 크기를, 변경하는, 경우 |
| onSelectEnd | events/on-select-end | 마우스, 드래그로, 선택, 완료, 시점에 |
| onSelectFile | events/on-select-file | 함수를, 호출하여, 사용자가, 엑셀파일이나, 텍스트 |
| onSelectMenu | events/on-select-menu | 마우스, 오른쪽, 클릭, 시트에, 설정된 |
| onSetFile | events/on-set-file | 에서, 셀에, 파일, 업로드, 직전 |
| onSheetFocus | events/on-sheet-focus | 시트에, 포커스, 되었을때, 호출되는, 이벤트입니다 |
| onShowCalenderYm | events/on-show-calender-ym | 달력창을, 보여줄, 달력창, 내에, 생성되는 |
| onShowCol | events/on-show-col | 열이, 보이거나, 숨겨질, 호출되는, 이벤트입니다 |
| onShowDefaults | events/on-show-defaults | 설정된, 메뉴가, 화면에, 보여질, 호출되는 |
| onShowEdit | events/on-show-edit | 편집, 시작, 편집모드에, 보일, 값을 |
| onShowEditEnum | events/on-show-edit-enum | 타입의, 열에서, 리스트가, 열리기, 직전에 |
| onShowEnumMenu | events/on-show-enum-menu | 타입, 열에서, 리스트를, 호출되는, 이벤트입니다 |
| onShowHint | events/on-show-hint | 힌트가, 화면에, 보여질, 호출되는, 이벤트입니다 |
| onShowMenu | events/on-show-menu | 셀에서, 마우스, 오른쪽, 클릭, 시트에 |
| onShowMessage | events/on-show-message | 시트의, 메시지가, 발생할, 실행되는, 이벤트입니다 |
| onShowTip | events/on-show-tip | 시트의, 내부에, 마우스, 커서를, 위치 |
| onStartDrag | events/on-start-drag | 시트, 드래그되기, 전에, 호출되는, 이벤트입니다 |
| onStartDragCell | events/on-start-drag-cell | 시트, 셀이, 드래그되기, 전에, 호출되는 |
| onStartEdit | events/on-start-edit | 편집, 호출되는, 이벤트입니다 |
| onSuggest | events/on-suggest | 편집, 도중, 호출되는, 이벤트로, 사용자에게 |
| onValidation | events/on-validation | 저장, 호출시, 사용자가, 저장할, 값들에 |
| onVScrollEndPoint | events/on-v-scroll-end-point | 시트의, 세로, 스크롤이, 가장, 처음과 |

## 설정 속성 (Config Properties) {#config-property}

총 262개의 문서

| KEY | PATH | ALIAS |
|-----|------|-------|
| acceptPivotCols | props/cfg/accept-pivot-cols | 피벗, 시트에서, 기준, 열의, 값으로 |
| acceptPivotData | props/cfg/accept-pivot-data | 피벗, 시트에서, 데이터의, 값으로, 사용될 |
| acceptPivotRows | props/cfg/accept-pivot-rows | 피벗, 시트에서, 기준, 행의, 값으로 |
| accessibility | props/cfg/accessibility | 접근성, 모드를, 사용합니다 |
| alternate | props/cfg/alternate | 홀수, 짝수, 행에, 대하여, 번갈아 |
| alternateCount | props/cfg/alternate-count | 설정된, 간격에, 정의한, 개수만큼, 배경색를 |
| alternateStart | props/cfg/alternate-start | 설정한, 간격에, 적용할, 행의, 시작 |
| alternateType | props/cfg/alternate-type | 트리로, 구성된, 시트에서, 자식행들도, 계산에 |
| alwaysSearchPage | props/cfg/always-search-page | 서버페이징, 방식, 데이터, 조회에서, 페이지가 |
| autoCalendar | props/cfg/auto-calendar | 모든, 셀에, 대해, 사용자가, 편집모드로 |
| autoCloseDialog | props/cfg/auto-close-dialog | 달력, 컨텍스트, 메뉴, 내부적으로, 사용하는 |
| autoCloseDialogTimeout | props/cfg/auto-close-dialog-timeout | 설정하여, 다이얼로그를, 자동으로, 닫을, 경우 |
| autoExcelMode | props/cfg/auto-excel-mode | 함수를, 이용하여, 엑셀, 다운, 업로드를 |
| autoRowHeight | props/cfg/auto-row-height | 시트에서, 자동, 줄넘김이, 되어, 행의 |
| autoSelect-Ym | props/cfg/auto-select-Ym | 년월, 달력일, 경우, 설정, 달력에 |
| autoSelectFirstenum | props/cfg/auto-select-firstenum | 컬럼, 아이템의, 첫번째, 값이, 선택 |
| borderCursors | props/cfg/border-cursors | 행단위, 설정시, 호버되는, 행의, 보일지 |
| calcMergeMode | props/cfg/calc-merge-mode | 혹은, 사용시, 머지된, 셀을, 각각 |
| canButtonClickEvent | props/cfg/can-button-click-event | 이고, 경우, 이벤트, 사용을, 허용할지 |
| canColMove | props/cfg/can-col-move | 사용자가, 시트의, 헤더셀을, 드래그하여, 열의 |
| canColResize | props/cfg/can-col-resize | 마우스를, 통한, 너비, 조정의, 가능여부를 |
| canDrag | props/cfg/can-drag | 마우스, 드래그로, 행을, 이동할지, 여부를 |
| canEdit | props/cfg/can-edit | 전체적인, 시트의, 편집, 가능여부를, 설정합니다 |
| canSelect | props/cfg/can-select | 또는, 선택이, 가능한지에, 여부를, 설정합니다 |
| canSort | props/cfg/can-sort | 헤더, 클릭을, 통한, 정렬, 기능의 |
| centerMessage | props/cfg/center-message | 시트에서, 발생하는, 메세지, 시트의, 위치와 |
| clearEditPass | props/cfg/clear-edit-pass | 일때, 편집시, 호출은, 제외, 데이터를 |
| clearFilterOff | props/cfg/clear-filter-off | 필터행의, 연산자, 사용안함, 선택시, 필터 |
| clickPivotFilter | props/cfg/click-pivot-filter | 피벗, 시트에서, 데이터를, 클릭할, 경우 |
| colorState | props/cfg/color-state | 편집가능, 여부, 입력, 수정, 삭제 |
| colPage | props/cfg/col-page | 시트의, 넓이, 또는, 가로, 스크롤 |
| colPageLength | props/cfg/col-page-length | 사용, 랜더링, 개수를, 설정합니다 |
| controlsTag | props/cfg/controls-tag | 시트, 팝업, 메뉴, 툴팁, 메시지 |
| copyCols | props/cfg/copy-cols | 복사하여, 붙여넣기에, 사용할, 열을, 설정합니다 |
| copyEdit | props/cfg/copy-edit | 선택된, 셀의, 값을, 복사시, 마스크가 |
| copyHeaderText | props/cfg/copy-header-text | 해당, 기능은, 버전, 이후로, 지원하지 |
| copyPasteHidden | props/cfg/copy-paste-hidden | 숨긴, 열에, 붙여넣기, 가능여부를, 설정합니다 |
| createException | props/cfg/create-exception | 시트, 생성, 과정에서, 오류가, 발생했을 |
| cspMode | props/cfg/csp-mode | 테스트용으로, 만든, 옵션이라, 기능은, 일단 |
| ctrlArange | props/cfg/ctrl-arange | 사용하여, 선택복사시, 영역을, 헤더에서, 풋까지 |
| customScroll | props/cfg/custom-scroll | 시트에서, 사용될, 스크롤바의, 타입을, 설정합니다 |
| customThumbMinSize | props/cfg/custom-thumb-min-size | 옵션을, 시트의, 스크롤을, 브라우져의, 기본스크롤이 |
| data | props/cfg/data | 서버나, 특정경로에서, 데이터를, 가져오거나, 수정된 |
| dataAutoTrim | props/cfg/data-auto-trim | 조회, 데이터의, 공백, 트림, 여부를 |
| dataMerge | props/cfg/data-merge | 시트, 생성, 데이터, 영역에서, 값을 |
| dateStrictMode | props/cfg/date-strict-mode | 조회시, 날짜, 타입에, 설정된, 경우 |
| dblClickSelectionMode | props/cfg/dbl-click-selection-mode | 데이터, 영역에서, 마우스, 더블, 클릭 |
| debounceRender | props/cfg/debounce-render | 호출시, 걸어, 호출합니다 |
| debugOption | props/cfg/debug-option | 시트의, 디버그, 모드를, 활성화하는, 설정입니다 |
| decimalAdjust | props/cfg/decimal-adjust | 타입, 컬럼, 데이터의, 근사값, 처리방식을 |
| defaultBorder | props/cfg/default-border | 시트의, 기본, 눈금선, 보임, 여부를 |
| dialogsArea | props/cfg/dialogs-area | 시트, 다이얼로그의, 위치를, 설정하기, 위한 |
| disableKeyword | props/cfg/disable-keyword | 필터행에서, 예약어로, 설정되어, 있는, 사용여부를 |
| downExcelFillImage | props/cfg/down-excel-fill-image | 이용하여, 엑셀을, 다운로드, 머지, 영역에 |
| downToExcelConfig | props/cfg/down-to-excel-config | 함수, 호출시, 들어가는, 인자를, 공통으로 |
| downToTextConfig | props/cfg/down-to-text-config | 함수, 호출시, 들어가는, 인자를, 공통으로 |
| dragCell | props/cfg/drag-cell | 드래그, 단위, 여부를, 설정합니다 |
| dragCopy | props/cfg/drag-copy | 개의, 시트, 사이에서, 이동시, 원본 |
| dragFill | props/cfg/drag-fill | 포커스, 오른쪽, 하단을, 드래그, 채우기 |
| dragMerge | props/cfg/drag-merge | 병합된, 셀을, 드래그, 첫번째, 행과 |
| dragObject | props/cfg/drag-object | 행을, 드래그할, 마우스에, 보여질, 대상을 |
| editarrowbehavior | props/cfg/editarrowbehavior | 편집, 키보드, 방향키로, 이동을, 있도록 |
| editAutoMerge | props/cfg/edit-auto-merge | 또는, 설정하여, 기준, 병합, 옵션을 |
| editErrorsMessageTime | props/cfg/edit-errors-message-time | 시트를, 조작, 편집할때, 발생하는, 오류 |
| editMaskFunc | props/cfg/edit-mask-func | 시트, 특정, 열에, 해당하는, 편집시 |
| editSelect | props/cfg/edit-select | 편집, 값이, 선택될지, 여부를, 설정할 |
| enterMode | props/cfg/enter-mode | 키를, 눌렀을때, 편집을, 동작시키거나, 아래 |
| enumOpenMode | props/cfg/enum-open-mode | 포커스, 이동, 간에, 목록, 열기 |
| exactCheck | props/cfg/exact-check | 타입, 컬럼에서, 정확한, 체크박스나, 라디오 |
| excludeAddDelStatus | props/cfg/exclude-add-del-status | 추출, 함수, 사용시, 상태가, 이면서 |
| excludeMode | props/cfg/exclude-mode | 사용시, 동작을, 정의합니다, 비트, 연산으로 |
| export | props/cfg/export | 같은, 함수를, 통해서, 데이터를, 파일로 |
| exportDataConfig | props/cfg/export-data-config | 함수, 호출시, 들어가는, 인자를, 공통으로 |
| filterCount | props/cfg/filter-count | 필터, 기능, 사용시, 제공되는, 읽기 |
| filterDefaultsIconLeft | props/cfg/filter-defaults-icon-left | 필터, 행에서, 사용할, 필터링, 생성되는 |
| filterDefaultsMaxWidth | props/cfg/filter-defaults-max-width | 필터, 행에서, 사용할, 생성되는, 메뉴의 |
| filterEnumIconLeft | props/cfg/filter-enum-icon-left | 타입에, 필터링, 생성되는, 필터, 메뉴의 |
| filterIgnoreEmpty | props/cfg/filter-ignore-empty | 필터, 연산자에, 의해, 값을, 가지는 |
| filterValueList | props/cfg/filter-value-list | 필터행의, 특정셀에, 목록이, 있을때, 처리하는 |
| fitWidth | props/cfg/fit-width | 마지막, 컬럼, 뒤에, 더미, 컬럼을 |
| fixPrevColumnMerge | props/cfg/fix-prev-column-merge | 병합, 위아래로, 열의, 기준, 범위를 |
| floatCalcMode | props/cfg/float-calc-mode | 컬럼에서, 계산, 설정한, 소수점, 길이보다 |
| focusedCol | props/cfg/focused-col | 시트를, 생성하거나, 포커스를, 열이름, 설정합니다 |
| focusedRow | props/cfg/focused-row | 시트를, 생성하거나, 포커스, 시킬, 행의 |
| focusMode | props/cfg/focus-mode | 편집, 상태인, 셀에서, 이동시, 동작을 |
| focusWholeRow | props/cfg/focus-whole-row | 시트, 선택시, 포커스를, 해당, 셀에만 |
| forceEnterEdit | props/cfg/force-enter-edit | 값이, 아닌, 경우, 포커스, 상태에서 |
| formulaRange | props/cfg/formula-range | 컬럼의, 포뮬러, 동작시, 영역을, 헤더에서 |
| formulaRowNoFiltered | props/cfg/formula-row-no-filtered | 필터링되어, 보이지, 않는, 로우를, 합계 |
| getByDataFormat | props/cfg/get-by-data-format | 메소드, 실행, 셀의, 타입이, 경우 |
| getColWithHide | props/cfg/get-col-with-hide | 해당, 들은, 기본, 기능이, 보여지는 |
| group | props/cfg/group | 시트, 로딩시, 그룹핑, 하고자, 하는 |
| groupFormat | props/cfg/group-format | 그룹핑, 생성된, 그룹, 트리가, 있는 |
| groupMain | props/cfg/group-main | 그룹핑이, 되었을때, 그룹, 트리를, 보여줄 |
| groupSort | props/cfg/group-sort | 그룹핑시, 기준컬럼에, 정렬, 처리, 여부를 |
| groupSortMain | props/cfg/group-sort-main | 그룹핑, 사용시, 그룹, 열에, 대해서 |
| groupTree | props/cfg/group-tree | 그룹핑, 그룹, 기준, 컬럼에서, 트리 |
| groupTreeCol | props/cfg/group-tree-col | 설정된, 경우, 그룹핑된, 컬럼들이, 표시될 |
| headerCheck | props/cfg/header-check | 시트, 생성, 타입이, 모든, 열들의 |
| headerCheckMode | props/cfg/header-check-mode | 헤더, 체크, 박스, 활성화된, 시트에서 |
| headerCheckPageOnly | props/cfg/header-check-page-only | 에서, 옵션을, 사용하여, 전체, 체크를 |
| headerMerge | props/cfg/header-merge | 시트, 생성, 헤더, 영역에서, 값을 |
| headerSortActionMode | props/cfg/header-sort-action-mode | 헤더, 클릭, 어떻게, 소팅할지, 결정합니다 |
| headerSortMode | props/cfg/header-sort-mode | 헤더를, 클릭시, 소팅하는, 순서를, 변경합니다 |
| hideHScroll | props/cfg/hide-h-scroll | 시트에, 가로스크롤바를, 표시하지, 않습니다 |
| highlightAfterSort | props/cfg/highlight-after-sort | 정렬, 동작, 이후, 포커스, 처리 |
| hintMaxWidth | props/cfg/hint-max-width | 힌트의, 최대, 너비, 설정합니다 |
| hover | props/cfg/hover | 시트내의, 또는, 셀에, 마우스, 커서가 |
| hoverScope | props/cfg/hover-scope | 시트내의, 또는, 셀에, 마우스, 커서가 |
| ignoreFocused | props/cfg/ignore-focused | 시트는, 데이터, 조회, 포커스를, 보여지는 |
| ignoreHeaderColMerge | props/cfg/ignore-header-col-merge | 속성을, 헤더, 영역에도, 적용할지, 여부를 |
| ignoreTextToNumber | props/cfg/ignore-text-to-number | 열의, 타입이, 숫자로만, 되어, 있는 |
| includeDelRow | props/cfg/include-del-row | 소계, 누계, 합계, 삭제, 상태 |
| indexEnum | props/cfg/index-enum | 일때, 선택시, 셀값으로, 사용할지, 여부를 |
| inEditMode | props/cfg/in-edit-mode | 시트의, 편집, 시점을, 설정합니다 |
| infoRowCalcByScrolled | props/cfg/info-row-calc-by-scrolled | 설정시, 스크롤, 계산이, 실행되지, 않게 |
| infoRowConfig | props/cfg/info-row-config | 시트, 상단, 혹은, 하단에, 별도의 |
| initPivotCols | props/cfg/init-pivot-cols | 피벗, 시트에서, 기준, 열의, 값으로 |
| initPivotData | props/cfg/init-pivot-data | 피벗, 시트에서, 데이터의, 값으로, 사용할 |
| initPivotRows | props/cfg/init-pivot-rows | 피벗, 시트에서, 기준, 행의, 값으로 |
| invalidArgsReturnValue | props/cfg/invalid-args-return-value | 사용시, 잘못된, 인자를, 사용하는, 경우 |
| jsonDataSep | props/cfg/json-data-sep | 조회, 데이터의, 두번째, 연결하는, 문자열을 |
| leftCanResize | props/cfg/left-can-resize | 해당, 기능은, 버전, 이후로, 지원하지 |
| leftWidth | props/cfg/left-width | 왼쪽, 고정, 섹션의, 최대, 너비를 |
| levelMark | props/cfg/level-mark | 트리구조에서, 사용하여, 엑셀, 다운, 나타내고 |
| loadExcelConfig | props/cfg/load-excel-config | 함수, 호출시, 들어가는, 인자를, 공통으로 |
| loadTextConfig | props/cfg/load-text-config | 함수, 호출시, 들어가는, 인자를, 공통으로 |
| longClick | props/cfg/long-click | 마우스, 버튼, 또는, 모바일, 기기에서의 |
| mainCol | props/cfg/main-col | 트리기능, 사용시, 트리를, 보여줄, 열을 |
| markupTagDelimiter | props/cfg/markup-tag-delimiter | 이나, 처럼, 함수, 사용시, 서버로 |
| matchDataFormat | props/cfg/match-data-format | 에서는, 조회, 데이터, 형식이, 일치하지 |
| maxPages | props/cfg/max-pages | 경우, 시트가, 번에, 갖고, 있는 |
| maxSort | props/cfg/max-sort | 용자가, 헤더, 셀을, 클릭하여, 다중 |
| maxVScroll | props/cfg/max-v-scroll | 사용하면서, 해당, 높이부터는, 스크롤을, 만들고 |
| memoId | props/cfg/memo-id | 시트에, 메모기능을, 사용하기, 필요한, 고유한 |
| menu | props/cfg/menu | 마우스, 우측, 버튼, 클릭, 보여질 |
| menuButtons | props/cfg/menu-buttons | 기존의, 아무설정, 없이, 타입의, 포함 |
| menuHSeparator | props/cfg/menu-h-separator | 사용시, 아이템, 구분자를, 지정할 |
| menuMaxHeight | props/cfg/menu-max-height | 열에서, 열리는, 메뉴의, 최대, 높이를 |
| mergeCellsMatch | props/cfg/merge-cells-match | 머지된, 데이터, 수정시, 전체, 머지 |
| mergeHeightAdjust | props/cfg/merge-height-adjust | 같이, 높이에, 영향을, 주는, 기능을 |
| mergeVisibleDom | props/cfg/merge-visible-dom | 에서, 보이는, 영역만, 머지할지에, 여부를 |
| messageWidth | props/cfg/message-width | 시트, 메시지, 창의, 최소, 너비 |
| midWidth | props/cfg/mid-width | 중앙, 섹션의, 최대, 너비를, 설정합니다 |
| moveDeselectMode | props/cfg/move-deselect-mode | 해당, 옵션, 설정, 방향키, 페이지 |
| moveMessage | props/cfg/move-message | 시트, 메시지, 창의, 드래그, 여부를 |
| msgLocale | props/cfg/msg-locale | 시트에서, 사용할, 언어, 메세지, 파일 |
| multiRecord | props/cfg/multi-record | 시트에서, 하나의, 데이터를, 여러, 줄로 |
| multiRecordShape | props/cfg/multi-record-shape | 멀티레코드, 기능을, 사용하는, 시트에서, 엑셀 |
| multiRecordShapeLoad | props/cfg/multi-record-shape-load | 멀티레코드, 기능을, 사용하는, 시트에서, 모양대로 |
| noDataMessage | props/cfg/no-data-message | 데이터로, 시트, 생성, 인자, 조회 |
| noDataMiddle | props/cfg/no-data-middle | 조회, 데이터가, 없는, 경우, 표시되는 |
| noFormatEscape | props/cfg/no-format-escape | 태그로, 사용되는, 문자를, 그대로, 출력할지 |
| noHeaderEnumList | props/cfg/no-header-enum-list | 버전, 이후로, 관계없이, 헤더의, 높이가 |
| noHScroll | props/cfg/no-h-scroll | 시트에, 가로스크롤바를, 표시하지, 않는, 기능으로 |
| noPivotSort | props/cfg/no-pivot-sort | 피벗, 시트, 생성시, 원본, 데이터 |
| noRenderHidden | props/cfg/no-render-hidden | 시트, 생성후, 최초, 조회할, 보이지 |
| noTreeLines | props/cfg/no-tree-lines | 트리를, 사용하는, 시트, 생성시, 노드와 |
| noVScroll | props/cfg/no-v-scroll | 시트에, 세로스크롤바를, 표시하지, 않는, 기능으로 |
| overValueLimit | props/cfg/over-value-limit | 현재, 시트의, 타입의, 입력, 범위가 |
| pageLength | props/cfg/page-length | 페이지, 표시할, 개수를, 설정합니다 |
| pasteCols | props/cfg/paste-cols | 클립보드의, 내용을, 시트에, 붙여넣을, 어떤 |
| pasteFocused | props/cfg/paste-focused | 시트에서, 복사한, 데이터를, 붙여넣을때, 데이터가 |
| pasteStrictMode | props/cfg/paste-strict-mode | 클립보드의, 내용을, 시트에, 붙여넣을, 타입에 |
| pivotCfg | props/cfg/pivot-cfg | 피벗, 시트의, 속성을, 설정합니다 |
| pivotFormat | props/cfg/pivot-format | 피벗, 시트에, 있는, 셀들에, 적용될 |
| pivotFunc | props/cfg/pivot-func | 피벗, 시트의, 데이터, 값을, 도출할 |
| pivotSumPosition | props/cfg/pivot-sum-position | 피벗, 합계행의, 위치를, 설정합니다 |
| preserveNull | props/cfg/preserve-null | 사용자가, 데이터를, 기입한, 경우, 시트 |
| prevColumnMerge | props/cfg/prev-column-merge | 병합, 위아래로, 열의, 좌측, 범위를 |
| prevColumnMergeMode | props/cfg/prev-column-merge-mode | 에서, 셀을, 머지하는, 기준을, 설정하는 |
| rangeEnumIconLeft | props/cfg/range-enum-icon-left | 타입에, 속성, 사용시, 메뉴의, 체크 |
| removeCustomFormatDelimiter | props/cfg/remove-custom-format-delimiter | 데이터, 로드시, 설정된, 동일한, 포멧일시 |
| removeSepReqValue | props/cfg/remove-sep-req-value | 같은, 서버로, 데이터를, 보내는, 경우 |
| reqStatusName | props/cfg/req-status-name | 저장, 함수, 호출시, 행의, 상태 |
| requireDeleted | props/cfg/require-deleted | 이전, 버전에서, 삭제행을, 검사에, 포함하고 |
| requiredImage | props/cfg/required-image | 필수, 입력, 항목, 이미지를, 기본 |
| requiredPosition | props/cfg/required-position | 보여질, 위치를, 설정합니다 |
| reversedTree | props/cfg/reversed-tree | 트리, 그룹을, 사용하는, 시트에서, 아래를 |
| rightCanResize | props/cfg/right-can-resize | 해당, 기능은, 버전, 이후로, 지원하지 |
| rightWidth | props/cfg/right-width | 오른쪽, 고정, 섹션의, 최대, 너비를 |
| rowIndex | props/cfg/row-index | 기능을, 대신할, 컬럼명을, 변경할, 해당 |
| saveHtmlChar | props/cfg/save-html-char | 저장시, 변환되지, 않고, 그대로, 저장됩니다 |
| scale | props/cfg/scale | 주어진, 배율, 따라, 시트, 전체를 |
| scrollFreeze | props/cfg/scrollFreeze | 브라우저, 스크롤이, 이동되지, 않도록, 처리하는 |
| scrollLeft | props/cfg/scroll-left | 중앙, 섹션, 일반적인, 영역, 가로 |
| scrollOverSheet | props/cfg/scroll-over-sheet | 시트와, 브라우저에서, 세로, 스크롤이, 있을 |
| scrollPagingServerSort | props/cfg/scroll-paging-server-sort | 스크롤, 페이징, 사용, 사용하며, 서버 |
| scrollTop | props/cfg/scroll-top | 시트의, 세로, 스크롤바, 위치를, 설정합니다 |
| searchCaseSensitive | props/cfg/search-case-sensitive | 검색어가, 영문, 혹은, 소문자를, 구분하는 |
| searchCells | props/cfg/search-cells | 찾기, 사용, 단위로, 검색할지, 여부를 |
| searchCount | props/cfg/search-count | 사용시, 제공되는, 읽기, 전용, 옵션으로 |
| searchExpression | props/cfg/search-expression | 시트에서, 검색할, 문자열을, 설정합니다 |
| searchMode | props/cfg/search-mode | 시트의, 데이터, 조회, 모드를, 설정합니다 |
| searchProgress | props/cfg/search-progress | 데이터, 조회, 사용시, 내부에서, 일어나는 |
| sectionCanResize | props/cfg/section-can-resize | 사용자가, 섹션, 사이를, 드래그하여, 너비를 |
| selectingCells | props/cfg/selecting-cells | 개별적인, 선택, 혹은, 범위, 선택이 |
| selectingFocus | props/cfg/selecting-focus | 포커스를, 가진, 영역으로, 자동으로, 선택할지를 |
| selectionSummary | props/cfg/selection-summary | 드레그, 혹은, 키보드, 선택한, 영역의 |
| selectMode | props/cfg/select-mode | 마우스, 조작으로, 또는, 행을, 선택 |
| selFocusColor | props/cfg/sel-focus-color | 시트, 포커스, 혹은, 영역, 선택시 |
| sheetPaste | props/cfg/sheet-paste | 전용, 기능입니다, 설정시, 복사기능, 이용시 |
| shiftHint | props/cfg/shift-hint | 크기보다, 내용이, 많을, 마우스, 호버시 |
| showFilter | props/cfg/show-filter | 시트, 생성시, 상단, 고정행으로, 필터행을 |
| showFilterTip | props/cfg/show-filter-tip | 필터행에, 마우스, 오버시, 사용법을, 팁으로 |
| showImage | props/cfg/showImage | 편집이, 가능한, 컬럼에서, 아이콘, 이미지를 |
| size | props/cfg/size | 행의, 최소, 높이, 아이콘, 크기를 |
| sortCurrentPage | props/cfg/sort-current-page | 서버, 페이징, 사용, 현재, 보여지는 |
| sortIcons | props/cfg/sort-icons | 정렬, 아이콘의, 화면에, 표시여부, 기능 |
| sortIconsNum | props/cfg/sort-icons-num | 다중, 컬럼, 소팅시, 소팅, 적용 |
| spaceForDefaultValue | props/cfg/space-for-default-value | 빈문자, 데이터도, 표시되도록, 설정합니다 |
| standardFilter | props/cfg/standard-filter | 트리에서, 필터, 기능, 사용시, 하위 |
| standardTip | props/cfg/standard-tip | 툴팁을, 시트, 내장, 다이얼로그로, 보여줄지 |
| staticCursor | props/cfg/static-cursor | 시트, 이외의, 요소를, 클릭했을, 포커스 |
| storageCompressMode | props/cfg/storage-compress-mode | 로컬, 스토리지, 혹은, 세션, 스토리지에 |
| storageKeyId | props/cfg/storage-key-id | 로컬, 스토리지, 혹은, 세션, 스토리지에 |
| storageKeyPrefix | props/cfg/storage-key-prefix | 로컬, 스토리지, 혹은, 세션, 스토리지에 |
| storageSession | props/cfg/storage-session | 시트의, 정보를, 로컬, 스토리지, 혹은 |
| strictParse | props/cfg/strict-parse | 조회, 함수에서, 데이터를, 파싱할, 파서를 |
| strongDisable | props/cfg/strong-disable | 메소드, 호출, 제외한, 나머지, 사용자 |
| style | props/cfg/style | 기본, 테마, 외에, 다른, 테마를 |
| styleRowConfig | props/cfg/style-row-config | 시트, 상단, 혹은, 하단에, 별도의 |
| suppressExportMessage | props/cfg/suppress-export-message | 서버, 모듈, 클라이언트, 모듈을, 이용해 |
| suppressMessage | props/cfg/suppress-message | 시트에서, 제공하는, 상태, 메시지들, 표시하지 |
| sync | props/cfg/sync | 시트의, 스크롤을, 동기화, 하는, 기능입니다 |
| tabIndex | props/cfg/tab-index | 설정된, 경우, 시트의, 순서의, 위치를 |
| tableCaption | props/cfg/table-caption | 접근성, 모드에서, 제목을, 지정하는, 설정할 |
| tableSummary | props/cfg/table-summary | 접근성, 모드에서, 내용의, 요약을, 지정하는 |
| tabletmode | props/cfg/tabletmode | 시트를, 모바일, 터치, 모드로, 동작하도록 |
| tabStop | props/cfg/tab-stop | 페이지, 안의, 요소들을, 키로, 이동하는 |
| timeout | props/cfg/timeout | 시트에서, 사용되는, 서버통신의, 최대, 대기 |
| tipMaxWidth | props/cfg/tip-max-width | 팁의, 최대, 너비, 설정합니다 |
| tipStart | props/cfg/tip-start | 기능을, 이용하여, 풍선도움말을, 기능, 사용시 |
| touchScroll | props/cfg/touch-scroll | 태블릿이나, 모바일, 기기에서, 시트, 스크롤바의 |
| touchScrollCount | props/cfg/touch-scroll-count | 에서, 모바일, 터치, 스크롤, 이동할 |
| touchScrolling | props/cfg/touch-scrolling | 모바일, 환경에서, 시트, 바디, 영역 |
| treeCheckSync | props/cfg/tree-check-sync | 트리기능을, 사용하는, 시트에서, 사용, 부모자식 |
| undo | props/cfg/undo | 사용자가, 수정한, 값이나, 수정된, 값을 |
| unicodeByteMode | props/cfg/unicode-byte-mode | 한글, 자리의, 바이트, 수를, 설정합니다 |
| use_classStyle | props/cfg/use_class-style | 시트에, 속성이, 설정되어, 있는, 경우 |
| useAnimations | props/cfg/use-animations | 시트, 애니메이션, 사용, 여부를, 설정합니다 |
| useButton | props/cfg/use-button | 이고, 속성값이, 경우, 안에, 버튼이 |
| useCache | props/cfg/use-cache | 파일의, 브라우저, 캐쉬, 사용, 여부를 |
| useExtraObjectData | props/cfg/use-extra-object-data | 조회, 데이터에, 시트에, 설정한, 열이 |
| useFilterDialog | props/cfg/use-filter-dialog | 필터, 다이얼로그를, 사용할지, 여부를, 결정합니다 |
| useGroupSubTotal | props/cfg/use-group-sub-total | 시트를, 그룹핑하여, 사용하고, 있을, 경우 |
| useHeaderContextMenu | props/cfg/use-header-context-menu | 헤더, 컨텍스트, 메뉴의, 표시, 비표시를 |
| useHeaderSortCancel | props/cfg/use-header-sort-cancel | 일반적으로, 헤더, 셀을, 클릭하여, 소팅하는 |
| usePivot | props/cfg/use-pivot | 현재, 시트를, 피벗, 시트의, 데이터 |
| useRandomId | props/cfg/use-random-id | 시트, 생성시, 임의의, 생성하고, 글로벌 |
| userAttr | props/cfg/user-attr | 속성을, 사용자, 지정대로, 사용, 있게 |
| useSpreadSheet | props/cfg/use-spread-sheet | 스프레드, 시트, 모드를, 사용합니다 |
| validateMessage | props/cfg/validate-message | 설정했을, 유효성, 검사, 실패시, 띄울 |
| validCheck | props/cfg/valid-check | 저장, 함수, 호출시, 유효성, 검사를 |
| vScrollPadMode | props/cfg/v-scroll-pad-mode | 세로, 스크롤의, 상단에, 여백을, 설정하는 |
| weeks | props/cfg/weeks | 달력의, 주차, 표현, 여부를, 설정합니다 |
| wheelFixed | props/cfg/wheel-fixed | 헤드, 영역, 영역에, 마우스가, 위치할 |
| wheelScrollCount | props/cfg/wheel-scroll-count | 상관없이, 스크롤, 이동할, 행의, 개수를 |
| withCredentials | props/cfg/with-credentials | 사용시, 내부, 통신, 모듈, 동작에 |
| xlsImportMode | props/cfg/xls-import-mode | 함수를, 사용할, 파일선택창에서, 파일, 선택시 |
| zIndex | props/cfg/z-index | 시트와, 시트의, 팝업, 다이얼로그, 메세지 |
| zoomSetSizeMode | props/cfg/zoom-set-size-mode | 나뉘며, 사용시에는, 태그, 사이즈가, 설정되어있는 |

## 컬럼 속성 (Column Properties) {#column-property}

총 167개의 문서

| KEY | PATH | ALIAS |
|-----|------|-------|
| accept | props/col/accept | 컬럼에, 업로드를, 허용할, 파일, 형식을 |
| acceptEnters | props/col/accept-enters | 타입에서, 편집중, 입력시, 동작에, 대해 |
| addEdit | props/col/add-edit | 행의, 상태가, 추가, 컬럼의, 편집 |
| align | props/col/align | 문자열, 좌우, 정렬을, 설정합니다 |
| allCheckIgnoreEvent | props/col/all-check-ignore-event | 헤더, 전체, 체크, 언체크, 시에 |
| attributeFormula | props/col/attribute-formula | 열의, 각종, 속성, 설정할 |
| autoCalendar | props/col/auto-calendar | 셀에, 대해, 사용자가, 편집모드로, 들어갈때 |
| boolGroup | props/col/bool-group | 내에서, 동일, 그룹으로, 묶을지, 여부를 |
| boolIcon | props/col/bool-icon | 열에서, 체크, 언체크, 아이콘을, 다른 |
| boolIconWidth | props/col/bool-icon-width | 속성을, 통해서, 체크박스, 아이콘을, 커스텀 |
| breakPoint | props/col/break-point | 언어팩에, 있는, 수치, 기준보다, 작을시 |
| button | props/col/button | 셀의, 우측에, 원하는, 아이콘, 이미지 |
| buttonAlias | props/col/button-alias | 접근성, 모드에서, 속성의, 값이, 이미지 |
| buttonClass | props/col/button-class | 열의, 이고, 속성의, 값이, 경우 |
| buttonText | props/col/button-text | 속성의, 값이, 이거나, 경우, 버튼에 |
| buttonWidth | props/col/button-width | 이고, 속성의, 값이, 경우, 셀에 |
| calendarButtons | props/col/calendar-buttons | 달력이, 표시될때, 달력, 하단에, 보여질 |
| canCopyPaste | props/col/can-copy-paste | 열에, 통한, 복사와, 붙여넣기를, 제한합니다 |
| canDrag | props/col/can-drag | 열의, 가능여부를, 설정합니다 |
| canEdit | props/col/can-edit | 열에, 편집, 가능, 여부를, 설정합니다 |
| canEmpty | props/col/can-empty | 타입에서, 데이터의, 값이, 없을, 경우 |
| canExport | props/col/can-export | 열의, 다운로드, 가능, 여부 |
| canFilter | props/col/can-filter | 특정, 열에, 대해, 필터기능을, 사용하지 |
| canFocus | props/col/can-focus | 열에, 클릭이나, 키보드를, 통한, 이동시 |
| canGroup | props/col/can-group | 열의, 그룹핑, 가능여부를, 설정합니다 |
| canMove | props/col/can-move | 사용자의, 이동, 가능, 여부를, 설정합니다 |
| canPrint | props/col/can-print | 열의, 프린트, 가능, 여부 |
| canResize | props/col/can-resize | 열의, 너비, 변경, 가능여부를, 설정합니다 |
| canSearch | props/col/can-search | 찾기, 다이얼로그, 등을, 검색할, 해당 |
| canSelect | props/col/can-select | 사용자가, 마우스, 드래그를, 데이터, 영역의 |
| canSort | props/col/can-sort | 열의, 소팅, 가능, 여부를, 설정합니다 |
| caseSensitive | props/col/case-sensitive | 소팅시, 혹은, 필터, 사용시, 대소문자 |
| changeEdit | props/col/change-edit | 행의, 상태가, 수정, 또는, 조회인 |
| class | props/col/class | 열에, 적용할, 커스텀, 설정합니다 |
| clear | props/col/clear | 열간에, 관계형, 콤보를, 사용할때, 상위 |
| clipTextOverflow | props/col/clip-text-overflow | 해당, 열의, 값을, 으로, 설정합니다 |
| colMerge | props/col/col-merge | 데이터, 영역에서, 기준, 병합, 실행 |
| color | props/col/color | 열의, 배경색상을, 설정합니다 |
| cursor | props/col/cursor | 위에, 마우스, 커서가, 호버시, 커서의 |
| customFormat | props/col/custom-format | 원본, 데이터에, 마스킹을, 정의합니다 |
| dataFormat | props/col/data-format | 날짜, 타입의, 열에서, 로딩할, 데이터의 |
| dateStrictMode | props/col/date-strict-mode | 조회시, 날짜, 타입의, 열에서, 설정된 |
| decimalAdjust | props/col/decimal-adjust | 타입, 컬럼, 데이터의, 근사값, 처리방식을 |
| defaultImage | props/col/default-image | 컬럼에서, 이미지를, 로드할때, 서버에, 이미지가 |
| defaults | props/col/defaults | 사용자가, 설정할, 있는, 값을, 첫글자를 |
| defaultValue | props/col/default-value | 컬럼에, 기본, 값을, 설정합니다 |
| disabled | props/col/disabled | 컬럼에, 대해, 버튼, 사용, 가능 |
| editEnum | props/col/edit-enum | 열에서, 드랍리스트가, 펼쳐졌을때, 보여지는, 아이템의 |
| editFormat | props/col/edit-format | 사용자가, 셀을, 더블클릭하여, 편집모드로, 들어갔을때 |
| editMask | props/col/edit-mask | 셀에, 입력가능한, 문자를, 자바스크립트, 정규식을 |
| emptyValue | props/col/empty-value | 셀에, 값이, 없을때, 보여질, 글자를 |
| enum | props/col/enum | 이나, 보여질, 설정합니다 |
| enumDisabled | props/col/enum-disabled | 속성을, 설정한, 아이템들의, 선택, 불가능 |
| enumFilter | props/col/enum-filter | 타입, 셀을, 편집, 드롭다운, 리스트를 |
| enumFormat | props/col/enum-format | 컬럼, 데이터에, 마스킹을, 정의합니다 |
| enumKeys | props/col/enum-keys | 속성을, 설정한, 아이템, 들의, 값을 |
| enumMenu | props/col/enum-menu | 열에서, 드랍리스트, 대신, 메뉴가, 보여지게 |
| enumNoMatchText | props/col/enum-no-match-text | 설정했을, 셀에, 적용할, 대체, 텍스트를 |
| enumStrictMode | props/col/enum-strict-mode | 설정되지, 않은, 값은, 조회, 무시되고 |
| excludeEmpty | props/col/exclude-empty | 소계, 누계행의, 평균, 또는, 건수 |
| expandLevel | props/col/expand-level | 열을, 표시하기, 펼쳐야, 하는, 또는 |
| extend | props/col/extend | 시트, 생성시, 들어가는, 설정, 다른 |
| falseValue | props/col/false-value | 타입, 열에는, 기본적으로, 값만, 입력이 |
| focusCell | props/col/focus-cell | 특정, 열에, 포커스가, 들어갔을때, 포커스 |
| focusRow | props/col/focus-row | 셀을, 클릭시, 보여지는, 커서, 포커스 |
| format | props/col/format | 원본, 데이터에, 마스킹된, 데이터를, 정의합니다 |
| formatFix | props/col/format-fix | 저장, 함수, 호출시, 적용된, 문자열로 |
| formula | props/col/formula | 간에, 계산, 로직을, 문자열이나, 함수를 |
| formulaRow | props/col/formula-row | 영역에, 고정된, 행을, 생성하여, 열의 |
| gmt | props/col/gmt | 열의, 기준, 시간대를, 설정합니다 |
| groupChar | props/col/group-char | 그룹, 기준, 내에서, 특정, 문자를 |
| groupDef | props/col/group-def | 열이, 그룹핑될때, 그룹행에, 적용될, 공통 |
| groupDeleted | props/col/group-deleted | 삭제예정인, 그룹핑에, 포함시킬지, 여부를, 설정합니다 |
| groupEmpty | props/col/group-empty | 또는, 공백, 대해서, 그룹핑을, 할지 |
| groupSingle | props/col/group-single | 해당, 열을, 기준으로, 그룹행, 생성시 |
| groupSole | props/col/group-sole | 해당, 열을, 기준으로, 그룹행, 생성시 |
| groupSubTotal | props/col/group-sub-total | 그룹, 소계, 기능, 사용시, 소계행에 |
| groupWidth | props/col/group-width | 열이, 그룹핑, 그룹, 트리가, 생성될 |
| header | props/col/header | 열의, 헤더, 셀을, 정의합니다 |
| headerCheck | props/col/header-check | 타입이, 열의, 헤더에, 체크, 박스를 |
| hideMobile | props/col/hide-mobile | 모바일, 환경에서, 열의, 보임, 감춤 |
| hintValue | props/col/hint-value | 힌트는, 열의, 너비가, 좁아, 셀의 |
| hRadio | props/col/h-radio | 혹은, 열들, 대해서, 단일, 선택 |
| htmlPostfix | props/col/html-postfix | 열의, 셀의, 문자열, 뒤에, 원하는 |
| htmlPrefix | props/col/html-prefix | 열의, 셀의, 문자열, 앞에, 원하는 |
| icon | props/col/icon | 셀의, 좌측에, 원하는, 아이콘, 이미지 |
| iconAlias | props/col/icon-alias | 접근성, 모드에서, 속성의, 값이, 이미지 |
| iconAlign | props/col/icon-align | 좌측에, 버튼, 혹은, 체크박스, 표시하는 |
| iconSrc | props/col/icon-src | 속성에서, 지정하여, 바로, 사용, 가능하기 |
| iconWidth | props/col/icon-width | 좌측에, 버튼을, 표시하는, 속성, 사용 |
| indent | props/col/indent | 문자열, 정렬, 따라, 좌측, 또는 |
| interval | props/col/interval | 타입, 컬럼의, 달력, 호출시, 시간의 |
| link | props/col/link | 셀에, 데이터를, 태그로, 감싸고, 속성에 |
| linkBase | props/col/link-base | 셀에, 속성이, 있는, 경우, 경로를 |
| linkTarget | props/col/link-target | 셀에, 속성이, 있는, 경우, 클릭시 |
| maskColor | props/col/mask-color | 속성, 설정시, 정규식에, 위배되는, 값이 |
| maxChars | props/col/max-chars | 그룹, 기준, 내에서, 내용의, 글자수를 |
| maxWidth | props/col/max-width | 사용자가, 마우스, 드래그를, 이용하여, 열의 |
| menu | props/col/menu | 마우스, 우측, 버튼, 클릭시, 보여질 |
| menuCursor | props/col/menu-cursor | 값과, 값이, 일치하는, 경우, 해당 |
| minWidth | props/col/min-width | 열의, 최소, 너비를, 단위로, 설정합니다 |
| name | props/col/name | 열에, 이름을, 부여합니다 |
| noButtonInFilter | props/col/no-button-in-filter | 해당, 열의, 필터행에, 생성되는, 혹은 |
| noChanged | props/col/no-changed | 열의, 값이, 변경되었을때, 수정, 상태를 |
| noColor | props/col/no-color | 열의, 기본, 적용된, 배경색이, 무시됩니다 |
| noUpload | props/col/no-upload | 지정한, 열의, 저장, 여부를, 설정합니다 |
| numberSort | props/col/number-sort | 열의, 데이터를, 숫자형식으로, 소팅할지, 여부를 |
| numberStrictMode | props/col/number-strict-mode | 으로, 설정, 조회, 숫자, 타입 |
| origSearchData | props/col/orig-search-data | 조회시, 숫자, 문자, 등의, 데이터 |
| origTfValue | props/col/orig-tf-value | 사용시, 타입, 컬럼의, 값이, 설정한 |
| pos | props/col/pos | 섹션, 내에서, 열의, 인덱스를, 확인합니다 |
| radio | props/col/radio | 혹은, 열들, 간에, 같은, 값을 |
| radioIcon | props/col/radio-icon | 열에서, 아이콘을, 다른, 이미지나, 객체로 |
| radionIconWidth | props/col/radion-icon-width | 속성을, 통해서, 라디오, 아이콘을, 커스텀 |
| radioUncheck | props/col/radio-uncheck | 열에서, 클릭하여, 선택한, 아이템을, 다시 |
| range | props/col/range | 열에서, 복수개를, 선택하게, 할지, 여부를 |
| rawSort | props/col/raw-sort | 소팅시, 적용, 여부를, 설정합니다 |
| recordColSpan | props/col/record-col-span | 멀티레코드, 기능을, 사용하는, 시트에서, 특정 |
| recordHColSpan | props/col/record-h-col-span | 멀티레코드, 기능을, 사용하는, 시트에서, 이상 |
| recordHColTitle | props/col/record-h-col-title | 멀티레코드, 기능을, 사용하는, 시트에서, 설정 |
| recordRowSpan | props/col/record-row-span | 멀티레코드, 기능을, 사용하는, 시트에서, 특정 |
| refresh | props/col/refresh | 열간에, 관계형, 콤보를, 사용할때, 상위 |
| related | props/col/related | 이나, 열들, 간에, 연관성을, 대분류 |
| relWidth | props/col/rel-width | 열의, 상대적, 너비를, 설정합니다 |
| required | props/col/required | 데이터의, 필수, 입력, 항목, 여부를 |
| resultMask | props/col/result-mask | 편집, 종료시, 입력된, 글자를, 검사할 |
| resultMessage | props/col/result-message | 위배되는, 내용이, 입력시, 레이어, 팝업으로 |
| resultMessageTime | props/col/result-message-time | 보여질, 시간을, 설정합니다, 단위 |
| resultText | props/col/result-text | 위배되는, 내용이, 입력시, 으로, 보여줄 |
| section | props/col/section | 열의, 섹션을, 확인합니다 |
| selectCheck | props/col/select-check | 타입, 컬럼을, 드래그하여, 선택시, 선택한 |
| selected | props/col/selected | 열을, 선택하거나, 선택여부를, 확인 |
| showHint | props/col/show-hint | 해당, 열에서, 힌트기능을, 사용할지, 여부를 |
| signFontStyle | props/col/sign-font-style | 숫자형, 컬럼, 타입, 에서, 내용과 |
| size | props/col/size | 열에, 입력가능한, 글자수를, 설정합니다 |
| sizeIgnoreDecimalSep | props/col/size-ignore-decimal-sep | 입력된, 문자열이, 숫자형인, 경우, 설정된 |
| spanned | props/col/spanned | 특정, 열에, 속한, 셀들에, 대해서 |
| spinnerMax | props/col/spinner-max | 사용하는, 열에서, 화살표를, 통한, 입력 |
| spinnerMin | props/col/spinner-min | 사용하는, 열에서, 화살표를, 통한, 입력 |
| spinnerStep | props/col/spinner-step | 사용하는, 열에서, 입력, 값의, 증감 |
| spinnerVisible | props/col/spinner-visible | 열에서, 편집, 화살표를, 표시합니다 |
| stackCol | props/col/stack-col | 열에서, 체크를, 화면의, 하단에, 행을 |
| suggest | props/col/suggest | 포탈, 사이트, 검색창의, 자동완성과, 마찬가지로 |
| suggestDelay | props/col/suggest-delay | 설정된, 컬럼에서, 글자를, 입력시, 나타나기 |
| suggestMin | props/col/suggest-min | 속성을, 설정한, 메뉴를, 보여주기, 위한 |
| suggestType | props/col/suggest-type | 속성, 사용과, 관련한, 다양한, 추가기능을 |
| textColor | props/col/text-color | 지정한, 열에, 글자색을, 설정합니다 |
| textFont | props/col/text-font | 특정, 열의, 설정합니다 |
| textSize | props/col/text-size | 지정한, 열의, 글자, 크기를, 설정합니다 |
| textStyle | props/col/text-style | 지정한, 열의, 글자에, 숫자로, 설정합니다 |
| timePicker | props/col/time-picker | 시분초, 컬럼에, 아이콘이, 생성됩니다, 아이콘 |
| tip | props/col/tip | 위에, 마우스, 커서, 오버시, 풍선도움말을 |
| tipClass | props/col/tip-class | 풍선도움말, 객체에, 원하는, 클래스를, 적용하여 |
| tipPosition | props/col/tip-position | 풍선도움말, 객체의, 위치나, 크기, 정렬을 |
| tipValue | props/col/tip-value | 열의, 내용이, 특정값일때, 풍선도움말로, 보여줄 |
| trueValue | props/col/true-value | 타입, 열에는, 기본적으로, 값만, 입력이 |
| type | props/col/type | 셀이, 갖고있는, 데이터, 유형을, 의미합니다 |
| typePrefix | props/col/type-prefix | 속성을, 사용자, 지정대로, 사용, 있게 |
| uncheck | props/col/uncheck | 열이, 여러개, 있을때, 내에서, 하나의 |
| unescapeHtml | props/col/unescape-html | 타입, 컬럼, 데이터, 조회에서, 등의 |
| useFilterDialog | props/col/use-filter-dialog | 필터, 다이얼로그를, 사용할지, 여부를, 결정합니다 |
| useTfValue | props/col/use-tf-value | 컬럼에, 설정하는, 값을, 그대로, 시트 |
| vAlign | props/col/v-align | 안에, 문자열, 상하, 정렬을, 설정합니다 |
| visible | props/col/visible | 열의, 보임, 감춤, 여부를, 설정합니다 |
| width | props/col/width | 열의, 너비를, 단위로, 설정합니다 |
| widthPad | props/col/width-pad | 속성을, 이용하여, 우측에, 작은, 버튼을 |
| wrap | props/col/wrap | 셀에, 내용이, 많아, 뒷부분이, 안보여질 |

## 행 속성 (Row Properties) {#row-property}

총 54개의 문서

| KEY | PATH | ALIAS |
|-----|------|-------|
| added | props/row/added | 함수를, 추가된, 행은, 내부적으로, 해당 |
| align | props/row/align | 전체의, 문자열, 정렬을, 설정합니다 |
| alternateClass | props/row/alternate-class | 가독성을, 높이기, 위해서, 홀수행, 짝수행 |
| alternateColor | props/row/alternate-color | 가독성을, 높이기, 위해서, 홀수행, 짝수행 |
| attributeFormula | props/row/attribute-formula | 행의, 각종, 속성, 설정할 |
| buttonWidth | props/row/button-width | 이고, 속성의, 값이, 경우, 셀에 |
| calcOrder | props/row/calc-order | 포뮬러, 일반, 혹은, 설정된, 열들에 |
| canDrag | props/row/can-drag | 행의, 가능여부를, 설정합니다 |
| canEdit | props/row/can-edit | 행에, 편집, 가능, 여부를, 설정합니다 |
| canFilter | props/row/can-filter | 특정행에, 필터, 적용, 여부를, 설정합니다 |
| canFocus | props/row/can-focus | 행에, 포커스, 가능, 여부를, 설정합니다 |
| canFormula | props/row/can-formula | 행에, 동작, 여부를, 설정합니다 |
| canGroup | props/row/can-group | 특정행에, 그룹핑, 허용, 여부를, 설정합니다 |
| canPrint | props/row/can-print | 행의, 프린트, 가능, 여부 |
| canSelect | props/row/can-select | 행의, 선택, 가능여부를, 설정합니다, 드래그를 |
| canSort | props/row/can-sort | 트리사용시, 자식행들에, 소팅, 가능, 불가능 |
| changed | props/row/changed | 행의, 변경, 여부를, 나타냅니다 |
| class | props/row/class | 행에, 포함된, 셀에, 커스텀, 클래스 |
| color | props/row/color | 행의, 배경색상을, 설정합니다 |
| deleted | props/row/deleted | 함수, 호출시, 해당, 행에, 속성값이 |
| expanded | props/row/expanded | 트리, 기능, 사용시, 행의, 접힘 |
| expandLevel | props/row/expand-level | 행을, 표시하기, 펼쳐야, 하는, 또는 |
| focusCell | props/row/focus-cell | 특정, 셀에, 포커스가, 들어갔을, 포커스 |
| focusRow | props/row/focus-row | 데이터, 셀을, 클릭시, 보여지는, 커서 |
| haveChild | props/row/have-child | 동적, 로드를, 행에, 설정시, 있는 |
| height | props/row/height | 행의, 높이를, 설정합니다 |
| hidden | props/row/hidden | 행의, 보임, 감춤, 여부를, 나타냅니다 |
| hintValue | props/row/hint-value | 힌트는, 열의, 너비보다, 셀의, 내용이 |
| htmlPostfix | props/row/html-postfix | 전체, 셀의, 문자열, 뒤에, 원하는 |
| htmlPrefix | props/row/html-prefix | 전체, 셀의, 문자열, 앞에, 원하는 |
| indent | props/row/indent | 전체의, 문자열, 들여쓰기를, 설정합니다 |
| kind | props/row/kind | 행이, 갖고, 있는, 기능을, 의미합니다 |
| maxHeight | props/row/max-height | 행의, 최대, 높이를, 설정합니다 |
| menu | props/row/menu | 마우스, 우측, 버튼, 클릭시, 보여질 |
| minHeight | props/row/min-height | 설정된, 행의, 최소, 높이를, 설정합니다 |
| noCalculate | props/row/no-calculate | 특정행에, 소계, 또는, 합계, 계산 |
| noColor | props/row/no-color | 행의, 기본, 적용된, 배경색이, 무시됩니다 |
| noUpload | props/row/no-upload | 지정한, 행의, 저장, 여부를, 설정합니다 |
| rowMerge | props/row/row-merge | 데이터, 영역, 헤더, 영역에서, 기준 |
| selected | props/row/selected | 행을, 선택합니다 |
| showHint | props/row/show-hint | 힌트는, 열의, 너비보다, 셀의, 내용이 |
| sortIcons | props/row/sort-icons | 정렬, 아이콘의, 화면, 표시여부와, 동작을 |
| sortPos | props/row/sort-pos | 소팅시, 지정한, 행의, 위치를, 고정합니다 |
| spanned | props/row/spanned | 내에서, 좌우, 열간에, 병합을, 허용할지 |
| textColor | props/row/text-color | 지정한, 행의, 글자색을, 설정합니다 |
| textFont | props/row/text-font | 특정행의, 설정합니다 |
| textSize | props/row/text-size | 지정한, 행의, 글자, 크기를, 설정합니다 |
| textStyle | props/row/text-style | 지정한, 행의, 글자에, 숫자로, 설정합니다 |
| tip | props/row/tip | 위에, 마우스, 커서, 오버시, 풍선도움말을 |
| tipClass | props/row/tip-class | 풍선도움말, 객체에, 원하는, 클래스, 적용하여 |
| tipPosition | props/row/tip-position | 풍선도움말, 객체의, 위치나, 크기, 정렬을 |
| vAlign | props/row/v-align | 전체의, 문자열, 상하, 정렬을, 설정합니다 |
| visible | props/row/visible | 행의, 보임, 감춤, 여부를, 설정합니다 |
| wrap | props/row/wrap | 셀의, 내용이, 열의, 너비보다, 많은 |

## 셀 속성 (Cell Properties) {#cell-property}

총 115개의 문서

| KEY | PATH | ALIAS |
|-----|------|-------|
| accept | props/cell/accept | 셀에, 업로드를, 허용할, 파일, 형식을 |
| acceptEnters | props/cell/accept-enters | 타입이, 셀에서, 편집중, 입력시, 동작에 |
| addClass | props/cell/add-class | 열의, 이고, 속성의, 값이, 경우 |
| Alias | props/cell/Alias | 열의, 경우, 실제, 파일명, 대신 |
| align | props/cell/align | 문자열, 좌우, 정렬을, 설정합니다 |
| attributeFormula | props/cell/attribute-formula | 셀에, 설정, 가능한, 여러가지, 속성 |
| autoCalendar | props/cell/auto-calendar | 셀에, 대해, 사용자가, 편집모드로, 들어갈때 |
| boolGroup | props/cell/bool-group | 내에서, 동일, 그룹으로, 묶을지, 여부를 |
| boolIcon | props/cell/bool-icon | 셀에서, 체크, 언체크, 아이콘을, 다른 |
| boolIconWidth | props/cell/bool-icon-width | 속성을, 통해서, 체크박스, 아이콘을, 커스텀 |
| button | props/cell/button | 셀의, 우측에, 원하는, 아이콘이미지, 체크박스 |
| buttonAlias | props/cell/button-alias | 접근성, 모드에서, 속성의, 값이, 이미지 |
| buttonClass | props/cell/button-class | 열의, 이고, 속성의, 값이, 경우 |
| buttonText | props/cell/button-text | 속성의, 값이, 이거나, 경우, 버튼에 |
| buttonWidth | props/cell/button-width | 이고, 속성의, 값이, 경우, 셀에 |
| canEdit | props/cell/can-edit | 셀에, 편집, 가능, 여부를, 설정합니다 |
| canFocus | props/cell/can-focus | 셀에, 클릭이나, 키보드를, 통한, 이동시 |
| canPaste | props/cell/can-paste | 행에서, 특정, 열에, 붙여넣기를, 제한합니다 |
| canSelect | props/cell/can-select | 사용자가, 마우스, 드래그를, 데이터, 영역의 |
| caseSensitive | props/cell/case-sensitive | 소팅시, 혹은, 필터, 기능, 사용시 |
| changed | props/cell/changed | 셀의, 변경, 여부를, 나타냅니다 |
| checked | props/cell/checked | 속성이나, 속성의, 값을, 설정하여, 안에 |
| class | props/cell/class | 셀에, 적용할, 커스텀, 명을, 설정합니다 |
| clear | props/cell/clear | 간에, 관계형, 콤보를, 사용할, 상위 |
| colMerge | props/cell/col-merge | 헤더, 영역에서, 기준, 병합, 실행 |
| color | props/cell/color | 셀의, 배경, 색상을, 설정합니다 |
| copyValue | props/cell/copy-value | 셀의, 원래, 대신, 혹은, 클립보드로 |
| cursor | props/cell/cursor | 위에, 마우스, 커서가, 호버시, 커서의 |
| customFormat | props/cell/custom-format | 원본, 데이터에, 마스킹을, 정의합니다 |
| dataFormat | props/cell/data-format | 셀에, 로딩할, 데이터의, 포매팅을, 설정합니다 |
| dateStrictMode | props/cell/date-strict-mode | 조회시, 셀에서, 설정된, 경우, 포맷과 |
| decimalAdjust | props/cell/decimal-adjust | 타입, 컬럼, 데이터의, 근사값, 처리방식을 |
| defaultFilter | props/cell/default-filter | 필터행, 셀에만, 사용할, 있는, 기능으로 |
| disabled | props/cell/disabled | 셀에, 대해, 버튼, 사용, 가능 |
| editEnum | props/cell/edit-enum | 셀에서, 드랍리스트가, 펼쳐졌을때, 보여지는, 아이템의 |
| editFormat | props/cell/edit-format | 사용자가, 셀을, 더블클릭하여, 편집모드로, 들어갔을때 |
| editMask | props/cell/edit-mask | 셀에, 입력가능한, 문자를, 자바스크립트, 정규식을 |
| emptyValue | props/cell/empty-value | 셀에, 값이, 없을때, 보여질, 글자를 |
| enum | props/cell/enum | 셀의, 이나, 보여질, 설정합니다 |
| enumDisabled | props/cell/enum-disabled | 속성을, 설정한, 아이템들의, 선택, 불가능 |
| enumFilter | props/cell/enum-filter | 타입, 셀을, 편집, 드롭다운, 리스트를 |
| enumKeys | props/cell/enum-keys | 속성을, 설정한, 아이템들의, 값을, 설정합니다 |
| enumMenu | props/cell/enum-menu | 셀에서, 드랍리스트, 대신, 메뉴가, 보여지게 |
| error | props/cell/error | 셀에, 수정값이, 선언한, 유효성, 검사에 |
| expandCols | props/cell/expand-cols | 또는, 설정된, 버튼을, 클릭시, 표시하거나 |
| expanded | props/cell/expanded | 사용하는, 접힘, 펼침, 여부를, 설정합니다 |
| expandRows | props/cell/expand-rows | 또는, 설정된, 버튼을, 클릭시, 표시하거나 |
| exportValue | props/cell/export-value | 엑셀, 다운로드, 보여질, 글자를, 설정합니다 |
| filterEnumKeys | props/cell/filter-enum-keys | 타입의, 컬럼에서, 필터링시, 문자열, 아닌 |
| filterValue | props/cell/filter-value | 셀의, 원래, 대신, 필터링시, 사용할 |
| focusCell | props/cell/focus-cell | 특정, 셀에, 포커스가, 들어갔을때, 포커스 |
| focusRow | props/cell/focus-row | 셀을, 클릭시, 보여지는, 커서, 포커스 |
| format | props/cell/format | 원본, 데이터에, 마스킹된, 데이터를, 정의합니다 |
| gmt | props/cell/gmt | 셀의, 기준, 시간대를, 설정합니다 |
| hintValue | props/cell/hint-value | 힌트는, 열의, 너비가, 좁아, 셀의 |
| htmlPostfix | props/cell/html-postfix | 셀의, 문자열, 뒤에, 원하는, 태그를 |
| htmlPrefix | props/cell/html-prefix | 셀의, 문자열, 앞에, 원하는, 태그를 |
| icon | props/cell/icon | 셀의, 좌측에, 원하는, 아이콘, 이미지 |
| iconAlias | props/cell/icon-alias | 접근성, 모드에서, 속성의, 값이, 이미지 |
| iconAlign | props/cell/icon-align | 좌측에, 버튼, 혹은, 체크박스, 표시하는 |
| iconWidth | props/cell/icon-width | 좌측에, 버튼을, 표시하는, 속성, 사용시 |
| indent | props/cell/indent | 문자열, 정렬, 따라, 좌측, 또는 |
| link | props/cell/link | 셀에, 데이터를, 태그로, 감싸고, 속성에 |
| linkBase | props/cell/link-base | 셀에, 속성이, 있는, 경우, 경로를 |
| linkTarget | props/cell/link-target | 셀에, 속성이, 있는, 경우, 클릭시 |
| maskColor | props/cell/mask-color | 속성, 설정시, 정규식에, 위배되는, 값이 |
| menu | props/cell/menu | 특정, 위에서, 마우스, 우측, 버튼 |
| menuItems | props/cell/menu-items | 셀의, 보여질, 필터, 아이콘, 메뉴를 |
| merge | props/cell/merge | 같은, 안에, 다른, 셀들의, 값을 |
| noChanged | props/cell/no-changed | 셀의, 값이, 변경되었을때, 수정, 상태를 |
| noColor | props/cell/no-color | 셀에, 적용된, 배경색이, 무시됩니다 |
| numberSort | props/cell/number-sort | 셀의, 데이터를, 숫자형식으로, 소팅할지, 여부를 |
| numberStrictMode | props/cell/number-strict-mode | 으로, 설정, 조회, 숫자, 타입 |
| orig | props/cell/orig | 셀에, 최초, 로딩된, 데이터를, 담고 |
| path | props/cell/path | 열의, 경우, 파일을, 다운받을, 경로를 |
| radio | props/cell/radio | 셀들, 간에, 같은, 값을, 부여한 |
| radioIcon | props/cell/radio-icon | 셀에서, 아이콘을, 다른, 이미지나, 객체로 |
| radioIconWidth | props/cell/radio-icon-width | 속성을, 통해서, 라디오, 아이콘을, 커스텀 |
| radioUncheck | props/cell/radio-uncheck | 셀에서, 클릭하여, 선택한, 아이템을, 다시 |
| rawSort | props/cell/raw-sort | 소팅시, 적용된, 데이터를, 기준으로, 소팅할지 |
| refresh | props/cell/refresh | 간에, 관계형, 콤보를, 사용할, 상위 |
| related | props/cell/related | 이나, 열들, 간에, 연관성을, 대분류 |
| resultMask | props/cell/result-mask | 편집, 종료시, 입력된, 글자를, 검사할 |
| resultMessage | props/cell/result-message | 위배되는, 내용이, 입력시, 레이어, 팝업으로 |
| resultMessageTime | props/cell/result-message-time | 보여질, 시간, 설정합니다, 단위 |
| resultText | props/cell/result-text | 위배되는, 내용이, 입력시, 으로, 보여줄 |
| rowSpan | props/cell/row-span | 특정, 셀을, 기준으로, 아래쪽으로, 합쳐질 |
| selected | props/cell/selected | 셀을, 선택하거나, 선택여부를, 확인 |
| showHint | props/cell/show-hint | 해당, 셀에서, 힌트기능을, 사용할지, 여부를 |
| shrinkToFit | props/cell/shrink-to-fit | 이용하여, 엑셀을, 다운로드, 셀에, 내용이 |
| size | props/cell/size | 셀에, 입력가능한, 글자수를, 설정합니다 |
| sizeIgnoreDecimalSep | props/cell/size-ignore-decimal-sep | 입력된, 문자열이, 숫자형인, 경우, 설정된 |
| sortValue | props/cell/sort-value | 셀의, 원래, 대신, 소팅시, 사용할 |
| span | props/cell/span | 특정, 셀을, 기준으로, 오른쪽으로, 합쳐질 |
| spinnerMax | props/cell/spinner-max | 사용하는, 셀에서, 화살표를, 통한, 입력 |
| spinnerMin | props/cell/spinner-min | 사용하는, 셀에서, 화살표를, 통한, 입력 |
| spinnerStep | props/cell/spinner-step | 사용하는, 셀에서, 입력, 값의, 증감 |
| spinnerVisible | props/cell/spinner-visible | 셀에서, 편집, 화살표를, 표시합니다 |
| suggest | props/cell/suggest | 포탈, 사이트, 검색창의, 자동완성과, 마찬가지로 |
| suggestDelay | props/cell/suggest-delay | 설정된, 셀에서, 글자를, 입력시, 나타나기 |
| suggestMin | props/cell/suggest-min | 설정한, 메뉴를, 보여주기, 위한, 최소 |
| suggestType | props/cell/suggest-type | 속성, 사용과, 관련한, 다양한, 추가기능을 |
| textColor | props/cell/text-color | 지정한, 셀에, 글자색을, 설정합니다 |
| textFont | props/cell/text-font | 특정, 셀의, 설정합니다 |
| textSize | props/cell/text-size | 지정한, 셀의, 글자, 크기를, 설정합니다 |
| textStyle | props/cell/text-style | 지정한, 셀의, 글자에, 숫자로, 설정합니다 |
| tip | props/cell/tip | 위에, 마우스, 커서, 오버시, 풍선도움말을 |
| tipClass | props/cell/tip-class | 풍선도움말, 객체에, 원하는, 클래스를, 적용하여 |
| tipPosition | props/cell/tip-position | 풍선도움말, 객체의, 위치나, 크기, 정렬을 |
| tipValue | props/cell/tip-value | 셀의, 내용이, 특정값일때, 풍선도움말로, 보여줄 |
| type | props/cell/type | 셀이, 갖고있는, 데이터, 유형을, 의미합니다 |
| uncheck | props/cell/uncheck | 셀이, 여러, 있을때, 내에서, 하나의 |
| vAlign | props/cell/v-align | 안에, 문자열, 상하, 정렬을, 설정합니다 |
| visible | props/cell/visible | 데이터의, 보임, 감춤, 여부를, 설정합니다 |
| wrap | props/cell/wrap | 셀에, 내용이, 많아, 뒷부분이, 안보여질때 |

## 이벤트 속성 (Event Properties) {#event-property}

총 4개의 문서

| KEY | PATH | ALIAS |
|-----|------|-------|
| onChange | props/event/on-change | 값을, 변경했을, 값과, 편집된, 셀값이 |
| onClick | props/event/on-click | 클릭시, 호출되는, 이벤트입니다 |
| onClickSide | props/event/on-click-side | 또는, 속성을, 사용하는, 셀에, 만들어지는 |
| onSame | props/event/on-same | 값을, 변경했을, 값과, 편집된, 셀값이 |

## 정적 멤버 (Static Members) {#static-member}

총 17개의 문서

| KEY | PATH | ALIAS |
|-----|------|-------|
| commonOptions | static/common-options | 모든, 시트에, 공통으로, 설정할, 초기 |
| create | static/create | 지정한, 위치에, 시트객체를, 생성합니다 |
| dateToString | static/date-to-string | 날짜, 객체, 유닉스, 시간, 부터 |
| disposeAll | static/dispose-all | 객체, 안에, 포함된, 모든, 시트객체 |
| hasSheet | static/has-sheet | 특정, 아이디를, 가진, 시트가, 있는지 |
| numberToString | static/number-to-string | 숫자를, 주어진, 포맷에, 맞게, 마스킹된 |
| onBeforeCreate | static/on-before-create | 함수가, 호출되고, 시트가, 생성되기, 전에 |
| onRenderFirstFinishAll | static/on-render-first-finish-all | 객체에, 선언된, 시트가, 모두, 생성된 |
| querySelector | static/query-selector | 선택자에, 따라, 태그를, 반환하는, 함수를 |
| removeHtmlTag | static/remove-html-tag | 인자로, 들어온, 문자열에서, 형식의, 문자열을 |
| showCalendar | static/show-calendar | 열의, 타입을, 설정시, 사용할, 있는 |
| showDialog | static/show-dialog | 시트가, 제공하는, 다이얼로그, 레이어팝업, 생성합니다 |
| showMenu | static/show-menu | 원하는, 위치에, 컨텍스트, 메뉴를, 띄웁니다 |
| static | static/static | 객체, 란, 파일을, 화면에, 추가하면 |
| stringToDate | static/string-to-date | 문자열을, 지정한, 포맷으로, 파싱하여, 객체 |
| stringToNumber | static/string-to-number | 문자열을, 지정한, 포맷으로, 파싱하여, 숫자로 |
| version | static/version | 시트의, 제품, 버전을, 확인합니다 |

## 데이터 구조 (Data Structure) {#data-structure}

총 1개의 문서

| KEY | PATH | ALIAS |
|-----|------|-------|
| 1dataStructure | dataStructure/1data-structure | 데이터, 규격 |

## 스타일 가이드 (Style Guide) {#style-guide}

총 12개의 문서

| KEY | PATH | ALIAS |
|-----|------|-------|
| calendar | styleGuide/calendar | 달력 |
| colType | styleGuide/col-type | 컬럼, 유형에, 따른, 적용 |
| css | styleGuide/css | 기본, 적용 |
| data | styleGuide/data | 데이터, 본문, 영역 |
| etc | styleGuide/etc | 기타, 스타일, 적용 |
| header | styleGuide/header | 헤더, 영역 |
| headerIcon | styleGuide/header-icon | 헤더, 영역, 아이콘 |
| icon | styleGuide/icon | 기타, 아이콘 |
| layout | styleGuide/layout | 각, 영역별, 명칭, 소개 |
| rowType | styleGuide/row-type | 행의, 유형에, 따른, 적용 |
| selection | styleGuide/selection | 에, 따른, 스타일, 적용 |
| theme | styleGuide/theme | 테마, 적용 |

## 부록 (Appendix) {#appendix}

총 30개의 문서

| KEY | PATH | ALIAS |
|-----|------|-------|
| basicCourse | appx/basic-course | 기초, 개발자, 교육, 시트에, 여러개의 |
| design | appx/design | 디자인, 변경, 적용하기, 기본, 테마는 |
| dialog | appx/dialog | 지정한, 위치에, 레이어팝업, 형식의, 다이얼로그를 |
| eventError | appx/event-error | 객체, 이벤트, 호출, 에러가, 발생하면 |
| fastloadConstraints | appx/fastload-constraints | 가상, 스크롤, 조회에, 대한, 제약 |
| fileTypeUpload | appx/file-type-upload | 업로드, 또는, 셀의, 설정, 파일 |
| format | appx/format | 데이터가, 화면에, 보여질, 형식을, 정의합니다 |
| formula | appx/formula | 계산된, 결과를, 가지는, 셀은, 기본적으로 |
| header | appx/header | 여러줄의, 헤더를, 설정하거나, 헤더에, 내용을 |
| ibsheet7Migration | appx/ibsheet7-migration | - |
| ibsheet8Actions | appx/ibsheet8-actions | 시트에, 포커스가, 있는, 상태에서, 키보드 |
| importExport | appx/import-export | 엑셀파일, 업로드, 다운로드, 시트의, 내용을 |
| initStructure | appx/init-structure | 시트, 객체, 구조 |
| kind | appx/kind | 시트, 내에, 모든, 행은, 각각의 |
| makeLoop | appx/make-loop | 문, 만들기, 조회된, 데이터, 전체에 |
| menu | appx/menu | 마우스, 우측, 버튼, 클릭시, 보여질 |
| pageObject | appx/page-object | 페이지, 객체, 값이, 아닌, 경우 |
| position | appx/position | 달력, 이나, 컨텍스트, 메뉴, 다이얼로그 |
| rowObject | appx/row-object | 행, 객체, 등의, 함수를, 얻게 |
| sharedEvent | appx/shared-event | 공통, 이벤트, 처리, 방법, 시스템 |
| sharepointGoogledriveExport | appx/sharepoint-googledrive-export | 로, 파일, 다운로드하기, 파일을, 다운로드하는 |
| sheetHeight | appx/sheet-height | 시트객체, 높이, 설정, 시트객체의, 높이를 |
| solid | appx/solid | 시트, 내에, 헤더, 주변이나, 푸터 |
| spaReact | appx/spa-react | 환경에서, 개발, 방법을, 가이드 |
| spaVue | appx/spa-vue | 환경에서, 개발, 방법을, 가이드 |
| spaVueCaution | appx/spa-vue-caution | 환경에서, 개발, 시, 주의사항, 컴포넌트를 |
| spreadSheet | appx/spread-sheet | 스프레드, 시트, 엑셀과, 유사한, 형식의 |
| subGrid | appx/sub-grid | 행의, 자식으로, 그리드를, 표시하는, 기능입니다 |
| type | appx/type | 열의, 종류를, 정의합니다 |
| useLoader | appx/use-loader | 를, 이용한, 개발, 같이, 하나의 |

## index {#index}

총 18개의 문서

| KEY | PATH | ALIAS |
|-----|------|-------|
| index | appx/index | - |
| index | dataStructure/index | - |
| index | events/index | - |
| index | funcs/common/index | - |
| index | funcs/core/index | - |
| index | funcs/dialog/index | - |
| index | funcs/excel/index | - |
| index | funcs/index | - |
| index | intro/index | - |
| index | props/cell/index | - |
| index | props/cfg/index | - |
| index | props/col/index | - |
| index | props/event/index | - |
| index | props/row/index | - |
| index | start/index | - |
| index | static/index | - |
| index | styleGuide/index | - |
| index | userGuide/index | - |
