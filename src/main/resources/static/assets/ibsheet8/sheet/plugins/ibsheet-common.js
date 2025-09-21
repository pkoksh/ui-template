/**
 * 제 품: IBSheet8 - Common Plugin
 * 버 전: v1.0.27 (20250828-16)
 * 회 사: (주)아이비리더스
 * 주 소: https://www.ibsheet.com
 * 전 화: 1644-5615
 */
(function(window, document) {
/*CommonOptions 설정
 * 모든 시트에 동일하게 적용하고자 하는 설정을 CommonOptions에 등록합니다.
 * 해당 파일은 반드시 ibsheet.js 파일보다 뒤에 include 되어야 합니다.
 */
var _IBSheet = window['IBSheet'];
if (_IBSheet == null) {
  throw new Error('[ibsheet-common] undefined global object: IBSheet');
}

// IBSheet Plugins Object
var Fn = _IBSheet['Plugins'];

if (!Fn.PluginVers) Fn.PluginVers = {};
Fn.PluginVers.ibcommon = {
  name: 'ibcommon',
  version: '1.0.27-20250828-16'
};

_IBSheet.CommonOptions = {
  Cfg: {
    DebugMode: "info,error",
    Export: {
      Url: "../assets/ibsheet/jsp/"
    }, // 엑셀다운 URL
    Alternate: 2, // 홀짝 행에 대한 배경색 설정
    InfoRowConfig: {
      Visible: 1,
      Layout: ["Count"],
      Space: "Top"
    }, // 건수 정보 표시
    GroupFormat: " <span style='color:red'>{%s}</span> <span style='color:blue'>({%c}건)</span>", // 그룹핑 컬럼명은 빨강색, 건수는 파란색으로 표시
    HeaderSortMode: 1, // 클릭한 순서의 역순으로 대분류/중분류/소분류가 되며, 마지막으로 클릭하는 헤더가 대분류가 되고 기존의 소분류였던 컬럼은 소팅 취소
    HeaderMerge: 1, // 헤더영역 자동 병합
    PrevColumnMerge: 1, // 앞컬럼 기준 병합 사용 여부

    SearchCells: 1, // 찾기 기능 셀단위/행단위 선택
    ShowHint: 0, //마우스 hover시 hint 표시기능

    MaxPages: 6, // SearchMode:2인 경우 한번에 갖고 있는 페이지 수(클수록 브라우져의 부담이 커짐)
    MaxSort: 3, // 최대 소팅 가능 컬럼수(4개 이상인 경우 느려질 수 있음)

    StorageSession: 1, // 개인화 기능(컬럼정보 저장) 사용 여부
    MsgLocale: "Ko", // 언어 메시지 파일 기본 설정 값
    PasteStrictMode: 1, // 숫자 컬럼에 Ctrl + v 붙여넣기 시 엄격하게 체크하여 붙여넣기
    StorageKeyPrefix: window["sampleName"] ? window["sampleName"] : document.URL // 저장 키 prefix 설정
  },
  Def: {
    Header: { //헤더 영역 행에 대한 설정
      Menu: {
        Items: [
          {
            Name: "컬럼 표시 여부"
          },
          {
            Name: "컬럼 정보 저장"
          },
          {
            Name: "컬럼 정보 저장 취소"
          },
          {
            Name: "*-"
          },
          {
            Name: "필터행 생성"
          },
          {
            Name: "필터 감추기"
          }
        ],
        OnSave: function (item, data) {
          var sheet = this.Sheet.Dialog ? this.Sheet.Dialog : this.Sheet;
          if (item) {
            var col = item.Owner.Col;
            switch (item.Name) {
              case '컬럼 감추기':
                if ((sheet.id.indexOf('pivotSheet_') == 0) && item.Owner.Row[col+'Span'] > 1) {
                  var rowSpan = item.Owner.Row[col+'Span'];
                  var colIdx = sheet.getColIndex(col, true);
                  for (var i = 0; i < rowSpan; i++) {
                    var mergedCol = sheet.getColByIndex(colIdx + i, true);
                    if (sheet.Cols[mergedCol].Visible) sheet.hideCol(mergedCol, 1, null, 0);
                  }
                  sheet.rerender();
                } else sheet.hideCol(col, 1, null, 1);
                break;
              case '컬럼 감추기 취소':
                if ((sheet.id.indexOf('pivotSheet_') == 0) && item.Owner.Row[col+'Span'] > 1) {
                  sheet.showCol(null, null, 0);
                  sheet.rerender();
                } else sheet.showCol(null, null, 1);
                break;
              case '컬럼 정보 저장':
                this.Sheet.saveCurrentInfo();
                break;
              case '컬럼 정보 저장 취소':
                this.Sheet.clearCurrentInfo();
                this.Sheet.showMessageTime({
                  message: "컬럼 정보를 삭제하였습니다.<br>새로고침하시면 초기 설정의 시트를 확인하실 수 있습니다."
                });
                break;
              case '필터행 생성':
                this.Sheet.showFilterRow();
                break;
              case '필터 감추기':
                this.Sheet.hideFilterRow();
                break;
            }
          }
        }
      },
      Height: 40
    },

    //데이터 영역 모든 행에 대한 설정
    Row: {
      Height: 40,
      // AlternateColor:"#F1F1F1",  //짝수행에 대한 배경색
      // Menu:{ //마우스 우측버특 클릭시 보여지는 메뉴 설정 (메뉴얼에서 Appedix/Menu 참고)
      //   "Items":[
      //     {"Name":"다운로드","Caption":1},
      //     {"Name":"Excel","Value":"xls"},
      //     {"Name":"text","Value":"txt"},
      //     {"Name":"pdf","Value":"pdf"},
      //     // {"Name":"-"},
      //     {"Name":"데이터 수정","Caption":1},
      //     {"Name":"데이터 추가/제거",Menu:1,"Items":[
      //       {"Name":"위로 행 추가","Value":"addAbove"},
      //       {"Name":"아래로 행 추가","Value":"addBelow"},
      //       {"Name":"행 삭제","Value":"del"}
      //     ]},
      //     {"Name":"데이터 이동",Menu:1,"Items":[
      //       {"Name":"위로로 이동","Value":"moveAbove"},
      //       {"Name":"아래로 이동","Value":"moveBelow"},
      //     ]}

      //   ],
      //   "OnSave":function(item,data){//메뉴 선택시 발생 이벤트
      //     switch(item.Value){
      //       case 'xls':
      //         try{
      //           this.Sheet.down2Excel({FileName:"test.xlsx",SheetDesign:1});
      //         }catch(e){
      //           if(e.message.indexOf("down2Excel is not a function")>-1){
      //               console.log("%c 경고","color:#FF0000"," : ibsheet-excel.js 파일이 필요합니다.");
      //           }
      //         }
      //         break;
      //       case 'txt':
      //         try{
      //           this.Sheet.down2Text();
      //         }catch(e){
      //           if(e.message.indexOf("down2Text is not a function")>-1){
      //             console.log("%c 경고","color:#FF0000"," : ibsheet-excel.js 파일이 필요합니다.");
      //           }
      //         }
      //         break;
      //       case 'pdf':
      //         try{
      //           this.Sheet.down2Pdf();
      //         }catch(e){
      //           if(e.message.indexOf("down2Pdf is not a function")>-1){
      //             console.log("%c 경고","color:#FF0000"," : ibsheet-excel.js 파일이 필요합니다.");
      //           }
      //         }
      //         break;
      //       case 'addAbove'://위로 추가
      //         var nrow = item.Owner.Row;
      //         this.Sheet.addRow({next:nrow});
      //         break;
      //       case 'addBelow'://아래추가
      //         var nrow = this.Sheet.getNextRow(item.Owner.Row);
      //         this.Sheet.addRow({next:nrow});
      //         break;
      //       case 'del'://삭제
      //         var row = item.Owner.Row;
      //         this.Sheet.deleteRow(row);
      //         break;

      //       case 'moveAbove'://위로 이동
      //           var row = item.Owner.Row;
      //           var nrow = this.Sheet.getPrevRow(item.Owner.Row);
      //           this.Sheet.moveRow({row:row,next:nrow});
      //         break;
      //       case 'moveBelow'://아래로 이동
      //           var row = item.Owner.Row;
      //           var nrow = this.Sheet.getNextRow(this.Sheet.getNextRow(item.Owner.Row));
      //           this.Sheet.moveRow({row:row,next:nrow});
      //         break;
      //     }
      //   }
      // }
    }
  },
  Events: {
    onKeyDown: function (evtParam) {
      if (evtParam.prefix === "CtrlAlt" && evtParam.key == 84) {
        evtParam.sheet.createPivotDialog();
      }
    },onReadMenu: function (evt) {
      if (evt.row.Kind == "Header") {
        if (!evt || !evt.menu) return;
        var item, index;

        if (evt.menu.Items) {
          for (var i = 0; i < evt.menu.Items.length; i++) {
            if (evt.menu.Items[i].Name == "컬럼 표시 여부") {
              index = i;
              item = evt.menu.Items[i];
              break;
            }
          }
        } else return;

        var sheet = evt.sheet;
        if (!item || !sheet) return;

        if (item.Name == "컬럼 표시 여부") {
          if (evt.menu._added) {
            setItemBool(item.Items, sheet);
            if (item.Items[0].Name == "전체 선택 / 해제") item.Items[0].Value = checkCols(sheet);
          } else if (showContextMenu(evt, index)) evt.menu._added = true;
        }
      }
    }
  }
};
/**
 * IBSheet 객체에 커스텀 메뉴 관련 함수들을 저장합니다.
 * 이 객체의 각 함수는 컬럼 표시 여부 컨텍스트 메뉴 동작을 제어하는 데 사용됩니다.
 * 시트 외부 요소에 아래 함수들을 사용하여 컬럼 표시 여부 컨텍스트 메뉴를 사용할 수 있습니다.
 */
_IBSheet.MenuFunctions = {
  getContextMenu: getContextMenu,
  setItemBool: setItemBool,
  toggleCols: toggleCols,
};
/**
 * 메뉴의 OnSave 이벤트에서 호출되어, 체크 된 열의 표시 여부를 토글합니다.
 * @param {object} sheet // IBSheet 객체
 * @param {array} data // 표시할 열의 이름 배열
 */
function toggleCols(sheet, data) {
  if (data.length > 0) {
    var cols = sheet.getCols();
    var version = sheet.IBSheetVersion.split('-')[0].split('.');
    var render = sheet.GroupMain || (parseInt(version[1]) <= 1 && parseInt(version[2]) == 0 && parseInt(version[3]) < 65) ? 1 : 0;

    for (var i = 0; i < cols.length; i++) {
      if (data.indexOf(cols[i] + "_item") != -1) {
        sheet.showCol(cols[i], null, render);
        delete sheet.Cols[cols[i]].UserHidden;
      } else sheet.hideCol(cols[i], 1, null, render);
    }
  
    if (!render) sheet.rerender();
  } else sheet.showMessageTime({ message: '최소 1개의 컬럼은 보여야합니다.' });
}
/**
 * 컬럼 표시 여부 컨텍스트 메뉴의 체크박스의 체크 여부를 설정합니다.
 * @param {array} items // 메뉴 아이템 배열
 * @param {object} sheet // IBSheet 객체
 */
function setItemBool(items, sheet) {
  if (!items && !sheet) return;
  for (var i = 0; i < items.length; i++) {
    var currentItem = items[i];
    if (currentItem.Items) setItemBool(currentItem.Items, sheet);
    currentItem.Value = sheet.getAttribute(null, currentItem.sName, 'Visible');
  }
}
/**
 * 시트의 onreadMenu 이벤트에서 호출되어, 컬럼 표시 여부 컨텍스트 메뉴를 표시합니다.
 * 피벗테이블인 경우 컬럼 감추기 및 컬럼 감추기 취소 메뉴가 표시됩니다.
 * @param {object} evt // IBSheet 이벤트 객체
 */
function showContextMenu(evt, index) {
  if (!evt) return;
  evt.menu.Items.splice(index, 1);
  if (evt.sheet.MultiRecord) return;
  if (!evt.sheet.PivotSheet || evt.sheet.id.indexOf("pivotSheet_") == -1) {
    var itemsToInsert = [{ Name: "*-" }, getContextMenu(evt.sheet), { Name: "*-" }]
    if (index === 0) itemsToInsert.shift();
    if (index === evt.menu.Items.length) itemsToInsert.pop();

    evt.menu.Items.splice.apply(evt.menu.Items, [index, 0].concat(itemsToInsert));
    return true;
  } else {
    // 피벗 테이블 사용 시 메뉴
    evt.menu.Items.unshift({
      Name: "컬럼 감추기"
    }, {
      Name: "컬럼 감추기 취소"
    }, {
      Name: "*-"
    });
  }
}

function checkCols(sheet) {
  return sheet.getCols("UserHidden").length == 0;
}

/**
 * 시트의 보여지는 컬럼을 기준으로 메뉴 아이템을 생성합니다.
 * 
 * @param {object} sheet // IBSheet 객체
 * @returns object // 생성된 메뉴 아이템 객체
 */
function getContextMenu(sheet) {
  if (!sheet) return;
  var cols = sheet.getCols();
  var MergeHeaderMap = [];
  var newItems = [];

  var newMenu = {
    Name: "컬럼 표시 여부",
    Menu: 1,
    Buttons:[ "Ok", "Cancel" ],
    ExpandTime: 0,
    CollapseOther: false,
    MaxHeight: 350,
    Items: [
      {
        Name: "전체 선택 / 해제",
        Bool: 1,
        Value: checkCols(sheet),
        CheckAll: 1
      }
    ]
  };

  // 헤더 맵 생성
  for (var r = sheet.Rows.Header; r; r = r.nextSibling) {
    if (r.Kind !== "Header") break;
    MergeHeaderMap.push((function (cols, r) {
      var result = [];
      for (var i = 0; i < cols.length; i++) {
        result.push(r[cols[i]]);
      }
      return result;
    })(cols, r));
  }

  for (var i = 0; i < MergeHeaderMap[0].length; i++) {
    var currentCategory = newItems;

    if (sheet.Cols[cols[i]].Visible || sheet.Cols[cols[i]].UserHidden) {
      for (var j = 0; j < MergeHeaderMap.length; j++) {
        var currentName = MergeHeaderMap[j][i] || cols[i];
        if (typeof currentName !== 'String') currentName = String(currentName);

        var currentItem = {
          Name: currentName,
          Text: currentName.replace(/\</g, "&lt;").replace(/\>/g,"&gt;"),
          sName: cols[i],
          rowIdx: j,
          Level: 1,
          Expanded: 1,
          Items: [],
          Value: sheet.getAttribute(null, cols[i], 'Visible'),
          treeLevel: 1
        };
        currentCategory.push(currentItem);
      }
    }
  }
  newItems = mergeRows(newItems, sheet.HeaderMerge);
  newItems = setItemLevel(newItems, MergeHeaderMap.length, sheet);
  newMenu.Items = newMenu.Items.concat(newItems);
  newMenu.OnSave = function (item, data) {
    if (data) toggleCols(sheet, data);
  };
  return newMenu;
}
// 중복된 열 병합 수행
function mergeRows(arr, headerMerge) {
  var result = [];
  var nameMap = {};

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var key = item.Name;

    if (!nameMap[key] || (nameMap[key] && (nameMap[key].sName != item.sName))) {
      nameMap[key] = assign({}, item);
      result.push(nameMap[key]);
    } else if (Math.abs(nameMap[key].rowIdx - item.rowIdx) === 1 && (headerMerge && headerMerge != 2)) {
      nameMap[key] = assign(nameMap[key], item);
    } else {
      nameMap[key] = assign({}, item);
      result.push(nameMap[key]);
    }
  }

  return result;
}
// Items의 구조를 트리화
function setItemLevel(arr, idx, sheet) {
  var result = [];
  var map = {};
  var headerMerge = sheet.HeaderMerge;

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var key = item.sName;
    var newItem = assign({}, item);

    if (newItem.rowIdx == idx - 1) {
      delete newItem.Level;
      delete newItem.Expanded;
      delete newItem.Items;
      newItem.Name = newItem.sName + "_item";
      newItem.Bool = 1;
      newItem.Left = 1;
    }

    if (!map[key]) {
      result.push(newItem);
    } else {
      var parent = map[key];
      if (!parent.Items) parent.Items = [];
      newItem.treeLevel = parent.treeLevel + 1;
      parent.Items.push(newItem);
    }

    map[key] = newItem;
  }

  return headerMerge < 2 ? result : mergeCol(result);
}
// 컬럼 병합
function mergeCol(result) {
  var mergedArr = [];

  for (var i = 0; i < result.length; i++) {
    var item = result[i];
    var existingItem = (function (arr, item) {
      for (var j = 0; j < arr.length; j++) {
        if (arr[j].Text === item.Text && arr[j].Name == item.Name) return arr[j];
      }
      return undefined;
    }(mergedArr, item));

    if (existingItem && existingItem.Items && item.Items) existingItem.Items = mergeCol(existingItem.Items.concat(item.Items)); 
    else mergedArr.push(item);
  }

  return mergedArr;
}
/**
 * ie호환용 객체 병합 함수
 * @param {object} target // 대상 객체
 * @returns {object} // 병합된 객체
 */
