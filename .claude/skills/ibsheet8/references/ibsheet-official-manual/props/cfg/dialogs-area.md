---
KEY: dialogsArea
KIND: config-property
PATH: props/cfg/dialogs-area
ALIAS: 시트, 다이얼로그의, 위치를, 설정하기, 위한
ALIAS_EN: dialogs, area, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/dialogs-area
---
# DialogsArea ***(cfg)***

> 시트 내 다이얼로그의 위치를 설정하기 위한 영역을 지정합니다. 

>
> SalesForce의 Lightening Web Component나 ShadowDOM 환경처럼 `document.body` 전체를 다이얼로그의 기준 영역으로 설정하지 않고 페이지 내 특정 컴포넌트 영역을 다이얼로그의 기준 영역으로 잡아야 할 경우, 해당 컴포넌트의 body에 해당하는 영역을 `(Cfg) DialogsArea`로 설정해주시면 됩니다. 

>
> 더불어 `DialogsArea`는 반드시 시트의 DIV와 동일한 컴포넌트 영역에 있어야 하며, 시트의 DIV가 생성되는 컴포넌트보다 상위 컴포넌트에 생성되어서는 안됩니다. 


### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|시트 내 다이얼로그의 위치를 설정하기 위한 영역|

### Example
```javascript

<template>
  <lightning-card> <!-- LWC 컴포넌트에서 Body에 해당하는 영역 -->
    <div>
      <div class="IBControls" lwc:dom="manual"></div>
      <div class="sheetDiv" style="width: 100%; height: 400px;" lwc:dom="manual"></div>
    </div>
  </lightning-card>
</template>

...

options.Cfg = {
   DialogsArea: this.template.firstChild, // lightning-card 태그를 시트 내 다이얼로그의 위치를 설정하기 위한 영역으로 지정
};
```

### Read More
- [ControlsTag cfg](/docs/props/cfg/controls-tag)
- [IBSheet.QuerySelector static](/docs/static/query-selector)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.0|기능 추가|
