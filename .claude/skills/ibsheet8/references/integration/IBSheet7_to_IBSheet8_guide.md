# IBSheet7 to IBSheet8 Migration Guide

> **Purpose**: This guide maps IBSheet7 APIs, events, properties, and configuration to their IBSheet8 equivalents. Use this when converting existing IBSheet7 code to IBSheet8.

---

## Key Migration Concepts

### 1. Initialization Change
IBSheet7 uses two separate functions (`SetConfig` + `InitColumns`). IBSheet8 uses a single `IBSheet.create()` call with a unified options object.

```javascript
// IBSheet7
mySheet.SetConfig({ Alternate: 1, SearchMode: 2 });
mySheet.InitHeaders([{ Text: "Name|Age", Align: "Center" }]);
mySheet.InitColumns([{ Type: "Text", SaveName: "name" }, { Type: "Int", SaveName: "age" }]);

// IBSheet8
IBSheet.create({
  id: "mySheet",
  el: "sheetDIV",
  options: {
    Cfg: { Alternate: 2, SearchMode: 2 },
    Cols: [
      { Header: "Name", Name: "name", Type: "Text" },
      { Header: "Age", Name: "age", Type: "Int" }
    ],
    Events: { }
  }
});
```

### 2. Row Identification: Index Number → Row Object
IBSheet7 uses row index numbers (starting from 0 including header). IBSheet8 uses row objects.

```javascript
// IBSheet7 - row index (number)
var value = mySheet.GetCellValue(5, "colName");

// IBSheet8 - row object
var row = mySheet.getRowByIndex(5);  // returns row object
var value = mySheet.getValue(row, "colName");
```

**Migration helper**: `getRowByIndex7(index)` converts IBSheet7-style row index to IBSheet8 row object.

### 3. Column Identification: Index Number → Column Name String
IBSheet7 allows both column index numbers and SaveName strings. IBSheet8 uses only column Name strings.

```javascript
// IBSheet7 - column index or SaveName
mySheet.GetCellValue(5, 3);       // by index
mySheet.GetCellValue(5, "name");  // by SaveName

// IBSheet8 - column Name only
mySheet.getValue(row, "name");
```

**Migration helper**: `getColByIndex7(index)` converts IBSheet7-style column index to IBSheet8 column name.

### 4. Property Access: Dedicated Functions → getAttribute/setAttribute
IBSheet7 has many dedicated get/set functions for cell, row, and column properties. IBSheet8 consolidates these into `getAttribute()` and `setAttribute()`.

```javascript
// IBSheet7 - dedicated functions for each property
mySheet.SetCellBackColor(5, "col1", "#FF0000");
mySheet.SetRowBackColor(7, "#00FF00");
mySheet.SetColFontBold("col1", true);

// IBSheet8 - unified getAttribute/setAttribute
mySheet.setAttribute(row, "col1", "Color", "#FF0000");
mySheet.setAttribute(row, null, "Color", "#00FF00");       // null col = entire row
mySheet.setAttribute(null, "col1", "TextStyle", 1);        // null row = entire column
```

### 5. Separator Change
IBSheet7 uses `|` as separator for multi-value strings. IBSheet8 uses `,`.

```javascript
// IBSheet7
mySheet.ColumnSort("2|3|4", "DESC");

// IBSheet8
mySheet.doSort("-col2,-col3,-col4");  // prefix "-" means DESC
```

### 6. Event Pattern Change
IBSheet7 uses global function naming convention. IBSheet8 registers events in the options object, and all events receive a single `evt` object parameter.

```javascript
// IBSheet7 - global function
function mySheet_OnChange(Row, Col, Value, OldValue, RaiseFlag) {
  // multiple parameters
}

// IBSheet8 - event registration in options
Events: {
  onAfterChange: function(evt) {
    // single evt object: evt.sheet, evt.row, evt.col, evt.val
    // previous value: evt.row[evt.col + "BeforeVal"]
  }
}
```

**Important**: In IBSheet8, returning `1` (or `true`) from "onBefore~" events cancels/skips the action.

### 7. IBSheet7 → IBSheet8 Property Name Convention Changes

| IBSheet7 | IBSheet8 | Context |
|----------|----------|---------|
| SaveName | Name | Column identifier |
| Hidden: 1 | Visible: 0 | Column visibility (inverted logic) |
| Edit | CanEdit | Editability |
| Focus | CanFocus | Focusability |
| Sort | CanSort | Sortability |
| BackColor | Color | Background color |
| FontColor | TextColor | Font color |
| FontBold | TextStyle: 1 | Font style (bitmask) |
| FontUnderline | TextStyle: 4 | Font style (bitmask) |
| ComboCode | EnumKeys | Combo value codes |
| ComboText | Enum | Combo display texts |
| AllowNull | CanEmpty | Allow empty value |
| Save | NoUpload | Save control (inverted) |
| AutoSum / SumType | FormulaRow | Summary formula |
| CalcLogic | Formula | Cell formula |
| EditLen | Size | Max input length |
| KeyField | Required | Required field |
| InsertEdit | AddEdit | Edit on insert |
| UpdateEdit | ChangeEdit | Edit on update |
| Transaction | NoChanged | Change tracking control |

---

## SetConfig → Cfg Property Mapping

These IBSheet7 `SetConfig()` parameters map to IBSheet8 `Cfg` properties set during `IBSheet.create()`.

