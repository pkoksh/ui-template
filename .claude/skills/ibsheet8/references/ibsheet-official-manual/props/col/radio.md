---
KEY: radio
KIND: column-property
PATH: props/col/radio
ALIAS: 혹은, 열들, 간에, 같은, 값을
ALIAS_EN: radio
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/radio
---
# Radio ***(col)***
> [Type](/docs/appx/type)이 `Bool` 혹은 `Radio` 인 열들 간에 같은 값을 부여한 값을 갖고 있는 셀들을 하나의 그룹으로 묶여서 한 행에서 같은 그룹 내에 한 셀만 체크 가능하게 합니다.


###
![Radio](/assets/imgs/radio.png "같은 행에서 하나만 선택 가능")
<!-- IMAGE: 스크린샷/예시 이미지 - Radio -->

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|라디오처럼 하나로 묶을 그룹 인덱스|




### Example
```javascript
//행안에서 좌우로 비교하여 그룹내에서 하나의 셀만 체크 가능하게 설정
options.Cols = [
    //1번 그룹
    {Type:"Bool", Name:"st1", HRadio:1, Radio:1, ...},
    {Type:"Bool", Name:"st2", HRadio:1, Radio:1, ...},
    {Type:"Bool", Name:"st3", HRadio:1, Radio:1, ...},
    {Type:"Bool", Name:"st4", HRadio:1, Radio:1, ...},
    {Type:"Bool", Name:"st5", HRadio:1, Radio:1, ...},
    //2번 그룹
    {Type:"Bool", Name:"att1", HRadio:1, Radio:2, ...},
    {Type:"Bool", Name:"att2", HRadio:1, Radio:2, ...},
    {Type:"Bool", Name:"att3", HRadio:1, Radio:2, ...},
    {Type:"Bool", Name:"att4", HRadio:1, Radio:2, ...},
    {Type:"Bool", Name:"att5", HRadio:1, Radio:2, ...},
    ...
];
```

### Read More
- [BoolGroup col](./bool-group)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
