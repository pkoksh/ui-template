---
KEY: maxVScroll
KIND: config-property
PATH: props/cfg/max-v-scroll
ALIAS: 사용하면서, 해당, 높이부터는, 스크롤을, 만들고
ALIAS_EN: max, scroll
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/max-v-scroll
---
# MaxVScroll ***(cfg)***

> `NoVScroll` 을 사용하면서 해당 높이부터는 스크롤을 만들고 싶은 경우, 사용하는 기능으로써 해당 기능을 사용하면 스크롤이 생기는 높이를 지정할 수 있습니다. 

>
> `주의` 해당 옵션은 시트 생성 시 시트가 생성된 Dom el의 높이를 변경하기 때문에 생성 이후 해당 옵션을 변경할 경우, 시트가 그려진 요소의 높이를 다시 설정해야 합니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|스크롤이 생기는 최대 높이|

### Example
```javascript
options = {
    Cfg:{
      NoVScroll: 1,
      MaxVScroll: 500
    }
 };
```

### Read More
- [NoVScroll cfg](./no-v-scroll)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.23|기능 추가|