| IBSheet7 (SetConfig) | IBSheet8 | Notes |
|----------------------|----------|-------|
| Alternate | (Cfg) Alternate | Value differs: IBSheet7=1, IBSheet8=2 |
| AutoCloseDialog | (Cfg) AutoCloseDialog | |
| AutoFitColWidth | (Col) RelWidth | Different approach: set RelWidth per column for proportional sizing |
| AutoSumCalcMode | (Cfg) CalcMergeMode | Value differs: IBSheet7=1, IBSheet8=3 |
| CachePageCount | (Cfg) MaxPages | |
| ClearFilterOff | (Cfg) ClearFilterOff | |
| ClickHeaderMapping | (Cfg) SelFocusColor | |
| ClickHeaderMappingColor | CSS `.IBheader-Focus` class | |
| ComboMaxHeight | (Cfg) MenuMaxHeight | |
| CopyEdit | (Cfg) CopyEdit | |
| CountFormat | (Cfg) InfoRowConfig.Format | Token names differ: `BOTTOMDATA`→`BOTTOMDATAROW` |
| CountPosition | (Cfg) InfoRowConfig: Visible, Space, Layout | See InfoRowConfig pattern below |
| CurrentColInfo | `setCurrentInfo()` method | |
| DataRowHeight | (Def Row) Height | |
| DataRowMerge | (Cfg) DataMerge, (Row) RowMerge | IBSheet8 DataMerge≥2 enables horizontal merge by default |
| DragCell | (Cfg) DragCell | |
| DragMode | (Cfg) CanDrag | |
| DragRowSection | (Cfg) SelectingCells | SelectingCells:0 = row selection |
| EditEnterBehavior | (Cfg) EnterMode | "down"→1, "none"→0, "tab"→6 |
| ExportMode | (Cfg) AutoExcelMode | |
| FilterRow | (Cfg) ShowFilter | |
| FocusSumRow | (Def FormulaRow) CanFocus: 1 | |
| FrozenCol | LeftCols property | Set columns in LeftCols array |
| FrozenColRight | RightCols property | Set columns in RightCols array |
| GroupSort | (Cfg) GroupSortMain | |
| HeaderCheckMode | (Cfg) HeaderCheckMode | |
| HeaderCheckSync | Always synced | Default behavior in IBSheet8 |
| HeaderMergeMode | (Cfg) HeaderMerge | |
| HeaderRowHeight | (Def Header) Height | |
| JustCheck | (Cfg) ExactCheck | |
| KeyFieldPosition | (Cfg) RequiredPosition | |
| MaxSort | (Cfg) MaxSort | |
| MergeSheet | (Cfg) HeaderMerge, DataMerge, PrevColumnMerge | Split into separate properties |
| MouseHoverMode | (Cfg) Hover | |
| NoFocusMode | (Def Row, Def Col) CanFocus | |
| Page | (Cfg) PageLength | |
| PagingPosition | (Cfg) InfoRowConfig | |
| PrevColumnMergeMode | (Cfg) PrevColumnMergeMode | |
| ScrollOverSheet | (Cfg) ScrollOverSheet | |
| SearchMode | (Cfg) SearchMode | |
| SelectionSummary | (Cfg) SelectionSummary | |
| SizeMode | (Cfg) NoVScroll, NoHScroll | |
| SumPosition | `setFormulaRowPosition()` method | Function only, not config |
| TabStop | (Cfg) TabStop | |
| TableCaption | (Cfg) TableCaption | Private property |
| TableSummary | (Cfg) TableSummary | Private property |
| ToolTip / ToolTipText | (Def Row) Tip | |
| TouchScrolling | (Cfg) TouchScrolling | |
| UpdateMergeCells | (Cfg) MergeCellsMatch | |
| UseDefaultSortImage | (Cfg) SortIcons | |
| UseEditMask | (Cfg) EditMaskFunc | |
| UseGroupActionMenu | (Def Group) Menu | |
| UseHeaderActionMenu | (Def Header) Menu | |
| UseHeaderSortCancel | (Cfg) UseHeaderSortCancel | |
| UseNoDataRow | (Cfg) NoDataMessage | |

### SetConfig Properties Not Supported in IBSheet8

ChildPage, ClearRowBackColorUID, ColPage, Convert2ByteChar, CookieInfoSave, DeferredHScroll, DeferredVScroll, EditTabInsert, FastRender, FilterOperator, FitSizeColHeaderMode, FitSizeColMode, JustCheckSize, NextPageCall, SearchXMLbyColOrder, SortEventMode, TreeDragIconMode, TreeNodeToggleMode, VscrollMode, UsePivotDialog, ChildGrid (completely different approach), ColPage, EditArrowBehavior (behavior differs significantly)

---

## InitColumns → Col Property Mapping

These IBSheet7 `InitColumns` parameters map to IBSheet8 column properties in the `Cols` array.

| IBSheet7 (InitColumns) | IBSheet8 (Col) | Notes |
|------------------------|----------------|-------|
| AcceptKeys | EditMask | Implement via regex |
| ActionMenu | Menu | |
| Align | Align | |
| AllowNull | CanEmpty | |
| ApproximateType | DecimalAdjust | IBSheet7: 1=round,2=floor,3=ceil → IBSheet8: "round","floor","ceil" |
| AutoSum | FormulaRow | |
| BackColor | Color | |
| ButtonUrl | Button | |
| CalcLogic | Formula | Must set `(Def Row) CanFormula:1` and `CalcOrder` |
| CaseSensitive | CaseSensitive | |
| ClassName | Class | |
| ColMerge | ColMerge | |
| ColSpan | RecordColSpan | |
| ComboCode | EnumKeys | |
| ComboDisabled | EnumDisabled | |
| ComboText | Enum | |
| CopyPaste | CanCopyPaste | |
| Cursor | Cursor | |
| DefaultValue | DefaultValue | |
| Edit | CanEdit | |
| EditLen | Size | |
| EmptyToReplaceChar | EmptyValue | |
| EnterMode | AcceptEnters | |
| ExceptKeys | EditMask | Implement via regex |
| ExcludeEmpty | ExcludeEmpty | |
| FalseValue | FalseValue | |
| FitColWidth | RelWidth | Set RelWidth:0 to disable dynamic width |
| Focus | CanFocus | |
| FontBold | TextStyle: 1 | |
| FontColor | TextColor | |
| FontUnderline | TextStyle: 4 | |
| Format | Format | |
| FormatFix | FormatFix | |
| GroupSumType | GroupSubTotal | |
| HeaderCheck | HeaderCheck | |
| Hidden | Visible | **Inverted**: Hidden:1 → Visible:0 |
| InsertEdit | AddEdit | |
| ItemCode | EnumKeys | |
| ItemText | Enum | |
| KeyField | Required | |
| MinWidth | MinWidth | |
| NumberSort | NumberSort | |
| PhoneMask | CustomFormat | |
| PopupButton | Button | |
| RadioIcon | BoolIcon | |
| RowMerge | RowMerge | |
| RowSpan | RecordRowSpan | |
| Save | NoUpload | |
| SaveName | Name | |
| Sort | CanSort | |
| SumType | FormulaRow | |
| ToolTip / ToolTipText | Tip | |
| Transaction | NoChanged | |
| TreeCheck | Icon: "Check" | |
| TreeCol | (Cfg) MainCol | |
| TrueValue | TrueValue | |
| UpdateEdit | ChangeEdit | |
| VAlign | VAlign | |
| Width | Width | |
| Wrap | Wrap | |

### InitColumns Properties Not Supported or Require Workaround

| IBSheet7 | IBSheet8 Workaround |
|----------|---------------------|
| Chart | Use Html type with SVG chart |
| EditPointCount | Use (Col) Format |
| Ellipsis | Use (Col) Class |
| FullInput | Use `validSize` parameter in getSaveJson/doSave |
| Image | Use Icon, Button, HtmlPrefix, or HtmlPostfix |
| MaxCheck | Use (Col) Range + onBeforeChange event |
| MaximumValue / MinimumValue | Implement in onBeforeChange event |
| MenuFilter | Use (Filter Cell) MenuItems |
| MultiLineText | Use Lines type |
| PointCount | Use (Col) Format |
| PopupCode / PopupText | Use (Col) Menu |
| ShowCol | Use (Col) EditEnum |
| ZeroToReplaceChar | Use Format |
| CheckSaveName | In doSave/getSaveString, use `saveAttr:"treeColName"+"Checked"` |
| LevelSaveName | In doSave/getSaveString, use `saveAttr:"treeColName"+"Level"` |

