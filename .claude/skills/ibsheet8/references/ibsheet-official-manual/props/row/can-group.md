---
KEY: canGroup
KIND: row-property
PATH: props/row/can-group
ALIAS: 특정행에, 그룹핑, 허용, 여부를, 설정합니다
ALIAS_EN: can, group
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/can-group
---
# CanGroup ***(row)***
> 특정행에 대한 그룹핑 허용 여부를 설정합니다.

> `0(false)`로 설정시 해당 행은 그룹에 포함되지 않고 독립적으로 위치하게 됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|그룹핑 불가|
|`1(true)`|그룹핑  가능|


### Example
```javascript
//특정행들은 그룹에서 제외 시킨다.
{"data":[
    ...
    {"CanGroup":0,"ColName1":"Value1","ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [Group cfg](/docs/props/cfg/group)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
