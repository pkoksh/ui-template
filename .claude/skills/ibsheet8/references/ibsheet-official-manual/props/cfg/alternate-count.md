---
KEY: alternateCount
KIND: config-property
PATH: props/cfg/alternate-count
ALIAS: 설정된, 간격에, 정의한, 개수만큼, 배경색를
ALIAS_EN: alternate, count
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/alternate-count
---
# AlternateCount ***(cfg)***

> [Alternate](./alternate) 로 설정된 행 간격에 `AlternateCount` 정의한 개수만큼 [AlternateColor](/docs/props/row/alternate-color) 배경색를 적용합니다.  

> 예를 들어 `Alternate: 5` 이고, `AlternateCount: 2` 인 경우 5개 행 간격으로 마지막 2개 행에만 하이라이트를 적용합니다.

###
![AlternateCount](/assets/imgs/alternateCount.png "AlternateCount")
<!-- IMAGE: 스크린샷/예시 이미지 - AlternateCount -->

[`Alternate: 5, AlternateCount: 2` 로 설정한 경우]



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|`alternate` 설정된 행 간격마다 하이라이트가 적용될 마지막 행수 (`default: 1`)|


### Example
```javascript
options["Cfg"] = {
  Alternate:5,
  AlternateCount:2
};
```

### Read More
- [AlternateColor row](/docs/props/row/alternate-color)
- [Alternate cfg](./alternate)
- [AlternateStart cfg](./alternate-start)
- [AlternateType cfg](./alternate-type)


### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
