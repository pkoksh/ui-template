---
KEY: filterIgnoreEmpty
KIND: config-property
PATH: props/cfg/filter-ignore-empty
ALIAS: 필터, 연산자에, 의해, 값을, 가지는
ALIAS_EN: filter, ignore, empty
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/filter-ignore-empty
---
# FilterIgnoreEmpty ***(cfg)***

> 필터 연산자에 의해 빈 값을 가지는 셀이 무시될지 여부를 설정합니다.

> 이 설정은 빈 문자열 찾거나 비교할 때는 적용되지 않습니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|사용하지 않음 (`default`)|
|`1`|[Type](/docs/appx/type)이 `Int`나 `Float`일 때, <, <=, >, >= 중 한 가지 연산자로 필터링 수행시 빈 값을 보여주지 않습니다.|
|`4`|[Type](/docs/appx/type)이 `Text`나 `Lines`일 때, 포함하지 않음, 시작하지 않음, 끝나지 않음 연산자 중 한 가지 연산자로 필터링 수행시 빈 문자열을 가진 셀을 보여주지 않습니다.|
|`8`|[Type](/docs/appx/type)이 `Int`나 `Float` 일 때 같지 않음 연산자로 필터링 수행시 빈 값을 보여주지 않습니다. |
|`16`|[Type](/docs/appx/type)이 `Text`나 `Lines`일 때, 같지 않음 연산자로 필터링 수행시 빈 문자열을 가진 셀을 보여주지 않습니다. |


### Example
```javascript
options = {
    Cfg :{
      FilterIgnoreEmpty: 8,  // Type이 `Int`나 `Float`일 때 같지 않음 연산자로 필터링 수행시 빈 값을 보여주지 않습니다.
    }
};
```

### Read More
[Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
