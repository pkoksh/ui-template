---
KEY: related
KIND: column-property
PATH: props/col/related
ALIAS: 이나, 열들, 간에, 연관성을, 대분류
ALIAS_EN: related
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/related
---
# Related ***(col)***
> [Type](/docs/appx/type)이 `Enum`이나 `Radio` 인 열들 간에 연관성을 통해, 대분류/중분류/소분류와 같은 **관계형 콤보**를 설정합니다.

> 대분류(혹은 최상위)에 해당하는 열은 `Related`를 설정할 필요가 없고, 중분류 열에서 대분류 열이름을, 소분류 열에서 중분류 열이름을 설정합니다.


> 중분류 열에서는 [**"Enum"+"상위분류 EnumKey"**] 속성으로 아이템을 설정합니다.

> 소분류와 같이 자신의 상위 관계가 2단계 이상 있는 열에서는 [**"Enum"+"1단계 분류 EnumKey"+"_"+"2단계 분류 EnumKey"**] 속성으로 아이템을 설정합니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|자신의 상위 관계 열이름|



### Example
```javascript
//Related 속성을 통해 대분류/중분류/소분류에 해당하는 콤보를 구성
options.Cols = [
    ...
    //대분류
    {Type: "Enum", Name: "cls1", Enum: "|A회사|B회사", EnumKeys: "|AA|BB" ... },
    //중분류
    {Type: "Enum", Name: "cls2", Related: "cls1",
         EnumAA: "|해외사업부|국내사업부|영업지원부", EnumKeysAA: "|A0|A1|A2",
         EnumBB: "|개발부|기술지원부", EnumKeysBB: "|B0|B1" ... },
    //소분류 Related 속성에 중분류와 대분류까지 바라보게 설정.
    //상위 관계가 2단계 이상인 경우 Related 속성에 해당하는 Name 모두 설정
    {Type: "Enum", Name: "cls3", Related: "cls1,cls2",
         EnumAA_A0: "|미주사업|동남아사업팀|유럽사업팀", EnumKeysAA_A0: "|AB0|AB1|AB2",
         EnumAA_A1: "|경부|전라|수도권", EnumKeysAA_A1: "|K0|K1|K2",
         EnumAA_A2: "|지원1팀|지원2팀", EnumKeysAA_A2: "|SE0|SE1",
         EnumBB_B0: "|개발1팀|개발2팀|개발3팀", EnumKeysBB_B0: "|DEV0|DEV1|DEV2",
         EnumBB_B1: "|지원1팀|지원2팀|지원3팀", EnumKeysBB_B1: "|SU0|SU1|SU3", ... },
    ...
];

//상위 분류만 체크하여 대분류/중분류/소분류 콤보를 구성하는 방법.
options.Cols = [
    ...
    //대분류
    {Type: "Enum", Name: "cls1", Enum: "|인문|소설/시", EnumKeys: "|AA|BB" ... },
    //중분류
    {Type: "Enum", Name: "cls2", Related: "cls1",
         EnumAA: "|철학/사상|인문일반", EnumKeysAA: "|A0|A1",
         EnumBB: "|한국소설|시/희곡", EnumKeysBB: "|B0|B1" ... },
    //소분류 Related 속성에 중분류 Name을 바라보게 설정.
    {Type: "Enum", Name: "cls3", Related: "cls2",
         EnumA0: "|과학철학|언어철학|실용주의", EnumKeysA0: "|AA0|AA1|AA2",
         EnumA1: "|인문학 이론|인문/교양 일반", EnumKeysA1: "|AB0|AB1",
         EnumB0: "|단편소설|장편소설", EnumKeysB0: "|BA0|BA1",
         EnumB1: "|세계의 시|희곡/시나리오", EnumKeysB1: "|BB0|BB1", ... },
    ...
];


```

### Read More
- [Enum col](/docs/props/col/enum)
- [EnumKeys col](/docs/props/col/enum-keys)
- [Clear col](/docs/props/col/clear)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
