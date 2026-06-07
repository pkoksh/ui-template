---
KEY: maxSort
KIND: config-property
PATH: props/cfg/max-sort
ALIAS: 용자가, 헤더, 셀을, 클릭하여, 다중
ALIAS_EN: max, sort, header
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/max-sort
---
# MaxSort ***(cfg)***

> 용자가 헤더 셀을 클릭하여 다중 열 정렬(Multi Column Sort) 을 수행할 때, 연계하여 정렬할 수 있는 최대 열 개수를 제한하는 속성입니다.

> 화면에 보이는 열만 사용할 수 있으며, 너무 많은 열을 연계하여 정렬 시에는 성능 저하가 있을 수 있습니다.

> 사용자가 다중 열 정렬을 어려워 하는 경우에는 이 속성을 1로 설정하여 하나의 컬럼에 대해서만 소팅하게 끔 하는 것이 좋습니다.

> 이 속성을 0으로 설정하면 헤더 클릭 시 소팅기능이 제한됩니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|연계 정렬 가능 열 수 (`default: 3`)|


### Example
```javascript
options.Cfg = {
    MaxSort: 2,        // 최대 2개 열만 연계 소팅을 처리함.
};
```

### Read More

- [CanSort cfg](./can-sort)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
