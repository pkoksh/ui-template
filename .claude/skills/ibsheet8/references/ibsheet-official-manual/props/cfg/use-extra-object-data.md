---
KEY: useExtraObjectData
KIND: config-property
PATH: props/cfg/use-extra-object-data
ALIAS: 조회, 데이터에, 시트에, 설정한, 열이
ALIAS_EN: use, extra, object, data, search, query, fetch, load
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/use-extra-object-data
---
# UseExtraObjectData ***(cfg)***

> 조회 된 데이터에 시트에 설정한 열이 아닌 추가적인 `object` 형태의 정보가 있을 때 행 객체에 `object` 형태 그대로 저장합니다. 

> **object의 `key`가 시트의 설정된 열의 [Name](../col/name)과 동일한 경우에는 적용되지 않습니다.** 

> **따라서 시트에 표시하고자 하는 데이터에서는 적용되지 않습니다.** 

<!-- **[JsonDataSep](./json-data-sep)과 동시에 사용하실 수 없습니다. (`UseExtraObjectData`가 먼저 적용됩니다.)** -->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|`object` 형태의 데이터가 열이름+속성명 형태로 행객체에 저장됩니다. (`default`)|
|`1(true)`|`object` 형태의 데이터가 형태를 유지한 채 행객체에 저장합니다.|

### Example
```javascript
options = {
    Cfg: {
        UseExtraObjectData: true,
        // ...
    },
    Cols: [
        {
            Header: '문자열(Text)',
            Type: 'Text',
            Name: 'TextData',
            Width: 100,
            Align: 'Center',
            CanEdit: 1
        },
        {
            Header: '줄넘김문자열(Lines)',
            Type: 'Lines',
            Name: 'LinesData',
            MinWidth: 250,
            Align: 'Center',
            CanEdit: 1,
            RelWidth: 1
        }
    ]
}

// 조회 데이터
var data = [{
  TextData: '장순연',
  LinesData: '전국이 대체로 흐리거나 구름많은 가운데 대기불안정으로 중부내륙은 아침과 오후 한때, 남부내륙은 오후 한때 소나기가 오는 곳이 있겠습니다.',
  ExtraInfo: { // 시트의 열로 설정되지 않은 추가적인 데이터
    AddedDate: '2022-01-24',
    ChagedDate: '2024-06-17'
  }
}];

var row = sheet.getFirstRow();
var info = sheet.getRowValue({row: row, saveExtraAttr: 1}).ExtraInfo;
// {AddedDate: '2022-01-24', ChagedDate: '2024-06-17'}

var newInfo = {
  DeletedDate: '2024-09-13'
};
sheet.setValue(row, 'ExtraInfo', newInfo);

sheet.getValue(row, 'ExtraInfo');
// {DeletedDate: '2024-09-13'}
```

### Read More

- [getRowValue method](/docs/funcs/core/get-row-value)
- [getValue method](/docs/funcs/core/get-value)
- [setValue method](/docs/funcs/core/set-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.0|기능 추가|
