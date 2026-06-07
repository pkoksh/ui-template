---
KEY: defaults
KIND: column-property
PATH: props/col/defaults
ALIAS: 사용자가, 설정할, 있는, 값을, 첫글자를
ALIAS_EN: defaults
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/defaults
---
# Defaults ***(col)***
> 사용자가 설정할 수 있는 값을 첫글자를 구분자로 연결한 문자열 형식으로 정의하여 입력 편의를 돕습니다.

> 열에 [Button](./button) 속성이나 [Icon](./icon) 속성값이 `Defaults`인 경우에만 사용하실 수 있습니다.

> `*`문자로 시작하는 몇가지 예약어를 통해 특수한 기능을 추가적으로 사용하실 수 있습니다.

> `Text` 타입에서 사용시 [Format](./format), [EditFormat](./edit-format) 속성을 같이 사용하여 `Html`의 \<select\>처럼 보여지는 값과 서버로 전송되는 값을 다르게 사용하실 수도 있습니다.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|첫글자를 구분자로 하는 입력 가능한 값 문자열
ex) `Defaults: "\|딸기\|바나나\|오렌지\|포도\|파인애플\|*All\|*None"`
![Defaults](/assets/imgs/defaults1.png)
<!-- IMAGE: 스크린샷/예시 이미지 - Defaults -->|

### 특수 기능 (예약어)
|예약문자|기능|
|---|---|
|`*Date`|"일자선택 ..."이라는 문구가 리스트 아이템에 표시되고 선택시 달력이 오픈됩니다.|
|`*Button`|"선택 ..."이라는 문구가 리스트 아이템에 표시되고 선택시 [onButtonClick](/docs/events/on-button-click)이벤트를 발생시킵니다.|
|`*FilterOff`|필터행에서만 "전체"라는 문구가 리스트에 표시되고 선택시 필터셀의 값을 지웁니다.|
|`*All`|[Range](./range) 속성을 `1`로 설정한 경우 리스트의 각 아이템 우측에 체크박스가 표시되어 여러개 아이템을 선택할 수 있습니다.
이때 이 값을 갖은 아이템에는 "모두 선택"이라는 문구가 표시되고 선택시 모든 아이템이 체크됩니다.|
|`*None`|[Range](./range) 속성을 `1`로 설정한 경우 리스트의 각 아이템 우측에 체크박스가 표시되어 여러개 아이템을 선택할 수 있습니다.
이때 이 값을 갖은 아이템에는 "모두 지우기"이라는 문구가 표시되고 선택시 모든 아이템이 체크해제 됩니다.|
|`*Rows`|값이 포함되면 별도의 아이템이 생기는게 아니라 해당 열에 모든 값이 리스트에 추가됩니다. 
보여지는 행만 리스트에 추가하고 싶으면 `*Rows` 뒤에 `Visible` 키워드를 붙여주시면 됩니다. (`*RowsVisible`)|

### Example
```javascript
// Default를 이용한 드롭 다운 리스트 (복수개 선택가능)
options.Cols = [
    {
        Header: "여행지",
        Type: "Text",
        Name: "Nation",
        Range: 1,
        Button: "Defaults", // 시트 우측 영역에 Default 버튼 생성
        Defaults: "|LOC|USA|EST|CHN|JPN|*None",
        Format: "{'LOC':'국내','USA':'미국','EST':'동남아','CHN':'중국','JPN':'일본'}",
        EditFormat: "{'LOC':'국내','USA':'미국','EST':'동남아','CHN':'중국','JPN':'일본'}",
    },
    ...
];
```
![Default](/assets/imgs/defaults2.png)
<!-- IMAGE: 스크린샷/예시 이미지 - Default -->

Example과 같이 설정시 보여지는 리스트
(저장시 서버로는 **"LOC;EST"** 전송됨)

### Read More
- [Button col](./button)
- [Icon col](./icon)
- [Range col](./range)
- [Format col](./format)
- [EditFormat col](./edit-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.25|`Visible` 키워드 추가|
