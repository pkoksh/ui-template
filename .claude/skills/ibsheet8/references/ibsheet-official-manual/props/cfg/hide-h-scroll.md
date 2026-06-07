---
KEY: hideHScroll
KIND: config-property
PATH: props/cfg/hide-h-scroll
ALIAS: 시트에, 가로스크롤바를, 표시하지, 않습니다
ALIAS_EN: hide, scroll
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/hide-h-scroll
---
# !HideHScroll ***(cfg)***

> 시트에 가로스크롤바를 표시하지 않습니다.
 
> [NoHScroll](./no-h-scroll)과 다르게 조회된 데이터의 갯수만큼 시트의 높이가 변경 되지 않습니다. 

> <!-- `[비공개 설명]` 시트가 생성된 이후 시트의 크기가 갱신 될 때, 가로 스크롤 바 영역이 표시되는 문제로 비공개 -->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|시트 내 가로 스크롤 표시 (`default`)|
|`1(true)`|가로 스크롤 숨김|


### Example
```javascript
options = {
  Cfg:{
    HideHScroll: true  // 시트에 가로스크롤바를 표시하지 않음
  }
};
```

### Read More
- [NoHScroll cfg](./no-h-scroll)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.16|기능 추가|
