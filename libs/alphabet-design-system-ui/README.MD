<p align="right"><img src="https://www.alphabet.com/themes/custom/ivory/images/logo-alphabet.svg" width="180"></p>

# Alphabet Design System

This project contains the Alphabet Design System files that are built with web-technologies (HTML, JS & SCSS; Angular).

#### Importing Alphabet design system

```
import ADSUiModule from '@ads/ui'
```

#### Including SCSS files

include the following line in the styles.scss of your app

```
@use "@ads/ui/scss/ads-styles" as adsStyles;
```

#### Theming

include the following line in the styles.scss of your app

```
@use "@ads/ui/scss/theming/_alphabet.default.theme" as adsDefaultTheme;
```

---

or include the files in your angular/project json

```
"targets": {
    "build": {
        "styles": [
            "@ads/ui/scss/ads-styles.scss",
            {
                "input": "@ads/ui/scss/themes/_alphabet.default.theme.scss",
                "bundleName": "default-theme",
                "inject": true
            },
        ]
    }
}
```
