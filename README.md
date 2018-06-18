# react-clipboard-icon

> is an svg icon from [clipboard.js] site assets, packaged as a [React] stateless component

[Installation](#installation) |
[Usage](#usage) |
[Development](#development) |
[License](#license)

All credits go to [@zenorocha].

<img width="80" height="80" alt="clippy" src="https://clipboardjs.com/assets/images/clippy.svg" />

## Installation

[React] is required as a peer dependency. With [npm] do

```bash
npm install react
npm install react-clipboard-icon
```

## Usage

[![Edit](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/70L6pkmj)

All props are optional:

* `onClick` {Function} : see [this CodePen](https://codepen.io/fibo/pen/wWKGNK) for an example of *Clipboard.js + React*.
* `size` {Number} defaults to `24`.
* `style` {Object}.
* `title` {String} text visible on mouseover.

```javascript
import React from 'react'
import ClipboardIcon from 'react-clipboard-icon'

const style = { fill: 'red' }

const MyComponent = () => (
  <div>
    <ClipboardIcon
      size={40}
      style={style}
    />
  </div>
)

export default MyComponent
```

## Development

Transpile with `npm run build`.

Lint code with `npm run lint`.

Deploy with `npm version major|minor|patch`.

## License

[MIT](http://g14n.info/mit-license)

[clipboard.js]: https://clipboardjs.com/ "clipboard.js"
[npm]: https://npmjs.org "npm"
[React]: https://facebook.github.io/react/ "React"
[@zenorocha]: https://github.com/zenorocha "Zeno Rocha"
