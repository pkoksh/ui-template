---
KEY: fixPrevColumnMerge
KIND: config-property
PATH: props/cfg/fix-prev-column-merge
ALIAS: 병합, 위아래로, 열의, 기준, 범위를
ALIAS_EN: fix, prev, column, merge, combine
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/fix-prev-column-merge
---
# FixPrevColumnMerge ***(cfg)***

> 행 병합(위아래로 병합)시 각 열의 기준 열의 병합 된 범위를 기준으로 병합하는 기능입니다.

> 기준 열 보다 `Index`가 큰 열에 대해서만 적용됩니다. 

> (cfg)[DataMerge](/docs/props/cfg/data-merge)와 (cfg)[HeaderMerge](/docs/props/cfg/header-merge) 옵션이 설정되어 있어야 정상적으로 동작합니다.

> [PrevColumnMerge](/docs/props/cfg/prev-column-merge)가 선언되어 있어도, 해당 속성이 우선으로 적용됩니다. 

> 시트 생성 후 [setAutoMerge](/docs/funcs/core/set-auto-merge)메소드를 이용하여 병합을 동적으로 변경할 수 있습니다.


###
**`정책사업` 컬럼으로 설정한 경우, 앞 컬럼과 관계 없이 기준 컬럼 병합 범위를 기준으로 병합** 

![prevColumnMergeMode:0](/assets/imgs/fixprevColumnMerge1.png)
<!-- IMAGE: 스크린샷/예시 이미지 - prevColumnMergeMode:0 --> 


![prevColumnMergeMode:0](/assets/imgs/fixprevColumnMerge2.png)
<!-- IMAGE: 스크린샷/예시 이미지 - prevColumnMergeMode:0 -->

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|행 병합 시 기준으로 설정할 열의 이름|

### Example
```javascript
options = {
    Cfg: {
      FixPrevColumnMerge : 'sPolicy',  // 시트 생성 시 앞 열 기준으로 셀 병합할지 여부를 설정합니다.
      ...
    }
};
```

### Read More
- [HeaderMerge cfg](/docs/props/cfg/header-merge)
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [PrevColumnMerge method](/docs/props/cfg/prev-column-merge)
- [ColMerge col](/docs/props/col/col-merge)
- [setAutoMerge method](/docs/funcs/core/set-auto-merge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.15|기능 추가|
