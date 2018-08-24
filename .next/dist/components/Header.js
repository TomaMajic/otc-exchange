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

var _index = require('../pages/index');

var _index2 = _interopRequireDefault(_index);

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
					lineNumber: 10
				}
			}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'OTCX', __source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			}, _react2.default.createElement(_link2.default, { href: '/', __source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, _react2.default.createElement('a', { style: { color: '#000' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, _react2.default.createElement('h5', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, 'OTCX')))), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'new', __source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}, _react2.default.createElement(_link2.default, { href: '/exchanges/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}, 'Create Exchange')))));
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIkxpbmsiLCJPVENJbmRleCIsIkhlYWRlciIsIm1hcmdpblRvcCIsImNvbG9yIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7OzJCQUVJLEFBQ1I7MEJBQ0MsQUFBQyx1Q0FBSyxPQUFPLEVBQUMsV0FBZCxBQUFhLEFBQVk7ZUFBekI7aUJBQUEsQUFDQztBQUREO0lBQUEsa0JBQ0UsY0FBRCxzQkFBQSxBQUFNLFFBQUssTUFBWCxBQUFnQjtlQUFoQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7ZUFBWDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQSxPQUFHLE9BQU8sRUFBQyxPQUFYLEFBQVUsQUFBUTtlQUFsQjtpQkFBQSxBQUEyQjtBQUEzQjtzQkFBMkIsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFIOUIsQUFDQyxBQUNDLEFBQ0MsQUFBMkIsQUFHdkIsNEJBQUMsY0FBRCxzQkFBQSxBQUFNLFFBQUssVUFBWCxBQUFvQjtlQUFwQjtpQkFBQSxBQUNMO0FBREs7c0JBQ0osY0FBRCxzQkFBQSxBQUFNLFFBQUssTUFBWCxBQUFnQjtlQUFoQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7ZUFBWDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFWTCxBQUNDLEFBTU8sQUFDTCxBQUNDLEFBQ0MsQUFNTDs7Ozs7RUFuQm1CLGdCQUFNLEEsQUFzQjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYW1hamljL0Rlc2t0b3AvVG9tYS9EZXYvb3RjLWV4Y2hhbmdlIn0=