---

## API Method Mapping

### Overview of API Changes
1. Many IBSheet7 property-setting functions become `getAttribute()`/`setAttribute()` in IBSheet8
2. Row parameters change from index numbers to row objects
3. Column parameters change from index numbers to Name strings
4. Multi-value separators change from `|` to `,`
5. Functions returning row/col indexes now return objects/names

### Cell Value Functions

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| GetCellValue(row, col) | getValue(rowObj, colName) | Returns raw value (no format) |
| SetCellValue(row, col, val) | setValue(rowObj, colName, val) | |
| GetCellText(row, col) | getString(rowObj, colName) | Returns formatted/display value |
| SetCellText(row, col, val) | setString(rowObj, colName, val) | |
| CellSearchValue(row, col) | getAttribute(rowObj, colName, "Orig") | Returns original value before edit, null if unchanged |

### Cell Property Functions → getAttribute/setAttribute

All of these IBSheet7 functions map to `getAttribute(row, col, attrName)` / `setAttribute(row, col, attrName, value)`:

| IBSheet7 Function | IBSheet8 Attribute |
|-------------------|-------------------|
| GetCellAlign / SetCellAlign | "Align" |
| GetCellBackColor / SetCellBackColor | "Color" |
| GetCellFontBold / SetCellFontBold | "TextStyle" (bitmask: 1=Bold) |
| GetCellFontColor / SetCellFontColor | "TextColor" |
| GetCellFontItalic / SetCellFontItalic | "TextStyle" (bitmask: 2=Italic) |
| GetCellFontName / SetCellFontName | "TextFont" |
| GetCellFontSize / SetCellFontSize | "TextSize" |
| GetCellFontStrike / SetCellFontStrike | "TextStyle" (bitmask: 8=Strike) |
| GetCellFontUnderline / SetCellFontUnderline | "TextStyle" (bitmask: 4=Underline) |
| GetCellVAlign / SetCellVAlign | "VAlign" |
| GetCellCursor / SetCellCursor | "Cursor" |
| GetCellEditable / SetCellEditable | "CanEdit" |
| GetCellProperty(row, col, prop) | getAttribute(rowObj, colName, prop) |

**TextStyle bitmask values**: 1=Bold, 2=Italic, 4=Underline, 8=Strike, 16=Overline, 32=SmallCaps. Combine with addition: Bold+Underline = 1+4 = 5.

### Row Property Functions → getAttribute/setAttribute

These use `setAttribute(row, null, attrName, value)` (null for col means entire row):

| IBSheet7 Function | IBSheet8 Attribute |
|-------------------|-------------------|
| GetRowBackColor / SetRowBackColor | "Color" |
| GetRowFontColor / SetRowFontColor | "TextColor" |
| GetRowEditable / SetRowEditable | "CanEdit" |
| GetRowDraggable / SetRowDraggable | "CanDrag" |
| GetRowHeight / SetRowHeight | "Height" |
| GetRowHeightMax / SetRowHeightMax | "MaxHeight" |
| GetRowHidden(row) | getAttribute(row, null, "Visible") — inverted logic |
| SetRowHidden(row, 1) | hideRow(rowObj) |
| SetRowHidden(row, 0) | showRow(rowObj) |
| GetRowLevel / SetRowLevel | "Level" |
| GetRowExpanded(row) | getAttribute(row, null, "Expanded") |
| SetRowExpanded(row, 1) | setExpandRow({row: rowObj, expand: 1}) |
| GetRowSumable / SetRowSumable | "NoCalculate" (inverted: Sumable:0 → NoCalculate:1) |

### Column Property Functions → getAttribute/setAttribute

These use `setAttribute(null, col, attrName, value)` (null for row means entire column):

| IBSheet7 Function | IBSheet8 Attribute |
|-------------------|-------------------|
| GetColBackColor / SetColBackColor | "Color" |
| GetColFontBold / SetColFontBold | "TextStyle" |
| GetColFontColor / SetColFontColor | "TextColor" |
| GetColFontUnderline / SetColFontUnderline | "TextStyle" |
| GetColEditable / SetColEditable | "CanEdit" |
| GetColWidth(col) | getAttribute(null, colName, "Width") |
| SetColWidth(col, w) | setAttribute(null, colName, "Width", w) |
| GetColHidden / SetColHidden | hideCol(colName) / showCol(colName) |

### Row Navigation & Selection

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| SelectCell(row, col) | focus(rowObj, colName) | |
| GetSelectRow() | getFocusedRow() | Returns row object |
| SetSelectRow(row) | focus(rowObj, getFocusedCol()) | |
| GetSelectCol() | getFocusedCol() | Returns column name |
| SetSelectCol(col) | focus(getFocusedRow(), colName) | |
| GetTopRow() | getShownRows()[0] | Returns row object |
| SetTopRow(row) | setScrollTop(getRowTop(rowObj)) | |
| GetDataFirstRow() | getFirstRow() | |
| GetDataLastRow() | getLastRow() | |
| ClearSelection() | clearSelection() | |
| SetFocus() | focus(getFocusedRow(), getFocusedCol()) | |
| SetBlur() | blur() | |

### Row Operations

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| DataInsert() | addRow() | |
| RowDelete() | removeRow() | |
| DataCopy() | copyRow() | |
| DataMove() | moveRow() | |
| RemoveAll() | removeAll() | |
| ReturnData() | revertRow() | |
| ReturnCellData() | revertCell() | |
| GetRowData / SetRowData | getRowValue() / setRowValue() | |
| FindStatusRow("D") | getRowsByStatus("Deleted") | Returns array of row objects |
| FindStatusRow("U\|D") | getRowsByStatus("!Added,Changed,Deleted") | Multiple statuses |
| FindCheckedRow(col) | getRowsByChecked(colName) | Returns array of row objects |
| IsDataModified() | hasChangedData() | |
| SearchRows() | getDataRows().length - getRowsByStatus("Added,Deleted,Changed").length | |

**Row status mapping**: IBSheet7 "I"→IBSheet8 "Added", "U"→"Changed", "D"→"Deleted"

### Column Operations

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| ColInsert() | addCol() | |
| ColDelete() | removeCol() | |
| ColSaveName(index) | getColByIndex7(index) | Migration helper |
| SaveNameCol(name) | getColIndex7(name) | |
| ColumnSort(cols, order) | doSort(sortString) | See sorting pattern below |
| MoveColumnPos() | moveCol() | |
| FitColWidth(ratios) | fitColWidth(ratioArray) | String→Array: "10\|50\|30\|10"→[10,50,30,10] |
| FitSize() | fitSize(colName) | Per-column only, call in loop for all |
| LastCol() | getLastCol() | |
| ColLeft(col) | getColLeft(colName) | Section-aware calculation needed |

