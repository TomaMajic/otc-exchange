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

var _routes = require('../../routes');

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
			userTokenSymbol: '',
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var participants, accounts, token;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								participants = _this.props.participants;
								_context.next = 4;
								return _web2.default.eth.getAccounts();

							case 4:
								accounts = _context.sent;
								_context.next = 7;
								return (0, _token2.default)(_this.props.tokenAddresses[participants.indexOf(accounts[0])]);

							case 7:
								token = _context.sent;

								_this.setState({ loading: true });

								_context.prev = 9;
								_context.next = 12;
								return token.methods.transfer(_this.props.address, _this.state.value).send({
									from: accounts[0]
								});

							case 12:

								_routes.Router.pushRoute('/exchanges/' + _this.props.address);
								_context.next = 18;
								break;

							case 15:
								_context.prev = 15;
								_context.t0 = _context['catch'](9);

								console.log(_context.t0);

							case 18:

								_this.setState({ loading: false, value: '' });

							case 19:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[9, 15]]);
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
					lineNumber: 94
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
					lineNumber: 99
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 100
				}
			}, this.props.address), _react2.default.createElement('h4', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 101
				}
			}, 'Time to finalize: ', this.props.expirationDate), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 104
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '20%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 105
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 106
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
					lineNumber: 107
				}
			})), _react2.default.createElement(_semanticUiReact.Button, {
				style: { marginTop: '5px', marginBottom: '15px' },
				primary: this.state.depositMade,
				active: !this.state.depositMade,
				loading: this.state.loading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 115
				}
			}, 'Deposit')), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 124
				}
			}), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 126
				}
			}, this.renderParticipants()), _react2.default.createElement('p', { style: { marginTop: '10px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 127
				}
			}, 'Deposit count: ', this.props.depositCount), _react2.default.createElement(_semanticUiReact.Button, {
				primary: this.props.depositCount === 2,
				active: this.props.depositCount !== 2,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 129
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				primary: this.props.withdrawable,
				active: !this.props.withdrawable,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 135
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

								console.log(summary);
								now = new Date();
								daysLeft = Math.floor((new Date(summary["_expirationTime"] * 1000) - now) / (1000 * 60 * 60 * 24));
								hoursLeft = Math.floor(((new Date(summary["_expirationTime"] * 1000) - now) / (1000 * 60 * 60 * 24) - daysLeft) * 24);
								expirationDate = daysLeft + ' days & ' + hoursLeft + ' hours';
								withdrawable = summary["_withdrawable"];
								finalizable = summary["_finalizable"];
								firstTokenAddr = summary["_firstToken"];
								secondTokenAddr = summary["_secondToken"];
								tokenAddresses = [firstTokenAddr, secondTokenAddr];
								_context3.next = 21;
								return (0, _token2.default)(firstTokenAddr);

							case 21:
								firstToken = _context3.sent;
								_context3.next = 24;
								return (0, _token2.default)(secondTokenAddr);

							case 24:
								secondToken = _context3.sent;
								_context3.next = 27;
								return firstToken.methods.name().call();

							case 27:
								firstTokenName = _context3.sent;
								_context3.next = 30;
								return secondToken.methods.name().call();

							case 30:
								secondTokenName = _context3.sent;
								tokens = [firstTokenName, secondTokenName];
								return _context3.abrupt('return', { address: address, participants: participants, depositCount: depositCount, expirationDate: expirationDate, withdrawable: withdrawable, finalizable: finalizable, tokens: tokens, tokenAddresses: tokenAddresses });

							case 33:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQWdlbnQiLCJUb2tlbiIsIkJ1dHRvbiIsIkNhcmQiLCJJbnB1dCIsIkZvcm0iLCJ3ZWIzIiwiUm91dGVyIiwiRXhjaGFuZ2VTaG93Iiwic3RhdGUiLCJ2YWx1ZSIsImRlcG9zaXRNYWRlIiwidXNlclRva2VuU3ltYm9sIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcnRpY2lwYW50cyIsInByb3BzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInRva2VuQWRkcmVzc2VzIiwiaW5kZXhPZiIsInRva2VuIiwic2V0U3RhdGUiLCJtZXRob2RzIiwidHJhbnNmZXIiLCJhZGRyZXNzIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJjb25zb2xlIiwibG9nIiwiYWdlbnQiLCJzeW1ib2wiLCJjYWxsIiwiYmFsYW5jZXMiLCJiYWxhbmNlIiwiaXRlbXMiLCJtYXAiLCJwYXJ0aWNpcGFudCIsImluZGV4IiwiaGVhZGVyIiwibWV0YSIsInRva2VucyIsImZsdWlkIiwiZXhwaXJhdGlvbkRhdGUiLCJ3aWR0aCIsInRhcmdldCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclBhcnRpY2lwYW50cyIsImRlcG9zaXRDb3VudCIsIndpdGhkcmF3YWJsZSIsInF1ZXJ5IiwiZ2V0U3VtbWFyeSIsInN1bW1hcnkiLCJub3ciLCJEYXRlIiwiZGF5c0xlZnQiLCJNYXRoIiwiZmxvb3IiLCJob3Vyc0xlZnQiLCJmaW5hbGl6YWJsZSIsImZpcnN0VG9rZW5BZGRyIiwic2Vjb25kVG9rZW5BZGRyIiwiZmlyc3RUb2tlbiIsInNlY29uZFRva2VuIiwibmFtZSIsImZpcnN0VG9rZW5OYW1lIiwic2Vjb25kVG9rZW5OYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFRLEEsQUFDMUI7QSx5QkFBaUIsQ0FBQSxBQUFDLGdCQUFELEFBQWlCLEE7O2VBRWYscUJBQUEsQSxBQUFNOztZQUF6QjtBOztlQUNvQixxQkFBQSxBQUFNLEE7O1lBQTFCO0E7O2VBQ3VCLFdBQUEsQUFBVyxRQUFYLEFBQW1CLE9BQW5CLEEsQUFBMEI7O1lBQWpEO0E7O2VBQ3dCLFlBQUEsQUFBWSxRQUFaLEFBQW9CLE9BQXBCLEFBQTJCLEE7O1lBQW5EO0Esb0NBQ0E7QSxpQkFBUyxDQUFBLEFBQUMsZ0JBQUQsQUFBaUIsQTswQ0FFekIsRUFBRSxTQUFGLFNBQVcsY0FBWCxjQUF5QixjQUF6QixjQUF1QyxnQkFBdkMsZ0JBQXVELGNBQXZELGNBQXFFLGFBQXJFLGFBQWtGLFFBQWxGLFFBQTBGLGdCQUExRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakNrQixnQkFBTSxBLEFBeUlqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21hbWFqaWMvRGVza3RvcC9Ub21hL0Rldi9vdGMtZXhjaGFuZ2UifQ==