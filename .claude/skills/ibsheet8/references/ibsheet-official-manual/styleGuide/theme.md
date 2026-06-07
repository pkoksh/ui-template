---
KEY: theme
KIND: style-guide
PATH: styleGuide/theme
ALIAS: 테마, 적용
ALIAS_EN: theme
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/styleGuide/theme
---
# 테마 적용

## 기본 테마 종류
현재 배포되고 있는 테마는 다음과 같습니다.

`기본`, `기본(이미지)`, `grace`, `material`, `mint`, `simple`, `gray`

이 중 기본(이미지) 테마에서만 이미지를 png, gif파일로 제공합니다. 그 외의 테마는 base64로 인코딩된 svg파일로 이미지를 제공합니다.

테마명 옆의 ()안에는 테마의 Prefix명입니다.

`ibsheet.js`파일의 경로를 `/assets/ibsheet/`로 가정하고 설명하겠습니다.

기본 테마 (`IB`)
```html
<link rel="stylesheet" href="/assets/ibsheet/css/default/main.css"/>
```

![default theme](/assets/imgs/styleguide_css_default_theme.png "default theme")
<!-- IMAGE: 스크린샷/예시 이미지 - default theme -->

기본(이미지) 테마 (`IB`)
```html
<link rel="stylesheet" href="/assets/ibsheet/css/default_img/main.css"/>
```

![default theme](/assets/imgs/styleguide_css_default_theme.png "default theme")
<!-- IMAGE: 스크린샷/예시 이미지 - default theme -->

grace 테마 (`IBGR`)
```html
<link rel="stylesheet" href="/assets/ibsheet/css/grace/main.css"/>
```

![grace theme](/assets/imgs/styleguide_css_grace_theme.png "grace theme")
<!-- IMAGE: 스크린샷/예시 이미지 - grace theme -->

material 테마 (`IBTR`)
```html
<link rel="stylesheet" href="/assets/ibsheet/css/material/main.css"/>
```

![material theme](/assets/imgs/styleguide_css_material_theme.png "material theme")
<!-- IMAGE: 스크린샷/예시 이미지 - material theme -->

mint 테마 (`IBMT`)
```html
<link rel="stylesheet" href="/assets/ibsheet/css/mint/main.css"/>
```

![mint theme](/assets/imgs/styleguide_css_mint_theme.png "mint theme")
<!-- IMAGE: 스크린샷/예시 이미지 - mint theme -->

simple 테마 (`IBSP`)
```html
<link rel="stylesheet" href="/assets/ibsheet/css/simple/main.css"/>
```

![simple theme](/assets/imgs/styleguide_css_simple_theme.png "simple theme")
<!-- IMAGE: 스크린샷/예시 이미지 - simple theme -->

gray 테마 (`IBGY`)
```html
<link rel="stylesheet" href="/assets/ibsheet/css/gray/main.css"/>
```

![gray theme](/assets/imgs/styleguide_css_gray_theme.png "gray theme")
<!-- IMAGE: 스크린샷/예시 이미지 - gray theme -->

* * *

## 테마 적용 방법
테마의 Prefix명은 [Style cfg](/docs/props/cfg/style)에서 설정하거나, [setTheme func](/docs/funcs/core/set-theme)에서 변경할 테마의 prefix파라미터에서 사용됩니다.

[Style cfg](/docs/props/cfg/style)로 사용하시는 경우, 앞서 사용하실 테마에 맞는 css파일을 먼저 호출하셔야 합니다.

[setTheme func](/docs/funcs/core/set-theme)로 테마를 적용하시는 경우, 테마의 prefix명과 테마의 css파일의 경로가 파라미터로 사용됩니다.