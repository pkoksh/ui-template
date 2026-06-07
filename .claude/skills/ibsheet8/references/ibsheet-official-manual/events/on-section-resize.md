---
KEY: onSectionResize
KIND: event
PATH: events/on-section-resize
ALIAS: 좌우측, 섹션의, 크기를, 변경하는, 경우
ALIAS_EN: on, section, resize
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-section-resize
---
# onSectionResize ***(event)***
> 좌우측 섹션의 크기를 변경하는 경우 발생합니다.

> cfg [SectionCanResize](/docs/props/cfg/section-can-resize)속성 설정시 사용자가 좌우측 영역의 크기를 변경할 수 있는데, 이렇게 크기가 변경되기 직전에 발생합니다.
>


### Syntax

```
    onSectionResize : function(paramObject {

    }
or
    sheet.bind("onSectionResize" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|서버에 변경된 내용을 전송한 시트 객체|
|section |`number`|왼쪽, 오른쪽 변경된 섹션
`0`:왼쪽 섹션 크기 변경시
`2`:오른쪽 섹션 크기 변경시|

### Return
***none***


### Example
```javascript
options.Events = {
    onSectionResize:function(evtParam){
        //왼쪽 section 크기 변경시 가로스크롤바를 이동
        if(evtParam.section==0){
           sheet.setScrollLeft(0 , 1);
        }
    }
}
```

### Read More

- [SectionCanResize cfg](/docs/props/cfg/section-can-resize)
- [LeftCanResize cfg](/docs/props/cfg/Left-can-resize)
- [RightCanResize cfg](/docs/props/cfg/right-can-resize)
- [LeftWidth cfg](/docs/props/cfg/left-width)
- [RightWidth cfg](/docs/props/cfg/right-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
