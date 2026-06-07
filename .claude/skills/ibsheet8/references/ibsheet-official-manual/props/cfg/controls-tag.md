---
KEY: controlsTag
KIND: config-property
PATH: props/cfg/controls-tag
ALIAS: 시트, 팝업, 메뉴, 툴팁, 메시지
ALIAS_EN: controls, tag, sheet, grid, message, alert
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/controls-tag
---
# ControlsTag ***(cfg)***

> 시트 내 팝업 메뉴, 툴팁, 메시지, 힌트를 띄울 위치를 설정하기 위한 부모 태그를 지정하는 옵션입니다. 

>
> 해당 옵션을 설정하지 않을 경우 부모 태그는 `document.body` 내부에 자동적으로 생성됩니다. 

>
> SalesForce의 Lightening Web Component나 ShadowDOM 환경처럼 `document.body` 전체를 시트의 기준 영역으로 설정하지 않고 페이지 내 특정 컴포넌트 영역을 시트 기준 영역으로 잡아야 할 경우, 해당 컴포넌트 내에 별도로 div를 만들어 해당 div를 `(Cfg) ControlsTag`로 설정해야 합니다. 

>
> 주의사항
> * `ControlsTag`는 시트를 처음 생성할 때 설정해야 하며, 이후에는 동적으로 변경할 수 없습니다. 

> * `ControlsTag`는 반드시 시트의 DIV와 동일한 컴포넌트 영역에 있어야 하며, 시트의 DIV가 생성되는 컴포넌트보다 상위 컴포넌트에 생성되어서는 안됩니다.
> * `ControlsTag`는 반드시 `position:absolute;left:0px;top:0px;` 스타일이 적용되어 생성되어야 합니다.

### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`object`|시트 내 팝업 메뉴, 툴팁, 메시지, 힌트를 띄울 위치를 설정하기 위한 부모 태그|

### Example
```javascript

<template>
  <lightning-card>
    <div>
      <div class="IBControls" style="position:absolute;left:0px;top:0px;"  lwc:dom="manual"></div> <!-- LWC 환경의 컴포넌트 내부에서 ControlsTag 역할을 맡을 태그를 생성 -->
      <div class="sheetDiv" style="width: 100%; height: 400px;" lwc:dom="manual"></div>
    </div>
  </lightning-card>
</template>

...

options.Cfg = {
   ControlsTag: this.template.querySelector(".IBControls") // 시트 내 팝업 메뉴, 툴팁, 메시지, 힌트를 띄울 위치를 설정하기 위한 부모 태그 설정
};
```

### Read More
- [DialogsArea cfg](/docs/props/cfg/dialogs-area)
- [IBSheet.QuerySelector static](/docs/static/query-selector)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.0|기능 추가|