### Check Operations

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| CheckAll(col, val, fire) | setAllCheck(colName, val, fire) | |
| CheckedRows(col) | getRowsByChecked(colName).length | |
| CheckReverse(col) | Manual: loop getDataRows() and toggle values | |
| GetAllowCheck / SetAllowCheck | Return `1` from onBeforeChange to block | |
| ClearHeaderCheck() | setAttribute on header row Checked:0 per column | |
| GetHeaderCheck / SetHeaderCheck | getAttribute/setAttribute(headerRow, col, "Checked") | |
| AllowEvent4CheckAll() | (Cfg) AllCheckIgnoreEvent | |

### Data Load/Save

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| DoSearch() | doSearch() | |
| DoSearchPaging() | doSearchPaging() | |
| DoSearchChild() | doSearch() with parent parameter | |
| LoadSearchData() | loadSearchData() | |
| DoSave() | doSave() | |
| DoAllSave(url) | doSave({Url: url, saveMode: 0}) | |
| GetSaveJson() | getSaveJson() | |
| GetSaveString() | getSaveString() | |
| LoadSaveData() | applySaveResult() | |

### Excel/File Operations

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| Down2Excel() | down2Excel() | |
| Down2ExcelBuffer() | down2ExcelBuffer() | |
| Down2Pdf() | down2Pdf() | |
| Down2Text() | down2Text() | |
| LoadExcel() | loadExcel() | |
| LoadExcelBuffer() | loadExcelBuffer() | |
| LoadText() | loadText() | |
| DirectDown2Excel() | directDown2Excel() | |
| DirectLoadExcel() | directLoadExcel() | |
| SetDown2ExcelUrl(url) | (Cfg) Export.Down2ExcelUrl | Set at initialization |
| SetDown2PdfUrl(url) | (Cfg) Export.Down2PdfUrl | Set at initialization |
| SetDown2TextUrl(url) | (Cfg) Export.Down2TextUrl | Set at initialization |
| SetLoadExcelUrl(url) | (Cfg) Export.LoadExcelUrl | Set at initialization |
| SetLoadTextUrl(url) | (Cfg) Export.LoadTextUrl | Set at initialization |
| DoPrint() | doPrint() | |

### Merge Operations

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| GetMergeSheet / SetMergeSheet | setAutoMerge() | |
| SetMergeCell() | setMergeRange() | |
| SetSplitMergeCell() | setAutoMergeCancel() | |
| GetDataRowMerge / SetDataRowMerge | setAutoMerge({dataMerge: value}) | |
| GetMergedEndCell(r,c) | getMergeRange(rowObj, colName) | Returns [startRow, startCol, endRow, endCol] |
| GetMergedStartCell(r,c) | getMergeRange(rowObj, colName) | Same function, use index [0],[1] |

### Tree Operations

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| GetChildNodeCount(row) | getChildRows(rowObj, maxLevel).length | Must specify maxLevel for direct children only |
| GetChildRows() | getChildRows() | |
| GetFirstChildRow(row) | rowObj.firstChild | Direct property access |
| GetLastChildRow(row) | rowObj.lastChild | Direct property access |
| GetParentRow(row) | getParentRows(rowObj)[0] | Returns array of all ancestors |
| GetNextSiblingRow() | getNextSiblingRow() | |
| GetPrevSiblingRow() | getPrevSiblingRow() | |
| IsHaveChild(row) | getAttribute(rowObj, null, "HaveChild") \|\| rowObj.firstChild | |
| SetRowHaveChildValue(row, v) | setAttribute(rowObj, null, "HaveChild", v) | |
| GetTreeCheckValue / SetTreeCheckValue | getAttribute/setAttribute(rowObj, MainCol, "Checked") | |
| GetTreeCheckActionMode / SetTreeCheckActionMode | (Cfg) TreeCheckSync | |
| ShowTreeLevel() | showTreeLevel() | |

### Scroll & Navigation

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| GetScrollTop / SetScrollTop | getScrollTop() / setScrollTop() | |
| GetScrollLeft / SetScrollLeft | getScrollLeft() / setScrollLeft() | |
| GoToFirstPage() | goToPage(getPageByRow(getFirstRow())) | |
| GoToLastPage() | goToPage(getPageByRow(getLastRow())) | |
| GoToNextPage() | goToNextPage() | |
| GoToPrevPage() | goToPrevPage() | |
| GoToPageNum() | goToPageByIndex() | |
| GetCurrentPage() | getPageIndex(getFocusedPage()) | |

### Frozen (Fixed) Columns/Rows

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| GetFrozenCol / SetFrozenCol | getCols with Section filter / setFixedLeft() | |
| GetFrozenRows / SetFrozenRows | getFixedTop() / setFixedTop() | Not available in SearchMode 0,3 |

### Sheet Properties

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| GetSheetWidth / SetSheetWidth | getSheetWidth() / setSheetWidth() | Or: sheet.MainTag.style.width |
| GetSheetHeight / SetSheetHeight | getSheetHeight() / setSheetHeight() | Or: sheet.MainTag.style.height |
| GetEditable / SetEditable(v) | sheet.CanEdit = v | Direct property |
| GetEnable / SetEnable | enable() / disable() | |
| GetVisible / SetVisible(0) | sheet.MainTag.style.display = "none" | |
| IsFocused() | IBSheet.Focused === sheet | Static property check |
| Version() | version() | |
| GetTheme / SetTheme | sheet.Style / setTheme() | |
| GetTabIndex() | sheet.TabIndex | |
| DisposeSheet() | dispose() | |
| ClearUnload() | IBSheet.disposeAll() | |
| Reset() | dispose() | |

### Sorting

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| ColumnSort(cols, order) | doSort(sortString) | See pattern below |
| ColumnSort("") | clearSort() | Clear sort |
| GetColSortInfo() | sheet.Sort property | String format: "col1,-col2" (- prefix = DESC) |

### Filter

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| ClearFilterRow() | clearFilter() | |
| HideFilterRow() | hideFilterRow() | |
| ShowFilterRow() | showFilterRow() | |
| FindFilterRow() | getRowById("Filter").Visible | Filter row always exists in IBSheet8 |
| SetFilterValue(col, val, op) | doFilter(cols, vals, ops) | Pipe-separated parameters |
| SetFilterOption(col, op) | doFilter(cols, vals, ops) | |
| FilteredRowCount() | getDataVisibleRows().length | ⚠️ `r.Filtered` 는 IBRow 에 없는 프로퍼티라 `getDataRows().filter(r=>!r.Filtered)` 는 항상 전체를 센다. 필터 후 보이는 행 수는 `getDataVisibleRows()` (nexacro-to-react/ibsheet.md 참조) |

