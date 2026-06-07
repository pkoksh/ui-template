---
KEY: excludeMode
KIND: config-property
PATH: props/cfg/exclude-mode
ALIAS: 사용시, 동작을, 정의합니다, 비트, 연산으로
ALIAS_EN: exclude, mode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/exclude-mode
---
# ExcludeMode ***(cfg)***
> `Ctrl + x` 사용시 동작을 정의합니다. 비트 연산으로 동작합니다.
> 기본 동작은 **데이터 복사 + 행 Deleted:1 추가 (`Value:3`)** 입니다.
> `Value:1`을 설정하지 않을 경우 데이터가 복사되지 않으므로 설정을 권장합니다.

### Type
`number`
### Options
|Value|Description|
|-----|-----|
| `1` | 데이터 클립보드 복사 |
| `2` | 행 상태 `Deleted:1` 변경|
| `4` | 셀 데이터 삭제 |

### Examples
```js
options = {
  Cfg:{
    ExcludeMode: 5   // 데이터 복사 및 셀 데이터 삭제
  }
};
```

### Read More
- [Deleted row](../../props/row/deleted)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.22|기능 추가|
