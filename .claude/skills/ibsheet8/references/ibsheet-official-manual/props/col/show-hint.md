---
KEY: showHint
KIND: column-property
PATH: props/col/show-hint
ALIAS: 해당, 열에서, 힌트기능을, 사용할지, 여부를
ALIAS_EN: show, hint
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/show-hint
---
# ShowHint ***(col)***

> 해당 열에서 힌트기능을 사용할지 여부를 설정합니다.

> 힌트는 열의 너비가 좁아 셀의 내용의 일부가 안보일때, 마우스 커서가 올라간 셀에 한해 일시적으로 셀의 너비를 늘려 안보이던 뒷 내용을 보여주는 기능입니다.

> 이 기능은 체크박스나 라디오 형태의 열에서는 작동하지 않습니다.

###
![힌트활성화](/assets/imgs/hint1.png "마우스 커서가 셀에 올라갔을때 힌트를 통해 감춰진 부분이 보여짐")
<!-- IMAGE: 스크린샷/예시 이미지 - 힌트활성화 -->



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|힌트 기능을 사용안함|
|`1`|셀의 크기가 작아 셀의 내용의 일부만 보여질때 동작 (`default`)|
|`2`|1번 옵션과 더불어 스크롤이 있는 시트에서 셀이 하단에 있어 내용의 아래부분이 안보여질때 힌트 동작|
|`3`|일반적으로는 힌트 기능이 동작하지 않고 [onShowHint](/docs/events/on-show-hint) 이벤트를 통해서만 동작(이벤트를 통해 힌트에 어떤 내용이 보여지게 할지 설정 가능)|


### Example
```javascript
//특정 열에 힌트기능을 사용합니다.
options.Cols = [
    ...
    {Type: "Text", ShowHint: 2, Name: "DESC", Width: 120 ...},
    ...
];
```

### Read More
- [HintValue col](./hint-value)
- [ShowHint row](/docs/props/row/show-hint)
- [onShowHint event](/docs/events/on-show-hint)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
