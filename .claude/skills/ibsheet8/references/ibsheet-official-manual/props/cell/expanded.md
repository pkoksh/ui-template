---
KEY: expanded
KIND: cell-property
PATH: props/cell/expanded
ALIAS: 사용하는, 접힘, 펼침, 여부를, 설정합니다
ALIAS_EN: expanded
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/expanded
---
# !Expanded ***(cell)***

> (cell) [ExpandedCols](/docs/props/cell/expand-cols), (cell) [ExpandedRows](/docs/props/cell/expand-rows)로 사용하는 접힘/펼침 여부를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|접힘|
|`1(true)`|펼침|


### Example
```javascript
options.Cols = [
  {
    Header: [
      {
        Value: 'A',
        Icon: 'Expand',
        Expanded: 0,
        ExpandCols: 'A1,A2,A3',
        ExpandRows: 'H1'
      },
      { Value: 'A' },
      {
        Value: 'A0',
        Icon: 'Expand',
        Expanded: 0,
        ExpandCols: 'A10,A20,A30'
      }
    ],
    Name: 'A',
    Type: 'Text',
    Width: 80
  },
  {
    Header: [
      { Value: 'A' },
      {
        Value: 'A1',
        Icon: 'Expand',
        ExpandCols: 'A10,A11,A12,A13',
        ExpandRows: 'HR2'
      },
      { Value: 'A1' }
    ],
    Name: 'A1',
    Type: 'Text',
    Visible: 0,
    Width: 80
  },
  {
    Header: [
      { Value: 'A' },
      { Value: 'A1' },
      { Value: 'A10' }
    ],
    Name: 'A10',
    Type: 'Text',
    Visible: 0,
    Width: 80,
  },
  ...
];
```

### Read More

- [Button cell](./button)
- [Icon cell](./icon)
- [ExpandRows cell](./expand-rows)
- [ExpandColss cell](./expand-cols)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
