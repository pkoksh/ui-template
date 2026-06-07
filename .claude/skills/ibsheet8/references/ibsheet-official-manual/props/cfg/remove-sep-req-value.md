---
KEY: removeSepReqValue
KIND: config-property
PATH: props/cfg/remove-sep-req-value
ALIAS: 같은, 서버로, 데이터를, 보내는, 경우
ALIAS_EN: remove, sep, req, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/remove-sep-req-value
---
# RemoveSepReqValue ***(cfg)***

> `getSaveJson, getSaveString, doSave` 와 같은 서버로 데이터를 보내는 경우, 데이터와 `CustomFormat` 의 형태가 일치할시 `CustomFormat` 의 구분자를 제거해서 서버로 보내는 기능입니다. 

> 해당 기능의 경우, 사용자가 직접 커스터마이징한 포멧은 사용할 수 없고 시트에서 제공하는 6가지 포멧의 형태만 지원합니다. `["IdNo", "IdNoMask", "PostNo", "SaupNo", "CardNo", "PhoneNo"]`

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|원본 데이터 그대로 보냄. (`default`)|
|`1(true)`|데이터와 `CustomFormat` 의 형태가 일치할시, 데이터의 구분자를 제거하여 서버로 보냄.|

### Example
```javascript
options.Cfg = { "RemoveSepReqValue": true };
```
```javascript
Cols = [
  {
    ...
    CustomFormat: "IdNo"
    Name: "idnoformat"
    ...
  },
  {
    ...
    CustomFormat: "######-#######",
    Name: "userformat"
    ...
  }
];
data = [
  {
    idnoformat: "123456-1234567",
    userformat: "123456-1234567"
  }
];

var saveStr = sheet.getSaveJson(0);
console.log(saveStr);
/*
 idnoformat: "1234561234567", // IdNo 형식에 맞아 해당 구분자를 제거하고 데이터를 보냄.
 userformat: "123456-1234567" // 유저가 직접 만든 포멧은 적용되지 않고 원본 데이터를 그대로 보냄.
*/
```
### Read More
- [CustomFormat col](/docs/props/col/custom-format)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|기능 추가|