### Group & SubTotal

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| ShowSubSum() | makeSubTotal() | |
| HideSubSum() | removeSubTotal() | |
| FindSubSumRow() | getDataRows().filter(r => r.Name == "SubSum") | Returns row objects |
| ShowGroupRow() | showGroupRow() | |
| HideGroupRow() | hideGroupRow() | |
| GetGroupCol() | sheet.Group | Separator changed to "," |
| GetGroupRow() | getGroupRows() | |
| GetSubSumInfo() | getSubSumOptions() | |
| CreatePivotTable() | makePivotTable() | |
| GoToBaseSheet() | sheet.PivotSheet.switchPivotSheet(0) | |
| ShowPivotDialog() | showPivotDialog() | |
| ShowPivotTable() | makePivotTable() | |

### Summary (Formula) Row

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| FindSumRow() | getRowById("FormulaRow") | Always exists; check .Visible |
| GetAutoSumPosition / SetAutoSumPosition | setFormulaRowPosition() | |
| GetSumValue / SetSumValue(0, col, v) | getValue/setValue(getRowById("FormulaRow"), col, v) | |
| GetSumRowHidden / SetSumRowHidden(1) | hideRow(getRowById("FormulaRow")) | |
| GetSumBackColor / SetSumBackColor | setAttribute(getRowById("FormulaRow"), null, "Color", v) | |
| GetSumFontBold / SetSumFontBold | setAttribute(getRowById("FormulaRow"), null, "TextStyle", v) | |
| GetSumFontColor / SetSumFontColor | setAttribute(getRowById("FormulaRow"), null, "TextColor", v) | |
| FindFooterRow() | getFooterRows().filter(r => r.id != "FormulaRow") | FormulaRow is always in footer |
| RemoveFooterRow() | getFooterRows().forEach(r => r.id != "FormulaRow" && removeRow(r)) | |

### Combo

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| CellComboItem(r, c, info) | setAttribute(row, col, "Enum"/"EnumKeys", val) | |
| GetComboInfo(r, c, "Text") | getAttribute(row, col, "Enum") | |
| GetComboInfo(r, c, "Code") | getAttribute(row, col, "EnumKeys") | |
| GetComboOpenMode / SetComboOpenMode | (Cfg) EnumOpenMode | IBSheet8 default: open on click |
| InitComboNoMatchText() | (Col) EnumStrictMode: 2 | |
| SetColProperty (combo) | setAttribute(null, col, "Enum"/"EnumKeys", val) | |

### Image

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| GetCellImage / SetCellImage(r, c, url) | setValue(row, col, "\|url") | First char is separator for Img type |
| SetCellImageStyle(r, c, style) | setValue + setAttribute for Align | |
| PopupButtonImage(r, c, img) | setAttribute(row, col, "Button", imgUrl) | |

### Message & Dialog

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| ShowProcessDlg() | showMessage() | |
| HideProcessDlg() | hideMessage() | |
| ShowToolTip() | showTip() | |
| ConfirmOK(result) | evt.callback(result) in onShowMessage | |
| ShowFindDialog() | showFindDialog() | |
| FindText() | findText() | |
| ShowColumnPopup() | showMenu() | |
| IBCloseCalendar() | closeDialog() | |
| IBShowCalendar() | IBSheet.showCalendar() | |

### Context Menu

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| GetActionMenu / SetActionMenu | (Row/Col/Cell) Menu property | First char of Menu string is the separator |
| GetGroupActionMenu / SetGroupActionMenu | setAttribute(groupRow, null, "Menu", menuObj) | Use Menu object format |
| GetHeaderActionMenu / SetHeaderActionMenu | (Def Header) Menu | Set at initialization |

### Wait/Loading Images

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| SetSearchingImage(url) | IBSheet.ImageList.searchingImage = url | |
| SetSavingImage(url) | IBSheet.ImageList.savingImage = url | |
| SetDownloadingImage(url) | IBSheet.ImageList.downloadingImage = url | |
| SetUploadingImage(url) | IBSheet.ImageList.uploadingImage = url | |
| GetWaitImage / SetWaitImage | IBSheet.ImageList.waitImage | |
| SetWaitImageVisible(1) | showMessage(IBSheet.ImageList.waitImage) | |
| SetWaitImageVisible(0) | hideMessage() | |

### Initialization & Header

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| InitColumns() | IBSheet.create() | See initialization pattern |
| InitHeaders() | IBSheet.create() with Header arrays in Cols | See header pattern |
| SetConfig() | (Cfg) properties at initialization | |
| SetHeaderMode({ColResize, ColMove}) | (Def Col) CanResize, CanMove | |
| HeaderRows() | getHeaderRows().length | |

### Conditional Formatting

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| SetColCondProperty(col, cond, props) | Attribute + Formula | See pattern below |

### Validation

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| ValidateFail(1) | Return `true` from onValidation / onBeforeSave | |

### Miscellaneous

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| GetAutoRowHeight / SetAutoRowHeight | (Cfg) AutoRowHeight, (Row) MaxHeight | Depends on SearchMode |
| GetCountInfoElement / SetCountInfoElement | getCountInfoElement() / setCountInfoElement() | |
| GetSelectionCols() | getSelectedRanges() | Returns 2D array |
| GetSelectionRows() | getSelectedRows() | Returns row object array |
| SetSelectRange() | selectRange() | |
| GetRangeText / SetRangeText | getString/setString in loop | |
| GetRangeValue / SetRangeValue | getValue/setValue in loop | |
| RangeBackColor(r1,c1,r2,c2,color) | setAttribute in nested loop + renderBody() | |
| ColValueDup(cols) | getRowsByDup(colNames, 1) | Returns row objects |
| ColValueDupRows(cols) | getRowsByDup(colNames) | Returns 2D array of row objects |
| GetTotalRows / SetTotalRows | getTotalRowCount() / setTotalRowCount() | |
| GetSelectionSummaryInfoElement / Set | getSelectionSummaryInfoElement() / set | |
| GetEditableColorDiff / Set | (Cfg) ColorState | |
| RowSaveStr(row) | new URLSearchParams(getRowValue(rowObj)).toString() | |
| MoveColumnFail() | Return `true` from onBeforeColMove | |
| SetEndEdit() | endEdit() | |
| GetEditText() | getEditText() | |
| GetCurrentColInfo / SetCurrentColInfo | getCurrentColInfo() / setCurrentColInfo() | |

### API Not Supported in IBSheet8