function assign(target) {
  if (target == null) return;

  target = Object(target);
  for (var index = 1; index < arguments.length; index++) {
    var source = arguments[index];
    if (source != null) {
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
      }
    }
  }
  return target;
}

window.IB_Preset = {
  // 날짜 시간 포멧
  "YMD": {
    Type: "Date",
    Align: "Center",
    Width: 110,
    Format: 'yyyy/MM/dd',
    DataFormat: 'yyyyMMdd',
    EditFormat: 'yyyyMMdd',
    Size: 8,
    EmptyValue: "<span style='color:#AAA'>년,월,일 순으로 숫자만 입력해 주세요.</span>"
  },
  "YM": {
    Type: "Date",
    Align: "Center",
    Width: 80,
    Format: 'yyyy/MM',
    DataFormat: 'yyyyMM',
    EditFormat: 'yyyyMM',
    Size: 6,
    EmptyValue: "<span style='color:#AAA'>년,월 순으로 숫자만 입력해 주세요.</span>"
  },
  "MD": {
    Type: "Date",
    Align: "Center",
    Width: 60,
    Format: 'MM/dd',
    EditFormat: 'MMdd',
    DataFormat: 'MMdd',
    Size: 4,
    EmptyValue: "<span style='color:#AAA'>월,일 순으로 숫자만 입력해 주세요.</span>"
  },
  "HMS": {
    Type: "Date",
    Align: "Center",
    Width: 70,
    Format: 'HH:mm:ss',
    EditFormat: 'HHmmss',
    DataFormat: 'HHmmss',
    Size: 8,
    EmptyValue: "<span style='color:#AAA'>시,분,초 순으로 8개 숫자만 입력해 주세요.</span>"
  },
  "HM": {
    Type: "Date",
    Align: "Center",
    Width: 70,
    Format: 'HH:mm',
    EditFormat: 'HHmm',
    DataFormat: 'HHmm',
    Size: 6,
    EmptyValue: "<span style='color:#AAA'>시,분 순으로 4개 숫자만 입력해 주세요.</span>"
  },
  "YMDHMS": {
    Type: "Date",
    Align: "Center",
    Format: 'yyyy/MM/dd HH:mm:ss',
    Width: 150,
    EditFormat: 'yyyyMMddHHmmss',
    DataFormat: 'yyyyMMddHHmmss',
    Size: 14,
    EmptyValue: "<span style='color:#AAA'>숫자만 입력(ex:20190514153020)</span>"
  },
  "YMDHM": {
    Type: "Date",
    Align: "Center",
    Format: 'yyyy/MM/dd HH:mm',
    Width: 150,
    EditFormat: 'yyyyMMddHHmm',
    DataFormat: 'yyyyMMddHHmm',
    Size: 12,
    EmptyValue: "<span style='color:#AAA'>숫자만 입력(ex:201905141530)</span>"
  },
  "MDY": {
    Type: "Date",
    Align: "Center",
    Format: 'MM-dd-yyyy',
    Width: 110,
    EditFormat: 'MMddyyyy',
    DataFormat: 'yyyyMMdd',
    Size: 8,
    EmptyValue: "<span style='color:#AAA'>월,일,년 순으로 숫자만 입력해 주세요.</span>"
  },
  "DMY": {
    Type: "Date",
    Align: "Center",
    Format: 'dd-MM-yyyy',
    Width: 110,
    EditFormat: 'ddMMyyyy',
    DataFormat: 'yyyyMMdd',
    Size: 8,
    EmptyValue: "<span style='color:#AAA'>일,월,년 순으로 숫자만 입력해 주세요.</span>"
  },

  // 숫자 포멧
  "Integer": {
    Type: "Int",
    Align: "Right",
    Format: "#,##0",
    Width: 100
  },
  "NullInteger": {
    Type: "Int",
    Align: "Right",
    Format: "#,###",
    Width: 100
  },
  "Float": {
    Type: "Float",
    Align: "Right",
    Format: "#,##0.######",
    Width: 100
  },
  "NullFloat": {
    Type: "Float",
    Align: "Right",
    Format: "#,###.######",
    Width: 100
  },

  // 기타포멧
  "IdNo": {
    Type: "Text",
    Align: "Center",
    CustomFormat: "IdNo"
  },
  "SaupNo": {},
  "PostNo": {},
  "CardNo": {},
  "PhoneNo": {},
  "Number": {},

  // ibsheet7 migration
  // Popup,PopupEdit
  "Popup": {
    "Type": "Text",
    "Width": 100,
    "Align": "Center",
    "ButtonFormula": function (fr) {
      return fr.Sheet.getCanEdit(fr.Row, fr.Col) ? fr.Sheet.Cols[fr.Col].Button : "";
    },
    "Button": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgNjQwIDY0MCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1Ij48ZGVmcz48cGF0aCBkPSJNMjc5LjczIDM0LjdMMjg5LjAxIDM1LjY0TDI5OC4xNyAzNi45NUwzMDcuMjIgMzguNjFMMzE2LjEzIDQwLjYyTDMyNC45MiA0Mi45OEwzMzMuNTYgNDUuNjZMMzQyLjA1IDQ4LjY4TDM1MC4zOCA1Mi4wMUwzNTguNTUgNTUuNjZMMzY2LjU1IDU5LjYxTDM3NC4zNyA2My44NkwzODIuMDEgNjguMzlMMzg5LjQ1IDczLjIxTDM5Ni42OCA3OC4zMUw0MDMuNzEgODMuNjdMNDEwLjUzIDg5LjNMNDE3LjEyIDk1LjE3TDQyMy40OCAxMDEuMjlMNDI5LjYgMTA3LjY1TDQzNS40OCAxMTQuMjRMNDQxLjEgMTIxLjA2TDQ0Ni40NiAxMjguMDlMNDUxLjU2IDEzNS4zM0w0NTYuMzggMTQyLjc3TDQ2MC45MiAxNTAuNEw0NjUuMTcgMTU4LjIyTDQ2OS4xMiAxNjYuMjJMNDcyLjc2IDE3NC4zOUw0NzYuMSAxODIuNzJMNDc5LjExIDE5MS4yMkw0ODEuOCAxOTkuODZMNDg0LjE1IDIwOC42NEw0ODYuMTYgMjE3LjU2TDQ4Ny44MiAyMjYuNkw0ODkuMTMgMjM1Ljc2TDQ5MC4wNyAyNDUuMDRMNDkwLjY0IDI1NC40Mkw0OTAuODMgMjYzLjlMNDkwLjY0IDI3My4zOEw0OTAuMDcgMjgyLjc2TDQ4OS4xMyAyOTIuMDRMNDg3LjgyIDMwMS4yTDQ4Ni4xNiAzMTAuMjVMNDg0LjE1IDMxOS4xNkw0ODEuOCAzMjcuOTVMNDc5LjExIDMzNi41OUw0NzYuMSAzNDUuMDhMNDcyLjc2IDM1My40MUw0NjkuMTIgMzYxLjU4TDQ2NS4xNyAzNjkuNThMNDYwLjkyIDM3Ny40TDQ1Ni4zOCAzODUuMDRMNDUxLjczIDM5Mi4yMkw1OTYuOTcgNTM3LjQ2TDUzNC40MyA2MDBMMzg5LjE5IDQ1NC43NkwzODIuMDEgNDU5LjQxTDM3NC4zNyA0NjMuOTVMMzY2LjU1IDQ2OC4yTDM1OC41NSA0NzIuMTVMMzUwLjM4IDQ3NS43OUwzNDIuMDUgNDc5LjEzTDMzMy41NiA0ODIuMTRMMzI0LjkyIDQ4NC44M0wzMTYuMTMgNDg3LjE4TDMwNy4yMiA0ODkuMTlMMjk4LjE3IDQ5MC44NUwyODkuMDEgNDkyLjE2TDI3OS43MyA0OTMuMUwyNzAuMzUgNDkzLjY3TDI2MC44NyA0OTMuODZMMjUxLjM5IDQ5My42N0wyNDIuMDEgNDkzLjFMMjMyLjczIDQ5Mi4xNkwyMjMuNTcgNDkwLjg1TDIxNC41MyA0ODkuMTlMMjA1LjYxIDQ4Ny4xOEwxOTYuODMgNDg0LjgzTDE4OC4xOSA0ODIuMTRMMTc5LjY5IDQ3OS4xM0wxNzEuMzYgNDc1Ljc5TDE2My4xOSA0NzIuMTVMMTU1LjE5IDQ2OC4yTDE0Ny4zNyA0NjMuOTVMMTM5Ljc0IDQ1OS40MUwxMzIuMyA0NTQuNTlMMTI1LjA2IDQ0OS40OUwxMTguMDMgNDQ0LjEzTDExMS4yMSA0MzguNTFMMTA0LjYyIDQzMi42M0w5OC4yNiA0MjYuNTFMOTIuMTQgNDIwLjE1TDg2LjI3IDQxMy41Nkw4MC42NCA0MDYuNzRMNzUuMjggMzk5LjcxTDcwLjE4IDM5Mi40OEw2NS4zNiAzODUuMDRMNjAuODIgMzc3LjRMNTYuNTggMzY5LjU4TDUyLjYzIDM2MS41OEw0OC45OCAzNTMuNDFMNDUuNjUgMzQ1LjA4TDQyLjYzIDMzNi41OUwzOS45NSAzMjcuOTVMMzcuNTkgMzE5LjE2TDM1LjU4IDMxMC4yNUwzMy45MiAzMDEuMkwzMi42MSAyOTIuMDRMMzEuNjcgMjgyLjc2TDMxLjEgMjczLjM4TDMwLjkxIDI2My45TDMxLjEgMjU0LjQyTDMxLjY3IDI0NS4wNEwzMi42MSAyMzUuNzZMMzMuOTIgMjI2LjZMMzUuNTggMjE3LjU2TDM3LjU5IDIwOC42NEwzOS45NSAxOTkuODZMNDIuNjMgMTkxLjIyTDQ1LjY1IDE4Mi43Mkw0OC45OCAxNzQuMzlMNTIuNjMgMTY2LjIyTDU2LjU4IDE1OC4yMkw2MC44MiAxNTAuNEw2NS4zNiAxNDIuNzdMNzAuMTggMTM1LjMzTDc1LjI4IDEyOC4wOUw4MC42NCAxMjEuMDZMODYuMjcgMTE0LjI0TDkyLjE0IDEwNy42NUw5OC4yNiAxMDEuMjlMMTA0LjYyIDk1LjE3TDExMS4yMSA4OS4zTDExOC4wMyA4My42N0wxMjUuMDYgNzguMzFMMTMyLjMgNzMuMjFMMTM5Ljc0IDY4LjM5TDE0Ny4zNyA2My44NkwxNTUuMTkgNTkuNjFMMTYzLjE5IDU1LjY2TDE3MS4zNiA1Mi4wMUwxNzkuNjkgNDguNjhMMTg4LjE5IDQ1LjY2TDE5Ni44MyA0Mi45OEwyMDUuNjEgNDAuNjJMMjE0LjUzIDM4LjYxTDIyMy41NyAzNi45NUwyMzIuNzMgMzUuNjRMMjQyLjAxIDM0LjdMMjUxLjM5IDM0LjEzTDI2MC44NyAzMy45NEwyNzAuMzUgMzQuMTNMMjc5LjczIDM0LjdaTTI0OS4yMyAxMjIuNDhMMjQzLjUxIDEyMy4wNkwyMzcuODYgMTIzLjg3TDIzMi4yOCAxMjQuODlMMjI2Ljc3IDEyNi4xM0wyMjEuMzUgMTI3LjU5TDIxNi4wMiAxMjkuMjRMMjEwLjc4IDEzMS4xTDIwNS42NCAxMzMuMTZMMjAwLjYgMTM1LjQxTDE5NS42NiAxMzcuODVMMTkwLjg0IDE0MC40N0wxODYuMTMgMTQzLjI3TDE4MS41NCAxNDYuMjRMMTc3LjA3IDE0OS4zOUwxNzIuNzMgMTUyLjdMMTY4LjUzIDE1Ni4xN0wxNjQuNDYgMTU5Ljc5TDE2MC41NCAxNjMuNTdMMTU2Ljc2IDE2Ny40OUwxNTMuMTQgMTcxLjU2TDE0OS42NyAxNzUuNzZMMTQ2LjM2IDE4MC4xTDE0My4yMSAxODQuNTdMMTQwLjI0IDE4OS4xNkwxMzcuNDQgMTkzLjg3TDEzNC44MiAxOTguNjlMMTMyLjM4IDIwMy42M0wxMzAuMTMgMjA4LjY3TDEyOC4wNyAyMTMuODFMMTI2LjIxIDIxOS4wNUwxMjQuNTYgMjI0LjM4TDEyMy4xIDIyOS44TDEyMS44NiAyMzUuMzFMMTIwLjg0IDI0MC44OUwxMjAuMDMgMjQ2LjU0TDExOS40NSAyNTIuMjZMMTE5LjEgMjU4LjA1TDExOC45OCAyNjMuOUwxMTkuMSAyNjkuNzVMMTE5LjQ1IDI3NS41NEwxMjAuMDMgMjgxLjI2TDEyMC44NCAyODYuOTJMMTIxLjg2IDI5Mi41TDEyMy4xIDI5OEwxMjQuNTYgMzAzLjQyTDEyNi4yMSAzMDguNzVMMTI4LjA3IDMxMy45OUwxMzAuMTMgMzE5LjEzTDEzMi4zOCAzMjQuMTdMMTM0LjgyIDMyOS4xMUwxMzcuNDQgMzMzLjkzTDE0MC4yNCAzMzguNjRMMTQzLjIxIDM0My4yM0wxNDYuMzYgMzQ3LjdMMTQ5LjY3IDM1Mi4wNEwxNTMuMTQgMzU2LjI0TDE1Ni43NiAzNjAuMzFMMTYwLjU0IDM2NC4yM0wxNjQuNDYgMzY4LjAxTDE2OC41MyAzNzEuNjRMMTcyLjczIDM3NS4xMUwxNzcuMDcgMzc4LjQyTDE4MS41NCAzODEuNTZMMTg2LjEzIDM4NC41M0wxOTAuODQgMzg3LjMzTDE5NS42NiAzODkuOTZMMjAwLjYgMzkyLjM5TDIwNS42NCAzOTQuNjRMMjEwLjc4IDM5Ni43TDIxNi4wMiAzOTguNTZMMjIxLjM1IDQwMC4yMkwyMjYuNzcgNDAxLjY3TDIzMi4yOCA0MDIuOTFMMjM3Ljg2IDQwMy45NEwyNDMuNTEgNDA0Ljc0TDI0OS4yMyA0MDUuMzJMMjU1LjAyIDQwNS42N0wyNjAuODcgNDA1Ljc5TDI2Ni43MiA0MDUuNjdMMjcyLjUxIDQwNS4zMkwyNzguMjMgNDA0Ljc0TDI4My44OSA0MDMuOTRMMjg5LjQ3IDQwMi45MUwyOTQuOTcgNDAxLjY3TDMwMC4zOSA0MDAuMjJMMzA1LjcyIDM5OC41NkwzMTAuOTYgMzk2LjdMMzE2LjEgMzk0LjY0TDMyMS4xNCAzOTIuMzlMMzI2LjA4IDM4OS45NkwzMzAuOSAzODcuMzNMMzM1LjYxIDM4NC41M0wzNDAuMiAzODEuNTZMMzQ0LjY3IDM3OC40MkwzNDkuMDEgMzc1LjExTDM1My4yMSAzNzEuNjRMMzU3LjI4IDM2OC4wMUwzNjEuMiAzNjQuMjNMMzY0Ljk4IDM2MC4zMUwzNjguNjEgMzU2LjI0TDM3Mi4wOCAzNTIuMDRMMzc1LjM5IDM0Ny43TDM3OC41MyAzNDMuMjNMMzgxLjUgMzM4LjY0TDM4NC4zIDMzMy45M0wzODYuOTMgMzI5LjExTDM4OS4zNiAzMjQuMTdMMzkxLjYxIDMxOS4xM0wzOTMuNjcgMzEzLjk5TDM5NS41MyAzMDguNzVMMzk3LjE5IDMwMy40MkwzOTguNjQgMjk4TDM5OS44OCAyOTIuNUw0MDAuOTEgMjg2LjkyTDQwMS43MSAyODEuMjZMNDAyLjI5IDI3NS41NEw0MDIuNjQgMjY5Ljc1TDQwMi43NiAyNjMuOUw0MDIuNjQgMjU4LjA1TDQwMi4yOSAyNTIuMjZMNDAxLjcxIDI0Ni41NEw0MDAuOTEgMjQwLjg5TDM5OS44OCAyMzUuMzFMMzk4LjY0IDIyOS44TDM5Ny4xOSAyMjQuMzhMMzk1LjUzIDIxOS4wNUwzOTMuNjcgMjEzLjgxTDM5MS42MSAyMDguNjdMMzg5LjM2IDIwMy42M0wzODYuOTMgMTk4LjY5TDM4NC4zIDE5My44N0wzODEuNSAxODkuMTZMMzc4LjUzIDE4NC41N0wzNzUuMzkgMTgwLjFMMzcyLjA4IDE3NS43NkwzNjguNjEgMTcxLjU2TDM2NC45OCAxNjcuNDlMMzYxLjIgMTYzLjU3TDM1Ny4yOCAxNTkuNzlMMzUzLjIxIDE1Ni4xN0wzNDkuMDEgMTUyLjdMMzQ0LjY3IDE0OS4zOUwzNDAuMiAxNDYuMjRMMzM1LjYxIDE0My4yN0wzMzAuOSAxNDAuNDdMMzI2LjA4IDEzNy44NUwzMjEuMTQgMTM1LjQxTDMxNi4xIDEzMy4xNkwzMTAuOTYgMTMxLjFMMzA1LjcyIDEyOS4yNEwzMDAuMzkgMTI3LjU5TDI5NC45NyAxMjYuMTNMMjg5LjQ3IDEyNC44OUwyODMuODkgMTIzLjg3TDI3OC4yMyAxMjMuMDZMMjcyLjUxIDEyMi40OEwyNjYuNzIgMTIyLjEzTDI2MC44NyAxMjIuMDFMMjU1LjAyIDEyMi4xM0wyNDkuMjMgMTIyLjQ4WiIgaWQ9ImJpVVlobFRwNiI+PC9wYXRoPjwvZGVmcz48Zz48Zz48Zz48dXNlIHhsaW5rOmhyZWY9IiNiaVVZaGxUcDYiIG9wYWNpdHk9IjEiIGZpbGw9IiM1OTU5NTkiIGZpbGwtb3BhY2l0eT0iMSI+PC91c2U+PC9nPjwvZz48L2c+PC9zdmc+"
  },
  // Status Type
  "STATUS": {
    Type: "Text",
    Align: "Center",
    Width: 50,
    Formula: "Row.Deleted ? 'D' : Row.Added ? 'I' : Row.Changed ? 'U' : 'R'",
    Format: {
      'I': '입력',
      'U': '수정',
      'D': '삭제',
      'R': ''
    }
  },
  // DelCheck Type
  "DelCheck": {
    Type: "Bool",
    Width: 50,
    OnChange: function (evtParam) {
      var chked = evtParam.row[evtParam.col];
      //신규행에 대해서는 즉시 삭제한다.
      if (evtParam.row.Added) {
        setTimeout(function () {
          evtParam.sheet.removeRow(evtParam.row);
        }, 30);
      } else {
        //행을 삭제 상태로 변경
        evtParam.row.Deleted = chked;
        function toggleCheck(row, render) {
          row.Deleted = chked;
          row.CanEdit = !evtParam.row[evtParam.col];
          if (!row[evtParam.col + "CanEdit"]) {
            row[evtParam.col + "CanEdit"] = true;
          }
          evtParam.sheet.setValue(row, evtParam.col, chked, render, {OnChange: true, OnEdit: true, OnSame: true});
        }

        // 체크 해제일 경우 부모행도 해제
        if (evtParam.sheet.MainCol && chked === 0 && evtParam.row.Level > 0){
          var prow = evtParam.sheet.getParentRows(evtParam.row);
          for (var j = 0; j < prow.length; j++) {
            var parent = prow[j];
            if (parent[evtParam.col] && parent[evtParam.col] == chked) continue;
            toggleCheck(parent, true);
          }
        }
        //자식행 추출
        var rows = evtParam.sheet.getChildRows(evtParam.row);
        rows.push(evtParam.row);
        var render = rows.length > 1 && evtParam.sheet.MainCol ? true : false;
        //모두 체크하고 편집 불가로 변경
        for (var i = 0; i < rows.length; i++) {
          var row = rows[i];
          if (row.id == evtParam.row.id) continue;
          toggleCheck(row, render);
        }
      }
    }
  },
  "TreeSumFormula": function(fr) {
    var sum = 0;

    if (fr.Row.childNodes.length) {
      for (var r = fr.Row.firstChild; r; r = r.nextSibling) {
        sum += r[fr.Col]; // 삭제 행, 빈 값, null 값을 제거하고 계산하고 싶은 경우 조건 변경
      }
    } else {
      fr.Row[fr.Col + 'CanEdit'] = 1;

      return fr.Row[fr.Col];
    }

    return sum;
  },
  "TreeAvgFormula": function(fr) {
    var avg = 0,
      sum = 0,
      count = 0;

    if (fr.Row.childNodes.length) {
      for (var r = fr.Row.firstChild; r; r = r.nextSibling) {
        // 삭제 행, 빈 값, null 값을 제거하고 계산하고 싶은 경우 조건 변경
        sum += r[fr.Col];
        count++;
        avg = count && (sum / count);
      }
    } else {
      fr.Row[fr.Col + 'CanEdit'] = 1;

      return fr.Row[fr.Col];
    }

    return avg;
  },
  "TreeCountFormula": function(fr) {
    var count = 0;

    if (fr.Row.childNodes.length) {
      for (var r = fr.Row.firstChild; r; r = r.nextSibling) {
        // 삭제 행, 빈 값, null 값을 제거하고 계산하고 싶은 경우 조건 변경
        fr.Row[fr.Col + 'Format'] = '#,##0'; // 포맷 변경
        count++;
      }
    } else {
      fr.Row[fr.Col + 'CanEdit'] = 1;

      return fr.Row[fr.Col];
    }

    return count;
  },
  "TreeMaxFormula": function(fr) {
    var max = Number.MIN_VALUE;

    if (fr.Row.childNodes.length) {
      for (var r = fr.Row.firstChild; r; r = r.nextSibling) {
        // 삭제 행, 빈 값, null 값을 제거하고 계산하고 싶은 경우 조건 변경
        if (max < r[fr.Col]) {
          max = r[fr.Col];
        }
      }
    } else {
      fr.Row[fr.Col + 'CanEdit'] = 1;

      return fr.Row[fr.Col];
    }

    return max;
  },
  "TreeMinFormula": function(fr) {
    var min = Number.MAX_VALUE;

    if (fr.Row.childNodes.length) {
      for (var r = fr.Row.firstChild; r; r = r.nextSibling) {
        // 삭제 행, 빈 값, null 값을 제거하고 계산하고 싶은 경우 조건 변경
        if (min > r[fr.Col]) {
          min = r[fr.Col];
        }
      }
    } else {
      fr.Row[fr.Col + 'CanEdit'] = 1;

      return fr.Row[fr.Col];
    }

    return min;
  },
};

