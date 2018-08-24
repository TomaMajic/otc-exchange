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
								_context.next = 22;
								return _this.formatValue(_this.state.value);

							case 22:
								value = _context.sent;

								_this.setState({ depositLoading: true });

								_context.prev = 24;
								_context.next = 27;
								return token.methods.transfer(_this.props.address, value).send({
									from: accounts[0]
								});

							case 27:
								_context.prev = 27;
								_context.next = 30;
								return agent.methods.depositSuccessfull(value, senderBalance, contractBalance, accounts[0]).send({
									from: serverAccounts[0],
									gas: 4600000,
									gasPrice: 22000000000
								});

							case 30:
								_context.next = 35;
								break;

							case 32:
								_context.prev = 32;
								_context.t0 = _context['catch'](27);

								console.log(_context.t0);

							case 35:

								_routes.Router.pushRoute('/exchanges/' + _this.props.address);
								_context.next = 41;
								break;

							case 38:
								_context.prev = 38;
								_context.t1 = _context['catch'](24);

								console.log(_context.t1);

							case 41:

								_this.setState({ depositLoading: false, value: '' });

							case 42:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[24, 38], [27, 32]]);
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
									_this.finalize(accounts[0], agent);
								} else {
									_this.withdraw(accounts[0], agent);
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

								console.log(accounts[0]);
								_context3.next = 6;
								return (0, _agent2.default)(this.props.address, 'client');

							case 6:
								agent = _context3.sent;
								_context3.next = 9;
								return (0, _token2.default)(this.props.tokenAddresses[this.props.participants.indexOf(accounts[0])], 'client');

							case 9:
								token = _context3.sent;

								console.log(this.props.tokenAddresses[this.props.participants.indexOf(accounts[0])]);
								_context3.next = 13;
								return token.methods.symbol().call();

							case 13:
								userTokenSymbol = _context3.sent;
								depositMade = false;

								if (parseInt(this.props.amountLeftToDeposit[this.props.participants.indexOf(accounts[0])]) === 0) {
									depositMade = true;
								}

								this.setState({ depositMade: depositMade, userTokenSymbol: userTokenSymbol });

							case 17:
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
								this.setState({ finalizeLoading: true });

								_context4.prev = 1;
								_context4.next = 4;
								return agent.methods.finalizeExchange().send({
									from: account
								});

							case 4:

								_routes.Router.pushRoute('/exchanges/' + this.props.address);
								_context4.next = 10;
								break;

							case 7:
								_context4.prev = 7;
								_context4.t0 = _context4['catch'](1);

								console.log(_context4.t0);

							case 10:

								this.setState({ finalizeLoading: false });

							case 11:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this, [[1, 7]]);
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
								this.setState({ withdrawLoading: true });

								_context5.prev = 1;
								_context5.next = 4;
								return agent.methods.withdraw().send({
									from: account
								});

							case 4:

								_routes.Router.pushRoute('/exchanges/' + this.props.address);
								_context5.next = 10;
								break;

							case 7:
								_context5.prev = 7;
								_context5.t0 = _context5['catch'](1);

								console.log(_context5.t0);

							case 10:

								this.setState({ withdrawLoading: false });

							case 11:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this, [[1, 7]]);
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
					}, 'Amount left to deposit: ', _this3.props.amountLeftToDeposit[index] / Math.pow(10, 18)),
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
					lineNumber: 183
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 184
				}
			}, this.props.address), _react2.default.createElement('h4', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 185
				}
			}, 'Time to finalize: ', this.props.expirationDate), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 187
				}
			}), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 188
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '20%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 189
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 190
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
					lineNumber: 191
				}
			})), _react2.default.createElement(_semanticUiReact.Button, {
				style: { marginTop: '5px', marginBottom: '15px' },
				primary: !this.state.depositMade,
				disabled: this.state.depositMade,
				loading: this.state.depositLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 199
				}
			}, 'Deposit')), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 208
				}
			}), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 210
				}
			}, this.renderParticipants()), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 212
				}
			}, _react2.default.createElement(_semanticUiReact.Button, {
				id: 'finalize',
				primary: this.props.finalizable,
				disabled: !this.props.finalizable,
				onClick: this.handleClick,
				loading: this.state.finalizeLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 213
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				id: 'withdraw',
				primary: this.props.withdrawable,
				disabled: !this.props.withdrawable,
				onClick: this.handleClick,
				loading: this.state.withdrawLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 222
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
								firstTokenAddr = summary["_firstToken"];
								secondTokenAddr = summary["_secondToken"];
								tokenAddresses = [firstTokenAddr, secondTokenAddr];
								_context7.next = 20;
								return (0, _token2.default)(firstTokenAddr);

							case 20:
								firstToken = _context7.sent;
								_context7.next = 23;
								return (0, _token2.default)(secondTokenAddr);

							case 23:
								secondToken = _context7.sent;
								_context7.next = 26;
								return firstToken.methods.name().call();

							case 26:
								firstTokenName = _context7.sent;
								_context7.next = 29;
								return secondToken.methods.name().call();

							case 29:
								secondTokenName = _context7.sent;
								tokens = [firstTokenName, secondTokenName];
								return _context7.abrupt('return', { address: address, participants: participants, expirationDate: expirationDate, withdrawable: withdrawable, finalizable: finalizable, tokens: tokens, tokenAddresses: tokenAddresses, amountLeftToDeposit: amountLeftToDeposit });

							case 32:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiQ2FyZCIsIklucHV0IiwiRm9ybSIsIkxheW91dCIsIkFnZW50IiwiVG9rZW4iLCJSb3V0ZXIiLCJ3ZWIzIiwic2VydmVyV2ViMyIsIkV4Y2hhbmdlU2hvdyIsInN0YXRlIiwidmFsdWUiLCJkZXBvc2l0TWFkZSIsInVzZXJUb2tlblN5bWJvbCIsImRlcG9zaXRMb2FkaW5nIiwiZmluYWxpemVMb2FkaW5nIiwid2l0aGRyYXdMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhbnRzIiwicHJvcHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYWRkcmVzcyIsImFnZW50IiwidG9rZW5BZGRyZXNzZXMiLCJpbmRleE9mIiwidG9rZW4iLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsInNlbmRlckJhbGFuY2UiLCJjb250cmFjdEJhbGFuY2UiLCJzZXJ2ZXJBY2NvdW50cyIsImZvcm1hdFZhbHVlIiwic2V0U3RhdGUiLCJ0cmFuc2ZlciIsInNlbmQiLCJmcm9tIiwiZGVwb3NpdFN1Y2Nlc3NmdWxsIiwiZ2FzIiwiZ2FzUHJpY2UiLCJjb25zb2xlIiwibG9nIiwicHVzaFJvdXRlIiwiaGFuZGxlQ2xpY2siLCJlbGVtZW50SWQiLCJ0YXJnZXQiLCJpZCIsImZpbmFsaXplIiwid2l0aGRyYXciLCJzeW1ib2wiLCJwYXJzZUludCIsImFtb3VudExlZnRUb0RlcG9zaXQiLCJhY2NvdW50IiwiZmluYWxpemVFeGNoYW5nZSIsIml0ZW1zIiwibWFwIiwicGFydGljaXBhbnQiLCJpbmRleCIsImhlYWRlciIsIm1ldGEiLCJ0b2tlbnMiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwidmFsIiwidXRpbHMiLCJ0b0JOIiwiZGVjaW1hbHMiLCJwb3ciLCJtdWx0aXBsaWVyIiwiYW1vdW50IiwiZXhwaXJhdGlvbkRhdGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclBhcnRpY2lwYW50cyIsImZpbmFsaXphYmxlIiwid2l0aGRyYXdhYmxlIiwicXVlcnkiLCJnZXRTdW1tYXJ5Iiwic3VtbWFyeSIsIm5vdyIsIkRhdGUiLCJkYXlzTGVmdCIsIk1hdGgiLCJmbG9vciIsImhvdXJzTGVmdCIsImZpcnN0VG9rZW5BZGRyIiwic2Vjb25kVG9rZW5BZGRyIiwiZmlyc3RUb2tlbiIsInNlY29uZFRva2VuIiwibmFtZSIsImZpcnN0VG9rZW5OYW1lIiwic2Vjb25kVG9rZW5OYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFNLEFBQU87O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVMsQUFBYzs7QUFDdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBR2pCOzs7Ozs7Ozs7Ozs7Ozs7c05BQ0wsQTtVQUFRLEFBQ0EsQUFDUDtnQkFGTyxBQUVNLEFBQ2I7b0JBSE8sQUFHVSxBQUNqQjttQkFKTyxBQUlTLEFBQ2hCO29CQUxPLEFBS1UsQUFDakI7b0JBTk8sQUFNVSxBO0FBTlYsQUFDUCxXLEFBb0REO3dGQUFXLGlCQUFBLEFBQU8sT0FBUDs4RkFBQTtrRUFBQTtlQUFBO3VDQUFBO1lBQ1Y7Y0FBQSxBQUFNLEFBRUE7O0FBSEksdUJBR1csTUFBQSxBQUFLLE1BSGhCLEFBR3NCO3dCQUh0QjtlQUlhLGNBQUEsQUFBSyxJQUpsQixBQUlhLEFBQVM7O1lBQTFCO0FBSkksNEJBQUE7d0JBQUE7ZUFLVSxxQkFBTSxNQUFBLEFBQUssTUFBWCxBQUFpQixTQUwzQixBQUtVLEFBQTBCOztZQUF4QztBQUxJLHlCQUFBO3dCQUFBO2VBTVUscUJBQU0sTUFBQSxBQUFLLE1BQUwsQUFBVyxlQUFl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cUIsQUFDcEI7Y0FBVSxDQUFDLEtBQUEsQUFBSyxNQUhqQixBQUd1QixBQUN0QjthQUFTLEtBSlYsQUFJZSxBQUNkO2FBQVMsS0FBQSxBQUFLLE1BTGYsQUFLcUI7O2VBTHJCO2lCQUFBO0FBQUE7QUFDQyxNQXpDSixBQUNDLEFBNkJDLEFBVUMsQUFZSDs7Ozs7MEdBck40QixBOzs7OztZQUN0QjtBLGtCQUFVLE1BQUEsQUFBTSxNQUFNLEE7O2VBQ1IscUJBQUEsQUFBTSxBOztZQUFwQjtBOztlQUNnQixNQUFBLEFBQU0sUUFBTixBQUFjLGFBQWQsQSxBQUEyQjs7WUFBM0M7QSw0QkFDQTtBLHVCQUFlLFFBQUEsQUFBUSxBQUV2QixBO0EsY0FBTSxJQUFBLEFBQUksQSxBQUNWO0EsbUJBQVcsS0FBQSxBQUFLLE1BQU0sQ0FBQyxJQUFBLEFBQUksS0FBSyxRQUFBLEFBQVEscUJBQWpCLEFBQXNDLFFBQXZDLEFBQStDLFFBQVEsT0FBQSxBQUFLLEtBQUwsQUFBUSxLQUExRSxBLEFBQVcsQUFBa0UsQUFDeEY7QSxvQkFBWSxLQUFBLEFBQUssTUFBTSxDQUFFLENBQUMsSUFBQSxBQUFJLEtBQUssUUFBQSxBQUFRLHFCQUFqQixBQUFzQyxRQUF2QyxBQUErQyxRQUFRLE9BQUEsQUFBSyxLQUFMLEFBQVEsS0FBaEUsQUFBQyxBQUFrRSxNQUFwRSxBQUEyRSxZQUF0RixBLEFBQWtHLEFBQzlHO0EseUIsQUFBb0Isd0IsQUFBbUIsWUFFdkM7QSx1QkFBZSxRQUFRLEEsQUFBUixBQUNmO0Esc0JBQWMsUSxBQUFBLEFBQVEsQUFDdEI7QSw4QkFBc0IsUUFBQSxBLEFBQVEsQUFFOUI7QSx5QkFBaUIsUUFBQSxBQUFRLEFBQ3pCLEE7QSwwQkFBa0IsUUFBQSxBQUFRLEEsQUFDMUI7QSx5QkFBaUIsQ0FBQSxBQUFDLGdCLEFBQUQsQUFBaUI7O2VBRWYscUJBQUEsQUFBTSxBOztZQUF6QjtBOztlQUNvQixxQkFBQSxBLEFBQU07O1lBQTFCO0E7O2VBQ3VCLFdBQUEsQUFBVyxRQUFYLEFBQW1CLE9BQW5CLEEsQUFBMEI7O1lBQWpEO0E7O2VBQ3dCLFlBQUEsQUFBWSxRQUFaLEFBQW9CLE8sQUFBcEIsQUFBMkI7O1lBQW5EO0Esb0NBQ0E7QSxpQkFBUyxDQUFBLEFBQUMsZ0JBQUQsQUFBaUIsQTswQ0FFekIsRUFBRSxTQUFGLFNBQVcsY0FBWCxjQUF5QixnQkFBekIsZ0JBQXlDLGNBQXpDLGNBQXVELGFBQXZELGFBQW9FLFFBQXBFLFFBQTRFLGdCQUE1RSxnQkFBNEYscUJBQTVGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuQ2tCLGdCQUFNLEEsQUFrT2pDOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbWFtYWppYy9EZXNrdG9wL1RvbWEvRGV2L290Yy1leGNoYW5nZSJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yZGZlNjQyMWE1MGEwODQxMjU2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/ZTYzNGRiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBJbnB1dCwgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEFnZW50IGZyb20gJy4uLy4uL2V0aGVyZXVtL2FnZW50JztcbmltcG9ydCBUb2tlbiBmcm9tICcuLi8uLi9ldGhlcmV1bS90b2tlbic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgc2VydmVyV2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzLXNlcnZlcic7XG5cblxuY2xhc3MgRXhjaGFuZ2VTaG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0dmFsdWU6ICcnLFxuXHRcdGRlcG9zaXRNYWRlOiBmYWxzZSxcblx0XHR1c2VyVG9rZW5TeW1ib2w6ICcnLFxuXHRcdGRlcG9zaXRMb2FkaW5nOiBmYWxzZSxcblx0XHRmaW5hbGl6ZUxvYWRpbmc6IGZhbHNlLFxuXHRcdHdpdGhkcmF3TG9hZGluZzogZmFsc2Vcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcblx0XHRjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KGFkZHJlc3MpO1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBhZ2VudC5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG5cdFx0Y29uc3QgcGFydGljaXBhbnRzID0gc3VtbWFyeVtcIl9wYXJ0aWNpcGFudHNcIl07XG5cblx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IGRheXNMZWZ0ID0gTWF0aC5mbG9vcigobmV3IERhdGUoc3VtbWFyeVtcIl9leHBpcmF0aW9uVGltZVwiXSAqIDEwMDApIC0gbm93KSAvICgxMDAwKjYwKjYwKjI0KSk7XG5cdFx0Y29uc3QgaG91cnNMZWZ0ID0gTWF0aC5mbG9vcigoKChuZXcgRGF0ZShzdW1tYXJ5W1wiX2V4cGlyYXRpb25UaW1lXCJdICogMTAwMCkgLSBub3cpIC8gKDEwMDAqNjAqNjAqMjQpKSAtIGRheXNMZWZ0KSAqIDI0KTtcblx0XHRjb25zdCBleHBpcmF0aW9uRGF0ZSA9IGAke2RheXNMZWZ0fSBkYXlzICYgJHtob3Vyc0xlZnR9IGhvdXJzYDtcblxuXHRcdGNvbnN0IHdpdGhkcmF3YWJsZSA9IHN1bW1hcnlbXCJfd2l0aGRyYXdhYmxlXCJdO1xuXHRcdGNvbnN0IGZpbmFsaXphYmxlID0gc3VtbWFyeVtcIl9maW5hbGl6YWJsZVwiXTtcblx0XHRjb25zdCBhbW91bnRMZWZ0VG9EZXBvc2l0ID0gc3VtbWFyeVtcIl9hbW91bnRzTGVmdFwiXTtcblxuXHRcdGNvbnN0IGZpcnN0VG9rZW5BZGRyID0gc3VtbWFyeVtcIl9maXJzdFRva2VuXCJdO1xuXHRcdGNvbnN0IHNlY29uZFRva2VuQWRkciA9IHN1bW1hcnlbXCJfc2Vjb25kVG9rZW5cIl07XG5cdFx0Y29uc3QgdG9rZW5BZGRyZXNzZXMgPSBbZmlyc3RUb2tlbkFkZHIsIHNlY29uZFRva2VuQWRkcl07XG5cblx0XHRjb25zdCBmaXJzdFRva2VuID0gYXdhaXQgVG9rZW4oZmlyc3RUb2tlbkFkZHIpO1xuXHRcdGNvbnN0IHNlY29uZFRva2VuID0gYXdhaXQgVG9rZW4oc2Vjb25kVG9rZW5BZGRyKTtcblx0XHRjb25zdCBmaXJzdFRva2VuTmFtZSA9IGF3YWl0IGZpcnN0VG9rZW4ubWV0aG9kcy5uYW1lKCkuY2FsbCgpO1xuXHRcdGNvbnN0IHNlY29uZFRva2VuTmFtZSA9IGF3YWl0IHNlY29uZFRva2VuLm1ldGhvZHMubmFtZSgpLmNhbGwoKTtcblx0XHRjb25zdCB0b2tlbnMgPSBbZmlyc3RUb2tlbk5hbWUsIHNlY29uZFRva2VuTmFtZV07XG5cblx0XHRyZXR1cm4geyBhZGRyZXNzLCBwYXJ0aWNpcGFudHMsIGV4cGlyYXRpb25EYXRlLCB3aXRoZHJhd2FibGUsIGZpbmFsaXphYmxlLCB0b2tlbnMsIHRva2VuQWRkcmVzc2VzLCBhbW91bnRMZWZ0VG9EZXBvc2l0IH1cblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHRjb25zb2xlLmxvZyhhY2NvdW50c1swXSlcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KHRoaXMucHJvcHMuYWRkcmVzcywgJ2NsaWVudCcpO1xuXHRcdGNvbnN0IHRva2VuID0gYXdhaXQgVG9rZW4odGhpcy5wcm9wcy50b2tlbkFkZHJlc3Nlc1t0aGlzLnByb3BzLnBhcnRpY2lwYW50cy5pbmRleE9mKGFjY291bnRzWzBdKV0sICdjbGllbnQnKTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzLnRva2VuQWRkcmVzc2VzW3RoaXMucHJvcHMucGFydGljaXBhbnRzLmluZGV4T2YoYWNjb3VudHNbMF0pXSlcblx0XHRjb25zdCB1c2VyVG9rZW5TeW1ib2wgPSBhd2FpdCB0b2tlbi5tZXRob2RzLnN5bWJvbCgpLmNhbGwoKTtcblx0XHRsZXQgZGVwb3NpdE1hZGUgPSBmYWxzZTtcblxuXHRcdGlmKHBhcnNlSW50KHRoaXMucHJvcHMuYW1vdW50TGVmdFRvRGVwb3NpdFt0aGlzLnByb3BzLnBhcnRpY2lwYW50cy5pbmRleE9mKGFjY291bnRzWzBdKV0pID09PSAwKSB7XG5cdFx0XHRkZXBvc2l0TWFkZSA9IHRydWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGRlcG9zaXRNYWRlLCB1c2VyVG9rZW5TeW1ib2wgfSk7XG5cdH1cblxuXHRvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBwYXJ0aWNpcGFudHMgPSB0aGlzLnByb3BzLnBhcnRpY2lwYW50cztcblx0XHRjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cdFx0Y29uc3QgYWdlbnQgPSBhd2FpdCBBZ2VudCh0aGlzLnByb3BzLmFkZHJlc3MsICdzZXJ2ZXInKTtcblx0XHRjb25zdCB0b2tlbiA9IGF3YWl0IFRva2VuKHRoaXMucHJvcHMudG9rZW5BZGRyZXNzZXNbcGFydGljaXBhbnRzLmluZGV4T2YoYWNjb3VudHNbMF0pXSwgJ2NsaWVudCcpO1xuXG5cdFx0Y29uc3Qgc2VuZGVyQmFsYW5jZSA9IGF3YWl0IHRva2VuLm1ldGhvZHMuYmFsYW5jZU9mKGFjY291bnRzWzBdKS5jYWxsKCk7XG5cdFx0Y29uc3QgY29udHJhY3RCYWxhbmNlID0gYXdhaXQgdG9rZW4ubWV0aG9kcy5iYWxhbmNlT2YodGhpcy5wcm9wcy5hZGRyZXNzKS5jYWxsKCk7XG5cdFx0Y29uc3Qgc2VydmVyQWNjb3VudHMgPSBhd2FpdCBzZXJ2ZXJXZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdGNvbnN0IHZhbHVlID0gYXdhaXQgdGhpcy5mb3JtYXRWYWx1ZSh0aGlzLnN0YXRlLnZhbHVlKTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoeyBkZXBvc2l0TG9hZGluZzogdHJ1ZSB9KTtcblxuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCB0b2tlbi5tZXRob2RzXG5cdFx0XHRcdC50cmFuc2Zlcih0aGlzLnByb3BzLmFkZHJlc3MsIHZhbHVlKVxuXHRcdFx0XHQuc2VuZCh7XG5cdFx0XHRcdFx0ZnJvbTogYWNjb3VudHNbMF1cblx0XHRcdFx0fSk7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IGFnZW50Lm1ldGhvZHNcblx0XHRcdFx0XHQuZGVwb3NpdFN1Y2Nlc3NmdWxsKHZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZW5kZXJCYWxhbmNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250cmFjdEJhbGFuY2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjY291bnRzWzBdKVxuXHRcdFx0XHRcdC5zZW5kKHtcblx0XHRcdFx0XHRcdGZyb206IHNlcnZlckFjY291bnRzWzBdLFxuXHRcdFx0XHRcdFx0Z2FzOiA0NjAwMDAwLFxuXHRcdFx0XHRcdFx0Z2FzUHJpY2U6IDIyMDAwMDAwMDAwXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdFx0fVxuXG5cdFx0XHRSb3V0ZXIucHVzaFJvdXRlKGAvZXhjaGFuZ2VzLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApO1xuXHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoeyBkZXBvc2l0TG9hZGluZzogZmFsc2UsIHZhbHVlOiAnJyB9KTtcblx0fVxuXG5cdGhhbmRsZUNsaWNrID0gYXN5bmMgKGV2ZW50KSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudElkID0gZXZlbnQudGFyZ2V0LmlkO1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cdFx0Y29uc3QgYWdlbnQgPSBhd2FpdCBBZ2VudCh0aGlzLnByb3BzLmFkZHJlc3MsICdjbGllbnQnKTtcblxuXHRcdGlmKGVsZW1lbnRJZCA9PT0gJ2ZpbmFsaXplJykge1xuXHRcdFx0dGhpcy5maW5hbGl6ZShhY2NvdW50c1swXSwgYWdlbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLndpdGhkcmF3KGFjY291bnRzWzBdLCBhZ2VudCk7XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgZmluYWxpemUoYWNjb3VudCwgYWdlbnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgZmluYWxpemVMb2FkaW5nOiB0cnVlIH0pO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IGFnZW50Lm1ldGhvZHNcblx0XHRcdFx0LmZpbmFsaXplRXhjaGFuZ2UoKVxuXHRcdFx0XHQuc2VuZCh7XG5cdFx0XHRcdFx0ZnJvbTogYWNjb3VudFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0Um91dGVyLnB1c2hSb3V0ZShgL2V4Y2hhbmdlcy8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcblx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgZmluYWxpemVMb2FkaW5nOiBmYWxzZSB9KTtcblx0fVxuXG5cdGFzeW5jIHdpdGhkcmF3KGFjY291bnQsIGFnZW50KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHdpdGhkcmF3TG9hZGluZzogdHJ1ZSB9KTtcblxuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBhZ2VudC5tZXRob2RzXG5cdFx0XHRcdC53aXRoZHJhdygpXG5cdFx0XHRcdC5zZW5kKHtcblx0XHRcdFx0XHRmcm9tOiBhY2NvdW50XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRSb3V0ZXIucHVzaFJvdXRlKGAvZXhjaGFuZ2VzLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApO1xuXHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoeyB3aXRoZHJhd0xvYWRpbmc6IGZhbHNlIH0pO1xuXHR9XG5cblx0cmVuZGVyUGFydGljaXBhbnRzKCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5wYXJ0aWNpcGFudHMubWFwKChwYXJ0aWNpcGFudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGhlYWRlcjogYFVzZXIgYWRkcmVzczogJHtwYXJ0aWNpcGFudH1gLFxuXHRcdFx0XHRtZXRhOiB0aGlzLnByb3BzLnRva2Vuc1tpbmRleF0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiA8aDU+QW1vdW50IGxlZnQgdG8gZGVwb3NpdDogeyh0aGlzLnByb3BzLmFtb3VudExlZnRUb0RlcG9zaXRbaW5kZXhdKS8oMTAqKjE4KX08L2g1Pixcblx0XHRcdFx0Zmx1aWQ6IHRydWVcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtc1BlclJvdz17Mn0gaXRlbXM9e2l0ZW1zfSAvPlxuXHR9XG5cblx0YXN5bmMgZm9ybWF0VmFsdWUodmFsKSB7XG5cdFx0Y29uc3QgZGVjaW1hbHMgPSBhd2FpdCB3ZWIzLnV0aWxzLnRvQk4oMTgpO1xuXHRcdGNvbnN0IG11bHRpcGxpZXIgPSBhd2FpdCB3ZWIzLnV0aWxzLnRvQk4oMTApLnBvdyhkZWNpbWFscyk7XG5cdFx0Y29uc3QgYW1vdW50ID0gYXdhaXQgd2ViMy51dGlscy50b0JOKHZhbCk7XG5cblx0XHRyZXR1cm4gYW1vdW50ICogbXVsdGlwbGllcjtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PGgzPnt0aGlzLnByb3BzLmFkZHJlc3N9PC9oMz5cblx0XHRcdFx0PGg0PlRpbWUgdG8gZmluYWxpemU6IHt0aGlzLnByb3BzLmV4cGlyYXRpb25EYXRlfTwvaDQ+XG5cblx0XHRcdFx0PGhyLz5cblx0XHRcdFx0PEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtLkZpZWxkIHN0eWxlPXt7d2lkdGg6ICcyMCUnfX0+XG5cdFx0XHRcdFx0XHQ8bGFiZWw+RW50ZXIgYW1vdW50OiA8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17dGhpcy5zdGF0ZS51c2VyVG9rZW5TeW1ib2x9XG5cdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3JpZ2h0J1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiB7IHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KSB9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm0uRmllbGQ+XG5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRzdHlsZT17e21hcmdpblRvcDogJzVweCcsIG1hcmdpbkJvdHRvbTogJzE1cHgnfX1cblx0XHRcdFx0XHRcdHByaW1hcnk9eyF0aGlzLnN0YXRlLmRlcG9zaXRNYWRlfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGVwb3NpdE1hZGV9XG5cdFx0XHRcdFx0XHRsb2FkaW5nPXt0aGlzLnN0YXRlLmRlcG9zaXRMb2FkaW5nfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdERlcG9zaXRcblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0XHQ8aHIvPlxuXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcyNHB4J319Pnt0aGlzLnJlbmRlclBhcnRpY2lwYW50cygpfTwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcyNHB4J319PlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGlkPSdmaW5hbGl6ZSdcblx0XHRcdFx0XHRcdHByaW1hcnk9e3RoaXMucHJvcHMuZmluYWxpemFibGV9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17IXRoaXMucHJvcHMuZmluYWxpemFibGV9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuXHRcdFx0XHRcdFx0bG9hZGluZz17dGhpcy5zdGF0ZS5maW5hbGl6ZUxvYWRpbmd9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0RmluYWxpemVcblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRpZD0nd2l0aGRyYXcnXG5cdFx0XHRcdFx0XHRwcmltYXJ5PXt0aGlzLnByb3BzLndpdGhkcmF3YWJsZX1cblx0XHRcdFx0XHRcdGRpc2FibGVkPXshdGhpcy5wcm9wcy53aXRoZHJhd2FibGV9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuXHRcdFx0XHRcdFx0bG9hZGluZz17dGhpcy5zdGF0ZS53aXRoZHJhd0xvYWRpbmd9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0V2l0aGRyYXdcblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhjaGFuZ2VTaG93O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUxBO0FBb0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFKQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFOQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBUkE7QUFBQTtBQVNBO0FBQ0E7QUFEQTtBQVRBO0FBQUE7QUFVQTtBQUNBO0FBREE7QUFWQTtBQUFBO0FBV0E7QUFDQTtBQURBO0FBWEE7QUFDQTtBQVlBO0FBQ0E7QUFkQTtBQUFBO0FBZ0JBO0FBR0E7QUFBQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQXVCQTtBQU1BO0FBRUE7QUFBQTtBQUZBO0FBQ0E7QUE5QkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBa0NBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBckNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUF1Q0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQTNDQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7OztBQTZDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFHQTtBQVZBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTVEQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7OztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUFBO0FBQ0E7OztBQUVBOztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBREE7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQ0E7OztBQUVBOztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBREE7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7O0FBR0E7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFMQTtBQU9BO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUpBOztBQUFBO0FBUUE7QUFSQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFBQTtBQUFBO0FBQ0E7O0FBUUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFMQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUF6TUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcENBO0FBQ0E7QUFpT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==