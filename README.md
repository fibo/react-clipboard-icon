# react-clipboard-icon

> is an svg icon from [clipboard.js] site assets, packaged as a [React] stateless component

[Installation](#installation) |
[Usage](#usage) |
[Development](#development) |
[License](#license)

All credits go to [@zenorocha][zenorocha].

<img width="80" height="80" alt="clippy" src="https://clipboardjs.com/assets/images/clippy.svg" />

## Installation

[React] and [prop-types] are required as peer dependencies. With [npm] do

```bash
npm install react prop-types
npm install react-clipboard-icon
```

## Usage

[![Edit](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/70L6pkmj)

Import *react-clipboard-icon* in your React component.
Props `style` and `size` are optional.

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

Transpile with

```bash
npm run build
```

Lint code with

```bash
npm run lint
```

Deploy with

```bash
npm version major|minor|patch
```

## License

[MIT](http://g14n.info/mit-license)

[clipboard.js]: https://clipboardjs.com/ "clipboard.js"
[npm]: https://npmjs.org "npm"
[prop-types]: https://github.com/facebook/prop-types "prop-types"
[React]: https://facebook.github.io/react/ "React"
[zenorocha]: https://github.com/zenorocha "Zeno Rocha"
