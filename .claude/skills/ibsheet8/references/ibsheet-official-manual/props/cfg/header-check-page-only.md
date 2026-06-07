---
KEY: headerCheckPageOnly
KIND: config-property
PATH: props/cfg/header-check-page-only
ALIAS: 에서, 옵션을, 사용하여, 전체, 체크를
ALIAS_EN: header, check, page, only, all, total
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/header-check-page-only
---
# HeaderCheckPageOnly ***(cfg)***

> `(Cfg) SearchMode: 1`에서 `(Cfg) HeaderCheck` 옵션을 사용하여 전체 체크를 할 때, 전체 페이지를 체크하지 않고 현재 보여지는 페이지만 체크합니다. 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
| `0` | 전체 체크 버튼 클릭시 전체 페이지를 체크 (`default`)|
| `1` | 전체 체크 버튼 클릭시 현재 보여지는 페이지만 체크 |

### Example
```javascript
options = {
    Cfg :{
        HeaderCheckPageOnly: 1, // `(Cfg) SearchMode: 1`에서 `(Cfg) HeaderCheck` 옵션을 사용하여 전체 체크를 할 때, 전체 페이지를 체크하지 않고 현재 보여지는 페이지만 체크합니다.
        ...
    }
};
```

### Read More
- [HeaderCheck col](/docs/props/col/header-check)
- [HeaderCheckMode cfg](./header-check-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.26|기능 추가|
