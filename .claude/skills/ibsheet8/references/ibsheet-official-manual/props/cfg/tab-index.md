---
KEY: tabIndex
KIND: config-property
PATH: props/cfg/tab-index
ALIAS: 설정된, 경우, 시트의, 순서의, 위치를
ALIAS_EN: tab, index
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/tab-index
---
# TabIndex ***(cfg)***

> `TabStop` 이 설정된 경우 시트의 탭 순서의 위치를 명시하기 위해 `Tabindex`를 설정할 수 있습니다. 

>


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|`TabIndex` 설정한 값|


### Example
```javascript
options.Cfg = {
  TabIndex: 5,         // 시트가 5번째 tabindex 를 갖도록 설정
};
```

### Read More
- [TabStop cfg](./tab-stop)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
