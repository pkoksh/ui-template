---
KEY: useButton
KIND: config-property
PATH: props/cfg/use-button
ALIAS: 이고, 속성값이, 경우, 안에, 버튼이
ALIAS_EN: use, button
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/use-button
---
# UseButton ***(cfg)***

> [Type](/docs/appx/type)이 `Button`이고, [Button](/docs/props/col/button)의 속성값이 `Button`인 경우, 셀 안에 버튼이 생성됩니다.

> 그런데 이 생성되는 버튼은 \<u\>태그를 이용하게 되는데 이를 \<button\>를 사용할지 여부를 선택합니다.


###
![u태그 버튼](/assets/imgs/useButton0.png "u태그")
<!-- IMAGE: 버튼 이미지 - u태그 버튼 -->

[`u태그`를 사용한 버튼]


![button태그 버튼](/assets/imgs/useButton1.png "button태그")
<!-- IMAGE: 버튼 이미지 - button태그 버튼 -->

[`button태그`를 사용한 버튼]


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|\<u\>태그를 통해 버튼 생성 (`default`)|
|`1`|\<button\>태그를 통해 버튼 생성|


### Example
```javascript
options.Cfg = {
   "UseButton": 1       // <button>태그를 사용하여 버튼 생성
};
```

### Read More
- [Button col](/docs/props/col/button)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
