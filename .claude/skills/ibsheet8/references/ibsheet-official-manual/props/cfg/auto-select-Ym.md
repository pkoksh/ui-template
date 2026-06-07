---
KEY: autoSelect-Ym
KIND: config-property
PATH: props/cfg/auto-select-Ym
ALIAS: 년월, 달력일, 경우, 설정, 달력에
ALIAS_EN: auto, select-, ym, config, setting, option
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/auto-select-Ym
---
# AutoSelectYm ***(cfg)***
> 년월 달력일 경우, `AutoSelectYm`을 `1`로 설정 시, 년월 달력에 확인버튼은 사라지고 월 클릭으로 값을 입력 할 수 있다.

> `AutoSelectYm`을 `2`로 설정 시, 확인버튼이 사라지지 않고 월 클릭으로 값을 입력 할 수 있다.

###
[`AutoSelectYm: 0 또는 2` 설정시] 

![다운로드](/assets/imgs/autoselectNon.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 다운로드 --> 

[`AutoSelectYm: 1` 설정시] 

![다운로드](/assets/imgs/AutoSelectYm.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 다운로드 --> 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|확인버튼으로 값을 입력 할 수 있음. (`default`)|
|`1`|확인버튼이 사라지고 월 클릭으로 값을 입력 할 수 있음. |
|`2`|확인버튼이 있으며, 월 클릭으로 값을 입력 할 수 있음. |

### Example
```javascript
options.Cfg = {
   // 확인버튼 사라지고 월 클릭으로 값 입력
   "AutoSelectYm": 1
};
```

### Read More
- [CalendarButtons col](/docs/props/col/calendar-buttons)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|기능 추가|
|core|8.0.0.19|2 동작 추가|
