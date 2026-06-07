---
KEY: prevColumnMerge
KIND: config-property
PATH: props/cfg/prev-column-merge
ALIAS: 병합, 위아래로, 열의, 좌측, 범위를
ALIAS_EN: prev, column, merge, combine
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/prev-column-merge
---
# PrevColumnMerge ***(cfg)***

> 행 병합(위아래로 병합)시 각 열의 좌측 열의 병합 된 범위를 기준으로 병합하는 기능입니다.

> (cfg)[DataMerge](/docs/props/cfg/data-merge)와 (cfg)[HeaderMerge](/docs/props/cfg/header-merge) 옵션이 설정되어 있어야 정상적으로 동작합니다.

> 시트 생성 후 [setAutoMerge](/docs/funcs/core/set-auto-merge)메소드를 이용하여 병합을 동적으로 변경할 수 있습니다.


> **<mark>주의</mark> : 소계([makeSubTotal (method)](/docs/funcs/core/make-sub-total))사용 시 해당 옵션에 설정한 값은 무시되고 `PrevColumnMerge : 1` 로 동작합니다.**


###
![prevColumnMerge](/assets/imgs/prevColumnMerge_base.png "prevColumnMerge")
<!-- IMAGE: 스크린샷/예시 이미지 - prevColumnMerge --> 

(col)[ColMerge](/docs/props/col/col-merge)값이 0인 컬럼은 탐색범위에서 제외됩니다.(좌측 컬럼이 ColMerge:0인 경우, 해당컬럼을 건너뛰고 좌측 컬럼을 기준으로 병합합니다)

![prevColumnMerge](/assets/imgs/prevColumnMerge_colMerge.png "prevColumnMerge")
<!-- IMAGE: 스크린샷/예시 이미지 - prevColumnMerge --> 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`| 전체영역에 앞컬럼 머지기능을 사용안함 (`default`)|
|`1`| 데이터 영역에만 앞컬럼머지기능을 사용|
|`2`| 헤더 영역에서만 앞컬럼머지기능을 사용|
|`3`| 데이터 및 헤더 영역에서 앞컬럼머지 기능 사용|

### Example
```javascript
options = {
    Cfg: {
      PrevColumnMerge: 1,  // 시트 생성 시 앞 열 기준으로 셀 병합할지 여부를 설정합니다.
      ...
    }
};
```

### Try it
- [0 by default with setAutoMerge](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Merge/)

### Read More
- [HeaderMerge cfg](/docs/props/cfg/header-merge)
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [ColMerge col](/docs/props/col/col-merge)
- [setAutoMerge method](/docs/funcs/core/set-auto-merge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
