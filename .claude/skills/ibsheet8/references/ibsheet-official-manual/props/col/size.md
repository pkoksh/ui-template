---
KEY: size
KIND: column-property
PATH: props/col/size
ALIAS: 열에, 입력가능한, 글자수를, 설정합니다
ALIAS_EN: size
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/size
---
# Size ***(col)***
> 열에 입력가능한 글자수를 설정합니다. 

> [cfg.UnicodeByteMode](/docs/props/cfg/unicode-byte-mode)를 설정할 경우 한글의 바이트 수를 계산하여 입력을 제한합니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|입력가능한 글자수|


### Example
```javascript
//CarName열에 최대 10글자까지 입력가능
options.Cols = [
    ...
    {Type: "Text", Size: 10, Name: "CarName", Width: 120 ...},
    ...
];
```


### Read More
- [Size cell](/docs/props/cell/size)
- [SizeIgnoreDecimalSep col](/docs/props/col/size-ignore-decimal-sep)
- [UnicodeByteMode cfg](/docs/props/cfg/unicode-byte-mode)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
