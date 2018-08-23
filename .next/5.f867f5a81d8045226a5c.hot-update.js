webpackHotUpdate(5,{

/***/ 789:
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

var _Layout = __webpack_require__(1047);

var _Layout2 = _interopRequireDefault(_Layout);

var _agent = __webpack_require__(1060);

var _agent2 = _interopRequireDefault(_agent);

var _token = __webpack_require__(1353);

var _token2 = _interopRequireDefault(_token);

var _routes = __webpack_require__(1355);

var _web = __webpack_require__(558);

var _web2 = _interopRequireDefault(_web);

var _web3Server = __webpack_require__(572);

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
								_context.next = 22;
								return _web2.default.utils.toBN(18);

							case 22:
								decimals = _context.sent;
								_context.next = 25;
								return _web2.default.utils.toBN(10).pow(decimals);

							case 25:
								multiplier = _context.sent;
								_context.next = 28;
								return _web2.default.utils.toBN(_this.state.value);

							case 28:
								amount = _context.sent;
								value = amount * multiplier;

								_this.setState({ depositLoading: true });
								console.log(senderBalance, contractBalance);
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
								// 				gas: 5000000,
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

							case 33:
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
							lineNumber: 164
						}
					}, 'Amount left to deposit: ', _this3.props.amountLeftToDeposit[index]),
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 2, items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 169
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
					lineNumber: 174
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 175
				}
			}, this.props.address), _react2.default.createElement('h4', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 176
				}
			}, 'Time to finalize: ', this.props.expirationDate), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 178
				}
			}), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 179
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '20%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 180
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 181
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
					lineNumber: 182
				}
			})), _react2.default.createElement(_semanticUiReact.Button, {
				style: { marginTop: '5px', marginBottom: '15px' },
				primary: !this.state.depositMade,
				disabled: this.state.depositMade,
				loading: this.state.depositLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 190
				}
			}, 'Deposit')), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 199
				}
			}), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 201
				}
			}, this.renderParticipants()), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 203
				}
			}, _react2.default.createElement(_semanticUiReact.Button, {
				id: 'finalize',
				primary: this.props.finalizable,
				disabled: !this.props.finalizable,
				onClick: this.handleClick,
				loading: this.state.finalizeLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 204
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				id: 'withdraw',
				primary: this.props.withdrawable,
				disabled: !this.props.withdrawable,
				onClick: this.handleClick,
				loading: this.state.withdrawLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 213
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiQ2FyZCIsIklucHV0IiwiRm9ybSIsIkxheW91dCIsIkFnZW50IiwiVG9rZW4iLCJSb3V0ZXIiLCJ3ZWIzIiwic2VydmVyV2ViMyIsIkV4Y2hhbmdlU2hvdyIsInN0YXRlIiwidmFsdWUiLCJkZXBvc2l0TWFkZSIsInVzZXJUb2tlblN5bWJvbCIsImRlcG9zaXRMb2FkaW5nIiwiZmluYWxpemVMb2FkaW5nIiwid2l0aGRyYXdMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhbnRzIiwicHJvcHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYWRkcmVzcyIsImFnZW50IiwidG9rZW5BZGRyZXNzZXMiLCJpbmRleE9mIiwidG9rZW4iLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsInNlbmRlckJhbGFuY2UiLCJjb250cmFjdEJhbGFuY2UiLCJzZXJ2ZXJBY2NvdW50cyIsInV0aWxzIiwidG9CTiIsImRlY2ltYWxzIiwicG93IiwibXVsdGlwbGllciIsImFtb3VudCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwiZWxlbWVudElkIiwidGFyZ2V0IiwiaWQiLCJmaW5hbGl6ZSIsIndpdGhkcmF3Iiwic3ltYm9sIiwicGFyc2VJbnQiLCJhbW91bnRMZWZ0VG9EZXBvc2l0IiwiYWNjb3VudCIsImZpbmFsaXplRXhjaGFuZ2UiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIml0ZW1zIiwibWFwIiwicGFydGljaXBhbnQiLCJpbmRleCIsImhlYWRlciIsIm1ldGEiLCJ0b2tlbnMiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwiZXhwaXJhdGlvbkRhdGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclBhcnRpY2lwYW50cyIsImZpbmFsaXphYmxlIiwid2l0aGRyYXdhYmxlIiwicXVlcnkiLCJnZXRTdW1tYXJ5Iiwic3VtbWFyeSIsIm5vdyIsIkRhdGUiLCJkYXlzTGVmdCIsIk1hdGgiLCJmbG9vciIsImhvdXJzTGVmdCIsImZpcnN0VG9rZW5BZGRyIiwic2Vjb25kVG9rZW5BZGRyIiwiZmlyc3RUb2tlbiIsInNlY29uZFRva2VuIiwibmFtZSIsImZpcnN0VG9rZW5OYW1lIiwic2Vjb25kVG9rZW5OYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFNLEFBQU87O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVMsQUFBYzs7QUFDdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBR2pCOzs7Ozs7Ozs7Ozs7Ozs7c05BQ0wsQTtVQUFRLEFBQ0EsQUFDUDtnQkFGTyxBQUVNLEFBQ2I7b0JBSE8sQUFHVSxBQUNqQjttQkFKTyxBQUlTLEFBQ2hCO29CQUxPLEFBS1UsQUFDakI7b0JBTk8sQUFNVSxBO0FBTlYsQUFDUCxXLEFBbUREO3dGQUFXLGlCQUFBLEFBQU8sT0FBUDs0SEFBQTtrRUFBQTtlQUFBO3VDQUFBO1lBQ1Y7Y0FBQSxBQUFNLEFBRUE7O0FBSEksdUJBR1csTUFBQSxBQUFLLE1BSGhCLEFBR3NCO3dCQUh0QjtlQUlhLGNBQUEsQUFBSyxJQUpsQixBQUlhLEFBQVM7O1lBQTFCO0FBSkksNEJBQUE7d0JBQUE7ZUFLVSxxQkFBTSxNQUFBLEFBQUssTUFBWCxBQUFpQixTQUwzQixBQUtVLEFBQTBCOztZQUF4QztBQUxJLHlCQUFBO3dCQUFBO2VBTVUscUJBQU0sTUFBQSxBQUFLLE1BQUwsQUFBVyxlQUFlLGFBQUEsQUFBYSxRQUFRLFNBQXJELEFBQU0sQUFBMEIsQUFBcUIsQUFBUyxNQU54RSxBQU1VLEFBQW9FOztZQUFsRjtB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dkM7QSx1QkFBZSxRQUFBLEFBQVEsQUFDdkIsQTtBLHNCQUFjLFFBQUEsQUFBUSxBQUN0QixBO0EsOEJBQXNCLFEsQUFBQSxBQUFRLEFBRTlCO0EseUJBQWlCLFFBQUEsQSxBQUFRLEFBQ3pCO0EsMEJBQWtCLFFBQUEsQSxBQUFRLEFBQzFCO0EseUJBQWlCLENBQUEsQUFBQyxnQkFBRCxBQUFpQixBOztlQUVmLHFCLEFBQUEsQUFBTTs7WUFBekI7QTs7ZUFDb0IscUIsQUFBQSxBQUFNOztZQUExQjtBOztlQUN1QixXQUFBLEFBQVcsUUFBWCxBQUFtQixPQUFuQixBQUEwQixBOztZQUFqRDtBOztlQUN3QixZQUFBLEFBQVksUUFBWixBQUFvQixPLEFBQXBCLEFBQTJCOztZQUFuRDtBLG9DQUNBO0EsaUJBQVMsQ0FBQSxBQUFDLGdCQUFELEFBQWlCLEE7MENBRXpCLEVBQUUsU0FBRixTQUFXLGNBQVgsY0FBeUIsZ0JBQXpCLGdCQUF5QyxjQUF6QyxjQUF1RCxhQUF2RCxhQUFvRSxRQUFwRSxRQUE0RSxnQkFBNUUsZ0JBQTRGLHFCQUE1RixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkNrQixnQkFBTSxBLEFBeU5qQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21hbWFqaWMvRGVza3RvcC9Ub21hL0Rldi9vdGMtZXhjaGFuZ2UifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mODY3ZjVhODFkODA0NTIyNmE1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/MDQyNWU0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBJbnB1dCwgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEFnZW50IGZyb20gJy4uLy4uL2V0aGVyZXVtL2FnZW50JztcbmltcG9ydCBUb2tlbiBmcm9tICcuLi8uLi9ldGhlcmV1bS90b2tlbic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgc2VydmVyV2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzLXNlcnZlcic7XG5cblxuY2xhc3MgRXhjaGFuZ2VTaG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0dmFsdWU6ICcnLFxuXHRcdGRlcG9zaXRNYWRlOiBmYWxzZSxcblx0XHR1c2VyVG9rZW5TeW1ib2w6ICcnLFxuXHRcdGRlcG9zaXRMb2FkaW5nOiBmYWxzZSxcblx0XHRmaW5hbGl6ZUxvYWRpbmc6IGZhbHNlLFxuXHRcdHdpdGhkcmF3TG9hZGluZzogZmFsc2Vcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcblx0XHRjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KGFkZHJlc3MpO1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBhZ2VudC5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG5cdFx0Y29uc3QgcGFydGljaXBhbnRzID0gc3VtbWFyeVtcIl9wYXJ0aWNpcGFudHNcIl07XG5cblx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IGRheXNMZWZ0ID0gTWF0aC5mbG9vcigobmV3IERhdGUoc3VtbWFyeVtcIl9leHBpcmF0aW9uVGltZVwiXSAqIDEwMDApIC0gbm93KSAvICgxMDAwKjYwKjYwKjI0KSk7XG5cdFx0Y29uc3QgaG91cnNMZWZ0ID0gTWF0aC5mbG9vcigoKChuZXcgRGF0ZShzdW1tYXJ5W1wiX2V4cGlyYXRpb25UaW1lXCJdICogMTAwMCkgLSBub3cpIC8gKDEwMDAqNjAqNjAqMjQpKSAtIGRheXNMZWZ0KSAqIDI0KTtcblx0XHRjb25zdCBleHBpcmF0aW9uRGF0ZSA9IGAke2RheXNMZWZ0fSBkYXlzICYgJHtob3Vyc0xlZnR9IGhvdXJzYDtcblxuXHRcdGNvbnN0IHdpdGhkcmF3YWJsZSA9IHN1bW1hcnlbXCJfd2l0aGRyYXdhYmxlXCJdO1xuXHRcdGNvbnN0IGZpbmFsaXphYmxlID0gc3VtbWFyeVtcIl9maW5hbGl6YWJsZVwiXTtcblx0XHRjb25zdCBhbW91bnRMZWZ0VG9EZXBvc2l0ID0gc3VtbWFyeVtcIl9hbW91bnRzTGVmdFwiXTtcblxuXHRcdGNvbnN0IGZpcnN0VG9rZW5BZGRyID0gc3VtbWFyeVtcIl9maXJzdFRva2VuXCJdO1xuXHRcdGNvbnN0IHNlY29uZFRva2VuQWRkciA9IHN1bW1hcnlbXCJfc2Vjb25kVG9rZW5cIl07XG5cdFx0Y29uc3QgdG9rZW5BZGRyZXNzZXMgPSBbZmlyc3RUb2tlbkFkZHIsIHNlY29uZFRva2VuQWRkcl07XG5cblx0XHRjb25zdCBmaXJzdFRva2VuID0gYXdhaXQgVG9rZW4oZmlyc3RUb2tlbkFkZHIpO1xuXHRcdGNvbnN0IHNlY29uZFRva2VuID0gYXdhaXQgVG9rZW4oc2Vjb25kVG9rZW5BZGRyKTtcblx0XHRjb25zdCBmaXJzdFRva2VuTmFtZSA9IGF3YWl0IGZpcnN0VG9rZW4ubWV0aG9kcy5uYW1lKCkuY2FsbCgpO1xuXHRcdGNvbnN0IHNlY29uZFRva2VuTmFtZSA9IGF3YWl0IHNlY29uZFRva2VuLm1ldGhvZHMubmFtZSgpLmNhbGwoKTtcblx0XHRjb25zdCB0b2tlbnMgPSBbZmlyc3RUb2tlbk5hbWUsIHNlY29uZFRva2VuTmFtZV07XG5cblx0XHRyZXR1cm4geyBhZGRyZXNzLCBwYXJ0aWNpcGFudHMsIGV4cGlyYXRpb25EYXRlLCB3aXRoZHJhd2FibGUsIGZpbmFsaXphYmxlLCB0b2tlbnMsIHRva2VuQWRkcmVzc2VzLCBhbW91bnRMZWZ0VG9EZXBvc2l0IH1cblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KHRoaXMucHJvcHMuYWRkcmVzcywgJ2NsaWVudCcpO1xuXHRcdGNvbnN0IHRva2VuID0gYXdhaXQgVG9rZW4odGhpcy5wcm9wcy50b2tlbkFkZHJlc3Nlc1t0aGlzLnByb3BzLnBhcnRpY2lwYW50cy5pbmRleE9mKGFjY291bnRzWzBdKV0sICdjbGllbnQnKTtcblxuXHRcdGNvbnN0IHVzZXJUb2tlblN5bWJvbCA9IGF3YWl0IHRva2VuLm1ldGhvZHMuc3ltYm9sKCkuY2FsbCgpO1xuXHRcdGxldCBkZXBvc2l0TWFkZSA9IGZhbHNlO1xuXG5cdFx0aWYocGFyc2VJbnQodGhpcy5wcm9wcy5hbW91bnRMZWZ0VG9EZXBvc2l0W2FjY291bnRzWzBdXSkgPT09IDApIHtcblx0XHRcdGRlcG9zaXRNYWRlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgZGVwb3NpdE1hZGUsIHVzZXJUb2tlblN5bWJvbCB9KTtcblx0fVxuXG5cdG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IHBhcnRpY2lwYW50cyA9IHRoaXMucHJvcHMucGFydGljaXBhbnRzO1xuXHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KHRoaXMucHJvcHMuYWRkcmVzcywgJ3NlcnZlcicpO1xuXHRcdGNvbnN0IHRva2VuID0gYXdhaXQgVG9rZW4odGhpcy5wcm9wcy50b2tlbkFkZHJlc3Nlc1twYXJ0aWNpcGFudHMuaW5kZXhPZihhY2NvdW50c1swXSldLCAnY2xpZW50Jyk7XG5cblx0XHRjb25zdCBzZW5kZXJCYWxhbmNlID0gYXdhaXQgdG9rZW4ubWV0aG9kcy5iYWxhbmNlT2YoYWNjb3VudHNbMF0pLmNhbGwoKTtcblx0XHRjb25zdCBjb250cmFjdEJhbGFuY2UgPSBhd2FpdCB0b2tlbi5tZXRob2RzLmJhbGFuY2VPZih0aGlzLnByb3BzLmFkZHJlc3MpLmNhbGwoKTtcblx0XHRjb25zdCBzZXJ2ZXJBY2NvdW50cyA9IGF3YWl0IHNlcnZlcldlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cblx0XHRjb25zdCBkZWNpbWFscyA9IGF3YWl0IHdlYjMudXRpbHMudG9CTigxOCk7XG5cdFx0Y29uc3QgbXVsdGlwbGllciA9IGF3YWl0IHdlYjMudXRpbHMudG9CTigxMCkucG93KGRlY2ltYWxzKTtcblx0XHRjb25zdCBhbW91bnQgPSBhd2FpdCB3ZWIzLnV0aWxzLnRvQk4odGhpcy5zdGF0ZS52YWx1ZSk7XG5cdFx0Y29uc3QgdmFsdWUgPSBhbW91bnQgKiBtdWx0aXBsaWVyO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGRlcG9zaXRMb2FkaW5nOiB0cnVlIH0pO1xuXHRcdGNvbnNvbGUubG9nKHNlbmRlckJhbGFuY2UsIGNvbnRyYWN0QmFsYW5jZSlcblx0XHQvLyB0cnkge1xuXHRcdC8vIFx0YXdhaXQgdG9rZW4ubWV0aG9kc1xuXHRcdC8vIFx0XHQudHJhbnNmZXIodGhpcy5wcm9wcy5hZGRyZXNzLCB2YWx1ZSlcblx0XHQvLyBcdFx0LnNlbmQoe1xuXHRcdC8vIFx0XHRcdGZyb206IGFjY291bnRzWzBdXG5cdFx0Ly8gXHRcdH0pO1xuXG5cdFx0Ly8gXHR0cnkge1xuXHRcdC8vIFx0XHRhd2FpdCBhZ2VudC5tZXRob2RzXG5cdFx0Ly8gXHRcdFx0LmRlcG9zaXRTdWNjZXNzZnVsbCh2YWx1ZSxcblx0XHQvLyBcdFx0XHRcdFx0XHRcdFx0c2VuZGVyQmFsYW5jZSxcblx0XHQvLyBcdFx0XHRcdFx0XHRcdFx0Y29udHJhY3RCYWxhbmNlLFxuXHRcdC8vIFx0XHRcdFx0XHRcdFx0XHRhY2NvdW50c1swXSlcblx0XHQvLyBcdFx0XHQuc2VuZCh7XG5cdFx0Ly8gXHRcdFx0XHRmcm9tOiBzZXJ2ZXJBY2NvdW50c1swXSxcblx0XHQvLyBcdFx0XHRcdGdhczogNTAwMDAwMCxcblx0XHQvLyBcdFx0XHRcdGdhc1ByaWNlOiAyMjAwMDAwMDAwMFxuXHRcdC8vIFx0XHRcdH0pO1xuXHRcdC8vIFx0fSBjYXRjaChlcnIpIHtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHQvLyBcdH1cblxuXHRcdC8vIFx0Um91dGVyLnB1c2hSb3V0ZShgL2V4Y2hhbmdlcy8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcblx0XHQvLyB9IGNhdGNoKGVycikge1xuXHRcdC8vIFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHQvLyB9XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgZGVwb3NpdExvYWRpbmc6IGZhbHNlLCB2YWx1ZTogJycgfSk7XG5cdH1cblxuXHRoYW5kbGVDbGljayA9IGFzeW5jIChldmVudCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnRJZCA9IGV2ZW50LnRhcmdldC5pZDtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdGNvbnN0IGFnZW50ID0gYXdhaXQgQWdlbnQodGhpcy5wcm9wcy5hZGRyZXNzLCAnY2xpZW50Jyk7XG5cblx0XHRpZihlbGVtZW50SWQgPT09ICdmaW5hbGl6ZScpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBmaW5hbGl6ZUxvYWRpbmc6IHRydWUgfSk7XG5cdFx0XHR0aGlzLmZpbmFsaXplKGFjY291bnRzWzBdLCBhZ2VudCk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgd2l0aGRyYXdMb2FkaW5nOiBmYWxzZSB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGZpbmFsaXplTG9hZGluZzogdHJ1ZSB9KTtcblx0XHRcdHRoaXMud2l0aGRyYXcoYWNjb3VudHNbMF0sIGFnZW50KTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyB3aXRoZHJhd0xvYWRpbmc6IGZhbHNlIH0pO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGZpbmFsaXplKGFjY291bnQsIGFnZW50KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IGFnZW50Lm1ldGhvZHNcblx0XHRcdFx0LmZpbmFsaXplRXhjaGFuZ2UoKVxuXHRcdFx0XHQuc2VuZCh7XG5cdFx0XHRcdFx0ZnJvbTogYWNjb3VudFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0Um91dGVyLnB1c2hSb3V0ZShgL2V4Y2hhbmdlcy8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcblx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyB3aXRoZHJhdyhhY2NvdW50LCBhZ2VudCkge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBhZ2VudC5tZXRob2RzXG5cdFx0XHRcdC53aXRoZHJhdygpXG5cdFx0XHRcdC5zZW5kKHtcblx0XHRcdFx0XHRmcm9tOiBhY2NvdW50XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRSb3V0ZXIucHVzaFJvdXRlKGAvZXhjaGFuZ2VzLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApO1xuXHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlclBhcnRpY2lwYW50cygpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMucGFydGljaXBhbnRzLm1hcCgocGFydGljaXBhbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRoZWFkZXI6IGBVc2VyIGFkZHJlc3M6ICR7cGFydGljaXBhbnR9YCxcblx0XHRcdFx0bWV0YTogdGhpcy5wcm9wcy50b2tlbnNbaW5kZXhdLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogPGg1PkFtb3VudCBsZWZ0IHRvIGRlcG9zaXQ6IHt0aGlzLnByb3BzLmFtb3VudExlZnRUb0RlcG9zaXRbaW5kZXhdfTwvaDU+LFxuXHRcdFx0XHRmbHVpZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zUGVyUm93PXsyfSBpdGVtcz17aXRlbXN9IC8+XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxoMz57dGhpcy5wcm9wcy5hZGRyZXNzfTwvaDM+XG5cdFx0XHRcdDxoND5UaW1lIHRvIGZpbmFsaXplOiB7dGhpcy5wcm9wcy5leHBpcmF0aW9uRGF0ZX08L2g0PlxuXG5cdFx0XHRcdDxoci8+XG5cdFx0XHRcdDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cblx0XHRcdFx0XHQ8Rm9ybS5GaWVsZCBzdHlsZT17e3dpZHRoOiAnMjAlJ319PlxuXHRcdFx0XHRcdFx0PGxhYmVsPkVudGVyIGFtb3VudDogPC9sYWJlbD5cblx0XHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cblx0XHRcdFx0XHRcdFx0bGFiZWw9e3RoaXMuc3RhdGUudXNlclRva2VuU3ltYm9sfVxuXHRcdFx0XHRcdFx0XHRsYWJlbFBvc2l0aW9uPSdyaWdodCdcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4geyB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSkgfX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Gb3JtLkZpZWxkPlxuXG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0c3R5bGU9e3ttYXJnaW5Ub3A6ICc1cHgnLCBtYXJnaW5Cb3R0b206ICcxNXB4J319XG5cdFx0XHRcdFx0XHRwcmltYXJ5PXshdGhpcy5zdGF0ZS5kZXBvc2l0TWFkZX1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnN0YXRlLmRlcG9zaXRNYWRlfVxuXHRcdFx0XHRcdFx0bG9hZGluZz17dGhpcy5zdGF0ZS5kZXBvc2l0TG9hZGluZ31cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHREZXBvc2l0XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdFx0PGhyLz5cblxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMjRweCd9fT57dGhpcy5yZW5kZXJQYXJ0aWNpcGFudHMoKX08L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAnMjRweCd9fT5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRpZD0nZmluYWxpemUnXG5cdFx0XHRcdFx0XHRwcmltYXJ5PXt0aGlzLnByb3BzLmZpbmFsaXphYmxlfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmZpbmFsaXphYmxlfVxuXHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cblx0XHRcdFx0XHRcdGxvYWRpbmc9e3RoaXMuc3RhdGUuZmluYWxpemVMb2FkaW5nfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdEZpbmFsaXplXG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0aWQ9J3dpdGhkcmF3J1xuXHRcdFx0XHRcdFx0cHJpbWFyeT17dGhpcy5wcm9wcy53aXRoZHJhd2FibGV9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17IXRoaXMucHJvcHMud2l0aGRyYXdhYmxlfVxuXHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cblx0XHRcdFx0XHRcdGxvYWRpbmc9e3RoaXMuc3RhdGUud2l0aGRyYXdMb2FkaW5nfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFdpdGhkcmF3XG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4Y2hhbmdlU2hvdztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9leGNoYW5nZXMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFMQTtBQW1EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFMQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBTkE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQVJBO0FBQUE7QUFTQTtBQUNBO0FBREE7QUFUQTtBQUFBO0FBVUE7QUFDQTtBQURBO0FBVkE7QUFBQTtBQVlBO0FBQ0E7QUFEQTtBQVpBO0FBQUE7QUFhQTtBQUNBO0FBREE7QUFiQTtBQUFBO0FBY0E7QUFDQTtBQURBO0FBZEE7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBL0NBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7O0FBaURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFkQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEvREE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7OztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVFQTs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQURBOzs7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBOztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBREE7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQURBOztBQUdBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBTEE7QUFPQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFKQTs7QUFBQTtBQVFBO0FBUkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBQUE7QUFBQTtBQUNBOztBQVFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUxBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FBaE1BO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXBDQTtBQUNBO0FBd05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=