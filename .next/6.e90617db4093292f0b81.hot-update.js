webpackHotUpdate(6,{

/***/ 1356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(514);

var _Layout = __webpack_require__(789);

var _Layout2 = _interopRequireDefault(_Layout);

var _agent = __webpack_require__(1219);

var _agent2 = _interopRequireDefault(_agent);

var _token = __webpack_require__(1357);

var _token2 = _interopRequireDefault(_token);

var _routes = __webpack_require__(1359);

var _web = __webpack_require__(558);

var _web2 = _interopRequireDefault(_web);

var _web3Server = __webpack_require__(1220);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/tomamajic/Desktop/Toma/Dev/otc-exchange/pages/exchanges/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/tomamajic/Desktop/Toma/Dev/otc-exchange/pages/exchanges/show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/exchanges/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5lOTA2MTdkYjQwOTMyOTJmMGI4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/ZmQ4NDYxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBJbnB1dCwgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEFnZW50IGZyb20gJy4uLy4uL2V0aGVyZXVtL2FnZW50JztcbmltcG9ydCBUb2tlbiBmcm9tICcuLi8uLi9ldGhlcmV1bS90b2tlbic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgc2VydmVyV2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzLXNlcnZlcic7XG5cblxuY2xhc3MgRXhjaGFuZ2VTaG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0dmFsdWU6ICcnLFxuXHRcdGRlcG9zaXRNYWRlOiBmYWxzZSxcblx0XHR1c2VyVG9rZW5TeW1ib2w6ICcnLFxuXHRcdGRlcG9zaXRMb2FkaW5nOiBmYWxzZSxcblx0XHRmaW5hbGl6ZUxvYWRpbmc6IGZhbHNlLFxuXHRcdHdpdGhkcmF3TG9hZGluZzogZmFsc2Vcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcblx0XHRjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KGFkZHJlc3MpO1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBhZ2VudC5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG5cdFx0Y29uc3QgcGFydGljaXBhbnRzID0gc3VtbWFyeVtcIl9wYXJ0aWNpcGFudHNcIl07XG5cblx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IGRheXNMZWZ0ID0gTWF0aC5mbG9vcigobmV3IERhdGUoc3VtbWFyeVtcIl9leHBpcmF0aW9uVGltZVwiXSAqIDEwMDApIC0gbm93KSAvICgxMDAwKjYwKjYwKjI0KSk7XG5cdFx0Y29uc3QgaG91cnNMZWZ0ID0gTWF0aC5mbG9vcigoKChuZXcgRGF0ZShzdW1tYXJ5W1wiX2V4cGlyYXRpb25UaW1lXCJdICogMTAwMCkgLSBub3cpIC8gKDEwMDAqNjAqNjAqMjQpKSAtIGRheXNMZWZ0KSAqIDI0KTtcblx0XHRjb25zdCBleHBpcmF0aW9uRGF0ZSA9IGAke2RheXNMZWZ0fSBkYXlzICYgJHtob3Vyc0xlZnR9IGhvdXJzYDtcblxuXHRcdGNvbnN0IHdpdGhkcmF3YWJsZSA9IHN1bW1hcnlbXCJfd2l0aGRyYXdhYmxlXCJdO1xuXHRcdGNvbnN0IGZpbmFsaXphYmxlID0gc3VtbWFyeVtcIl9maW5hbGl6YWJsZVwiXTtcblx0XHRjb25zdCBhbW91bnRMZWZ0VG9EZXBvc2l0ID0gc3VtbWFyeVtcIl9hbW91bnRzTGVmdFwiXTtcblxuXHRcdGNvbnN0IGZpcnN0VG9rZW5BZGRyID0gc3VtbWFyeVtcIl9maXJzdFRva2VuXCJdO1xuXHRcdGNvbnN0IHNlY29uZFRva2VuQWRkciA9IHN1bW1hcnlbXCJfc2Vjb25kVG9rZW5cIl07XG5cdFx0Y29uc3QgdG9rZW5BZGRyZXNzZXMgPSBbZmlyc3RUb2tlbkFkZHIsIHNlY29uZFRva2VuQWRkcl07XG5cblx0XHRjb25zdCBmaXJzdFRva2VuID0gYXdhaXQgVG9rZW4oZmlyc3RUb2tlbkFkZHIpO1xuXHRcdGNvbnN0IHNlY29uZFRva2VuID0gYXdhaXQgVG9rZW4oc2Vjb25kVG9rZW5BZGRyKTtcblx0XHRjb25zdCBmaXJzdFRva2VuTmFtZSA9IGF3YWl0IGZpcnN0VG9rZW4ubWV0aG9kcy5uYW1lKCkuY2FsbCgpO1xuXHRcdGNvbnN0IHNlY29uZFRva2VuTmFtZSA9IGF3YWl0IHNlY29uZFRva2VuLm1ldGhvZHMubmFtZSgpLmNhbGwoKTtcblx0XHRjb25zdCB0b2tlbnMgPSBbZmlyc3RUb2tlbk5hbWUsIHNlY29uZFRva2VuTmFtZV07XG5cblx0XHRyZXR1cm4geyBhZGRyZXNzLCBwYXJ0aWNpcGFudHMsIGV4cGlyYXRpb25EYXRlLCB3aXRoZHJhd2FibGUsIGZpbmFsaXphYmxlLCB0b2tlbnMsIHRva2VuQWRkcmVzc2VzLCBhbW91bnRMZWZ0VG9EZXBvc2l0IH1cblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KHRoaXMucHJvcHMuYWRkcmVzcywgJ2NsaWVudCcpO1xuXHRcdGNvbnN0IHRva2VuID0gYXdhaXQgVG9rZW4odGhpcy5wcm9wcy50b2tlbkFkZHJlc3Nlc1t0aGlzLnByb3BzLnBhcnRpY2lwYW50cy5pbmRleE9mKGFjY291bnRzWzBdKV0sICdjbGllbnQnKTtcblxuXHRcdGNvbnN0IHVzZXJUb2tlblN5bWJvbCA9IGF3YWl0IHRva2VuLm1ldGhvZHMuc3ltYm9sKCkuY2FsbCgpO1xuXHRcdGxldCBkZXBvc2l0TWFkZSA9IGZhbHNlO1xuXG5cdFx0aWYocGFyc2VJbnQodGhpcy5wcm9wcy5hbW91bnRMZWZ0VG9EZXBvc2l0W2FjY291bnRzWzBdXSkgPT09IDApIHtcblx0XHRcdGRlcG9zaXRNYWRlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgZGVwb3NpdE1hZGUsIHVzZXJUb2tlblN5bWJvbCB9KTtcblx0fVxuXG5cdG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IHBhcnRpY2lwYW50cyA9IHRoaXMucHJvcHMucGFydGljaXBhbnRzO1xuXHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KHRoaXMucHJvcHMuYWRkcmVzcywgJ3NlcnZlcicpO1xuXHRcdGNvbnN0IHRva2VuID0gYXdhaXQgVG9rZW4odGhpcy5wcm9wcy50b2tlbkFkZHJlc3Nlc1twYXJ0aWNpcGFudHMuaW5kZXhPZihhY2NvdW50c1swXSldLCAnY2xpZW50Jyk7XG5cblx0XHRjb25zdCBzZW5kZXJCYWxhbmNlID0gYXdhaXQgdG9rZW4ubWV0aG9kcy5iYWxhbmNlT2YoYWNjb3VudHNbMF0pLmNhbGwoKTtcblx0XHRjb25zdCBjb250cmFjdEJhbGFuY2UgPSBhd2FpdCB0b2tlbi5tZXRob2RzLmJhbGFuY2VPZih0aGlzLnByb3BzLmFkZHJlc3MpLmNhbGwoKTtcblx0XHRjb25zdCBzZXJ2ZXJBY2NvdW50cyA9IGF3YWl0IHNlcnZlcldlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cdFx0Y29uc29sZS5sb2coY29udHJhY3RCYWxhbmNlKTtcblx0XHRjb25zb2xlLmxvZyhzZW5kZXJCYWxhbmNlKTtcblx0XHRjb25zdCBkZWNpbWFscyA9IGF3YWl0IHdlYjMudXRpbHMudG9CTigxOCk7XG5cdFx0Y29uc3QgbXVsdGlwbGllciA9IGF3YWl0IHdlYjMudXRpbHMudG9CTigxMCkucG93KGRlY2ltYWxzKTtcblx0XHRjb25zdCBhbW91bnQgPSBhd2FpdCB3ZWIzLnV0aWxzLnRvQk4odGhpcy5zdGF0ZS52YWx1ZSk7XG5cdFx0Y29uc3QgdmFsdWUgPSBhbW91bnQgKiBtdWx0aXBsaWVyO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGRlcG9zaXRMb2FkaW5nOiB0cnVlIH0pO1xuXG5cdFx0Ly8gdHJ5IHtcblx0XHQvLyBcdGF3YWl0IHRva2VuLm1ldGhvZHNcblx0XHQvLyBcdFx0LnRyYW5zZmVyKHRoaXMucHJvcHMuYWRkcmVzcywgdmFsdWUpXG5cdFx0Ly8gXHRcdC5zZW5kKHtcblx0XHQvLyBcdFx0XHRmcm9tOiBhY2NvdW50c1swXVxuXHRcdC8vIFx0XHR9KTtcblxuXHRcdC8vIFx0dHJ5IHtcblx0XHQvLyBcdFx0YXdhaXQgYWdlbnQubWV0aG9kc1xuXHRcdC8vIFx0XHRcdC5kZXBvc2l0U3VjY2Vzc2Z1bGwodmFsdWUsXG5cdFx0Ly8gXHRcdFx0XHRcdFx0XHRcdHNlbmRlckJhbGFuY2UsXG5cdFx0Ly8gXHRcdFx0XHRcdFx0XHRcdGNvbnRyYWN0QmFsYW5jZSxcblx0XHQvLyBcdFx0XHRcdFx0XHRcdFx0YWNjb3VudHNbMF0pXG5cdFx0Ly8gXHRcdFx0LnNlbmQoe1xuXHRcdC8vIFx0XHRcdFx0ZnJvbTogc2VydmVyQWNjb3VudHNbMF0sXG5cdFx0Ly8gXHRcdFx0XHRnYXM6IDQ2MDAwMDAsXG5cdFx0Ly8gXHRcdFx0XHRnYXNQcmljZTogMjIwMDAwMDAwMDBcblx0XHQvLyBcdFx0XHR9KTtcblx0XHQvLyBcdH0gY2F0Y2goZXJyKSB7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0Ly8gXHR9XG5cblx0XHQvLyBcdFJvdXRlci5wdXNoUm91dGUoYC9leGNoYW5nZXMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XG5cdFx0Ly8gfSBjYXRjaChlcnIpIHtcblx0XHQvLyBcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0Ly8gfVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGRlcG9zaXRMb2FkaW5nOiBmYWxzZSwgdmFsdWU6ICcnIH0pO1xuXHR9XG5cblx0aGFuZGxlQ2xpY2sgPSBhc3luYyAoZXZlbnQpID0+IHtcblx0XHRjb25zdCBlbGVtZW50SWQgPSBldmVudC50YXJnZXQuaWQ7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KHRoaXMucHJvcHMuYWRkcmVzcywgJ2NsaWVudCcpO1xuXG5cdFx0aWYoZWxlbWVudElkID09PSAnZmluYWxpemUnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZmluYWxpemVMb2FkaW5nOiB0cnVlIH0pO1xuXHRcdFx0dGhpcy5maW5hbGl6ZShhY2NvdW50c1swXSwgYWdlbnQpO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHdpdGhkcmF3TG9hZGluZzogZmFsc2UgfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBmaW5hbGl6ZUxvYWRpbmc6IHRydWUgfSk7XG5cdFx0XHR0aGlzLndpdGhkcmF3KGFjY291bnRzWzBdLCBhZ2VudCk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgd2l0aGRyYXdMb2FkaW5nOiBmYWxzZSB9KTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyBmaW5hbGl6ZShhY2NvdW50LCBhZ2VudCkge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBhZ2VudC5tZXRob2RzXG5cdFx0XHRcdC5maW5hbGl6ZUV4Y2hhbmdlKClcblx0XHRcdFx0LnNlbmQoe1xuXHRcdFx0XHRcdGZyb206IGFjY291bnRcblx0XHRcdFx0fSk7XG5cblx0XHRcdFJvdXRlci5wdXNoUm91dGUoYC9leGNoYW5nZXMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XG5cdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgd2l0aGRyYXcoYWNjb3VudCwgYWdlbnQpIHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgYWdlbnQubWV0aG9kc1xuXHRcdFx0XHQud2l0aGRyYXcoKVxuXHRcdFx0XHQuc2VuZCh7XG5cdFx0XHRcdFx0ZnJvbTogYWNjb3VudFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0Um91dGVyLnB1c2hSb3V0ZShgL2V4Y2hhbmdlcy8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcblx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXJQYXJ0aWNpcGFudHMoKSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLnBhcnRpY2lwYW50cy5tYXAoKHBhcnRpY2lwYW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aGVhZGVyOiBgVXNlciBhZGRyZXNzOiAke3BhcnRpY2lwYW50fWAsXG5cdFx0XHRcdG1ldGE6IHRoaXMucHJvcHMudG9rZW5zW2luZGV4XSxcblx0XHRcdFx0ZGVzY3JpcHRpb246IDxoNT5BbW91bnQgbGVmdCB0byBkZXBvc2l0OiB7dGhpcy5wcm9wcy5hbW91bnRMZWZ0VG9EZXBvc2l0W2luZGV4XX08L2g1Pixcblx0XHRcdFx0Zmx1aWQ6IHRydWVcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtc1BlclJvdz17Mn0gaXRlbXM9e2l0ZW1zfSAvPlxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8aDM+e3RoaXMucHJvcHMuYWRkcmVzc308L2gzPlxuXHRcdFx0XHQ8aDQ+VGltZSB0byBmaW5hbGl6ZToge3RoaXMucHJvcHMuZXhwaXJhdGlvbkRhdGV9PC9oND5cblxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm0uRmllbGQgc3R5bGU9e3t3aWR0aDogJzIwJSd9fT5cblx0XHRcdFx0XHRcdDxsYWJlbD5FbnRlciBhbW91bnQ6IDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXt0aGlzLnN0YXRlLnVzZXJUb2tlblN5bWJvbH1cblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ncmlnaHQnXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHsgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pIH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybS5GaWVsZD5cblxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnNXB4JywgbWFyZ2luQm90dG9tOiAnMTVweCd9fVxuXHRcdFx0XHRcdFx0cHJpbWFyeT17IXRoaXMuc3RhdGUuZGVwb3NpdE1hZGV9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5zdGF0ZS5kZXBvc2l0TWFkZX1cblx0XHRcdFx0XHRcdGxvYWRpbmc9e3RoaXMuc3RhdGUuZGVwb3NpdExvYWRpbmd9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0RGVwb3NpdFxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHRcdDxoci8+XG5cblx0XHRcdFx0PGRpdiBzdHlsZT17e21hcmdpblRvcDogJzI0cHgnfX0+e3RoaXMucmVuZGVyUGFydGljaXBhbnRzKCl9PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBzdHlsZT17e21hcmdpblRvcDogJzI0cHgnfX0+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aWQ9J2ZpbmFsaXplJ1xuXHRcdFx0XHRcdFx0cHJpbWFyeT17dGhpcy5wcm9wcy5maW5hbGl6YWJsZX1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXshdGhpcy5wcm9wcy5maW5hbGl6YWJsZX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG5cdFx0XHRcdFx0XHRsb2FkaW5nPXt0aGlzLnN0YXRlLmZpbmFsaXplTG9hZGluZ31cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRGaW5hbGl6ZVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlkPSd3aXRoZHJhdydcblx0XHRcdFx0XHRcdHByaW1hcnk9e3RoaXMucHJvcHMud2l0aGRyYXdhYmxlfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyF0aGlzLnByb3BzLndpdGhkcmF3YWJsZX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG5cdFx0XHRcdFx0XHRsb2FkaW5nPXt0aGlzLnN0YXRlLndpdGhkcmF3TG9hZGluZ31cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRXaXRoZHJhd1xuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZVNob3c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUFtREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQU5BO0FBQUE7QUFRQTtBQUNBO0FBREE7QUFSQTtBQUFBO0FBU0E7QUFDQTtBQURBO0FBVEE7QUFBQTtBQVVBO0FBQ0E7QUFEQTtBQVZBO0FBQ0E7QUFVQTtBQUNBO0FBWkE7QUFhQTtBQUNBO0FBREE7QUFiQTtBQUFBO0FBY0E7QUFDQTtBQURBO0FBZEE7QUFBQTtBQWVBO0FBQ0E7QUFEQTtBQWZBO0FBQUE7QUFDQTtBQWlCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQWhEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7OztBQWtEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaEVBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RUE7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQURBOzs7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUxBO0FBT0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSkE7O0FBQUE7QUFRQTtBQVJBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQUFBO0FBQUE7QUFDQTs7QUFRQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUxBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFMQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQWpNQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwQ0E7QUFDQTtBQXlOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9