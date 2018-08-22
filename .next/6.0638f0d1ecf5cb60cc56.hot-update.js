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
				var participants, accounts, agent, token, senderBalance, contractBalance, serverAccounts;
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

								_this.setState({ depositLoading: true });

								_context.prev = 21;
								_context.next = 24;
								return token.methods.transfer(_this.props.address, _this.state.value).send({
									from: accounts[0]
								});

							case 24:
								_context.prev = 24;
								_context.next = 27;
								return agent.methods.depositSuccessfull(_this.state.value, senderBalance, contractBalance, accounts[0]).send({
									from: serverAccounts[0]
								});

							case 27:
								_context.next = 32;
								break;

							case 29:
								_context.prev = 29;
								_context.t0 = _context['catch'](24);

								console.log(_context.t0);

							case 32:

								_routes.Router.pushRoute('/exchanges/' + _this.props.address);
								_context.next = 38;
								break;

							case 35:
								_context.prev = 35;
								_context.t1 = _context['catch'](21);

								console.log(_context.t1);

							case 38:

								_this.setState({ depositLoading: false, value: '' });

							case 39:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[21, 35], [24, 29]]);
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

								_this.setState({ finalizeLoading: true });

								if (elementId === 'finalize') {
									_this.finalize(accounts[0], agent);
								} else {
									_this.withdraw(accounts[0], agent);
								}

								_this.setState({ finalizeLoading: false });

							case 11:
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
				var accounts, agent, token, userTokenSymbol, balance, depositMade;
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
								_context3.t0 = parseInt;
								_context3.next = 15;
								return agent.methods.balances(accounts[0]).call();

							case 15:
								_context3.t1 = _context3.sent;
								balance = (0, _context3.t0)(_context3.t1);
								depositMade = false;

								if (balance !== 0) {
									depositMade = true;
								}

								this.setState({ depositMade: depositMade, userTokenSymbol: userTokenSymbol });

							case 20:
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
					header: participant,
					meta: _this3.props.tokens[index],
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 2, items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 162
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
					lineNumber: 168
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 169
				}
			}, this.props.address), _react2.default.createElement('h4', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 170
				}
			}, 'Time to finalize: ', this.props.expirationDate), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 172
				}
			}), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 173
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '20%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 174
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 175
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
					lineNumber: 176
				}
			})), _react2.default.createElement(_semanticUiReact.Button, {
				style: { marginTop: '5px', marginBottom: '15px' },
				primary: !this.state.depositMade,
				disabled: this.state.depositMade,
				loading: this.state.depositLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 184
				}
			}, 'Deposit')), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 193
				}
			}), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 195
				}
			}, this.renderParticipants()), _react2.default.createElement('h4', { style: { marginTop: '10px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 196
				}
			}, 'Deposit count: ', this.props.depositCount), _react2.default.createElement(_semanticUiReact.Button, {
				id: 'finalize',
				primary: this.props.depositCount === 2,
				disabled: this.props.depositCount !== 2,
				onClick: this.handleClick,
				loading: this.state.finalizeLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 198
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				id: 'withdraw',
				primary: this.props.withdrawable,
				disabled: !this.props.withdrawable,
				onClick: this.handleClick,
				loading: this.state.withdrawLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 207
				}
			}, 'Withdraw'));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(props) {
				var address, agent, summary, participants, depositCount, now, daysLeft, hoursLeft, expirationDate, withdrawable, finalizable, firstTokenAddr, secondTokenAddr, tokenAddresses, firstToken, secondToken, firstTokenName, secondTokenName, tokens;
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
								depositCount = parseInt(summary["_depositCount"]);
								now = new Date();
								daysLeft = Math.floor((new Date(summary["_expirationTime"] * 1000) - now) / (1000 * 60 * 60 * 24));
								hoursLeft = Math.floor(((new Date(summary["_expirationTime"] * 1000) - now) / (1000 * 60 * 60 * 24) - daysLeft) * 24);
								expirationDate = daysLeft + ' days & ' + hoursLeft + ' hours';
								withdrawable = summary["_withdrawable"];
								finalizable = summary["_finalizable"];
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
								return _context6.abrupt('return', { address: address, participants: participants, depositCount: depositCount, expirationDate: expirationDate, withdrawable: withdrawable, finalizable: finalizable, tokens: tokens, tokenAddresses: tokenAddresses });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiQ2FyZCIsIklucHV0IiwiRm9ybSIsIkxheW91dCIsIkFnZW50IiwiVG9rZW4iLCJSb3V0ZXIiLCJ3ZWIzIiwic2VydmVyV2ViMyIsIkV4Y2hhbmdlU2hvdyIsInN0YXRlIiwidmFsdWUiLCJkZXBvc2l0TWFkZSIsInVzZXJUb2tlblN5bWJvbCIsImRlcG9zaXRMb2FkaW5nIiwiZmluYWxpemVMb2FkaW5nIiwid2l0aGRyYXdMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhbnRzIiwicHJvcHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYWRkcmVzcyIsImFnZW50IiwidG9rZW5BZGRyZXNzZXMiLCJpbmRleE9mIiwidG9rZW4iLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsInNlbmRlckJhbGFuY2UiLCJjb250cmFjdEJhbGFuY2UiLCJzZXJ2ZXJBY2NvdW50cyIsInNldFN0YXRlIiwidHJhbnNmZXIiLCJzZW5kIiwiZnJvbSIsImRlcG9zaXRTdWNjZXNzZnVsbCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoUm91dGUiLCJoYW5kbGVDbGljayIsImVsZW1lbnRJZCIsInRhcmdldCIsImlkIiwiZmluYWxpemUiLCJ3aXRoZHJhdyIsInN5bWJvbCIsInBhcnNlSW50IiwiYmFsYW5jZXMiLCJiYWxhbmNlIiwiYWNjb3VudCIsImZpbmFsaXplRXhjaGFuZ2UiLCJpdGVtcyIsIm1hcCIsInBhcnRpY2lwYW50IiwiaW5kZXgiLCJoZWFkZXIiLCJtZXRhIiwidG9rZW5zIiwiZmx1aWQiLCJleHBpcmF0aW9uRGF0ZSIsIndpZHRoIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicmVuZGVyUGFydGljaXBhbnRzIiwiZGVwb3NpdENvdW50Iiwid2l0aGRyYXdhYmxlIiwicXVlcnkiLCJnZXRTdW1tYXJ5Iiwic3VtbWFyeSIsIm5vdyIsIkRhdGUiLCJkYXlzTGVmdCIsIk1hdGgiLCJmbG9vciIsImhvdXJzTGVmdCIsImZpbmFsaXphYmxlIiwiZmlyc3RUb2tlbkFkZHIiLCJzZWNvbmRUb2tlbkFkZHIiLCJmaXJzdFRva2VuIiwic2Vjb25kVG9rZW4iLCJuYW1lIiwiZmlyc3RUb2tlbk5hbWUiLCJzZWNvbmRUb2tlbk5hbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFRLEFBQU0sQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBUyxBQUFjOztBQUN2QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFHakI7Ozs7Ozs7Ozs7Ozs7OztzTkFDTCxBO1VBQVEsQUFDQSxBQUNQO2dCQUZPLEFBRU0sQUFDYjtvQkFITyxBQUdVLEFBQ2pCO21CQUpPLEFBSVMsQUFDaEI7b0JBTE8sQUFLVSxBQUNqQjtvQkFOTyxBQU1VLEE7QUFOVixBQUNQLFcsQUFvREQ7d0ZBQVcsaUJBQUEsQUFBTyxPQUFQOzhFQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQU0sQUFFQTs7QUFISSx1QkFHVyxNQUFBLEFBQUssTUFIaEIsQUFHc0I7d0JBSHRCO2VBSWEsY0FBQSxBQUFLLElBSmxCLEFBSWEsQUFBUzs7WUFBMUI7QUFKSSw0QkFBQTt3QkFBQTtlQUtVLHFCQUFNLE1BQUEsQUFBSyxNQUFYLEFBQWlCLFNBTDNCLEFBS1UsQUFBMEI7O1lBQXhDO0FBTEkseUJBQUE7d0JBQUE7ZUFNVSxxQkFBTSxNQUFBLEFBQUssTUFBTCxBQUFXLGVBQWUsYUFBQSxBQUFhLFFBQVEsU0FBckQsQUFBTSxBQUEwQixBQUFxQixBQUFTLE1BTnhFLEFBTVUsQUFBb0U7O1lBQWxGO0FBTkkseUJBQUE7d0JBQUE7ZUFRa0Is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QUFBQSxBQUFRLEFBRXRCO0EseUJBQWlCLFEsQUFBQSxBQUFRLEFBQ3pCO0EsMEJBQWtCLFFBQUEsQUFBUSxBQUMxQixBO0EseUJBQWlCLENBQUEsQUFBQyxnQkFBRCxBQUFpQixBOztlQUVmLHFCQUFBLEFBQU0sQTs7WUFBekI7QTs7ZUFDb0IscUJBQUEsQUFBTSxBOztZQUExQjtBOztlQUN1QixXQUFBLEFBQVcsUUFBWCxBQUFtQixPQUFuQixBQUEwQixBOztZQUFqRDtBOztlQUN3QixZQUFBLEFBQVksUUFBWixBQUFvQixPQUFwQixBQUEyQixBOztZQUFuRDtBLG9DQUNBO0EsaUJBQVMsQ0FBQSxBQUFDLGdCQUFELEFBQWlCLEE7MENBRXpCLEVBQUUsU0FBRixTQUFXLGNBQVgsY0FBeUIsY0FBekIsY0FBdUMsZ0JBQXZDLGdCQUF1RCxjQUF2RCxjQUFxRSxhQUFyRSxhQUFrRixRQUFsRixRQUEwRixnQkFBMUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5Da0IsZ0JBQU0sQSxBQWtOakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYW1hamljL0Rlc2t0b3AvVG9tYS9EZXYvb3RjLWV4Y2hhbmdlIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4wNjM4ZjBkMWVjZjVjYjYwY2M1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/MDJhMWZlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBJbnB1dCwgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEFnZW50IGZyb20gJy4uLy4uL2V0aGVyZXVtL2FnZW50JztcbmltcG9ydCBUb2tlbiBmcm9tICcuLi8uLi9ldGhlcmV1bS90b2tlbic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgc2VydmVyV2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzLXNlcnZlcic7XG5cblxuY2xhc3MgRXhjaGFuZ2VTaG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0dmFsdWU6ICcnLFxuXHRcdGRlcG9zaXRNYWRlOiBmYWxzZSxcblx0XHR1c2VyVG9rZW5TeW1ib2w6ICcnLFxuXHRcdGRlcG9zaXRMb2FkaW5nOiBmYWxzZSxcblx0XHRmaW5hbGl6ZUxvYWRpbmc6IGZhbHNlLFxuXHRcdHdpdGhkcmF3TG9hZGluZzogZmFsc2Vcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcblx0XHRjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KGFkZHJlc3MpO1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBhZ2VudC5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG5cdFx0Y29uc3QgcGFydGljaXBhbnRzID0gc3VtbWFyeVtcIl9wYXJ0aWNpcGFudHNcIl07XG5cdFx0Y29uc3QgZGVwb3NpdENvdW50ID0gcGFyc2VJbnQoc3VtbWFyeVtcIl9kZXBvc2l0Q291bnRcIl0pO1xuXG5cdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBkYXlzTGVmdCA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKHN1bW1hcnlbXCJfZXhwaXJhdGlvblRpbWVcIl0gKiAxMDAwKSAtIG5vdykgLyAoMTAwMCo2MCo2MCoyNCkpO1xuXHRcdGNvbnN0IGhvdXJzTGVmdCA9IE1hdGguZmxvb3IoKCgobmV3IERhdGUoc3VtbWFyeVtcIl9leHBpcmF0aW9uVGltZVwiXSAqIDEwMDApIC0gbm93KSAvICgxMDAwKjYwKjYwKjI0KSkgLSBkYXlzTGVmdCkgKiAyNCk7XG5cdFx0Y29uc3QgZXhwaXJhdGlvbkRhdGUgPSBgJHtkYXlzTGVmdH0gZGF5cyAmICR7aG91cnNMZWZ0fSBob3Vyc2A7XG5cblx0XHRjb25zdCB3aXRoZHJhd2FibGUgPSBzdW1tYXJ5W1wiX3dpdGhkcmF3YWJsZVwiXTtcblx0XHRjb25zdCBmaW5hbGl6YWJsZSA9IHN1bW1hcnlbXCJfZmluYWxpemFibGVcIl07XG5cblx0XHRjb25zdCBmaXJzdFRva2VuQWRkciA9IHN1bW1hcnlbXCJfZmlyc3RUb2tlblwiXTtcblx0XHRjb25zdCBzZWNvbmRUb2tlbkFkZHIgPSBzdW1tYXJ5W1wiX3NlY29uZFRva2VuXCJdO1xuXHRcdGNvbnN0IHRva2VuQWRkcmVzc2VzID0gW2ZpcnN0VG9rZW5BZGRyLCBzZWNvbmRUb2tlbkFkZHJdO1xuXG5cdFx0Y29uc3QgZmlyc3RUb2tlbiA9IGF3YWl0IFRva2VuKGZpcnN0VG9rZW5BZGRyKTtcblx0XHRjb25zdCBzZWNvbmRUb2tlbiA9IGF3YWl0IFRva2VuKHNlY29uZFRva2VuQWRkcik7XG5cdFx0Y29uc3QgZmlyc3RUb2tlbk5hbWUgPSBhd2FpdCBmaXJzdFRva2VuLm1ldGhvZHMubmFtZSgpLmNhbGwoKTtcblx0XHRjb25zdCBzZWNvbmRUb2tlbk5hbWUgPSBhd2FpdCBzZWNvbmRUb2tlbi5tZXRob2RzLm5hbWUoKS5jYWxsKCk7XG5cdFx0Y29uc3QgdG9rZW5zID0gW2ZpcnN0VG9rZW5OYW1lLCBzZWNvbmRUb2tlbk5hbWVdO1xuXG5cdFx0cmV0dXJuIHsgYWRkcmVzcywgcGFydGljaXBhbnRzLCBkZXBvc2l0Q291bnQsIGV4cGlyYXRpb25EYXRlLCB3aXRoZHJhd2FibGUsIGZpbmFsaXphYmxlLCB0b2tlbnMsIHRva2VuQWRkcmVzc2VzIH1cblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KHRoaXMucHJvcHMuYWRkcmVzcywgJ2NsaWVudCcpO1xuXHRcdGNvbnN0IHRva2VuID0gYXdhaXQgVG9rZW4odGhpcy5wcm9wcy50b2tlbkFkZHJlc3Nlc1t0aGlzLnByb3BzLnBhcnRpY2lwYW50cy5pbmRleE9mKGFjY291bnRzWzBdKV0sICdjbGllbnQnKTtcblxuXHRcdGNvbnN0IHVzZXJUb2tlblN5bWJvbCA9IGF3YWl0IHRva2VuLm1ldGhvZHMuc3ltYm9sKCkuY2FsbCgpO1xuXHRcdGNvbnN0IGJhbGFuY2UgPSBwYXJzZUludChhd2FpdCBhZ2VudC5tZXRob2RzLmJhbGFuY2VzKGFjY291bnRzWzBdKS5jYWxsKCkpO1xuXHRcdGxldCBkZXBvc2l0TWFkZSA9IGZhbHNlO1xuXHRcdFxuXHRcdGlmKGJhbGFuY2UgIT09IDApIHtcblx0XHRcdGRlcG9zaXRNYWRlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgZGVwb3NpdE1hZGUsIHVzZXJUb2tlblN5bWJvbCB9KVxuXHR9XG5cblx0b25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgcGFydGljaXBhbnRzID0gdGhpcy5wcm9wcy5wYXJ0aWNpcGFudHM7XG5cdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdGNvbnN0IGFnZW50ID0gYXdhaXQgQWdlbnQodGhpcy5wcm9wcy5hZGRyZXNzLCAnc2VydmVyJyk7XG5cdFx0Y29uc3QgdG9rZW4gPSBhd2FpdCBUb2tlbih0aGlzLnByb3BzLnRva2VuQWRkcmVzc2VzW3BhcnRpY2lwYW50cy5pbmRleE9mKGFjY291bnRzWzBdKV0sICdjbGllbnQnKTtcblxuXHRcdGNvbnN0IHNlbmRlckJhbGFuY2UgPSBhd2FpdCB0b2tlbi5tZXRob2RzLmJhbGFuY2VPZihhY2NvdW50c1swXSkuY2FsbCgpO1xuXHRcdGNvbnN0IGNvbnRyYWN0QmFsYW5jZSA9IGF3YWl0IHRva2VuLm1ldGhvZHMuYmFsYW5jZU9mKHRoaXMucHJvcHMuYWRkcmVzcykuY2FsbCgpO1xuXHRcdGNvbnN0IHNlcnZlckFjY291bnRzID0gYXdhaXQgc2VydmVyV2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGRlcG9zaXRMb2FkaW5nOiB0cnVlIH0pO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHRva2VuLm1ldGhvZHNcblx0XHRcdFx0LnRyYW5zZmVyKHRoaXMucHJvcHMuYWRkcmVzcywgdGhpcy5zdGF0ZS52YWx1ZSlcblx0XHRcdFx0LnNlbmQoe1xuXHRcdFx0XHRcdGZyb206IGFjY291bnRzWzBdXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBhZ2VudC5tZXRob2RzXG5cdFx0XHRcdFx0LmRlcG9zaXRTdWNjZXNzZnVsbCh0aGlzLnN0YXRlLnZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZW5kZXJCYWxhbmNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250cmFjdEJhbGFuY2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjY291bnRzWzBdKVxuXHRcdFx0XHRcdC5zZW5kKHtcblx0XHRcdFx0XHRcdGZyb206IHNlcnZlckFjY291bnRzWzBdXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXG5cdFx0XHR9XG5cblx0XHRcdFJvdXRlci5wdXNoUm91dGUoYC9leGNoYW5nZXMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XG5cdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGRlcG9zaXRMb2FkaW5nOiBmYWxzZSwgdmFsdWU6ICcnIH0pO1xuXHR9XG5cblx0aGFuZGxlQ2xpY2sgPSBhc3luYyAoZXZlbnQpID0+IHtcblx0XHRjb25zdCBlbGVtZW50SWQgPSBldmVudC50YXJnZXQuaWQ7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KHRoaXMucHJvcHMuYWRkcmVzcywgJ2NsaWVudCcpO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGZpbmFsaXplTG9hZGluZzogdHJ1ZSB9KTtcblxuXHRcdGlmKGVsZW1lbnRJZCA9PT0gJ2ZpbmFsaXplJykge1xuXHRcdFx0dGhpcy5maW5hbGl6ZShhY2NvdW50c1swXSwgYWdlbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLndpdGhkcmF3KGFjY291bnRzWzBdLCBhZ2VudCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGZpbmFsaXplTG9hZGluZzogZmFsc2UgfSk7XG5cdH1cblxuXHRhc3luYyBmaW5hbGl6ZShhY2NvdW50LCBhZ2VudCkge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBhZ2VudC5tZXRob2RzXG5cdFx0XHRcdC5maW5hbGl6ZUV4Y2hhbmdlKClcblx0XHRcdFx0LnNlbmQoe1xuXHRcdFx0XHRcdGZyb206IGFjY291bnRcblx0XHRcdFx0fSk7XG5cblx0XHRcdFJvdXRlci5wdXNoUm91dGUoYC9leGNoYW5nZXMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XG5cdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgd2l0aGRyYXcoYWNjb3VudCwgYWdlbnQpIHtcblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgYWdlbnQubWV0aG9kc1xuXHRcdFx0XHQud2l0aGRyYXcoKVxuXHRcdFx0XHQuc2VuZCh7XG5cdFx0XHRcdFx0ZnJvbTogYWNjb3VudFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0Um91dGVyLnB1c2hSb3V0ZShgL2V4Y2hhbmdlcy8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcblx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXJQYXJ0aWNpcGFudHMoKSB7XG5cdFx0Y29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLnBhcnRpY2lwYW50cy5tYXAoKHBhcnRpY2lwYW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aGVhZGVyOiBwYXJ0aWNpcGFudCxcblx0XHRcdFx0bWV0YTogdGhpcy5wcm9wcy50b2tlbnNbaW5kZXhdLFxuXHRcdFx0XHRmbHVpZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zUGVyUm93PXsyfSBpdGVtcz17aXRlbXN9IC8+XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PGgzPnt0aGlzLnByb3BzLmFkZHJlc3N9PC9oMz5cblx0XHRcdFx0PGg0PlRpbWUgdG8gZmluYWxpemU6IHt0aGlzLnByb3BzLmV4cGlyYXRpb25EYXRlfTwvaDQ+XG5cblx0XHRcdFx0PGhyLz5cblx0XHRcdFx0PEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtLkZpZWxkIHN0eWxlPXt7d2lkdGg6ICcyMCUnfX0+XG5cdFx0XHRcdFx0XHQ8bGFiZWw+RW50ZXIgYW1vdW50OiA8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17dGhpcy5zdGF0ZS51c2VyVG9rZW5TeW1ib2x9XG5cdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3JpZ2h0J1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiB7IHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KSB9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm0uRmllbGQ+XG5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRzdHlsZT17e21hcmdpblRvcDogJzVweCcsIG1hcmdpbkJvdHRvbTogJzE1cHgnfX1cblx0XHRcdFx0XHRcdHByaW1hcnk9eyF0aGlzLnN0YXRlLmRlcG9zaXRNYWRlfVxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGVwb3NpdE1hZGV9XG5cdFx0XHRcdFx0XHRsb2FkaW5nPXt0aGlzLnN0YXRlLmRlcG9zaXRMb2FkaW5nfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdERlcG9zaXRcblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0XHQ8aHIvPlxuXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcyNHB4J319Pnt0aGlzLnJlbmRlclBhcnRpY2lwYW50cygpfTwvZGl2PlxuXHRcdFx0XHQ8aDQgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxMHB4J319PkRlcG9zaXQgY291bnQ6IHt0aGlzLnByb3BzLmRlcG9zaXRDb3VudH08L2g0PlxuXG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRpZD0nZmluYWxpemUnXG5cdFx0XHRcdFx0cHJpbWFyeT17dGhpcy5wcm9wcy5kZXBvc2l0Q291bnQgPT09IDJ9XG5cdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGVwb3NpdENvdW50ICE9PSAyfVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG5cdFx0XHRcdFx0bG9hZGluZz17dGhpcy5zdGF0ZS5maW5hbGl6ZUxvYWRpbmd9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHRGaW5hbGl6ZVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlkPSd3aXRoZHJhdydcblx0XHRcdFx0XHRwcmltYXJ5PXt0aGlzLnByb3BzLndpdGhkcmF3YWJsZX1cblx0XHRcdFx0XHRkaXNhYmxlZD17IXRoaXMucHJvcHMud2l0aGRyYXdhYmxlfVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG5cdFx0XHRcdFx0bG9hZGluZz17dGhpcy5zdGF0ZS53aXRoZHJhd0xvYWRpbmd9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHRXaXRoZHJhd1xuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZVNob3c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUFvREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQU5BO0FBQUE7QUFRQTtBQUNBO0FBREE7QUFSQTtBQUFBO0FBU0E7QUFDQTtBQURBO0FBVEE7QUFBQTtBQVVBO0FBQ0E7QUFEQTtBQVZBO0FBQ0E7QUFXQTtBQUNBO0FBYkE7QUFBQTtBQWVBO0FBR0E7QUFBQTtBQUNBO0FBbkJBO0FBQUE7QUFBQTtBQXNCQTtBQU1BO0FBQUE7QUFDQTtBQTdCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUErQkE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFsQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQW9DQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBeENBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7O0FBMENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBekRBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUVBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7O0FBREE7QUFDQTs7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VBOztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBREE7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBREE7O0FBR0E7QUFBQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUdBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFKQTs7QUFBQTtBQVFBO0FBUkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBQUE7QUFBQTtBQUNBOztBQVFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUxBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FBMUxBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXBDQTtBQUNBO0FBaU5BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=