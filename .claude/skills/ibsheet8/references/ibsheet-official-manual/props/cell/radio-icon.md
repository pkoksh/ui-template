---
KEY: radioIcon
KIND: cell-property
PATH: props/cell/radio-icon
ALIAS: 셀에서, 아이콘을, 다른, 이미지나, 객체로
ALIAS_EN: radio, icon
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/radio-icon
---
# RadioIcon ***(cell)***
> [Type](/docs/appx/type)이 `Radio`인 셀에서 `Radio` 아이콘을 다른 이미지나 Html 객체로 설정합니다.

> 임의의 이미지를 라디오 아이콘으로 사용하고자 하는 경우에는, 언체크 이미지와 체크 이미지를 첫글자를 구분자로 하여 연결된 문자열로 설정하시면 됩니다.
(ex:"|OFF.gif|ON.gif")
>
> 임의의 이미지를 체크박스 아이콘으로 사용할 때, 해당 열내의 셀이 편집불가([CanEdit](./can-edit))인 경우가 있다면 편집 불가일때의 이미지까지해서 총 4개의 이미지를 설정하시면 됩니다.
(ex:"|Off.gif|On.gif|OffReadOnly.gif|OnReadOnly.gif")
>
> 여러개의 라디오 아이콘을 사용하고자 하는 경우에는 언체크 이미지와 체크이미지를 이어서 설정하시면 됩니다.
(ex:"|Off1.gif|On1.gif|Off2.gif|On2.gif|Off3.gif|On3.gif")
>
> 그 외에 일반적인 숫자형식으로 아래 Options에서와 같이 기능을 설정하실 수 있습니다.
### Type
`mixed`(`string` \| `number` )

### Options
**숫자형식을 사용하는 경우**

|Value|Description|
|-----|-----|
|`0`|기본적인 내장 라디오아이콘 이미지를 사용/ [Range](/docs/props/col/range)속성을 사용하는 경우 내장 체크박스아이콘 이미지를 사용(`default`)
|`1`|내장 라디오 아이콘 이미지를 사용|
|`2`|내장 체크박스 아이콘 이미지를 사용|
|`3`|\<input type="radio">객체를 사용 / [Range](/docs/props/col/range)속성을 사용하는 경우 \<input type="checkbox">객체를 사용|
|`4`|\<input type="radio">객체를 사용|
|`5`|\<input type="checkbox">객체를 사용|
|`6`|아이콘을 표시하지 않음|
***input 객체를 사용하는 경우 그렇지 않은 경우보다 성능이 느릴 수 있습니다.***



### Example
```javascript
//라디오 아이콘 대신 체크박스 아이콘을 사용 (열이름: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "RadioIcon", "2");


//객체에 직접 접근해서 속성 적용 (열이름: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSRadioIcon"] = "2";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름: CLS)
{
    data:[
        {... , "CLSRadioIcon":"2" , ...}
    ]
}
```

### Read More

- [RadioIconWidth cell](./radio-icon-width)
- [RadioUncheck cell](./radio-uncheck)
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
