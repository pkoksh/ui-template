---
KEY: menu
KIND: config-property
PATH: props/cfg/menu
ALIAS: 마우스, 우측, 버튼, 클릭, 보여질
ALIAS_EN: menu, click
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/menu
---
# Menu ***(Cfg)***
> 마우스 우측 버튼 클릭 시 보여질 컨텍스트 메뉴를 설정합니다.

> `InfoRow`를 제외한 시트의 다른행들에서 표시됩니다.

### Type
mixed( `object` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`string`|첫글자를 구분자로 한 컨텍스트 메뉴스트링 지정 (ex: @저장@임시저장@취소 or *상신*취소) |
|`object`|[Menu Object 설정 링크 참고](/docs/appx/menu)

### Example
```javascript
// 문자열로 설정하는 경우
options.Cfg = {
  Menu: "|행추가|행숨기기|행삭제"
};

// object로 설정하는 경우
options.Cfg = {
  Menu: {
    Items: [
      { Name: "Excel", Value: "xls" },
      { Name: "text", Value: "txt" },
      { Name: "pdf", Value: "pdf" },
    ],
    OnSave: function (item, data) {
      switch(item.Value){
        case 'xls':
          try{
            this.Sheet.down2Excel({FileName:"test.xlsx",SheetDesign:1});
          }catch(e){
            if(e.message.indexOf("down2Excel is not a function")>-1){
                console.log("%c 경고","color:#FF0000"," : ibsheet-excel.js 파일이 필요합니다.");
            }
          }
          break;
        case 'txt':
          try{
            this.Sheet.down2Text();
          }catch(e){
            if(e.message.indexOf("down2Text is not a function")>-1){
              console.log("%c 경고","color:#FF0000"," : ibsheet-excel.js 파일이 필요합니다.");
            }
          }
          break;
        case 'pdf':
          try{
            this.Sheet.down2Pdf();
          }catch(e){
            if(e.message.indexOf("down2Pdf is not a function")>-1){
              console.log("%c 경고","color:#FF0000"," : ibsheet-excel.js 파일이 필요합니다.");
            }
          }
          break;
      }
    };
  }
};
```

### Read More
- [Menu appendix](/docs/appx/menu)
- [MenuHSeparator cfg](/docs/props/cfg/menu-h-separator)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
