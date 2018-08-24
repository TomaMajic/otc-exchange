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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _agent = require('../../ethereum/agent');

var _agent2 = _interopRequireDefault(_agent);

var _token = require('../../ethereum/token');

var _token2 = _interopRequireDefault(_token);

var _routes = require('../../routes');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _web3Server = require('../../ethereum/web3-server');

var _web3Server2 = _interopRequireDefault(_web3Server);

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
			depositLoading: false,
			finalizeLoading: false,
			withdrawLoading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var participants, accounts, agent, token, senderBalance, contractBalance, serverAccounts, value;
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
								return (0, _agent2.default)(_this.props.address, 'server');

							case 7:
								agent = _context.sent;
								_context.next = 10;
								return (0, _token2.default)(_this.props.tokenAddresses[participants.indexOf(accounts[0])], 'client');

							case 10:
								token = _context.sent;
								_context.next = 13;
								return token.methods.balanceOf(accounts[0]).call();

							case 13:
								senderBalance = _context.sent;
								_context.next = 16;
								return token.methods.balanceOf(_this.props.address).call();

							case 16:
								contractBalance = _context.sent;
								_context.next = 19;
								return _web3Server2.default.eth.getAccounts();

							case 19:
								serverAccounts = _context.sent;
								value = _this.state.value;

								console.log(value);

								_this.setState({ depositLoading: true });

								_context.prev = 23;
								_context.next = 26;
								return token.methods.transfer(_this.props.address, value).send({
									from: accounts[0]
								});

							case 26:
								_context.prev = 26;
								_context.next = 29;
								return agent.methods.depositSuccessfull(value, senderBalance, contractBalance, accounts[0]).send({
									from: serverAccounts[0],
									gas: 4600000,
									gasPrice: 22000000000
								});

							case 29:
								_context.next = 34;
								break;

							case 31:
								_context.prev = 31;
								_context.t0 = _context['catch'](26);

								console.log(_context.t0);

							case 34:

								_routes.Router.pushRoute('/exchanges/' + _this.props.address);
								_context.next = 40;
								break;

							case 37:
								_context.prev = 37;
								_context.t1 = _context['catch'](23);

								console.log(_context.t1);

							case 40:

								_this.setState({ depositLoading: false, value: '' });

							case 41:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[23, 37], [26, 31]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _this.handleClick = function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
				var elementId, accounts, agent;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								elementId = event.target.id;

								event.preventDefault();

								_context2.next = 4;
								return _web2.default.eth.getAccounts();

							case 4:
								accounts = _context2.sent;
								_context2.next = 7;
								return (0, _agent2.default)(_this.props.address, 'client');

							case 7:
								agent = _context2.sent;

								if (elementId === 'finalize') {
									_this.setState({ finalizeLoading: true });
									_this.finalize(accounts[0], agent);
									_this.setState({ finalizeLoading: false });
								} else {
									_this.setState({ withdrawLoading: true });
									_this.withdraw(accounts[0], agent);
									_this.setState({ withdrawLoading: false });
								}

							case 9:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this2);
			}));

			return function (_x2) {
				return _ref3.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ExchangeShow, [{
		key: 'componentDidMount',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
				var accounts, agent, token, userTokenSymbol, depositMade;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.next = 2;
								return _web2.default.eth.getAccounts();

							case 2:
								accounts = _context3.sent;
								_context3.next = 5;
								return (0, _agent2.default)(this.props.address, 'client');

							case 5:
								agent = _context3.sent;
								_context3.next = 8;
								return (0, _token2.default)(this.props.tokenAddresses[this.props.participants.indexOf(accounts[0])], 'client');

							case 8:
								token = _context3.sent;
								_context3.next = 11;
								return token.methods.symbol().call();

							case 11:
								userTokenSymbol = _context3.sent;
								depositMade = false;

								if (parseInt(this.props.amountLeftToDeposit[this.props.participants.indexOf(accounts[0])]) === 0) {
									depositMade = true;
								}

								this.setState({ depositMade: depositMade, userTokenSymbol: userTokenSymbol });

							case 15:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function componentDidMount() {
				return _ref4.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'finalize',
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(account, agent) {
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.prev = 0;
								_context4.next = 3;
								return agent.methods.finalizeExchange().send({
									from: account
								});

							case 3:

								_routes.Router.pushRoute('/exchanges/' + this.props.address);
								_context4.next = 9;
								break;

							case 6:
								_context4.prev = 6;
								_context4.t0 = _context4['catch'](0);

								console.log(_context4.t0);

							case 9:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this, [[0, 6]]);
			}));

			function finalize(_x3, _x4) {
				return _ref5.apply(this, arguments);
			}

			return finalize;
		}()
	}, {
		key: 'withdraw',
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(account, agent) {
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								_context5.prev = 0;
								_context5.next = 3;
								return agent.methods.withdraw().send({
									from: account
								});

							case 3:

								_routes.Router.pushRoute('/exchanges/' + this.props.address);
								_context5.next = 9;
								break;

							case 6:
								_context5.prev = 6;
								_context5.t0 = _context5['catch'](0);

								console.log(_context5.t0);

							case 9:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this, [[0, 6]]);
			}));

			function withdraw(_x5, _x6) {
				return _ref6.apply(this, arguments);
			}

			return withdraw;
		}()
	}, {
		key: 'renderParticipants',
		value: function renderParticipants() {
			var _this3 = this;

			var items = this.props.participants.map(function (participant, index) {
				return {
					header: 'User address: ' + participant,
					meta: _this3.props.tokens[index],
					description: _react2.default.createElement('h5', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 162
						}
					}, 'Amount left to deposit: ', _this3.props.amountLeftToDeposit[index]),
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 2, items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 167
				}
			});
		}
	}, {
		key: 'formatValue',
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(val) {
				var decimals, multiplier, amount;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								_context6.next = 2;
								return _web2.default.utils.toBN(18);

							case 2:
								decimals = _context6.sent;
								_context6.next = 5;
								return _web2.default.utils.toBN(10).pow(decimals);

							case 5:
								multiplier = _context6.sent;
								_context6.next = 8;
								return _web2.default.utils.toBN(val);

							case 8:
								amount = _context6.sent;
								return _context6.abrupt('return', amount * multiplier);

							case 10:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function formatValue(_x7) {
				return _ref7.apply(this, arguments);
			}

			return formatValue;
		}()
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 180
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 181
				}
			}, this.props.address), _react2.default.createElement('h4', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 182
				}
			}, 'Time to finalize: ', this.props.expirationDate), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 184
				}
			}), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 185
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '20%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 186
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 187
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
					lineNumber: 188
				}
			})), _react2.default.createElement(_semanticUiReact.Button, {
				style: { marginTop: '5px', marginBottom: '15px' },
				primary: !this.state.depositMade,
				disabled: this.state.depositMade,
				loading: this.state.depositLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 196
				}
			}, 'Deposit')), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 205
				}
			}), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 207
				}
			}, this.renderParticipants()), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 209
				}
			}, _react2.default.createElement(_semanticUiReact.Button, {
				id: 'finalize',
				primary: this.props.finalizable,
				disabled: !this.props.finalizable,
				onClick: this.handleClick,
				loading: this.state.finalizeLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 210
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				id: 'withdraw',
				primary: this.props.withdrawable,
				disabled: !this.props.withdrawable,
				onClick: this.handleClick,
				loading: this.state.withdrawLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 219
				}
			}, 'Withdraw')));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(props) {
				var address, agent, summary, participants, now, daysLeft, hoursLeft, expirationDate, withdrawable, finalizable, amountLeftToDeposit, firstTokenAddr, secondTokenAddr, tokenAddresses, firstToken, secondToken, firstTokenName, secondTokenName, tokens;
				return _regenerator2.default.wrap(function _callee7$(_context7) {
					while (1) {
						switch (_context7.prev = _context7.next) {
							case 0:
								address = props.query.address;
								_context7.next = 3;
								return (0, _agent2.default)(address);

							case 3:
								agent = _context7.sent;
								_context7.next = 6;
								return agent.methods.getSummary().call();

							case 6:
								summary = _context7.sent;
								participants = summary["_participants"];
								now = new Date();
								daysLeft = Math.floor((new Date(summary["_expirationTime"] * 1000) - now) / (1000 * 60 * 60 * 24));
								hoursLeft = Math.floor(((new Date(summary["_expirationTime"] * 1000) - now) / (1000 * 60 * 60 * 24) - daysLeft) * 24);
								expirationDate = daysLeft + ' days & ' + hoursLeft + ' hours';
								withdrawable = summary["_withdrawable"];
								finalizable = summary["_finalizable"];
								amountLeftToDeposit = summary["_amountsLeft"];

								console.log(amountLeftToDeposit);
								firstTokenAddr = summary["_firstToken"];
								secondTokenAddr = summary["_secondToken"];
								tokenAddresses = [firstTokenAddr, secondTokenAddr];
								_context7.next = 21;
								return (0, _token2.default)(firstTokenAddr);

							case 21:
								firstToken = _context7.sent;
								_context7.next = 24;
								return (0, _token2.default)(secondTokenAddr);

							case 24:
								secondToken = _context7.sent;
								_context7.next = 27;
								return firstToken.methods.name().call();

							case 27:
								firstTokenName = _context7.sent;
								_context7.next = 30;
								return secondToken.methods.name().call();

							case 30:
								secondTokenName = _context7.sent;
								tokens = [firstTokenName, secondTokenName];
								return _context7.abrupt('return', { address: address, participants: participants, expirationDate: expirationDate, withdrawable: withdrawable, finalizable: finalizable, tokens: tokens, tokenAddresses: tokenAddresses, amountLeftToDeposit: amountLeftToDeposit });

							case 33:
							case 'end':
								return _context7.stop();
						}
					}
				}, _callee7, this);
			}));

			function getInitialProps(_x8) {
				return _ref8.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return ExchangeShow;
}(_react2.default.Component);

