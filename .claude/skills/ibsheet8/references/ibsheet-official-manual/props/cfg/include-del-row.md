---
KEY: includeDelRow
KIND: config-property
PATH: props/cfg/include-del-row
ALIAS: 소계, 누계, 합계, 삭제, 상태
ALIAS_EN: include, del, row, subtotal, total, sum, delete, remove
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/include-del-row
---
# IncludeDelRow ***(cfg)***

> 소계/누계([makeSubTotal](/docs/funcs/core/make-sub-total)) / 합계([FormulaRow](/docs/props/col/formula-row))에 삭제 상태 행 ([Deleted](/docs/props/row/deleted): 1) 을 계산에 포함할지 여부를 설정합니다. 

> bit 연산 형태로 속성을 설정합니다. 3으로 설정시 1번옵션 + 2번옵션 대해 설정하게 됩니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|삭제행 계산에 포함하지 않음. (`default`)|
|`1`|소계/누계 계산에 삭제행을 포함하여 계산|
|`2`|합계 계산에 삭제행을 포함하여 계산|

### Example
```javascript
options.Cfg = {
   ...
   "IncludeDelRow": 3 // 소계/누계, 합계 계산 모두 삭제행을 포함하여 계산
   ...
};
```

### Read More
- [makeSubTotal method](/docs/funcs/core/make-sub-total)
- [FormulaRow col](/docs/props/col/formula-row)
- [Deleted row](/docs/props/row/deleted)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.11|기능 추가|
