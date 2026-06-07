---
KEY: showImage
KIND: config-property
PATH: props/cfg/showImage
ALIAS: 편집이, 가능한, 컬럼에서, 아이콘, 이미지를
ALIAS_EN: show, image, icon
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/showImage
---
# ShowImage ***(cfg)***

> 편집이 가능한 `Enum`컬럼에서 focus시 아이콘 이미지를 표시하는 기능입니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0`|항상 아이콘을 표시 합니다. (`default`)|
|`1`|focus시 `Enum` 컬럼의 아이콘을 표시 합니다.|

### Example
```javascript
options.Cfg = {
    ShowImage: 1              // Enum 컬럼의 아이콘을 focus시에만 표시
};
```

### Read More
- [Enum col](/docs/props/col/enum)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.87|기능 추가|