function clone(obj) {
  if (obj === null || typeof (obj) !== 'object') return obj;
  var copy = obj.constructor();
  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = clone(obj[attr]);
    }
  }
  return copy;
}

/**
 * EditEnum + Suggest 의 기능을 조합하여 사용할 수 있는 API
 * 아래의 @param 인자들은 필수값입니다.
 * @method     makeEditEnumList
 * @param      url               ajax call을 위한 url
 * @param      searchStr         사용자가 입력하는 검색어
 * @param      showLine          사용자가 검색 컬럼에 표현할 아이템 개수
 * @param      method            사용자가 설정하는 method 방식
 * @param      reqHeaders        사용자가 설정하는 reqHeader
 * @param      colName           속성 값을 부여하는 열(Col) 이름
 * @return     string
 */
Fn.makeEditEnumList = function (params) {
  if (params == null || params.url == null || params.param == null || params.method == null || params.reqHeaders == null || params.colName == null) return result = "";

  var T = this;
  var result = '';
  var type = this.getAttribute(null, params.colName, "Type");

  if (!(type === "Text" || type === "Lines")) return result = "";

  T.ajax({
    url: params.url,
    param: params.param,
    sync: 1,
    method: params.method,
    reqHeaders: params.reqHeaders,
    callback: function (res, data) {
      /**
       *  data 양식은 json stringify 의 구조를 가지고 있어야 함.
       *  {"Enum":"|aaa|bbb, "EditEnum":"|aaa\t가나다라|bbb\t마바사아, "EnumKeys":"|1144010|1144033", "Result": 0}
       * Result가 -1 이면, 실패
       */

      var resultObj = JSON.parse(data);
      if (resultObj.Enum == null || resultObj.EditEnum == null || resultObj.EnumKeys == null || resultObj.Result === -1) return result = " 검색된 결과가 없습니다";

      var enumResult = resultObj.Enum;
      var editEnumResult = resultObj.EditEnum;
      var resultCode = resultObj.Result;

      T.setAttribute(null, params.colName, "Enum", enumResult);
      T.setAttribute(null, params.colName, "EnumKeys", enumResult);
      T.setAttribute(null, params.colName, "EditEnum", editEnumResult);

      var em = T.getAttribute(null, params.colName, "Enum");
      var enumKeys = T.getAttribute(null, params.colName, "EnumKeys");
      var editEnum = T.getAttribute(null, params.colName, "EditEnum");
      var text = em.substring(1).split(em.substring(0, 1));
      var keys = enumKeys.substring(1).split(enumKeys.substring(0, 1));
      var newFormat = {};

      for (var x = 0; x < keys.length; x++) {
        newFormat[keys[x]] = text[x];
      }

      T.setAttribute(null, params.colName, "Suggest", editEnum || em);
      T.setAttribute(null, params.colName, "Icon", "Defaults");
      T.setAttribute(null, params.colName, "Defaults", editEnum);
      T.setAttribute(null, params.colName, "Format", newFormat);
      T.setAttribute(null, params.colName, "EditFormat", newFormat);

      T.setAttribute(null, params.colName, "OnChange", function (e) {
        var v = e.row[e.col];

        if (typeof (e.sheet.Cols[e.col].Format[v]) != "undefined") return;

        if ((e.sheet.Cols[e.col]["EditEnum"] && e.sheet.Cols[e.col].EditEnum.indexOf(v) > 0)) {
          var idx = e.sheet.Cols[e.col]["EditEnum"].split("|").indexOf(v);
          var key = e.sheet.Cols[e.col]["EnumKeys"].split("|")[idx];
          e.row[e.col] = key;
          e.sheet.refreshCell(e.row, e.col);
          return;
        }
        e.sheet.refreshCell(e.row, e.col);
      });

      result = editEnumResult;
    }
  });

  return result;
};

