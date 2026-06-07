---
KEY: autoExcelMode
KIND: config-property
PATH: props/cfg/auto-excel-mode
ALIAS: 함수를, 이용하여, 엑셀, 다운, 업로드를
ALIAS_EN: auto, excel, mode, xlsx
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/auto-excel-mode
---
# AutoExcelMode ***(cfg)***

> down2Excel(),loadExcel() 함수를 이용하여 엑셀 다운/업로드를 할 때, 서버모듈을 이용할지 클라이언트 모듈을 이용할지 정할 수 있는 모드 입니다. 

> 따로 설정하지 않으면 서버모듈을 기준으로 사용됩니다. 

> `AutoExcelMode`를 `1`로 설정시 서버모듈([down2Excel](/docs/funcs/excel/down-to-excel), [loadExcel](/docs/funcs/excel/load-excel)) 과 동일합니다.

> `AutoExcelMode`를 `2`로 설정시 클라이언트 모듈([exportData](/docs/funcs/core/export-data), [importData](/docs/funcs/core/import-data))과 동일합니다. 클라이언트 모듈만을 사용하고 싶은 경우는 따로 설정하지 않고 ([exportData](/docs/funcs/core/export-data), [importData](/docs/funcs/core/import-data))를 사용하셔도 됩니다. 

> `AutoExcelMode`를 `3`으로 설정하면 브라우저의 성능에 따라 서버모듈([down2Excel](/docs/funcs/excel/down-to-excel), [loadExcel](/docs/funcs/excel/load-excel))과 클라이언트 모듈([exportData](/docs/funcs/core/export-data), [importData](/docs/funcs/core/import-data))에 대해 **자동분기점**이 형성된다. 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`1`|서버모듈을 (`down2Excel, loadExcel`) 사용합니다. (`default`)|
|`2`|클라이언트 모듈을 (`exportData, importData`) 사용합니다. **(IE10이상에서만 사용 가능)** |
|`3`|브라우저의 성능에 따라 서버모듈, 클라이언트 모듈로 **자동분기점**을 형성한다. 
 하위 브라우저(IE9 이하)의 경우: `서버모듈`, 상위 브라우저의 경우: `클라이언트 모듈`.|

### Example
```javascript
options.Cfg = {
    // 서버모듈을 사용
    AutoExcelMode: 1
};
//  AutoExcelMode: 1, 서버모듈 엑셀 다운
sheet.down2Excel({fileName: "Excel.xlsx"});

options.Cfg = {
    // 클라이언트 모듈 사용
    AutoExcelMode: 2
};
// 상위 브라우저(IE10이상), AutoExcelMode: 2, 클라이언트 업로드
sheet.loadExcel(); // sheet.importData()와 같음.

options.Cfg = {
    // 클라이언트 모듈, 서버모듈 자동 분기점.
    AutoExcelMode: 3
};
// 상위 브라우저(IE10이상), AutoExcelMode: 3, 클라이언트 엑셀 다운
sheet.down2Excel({fileName: "Excel.xlsx"});

```

### Read More
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [exportData method](/docs/funcs/core/export-data)
- [importData method](/docs/funcs/core/import-data)
- [loadExcel method](/docs/funcs/excel/load-excel)

### Since

|product|version|desc|
|---|---|---|
|excel|8.0.0.4|기능 추가|
|excel|8.0.0.5|명칭 변경 `ExportMode => AutoExcelMode`|
