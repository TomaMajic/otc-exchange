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
				var participants, accounts, agent, token, senderBalance, contractBalance, serverAccounts, decimals, multiplier, amount, value;
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

								console.log(contractBalance);
								console.log(senderBalance);
								_context.next = 24;
								return _web2.default.utils.toBN(18);

							case 24:
								decimals = _context.sent;
								_context.next = 27;
								return _web2.default.utils.toBN(10).pow(decimals);

							case 27:
								multiplier = _context.sent;
								_context.next = 30;
								return _web2.default.utils.toBN(_this.state.value);

							case 30:
								amount = _context.sent;
								value = amount * multiplier;

								_this.setState({ depositLoading: true });

								// try {
								// 	await token.methods
								// 		.transfer(this.props.address, value)
								// 		.send({
								// 			from: accounts[0]
								// 		});

								// 	try {
								// 		await agent.methods
								// 			.depositSuccessfull(value,
								// 								senderBalance,
								// 								contractBalance,
								// 								accounts[0])
								// 			.send({
								// 				from: serverAccounts[0],
								// 				gas: 4600000,
								// 				gasPrice: 22000000000
								// 			});
								// 	} catch(err) {
								// 		console.log(err);
								// 	}

								// 	Router.pushRoute(`/exchanges/${this.props.address}`);
								// } catch(err) {
								// 	console.log(err);
								// }

								_this.setState({ depositLoading: false, value: '' });

							case 34:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2);
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
									_this.setState({ withdrawLoading: false });
								} else {
									_this.setState({ finalizeLoading: true });
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

								if (parseInt(this.props.amountLeftToDeposit[accounts[0]]) === 0) {
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
							lineNumber: 165
						}
					}, 'Amount left to deposit: ', _this3.props.amountLeftToDeposit[index]),
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 2, items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 170
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
					lineNumber: 175
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 176
				}
			}, this.props.address), _react2.default.createElement('h4', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 177
				}
			}, 'Time to finalize: ', this.props.expirationDate), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 179
				}
			}), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 180
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '20%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 181
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 182
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
					lineNumber: 183
				}
			})), _react2.default.createElement(_semanticUiReact.Button, {
				style: { marginTop: '5px', marginBottom: '15px' },
				primary: !this.state.depositMade,
				disabled: this.state.depositMade,
				loading: this.state.depositLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 191
				}
			}, 'Deposit')), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 200
				}
			}), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 202
				}
			}, this.renderParticipants()), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 204
				}
			}, _react2.default.createElement(_semanticUiReact.Button, {
				id: 'finalize',
				primary: this.props.finalizable,
				disabled: !this.props.finalizable,
				onClick: this.handleClick,
				loading: this.state.finalizeLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 205
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				id: 'withdraw',
				primary: this.props.withdrawable,
				disabled: !this.props.withdrawable,
				onClick: this.handleClick,
				loading: this.state.withdrawLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 214
				}
			}, 'Withdraw')));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(props) {
				var address, agent, summary, participants, now, daysLeft, hoursLeft, expirationDate, withdrawable, finalizable, amountLeftToDeposit, firstTokenAddr, secondTokenAddr, tokenAddresses, firstToken, secondToken, firstTokenName, secondTokenName, tokens;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								address = props.query.address;
								_context6.next = 3;
								return (0, _agent2.default)(address);

							case 3:
								agent = _context6.sent;
								_context6.next = 6;
								return agent.methods.getSummary().call();

							case 6:
								summary = _context6.sent;
								participants = summary["_participants"];
								now = new Date();
								daysLeft = Math.floor((new Date(summary["_expirationTime"] * 1000) - now) / (1000 * 60 * 60 * 24));
								hoursLeft = Math.floor(((new Date(summary["_expirationTime"] * 1000) - now) / (1000 * 60 * 60 * 24) - daysLeft) * 24);
								expirationDate = daysLeft + ' days & ' + hoursLeft + ' hours';
								withdrawable = summary["_withdrawable"];
								finalizable = summary["_finalizable"];
								amountLeftToDeposit = summary["_amountsLeft"];
								firstTokenAddr = summary["_firstToken"];
								secondTokenAddr = summary["_secondToken"];
								tokenAddresses = [firstTokenAddr, secondTokenAddr];
								_context6.next = 20;
								return (0, _token2.default)(firstTokenAddr);

							case 20:
								firstToken = _context6.sent;
								_context6.next = 23;
								return (0, _token2.default)(secondTokenAddr);

							case 23:
								secondToken = _context6.sent;
								_context6.next = 26;
								return firstToken.methods.name().call();

							case 26:
								firstTokenName = _context6.sent;
								_context6.next = 29;
								return secondToken.methods.name().call();

							case 29:
								secondTokenName = _context6.sent;
								tokens = [firstTokenName, secondTokenName];
								return _context6.abrupt('return', { address: address, participants: participants, expirationDate: expirationDate, withdrawable: withdrawable, finalizable: finalizable, tokens: tokens, tokenAddresses: tokenAddresses, amountLeftToDeposit: amountLeftToDeposit });

							case 32:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function getInitialProps(_x7) {
				return _ref7.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return ExchangeShow;
}(_react2.default.Component);

exports.default = ExchangeShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiQ2FyZCIsIklucHV0IiwiRm9ybSIsIkxheW91dCIsIkFnZW50IiwiVG9rZW4iLCJSb3V0ZXIiLCJ3ZWIzIiwic2VydmVyV2ViMyIsIkV4Y2hhbmdlU2hvdyIsInN0YXRlIiwidmFsdWUiLCJkZXBvc2l0TWFkZSIsInVzZXJUb2tlblN5bWJvbCIsImRlcG9zaXRMb2FkaW5nIiwiZmluYWxpemVMb2FkaW5nIiwid2l0aGRyYXdMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhbnRzIiwicHJvcHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYWRkcmVzcyIsImFnZW50IiwidG9rZW5BZGRyZXNzZXMiLCJpbmRleE9mIiwidG9rZW4iLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsInNlbmRlckJhbGFuY2UiLCJjb250cmFjdEJhbGFuY2UiLCJzZXJ2ZXJBY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJ1dGlscyIsInRvQk4iLCJkZWNpbWFscyIsInBvdyIsIm11bHRpcGxpZXIiLCJhbW91bnQiLCJzZXRTdGF0ZSIsImhhbmRsZUNsaWNrIiwiZWxlbWVudElkIiwidGFyZ2V0IiwiaWQiLCJmaW5hbGl6ZSIsIndpdGhkcmF3Iiwic3ltYm9sIiwicGFyc2VJbnQiLCJhbW91bnRMZWZ0VG9EZXBvc2l0IiwiYWNjb3VudCIsImZpbmFsaXplRXhjaGFuZ2UiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIml0ZW1zIiwibWFwIiwicGFydGljaXBhbnQiLCJpbmRleCIsImhlYWRlciIsIm1ldGEiLCJ0b2tlbnMiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwiZXhwaXJhdGlvbkRhdGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclBhcnRpY2lwYW50cyIsImZpbmFsaXphYmxlIiwid2l0aGRyYXdhYmxlIiwicXVlcnkiLCJnZXRTdW1tYXJ5Iiwic3VtbWFyeSIsIm5vdyIsIkRhdGUiLCJkYXlzTGVmdCIsIk1hdGgiLCJmbG9vciIsImhvdXJzTGVmdCIsImZpcnN0VG9rZW5BZGRyIiwic2Vjb25kVG9rZW5BZGRyIiwiZmlyc3RUb2tlbiIsInNlY29uZFRva2VuIiwibmFtZSIsImZpcnN0VG9rZW5OYW1lIiwic2Vjb25kVG9rZW5OYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFNLEFBQU87O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVMsQUFBYzs7QUFDdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBR2pCOzs7Ozs7Ozs7Ozs7Ozs7c05BQ0wsQTtVQUFRLEFBQ0EsQUFDUDtnQkFGTyxBQUVNLEFBQ2I7b0JBSE8sQUFHVSxBQUNqQjttQkFKTyxBQUlTLEFBQ2hCO29CQUxPLEFBS1UsQUFDakI7b0JBTk8sQUFNVSxBO0FBTlYsQUFDUCxXLEFBbUREO3dGQUFXLGlCQUFBLEFBQU8sT0FBUDs0SEFBQTtrRUFBQTtlQUFBO3VDQUFBO1lBQ1Y7Y0FBQSxBQUFNLEFBRUE7O0FBSEksdUJBR1csTUFBQSxBQUFLLE1BSGhCLEFBR3NCO3dCQUh0QjtlQUlhLGNBQUEsQUFBSyxJQUpsQixBQUlhLEFBQVM7O1lBQTFCO0FBSkksNEJBQUE7d0JBQUE7ZUFLVSxxQkFBTSxNQUFBLEFBQUssTUFBWCxBQUFpQixTQUwzQixBQUtVLEFBQTBCOztZQUF4QztBQUxJLHlCQUFBO3dCQUFBO2VBTVUscUJBQU0sTUFBQSxBQUFLLE1BQUwsQUFBVyxlQUFlLGFBQUEsQUFBYSxRQUFRLFNBQXJELEFBQU0sQUFBMEIsQUFBcUIsQUFBUyxNQU54RSxBQU1VLEFBQW9FOztZQUFsRjtB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QkFBb0IsQSx3QixBQUFtQixZQUV2QztBLHVCQUFlLFEsQUFBQSxBQUFRLEFBQ3ZCO0Esc0JBQWMsUUFBQSxBQUFRLEEsQUFDdEI7QSw4QkFBc0IsUUFBUSxBQUU5QixBLEFBRnNCO0EseUJBRUwsUUFBQSxBQUFRLEFBQ3pCLEE7QSwwQkFBa0IsUSxBQUFBLEFBQVEsQUFDMUI7QSx5QkFBaUIsQ0FBQSxBQUFDLGdCQUFnQixBLEFBQWpCOztlQUVFLHFCQUFBLEFBQU0sQTs7WUFBekI7QTs7ZUFDb0IscUJBQUEsQSxBQUFNOztZQUExQjtBOztlQUN1QixXQUFBLEFBQVcsUUFBWCxBQUFtQixPQUFuQixBQUEwQixBOztZQUFqRDtBOztlQUN3QixZQUFBLEFBQVksUUFBWixBQUFvQixPQUFwQixBQUEyQixBOztZQUFuRDtBLG9DQUNBO0EsaUJBQVMsQ0FBQSxBQUFDLGdCQUFELEFBQWlCLEE7MENBRXpCLEVBQUUsU0FBRixTQUFXLGNBQVgsY0FBeUIsZ0JBQXpCLGdCQUF5QyxjQUF6QyxjQUF1RCxhQUF2RCxhQUFvRSxRQUFwRSxRQUE0RSxnQkFBNUUsZ0JBQTRGLHFCQUE1RixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkNrQixnQkFBTSxBLEFBME5qQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21hbWFqaWMvRGVza3RvcC9Ub21hL0Rldi9vdGMtZXhjaGFuZ2UifQ==