/**
 * Format Value로 들어온 데이터를 Key 값으로 변경하는 API
 * 아래의 @param 인자들은 필수값입니다.
 * @method     convertData2FormatKey
 * @param      datas              변경할 data object
 * @param      cols               변경할 컬럼 list
 * @return     object
 */
Fn.convertData2FormatKey = function (datas, cols) {
  var row, format;

  for (var j = 0; j < cols.length; j++) {
    for (var i = 0; i < datas.length; i++) {
      row = datas[i];
      format = this.Cols[cols[j]].Format;

      if (row[cols[j]]) {
        for (let key in format) {
          if (format[key] === row[cols[j]]) {
            row[cols[j]] = key;
          }
        }
      }
    }
  }

  return datas; // 변경된 데이터 return
};

/*
ibsheet7 migration functions
*/
if (!_IBSheet.v7) _IBSheet.v7 = {};

/*
 * ibsheet7 AcceptKey 속성 대응
 * param list
 * objColumn : 시트 생성시 Cols객체의 컬럼
 * str : ibsheet7 AcceptKeys에 정의했던 스트링
 */
_IBSheet.v7.convertAcceptKeys = function (objColumn, str) {
  // EditMask를 통해 AcceptKeys를 유사하게 구현
  var acceptKeyArr = str.split("|");
  var mask = "";

  for (var i = 0; i < acceptKeyArr.length; i++) {
    switch (acceptKeyArr[i]) {
      case "E":
        mask += "|\\w";
        break;
      case "N":
        mask += "|\\d";
        break;
      case "K":
        mask += "|\\u3131-\\u314e|\\u314f-\\u3163|\\uac00-\\ud7a3"
        break;
      default:
        if (acceptKeyArr[i].substring(0, 1) == "[" && acceptKeyArr[i].substring(acceptKeyArr[i].length - 1) == "]") {
          var otherKeys = acceptKeyArr[i].substring(1, acceptKeyArr[i].length - 1);
          for (var x = 0; x < otherKeys.length; x++) {
            if (otherKeys[x] == "." || otherKeys[x] == "-") {
              mask += "|\\" + otherKeys[x];
            } else {
              mask += "|" + otherKeys[x];
            }
          }
        }
        break;
    }
  }
  objColumn.EditMask = "^[" + mask.substring(1) + "]*$";
};
//Date Format migration
//exam)
/*
//데이터 로드 이벤트에서 호출합니다.
options.Events.onBeforeDataLoad:function(obj){
  //날짜포맷 컬럼의 값을 ibsheet8에 맞게 변경하여 로드시킴
  IBSheet.v7.convertDateFormat(obj);
}
*/
_IBSheet.v7.convertDateFormat = function (obj) {
  var cdata = obj.data;
  var changeCol = {};
  //날짜 컬럼에 대한 포맷을 별도로 저장
  var cols = obj.sheet.getCols();
  for (var i = 0; i < cols.length; i++) {
    var colName = cols[i];

    if (obj.sheet.Cols[colName].Type === "Date") {
      //DataFormat이 없으면 EditFormat 이나 포맷에서 알파벳만 추출
      var format = (obj.sheet.Cols[colName].DataFormat) ? obj.sheet.Cols[colName].DataFormat : (obj.sheet.Cols[colName].EditFormat) ? obj.sheet.Cols[colName].EditFormat : obj.sheet.Cols[colName].Format.replace(/([^A-Za-z])+/g, "");
      changeCol[colName] = {
        format: format,
        length: format.length
      };
    }
  }

  if (Object.keys(changeCol).length !== 0) {
    var changeColKeys = Object.keys(changeCol);

    //DataFormat의 길이만큼 문자열을 자름
    for (var row = 0; row < cdata.length; row++) {
      for (var colName in cdata[row]) {
        if (changeColKeys.indexOf(colName) > -1) {
          // 문자열만 처리
          if (typeof ((cdata[row])[colName]) === "string") {
            //실제 값
            var v = (cdata[row])[colName];
            //MMdd만 값이 8자리 이상이면 중간에 4자리만 pick
            if (changeCol[colName].format === "MMdd" && v.length != 4) {
              if (v.length > 7) v = v.substr(4, 4);
            } else {
              //일반적으로 모두 포맷의 문자열 길이만큼 자름
              v = v.substr(0, changeCol[colName].length);
            }
            //수정한 값을 원래 위치에 대입
            (cdata[row])[colName] = v;
          }
        }
      }
    }
  }
};
/* ibsheet7의 Tree 구조 Json 데이터를 ibsheet8 형식에 맞게 파싱해주는 메소드 */
_IBSheet.v7.convertTreeData = function (data7) {
  var targetArr;
  var toString = Object.prototype.toString;
  switch (toString.call(data7)) {
    case "[object Object]":
      if (!(data7["data"] || data7["Data"]) ||
        toString.call((data7["data"] || data7["Data"])) !== "[object Array]")
        return false;
      targetArr = (data7["data"] || data7["Data"]);
      break;
    case "[object Array]":
      targetArr = data7;
      break;
    default:
      return false;
  }

  var P = null,
    N = null,
    c_level = 0,
    p_level = 0;
  targetArr = targetArr.reduce(function (accum, currentVal, curretIndex, array) {
    var cloneObj = clone(currentVal);

    if (P == null && N == null) P = N = accum;
    cloneObj["Level"] = cloneObj["level"] ? cloneObj["level"] : cloneObj["Level"];
    cloneObj["HaveChild"] = cloneObj["haveChild"] ? cloneObj["haveChild"] : cloneObj["HaveChild"];
    cloneObj["Level"] = (cloneObj["Level"] - 0) ? (cloneObj["Level"] - 0) : 0;

    if (accum.length == 0) {
      p_level = parseInt(cloneObj["Level"]) + 1;
      delete cloneObj["Level"];
      cloneObj.pData = accum;
      accum.push(cloneObj);
      P = accum;
    } else {
      c_level = parseInt(cloneObj["Level"]) + 1;
      if (p_level == 0 || p_level < c_level) {
        if (p_level != 0) {
          P = N;
        }
        p_level = c_level;
      } else if (p_level > c_level) {
        for (var k = 0; k < (p_level - c_level); k++) {
          if (P.pData) {
            P = P.pData;
          }
          if (P["Level"] < (c_level - 1)) {
            break;
          }
        }
        p_level = c_level;
      }

      if (P !== accum && !P.Items) {
        P.Items = [];
      }
      delete cloneObj["Level"];
      cloneObj.pData = P;
      if (P === accum) P.push(cloneObj);
      else P.Items.push(cloneObj);
    }
    N = cloneObj;

    return accum;
  }, []);

  delete data7["Data"];
  data7["data"] = targetArr;

  function removePData(arr) {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i];
      delete item.pData;
      if (item.Items) removePData(item.Items);
    }
  }
  removePData(data7.data);
  return data7;
};
/*
 * 일반 달력 사용시 사용 함수
 * @param   : id          - from혹은 to 날짜가 표시될 input 객체
 * @param   : format      - 날짜 형태 YMD
 * @version : 1.0.0.0,
 *
 * @sample1
 * <span>
 * <input  type="text" name="eDate" id="eDate" DATE='YMD'/>
 * <button class='calbtn' onclick='IBSheet.v7.IBS_Calendar("eDate","yyyy-MM-dd")'>달력</button>
 * </span>
 */
