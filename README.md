# react-clipboard-icon

> is an svg icon from [clipboard.js] site assets, packaged as a React stateless component

All credits goes to [@zenorocha][zenorocha].

## Usage

Import *react-clipboard-icon* in your React component.

```javascript
import React from 'react'
import ClipboardIcon from 'react-clipboard-icon'

// Props style and size are optional.
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

## Clippy

![clippy icon][clippy_svg]

[clippy_svg]: https://clipboardjs.com/assets/images/clippy.svg "clippy"
[clipboard.js]: https://clipboardjs.com/ "clipboard.js"
[zenorocha]: https://github.com/zenorocha "Zeno Rocha"