exports.default = ExchangeShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiQ2FyZCIsIklucHV0IiwiRm9ybSIsIkxheW91dCIsIkFnZW50IiwiVG9rZW4iLCJSb3V0ZXIiLCJ3ZWIzIiwic2VydmVyV2ViMyIsIkV4Y2hhbmdlU2hvdyIsInN0YXRlIiwidmFsdWUiLCJkZXBvc2l0TWFkZSIsInVzZXJUb2tlblN5bWJvbCIsImRlcG9zaXRMb2FkaW5nIiwiZmluYWxpemVMb2FkaW5nIiwid2l0aGRyYXdMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhbnRzIiwicHJvcHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYWRkcmVzcyIsImFnZW50IiwidG9rZW5BZGRyZXNzZXMiLCJpbmRleE9mIiwidG9rZW4iLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsInNlbmRlckJhbGFuY2UiLCJjb250cmFjdEJhbGFuY2UiLCJzZXJ2ZXJBY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInRyYW5zZmVyIiwic2VuZCIsImZyb20iLCJkZXBvc2l0U3VjY2Vzc2Z1bGwiLCJnYXMiLCJnYXNQcmljZSIsInB1c2hSb3V0ZSIsImhhbmRsZUNsaWNrIiwiZWxlbWVudElkIiwidGFyZ2V0IiwiaWQiLCJmaW5hbGl6ZSIsIndpdGhkcmF3Iiwic3ltYm9sIiwicGFyc2VJbnQiLCJhbW91bnRMZWZ0VG9EZXBvc2l0IiwiYWNjb3VudCIsImZpbmFsaXplRXhjaGFuZ2UiLCJpdGVtcyIsIm1hcCIsInBhcnRpY2lwYW50IiwiaW5kZXgiLCJoZWFkZXIiLCJtZXRhIiwidG9rZW5zIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInZhbCIsInV0aWxzIiwidG9CTiIsImRlY2ltYWxzIiwicG93IiwibXVsdGlwbGllciIsImFtb3VudCIsImV4cGlyYXRpb25EYXRlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJQYXJ0aWNpcGFudHMiLCJmaW5hbGl6YWJsZSIsIndpdGhkcmF3YWJsZSIsInF1ZXJ5IiwiZ2V0U3VtbWFyeSIsInN1bW1hcnkiLCJub3ciLCJEYXRlIiwiZGF5c0xlZnQiLCJNYXRoIiwiZmxvb3IiLCJob3Vyc0xlZnQiLCJmaXJzdFRva2VuQWRkciIsInNlY29uZFRva2VuQWRkciIsImZpcnN0VG9rZW4iLCJzZWNvbmRUb2tlbiIsIm5hbWUiLCJmaXJzdFRva2VuTmFtZSIsInNlY29uZFRva2VuTmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVEsQUFBTSxBQUFPOztBQUM5QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFTLEFBQWM7O0FBQ3ZCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUdqQjs7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ0w7VUFBUSxBQUNBLEFBQ1A7Z0JBRk8sQUFFTSxBQUNiO29CQUhPLEFBR1UsQUFDakI7bUJBSk8sQUFJUyxBQUNoQjtvQkFMTyxBQUtVLEFBQ2pCO29CQU5PLEFBTVUsQTtBQU5WLEFBQ1AsV0FtREQsQTt3RkFBVyxpQkFBQSxBQUFPLE9BQVA7OEZBQUE7a0VBQUE7ZUFBQTt1Q0FBQTtZQUNWO2NBQUEsQUFBTSxBQUVBOztBQUhJLHVCQUdXLE1BQUEsQUFBSyxNQUhoQixBQUdzQjt3QkFIdEI7ZUFJYSxjQUFBLEFBQUssSUFKbEIsQUFJYSxBQUFTOztZQUExQjtBQUpJLDRCQUFBO3dCQUFBO2VBS1UscUJBQU0sTUFBQSxBQUFLLE1BQVgsQUFBaUIsU0FMM0IsQUFLVSxBQUEwQjs7WUFBeEM7QUFMSSx5QkFBQTt3QkFBQTtlQU1VLHFCQUFNLE1BQUEsQUFBSyxNQUFMLEFBQVcsZUFBZSxhQUFBLEFBQWEsUUFB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LEFBQU0sQTs7WUFBcEI7QTs7ZUFDZ0IsTUFBQSxBQUFNLFFBQU4sQUFBYyxhQUFkLEFBQTJCLEE7O1lBQTNDO0EsNEJBQ0E7QSx1QkFBZSxRQUFBLEFBQVEsQSxBQUV2QjtBLGNBQU0sSUFBSSxBLEFBQUosQUFDTjtBLG1CQUFXLEtBQUEsQUFBSyxNQUFNLENBQUMsSUFBQSxBQUFJLEtBQUssUUFBQSxBQUFRLHFCQUFqQixBQUFzQyxRQUF2QyxBQUErQyxRQUFRLE9BQUEsQUFBSyxLQUFMLEFBQVEsS0FBMUUsQUFBVyxBLEFBQWtFLEFBQ3hGO0Esb0JBQVksS0FBQSxBQUFLLE1BQU0sQ0FBRSxDQUFDLElBQUEsQUFBSSxLQUFLLFFBQUEsQUFBUSxxQkFBakIsQUFBc0MsUUFBdkMsQUFBK0MsUUFBUSxPQUFBLEFBQUssS0FBTCxBQUFRLEtBQWhFLEFBQUMsQUFBa0UsTUFBcEUsQUFBMkUsWSxBQUF0RixBQUFrRyxBQUM5RztBLHlCQUFvQixBLHdCQUFtQixBLFlBRXZDO0EsdUJBQWUsUSxBQUFBLEFBQVEsQUFDdkI7QSxzQkFBYyxRLEFBQUEsQUFBUSxBQUN0QjtBLDhCQUFzQixRQUFBLEFBQVEsQUFDcEMsQTs7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDTjtBLHlCQUFpQixRQUFBLEEsQUFBUSxBQUN6QjtBLDBCQUFrQixRQUFBLEFBQVEsQSxBQUMxQjtBLHlCQUFpQixDQUFBLEFBQUMsZ0JBQUQsQUFBaUIsQTs7ZUFFZixxQkFBQSxBLEFBQU07O1lBQXpCO0E7O2VBQ29CLHFCLEFBQUEsQUFBTTs7WUFBMUI7QTs7ZUFDdUIsV0FBQSxBQUFXLFFBQVgsQUFBbUIsT0FBbkIsQUFBMEIsQTs7WUFBakQ7QTs7ZUFDd0IsWUFBQSxBQUFZLFFBQVosQUFBb0IsT0FBcEIsQUFBMkIsQTs7WUFBbkQ7QSxvQ0FDQTtBLGlCQUFTLENBQUEsQUFBQyxnQkFBRCxBQUFpQixBOzBDQUV6QixFQUFFLFNBQUYsU0FBVyxjQUFYLGNBQXlCLGdCQUF6QixnQkFBeUMsY0FBekMsY0FBdUQsYUFBdkQsYUFBb0UsUUFBcEUsUUFBNEUsZ0JBQTVFLGdCQUE0RixxQixBQUE1Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5Da0IsZ0JBQU0sQSxBQStOakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYW1hamljL0Rlc2t0b3AvVG9tYS9EZXYvb3RjLWV4Y2hhbmdlIn0=