_IBSheet.v7.IBS_Calendar = function (id, format) {
  event.preventDefault();
  var opt = {
    Date: document.getElementById(id).value,
    Format: format,
    OnButtonClick: function (evt) {
      if (evt == 2) { //지우기
        document.getElementById(id).value = "";
      }
      calObj.Close();
    },
  };
  if (format === "yyyy-MM") opt.Buttons = 4;

  function calPickCallBack(v) {
    document.getElementById(id).value = IBSheet.dateToString(parseInt(v), format);
  }
  var calObj = IBSheet.showCalendar(opt, {
    Tag: id
  }, calPickCallBack);
}
/**
 * IBSheet8 사용자 함수
 * @description     IBSheet8의 기능을 사용하여 사용자 함수를 제공합니다.
 */
// ---------------------------------------------------------------------------------------------------------------------------
/**
 * 여러 개의 행을 한번에 hideRow 하는 API
 * @method     hideRows
 * @param      array[row objct]    rows   데이터 로우 객체를 담고있는 배열
 * @return     none
 */
Fn.hideRows = function (rows) {
  if (!Array.isArray(rows)) return;

  for (var i = 0; i < rows.length; i++) {
    this.hideRow(rows[i], 0, 1, 1);
  }
  this.renderBody();
}

/**
 * 시트에서 보여지는 데이터 로우 객체만을 반환하는 API
 * @method     getDataVisibleRows
 * @param      boolean   noSubTotal   소계/누계 행을 제외할지 여부
 * @return     array[row object]
 */
