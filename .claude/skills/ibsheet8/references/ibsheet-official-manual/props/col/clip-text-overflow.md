---
KEY: clipTextOverflow
KIND: column-property
PATH: props/col/clip-text-overflow
ALIAS: 해당, 열의, 값을, 으로, 설정합니다
ALIAS_EN: clip, text, overflow
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/clip-text-overflow
---
# !ClipTextOverflow ***(col)***

> 해당 열의 `css text-overflow` 값을 `clip`으로 설정합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|해당 열에서 말줄임표를 사용합니다. (`default`)|
|`1(true)`|해당 열에서 말줄임표를 사용하지 않습니다.|

### Example
```javascript
options.Cols = [
  {
    Header: '정수(Int)',
    Type: 'Int',
    Name: 'IntData',
    Width: 80,
    Align: 'Right',
    CanEdit: 1,
    Format: '####,0원',
    ClipTextOverflow: true
  }
];
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.86|기능 추가|
