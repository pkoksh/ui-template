---
KEY: customScroll
KIND: config-property
PATH: props/cfg/custom-scroll
ALIAS: 시트에서, 사용될, 스크롤바의, 타입을, 설정합니다
ALIAS_EN: custom, scroll
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/custom-scroll
---
# CustomScroll ***(cfg)***

> 시트에서 사용될 스크롤바의 타입을 설정합니다. 

> 시트 섹션별 생성되는 가로 스크롤이나 전체 시트에 생성되는 가로/세로 스크롤바에 해당합니다.

> 행과 열 수가 많은 시트에서는 `CustomScroll` 설정시 속도저하를 일으킬 수 있습니다.

>  `SearchMode:2 (LazyLoad)`의 경우 조회데이터수가 5만건 이상일때 IE 브라우저에서의 스크롤 설정 한계로 인하여 반드시 커스텀 스크롤을 0 이외의 값으로 설정해야 합니다.




### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|브라우저 스크롤바 사용 (`default`)
![CustomScroll0](/assets/imgs/customScroll0.png "CustomScroll0")
<!-- IMAGE: 스크린샷/예시 이미지 - CustomScroll0 --> (by Chrome)|
|`1`|평범한 스타일의 스크롤바 사용
![CustomScroll1](/assets/imgs/customScroll1.png "CustomScroll1")
<!-- IMAGE: 스크린샷/예시 이미지 - CustomScroll1 --> (by Chrome)|
|`2`|큰 스타일의 스크롤바 사용
![CustomScroll2](/assets/imgs/customScroll2.png "CustomScroll2")
<!-- IMAGE: 스크린샷/예시 이미지 - CustomScroll2 --> (by Chrome)|
|`3`|작은 스타일의 스크롤바 사용
![CustomScroll3](/assets/imgs/customScroll3.png "CustomScroll3")
<!-- IMAGE: 스크린샷/예시 이미지 - CustomScroll3 --> (by Chrome)|


### Example
```javascript
options.Cfg = {
    CustomScroll: 3      // 작은 스타일의 스크롤바 설정
};
```

### Try it
- [0 by default](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/CustomScroll/)

### Read More
- [TouchScroll cfg](./touch-scroll)
- [CustomThumbMinSize cfg](./custom-thumb-min-size)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
