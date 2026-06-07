---
KEY: borderCursors
KIND: config-property
PATH: props/cfg/border-cursors
ALIAS: 행단위, 설정시, 호버되는, 행의, 보일지
ALIAS_EN: border, cursors
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/border-cursors
---
# BorderCursors ***(cfg)***

>  (cfg)[Hover](./hover) : 2 로 행단위 `Hover`를 설정시 호버되는 행의 `Border` 가 보일지 여부를 설정합니다.(`Hover:0/1` 일 때는 동작안함) 


###
![borderCursors](/assets/imgs/borderCursors1.png "borderCursors")
<!-- IMAGE: 스크린샷/예시 이미지 - borderCursors -->

[`borderCursors : 1` 인 경우]


![borderCursors](/assets/imgs/borderCursors0.png "borderCursors")
<!-- IMAGE: 스크린샷/예시 이미지 - borderCursors -->

[`borderCursors : 0` 인 경우]


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|`Hover` 된 행과 셀의 `Border` 표시 안함|
|`1(true)`|`Hover` 된 행과 셀의 `Border` 표시 (`default`)  |


### Example
```javascript
options.Cfg  = {
  "Hover": 2,               // 행단위 Hover 동작
  "BorderCursors": true,       // Hover 행과 셀의 Border 표시
};
```

### Read More
- [Hover cfg](./hover)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
