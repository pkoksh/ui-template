---
KEY: touchScrollCount
KIND: config-property
PATH: props/cfg/touch-scroll-count
ALIAS: 에서, 모바일, 터치, 스크롤, 이동할
ALIAS_EN: touch, scroll, count
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/touch-scroll-count
---
# TouchScrollCount ***(cfg)***

> `SearchMode: 0` 에서 모바일 터치 스크롤 시 이동할 행의 개수를 설정하는 기능 입니다. 

> 설정 하지 않으면 한번 스크롤 움직임 시 3개의 행만큼 움직입니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|모바일 터치 스크롤 시 이동할 행의 개수|

### Example
```javascript
options.Cfg = {
   TouchScrollCount: 1 // 터치 스크롤 시 행의 개수가 1개씩 움직입니다.
};
```

### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.52|기능 추가|
