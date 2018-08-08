'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tomamajic/Desktop/Toma/Dev/otc-exchange/pages/index.js?entry';


var OTCIndex = function (_React$Component) {
	(0, _inherits3.default)(OTCIndex, _React$Component);

	function OTCIndex() {
		(0, _classCallCheck3.default)(this, OTCIndex);

		return (0, _possibleConstructorReturn3.default)(this, (OTCIndex.__proto__ || (0, _getPrototypeOf2.default)(OTCIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(OTCIndex, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			}, 'Welcome to the OTC Exchnage'), this.props.agents));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var agents;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _factory2.default.methods.getExchangeAgents().call();

							case 2:
								agents = _context.sent;
								return _context.abrupt('return', { agents: agents });

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return OTCIndex;
}(_react2.default.Component);

exports.default = OTCIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiZmFjdG9yeSIsIk9UQ0luZGV4IiwicHJvcHMiLCJhZ2VudHMiLCJtZXRob2RzIiwiZ2V0RXhjaGFuZ2VBZ2VudHMiLCJjYWxsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7Ozs7OztJQUVkLEE7Ozs7Ozs7Ozs7OzJCQVFJLEFBQ1I7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0UscUNBQUEsQUFBSyxNQUpWLEFBQ0MsQUFDQyxBQUVjLEFBSWhCOzs7Ozs7Ozs7Ozs7ZUFkcUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLG9CQUFoQixBQUFvQyxBOztZQUFuRDtBO3lDQUVDLEVBQUUsUUFBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBTGMsZ0JBQU0sQSxBQW9CN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbWFtYWppYy9EZXNrdG9wL1RvbWEvRGV2L290Yy1leGNoYW5nZSJ9