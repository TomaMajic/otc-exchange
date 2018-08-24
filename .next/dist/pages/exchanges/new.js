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

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

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

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ExchangesNew.__proto__ || (0, _getPrototypeOf2.default)(ExchangesNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			firstUserAddr: '',
			secondUserAddr: '',
			firstTokenAddr: '',
			secondTokenAddr: '',
			firstUserDeposit: '',
			secondUserDeposit: '',
			duration: '',
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var accounts, participants, tokens, firstUserDep, secondUserDep, plannedDeposits, duration;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								_context.next = 3;
								return _web2.default.eth.getAccounts();

							case 3:
								accounts = _context.sent;
								participants = [_this.state.firstUserAddr, _this.state.secondUserAddr];
								tokens = [_this.state.firstTokenAddr, _this.state.secondTokenAddr];
								_context.next = 8;
								return _this.formatValue(_this.state.firstUserDeposit);

							case 8:
								firstUserDep = _context.sent;
								_context.next = 11;
								return _this.formatValue(_this.state.secondUserDeposit);

							case 11:
								secondUserDep = _context.sent;
								plannedDeposits = [firstUserDep, secondUserDep];
								duration = _this.state.duration * 24 * 60 * 60;

								_this.setState({ loading: true });

								_context.prev = 15;
								_context.next = 18;
								return _factory2.default.methods.createExchangeAgent(participants, tokens, plannedDeposits, duration).send({
									from: accounts[0]
								});

							case 18:

								_routes.Router.pushRoute('/');
								_context.next = 24;
								break;

							case 21:
								_context.prev = 21;
								_context.t0 = _context['catch'](15);

								console.log(_context.t0);

							case 24:

								_this.setState({ loading: false });

							case 25:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[15, 21]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ExchangesNew, [{
		key: 'formatValue',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(val) {
				var decimals, multiplier, amount;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _web2.default.utils.toBN(18);

							case 2:
								decimals = _context2.sent;
								_context2.next = 5;
								return _web2.default.utils.toBN(10).pow(decimals);

							case 5:
								multiplier = _context2.sent;
								_context2.next = 8;
								return _web2.default.utils.toBN(val);

							case 8:
								amount = _context2.sent;
								return _context2.abrupt('return', amount * multiplier);

							case 10:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function formatValue(_x2) {
				return _ref3.apply(this, arguments);
			}

			return formatValue;
		}()
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, 'Create a new exchange'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '35%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, 'Participants:'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.firstUserAddr,
				style: { marginTop: '8px' },
				placeholder: 'Your address..',
				onChange: function onChange(event) {
					_this3.setState({ firstUserAddr: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.secondUserAddr,
				style: { marginTop: '8px' },
				placeholder: 'Other participant address..',
				onChange: function onChange(event) {
					_this3.setState({ secondUserAddr: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '35%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}, 'Tokens to exchange:'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.firstTokenAddr,
				style: { marginTop: '8px' },
				placeholder: 'Your token address..',
				onChange: function onChange(event) {
					_this3.setState({ firstTokenAddr: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.secondTokenAddr,
				style: { marginTop: '8px' },
				placeholder: 'Other party token address..',
				onChange: function onChange(event) {
					_this3.setState({ secondTokenAddr: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 89
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '35%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 97
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			}, 'Amounts to exchange:'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.firstUserDeposit,
				style: { marginTop: '8px' },
				placeholder: 'Your amount..',
				onChange: function onChange(event) {
					_this3.setState({ firstUserDeposit: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.secondUserDeposit,
				style: { marginTop: '8px' },
				placeholder: 'Other party amount..',
				onChange: function onChange(event) {
					_this3.setState({ secondUserDeposit: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 105
				}
			})), _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '35%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 113
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 114
				}
			}, 'Duration:'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.duration,
				style: { marginTop: '8px' },
				label: 'Days',
				labelPosition: 'right',
				onChange: function onChange(event) {
					_this3.setState({ duration: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 116
				}
			})), _react2.default.createElement(_semanticUiReact.Button, {
				primary: true,
				content: 'Create',
				icon: 'add',
				labelPosition: 'right',
				loading: this.state.loading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 125
				}
			})));
		}
	}]);

	return ExchangesNew;
}(_react2.default.Component);

exports.default = ExchangesNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJmYWN0b3J5IiwiQnV0dG9uIiwiSW5wdXQiLCJGb3JtIiwiUm91dGVyIiwid2ViMyIsIkV4Y2hhbmdlc05ldyIsInN0YXRlIiwiZmlyc3RVc2VyQWRkciIsInNlY29uZFVzZXJBZGRyIiwiZmlyc3RUb2tlbkFkZHIiLCJzZWNvbmRUb2tlbkFkZHIiLCJmaXJzdFVzZXJEZXBvc2l0Iiwic2Vjb25kVXNlckRlcG9zaXQiLCJkdXJhdGlvbiIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwicGFydGljaXBhbnRzIiwidG9rZW5zIiwiZm9ybWF0VmFsdWUiLCJmaXJzdFVzZXJEZXAiLCJzZWNvbmRVc2VyRGVwIiwicGxhbm5lZERlcG9zaXRzIiwic2V0U3RhdGUiLCJtZXRob2RzIiwiY3JlYXRlRXhjaGFuZ2VBZ2VudCIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwiY29uc29sZSIsImxvZyIsInZhbCIsInV0aWxzIiwidG9CTiIsImRlY2ltYWxzIiwicG93IiwibXVsdGlwbGllciIsImFtb3VudCIsIndpZHRoIiwibWFyZ2luVG9wIiwidGFyZ2V0IiwidmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFTLEFBQVEsQUFBTzs7QUFDeEIsQUFBUyxBQUFjOztBQUN2QixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBRVg7Ozs7Ozs7Ozs7Ozs7OztzTkFDTCxBO2tCQUFRLEFBQ1EsQUFDZjttQkFGTyxBQUVTLEFBQ2hCO21CQUhPLEFBR1MsQUFDaEI7b0JBSk8sQUFJVSxBQUNqQjtxQkFMTyxBQUtXLEFBQ2xCO3NC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eEMsQUFBYyxBQUFpQyxBQUFVO0FBSmpGOztlQUFBO2lCQUZELEFBRUMsQUFNQTtBQU5BO0FBQ0MsdUJBS0QsQUFBQztXQUNPLEtBQUEsQUFBSyxNQURiLEFBQ21CLEFBQ2xCO1dBQU8sRUFBQyxXQUZULEFBRVEsQUFBWSxBQUNuQjtpQkFIRCxBQUdhLEFBQ1o7Y0FBVSxrQkFBQSxBQUFDLE9BQVUsQUFBRTtZQUFBLEFBQUssU0FBUyxFQUFFLG1CQUFtQixNQUFBLEFBQU0sT0FBekMsQUFBYyxBQUFrQyxBQUFVO0FBSmxGOztlQUFBO2lCQXpDRixBQWlDQyxBQVFDLEFBUUQ7QUFSQztBQUNDLHdCQU9ELGNBQUQsc0JBQUEsQUFBTSxTQUFNLE9BQU8sRUFBQyxPQUFwQixBQUFtQixBQUFRO2VBQTNCO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFFQSw4QkFBQSxBQUFDO1dBQ08sS0FBQSxBQUFLLE1BRGIsQUFDbUIsQUFDbEI7V0FBTyxFQUFDLFdBRlQsQUFFUSxBQUFZLEFBQ25CO1dBSEQsQUFHTyxBQUNOO21CQUpELEFBSWUsQUFDZDtjQUFVLGtCQUFBLEFBQUMsT0FBVSxBQUFFO1lBQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxNQUFBLEFBQU0sT0FBaEMsQUFBYyxBQUF5QixBQUFVO0FBTHpFOztlQUFBO2lCQXBERixBQWlEQyxBQUdDLEFBU0Q7QUFUQztBQUNDLHdCQVFGLEFBQUM7YUFBRCxBQUVDO2FBRkQsQUFFUyxBQUNSO1VBSEQsQUFHTSxBQUNMO21CQUpELEFBSWUsQUFDZDthQUFTLEtBQUEsQUFBSyxNQUxmLEFBS3FCOztlQUxyQjtpQkFqRUgsQUFDQyxBQUdDLEFBNkRDLEFBVUg7QUFWRztBQUNDOzs7OztFQXRIcUIsZ0JBQU0sQSxBQWtJakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21hbWFqaWMvRGVza3RvcC9Ub21hL0Rldi9vdGMtZXhjaGFuZ2UifQ==