BasicImeMode, CellSaveName, ComputeSum, Data2Clipboard, DoRowSearch, ExportData, GetClipCopyMode/Set, GetClipPasteMode/Set, GetEnterBehavior/Set, GetEtcData/Set, EtcDataString, GetFilterParam, GetHighlightAfterSort/Set, GetImageList/Set, GetPageCount/Set, GetRowMerge/Set, GetSaveData, GetSearchData, GetScrollInfoFormat/Set, GetScrollInfoPosition/Set, GetSendComboData/Set, GetSheetHtml, GetShowButtonImage/Set, GetShowMsgMode/Set, GetTreeActionMode/Set, GetTreeCheckEditable/Set, GetTreeCheckRowEditable/Set, ReNumberSeq, RenderSheet, ReturnColumnPos, SetDataMerge, SetFindDialog, ShowDebugMsg, ShowFooterRow, ShowPivotSumRatio, ShowTreeSubSum, TreeChildSort

---

## Event Mapping

All IBSheet8 events receive a single `evt` object parameter. Return `1` (or `true`) from "onBefore~" events to cancel the action.

### Lifecycle Events

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| OnLoad | onRenderFirstFinish | Initial rendering complete |
| OnBeforeSearch | onSearchStart | |
| OnSearchEnd | onSearchFinish | |
| OnLoadData | onBeforeDataLoad | |
| OnSaveEnd | onAfterSave | |
| OnBeforeSave | onBeforeSave | |
| OnRowSearchEnd | onRowLoad | |

### User Input Events

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| OnBeforeEdit | onStartEdit | |
| OnAfterEdit | onAfterEdit | |
| OnChange | onAfterChange | IBSheet8: fires only on user edit, not API changes. Previous value: `evt.row[evt.col + "BeforeVal"]` |
| OnEditValidation | onBeforeChange | Return previous value to revert, return `1` to cancel |
| OnBeforeCheck | onBeforeChange | Return `1` to block check. Replaces SetAllowCheck(0) pattern |
| OnBeforeCheckAll | onBeforeCheckAll | |
| OnCheckAllEnd | onCheckAllFinish | |
| OnValidation | onValidation | Return `true` to stop save |

### Click & Selection Events

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| OnClick | onAfterClick | |
| OnDblClick | onDblClick | |
| OnButtonClick | onClick | IBSheet8 onClick fires for all column types; must check column in handler |
| OnPopupClick | onButtonClick | Fires when (Col)Button is clicked |
| OnSelectCell | onFocus | |
| OnSelectEnd | onSelectEnd | |

### Mouse Events

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| OnMouseDown | onMouseDown | |
| OnMouseMove | onMouseMove | |
| OnMouseUp | onMouseUp | |

### Keyboard Events

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| OnKeyDown | onKeyDown | |
| OnKeyUp | onKeyUp | |
| OnBeforeTab | onKeyDown | Check `evt.name == "Tab"` in handler |

### Column Events

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| OnBeforeColumnMove | onBeforeColMove | Return `true` to cancel |
| OnAfterColumnMove | onAfterColMove | |
| OnColumnSort / OnSort | onAfterSort | |
| OnBeforeSort | onBeforeSort | |
| OnUserResize | onAfterColResize | |

### Drag Events

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| OnDragStart | onStartDrag | |
| OnDropEnd | onEndDrag | |
| OnCellDropEnd | onEndDragCell | |

### Filter & Group Events

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| OnChangeFilter / OnFilterEnd | onAfterFilter | |
| OnGroupStart | onBeforeGroup | |
| OnGroupFinish | onAfterGroup | |

### Scroll Events

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| OnHScroll | onScroll | Both horizontal and vertical scroll fire onScroll |
| OnVScroll | onScroll, onVScrollEndPoint | Use onVScrollEndPoint for infinite scroll pattern |

### Data Events

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| OnDecryption | onBeforeDataLoad | Modify `evt.data` array directly |
| OnBeforePaste | onBeforePaste | |
| OnAfterPaste | onAfterPaste | |
| OnLoadExcel | onImportFinish | Check `evt.type == "EXCEL"` |
| OnLoadText | onImportFinish | Check `evt.type == "TEXT"` |
| OnLoadFileSelect | onSelectFile | |

### Tree Events

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| OnBeforeExpand | onBeforeExpand | Return `1` to cancel |
| OnAfterExpand | onAfterExpand | |
| OnTreeCheckChange | (Col) OnClickSide handler | Set as column JSON property |
| OnTreeChild | onBeforeExpand | Check HaveChild and getChildRows() to load children |

### Export Events

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| OnBeforeDownload | onBeforeExport | |
| OnDownFinish | onExportFinish | |

### Navigation & Page Events

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| OnBeforeMovePage | onBeforeGoToPage | |
| OnMovePage | onAfterGoToPage | |
| OnPageRequest | doSearchPaging beforeSend parameter | |

### Other Events

| IBSheet7 | IBSheet8 | Notes |
|----------|----------|-------|
| OnMessage | onShowMessage | |
| OnSelectMenu | onSelectMenu | |
| OnResize / OnSmartResize | onResize | |

### Events Not Supported in IBSheet8

OnChangeSum, OnDebugMsg, OnEncryption, OnExportEncryption, OnRowDelete, OnTab, OnWaitTimeOut

---

## Column Type Mapping

| IBSheet7 Type | IBSheet8 Type | Notes |
|--------------|---------------|-------|
| Text | Text | |
| Int | Int | |
| Float | Float | |
| Date | Date | |
| CheckBox | Bool | |
| DummyCheck | Bool | Add `NoChanged: 1` |
| Radio | Radio | Add `HRadio: 0` for single-select per column |
| Combo | Enum | |
| ComboEdit | Enum | Add `EnumFilter: true` |
| Button | Button | Click event: IBSheet7 `OnButtonClick` → IBSheet8 `onClick` |
| Image | Img | Data format changed: first char is separator, includes URL+width+height |
| Html | Html | |
| Pass | Pass | |
| Popup | Text | Add `(Col) Button: "popup image url"` |
| Seq | (automatic) | Column named "SEQ" auto-creates sequence. Use `(Cfg) RowIndex` for custom name |
| Status | (Col) Extend: IB_Preset.STATUS | Values: Added, Changed, Deleted. Customize in ko.js `ReqStatusAdded` etc. |
| DelCheck | (Col) Extend: IB_Preset.DelCheck | |
| AutoSum | (Col) FormulaRow: "Sum" | Not a type, set as column property |
| MultiLineText | Lines | |
| Result | Not supported | Rarely used |
| Sparkline | Not supported | Rarely used |

---

## Format Mapping

