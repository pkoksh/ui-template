---
KEY: groupMain
KIND: config-property
PATH: props/cfg/group-main
ALIAS: 그룹핑이, 되었을때, 그룹, 트리를, 보여줄
ALIAS_EN: group, main
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/group-main
---
# GroupMain ***(cfg)***

> 그룹핑이 되었을때 그룹 트리를 보여줄 열을 설정합니다. 

> `GroupMain` 을 설정하지 않는 경우, 자동으로 그룹핑이 표시될 기준 열이 지정됩니다. 



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`colName`|그룹핑 트리가 표시될 열이름|


### Example
```javascript
options.Cfg = {
    Group: "gender,age",    // 시트 로딩시 열이름이 gender, age인 열으로 그룹핑
    GroupMain: "Name"        // 시트 트리를 열이름이 Name 인 열에 표시
};
option.Solid = [{
    Kind: "Group",           // 커스텀 행의 Kind 를 Group 으로 설정
    Space: -1                // 커스텀 행의 위치를 설정 (-1: 테이블 상단)
}];
```

### Try it
- [Demo of GroupMain](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Group/)

### Read More
- [Group cfg](./group)
- [Kind appendix](/docs/appx/kind)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
