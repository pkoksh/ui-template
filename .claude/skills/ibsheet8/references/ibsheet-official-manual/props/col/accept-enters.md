---
KEY: acceptEnters
KIND: column-property
PATH: props/col/accept-enters
ALIAS: 타입에서, 편집중, 입력시, 동작에, 대해
ALIAS_EN: accept, enters
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/accept-enters
---
# AcceptEnters ***(col)***

> `Lines` 타입에서 편집중 `Enter키` 입력시 동작에 대해 설정합니다. 



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|값 변경 마치고, 편집모드 종료 (`default`)|
|`1`|줄넘김문자가 삽입되고 편집모드 유지
`Ctrl or Shift or Alt + Enter`를 입력하거나 `tab키`를 입력 시 편집 종료|
|`2`|값 변경을 마치고, 편집모드 종료 
`Ctrl or Shift or Alt + Enter`를 입력하여 줄넘김 가능|
|`3`|`Ctrl or Shift or Alt + Enter` 나 그냥 `Enter`나 모두 줄넘김문자가 삽입됨
`tab키`를 누르거나 마우스로 `다른 셀을 클릭` 시 편집 종료|


### Example
```javascript
//편집중 Enter키 입력시 줄넘김으로 동작
options.Cols = [
    ...
    {Type: "Lines", AcceptEnters: 1, Name: "CarName", Width: 120, ...},
    ...
];
```

### Read More
- [EnterMode cfg](/docs/props/cfg/enter-mode)
- [AcceptEnters cell](/docs/props/cell/accept-enters)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
