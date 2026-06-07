---
KEY: defaultImage
KIND: column-property
PATH: props/col/default-image
ALIAS: 컬럼에서, 이미지를, 로드할때, 서버에, 이미지가
ALIAS_EN: default, image
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/default-image
---
# DefaultImage ***(col)***
> [Type](/docs/appx/type)이 `Img` 인 컬럼에서 이미지를 로드할때 서버에 이미지가 없는 경우 대체할 이미지를 설정합니다.


> **<mark>주의</mark> : Img 데이터에 Left, Top이 설정된 경우엔 DefaultImage가 적용되지 않습니다**


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|이미지 로드 실패시 대체할 이미지의 url|

### Example
```javascript
options.Cols = [
    ...
    // 대체 이미지 경로를 설정한다.
    {
       Header: "이미지",
       Type: "Img",
       Name: "sImgData",
       Width: 120,
       DefaultImage: "./image/defaultImage.png",
       ...
    },
];
```

### Read More
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.18|기능 추가|
