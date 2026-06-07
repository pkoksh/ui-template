---
KEY: useGroupSubTotal
KIND: config-property
PATH: props/cfg/use-group-sub-total
ALIAS: 시트를, 그룹핑하여, 사용하고, 있을, 경우
ALIAS_EN: use, group, sub, total
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/use-group-sub-total
---
# UseGroupSubTotal ***(cfg)***

> 시트를 그룹핑하여 사용하고 있을 경우, 각 그룹별 소계행을 시트에 추가합니다.

> 해당 옵션 설정 시 그룹 기능을 사용하고 있어야 하고, 컬럼 속성의 [GroupSubTotal](/docs/props/col/group-sub-total) 옵션이 설정되어 있어야 사용 가능합니다.


### Type
`Int`

### Options
|Value|Description|
|-----|-----|
|`0`|그룹 소계 기능 사용하지 않습니다. (`default`)|
|`1`|그룹 소계 기능을 사용하며, 소계행을 신규행으로 추가합니다.|
|`2`|그룹 소계 기능을 사용하며, 소계를 그룹행에 표시합니다.|

### Example
```javascript
options.Cfg = {
    UseGroupSubTotal: 1              // 그룹 소계 기능 사용 여부
};
```

### Read More
- [Group cfg](./group)
- [GroupSubTotal col](/docs/props/col/group-sub-total)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.8|기능 추가|
|core|8.3.0.42|`UseGroupSubTotal: 2` 기능 추가|
