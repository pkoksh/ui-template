---
KEY: accessibility
KIND: config-property
PATH: props/cfg/accessibility
ALIAS: 접근성, 모드를, 사용합니다
ALIAS_EN: accessibility
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/accessibility
---
# !Accessibility ***(cfg)***

> 웹 접근성 모드를 사용합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|웹 접근성 모드 사용 안함 (`default`)|
|`1(true)`|웹 접근성 모드 사용|
|`2`|웹 접근성 모드 사용(웹 접근성 모드에 필요한 속성 자동 설정)|

### Example
```javascript
options.Cfg = {
  Accessibility: true      // 웹 접근성 모드 사용
};
```

### Read More
- [TableCaption cfg](/docs/props/cfg/table-caption)
- [TableSummary cfg](/docs/props/cfg/table-summary)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
