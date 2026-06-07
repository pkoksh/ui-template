---
KEY: wheelScrollCount
KIND: config-property
PATH: props/cfg/wheel-scroll-count
ALIAS: 상관없이, 스크롤, 이동할, 행의, 개수를
ALIAS_EN: wheel, scroll, count
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/wheel-scroll-count
---
# WheelScrollCount ***(cfg)***

> `SearchMode` 와 상관없이, 휠 스크롤 시 이동할 행의 개수를 설정하는 기능 입니다. 

> 설정 하지 않으면, `SearchMode: 0` 은 3개, `SearchMode: 2` 은 `window.wheel.event` 의 `deltaY` 만큼 움직입니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|휠 스크롤 시 이동할 행의 개수|


### Example
```javascript
options.Cfg = {
   WheelScrollCount: 1 // 스크롤 시 행의 개수가 1개씩 움직입니다.
};
```

### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.20|기능 추가|
