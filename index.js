'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Icon from clipboard.js site
// https://clipboardjs.com/assets/images/clippy.svg

var ClipboardIcon = function ClipboardIcon(_ref) {
  var onClick = _ref.onClick,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 24 : _ref$size,
      style = _ref.style,
      title = _ref.title;
  return _react2.default.createElement(
    'svg',
    {
      height: size,
      onClick: onClick,
      role: 'img',
      style: style,
      viewBox: '0 0 1024 896',
      width: size
    },
    title && _react2.default.createElement(
      'title',
      null,
      title
    ),
    _react2.default.createElement('path', {
      d: 'M128 768h256v64H128v-64z m320-384H128v64h320v-64z m128 192V448L384 640l192 192V704h320V576H576z m-288-64H128v64h160v-64zM128 704h160v-64H128v64z m576 64h64v128c-1 18-7 33-19 45s-27 18-45 19H64c-35 0-64-29-64-64V192c0-35 29-64 64-64h192C256 57 313 0 384 0s128 57 128 128h192c35 0 64 29 64 64v320h-64V320H64v576h640V768zM128 256h512c0-35-29-64-64-64h-64c-35 0-64-29-64-64s-29-64-64-64-64 29-64 64-29 64-64 64h-64c-35 0-64 29-64 64z'
    })
  );
};

exports.default = ClipboardIcon;
