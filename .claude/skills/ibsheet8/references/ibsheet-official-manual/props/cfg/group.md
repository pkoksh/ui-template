---
KEY: group
KIND: config-property
PATH: props/cfg/group
ALIAS: 시트, 로딩시, 그룹핑, 하고자, 하는
ALIAS_EN: group, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/group
---
# Group ***(cfg)***

> 시트 로딩시 그룹핑 하고자 하는 열의 `ColName` 을 "," 구분자을 넣어 문자열로 설정합니다.  

> `Solid Row 의 Kind: "Group"` 를 설정하면 그룹핑한 열의 헤더text 가 그룹행에 표시되며, 사용자가 마우스 드롭 다운으로 통해 다른 열을 그룹핑에 추가하거나 기존 그룹핑 열을 변경 할 수 있습니다. 

> `Solid Row 의 Kind: "Group"` 를 설정하지 않는 경우 시트 로딩시 `Group` 에 설정된 열 그룹핑 기능이 반영되나, 사용자가 변경 작업을 할 수 없습니다.

> `Group` 설정시 이름들은 반드시 띄어쓰기 없이 서로 붙여 작성해주셔야 됩니다. 이름들 간에 띄어쓰기가 되어 있는 경우 `Group` 동작이 정상적으로 이뤄지지 않습니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`colName`|그룹핑할 열이름을 "," 로 연결한 문자열|


### Example
```javascript
options.Cfg = {
    Group:"gender,age"       // 시트 로딩시 열이름이 성별, 나이인 열으로 그룹핑
};
option.Solid = [{
    Kind: "Group",           // 커스텀 행 Kind 를 Group 으로 설정
    Space: -1                // 커스텀 행의 위치를 설정 (-1: 테이블 상단)
}];
```

### Try it
- [Demo of Group](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Group/)

### Read More
- [Kind appendix](/docs/appx/kind)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
