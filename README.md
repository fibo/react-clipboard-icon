# react-clipboard-icon

> is an svg icon from [clipboard.js] site assets, packaged as a React stateless component

All credits goes to [@zenorocha][zenorocha].

This is clippy.svg <img width="40" height="40" alt="clippy" src="https://clipboardjs.com/assets/images/clippy.svg" />

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

[clipboard.js]: https://clipboardjs.com/ "clipboard.js"
[zenorocha]: https://github.com/zenorocha "Zeno Rocha"
