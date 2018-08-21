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

var _token = require('../../ethereum/token');

var _token2 = _interopRequireDefault(_token);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tomamajic/Desktop/Toma/Dev/otc-exchange/pages/exchanges/show.js?entry';


var ExchangeShow = function (_React$Component) {
	(0, _inherits3.default)(ExchangeShow, _React$Component);

	function ExchangeShow() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ExchangeShow);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ExchangeShow.__proto__ || (0, _getPrototypeOf2.default)(ExchangeShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			depositMade: false,
			userTokenSymbol: ''
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

							case 1:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ExchangeShow, [{
		key: 'componentDidMount',
		value: function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				var accounts, agent, token, userTokenSymbol, balance, depositMade;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return _web2.default.eth.getAccounts();

							case 2:
								accounts = _context2.sent;
								_context2.next = 5;
								return (0, _agent2.default)(this.props.address);

							case 5:
								agent = _context2.sent;
								_context2.next = 8;
								return (0, _token2.default)(this.props.tokenAddresses[this.props.participants.indexOf(accounts[0])]);

							case 8:
								token = _context2.sent;
								_context2.next = 11;
								return token.methods.symbol().call();

							case 11:
								userTokenSymbol = _context2.sent;
								_context2.next = 14;
								return agent.methods.balances(accounts[0]).call();

							case 14:
								balance = _context2.sent;
								depositMade = false;

								if (balance !== 0) {
									depositMade = true;
								}

								this.setState({ depositMade: depositMade, userTokenSymbol: userTokenSymbol });

							case 18:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function componentDidMount() {
				return _ref3.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'renderParticipants',
		value: function renderParticipants() {
			var _this3 = this;

			var items = this.props.participants.map(function (participant, index) {
				return {
					header: participant,
					meta: _this3.props.tokens[index],
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 2, items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}, this.props.address), _react2.default.createElement('h4', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, 'Time to finalize: ', this.props.expirationDate), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '20%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}, 'Enter amount: '), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				label: this.state.userTokenSymbol,
				labelPosition: 'right',
				onChange: function onChange(event) {
					_this4.setState({ value: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			})), _react2.default.createElement(_semanticUiReact.Button, {
				style: { marginTop: '5px', marginBottom: '15px' },
				primary: this.state.depositMade,
				active: !this.state.depositMade,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 95
				}
			}, 'Deposit')), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 105
				}
			}, this.renderParticipants()), _react2.default.createElement('p', { style: { marginTop: '10px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 106
				}
			}, 'Deposit count: ', this.props.depositCount), _react2.default.createElement(_semanticUiReact.Button, {
				primary: this.props.depositCount === 2,
				active: this.props.depositCount !== 2,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 108
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				primary: this.props.withdrawable,
				active: !this.props.withdrawable,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 114
				}
			}, 'Withdraw'));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(props) {
				var address, agent, summary, participants, depositCount, now, daysLeft, hoursLeft, expirationDate, withdrawable, finalizable, firstTokenAddr, secondTokenAddr, tokenAddresses, firstToken, secondToken, firstTokenName, secondTokenName, tokens;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								address = props.query.address;
								_context3.next = 3;
								return (0, _agent2.default)(address);

							case 3:
								agent = _context3.sent;
								_context3.next = 6;
								return agent.methods.getSummary().call();

							case 6:
								summary = _context3.sent;
								participants = summary["_participants"];
								depositCount = summary["_depositCount"];
								now = new Date();
								daysLeft = Math.floor((new Date(summary["_expirationTime"] * 1000) - now) / (1000 * 60 * 60 * 24));
								hoursLeft = Math.floor(((new Date(summary["_expirationTime"] * 1000) - now) / (1000 * 60 * 60 * 24) - daysLeft) * 24);
								expirationDate = daysLeft + ' days & ' + hoursLeft + ' hours';
								withdrawable = summary["_withdrawable"];
								finalizable = summary["_finalizable"];
								firstTokenAddr = summary["_firstToken"];
								secondTokenAddr = summary["_secondToken"];
								tokenAddresses = [firstTokenAddr, secondTokenAddr];
								_context3.next = 20;
								return (0, _token2.default)(firstTokenAddr);

							case 20:
								firstToken = _context3.sent;
								_context3.next = 23;
								return (0, _token2.default)(secondTokenAddr);

							case 23:
								secondToken = _context3.sent;
								_context3.next = 26;
								return firstToken.methods.name().call();

							case 26:
								firstTokenName = _context3.sent;
								_context3.next = 29;
								return secondToken.methods.name().call();

							case 29:
								secondTokenName = _context3.sent;
								tokens = [firstTokenName, secondTokenName];
								return _context3.abrupt('return', { address: address, participants: participants, depositCount: depositCount, expirationDate: expirationDate, withdrawable: withdrawable, finalizable: finalizable, tokens: tokens, tokenAddresses: tokenAddresses });

							case 32:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function getInitialProps(_x2) {
				return _ref4.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return ExchangeShow;
}(_react2.default.Component);

exports.default = ExchangeShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQWdlbnQiLCJUb2tlbiIsIkJ1dHRvbiIsIkNhcmQiLCJJbnB1dCIsIkZvcm0iLCJ3ZWIzIiwiRXhjaGFuZ2VTaG93Iiwic3RhdGUiLCJ2YWx1ZSIsImRlcG9zaXRNYWRlIiwidXNlclRva2VuU3ltYm9sIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInByb3BzIiwiYWRkcmVzcyIsImFnZW50IiwidG9rZW5BZGRyZXNzZXMiLCJwYXJ0aWNpcGFudHMiLCJpbmRleE9mIiwidG9rZW4iLCJtZXRob2RzIiwic3ltYm9sIiwiY2FsbCIsImJhbGFuY2VzIiwiYmFsYW5jZSIsInNldFN0YXRlIiwiaXRlbXMiLCJtYXAiLCJwYXJ0aWNpcGFudCIsImluZGV4IiwiaGVhZGVyIiwibWV0YSIsInRva2VucyIsImZsdWlkIiwiZXhwaXJhdGlvbkRhdGUiLCJ3aWR0aCIsInRhcmdldCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclBhcnRpY2lwYW50cyIsImRlcG9zaXRDb3VudCIsIndpdGhkcmF3YWJsZSIsInF1ZXJ5IiwiZ2V0U3VtbWFyeSIsInN1bW1hcnkiLCJub3ciLCJEYXRlIiwiZGF5c0xlZnQiLCJNYXRoIiwiZmxvb3IiLCJob3Vyc0xlZnQiLCJmaW5hbGl6YWJsZSIsImZpcnN0VG9rZW5BZGRyIiwic2Vjb25kVG9rZW5BZGRyIiwiZmlyc3RUb2tlbiIsInNlY29uZFRva2VuIiwibmFtZSIsImZpcnN0VG9rZW5OYW1lIiwic2Vjb25kVG9rZW5OYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFX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QUFRLEtBQWhFLEFBQUMsQUFBa0UsTUFBcEUsQUFBMkUsWUFBdEYsQUFBa0csQSxBQUM5RztBLHlCLEFBQW9CLHdCLEFBQW1CLFlBRXZDO0EsdUJBQWUsUUFBQSxBQUFRLEFBQ3ZCLEE7QSxzQkFBYyxRQUFBLEFBQVEsQSxBQUV0QjtBLHlCQUFpQixRQUFBLEEsQUFBUSxBQUN6QjtBLDBCQUFrQixRQUFBLEEsQUFBUSxBQUMxQjtBLHlCQUFpQixDQUFBLEFBQUMsZ0JBQUQsQUFBaUIsQTs7ZUFFZixxQkFBQSxBQUFNLEE7O1lBQXpCO0E7O2VBQ29CLHFCQUFBLEFBQU0sQTs7WUFBMUI7QTs7ZUFDdUIsV0FBQSxBQUFXLFFBQVgsQUFBbUIsT0FBbkIsQUFBMEIsQTs7WUFBakQ7QTs7ZUFDd0IsWUFBQSxBQUFZLFFBQVosQUFBb0IsT0FBcEIsQSxBQUEyQjs7WUFBbkQ7QSxvQ0FDQTtBLGlCQUFTLENBQUEsQUFBQyxnQkFBRCxBQUFpQixBOzBDQUV6QixFQUFFLFNBQUYsU0FBVyxjQUFYLGNBQXlCLGNBQXpCLGNBQXVDLGdCQUF2QyxnQkFBdUQsY0FBdkQsY0FBcUUsYUFBckUsYUFBa0YsUUFBbEYsUUFBMEYsZ0JBQTFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoQ2tCLGdCQUFNLEEsQUFxSGpDOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbWFtYWppYy9EZXNrdG9wL1RvbWEvRGV2L290Yy1leGNoYW5nZSJ9