---
KEY: name
KIND: column-property
PATH: props/col/name
ALIAS: 열에, 이름을, 부여합니다
ALIAS_EN: name
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/name
---
# Name ***(col)***
> 열에 이름을 부여합니다.

> 여기서 부여한 데이터 조회시 `json` 데이터와 매핑하거나, 저장시 서버로 전송됩니다.

> `Name`을 `"SEQ"`로 설정하면 해당 열은 서버에서 조회해 온 데이터와 무관하게 자동으로 1,2,3,4.. 숫자가 보여지는 열로 동작합니다.(편집불가)

> `SEQ`로 생성된 열은 `Sort`, `Filter`, `hideRow`, `removeRow` 등 행의 변화가 있을 때에도 무조건 1부터 숫자를 다시 설정 합니다.


> **<mark>주의</mark> : 대소문자를 구분합니다.

> 반드시 필수로 설정해야 하며, 중복을 허용하지 않습니다.

> 문자(az, AZ), 밑줄 '_', 숫자(0-9)만 포함할 수 있습니다.

> 단, 이름은 숫자나 밑줄로 시작할 수 없습니다.**


> 아래와 같은 이름은 사용할 수 없습니다:

> 1. 행의 속성명: Def, Kind, Deleted, Attribute(TextColor 등)

> 2. 시트에서 사용하는 예약어: SEQ, id, Status, Level, ColorPos, GroupPos, Hasch, LevelImg, OrgIndex, SUMType

> 3. 이미 존재하는 속성 이름의 일부: Color, NoColor (예: 컬럼 이름을 'No'로 사용할 경우 'NoColor'로 저장되어 충돌 발생)

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|각 열에 부여하는 고유한 이름|


### Example
```javascript
//열 생성시 고유한 이름을 선언
options.Cols = [
    {Type: "Int", Name: "SEQ", Width: 60 ...}, //Seq 열
    {Type: "Text", Name: "empNm", Width: 120 ...},
    {Type: "Int", Name: "age", Width: 70 ...},
    ...
];
//조회 데이터
var DATA = [
    {"empNm": "이몽룡", "age": 19, ...},
    {"empNm": "성춘향", "age": 17, ...},
    ...
];
```

### Read More
- [RowIndex cfg](/docs/props/cfg/row-index)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
