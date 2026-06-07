---
KEY: weeks
KIND: config-property
PATH: props/cfg/weeks
ALIAS: 달력의, 주차, 표현, 여부를, 설정합니다
ALIAS_EN: weeks
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/weeks
---
# Weeks ***(cfg)***

> 달력의 주차 표현 여부를 설정합니다.

> 사용자가 직접 [showCalendar](/docs/static/show-calendar)를 호출하는 경우엔 적용되지 않습니다. (직접 호출하는 경우 메소드 인자에 따로 설정해야합니다).

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|주차 표현 안함 (`default`)
 !["기본값"](/assets/imgs/weeks_0.png "기본값")
<!-- IMAGE: 스크린샷/예시 이미지 - "기본값" -->|
|`1`|주차 표현
 !["주차 표현"](/assets/imgs/weeks_1.png  "주차 표현")
<!-- IMAGE: 스크린샷/예시 이미지 - "주차 표현" -->|


### Example
```javascript
options.Cfg = {
   "Weeks": 1   // 주차 표현
};
```

### Read More
- [showCalendar static](/docs/static/show-calendar)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
