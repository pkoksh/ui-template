---
KEY: groupFormat
KIND: config-property
PATH: props/cfg/group-format
ALIAS: 그룹핑, 생성된, 그룹, 트리가, 있는
ALIAS_EN: group, format
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/group-format
---
# GroupFormat ***(cfg)***

> 그룹핑 시 생성된 그룹 트리가 있는 열에 그룹에 속하는 데이터 행의 개수 와 그 표시 형식을 설정합니다. 

> `{%s}` 는 그룹이 되는 기준 값, `{%c}` 는 그룹핑 된 데이터의 개수를 설정합니다. 

> `{%vc}` 는 그룹핑 된 데이터 중 감춰진 행을 제외한 행의 개수


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|그룹 표시 형식 설정 String
ex) `{%s} \ ({%c}건)`|


### Example
```javascript
options.Cfg = {
    Group: "gender,age",     // 시트 로딩시 colName 이 성별, 나이인 열으로 그룹핑
    GroupMain: "Name",       // 시트 트리를 colName 이 이름 인 열에 표시
    GroupFormat:" {%s} ({%c}건)" //그룹핑 열이름은 빨강색, 건수는 파란색으로 표시
};
option.Solid = [{
    Kind: "Group",           // 커스텀 행의 Kind 를 Group 으로 설정
    Space: -1                // 커스텀 행의 위치를 설정 (-1: 테이블 상단)
}];
```

### Try it
- [Demo of GroupFormat](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Group/)

### Read More
- [Group cfg](./group)
- [getGroupRows method](/docs/funcs/core/get-group-rows)
- [Kind appendix](/docs/appx/kind)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.27|{%vc} 기능 추가|
