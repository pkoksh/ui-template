---
KEY: sortIconsNum
KIND: config-property
PATH: props/cfg/sort-icons-num
ALIAS: 다중, 컬럼, 소팅시, 소팅, 적용
ALIAS_EN: sort, icons, num
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/sort-icons-num
---
# SortIconsNum ***(cfg)***
> 다중 컬럼 소팅시 소팅 적용 순위를 소팅 아이콘 우측에 숫자로 표시합니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|다중 컬럼 소팅시 소팅 적용 순위를 숫자로 표시하지 않습니다. (`default`)|
|`1(true)`|다중 컬럼 소팅시 소팅 적용 순위를 숫자로 표시합니다.|

### Example
```javascript
//다중 컬럼 소팅시 소팅 우선순위를 숫자로 표시합니다.
options.Cfg = {
    SortIconsNum: true
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.102|기능 추가|
<!--!|`[비공개]` core-lwc|8.1.1.98|기능 추가|
!-->