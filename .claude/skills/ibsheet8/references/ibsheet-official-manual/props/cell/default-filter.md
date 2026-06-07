---
KEY: defaultFilter
KIND: cell-property
PATH: props/cell/default-filter
ALIAS: 필터행, 셀에만, 사용할, 있는, 기능으로
ALIAS_EN: default, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/default-filter
---
# !DefaultFilter ***(cell)***

> 필터행 셀에만 사용할 수 있는 기능으로 필터시 동작하는 operator의 default를 변경할 수 있습니다.

> `Text`, `Lines`, `Img`, `Link` 타입은 기본값이 `11`이며 그 외의 타입은 `1`입니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|기본으로 사용할 operator의 값|


**operators 상세설명**

|value|type|desc|
|---|---|---|
|`0`|공통|필터를 사용하지 않음|
|`1`|숫자|같다|
|`2`|숫자|같지않다|
|`3`|숫자|작다|
|`4`|숫자|작거나 같다|
|`5`|숫자|크다|
|`6`|숫자|크거나 같다|
|`7`|문자|앞글자 일치|
|`8`|문자|앞글자가 일치하지 않음|
|`9`|문자|뒷글자 일치|
|`10`|문자|뒷글자 일지하지 않음|
|`11`|문자|해당 글자 포함|
|`12`|문자|해당 글자 포함하지 않음|

### Example
```javascript
{
    Filter: {
        DELIVERYDEPTNAME: {
            Button: 'Defaults',
            Defaults: '|*Rows',
            DefaultFilter: 1 // default 값 변경
        },
    }
}
```

### Read More

- [Solid appendix](/docs/appx/solid)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
