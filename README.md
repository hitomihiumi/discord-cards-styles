# discord-cards-styles
Styles storage location for @hitomihiumi/discord-cards

## How to

To load your own styles, create a pull-request. Make sure your style will be in a separate JS file like this one. Templates for creating your own styles are given below:

#### Profile Template
```js
module.exports = ProfileData = {
    name: "yourStyleName",
    version: "1.0.0",
    author: "yourUsername",
    fontURL: "none",
    data: {} // LazyCanvas data
}
``` 

#### Rank Template
```js
module.exports = RankData = {
    name: "yourStyleName",
    version: "1.0.0",
    author: "yourUsername",
    fontURL: "none",
    data: {} // LazyCanvas data
}
```

LazyCanvas data can be obtained by using the `getData()` function from the [`LazyCanvas`](https://github.com/hitomihiumi/lazy-canvas/blob/main/docs/lazycanvas.md) class. You can find the LazyCanvas class in the [lazy-canvas](https://github.com/hitomihiumi/lazy-canvas) repository.