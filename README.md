# react-clipboard-icon

> is an svg icon from [clipboard.js] site assets, packaged as a React stateless component

[Installation](#installation) |
[Usage](#usage) |
[License](#license)

All credits go to [@zenorocha][zenorocha].

<img width="80" height="80" alt="clippy" src="https://clipboardjs.com/assets/images/clippy.svg" />

## Installation

With [npm](https://npmjs.org/) do

```bash
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

## License

[MIT](http://g14n.info/mit-license)

[clipboard.js]: https://clipboardjs.com/ "clipboard.js"
[zenorocha]: https://github.com/zenorocha "Zeno Rocha"
