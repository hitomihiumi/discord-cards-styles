# discord-cards-styles
Styles storage location for [`@hitomihiumi/discord-cards`](https://www.npmjs.com/package/@hitomihiumi/discord-cards)

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

## Markers

Markers are used to replace the data in the style. Here is a list of markers that can be used in the styles:

<table>
    <tr>
        <th>Marker</th>
        <th>Description</th>
        <th>Usage</th>
        <th>Data type</th>
    </tr>
    <tr>
        <td>#{name}#</td>
        <td>The name of user</td>
        <td>Everywhere</td>
        <td>string</td>
    </tr>
    <tr>
        <td>#{avatar}#</td>
        <td>The avatar of user</td>
        <td>Everywhere</td>
        <td>string</td>
    </tr>
    <tr>
        <td>#{background}#</td>
        <td>The background of card</td>
        <td>Everywhere</td>
        <td>string</td>
    </tr>
    <tr>
        <td>#{decorationColor}#</td>
        <td>The color of decoration</td>
        <td>Everywhere</td>
        <td>string, Gradient* or Pattern*</td>
    </tr>
    <tr>
        <td>#{borderColor}#</td>
        <td>The color of border</td>
        <td>Everywhere</td>
        <td>string, Gradient* or Pattern*</td>
    </tr>
    <tr>
        <td>#{level}#</td>
        <td>The level of user</td>
        <td>Profile, Rank</td>
        <td>number</td>
    </tr>
    <tr>
        <td>#{nextLevel}#</td>
        <td>The next level of user</td>
        <td>Profile, Rank</td>
        <td>number</td>
    </tr>
    <tr>
        <td>#{totalLevels}#</td>
        <td>The total levels of user</td>
        <td>-</td>
        <td>number</td>
    </tr>
    <tr>
        <td>#{levelFontSize}#</td>
        <td>The font size of level</td>
        <td>Profile, Rank</td>
        <td>number</td>
    </tr>
    <tr>
        <td>#{xp}#</td>
        <td>The current xp of user</td>
        <td>Profile, Rank</td>
        <td>number</td>
    </tr>
    <tr>
        <td>#{neededXp}#</td>
        <td>The needed xp for next level</td>
        <td>Profile, Rank</td>
        <td>number</td>
    </tr>
    <tr>
        <td>#{totalXp}#</td>
        <td>The total xp of user</td>
        <td>Profile, Rank</td>
        <td>number</td>
    </tr>
    <tr>
        <td>#{progressColor}#</td>
        <td>The color of progress bar</td>
        <td>Profile, Rank</td>
        <td>string, Gradient* or Pattern*</td>
    </tr>
    <tr>
        <td>#{textColor}#</td>
        <td>The color of text</td>
        <td>Profile, Rank</td>
        <td>string, Gradient* or Pattern*</td>
    </tr>
    <tr>
        <td>#{position}#</td>
        <td>The position of user in the leaderboard</td>
        <td>Profile, Rank</td>
        <td>number</td>
    </tr>
    <tr>
        <td>#{biography}#</td>
        <td>The biography of user</td>
        <td>Profile</td>
        <td>string</td>
    </tr>
</table>

*[Gradient](https://github.com/hitomihiumi/lazy-canvas/blob/main/docs/gradient.md)
*[Pattern](https://github.com/hitomihiumi/lazy-canvas/blob/main/docs/pattern.md)

## Afterword

`((#{xp}# / #{neededXp}#) * 365)` - this formula is used to calculate the width of the progress bar. The value `365` is the width of the progress bar in the base style. You can change it to any value you want.