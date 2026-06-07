---
KEY: alternate
KIND: config-property
PATH: props/cfg/alternate
ALIAS: 홀수, 짝수, 행에, 대하여, 번갈아
ALIAS_EN: alternate
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/alternate
---
# Alternate ***(cfg)***

> 홀수, 짝수 행에 대하여 번갈아 가며 배경색을 다르게 설정하여 가독성을 높일수 있는 기능입니다.

> 옵션 값이 `3` 이상인 경우 (Cfg)[AlternateStart](./alternate-start) 와 (cfg)[AlternateCount](./alternate-count) 에 따라 하이라이트 적용을 변경할 수 있습니다. 

> 하이라이트 색상은 css 파일의 `.IBColorAlternate` 색상을 기본값으로 가지며, (Row)[AlternateColor](/docs/props/row/alternate-color) 를 설정한 경우 해당 색상을 따르게 됩니다. 


###
![Alternate0](/assets/imgs/alternate0.png "Alternate0")
<!-- IMAGE: 스크린샷/예시 이미지 - Alternate0 -->

[`Alternate: 0` 의 경우]

![Alternate2](/assets/imgs/alternate2.png "Alternate0")
<!-- IMAGE: 스크린샷/예시 이미지 - Alternate2 -->

[`Alternate: 2` 의 경우]


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|하이라이트 기능 사용 안함 (css 파일의 `.IBColorDefault` 색상) (`default`)|
|`1`|모든 데이터행에 하이라이트 사용 (css 파일의 `.IBColorAlternate` 색상)|
|`2`|**짝수행에 하이라이트 사용**  (css 파일의 `.IBColorDefault, .IBColorAlternate` 색상이 반복적으로 표시)|
|`3`|3개 행 마다 마지막 행에 하이라이트 사용 |
|`N`|N개 행 마다 마지막 행에 하이라이트 사용 |


### Example
```javascript
options = {
    Cfg:{
      Alternate: 2,  // 홀/짝수행 색상을 css 의 .IBColorDefault 색상과 (Row)AlternateColor 색상으로 처리
    },
    Def:{
      Row:{
          AlternateColor: "FFFF00" // 하이라이트 색상을 노란색으로 설정
      }
    }
 };
```

### Read More
- [AlternateColor row](/docs/props/row/alternate-color)
- [AlternateCount cfg](./alternate-count)
- [AlternateStart cfg](./alternate-start)
- [AlternateType cfg](./alternate-type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
