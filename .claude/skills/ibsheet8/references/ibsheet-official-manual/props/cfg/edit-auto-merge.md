---
KEY: editAutoMerge
KIND: config-property
PATH: props/cfg/edit-auto-merge
ALIAS: 또는, 설정하여, 기준, 병합, 옵션을
ALIAS_EN: edit, auto, merge, combine
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/edit-auto-merge
---
# EditAutoMerge ***(cfg)***

> (cfg)[DataMerge](./data-merge) 또는 (cfg)[HeaderMerge](./header-merge) 설정하여 값 기준 병합 옵션을 사용 시 편집(셀 값 변경, 행 추가 등)할 때 자동으로 셀 병합할지 여부를 설정합니다.

> 이 속성을 true로 설정시, 각 셀의 편집 시 매번 병합로직이 수행됨으로 시트가 느려질 수 있습니다.

> <mark>이 기능은 SearchMode:0(FastLoad)에서는 동작하지 않습니다.</mark>


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|병합을 하지 않습니다. (`default`)|
|`1(true)`|병합을 실행합니다.|


### Example
```javascript
options = {
    Cfg :{
      EditAutoMerge: false,  // 값 편집시 병합하지 않음.
    }
};
```

### Read More
- [DataMerge cfg](./data-merge)
- [HeaderMerge cfg](./header-merge)
- [addRow method](/docs/funcs/core/add-row)
- [addRows method](/docs/funcs/core/add-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.5|행 추가 시 셀 병합이 되도록 수정|