Fn.getDataVisibleRows = function (noSubTotal) {
  var row = this.getFirstVisibleRow();
  var rows = [];

  while (row) {
    if (row.Kind === 'Data') {
      if ((noSubTotal && row.Name !== "SubSum") || !noSubTotal) {
        rows[rows.length] = row;
      }
    }
    row = this.getNextVisibleRow(row);
  }

  return rows;
}

/**
 * 푸터 영역에 있는 포터 로우 객체들의 배열을 반환합니다.
 * @method     getFooterRows
 * @return     array[row object]
 */
Fn.getFooterRows = function () {
  if (!this.Foot) return;

  var rows = [];
  var row = this.Foot.firstChild;

  while (row) {
    rows.push(row);
    row = row.nextSibling;
  }

  return rows;
}

/**
 * 현재 포커스 되어있는 시트 객체를 반환합니다.
 * @method     getSheetFocused
 * @return     object
 */
Fn.getSheetFocused = function () {
  return _IBSheet.Focused;
}

/**
 * 소계에 설정된 옵션을 배열 형태로 반환합니다.
 * @method     getSubSumOptions
 * @return     array[option]
 */
Fn.getSubSumOptions = function () {
  return this.SubSumRowOptions;
}

/**
 * 시트의 태그를 반환합니다. 기본으로 div 태그, 인자 사용시 table 태그를 반환할 수 있습니다.
 * @method     getSubSumOptions
 * @param      boolean   tableTag   시트의 테이블 태그를 가져올지 여부
 * @return     element
 */
Fn.getSheetTag = function (tableTag) {
  return tableTag ? this.MainTable : this.MainTag;
}

/**
 * 시트의 높이를 반환합니다.
 * @method     getSheetHeight
 * @return     number
 */
Fn.getSheetHeight = function () {
  return this.MainTag && this.MainTag.offsetHeight;
}

/**
 * 시트의 너비를 반환합니다.
 * @method     getSheetWidth
 * @return     number
 */
Fn.getSheetWidth = function () {
  return this.MainTag && this.MainTag.offsetWidth;
}

/**
 * 시트의 태그 사이즈를 조정합니다. 해당 기능은 시트를 감싸고 있는 div 크기를 변화시킵니다.
 * number 입력시 px 로 자동으로 치환합니다.
 * 단위를 붙여서 입력시 그대로 입력됩니다.
 * @method     setSheetSize
 * @param      number @param string width   시트 태그의 width
 * @param      string @param string height  시트 태그의 height
 * @return     none
 */
Fn.setSheetSize = function (width, height) {
  if (!this.MainTag) return;

  if (typeof width === 'number') {
    width += "px";
  }
  if (width) {
    this.MainTag.style.width = width;
  }
  if (typeof height === 'number') {
    height += "px";
  }
  if (height) {
    this.MainTag.style.height = height;
  }
}

/**
 * fitSize 를 이용하여 전체 컬럼의 너비를 조정합니다.
 * @method     setAllFitSize
 * @return     none
 */
Fn.setAllFitSize = function () {
  var cols = this.getCols("Visible");

  for (var i = 0; i < cols.length; i++) {
    this.fitSize(cols[i]);
  }
}

/**
 *  setValue를 이용하여 하나 컬럼의 전체 데이터행 값을 일괄적으로 변경합니다.
 *  @method     setAllColValue
 *  @return     boolean
 */
Fn.setAllColValue = function (colName, value) {

  var dataRows = this.getDataRows();
  if (!colName || typeof value == undefined || !dataRows || dataRows.length > 10000) return false;

  for (var i = 0; i < dataRows.length; i++) {
    if (dataRows[i].Name != "SubSum") this.setValue({row : dataRows[i], col : colName, val: value, render: 1});
  }

  return true;
}
// ---------------------------------------------------------------------------------------------------------------------------
Fn.getAllRows = function(){
  var dataRows = this.getDataRows();
  var headerRows = this.getHeaderRows();
  if(this.Filter && this.Filter.Visible) headerRows.push(this.Filter);
  return headerRows.concat(dataRows);
}

/**
 * setAttribute를 이용하여 범위 내의 속성 값을 일괄적으로 설정합니다.
 * @method     setRangeAttribute
 * @param      object @param string startRow  속성값 일괄 설정 시작 데이터 로우 객체
 * @param      string @param string startCol  속성값 일괄 설정 시작 열이름
 * @param      object @param string endRow   속성값 일괄 설정 종료 데이터 로우 객체
 * @param      string @param string endCol  속성값 일괄 설정 종료 열이름
 * @param      string @param string attr   설정하고자 하는 속성명
 * @param      mixed @param mixed val  설정하고자 하는 속성 값
 * @return     boolean
 */
Fn.setRangeAttribute = function(startRow, startCol, endRow, endCol, attr, val) {
  var allRows = this.getAllRows(),
      startRowIdx = allRows.indexOf(startRow),
      endRowIdx = allRows.indexOf(endRow), 
      startColIdx = this.getColIndex(startCol, 1),
      endColIdx = this.getColIndex(endCol, 1);

  if (startRowIdx < 0 || startColIdx < 0 ||  endRowIdx < 0 || endColIdx < 0) return false;
  if (startRowIdx > endRowIdx || startColIdx > endColIdx) return false;
  if (val == undefined || attr == undefined) return false; 

  var lastRowIndex = this.getRowIndex(this.getLastRow());
  var colCount = this.getCols("Visible");
  if (lastRowIndex > -1 && (startRowIdx > lastRowIndex || endRowIdx > lastRowIndex)) return false;
  if (startColIdx > colCount - 1 || endColIdx > colCount - 1) return false;

  for (var row = startRow; row && row != this.getNextRow(endRow); 
       row = this.getNextRow(row) == null && row.Fixed == "Head" ? this.getFirstRow() : this.getNextRow(row)) {
    for (var col = startCol; col && col != this.getNextCol(endCol, 1); col = this.getNextCol(col, 1)){
      this.setAttribute(row, col, attr, val, 0);
    }
  }

  this.rerender();

  return true;
};

/**
 * setValue, 혹은 setString를 이용하여 범위 내의 셀 값을 일괄적으로 변경합니다.
 * @method     setRangeValue
 * @param      mixed @param mixed val  설정하고자 하는 값
 * @param      object @param string startRow  값 일괄 변경 시작 데이터 로우 객체
 * @param      string @param string startCol  값 일괄 변경 시작 열이름
 * @param      object @param string endRow   값 일괄 변경 종료 데이터 로우 객체
 * @param      string @param string endCol  값 일괄 변경 종료 열이름
 * @param      string @param string colSeparator 컬럼 구분자 사용시 사용할 컬럼 구분자
 * @param      string @param string rowSeparator 행 구분자 사용시 사용할 행 구분자
 * @param      string @param string type setValue를 사용할지, setString을 사용할지 여부 1: setValue 사용 2: setString 사용
 * @return     boolean
 */
Fn.setRangeValue = function(val, startRow, startCol, endRow, endCol, colSeparator, rowSeparator, type) {
  var allRows = this.getAllRows(),
      startRowIdx = allRows.indexOf(startRow),
      endRowIdx = allRows.indexOf(endRow), 
      startColIdx = this.getColIndex(startCol, 1),
      endColIdx = this.getColIndex(endCol, 1);

  if(val == undefined) return false;
  if (startRowIdx > endRowIdx || startColIdx > endColIdx) return false;

  var lastRowIndex = this.getRowIndex(this.getLastRow());
  var colCount = this.getCols("Visible");
  if (lastRowIndex > -1 && (startRowIdx > lastRowIndex || endRowIdx > lastRowIndex)) return false;
  if (startColIdx > colCount - 1 || endColIdx > colCount - 1) return false;

  if (colSeparator == undefined) colSeparator = "|";
  if (rowSeparator == undefined) rowSeparator = "^";

  var rowIdx = 0;
  var rowData;
  var colData;
  var isSeparat = false;

  if (val && typeof val == "string" && (val.indexOf(colSeparator) > -1 || val.indexOf(rowSeparator) > -1)) {
      isSeparat = true;
      rowData = val.split(rowSeparator);
  }
  
  for (var row = startRow; row && row != this.getNextRow(endRow); 
       row = this.getNextRow(row) == null && row.Fixed == "Head" ? this.getFirstRow() : this.getNextRow(row)) {

      var colIdx = 0;

      for (var col = startCol; col && col != this.getNextCol(endCol, 1); col = this.getNextCol(col, 1)){
          var v = null;

          if (!isSeparat) v = val;
          else {
            if(rowData[rowIdx]) {
              colData = rowData[rowIdx].split(colSeparator);
              if (colData[colIdx]) v = colData[colIdx];
            } 
          }

          if (v == undefined || v == null) {
            colIdx++;
            continue;
          }

          type ? this.setString(row, col, v, 0) : this.setValue(row, col, v, 0);

          colIdx++;
      }
      rowIdx++;
  }

  this.rerender();

  return true;
};

/**
 * 특정 행의 상태값을 반환합니다.
 * 상태값 반환 우선순위는 아래와 같습니다. 
 * 
 * 1. 행 상태에 Added가 포함된 경우 우선 무조건적으로 Added를 반환합니다.
 * 2. 행 상태에 Deleted가 포함된 경우 그 다음 무조건적으로 Deleted를 반환합니다.
 * 3. 그 이외의 경우에는 Changed를 반환합니다.
 * 4. 상태가 없는 경우에는 ""를 반환합니다.
 * @method     getRowStatus
 * @param      object @param row  상태값을 확인할 데이터 로우 객체
 */
