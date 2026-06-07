---
KEY: size
KIND: config-property
PATH: props/cfg/size
ALIAS: 행의, 최소, 높이, 아이콘, 크기를
ALIAS_EN: size, height, icon
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/size
---
# Size ***(cfg)***

> 각 행의 최소 높이 및 아이콘 크기를 설정합니다.

> 시트 생성시 기본적인 행의 높이는 `30px` 이며 이보다 줄이려면 `Size` 속성으로 통해 더 작은 디자인을 설정해야 합니다. 

> 아래의 행 높이는 최소 높이일 뿐 이보다 늘리는 것은 가능합니다. 



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Tiny`|최소 행 높이 `20px`|
|`Small`|최소 행 높이 `22px`|
|`Low`|최소 행 높이 `27px`|
|`Normal`|최소 행 높이 `30px` (`default`)|
|`High`|최소 행 높이 `42px`|
|`Big`|최소 행 높이 `52px`|


### Example
```javascript
options = {
    Cfg:{
      Size: "Small",  //기본보다 작게 설정
    },
    Def:{
      Row:{
        Height: 25  //원래 설정(22px)보다 약간 늘림
      }
    }
};
```

### Try it
- ["Normal" by default with setSize](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/Size/)

### Read More
- [Height row](/docs/props/row/height)
- [setSize](/docs/funcs/core/set-size)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.1|기능 추가|
