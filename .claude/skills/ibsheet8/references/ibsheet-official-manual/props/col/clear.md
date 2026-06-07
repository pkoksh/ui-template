---
KEY: clear
KIND: column-property
PATH: props/col/clear
ALIAS: 열간에, 관계형, 콤보를, 사용할때, 상위
ALIAS_EN: clear
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/clear
---
# Clear ***(col)***
> 열간에 관계형 콤보를 사용할때, 상위 콤보에 값이 바뀌었을때 클리어 되어야 하는 하위 열을 정의 합니다.

> 관계형 콤보 구성과 관련해서는 [Related](./related) 속성을 참고해 주세요.

> [CanEmpty](./can-empty) 속성에 영향을 받아 `CanEmpty: 0` 일 경우에는 Enum의 첫 번째 값으로 설정이 됩니다.

> `CanEmpty: 1` 일 경우에는 빈 문자열로 설정 됩니다.

> `참고` : 관계형 콤보의 `(Col)Clear, (Col)CanEmpty` 는 사용자의 action(change 이벤트가 발생하는) 에 의해서만 동작합니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|자신의 하위관계 열이름 (여러개인 경우 ","구분자로 지정)|

### Example
```javascript
options.Cols = [
    ...
    //열의 값이 변경될때 cls2,cls3 열의 값이 클리어 됨
    {Type: "Enum", Clear: "cls2, cls3",  Name: "cls1", Enum: "|A회사|B회사",EnumKeys: "|AA|BB" ... },
    //열의 값이 변경될때 cls3 열의 값이 클리어 됨
    {Type: "Enum", Clear: "cls3", Name: "cls2", Related: "cls1",
         EnumAA: "|해외사업부|국내사업부|영업지원부", EnumKeysAA: "|A0|A1|A2",
         EnumBB: "|개발부|기술지원부", EnumKeysBB: "|B0|B1" ... },
    //소분류
    {Type: "Enum", Name: "cls3", Related: "cls2",
         EnumAA_A0: "|미주사업|동남아사업팀|유럽사업팀", EnumKeysAA_A0: "|AB0|AB1|AB2",
         EnumAA_A1: "|경부|전라|수도권", EnumKeysAA_A1: "|K0|K1|K2",
         EnumAA_A2: "|지원1팀|지원2팀", EnumKeysAA_A2: "|SE0|SE1",
         EnumBB_B0: "|개발1팀|개발2팀|개발3팀", EnumKeysBB_B0: "|DEV0|DEV1|DEV2",
         EnumBB_B1: "|지원1팀|지원2팀|지원3팀", EnumKeysBB_B1: "|SU0|SU1|SU3", ... },
    ...
];
```

### Read More
- [Related col](./related)
- [Enum col](./enum)
- [EnumKeys col](./enum-keys)
- [CanEmpty](./can-empty)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