Fn.getRowStatus = function(row) {
  if (row == null || typeof row != "object") return false;

  if (row.Added) return "Added";
  if (row.Deleted) return "Deleted";
  if (row.Changed) return "Changed";
  return "";
}
/*------------------------------------------------------------------------------
method : IBS_CopyForm2Sheet()
desc  : Form객체에 있는 내용을 시트에 복사
param list
param : json 유형

param 내부 설정값
sheet : 값을 입력 받을 ibsheet 객체 (필수)
form : copy할 폼객체 (필수)
row : ibsheet 객체의 행 (default : 현재 선택된 행)
sheetPreFiex : 맵핑할 시트의 SavaName 앞에 PreFix 문자 (default : "")
formPreFiex : 맵핑할 폼객체의 이름 혹은 id 앞에  PreFix 문자 (default : "")
-------------------------------------------------------------------------------*/
_IBSheet.v7.IBS_CopyForm2Sheet = function (param) {
  var sheetobj,
    formobj,
    row,
    sheetPreFix,
    frmPreFix,
    cols,
    col,
    colName,
    baseName,
    frmchild,
    fType,
    sType,
    sValue;

  if ((!param.sheet) || (typeof param.sheet.version !== "function")) {
    _IBSheet.v7.IBS_ShowErrMsg("sheet 인자가 없거나 ibsheet객체가 아닙니다.");
    return false;
  }
  if (param.form == null || typeof param.form !== "object" || param.form.tagName !== "FORM") {
    _IBSheet.v7.IBS_ShowErrMsg("form 인자가 없거나 FORM 객체가 아닙니다.");
    return false;
  }

  sheetobj = param.sheet;
  formobj = param.form;
  row = param.row == null ? sheetobj.getFocusedRow() : param.row;
  sheetPreFix = param.sheetPreFix == null ? "" : param.sheetPreFix;
  frmPreFix = param.formPreFix == null ? "" : param.formPreFix;
  if (typeof row === "undefined") {
    _IBSheet.v7.IBS_ShowErrMsg("row 인자가 없고, 선택된 행이 존재하지 않습니다.");
    return;
  }

  //Sheet의 컬럼개수만큼 찾아서 HTML의 Form 각 Control에 값을 설정한다.
  //컬럼개수만큼 루프 실행
  cols = sheetobj.getCols();
  for (var col = 0; col < cols.length; col++) {
    //컬럼의 별명을 문자열로 가져온다.
    colName = cols[col];

    //PreFix가 붙지 않은 형태의 SaveName을 가져온다.
    baseName = colName.substring(sheetPreFix.length);

    frmchild = null;
    try {
      //폼에 있는 해당 이름의 컨트롤을 가져온다.예)"frm_CardNo"
      frmchild = formobj[frmPreFix + baseName];
    } catch (e) {

    }

    //폼에 해당하는 이름의 컨트롤이 없는 경우는 계속 진행한다.
    if (frmchild == null) continue;

    fType = frmchild.type;
    sValue = "";

    //radio의 경우 frmchild가 배열형태가 되므로, frmchild.type으로는 타입을 알수 없다.
    if (typeof fType === "undefined" && frmchild.length > 0) fType = frmchild[0].type;
    sType = sheetobj.getType(row, colName);
    //일부 편집이 불가능한 타입의 컬럼은 건너뛰자.
    if (sType === "Button" || sType === "Link" || sType === "Img") continue;

    //타입별로 값을 설정한다.
    switch (fType) {
      case undefined:
      case "button":
      case "reset":
      case "submit":
        break;
      case "radio":
        for (var idx = 0; idx < frmchild.length; idx++) {
          if (frmchild[idx].checked) {
            sValue = frmchild[idx].value;
            break;
          }
        }
        break;
      case "checkbox":
        sValue = (frmchild.checked) ? 1 : 0;
        break;
      default:
        sValue = frmchild.value;
    } //end of switch
    sheetobj.setString(row, sheetPreFix + baseName, sValue, 0);
  } //end of for(col)
  sheetobj.refreshRow(row);
  //정상적인 처리완료
  return true;
}
/*----------------------------------------------------------------------------
method : IBS_CopySheet2Form()
desc : 시트의 한 행을 폼객체에 복사  (ibsheet7 ibsheetinfo.js 마이그레이션)

param list
param : json 유형

param 내부 설정값
sheet : 값을 입력 받을 ibsheet 객체 (필수)
form : copy할 폼객체 (필수)
row : ibsheet 객체의 행 (default : 현재 선택된 행)
sheetPreFix : 맵핑할 시트의 SavaName 앞에 PreFix 문자 (default : "")
formPreFix : 맵핑할 폼객체의 이름 혹은 id 앞에  PreFix 문자 (default : "")
-----------------------------------------------------------------------------*/
_IBSheet.v7.IBS_CopySheet2Form = function (param) {
  var sheetobj,
    formobj,
    row,
    sheetPreFix,
    frmPreFix,
    cols,
    col,
    rmax,
    colName,
    baseName,
    sheetvalue,
    sheetstring,
    frmchild,
    sType,
    fType,
    sValue;

  if ((!param.sheet) || (typeof param.sheet.version !== "function")) {
    _IBSheet.v7.IBS_ShowErrMsg("sheet 인자가 없거나 ibsheet객체가 아닙니다.");
    return false;
  }

  if (param.form == null || typeof param.form !== "object" || param.form.tagName !== "FORM") {
    _IBSheet.v7.IBS_ShowErrMsg("form 인자가 없거나 FORM 객체가 아닙니다.");
    return false;
  }
  sheetobj = param.sheet;
  formobj = param.form;
  row = param.row == null ? sheetobj.getFocusedRow() : param.row;
  sheetPreFix = param.sheetPreFix == null ? "" : param.sheetPreFix;
  frmPreFix = param.formPreFix == null ? "" : param.formPreFix;

  if (typeof row === "undefined") {
    _IBSheet.v7.IBS_ShowErrMsg("row 인자가 없고, 선택된 행이 존재하지 않습니다.");
    return false;
  }

  //Sheet의 컬럼개수만큼 찾아서 HTML의 Form 각 Control에 값을 설정한다.
  //컬럼개수만큼 루프 실행
  cols = sheetobj.getCols();
  for (var col = 0; col < cols.length; col++) {
    //컬럼의 이름을 가져온다.
    colName = cols[col];

    //PreFix가 붙지 않은 형태의 Name을 가져온다.
    baseName = colName.substring(sheetPreFix.length);

    sheetvalue = sheetobj.getValue(row, colName);

    frmchild = null;
    try {
      //폼에 있는 해당 이름의 컨트롤을 가져온다.예)"frm_CardNo"
      frmchild = formobj[frmPreFix + baseName];
    } catch (e) {

    }

    //폼에 해당하는 이름의 컨트롤이 없는 경우는 계속 진행한다.
    if (frmchild == null) {
      continue;
    }

    fType = frmchild.type;
    sValue = "";
    //radio의 경우 frmchild가 배열형태가 되므로, frmchild.type으로는 타입을 알수 없다.
    if (typeof fType === "undefined" && frmchild.length > 0) {
      fType = frmchild[0].type;
    }
    sType = sheetobj.getType(row, colName);

    //일부 편집이 불가능한 타입의 컬럼은 건너뛰자.
    if (sType === "Button" || sType === "Link" || sType === "Img") continue;

    //타입별로 값을 설정한다.
    switch (fType) {
      case undefined:
      case "button":
      case "reset":
      case "submit":
        break;
      case "select-one":
        frmchild.value = sheetvalue;
        break;
      case "radio":
        for (var idx = 0, rmax = frmchild.length; idx < rmax; idx++) {
          if (frmchild[idx].value == sheetvalue) {
            frmchild[idx].checked = true;
            break;
          }
        }
        break;
      case "checkbox":
        frmchild.checked = (sheetvalue == 1);
        break;
      default:
        sheetstring = sheetobj.getString(row, colName);
        //셀에 값이 없고, EmptyValue가 있는 경우, EmptyValue 값이 복사되는거 방지.
        if (sheetvalue === "" && sheetstring !== "") {
          sheetstring = "";
        }
        frmchild.value = sheetstring;
        break;
    } //end of switch
  } //end of for(col)

  //정상적인 처리완료
  return true;
}
//ibsheet7 에서 마이그레이션
/*
 * Form오브젝트 안에 있는 컨트롤을 QueryString으로 구성한다.
 * @param   : form          - form객체 혹은 form객체 id
 * @param   : checkRequired - 선택,필수입력 체크 여부 (boolean(default:true))
 * @param   : encoding      - 문자열 엔코딩 여부 (boolean(default:true))
 * @return  : String        - Form오브젝트 안에 elements을 QueryString으로 구성한 문자열
 *            undefined     - checkRequired인자가 true이고, 필수입력에 걸린경우 return 값
 * @version : 1.0.0.0,
 *
 * @sample1
 *  var sCondParam=FormQueryString(document.frmSearch); //결과:"txtname=이경희&rdoYn=1&sltMoney=원화";
 * @sample2
 *  <input type="text" name="txtName" required="이름">        //필수 입력 항목이면 required="이름" 를 설정한다.
 *  var sCondParam = FormQueryString(document.mainForm, true);//필수입력까지 체크하며, 필수입력에 걸리면 리턴값은 undefined
 *  if (sCondParam==null) return;
 */
