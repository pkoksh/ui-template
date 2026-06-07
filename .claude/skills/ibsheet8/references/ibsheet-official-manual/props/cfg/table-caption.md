---
KEY: tableCaption
KIND: config-property
PATH: props/cfg/table-caption
ALIAS: 접근성, 모드에서, 제목을, 지정하는, 설정할
ALIAS_EN: table, caption
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/table-caption
---
# !TableCaption ***(cfg)***

> 웹 접근성 모드에서 `Table`의 제목을 지정하는 `Caption`을 설정할 수 있습니다.

> Html Table에 `caption` 태그를 추가합니다.

> 해당 옵션 사용시 각 `Section`에 대한 안내도 같이 추가 됩니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|TableCaption|`Caption`을 설정할 문자열|


### Example
```javascript
options.Cfg = {
  TableCaption: "고객 정보 시트"      // 웹 접근성 모드 사용
};
```

### Read More
- [Accessibility cfg](/docs/props/cfg/accessibility)
- [TableSummary cfg](/docs/props/cfg/table-summary)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
