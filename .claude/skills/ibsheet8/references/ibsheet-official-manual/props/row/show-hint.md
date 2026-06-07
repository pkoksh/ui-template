---
KEY: showHint
KIND: row-property
PATH: props/row/show-hint
ALIAS: 힌트는, 열의, 너비보다, 셀의, 내용이
ALIAS_EN: show, hint
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/show-hint
---
# ShowHint ***(row)***

> 힌트는 열의 너비보다 셀의 내용이 많은 경우, 마우스 커서가 해당 셀 위에 오버시 해당 셀의 너비를 늘려 내용을 보여주는 기능입니다.

> 행 단위로 힌트기능을 활성화 할지 여부를 설정하며, 체크박스나 라디오 형태의 열에서는 작동하지 않습니다.


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
//10번 행에 대해서는 Hint 기능 제거.
var row = sheet.getRowById("AR10");
row["ShowHint"] = 0;
sheet.refreshRow(row);

//조회 데이터에서 일부 행에 대해 Hint 기능 제거
{"data":[
    {"ShowHint": 0, "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```

### Read More
- [onShowHint event](/docs/events/on-show-hint)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
