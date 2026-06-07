---
KEY: commonOptions
KIND: static-member
PATH: static/common-options
ALIAS: 모든, 시트에, 공통으로, 설정할, 초기
ALIAS_EN: common, options
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/static/common-options
---
# CommonOptions ***(static)***

> 모든 시트에 공통으로 설정할 초기 속성값을 설정합니다.

> 여기서 설정한 값이 각 화면에서 설정한 시트 초기값과 머지되어 시트가 생성됩니다.

> `CommonOptions`에서 설정한 값과 각 화면에서 정의한 시트 초기 값이 서로 다른 경우에는, 화면에서 설정한 시트 초기값이 최종 적용됩니다.


### Type
`object`

### Options
모든 시트에 동일하게 반영하고 싶은 `Cfg, Def, Event` 설정 값

(일반적으로 이 속성은 `/plugins/ibsheet-common.js` 파일에서 설정)


### Example
```javascript
//ibsheet.js 파일이 로드된 이후에 설정해야 함.
IBSheet.CommonOptions = {
  Cfg:{
    Export: {Url: "./jsp/Down2Excel.jsp"}, //엑셀다운 URL
    Alternate: 2,   //홀짝 행에 대한 배경색 설정
    InfoRowConfig: {Visible: 1, Layout: ["Count"], Space: "Top"} //건수 정보 표시
  },
  Def:{
    Row:{ //공통 행 설정
      Menu:{
        "Items": [
          {"Name": "Excel다운로드", "Value": "xls"},
          {"Name": "text다운로드", "Value": "txt"},
          {"Name": "pdf다운로드", "Value": "pdf"},
        ],
        "OnSave":function (item,data) {
          switch (item.Value) {
            case 'xls':
                this.Sheet.down2Excel();
              break;
            case 'txt':
                this.Sheet.down2Text();
              break;
            case 'pdf':
                this.Sheet.down2Pdf();
              break;
          }
        }
      }//end Menu
    }//end Row
  }//end Def
};

```
### Read More
 - [IBSheet.create static](./create)
 - [IBSheet.onBeforeCreate static](./on-before-create)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
