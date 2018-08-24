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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _agent = require('../../ethereum/agent');

var _agent2 = _interopRequireDefault(_agent);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tomamajic/Desktop/Toma/Dev/otc-exchange/pages/exchanges/new.js?entry';


var ExchangesNew = function (_React$Component) {
	(0, _inherits3.default)(ExchangesNew, _React$Component);

	function ExchangesNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ExchangesNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ExchangesNew.__proto__ || (0, _getPrototypeOf2.default)(ExchangesNew)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this2);
		})), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	// static async getInitialProps() => {

	// }

	(0, _createClass3.default)(ExchangesNew, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 19
				}
			}, 'Create a new exchange'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '35%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			}, 'Participants:'), _react2.default.createElement(_semanticUiReact.Input, {
				style: { marginTop: '8px' },
				placeholder: 'Your address..',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}), _react2.default.createElement(_semanticUiReact.Input, {
				style: { marginTop: '8px' },
				placeholder: 'Other participant address..',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '35%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, 'Tokens to exchange:'), _react2.default.createElement(_semanticUiReact.Input, {
				style: { marginTop: '8px' },
				placeholder: 'Your token address..',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}), _react2.default.createElement(_semanticUiReact.Input, {
				style: { marginTop: '8px' },
				placeholder: 'Other party token address..',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '35%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, 'Amounts to exchange:'), _react2.default.createElement(_semanticUiReact.Input, {
				style: { marginTop: '8px' },
				placeholder: 'Your amount..',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}), _react2.default.createElement(_semanticUiReact.Input, {
				style: { marginTop: '8px' },
				placeholder: 'Other party amount..',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '35%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, 'Expiry date:'), _react2.default.createElement(_semanticUiReact.Input, {
				style: { marginTop: '8px' },
				placeholder: 'Enter date..',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			})), _react2.default.createElement(_semanticUiReact.Button, {
				primary: true,
				content: 'Create',
				icon: 'add',
				labelPosition: 'right',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			})));
		}
	}]);

	return ExchangesNew;
}(_react2.default.Component);

exports.default = ExchangesNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJBZ2VudCIsIkJ1dHRvbiIsIklucHV0IiwiRm9ybSIsIkV4Y2hhbmdlc05ldyIsIm9uU3VibWl0Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFTLEFBQVEsQUFBTzs7Ozs7OztJQUVsQixBOzs7Ozs7Ozs7Ozs7Ozs7c04sQUFNTCxvRkFBVyxtQkFBQTtpRUFBQTtjQUFBO3NDQUFBO1dBQUE7V0FBQTt1QkFBQTs7QUFBQTtlQUFBO0E7QUFKWDs7QUFFQTs7Ozs7OzJCQU1TLEFBQ1I7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUVBLDBDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQjtlQUFyQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0UsY0FBRCxzQkFBQSxBQUFNLFNBQU0sT0FBTyxFQUFDLE9BQXBCLEFBQW1CLEFBQVE7ZUFBM0I7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLGtDQUFBLEFBQUM7V0FDTyxFQUFDLFdBRFQsQUFDUSxBQUFZLEFBQ25CO2lCQUZELEFBRWE7O2VBRmI7aUJBRkQsQUFFQyxBQUlBO0FBSkE7QUFDQyx1QkFHRCxBQUFDO1dBQ08sRUFBQyxXQURULEFBQ1EsQUFBWSxBQUNuQjtpQkFGRCxBQUVhOztlQUZiO2lCQVBGLEFBQ0MsQUFNQyxBQU1EO0FBTkM7QUFDQyx3QkFLRCxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFPLEVBQUMsT0FBcEIsQUFBbUIsQUFBUTtlQUEzQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0Esd0NBQUEsQUFBQztXQUNPLEVBQUMsV0FEVCxBQUNRLEFBQVksQUFDbkI7aUJBRkQsQUFFYTs7ZUFGYjtpQkFGRCxBQUVDLEFBSUE7QUFKQTtBQUNDLHVCQUdELEFBQUM7V0FDTyxFQUFDLFdBRFQsQUFDUSxBQUFZLEFBQ25CO2lCQUZELEFBRWE7O2VBRmI7aUJBbkJGLEFBYUMsQUFNQyxBQU1EO0FBTkM7QUFDQyx3QkFLRCxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFPLEVBQUMsT0FBcEIsQUFBbUIsQUFBUTtlQUEzQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EseUNBQUEsQUFBQztXQUNPLEVBQUMsV0FEVCxBQUNRLEFBQVksQUFDbkI7aUJBRkQsQUFFYTs7ZUFGYjtpQkFGRCxBQUVDLEFBSUE7QUFKQTtBQUNDLHVCQUdELEFBQUM7V0FDTyxFQUFDLFdBRFQsQUFDUSxBQUFZLEFBQ25CO2lCQUZELEFBRWE7O2VBRmI7aUJBL0JGLEFBeUJDLEFBTUMsQUFNRDtBQU5DO0FBQ0Msd0JBS0QsY0FBRCxzQkFBQSxBQUFNLFNBQU0sT0FBTyxFQUFDLE9BQXBCLEFBQW1CLEFBQVE7ZUFBM0I7aUJBQUEsQUFDQztBQUREO3NCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLGlDQUFBLEFBQUM7V0FDTyxFQUFDLFdBRFQsQUFDUSxBQUFZLEFBQ25CO2lCQUZELEFBRWE7O2VBRmI7aUJBdkNGLEFBcUNDLEFBRUMsQUFNRDtBQU5DO0FBQ0Msd0JBS0YsQUFBQzthQUFELEFBRUM7YUFGRCxBQUVTLEFBQ1I7VUFIRCxBQUdNLEFBQ0w7bUJBSkQsQUFJZTs7ZUFKZjtpQkFqREgsQUFDQyxBQUdDLEFBNkNDLEFBU0g7QUFURztBQUNDOzs7OztFQTdEcUIsZ0JBQU0sQSxBQXdFakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21hbWFqaWMvRGVza3RvcC9Ub21hL0Rldi9vdGMtZXhjaGFuZ2UifQ==