'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tomamajic/Desktop/Toma/Dev/otc-exchange/components/Header.js';


var Header = function (_React$Component) {
	(0, _inherits3.default)(Header, _React$Component);

	function Header() {
		(0, _classCallCheck3.default)(this, Header);

		return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
	}

	(0, _createClass3.default)(Header, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '10px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 9
				}
			}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'OTCX', __source: {
					fileName: _jsxFileName,
					lineNumber: 10
				}
			}, _react2.default.createElement(_link2.default, { href: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}, _react2.default.createElement('a', { style: { color: '#000' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, _react2.default.createElement('h5', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, 'OTCX')))), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'open-trades', __source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, _react2.default.createElement(_link2.default, { href: '', __source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, 'My open trades')))));
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkxpbmsiLCJIZWFkZXIiLCJtYXJnaW5Ub3AiLCJjb2xvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7OzsyQkFFSSxBQUNSOzBCQUNDLEFBQUMsdUNBQUssT0FBTyxFQUFDLFdBQWQsQUFBYSxBQUFZO2VBQXpCO2lCQUFBLEFBQ0M7QUFERDtJQUFBLGtCQUNFLGNBQUQsc0JBQUEsQUFBTSxRQUFLLE1BQVgsQUFBZ0I7ZUFBaEI7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMsZ0NBQUssTUFBTixBQUFXO2VBQVg7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUEsT0FBRyxPQUFPLEVBQUMsT0FBWCxBQUFVLEFBQVE7ZUFBbEI7aUJBQUEsQUFBMkI7QUFBM0I7c0JBQTJCLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BSDlCLEFBQ0MsQUFDQyxBQUNDLEFBQTJCLEFBR3ZCLDRCQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7ZUFBcEI7aUJBQUEsQUFDTDtBQURLO3NCQUNKLGNBQUQsc0JBQUEsQUFBTSxRQUFLLE1BQVgsQUFBZ0I7ZUFBaEI7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMsZ0NBQUssTUFBTixBQUFXO2VBQVg7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BVkwsQUFDQyxBQU1PLEFBQ0wsQUFDQyxBQUNDLEFBTUw7Ozs7O0VBbkJtQixnQkFBTSxBLEFBc0IzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbWFtYWppYy9EZXNrdG9wL1RvbWEvRGV2L290Yy1leGNoYW5nZSJ9