### modular-scale()

Returns the `modular scale` of a number for a given step of ratio.  

#### Signature

`modular-scale( base, step [, ratio ] )`

* `base`: number base to scale.
* `step`: step to scale.
* `ratio`: the ratio to use. *Optional*. Default: `me-perfect-fifth`.

##### Ratios

For the `ratio` parameter, you can give any number, or use one of the following global variables:

* `me-golden`: 1.618
* `me-minor-second`: 1.067
* `me-major-second`: 1.125
* `me-minor-third`: 1.2
* `me-major-third`: 1.25
* `me-perfect-fourth`: 1.333
* `me-augmented-fourth`: 1.414
* `me-perfect-fifth`: 1.5
* `me-minor-sixth`: 1.6
* `me-major-sixth`: 1.667
* `me-minor-seventh`: 1.778
* `me-major-seventh`: 1.875
* `me-octave`: 2
* `me-major-tenth`: 2.5
* `me-major-eleventh`: 2.667
* `me-major-twelfth`: 3
* `me-double-octave`: 4

#### Example

##### Usage

```stylus
div
    font-size: modular-scale( 16px, 1, 1.5 )

div
    font-size: modular-scale( 16px, 2, 1.618 )

div
    font-size: modular-scale( 16px, -2, me-octave )

div
    font-size: modular-scale( 1em, 2, 1.5 )
```

##### Result

```css
div {
  font-size: 24px;
}

div {
  font-size: 41.886784px;
}

div {
  font-size: 4px;
}

div {
  font-size: 2.25em;
}
```
