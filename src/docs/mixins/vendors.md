### Vendors Prefixes

**ME Bootstrap** comes with automatic vendor prefixer for the following properties.  
You can define the behavior of the prefixer by changing the value of the global variable `me-vendors-prefixes`.

#### Recommended prefixes (by default)

By default, **ME Bootstrap** use the data from [caniuse](http://caniuse.com) website to select the prefixes to use.

You can select which version of browsers you want to support by modifying the following global variables.

    me-support-ie = 9
    me-support-firefox = 30
    me-support-chrome = 30
    me-support-safari = 6
    me-support-opera = 20
    me-support-ios-safari = 6
    me-support-opera-mini = false
    me-support-android-browser = false
    me-support-blackberry-browser = false
    me-support-opera-mobile = false
    me-support-android-chrome = false
    me-support-android-firefox = false
    me-support-ie-mobile = false

You can set a number, which will act as "*greater or equal*" support, a [semver range](https://github.com/isaacs/node-semver#ranges) string, or the `false` value, to be ignored.

If you want to ignore the [caniuse](http://caniuse.com) recommendations, add the features you want to ignore to the `me-support-ignore-features` global variable.

For the properties not registered in [caniuse](http://caniuse.com), the implementation is based on [the list of Peter Beverloo](http://peter.sh/experiments/vendor-prefixed-css-property-overview/).

You can set the following global variable to use the recommended prefixes for the variable.

    me-vendors-prefixes = recommended

The following properties are not registered in [caniuse](http://caniuse.com).

##### Supported properties

The following properties are implemented by the vendor mecanism and will be automaticaly prefixed using [caniuse](http://caniuse.com) data: `align-content`, `align-items`, `align-self`, `animation`, `animation-delay`, `animation-direction`, `animation-duration`, `animation-fill-mode`, `animation-iteration-count`, `animation-name`, `animation-play-state`, `animation-timing-function`, `appearance`, `backface-visibility`, `background-clip`, `background-origin`, `background-size`, `border-image-source`, `border-image-slice`, `border-image-width`, `border-image-outset`, `border-image-repeat`, `border-image`, `box-shadow`, `box-sizing`, `clip-path`, `column-count`, `column-fill`, `column-gap`, `column-rule`, `column-rule-color`, `column-rule-style`, `column-rule-width`, `column-span`, `column-width`, `columns`, `flex`, `flex-basis`, `flex-direction`, `flex-flow`, `flex-grow`, `flex-shrink`, `flex-wrap`, `grid`, `grid-area`, `grid-auto-columns`, `grid-auto-flow`, `grid-auto-position`, `grid-auto-rows`, `grid-column`, `grid-column-end`, `grid-column-start`, `grid-row`, `grid-row-end`, `grid-row-start`, `grid-template`, `grid-template-areas`, `grid-template-columns`, `grid-template-rows`, `hyphens`, `justify-content`, `mask`, `opacity`, `order`, `perspective`, `perspective-origin`, `transform`, `transform-origin`, `transform-style`, `transition`, `transition-delay`, `transition-duration`, `transition-property`, `transition-timing-function`, `user-select`

##### Unregistered properties

The following properties are not registered (yet?) in [caniuse](http://caniuse.com), and use the prefixes as indicated:

* **appearance:** `-webkit` `-moz`

* **backface-visibility:** `-webkit` `-ms`

##### Specific prefixes

If you want specific prefixes, you can force them by setting the global variable `me-vendors-prefixes` with the prefixes you want.  

#### No vendor prefixes

    me-vendors-prefixes = false

If you don't want to let **ME Bootstrap** to add vendor prefixes, and do the job yourself with such plugins like `autoprefixer`, simply set `me-vendors-prefixes` to false.

#### The `vendor` mixin

You can also define your own vendors mixins with the **ME Bootstrap** built-in vendor mixin.

`vendor( property, value [, feature = null [, prefixes = null [, official = true ] ] ] )`

* `property`: the css property to use.
* `value`: the value for the property.
* `feature`: the name of the feature in [caniuse](http://caniuse.com) website, which will automatically set the prefixes.
* `prefixes`: the list of prefixes to use, if `feature` is set to false.
* `official`: a boolean to display the non-prefixed property, if `feature` is set to false.

#### Example

##### Usage

```stylus

button
    hyphens: manual

me-support-ie = 11

button
    hyphens: manual

me-vendors-prefixes = o ms webkit moz

button
    backface-visibility: visible

me-vendors-prefixes = recommended

button
    backface-visibility: visible

me-vendors-prefixes = false

button
    backface-visibility: visible

button
    vendor( "columns", auto auto, feature: "multicolumn" )

button
    vendor( "columns", auto auto, prefixes: webkit moz ms o )

button
    vendor( "columns", auto auto, prefixes: webkit moz ms o, official: false )

me-support-ignore-features = "css3-boxsizing" "css-animation"

button
    animation: none 0s ease 0s 1 normal none
    box-sizing: content-box
```

##### Result

```css
button {
  -webkit-hyphens: manual;
  -moz-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
}
button {
  -webkit-hyphens: manual;
  -moz-hyphens: manual;
  hyphens: manual;
}
button {
  -o-backface-visibility: visible;
  -ms-backface-visibility: visible;
  -webkit-backface-visibility: visible;
  -moz-backface-visibility: visible;
  backface-visibility: visible;
}
button {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
}
button {
  backface-visibility: visible;
}
button {
  -webkit-columns: auto auto;
  -moz-columns: auto auto;
  columns: auto auto;
}
button {
  -webkit-columns: auto auto;
  -moz-columns: auto auto;
  -ms-columns: auto auto;
  -o-columns: auto auto;
  columns: auto auto;
}
button {
  -webkit-columns: auto auto;
  -moz-columns: auto auto;
  -ms-columns: auto auto;
  -o-columns: auto auto;
}
button {
  animation: none 0s ease 0s 1 normal none;
  box-sizing: content-box;
}
```
