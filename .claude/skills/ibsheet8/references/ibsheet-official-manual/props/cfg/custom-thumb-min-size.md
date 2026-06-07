---
KEY: customThumbMinSize
KIND: config-property
PATH: props/cfg/custom-thumb-min-size
ALIAS: 옵션을, 시트의, 스크롤을, 브라우져의, 기본스크롤이
ALIAS_EN: custom, thumb, min, size
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/custom-thumb-min-size
---
# CustomThumbMinSize ***(cfg)***

> [CustomScroll](./custom-scroll) 옵션을 통해 시트의 스크롤을 브라우져의 기본스크롤이 아닌 이미지 형태를 사용할 때, Thumb 의 최소 크기를 설정합니다. 

> 스크롤 바 내에서 현재 위치를 표시하는 thumb는 조회데이터 양이 많아지면 크기가 유동적으로 줄어들게 되는데, 해당 속성을 통해 최소한의 크기를 pixel단위로 지정하면 이 이하로 줄어드는 것을 방지합니다.

> 해당 옵션은 가로와 세로 스크롤 바 모두 적용됩니다.


###
![CustomThumbMinSize](/assets/imgs/scrollthumb.png "CustomThumbMinSize")
<!-- IMAGE: 스크린샷/예시 이미지 - CustomThumbMinSize -->


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|스크롤바 thumb의 최소 크기 설정|



### Example
```javascript
options.Cfg = {
    CustomScroll:1,
    CustomThumbMinSize:150, //150 pixel 보다 줄어들지 않게 한다.
};
```

### Read More
- [TouchScroll cfg](./touch-scroll)
- [CustomScroll cfg](./custom-scroll)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.2|기능 추가|