| IBSheet7 Format | IBSheet8 Format | Notes |
|----------------|-----------------|-------|
| Ymd | "yyyy-MM-dd" | Or use `Extend: IB_Preset.YMD` |
| Ym | "yyyy/MM" | Or use `Extend: IB_Preset.YM` |
| Md | "MM.dd" | Or use `Extend: IB_Preset.MD` |
| Hms | "hh:mm:ss" | Or use `Extend: IB_Preset.HMS` |
| Hm | "hh:mm" | Or use `Extend: IB_Preset.HM` |
| YmdHms | "yyyy.MM.dd hh:mm:ss" | Or use `Extend: IB_Preset.YMDHMS` |
| YmdHm | "yyyy.MM.dd hh:mm" | Or use `Extend: IB_Preset.YMDHM` |
| Integer | "#,##0" | Check (Col) CanEmpty |
| NullInteger | "#,###" | Check (Col) CanEmpty |
| Float | "#,##0.##" | Check (Col) CanEmpty |
| NullFloat | "#,###.##" | Check (Col) CanEmpty |
| IdNo | (Col) CustomFormat: "InNo" | |
| SaupNo | (Col) CustomFormat: "SaupNo" | |
| PostNo | (Col) CustomFormat: "PostNo" | |
| CardNo | (Col) CustomFormat: "CardNo" | |
| PhoneNo | (Col) CustomFormat: "PhoneNo" | |
| Number | Type: "Text", EditMask: "^\\d*$" | Text type with numeric input mask |

**IBSheet8 date format tokens**: `yyyy`=year, `MM`=month, `dd`=day, `hh`=hour, `mm`=minute, `ss`=second. Use `DataFormat` for server data format and `EditFormat` for editing format separately.

---

## Global Config Mapping (ibsheet.cfg → ibsheet-common.js commonOptions)

IBSheet7's `ibsheet.cfg` file maps to IBSheet8's `ibsheet-common.js` `commonOptions` settings.

| IBSheet7 (ibsheet.cfg) | IBSheet8 (commonOptions) | Notes |
|------------------------|--------------------------|-------|
| Alternate | (Cfg) Alternate | |
| AutoFitColWidth | (Col) RelWidth | |
| AutoRowHeight | (Def Row) MaxHeight: 20 | |
| AutoSumCalcMode | (Cfg) CalcMergeMode | |
| CachePageCount | (Cfg) MaxPages | |
| CalButtonAlign | (Col) Icon: "Date" | |
| CalButtons | (Col) CalendarButtons | |
| CalWeekNumber | (Cfg) Weeks | |
| ClipPasteMode | (Cfg) PasteFocused | |
| ComboMaxHeight | (Cfg) MenuMaxHeight | |
| CopyEdit | (Cfg) CopyEdit | |
| CountFormat | (Cfg) InfoRowConfig | |
| CountPosition | (Cfg) InfoRowConfig | |
| CustomScroll | (Cfg) CustomScroll | |
| DataRowHeight | (Def Row) Height | |
| DirectLoadExcel_Url | (Cfg) Export | |
| Down2Excel_Url | (Cfg) Export | |
| Down2Pdf_Url | (Cfg) Export | |
| DragCell | (Cfg) DragCell | |
| DragMode | (Cfg) CanDrag | |
| FalseValue | (Col) FalseValue | |
| FilterCaseSensitive | (Col) CaseSensitive | |
| FocusAfterProcess | (Cfg) IgnoreFocused | |
| FocusEditMode | (Cfg) InEditMode | |
| FocusSumRow | (Def FormulaRow) CanFocus: 1 | |
| GroupSort | (Cfg) GroupSortMain | |
| HeaderMergeMode | (Cfg) HeaderMerge | |
| HeaderRowHeight | (Def Header) Height | |
| HeaderSort | (Cfg) HeaderSortMode | Not identical behavior |
| HeaderSortActionMode | (Cfg) HeaderSortActionMode | |
| InvalidArgsReturnValue | (Cfg) InvalidArgsReturnValue | Private |
| LoadExcel_Url | (Cfg) Export | |
| MarkupTagDelimiter | (Cfg) MarkupTagDelimiter | |
| MaxSort | (Cfg) MaxSort | |
| MessageShowLevel | (Cfg) SuppressMessage | |
| MouseHoverMode | (Cfg) Hover | |
| NoImageUrl | (Col) DefaultImage | |
| OnePageSort | (Cfg) SortCurrentPage | |
| PagingPosition | (Cfg) InfoRowConfig | |
| ReverseSortOrder | (Cfg) HeaderSortMode | |
| RowHeightMax | (Def Row) Height | |
| ScrollOverSheet | (Cfg) ScrollOverSheet | |
| SearchMode | (Cfg) SearchMode | |
| SelectionSummary | (Cfg) SelectionSummary | |
| SkipDefaultTheme | (Cfg) Style | |
| SortCaseSensitive | (Col) CaseSensitive | |
| SumBackColor | (Def FormulaRow) Color | |
| SumFontBold | (Def FormulaRow) TextStyle | |
| SumFontColor | (Def FormulaRow) TextColor | |
| SumZeroValue | (Col) Format | |
| ToolTipMode | (Cfg) StandardTip | |
| TreeNodeIcon | (Col) Icon | |
| TrueValue | (Col) TrueValue | |
| UnicodeByte | (Cfg) UnicodeByteMode | |
| UpdateMergeCells | (Cfg) MergeCellsMatch | |
| UseDefaultSortImage | (Cfg) SortIcons | |
| UseEditMask | (Cfg) EditMaskFunc | |
| UseGroupActionMenu | (Def Group) Menu | |
| UseHeaderActionMenu | (Def Header) Menu | |
| UseHeaderSortCancel | (Cfg) UseHeaderSortCancel | |
| UseNoDataRow | (Cfg) NoDataMessage | |
| WaitTimeOut | (Cfg) Timeout | |
| WheelScrollSize | (Cfg) WheelScrollCount | |

---

## Common Migration Patterns

### Pattern 1: InfoRowConfig (Count/Paging Position)

IBSheet7 uses simple position numbers. IBSheet8 uses a structured InfoRowConfig object.

```javascript
// IBSheet7
mySheet.SetConfig({ CountPosition: 3, CountFormat: "[BOTTOMDATA / TOTALROWS]" });

// IBSheet8
IBSheet.create({
  options: {
    Cfg: {
      InfoRowConfig: {
        Visible: 1,
        Space: "Bottom",         // "Top" or "Bottom"
        Layout: ["Count", ""],   // ["left", "right"] - use "Count", "Paging", or ""
        Format: "[BOTTOMDATAROW / TOTALROWS]"
      }
    }
  }
});
```

### Pattern 2: Sorting

```javascript
// IBSheet7 - sort columns 2,3,4 descending
mySheet.ColumnSort("2|3|4", "DESC");

// IBSheet8 - prefix "-" for descending
var colNames = mySheet.getColByIndex7("2|3|4");  // convert indexes to names
mySheet.doSort(colNames.map(c => "-" + c).join(","));

// IBSheet7 - mixed sort: col3 ASC, colAA DESC, col4 ASC
mySheet.ColumnSort("3|AA|4", "", "ASC|DESC|ASC", 1);

// IBSheet8
mySheet.doSort("col3,-AA,col4");
```

### Pattern 3: Conditional Formatting with Formula

