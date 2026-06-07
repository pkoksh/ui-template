---
KEY: filterEnumIconLeft
KIND: config-property
PATH: props/cfg/filter-enum-icon-left
ALIAS: 타입에, 필터링, 생성되는, 필터, 메뉴의
ALIAS_EN: filter, enum, icon, left
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/filter-enum-icon-left
---
# FilterEnumIconLeft ***(cfg)***

> `Enum` 타입에 대한 필터링 시 생성되는 필터 메뉴의 체크 박스 아이콘을 왼쪽에 위치시킬지 여부를 설정합니다

### Type
`boolean`


### Options

|Value|Description|
|-----|-----|
|`0(false)`| `Enum` 타입의 필터 체크 박스를 오른쪽에 위치 (`default`)|
|`1(true)`| `Enum` 타입의 필터 체크 박스를 왼쪽에 위치|


### Example
```javascript
options.Cfg = {
    FilterEnumIconLeft: true
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|기능 추가|
