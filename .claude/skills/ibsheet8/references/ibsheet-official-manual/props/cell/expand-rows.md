---
KEY: expandRows
KIND: cell-property
PATH: props/cell/expand-rows
ALIAS: 또는, 설정된, 버튼을, 클릭시, 표시하거나
ALIAS_EN: expand, rows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/expand-rows
---
# !ExpandRows ***(cell)***
> [Button](./button) 또는 [Icon](./icon)이 `"Expand"`로 설정된 버튼을 클릭시 표시하거나 숨길 행 id 목록을 설정합니다.

>  구분자 ","로 연결하여 여러 개 행을 지정할 수 있습니다.


> **<mark>주의</mark> : 헤더 행 셀에서만 사용할 수 있습니다.**


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|행 id (","구분자로 여러개 지정 가능)|

### Example
```javascript
// A 컬럼 첫 행 셀에 Expand Icon을 접으면 두번째 행(id: "H1")을 접도록 설정
options.Def.Row = [
  {
    Header: [
      {
        Value: 'A',
        Icon: 'Expand',
        ExpandRows: 'H1'
      },
      { Value: 'A1' },
    ],
    Name: 'A',
    Type: 'Text',
    Width: 80
  },
  ...
];
```
### Read More

- [Button cell](./button)
- [Icon cell](./icon)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
