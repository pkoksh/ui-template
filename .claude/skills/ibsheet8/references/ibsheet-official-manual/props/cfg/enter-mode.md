---
KEY: enterMode
KIND: config-property
PATH: props/cfg/enter-mode
ALIAS: 키를, 눌렀을때, 편집을, 동작시키거나, 아래
ALIAS_EN: enter, mode, bottom
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/enter-mode
---
# EnterMode ***(cfg)***

> `Enter` 키를 눌렀을때 셀 편집을 동작시키거나, 아래 방향키(down)나 우측 방향키(또는 Tab 키)와 같이 포커스가 이동하도록 설정할 수 있습니다.

> 이동시 `EnterMode` 에 따라 편집 가능한 다음 셀로 이동합니다.

> 편집이 불가능한 셀에서는 포커스만 이동합니다. 

> `EnterMode`는 `object`로 사용하여 `option` 기능을 사용할 수 있습니다. (`option` 기능은 비트연산으로 제공합니다.)



### Type
`number | object`


### Options
|Name|Type|Description|
|-----|-----|-----|
|mode|`number`|`0`: `Enter` 키를 누르면 `값 편집(edit) 시작`, (편집 상태) `Enter` 키를 누르면 `편집 종료` (`default`) 
`1`:`Enter` 키를 누르면 `아래 셀(down) 이동`, 마지막 셀에서 첫 행, 첫 열으로 이동 
`2`:`Enter` 키를 누르면 `아래 셀(down) 이동`, 각 열의 마지막 셀에서 행 추가 후 이동 
`3`:`Enter` 키를 누르면 `오른쪽 셀(tab) 이동`, 마지막 셀에서 첫 행, 첫 열으로 이동 
`4`:`Enter` 키를 누르면 `오른쪽 셀(tab) 이동`, 마지막 셀에서 행 추가 후 첫 열으로 이동 
`5`:`Enter` 키를 누르면 `아래 셀(down) 이동`, 마지막 셀에서 포커스 유지 
`6`:`Enter` 키를 누르면 `오른쪽 셀(tab) 이동`, 마지막 셀에서 포커스 유지|
|option|`number`|`0`:`CanFocus: 0`인 셀을 제외한 모든 셀을 포커스 이동에 포함. (`default`) 
`1`:`CanEdit: 0` 를 `EnterMode` 포커스 이동에 포함하지 않음.|
<!--!
`[비공개]` mode|`number`|`7`:(포커스 상태, 편집가능한 셀, 편집 상태) `Enter` 키를 누르면 아무런 동작 없이 포커스만 유지|
!-->

### Example
```javascript
options.Cfg = {
   EnterMode: 3  // Enter 키를 누르면 값 편집 시작, 편집 상태에서 Enter키를 누르면 편집 종료 후 오른쪽 셀 이동
   ...
};

// EnterMode 가 3번이면서 추가적인 option으로 CanEdit: 0 을 확인하고 뛰어 넘어 이동함.
options.Cfg = {
   EnterMode: {
      mode: 3,
      option: 1
   }
}
```

### Try it
- [0 by default with setEnterMode](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/EnterMode/)

### Read More

- [ForceEnterEdit cfg](./force-enter-edit)
- [AcceptEnters col](/docs/props/col/accept-enters)
- [AcceptEnters cell](/docs/props/cell/accept-enters)
- [setEnterMode method](/docs/funcs/core/set-enter-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.7|5, 6 기능 추가, `EnterMode` 사용시 편집 불가능한 셀로도 이동할 수 있도록 수정|
|core|8.0.0.14|option 기능 추가 (비트 연산으로 제공)|
<!--!
|`[비공개]` core|8.0.0.8|`mode: 7` 기능 추가|
!-->