_IBSheet.v7.IBS_FormQueryString = function (form, checkRequired, encoding) {
  if (typeof form === "string") form = document.getElementById(form) || document[form];
  if (typeof form !== "object" || form.tagName !== "FORM") {
    _IBSheet.v7.IBS_ShowErrMsg("FormQueryString 함수의 인자는 FORM 태그가 아닙니다.");
    return;
  }
  //default setting
  if (typeof checkRequired === "undefined") checkRequired = true;
  if (typeof encoding === "undefined") encoding = true;

  var name = new Array(form.elements.length);
  var value = new Array(form.elements.length);
  var j = 0;
  var plain_text = "";

  //사용가능한 컨트롤을 배열로 생성한다.
  var len = form.elements.length;
  for (var i = 0; i < len; i++) {
    var prev_j = j;
    switch (form.elements[i].type) {
      case undefined:
      case "button":
      case "reset":
      case "submit":
        break;
      case "radio":
      case "checkbox":
        if (form.elements[i].checked == true) {
          name[j] = _IBSheet.v7.IBS_GetName(form.elements[i]);
          value[j] = form.elements[i].value;
          j++;
        }
        break;
      case "select-one":
        name[j] = _IBSheet.v7.IBS_GetName(form.elements[i]);
        var ind = form.elements[i].selectedIndex;
        if (ind >= 0) {

          value[j] = form.elements[i].options[ind].value;

        } else {
          value[j] = "";
        }
        j++;
        break;
      case "select-multiple":
        name[j] = _IBSheet.v7.IBS_GetName(form.elements[i]);
        var llen = form.elements[i].length;
        var increased = 0;
        for (var k = 0; k < llen; k++) {
          if (form.elements[i].options[k].selected) {
            name[j] = _IBSheet.v7.IBS_GetName(form.elements[i]);
            value[j] = form.elements[i].options[k].value;
            j++;
            increased++;
          }
        }
        if (increased > 0) {
          j--;
        } else {
          value[j] = "";
        }
        j++;
        break;
      default:
        name[j] = _IBSheet.v7.IBS_GetName(form.elements[i]);
        value[j] = form.elements[i].value;
        j++;
    }

    if (checkRequired) {
      //html 컨트롤 태그에 required속성을 설정하면 필수입력을 확인할 수 있다.
      //<input type="text" name="txtName" required="이름">
      if (_IBSheet.v7.IBS_RequiredChk(form.elements[i]) && prev_j != j && value[prev_j] == "") {
        if (form.elements[i].getAttribute("required") == null || form.elements[i].getAttribute("required") == "") {
          alert('"' + _IBSheet.v7.IBS_GetLabel(form.elements[i]) + '" 은 필수 입력 항목 입니다.');
        } else {
          alert('"' + form.elements[i].getAttribute("required") + '" 은 필수 입력 항목 입니다.');
        }
        //컨트롤이 숨겨져 있을수도 있으므로 에러 감싼다.
        try {
          form.elements[i].focus();
        } catch (ee) {}

        return;
      }
    }
  }
  //QueryString을 조합한다.
  for (var i = 0; i < j; i++) {
    if (name[i] != '') {
      if (encoding) {
        plain_text += encodeURIComponent(name[i]) + "=" + encodeURIComponent(value[i]) + "&";
      } else {
        plain_text += name[i] + "=" + value[i] + "&";
      }
    }
  }

  //마지막에 &를 없애기 위함
  if (plain_text != "") plain_text = plain_text.substr(0, plain_text.length - 1);

  return plain_text;
}
//ibsheet7 에서 마이그레이션
/*
 * Form오브젝트 안에 있는 컨트롤을 Json Object으로 구성한다.
 * @param   : form          - form객체 혹은 form객체 id
 * @param   : checkRequired - 선택,필수입력 체크 여부 (boolean(default:true))
 * @param   : encoding      - 문자열 엔코딩 여부 (boolean(default:true))
 * @return  : String        - Form오브젝트 안에 elements을 QueryString으로 구성한 문자열
 *            undefined     - checkRequired인자가 true이고, 필수입력에 걸린경우 return 값
 * @version : 1.0.0.0,
 *
 * @sample1
 *  var sCondParam=FormToJson(document.frmSearch); //결과: {txtname:"이경희" , "rdoYn":"on","sltMoney":"원화"};
 * @sample2
 *  <input type="text" name="txtName" required="이름">        //필수 입력 항목이면 required="이름" 를 설정한다.
 *  var sCondParam = FormToJson(document.mainForm, true);//필수입력까지 체크하며, 필수입력에 걸리면 리턴값은 undefined
 *  if (sCondParam==null) return;
 */
_IBSheet.v7.IBS_FormToJson = function (form, checkRequired, encoding) {
  if (typeof form === "string") form = document.getElementById(form) || document[form];
  if (typeof form !== "object" || form.tagName !== "FORM") {
    _IBSheet.v7.IBS_ShowErrMsg("FormToJson 함수의 인자는 FORM 태그가 아닙니다.");
    return;
  }
  //default setting
  if (typeof checkRequired === "undefined") checkRequired = true;
  if (typeof encoding === "undefined") encoding = true;

  var name = new Array(form.elements.length);
  var value = new Array(form.elements.length);
  var j = 0;
  var plain_obj = {};

  //사용가능한 컨트롤을 배열로 생성한다.
  var len = form.elements.length;
  for (var i = 0; i < len; i++) {
    var prev_j = j;
    switch (form.elements[i].type) {
      case undefined:
      case "button":
      case "reset":
      case "submit":
        break;
      case "radio":
      case "checkbox":
        if (form.elements[i].checked == true) {
          name[j] = _IBSheet.v7.IBS_GetName(form.elements[i]);
          value[j] = form.elements[i].value;
          j++;
        }
        break;
      case "select-one":
        name[j] = _IBSheet.v7.IBS_GetName(form.elements[i]);
        var ind = form.elements[i].selectedIndex;
        if (ind >= 0) {
          value[j] = form.elements[i].options[ind].value;
        } else {
          value[j] = "";
        }
        j++;
        break;
      case "select-multiple":
        name[j] = _IBSheet.v7.IBS_GetName(form.elements[i]);
        var llen = form.elements[i].length;
        var increased = 0;
        for (var k = 0; k < llen; k++) {
          if (form.elements[i].options[k].selected) {
            name[j] = _IBSheet.v7.IBS_GetName(form.elements[i]);
            value[j] = form.elements[i].options[k].value;
            j++;
            increased++;
          }
        }
        if (increased > 0) {
          j--;
        } else {
          value[j] = "";
        }
        j++;
        break;
      default:
        name[j] = _IBSheet.v7.IBS_GetName(form.elements[i]);
        value[j] = form.elements[i].value;
        j++;
    }

    if (checkRequired) {
      //html 컨트롤 태그에 required속성을 설정하면 필수입력을 확인할 수 있다.
      //<input type="text" name="txtName" required="이름">
      if (_IBSheet.v7.IBS_RequiredChk(form.elements[i]) && prev_j != j && value[prev_j] == "") {
        if (form.elements[i].getAttribute("required") == null || form.elements[i].getAttribute("required") == "") {
          alert('"' + _IBSheet.v7.IBS_GetLabel(form.elements[i]) + '" 은 필수 입력 항목 입니다.');
        } else {
          alert('"' + form.elements[i].getAttribute("required") + '" 은 필수 입력 항목 입니다.');
        }
        //컨트롤이 숨겨져 있을수도 있으므로 에러 감싼다.
        try {
          form.elements[i].focus();
        } catch (ee) {}

        return;
      }
    }
  }

  //JSON을 조합한다.
  var tname = "";
  var tvalue = "";
  for (var i = 0; i < j; i++) {
    if (encoding) {
      tname = encodeURIComponent(name[i]);
      tvalue = encodeURIComponent(value[i])
    } else {
      tname = name[i];
      tvalue = value[i];
    }
    if (name[i] != '') {
      //이미 있다면 배열로 변경
      if (plain_obj[tname]) {
        //이미 배열인 경우
        if (Array.isArray(plain_obj[tname])) {
          plain_obj[tname].push(tvalue);
        } else {
          plain_obj[tname] = [plain_obj[tname], tvalue];
        }
      } else {
        plain_obj[tname] = tvalue;
      }
    }
  }

  return plain_obj;
}
/*
 * FromToCalendar 사용시 사용 함수
 * @param   : id          - from혹은 to 날짜가 표시될 input 객체
 * @param   : format      - 날짜 형태 YMD
 * @version : 1.0.0.0,
 *
 * @sample1
 *  <span>
 *  <input type='text' name="fromID" id="fromID" DATE='FromYMD' DATE_REF="toID"/>
 *  <button class='calbtn' onclick='IBSheet.v7.IBS_FromToCalendar("fromID","yyyy-MM-dd")'>달력</button>
 *  ~ <input type='text' name="toID" id="toID" DATE='ToYMD' DATE_REF="fromID"/>
 *  <button class='calbtn' onclick='IBSheet.v7.IBS_FromToCalendar("toID","yyyy-MM-dd")'>달력</button>
 *  </span>
 */
_IBSheet.v7.IBS_FromToCalendar = function (id, format) {
  if (event != null) {
    event.preventDefault();
  }
  var ele = document.getElementById(id);
  var isFrom = ele.getAttribute("DATE") === "FromYMD";
  var oppoID = ele.getAttribute("DATE_REF");
  var oppoValue = document.getElementById(oppoID).value;
  var oppoValueTimeStamp = oppoValue != "" ? IBSheet.stringToDate(oppoValue, format) : null;
  var d = ele.value != "" ? new Date(ele.value) : (oppoValue != "" ? new Date(oppoValue) : "");
  var opt = {
    Date: d,
    Format: format,
    RowsPrev: 2,
    RowsNext: 2,
    Buttons: 6,
    Texts: {
      Ok: "닫기",
      Clear: "지우기"
    },
    OnCanEditDate: function (d) {
      if (oppoValue != "") {
        if (isFrom) {
          if (d > oppoValueTimeStamp) return false;
        } else {
          if (d < oppoValueTimeStamp) return false;
        }
      }
    },
    OnGetCalendarDate: function (d, dt, cls, r) {
      var targetValue = document.getElementById(id).value;
      if (oppoValue == "" || targetValue == "") return;
      var targetValueTimeStamp = IBSheet.stringToDate(targetValue, format);
      if (isFrom) {
        if (d >= targetValueTimeStamp && d <= oppoValueTimeStamp) return "<span style='color:orange'>" + dt + "</span>";
      } else {
        if (d <= targetValueTimeStamp && d >= oppoValueTimeStamp) return "<span style='color:orange'>" + dt + "</span>";
      }
    },
    OnButtonClick: function (evt) {
      if (evt == 2) { //지우기
        document.getElementById(id).value = "";
      }
      fromtoCal.Close();
    }
  };
  //달력에서 일자 선택시 callback(반대편 달력을 띄운다.)
  function calPickCallBack(v) {
    document.getElementById(id).value = IBSheet.dateToString(parseInt(v), format);
    var ele = document.getElementById(id);
    var oppoID = ele.getAttribute("DATE_REF");
    var oppoValue = document.getElementById(oppoID).value;
    if (oppoValue == "") {
      if (event != null) {
        event.preventDefault();
      }
      _IBSheet.v7.IBS_FromToCalendar(oppoID, format);
    }
  }
  var fromtoCal = IBSheet.showCalendar(opt, {
    Tag: id
  }, calPickCallBack.bind(id));
}
//ibsheet7 에서 마이그레이션
//시트의 각 컬럼 Name을 구분자 "|"연결한 string으로 리턴
//param : ibsheet 객체
_IBSheet.v7.IBS_ConcatSaveName = function (sheet) {
  return sheet.getCols().join("|");
}

/**
 * 에러메시지를 표시한다. IBS_ShowErrMsg 대신 이 함수를 사용해야 한다.
 * @param   : sMsg      - 메시지
 * @return  : 없음
 * @version : 3.4.0.50
 * @sample
 *  IBS_ShowErrMsg("에러가 발생했습니다.");
 */
_IBSheet.v7.IBS_ShowErrMsg = function (sMsg) {
  return alert("[ibsheet-common]\n" + sMsg);
}

//required 여부 확인
_IBSheet.v7.IBS_RequiredChk = function (obj) {
  return (obj.getAttribute("required") != null);
}
//객체의 id 혹은 name을 리턴
_IBSheet.v7.IBS_GetName = function (obj) {
  if (obj.name != "") {
    return obj.name;
  } else if (obj.id != "") {
    return obj.id;
  } else {
    return "";
  }
}

//객체의 label 혹은 id 혹은 name을 리턴
_IBSheet.v7.IBS_GetLabel = function (obj) {
  if (obj.labels && obj.labels.length > 0) {
    return obj.labels[0].textContent;
  } else {
    return _IBSheet.v7.IBS_GetName(obj);
  }
}
}(window, document));
