---
KEY: fitWidth
KIND: config-property
PATH: props/cfg/fit-width
ALIAS: 마지막, 컬럼, 뒤에, 더미, 컬럼을
ALIAS_EN: fit, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/fit-width
---
# FitWidth ***(cfg)***

> 마지막 컬럼 뒤에 더미 컬럼을 두어 세로 스크롤바를 우측 끝에 붙게 합니다. 


###
[`FitWidth: false` 설정시]

![FitWidth: false](/assets/imgs/fitWidth0.png "FitWidth: false")
<!-- IMAGE: 스크린샷/예시 이미지 - FitWidth: false -->


[`FitWidth: true` 설정시]

![FitWidth: true](/assets/imgs/fitWidth1.png "FitWidth: true")
<!-- IMAGE: 스크린샷/예시 이미지 - FitWidth: true -->



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|기능 사용 안함 (`default`)|
|`1(true)`|기능 사용|


### Example
```javascript
options.Cfg = {
    FitWidth: true    //더미 헤더를 추가하여 스크롤바를 우측 끝에 붙인다.
};

```

### Try it
- [True](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/FitWidth-true/)

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
