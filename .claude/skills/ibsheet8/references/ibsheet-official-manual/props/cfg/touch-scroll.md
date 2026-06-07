---
KEY: touchScroll
KIND: config-property
PATH: props/cfg/touch-scroll
ALIAS: 태블릿이나, 모바일, 기기에서, 시트, 스크롤바의
ALIAS_EN: touch, scroll, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/touch-scroll
---
# TouchScroll ***(cfg)***

> 태블릿이나 모바일 기기에서 시트 내 스크롤바의 모양을 설정합니다. 

> 시트 섹션별 생성되는 가로 스크롤이나 전체 시트에 생성되는 가로/세로 스크롤바에 해당합니다.




### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|스크롤바 영역만 있을 뿐 실제 스크롤바를 통한 이동은 불가 (`SearchMode: 0`에서는 동작하지 않습니다.)|
|`1`|평범한 스타일의 스크롤바 사용 |
|`2`|큰 스타일의 스크롤바 사용 (`default`)|
|`3`|작은 스타일의 스크롤바 사용|
|`4`|스크롤 바를 숨김처리|

**`0`이나 `4` 설정시 마우스 휠 스크롤이나 바디(데이터)영역의 터치를 통해서만 이동 가능**

### Example
```javascript
options.Cfg = {
  TouchScroll: 4      // 스크롤바 숨김 처리, 터치로만 이동함.
};
```

### Read More
- [CustomScroll cfg](./custom-scroll)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
