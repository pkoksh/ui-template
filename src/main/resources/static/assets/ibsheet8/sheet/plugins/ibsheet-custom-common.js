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