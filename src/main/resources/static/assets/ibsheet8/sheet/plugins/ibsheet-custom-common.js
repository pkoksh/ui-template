var IB_Preset = IB_Preset || {};
IB_Preset.CSTATUS = {
  Type:"Html",
  Width: 50,
  Align: "Center",
  Formula: "Row.Deleted ? 'D' : Row.Added ? 'I' : Row.Changed ? 'U' : 'R'",
    Format: {
      'I': "<i class='bx  bxs-plus-square' style='font-size:20px;color:#3396D3'></i>",
      'U': "<i class='bx  bx-pencil' style='font-size:20px;color:#715A5A'></i>",
      'D': "<i class='bx  bx-trash' style='font-size:20px;color:#E62727'></i>",
      'R': ''
    }
};
IBSheet.CommonOptions.Cfg.Style = "gray";
IBSheet.CommonOptions.Def.InfoRow =  {Color:"#f9fafb"};
IBSheet.CommonOptions.Def.Row.Height = 40;
IBSheet.CommonOptions.Def.Header.Height = 40;

// getSaveJson() 함수 커스터마이즈
IBSheet.Plugins.getSaveJson2 = function(params) {
  let result;
  const boolTypeCol = this.getCols().filter(col=>this.Cols[col].Type === 'Bool');
  if(typeof params === "object") {
    result = this.getSaveJson(params);
  }else{
    result = this.getSaveJson(...arguments);
  }
  
  if( result.data.length === 0 ) return result;

  return result.data.map(row=>{
    // bool 타입 컬럼 0,1로 변환  
    boolTypeCol.forEach(col=>{
      if(row.hasOwnProperty(col)) {
        row[col] = ~~row[col];
      }
    });
    const realRow = this.getRowById(row.id);
    // tree 형태인 경우 parent_id 추가
    if(this.MainCol) {
      if(params && params.treeId) {
        row.parentId = realRow?.parentNode?.Kind?realRow.parentNode[params.treeId]:null;
      }
    }

    // 시트가 사용하는 id가 아닌 server에서 내려온 id로 변경
    if(typeof realRow["___id"] !== "undefined") {
      row.id = realRow["___id"];
    }else{
      delete row.id;
    }
    return row;
  });


}


async function saveAllData(sheetObj, API_BASE, callback) {
  try {
      document.getElementById('loading').classList.remove('hidden');
      
      // 그리드에서 변경된 데이터 가져오기
      const changedData = sheetObj.getSaveJson2();
      
      if (changedData?.data?.length === 0) {
          let msg = "";
          switch(changedData.Code) {
              case 'IBS010':
                  msg = sheetObj.getMessage("RequiredError");
                  msg = msg.replace("\%1", sheetObj.getRowIndex(changeData.row));
                  msg = msg.replace("\%2", sheetObj.getString( sheetObj.getHeaderRows().at(-1), changeData.col ));
                  showInfo(msg);
                  break;
                  case 'IBS000':
                  msg = sheetObj.getMessage("NoSave");
                  showInfo(msg);
                  break;
          }
          return;
      }

      await apiPost(`${API_BASE}`, JSON.stringify(changedData));
      
      showSuccess('성공적으로 저장되었습니다.');
      if (callback) callback();
  } catch (error) {
      console.error('저장 실패:', error);
      if (error.response && error.response.data && error.response.data.message) {
          showError(`저장에 실패했습니다: ${error.response.data.message}`);
      } else {
          showError('저장에 실패했습니다.');
      }
  } finally {
      document.getElementById('loading').classList.add('hidden');
  }
}