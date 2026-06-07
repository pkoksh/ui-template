---
KEY: dataMerge
KIND: config-property
PATH: props/cfg/data-merge
ALIAS: 시트, 생성, 데이터, 영역에서, 값을
ALIAS_EN: data, merge, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/data-merge
---
# DataMerge ***(cfg)***

> 시트 생성 시 데이터 영역에서 셀 값을 기준으로 병합할지 여부 및 병합 종류를 설정합니다.

> 시트 생성 후 setAutoMerge메소드를 이용하여 데이터 영역의 병합을 동적으로 변경할 수도 있습니다.

> DataMerge가 설정된 시트에서 [setValue](/docs/funcs/core/set-value) 메소드를 사용할 때 해당 메소드에 render 인자를 0으로 주면 데이터 영역에서 머지가 적용되지 않습니다. 화면에 머지를 적용하고 싶은 경우 [rerender](/docs/funcs/core/rerender) 메소드를 호출해야합니다.

> [Span](/docs/props/cell/span)과 [RowSpan](/docs/props/cell/row-span)보다 우선 적용됩니다.

> **특정 컬럼만 상하 병합에서 제외하고자 하실때는 해당 컬럼 생성시 [ColMerge](/docs/props/col/col-merge) 속성값을 0(false)로 설정하시면 됩니다.**

> **유사하게 특정 컬럼만 좌우 병합에서 제외하고 자 하실때는 해당 컬럼 생성시 [RowMerge](/docs/props/row/row-merge) 속성값을 0(false)로 설정하시면 됩니다.**


> **<mark>주의</mark> : 소계([makeSubTotal (method)](/docs/funcs/core/make-sub-total))사용 시 해당 옵션에 설정한 값은 무시되고 `DataMerge: 1` 로 동작합니다.**

> 트리에서 해당 기능을 사용시에는 `DataMerge: 1` 기능만을 지원하고 머지에 관련되서는 다른 기능은 지원하지 않습니다. 사용시에는 같은 레벨에 한해서 자동머지가 일어납니다.


### Type
`number`

### Options
|Value|Description| |
|-----|-----|----|
|`0`|병합 안함 (`default`) |병합을 하지 않습니다.
![option0](/assets/imgs/dataMerge0.png "option0")
<!-- IMAGE: 스크린샷/예시 이미지 - option0 -->|
|`1`|열 기준 병합|각 열에 대해 이전 혹은 다음 행의 값이 같은 경우 행들을 병합합니다.
![option1](/assets/imgs/dataMerge1.png "option1")
<!-- IMAGE: 스크린샷/예시 이미지 - option1 -->|
|`2`|행 기준 병합|각 행에 대해 이전 혹은 다음 열의 값이 같은 경우 열들을 병합합니다.
![option2](/assets/imgs/dataMerge2.png "option2")
<!-- IMAGE: 스크린샷/예시 이미지 - option2 -->|
|`3`|열 우선 병합|열 기준 병합(a)를 수행한 후 병합되지 않은 셀들에 행 기준 병합(b)를 실행합니다.
![option3](/assets/imgs/dataMerge3.png "option3")
<!-- IMAGE: 스크린샷/예시 이미지 - option3 -->|
|`4`|행 우선 병합|행 기준 병합(b)를 수행한 후 병합되지 않은 셀들에 열 기준 병합(a)를 실행합니다.
![option4](/assets/imgs/dataMerge4.png "option4")
<!-- IMAGE: 스크린샷/예시 이미지 - option4 -->|
|`5`|열 우선 사방 병합|열 기준 병합을 수행하면서 이웃한 열에 대해서도 값이 같으면 열끼리도 병합합니다.
![option5](/assets/imgs/dataMerge5.png "option5")
<!-- IMAGE: 스크린샷/예시 이미지 - option5 -->|
|`6`|행 우선 사방 병합|행 기준 병합을 수행하면서 이웃한 행에 대해서도 값이 같으면 행끼리도 병합합니다.
![option6](/assets/imgs/dataMerge6.png "option6")
<!-- IMAGE: 스크린샷/예시 이미지 - option6 -->|


### Example
```javascript
options = {
    "Cfg" :{
      "DataMerge":1,  // 시트 생성 시 데이터 영역의 셀을 열 기준으로 병합합니다.
    }
};
```

### Try it
- [0 by default with setAutoMerge](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Merge/)

### Read More
- [Span cell](/docs/props/cell/span)
- [RowSpan cell](/docs/props/cell/row-span)
- [ColMerge col](/docs/props/col/col-merge)
- [RowMerge row](/docs/props/row/row-merge)
- [HeaderMerge cfg](./header-merge)
- [PrevColumnMerge cfg](./prev-column-merge)
- [setAutoMerge method](/docs/funcs/core/set-auto-merge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.8|트리에 대한 `DataMerge`기능 추가 (`mode:1 말고는 사용 불가`)|
