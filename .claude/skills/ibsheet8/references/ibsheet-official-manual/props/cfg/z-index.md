---
KEY: zIndex
KIND: config-property
PATH: props/cfg/z-index
ALIAS: 시트와, 시트의, 팝업, 다이얼로그, 메세지
ALIAS_EN: index, dialog, modal, popup
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/z-index
---
# ZIndex ***(cfg)***

> 시트와 시트의 팝업 다이얼로그, 메세지, 커서들에 대한 `css z-index` 기준 값을 설정합니다.

> 기준 값 설정 시 시트에 속한 객체들은 `Zindex ~ Zindex+20` 까지의 `css z-index` 를 가지게 됩니다.



### Type
`number`


### Options
|Value|Description|
|-----|-----|
|`number`|`ZIndex`로 가질 기준 값을 설정한다. |


### Example
```javascript
options.Cfg = {
   // 시트와 시트 내부 객체들의 z-index 기준값을 300 으로 설정
   // 내부 객체들은 최대 320 까지의 z-index 를 가짐
   ZIndex: 300,
   ...
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