```javascript
// IBSheet7
mySheet.SetColCondProperty(13, "%d>1000", {
  BackColorT: "#00ff00", FontColorT: "#ffff00", EditT: false,
  BackColorF: "#0000ff", FontColorF: "#ffffff", EditF: true
});

// IBSheet8 - use Formula attributes
IBSheet.create({
  options: {
    Def: {
      Row: {
        CanFormula: 1,
        CalcOrder: "Color,TextColor,CanEdit",
        ColorFormula: "Row['AAA'] > 1000 ? '#00ff00' : '#0000ff'",
        TextColorFormula: "Row['AAA'] > 1000 ? '#ffff00' : '#ffffff'",
        CanEditFormula: "Row['AAA'] > 1000 ? 0 : 1"
      }
    }
  }
});
```

### Pattern 4: Event-based Input Control (replacing SetAllowCheck/SetAllowExpand)

```javascript
// IBSheet7 - SetAllowCheck pattern
function mySheet_OnBeforeCheck(Row, Col) {
  if (mySheet.GetCellValue(Row, "status") == "I") {
    mySheet.SetAllowCheck(0);
  } else {
    mySheet.SetAllowCheck(1);
  }
}

// IBSheet8 - return value pattern
Events: {
  onBeforeChange: function(evt) {
    if (evt.sheet.getValue(evt.row, "status") == "I") {
      return 1; // return truthy to cancel user input
    }
  }
}
```

### Pattern 5: Multi-row Header

```javascript
// IBSheet7
var headers = [
  { Text: "Status|Delete|Employee Info|Employee Info|Employee Info", Align: "Center" },
  { Text: "Status|Delete|Name|Number|Hire Date", Align: "Center" }
];
mySheet.InitHeaders(headers, { Sort: 1, ColMove: 1, ColResize: 0 });

// IBSheet8 - Header as array per column
IBSheet.create({
  options: {
    Cfg: { CanColResize: 0 },
    Cols: [
      { Header: ["Status", "Status"], Type: "Text", Name: "status" },
      { Header: ["Delete", "Delete"], Type: "Bool", Name: "delChk" },
      { Header: ["Employee Info", "Name"], Type: "Text", Name: "empName" },
      { Header: ["Employee Info", "Number"], Type: "Text", Name: "empNo" },
      { Header: ["Employee Info", "Hire Date"], Type: "Date", Name: "hireDate" }
    ]
  }
});
```

### Pattern 6: Data Decryption on Load

```javascript
// IBSheet7
function mySheet_OnDecryption(Row, Col, SaveName, Value) {
  if (mySheet.ColSaveName(Col) == "telNo") return decrypt(Value);
  return Value;
}

// IBSheet8
Events: {
  onBeforeDataLoad: function(evt) {
    evt.data.forEach(row => {
      row["telNo"] = decrypt(row["telNo"]);
    });
  }
}
```

### Pattern 7: Infinite Scroll (VScroll Bottom Detection)

```javascript
// IBSheet7
function mySheet_OnVScroll(vpos, oldvpos, isTop, isBottom) {
  if (isBottom && mySheet.GetTotalRows() > mySheet.SearchRows()) {
    mySheet.DoSearch("/search/data.do", "pageNo=" + pageNumber, { Append: 1 });
    pageNumber++;
  }
}

// IBSheet8
Events: {
  onVScrollEndPoint: function(evt) {
    if (evt.sheet.getTotalRowCount() > evt.sheet.getDataRows().length) {
      evt.sheet.doSearch({ url: "/search/data.do", param: "pageNo=" + pageNumber, append: 1 });
      pageNumber++;
    }
  }
}
```

### Pattern 8: Confirm Dialog in onShowMessage

```javascript
// IBSheet7
function mySheet_OnMessage(grid, msg, level, isconfirm) {
  if (isconfirm) {
    var result = confirm(msg);
    mySheet.ConfirmOK(result);
  }
}

// IBSheet8
Events: {
  onShowMessage: function(evt) {
    if (evt.isConfirm) {
      var result = confirm(evt.message);
      evt.callback(result);
      return 1; // suppress default message display
    }
  }
}
```

### Pattern 9: Range Property Setting with Performance

```javascript
// IBSheet7
mySheet.RangeBackColor(1, 0, 10, 8, "#FFFFAA");

// IBSheet8 - use render:0 in loop, then renderBody()
for (let r = 1; r <= 10; r++) {
  var row = mySheet.getRowByIndex7(r);
  for (let c = 0; c <= 8; c++) {
    var col = mySheet.getColByIndex7(c);
    mySheet.setAttribute(row, col, "Color", "#FFFFAA", 0);  // render:0
  }
}
mySheet.renderBody();  // apply all changes at once
```

### Pattern 10: Tree Check Event

```javascript
// IBSheet7
function mySheet_OnTreeCheckChange(row, col, value, level, hasChild) {
  if (hasChild) {
    var children = mySheet.GetChildRows(row, level + 1).split("|");
    children.forEach(r => mySheet.SetCellValue(r, "QTY", value ? "MODI" : ""));
  }
}

// IBSheet8 - use OnClickSide column property
const treeCheckHandler = function(evt) {
  var value = !evt.row[evt.col + "Checked"]; // read opposite due to timing
  var children = evt.sheet.getChildRows(evt.row, evt.row.Level + 1);
  children.forEach(r => evt.sheet.setValue(r, "QTY", value ? "MODI" : "", 0));
  evt.sheet.renderBody();
};

IBSheet.create({
  options: {
    Cfg: { MainCol: "treeName" },
    Cols: [
      { Header: "Name", Type: "Text", Name: "treeName", Icon: "Check", OnClickSide: treeCheckHandler }
    ]
  }
});
```

---

## Migration Helper Functions

These utility functions assist in converting IBSheet7-style index-based access to IBSheet8 object-based access.

### getRowByIndex7(index)
Converts IBSheet7 row index (header=0, data starts from 1+) to IBSheet8 row object.

### getColByIndex7(index)
Converts IBSheet7 column index (number) or pipe-separated indexes to IBSheet8 column name(s).

```javascript
// Implementation reference
mySheet.getColByIndex7 = function(colIndex) {
  if (colIndex === "" || colIndex === null || colIndex === undefined) return '';
  if (typeof colIndex == "string") {
    if (colIndex.indexOf("|") != -1) {
      return colIndex.split("|").map(c => this.getColByIndex7(c));
    } else if (!isNaN(colIndex)) {
      return this.getCols()[parseInt(colIndex) + (this.Cols["SEQ"].VPos === -1 ? 1 : 0)];
    }
    return colIndex; // already a name string
  }
  return this.getCols()[colIndex + (this.Cols["SEQ"].VPos === -1 ? 1 : 0)];
};
```

### getColIndex7(colName)
Reverse mapping: column name to IBSheet7-style column index.
