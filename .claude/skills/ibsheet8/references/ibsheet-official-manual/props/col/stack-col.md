---
KEY: stackCol
KIND: column-property
PATH: props/col/stack-col
ALIAS: 열에서, 체크를, 화면의, 하단에, 행을
ALIAS_EN: stack, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/stack-col
---
# Stack ***(col)***
> [Type](/docs/appx/type)이 `Bool` 인 열에서 체크를 통해 화면의 상/하단에 행을 고정시키는 기능 입니다. 

> 해당 속성을 설정하면 클릭을 통해 행을 고정 / 고정 해제 할 수 있습니다.

> 데이터 행의 높이가 같아야 하며, 동적으로 스크롤 행의 개수를 변경시키는 동작 (`정렬, 행추가/제거, 필터`) 에 대해 `제약 사항` 이 있습니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|고정 기능 사용하지 않음 (`default`)|
|`1(true)`|고정 기능 사용|

### Example
```javascript
// 체크된 행을 고정하는 컬럼 설정
options.Cfg = {
  SearchMode: 0,
  CanSort: 0
};
options.Cols = [
    ...
    { Type: "Bool", Header: "고정행", Name: "StackColumn", Stack: 1... },
    ...
];
```

### Read More
- [Type appendix](/docs/appx/type)
- [(Appendix)대용량 모드 제약사항](/docs/appx/fastload-constraints)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.31|기능 추가|
