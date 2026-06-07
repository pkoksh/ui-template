---
KEY: prevColumnMergeMode
KIND: config-property
PATH: props/cfg/prev-column-merge-mode
ALIAS: 에서, 셀을, 머지하는, 기준을, 설정하는
ALIAS_EN: prev, column, merge, mode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/prev-column-merge-mode
---
# PrevColumnMergeMode ***(cfg)***
> [SearchMode:2](/docs/props/cfg/search-mode)에서 셀을 머지하는 기준을 설정하는 옵션입니다. 

> [SearchMode:2](/docs/props/cfg/search-mode)는 머지된 모든 `Row`가 한 Table안에 그려지기 때문에 머지된 셀이 많은 경우 성능 문제가 발생할 수 있습니다. 

> `PrevColumnMergeMode:1`설정 시 [PageLength](/docs/props/cfg/page-length) 만큼 페이지 단위로 나누어 그려지기 때문에 시트 성능이 향상됩니다. 



###
**`PrevColumnMergeMode:0(default)`** 

![prevColumnMergeMode:0](/assets/imgs/prevColumnMergemode0.png)
<!-- IMAGE: 스크린샷/예시 이미지 - prevColumnMergeMode:0 --> 

**`PrevColumnMergeMode:1, PageLength:10`** 

![prevColumnMergeMode:1](/assets/imgs/prevColumnMergemode1.png)
<!-- IMAGE: 스크린샷/예시 이미지 - prevColumnMergeMode:1 --> 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`| 같은 값을 가지는 모든 셀을 머지함 (`default`)|
|`1(true)`| 페이지 단위로 나누어 셀을 머지함 |

### Example
```javascript
options = {
    Cfg: {
      PrevColumnMergeMode: 1,  // 페이지 단위로 나누어 셀을 머지합니다.
      ...
    }
};
```

### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [setAutoMerge method](/docs/funcs/core/set-auto-merge)
- [PageLength cfg](/docs/props/cfg/page-length)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.11|기능 추가|
|core|8.0.0.12|default 변경 (1 -> 0)|