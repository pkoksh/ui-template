---
KEY: alternateStart
KIND: config-property
PATH: props/cfg/alternate-start
ALIAS: 설정한, 간격에, 적용할, 행의, 시작
ALIAS_EN: alternate, start
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/alternate-start
---
# AlternateStart ***(cfg)***

> [Alternate cfg](./alternate) 에 설정한 행 간격에 [AlternateColor](/docs/props/row/alternate-color)를 적용할 행의 시작 위치를 설정합니다.  

> `0`은 간격의 첫번째 행을 의미합니다.
> 예를 들어 [Alternate](./alternate): 5 이고, [AlternateCount](./alternate-count): 2,  AlternateStart: 0 로 설정한 경우 

> 화면에는 5개 행 간격으로 맨위의 2개 행에만 `AlternateColor`를 표시합니다.


###
![AlternateStart](/assets/imgs/alternateCount.png "AlternateStart")
<!-- IMAGE: 스크린샷/예시 이미지 - AlternateStart -->

[`Alternate: 5, AlternateCount: 2` 로 설정한 경우]

![AlternateStart](/assets/imgs/alternateStart.png "AlternateStart")
<!-- IMAGE: 스크린샷/예시 이미지 - AlternateStart -->

[`Alternate: 5, AlternateCount: 2, AlternateStart: 0` 로 설정한 경우]


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|[Alternate](./alternate) 설정된 행 간격마다 하이라이트가 시작될 행 위치
(`default :  (cfg)Alternate - (cfg)AlternateCount`)|


### Example
```javascript
options["Cfg"]  = {
     Alternate:5, AlternateCount:2, AlternateStart:0
};
```

### Read More
- [Alternate cfg](./alternate)
- [AlternateCount cfg](./alternate-count)
- [AlternateType cfg](./alternate-type)
- [AlternateColor row](/docs/props/row/alternate-color)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
