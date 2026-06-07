---
KEY: msgLocale
KIND: config-property
PATH: props/cfg/msg-locale
ALIAS: 시트에서, 사용할, 언어, 메세지, 파일
ALIAS_EN: msg, locale
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/msg-locale
---
# MsgLocale ***(cfg)***

> 시트에서 사용할 언어(메세지 파일) Language Prefix를 설정합니다.

> 

> 제품과 함께 배포되는 메세지 파일(ko.js,en.js등)안에 메세지 구조는 다음과 같습니다.

```js
IBSMSG.[Language Prefix] = {
  "Lang": {
     // ... 중략 ...
  }
}
```
> 한국어 외에 다른 나라 언어(메세지)를 사용하고자 하실 때는 해당 메세지 파일(js)를 import 하고, 그에 대한 Language Prefix값을 이 속성으로 설정하시면 됩니다.

> <mark>**만약 이 속성을 설정하지 않은 경우에는 사용자 브라우저의 언어(navigator.language)을 확인하여 해당 값을 Language Prefix로 사용하게 됩니다.**<mark/> 




### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Ko`|한국어 메세지|
|`En`|영어 메세지|
|`Jp`|일본어 메세지|
|`Cn`|중국어 메세지|
|`Etc`|직접 만든 다른 메세지 Prefix 사용 가능|


### Example
```html
<!-- 영문 메세지 import -->
<script src="./common/ibsheet/locale/en.js"></script>
```
```javascript
options.Cfg = {
   "MsgLocale":"En" //영문 메세지 사용
};
```

### Read More
- [getLocale method](/docs/funcs/core/get-locale)
- [setLocale method](/docs/funcs/core/set-locale)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
