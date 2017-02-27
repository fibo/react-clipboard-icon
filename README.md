# react-clipboard-icon

> is an svg icon from [clipboard.js] site assets, packaged as a [React] stateless component

[Installation](#installation) |
[Usage](#usage) |
[Development](#development) |
[License](#license)

All credits go to [@zenorocha][zenorocha].

<img width="80" height="80" alt="clippy" src="https://clipboardjs.com/assets/images/clippy.svg" />

## Installation

[React] is required as a peer dependency. With [npm] do

```bash
npm install react
npm install react-clipboard-icon
```

## Usage

Import *react-clipboard-icon* in your React component.
Props `style` and `size` are optional.

```javascript
import React from 'react'
import ClipboardIcon from 'react-clipboard-icon'

const MyComponent = () => (
  <div>
    <ClipboardIcon
      size={40}
      style={{ fill: 'red' }}
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
[React]: https://facebook.github.io/react/ "React"
[zenorocha]: https://github.com/zenorocha "Zeno Rocha"
