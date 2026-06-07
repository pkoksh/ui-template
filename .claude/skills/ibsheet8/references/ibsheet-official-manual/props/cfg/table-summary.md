---
KEY: tableSummary
KIND: config-property
PATH: props/cfg/table-summary
ALIAS: 접근성, 모드에서, 내용의, 요약을, 지정하는
ALIAS_EN: table, summary
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/table-summary
---
# !TableSummary ***(cfg)***

> 웹 접근성 모드에서 `Table`내용의 요약을 지정하는 `Summay`를 설정할 수 있습니다.

> Html Table에 `summary`태그를 추가합니다.

> 해당 옵션 사용시 각 `Section`에 대한 안내도 같이 추가 됩니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|TableSummary|`Summary`을 설정할 문자열|


### Example
```javascript
options.Cfg = {
  TableSummary: "고객의 이름, 전화번호, 주소 등의 정보를 담은 시트이다."      // 웹 접근성 모드 사용
};
```

### Read More
- [Accessibility cfg](/docs/props/cfg/accessibility)
- [TableCaption cfg](/docs/props/cfg/table-caption)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
