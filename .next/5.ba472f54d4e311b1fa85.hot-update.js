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

								_context.prev = 31;
								_context.next = 34;
								return token.methods.transfer(_this.props.address, value).send({
									from: accounts[0]
								});

							case 34:
								_context.prev = 34;
								_context.next = 37;
								return agent.methods.depositSuccessfull(value, senderBalance, contractBalance, accounts[0]).send({
									from: serverAccounts[0]
								});

							case 37:
								_context.next = 42;
								break;

							case 39:
								_context.prev = 39;
								_context.t0 = _context['catch'](34);

								console.log(_context.t0);

							case 42:

								_routes.Router.pushRoute('/exchanges/' + _this.props.address);
								_context.next = 48;
								break;

							case 45:
								_context.prev = 45;
								_context.t1 = _context['catch'](31);

								console.log(_context.t1);

							case 48:

								_this.setState({ depositLoading: false, value: '' });

							case 49:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[31, 45], [34, 39]]);
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
					lineNumber: 167
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			console.log(this.props.finalizable);
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 173
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 174
				}
			}, this.props.address), _react2.default.createElement('h4', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 175
				}
			}, 'Time to finalize: ', this.props.expirationDate), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 177
				}
			}), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 178
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '20%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 179
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 180
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
					lineNumber: 181
				}
			})), _react2.default.createElement(_semanticUiReact.Button, {
				style: { marginTop: '5px', marginBottom: '15px' },
				primary: !this.state.depositMade,
				disabled: this.state.depositMade,
				loading: this.state.depositLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 189
				}
			}, 'Deposit')), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 198
				}
			}), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 200
				}
			}, this.renderParticipants()), _react2.default.createElement('h4', { style: { marginTop: '10px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 201
				}
			}, 'Deposit count: ', this.props.depositCount), _react2.default.createElement(_semanticUiReact.Button, {
				id: 'finalize',
				primary: this.props.depositCount === 2,
				disabled: this.props.depositCount !== 2 || !this.props.finalizable,
				onClick: this.handleClick,
				loading: this.state.finalizeLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 203
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				id: 'withdraw',
				primary: this.props.withdrawable,
				disabled: !this.props.withdrawable,
				onClick: this.handleClick,
				loading: this.state.withdrawLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 212
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiQ2FyZCIsIklucHV0IiwiRm9ybSIsIkxheW91dCIsIkFnZW50IiwiVG9rZW4iLCJSb3V0ZXIiLCJ3ZWIzIiwic2VydmVyV2ViMyIsIkV4Y2hhbmdlU2hvdyIsInN0YXRlIiwidmFsdWUiLCJkZXBvc2l0TWFkZSIsInVzZXJUb2tlblN5bWJvbCIsImRlcG9zaXRMb2FkaW5nIiwiZmluYWxpemVMb2FkaW5nIiwid2l0aGRyYXdMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhbnRzIiwicHJvcHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYWRkcmVzcyIsImFnZW50IiwidG9rZW5BZGRyZXNzZXMiLCJpbmRleE9mIiwidG9rZW4iLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsInNlbmRlckJhbGFuY2UiLCJjb250cmFjdEJhbGFuY2UiLCJzZXJ2ZXJBY2NvdW50cyIsInV0aWxzIiwidG9CTiIsImRlY2ltYWxzIiwicG93IiwibXVsdGlwbGllciIsImFtb3VudCIsInNldFN0YXRlIiwidHJhbnNmZXIiLCJzZW5kIiwiZnJvbSIsImRlcG9zaXRTdWNjZXNzZnVsbCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoUm91dGUiLCJoYW5kbGVDbGljayIsImVsZW1lbnRJZCIsInRhcmdldCIsImlkIiwiZmluYWxpemUiLCJ3aXRoZHJhdyIsInN5bWJvbCIsInBhcnNlSW50IiwiYmFsYW5jZXMiLCJiYWxhbmNlIiwiYWNjb3VudCIsImZpbmFsaXplRXhjaGFuZ2UiLCJpdGVtcyIsIm1hcCIsInBhcnRpY2lwYW50IiwiaW5kZXgiLCJoZWFkZXIiLCJtZXRhIiwidG9rZW5zIiwiZmx1aWQiLCJmaW5hbGl6YWJsZSIsImV4cGlyYXRpb25EYXRlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJQYXJ0aWNpcGFudHMiLCJkZXBvc2l0Q291bnQiLCJ3aXRoZHJhd2FibGUiLCJxdWVyeSIsImdldFN1bW1hcnkiLCJzdW1tYXJ5Iiwibm93IiwiRGF0ZSIsImRheXNMZWZ0IiwiTWF0aCIsImZsb29yIiwiaG91cnNMZWZ0IiwiZmlyc3RUb2tlbkFkZHIiLCJzZWNvbmRUb2tlbkFkZHIiLCJmaXJzdFRva2VuIiwic2Vjb25kVG9rZW4iLCJuYW1lIiwiZmlyc3RUb2tlbk5hbWUiLCJzZWNvbmRUb2tlbk5hbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFRLEFBQU0sQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBUyxBQUFjOztBQUN2QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0lBR2pCLEE7Ozs7Ozs7Ozs7Ozs7OztzTixBQUNMO1VBQVEsQUFDQSxBQUNQO2dCQUZPLEFBRU0sQUFDYjtvQkFITyxBQUdVLEFBQ2pCO21CQUpPLEFBSVMsQUFDaEI7b0JBTE8sQUFLVSxBQUNqQjtvQixBQU5PLEFBTVU7QUFOVixBQUNQLFcsQUFvREQ7d0ZBQVcsaUJBQUEsQUFBTyxPQUFQOzRIQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQU0sQUFFQTs7QUFISSx1QkFHVyxNQUFBLEFBQUssTUFIaEIsQUFHc0I7d0JBSHRCO2VBSWEsY0FBQSxBQUFLLElBSmxCLEFBSWEsQUFBUzs7WUFBMUI7QUFKSSw0QkFBQTt3QkFBQTtlQUtVLHFCQUFNLE1BQUEsQUFBSyxNQUFYLEFBQWlCLFNBTDNCLEFBS1UsQUFBMEI7O1lBQXhDO0FBTEkseUJBQUE7d0JBQUE7ZUFNVSxxQkFBTSxNQUFBLEFBQUssTUFBTCxBQUFXLGVBQWUsYUFBQSxBQUFhLFFBQVEsU0FBckQsQUFBTSxBQUEwQixBQUFx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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iYTQ3MmY1NGQ0ZTMxMWIxZmE4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/OGJmMGYwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBJbnB1dCwgRm9ybSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEFnZW50IGZyb20gJy4uLy4uL2V0aGVyZXVtL2FnZW50JztcbmltcG9ydCBUb2tlbiBmcm9tICcuLi8uLi9ldGhlcmV1bS90b2tlbic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgc2VydmVyV2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzLXNlcnZlcic7XG5cblxuY2xhc3MgRXhjaGFuZ2VTaG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0dmFsdWU6ICcnLFxuXHRcdGRlcG9zaXRNYWRlOiBmYWxzZSxcblx0XHR1c2VyVG9rZW5TeW1ib2w6ICcnLFxuXHRcdGRlcG9zaXRMb2FkaW5nOiBmYWxzZSxcblx0XHRmaW5hbGl6ZUxvYWRpbmc6IGZhbHNlLFxuXHRcdHdpdGhkcmF3TG9hZGluZzogZmFsc2Vcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcblx0XHRjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KGFkZHJlc3MpO1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBhZ2VudC5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG5cdFx0Y29uc3QgcGFydGljaXBhbnRzID0gc3VtbWFyeVtcIl9wYXJ0aWNpcGFudHNcIl07XG5cdFx0Y29uc3QgZGVwb3NpdENvdW50ID0gcGFyc2VJbnQoc3VtbWFyeVtcIl9kZXBvc2l0Q291bnRcIl0pO1xuXG5cdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBkYXlzTGVmdCA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKHN1bW1hcnlbXCJfZXhwaXJhdGlvblRpbWVcIl0gKiAxMDAwKSAtIG5vdykgLyAoMTAwMCo2MCo2MCoyNCkpO1xuXHRcdGNvbnN0IGhvdXJzTGVmdCA9IE1hdGguZmxvb3IoKCgobmV3IERhdGUoc3VtbWFyeVtcIl9leHBpcmF0aW9uVGltZVwiXSAqIDEwMDApIC0gbm93KSAvICgxMDAwKjYwKjYwKjI0KSkgLSBkYXlzTGVmdCkgKiAyNCk7XG5cdFx0Y29uc3QgZXhwaXJhdGlvbkRhdGUgPSBgJHtkYXlzTGVmdH0gZGF5cyAmICR7aG91cnNMZWZ0fSBob3Vyc2A7XG5cblx0XHRjb25zdCB3aXRoZHJhd2FibGUgPSBzdW1tYXJ5W1wiX3dpdGhkcmF3YWJsZVwiXTtcblx0XHRjb25zdCBmaW5hbGl6YWJsZSA9IHN1bW1hcnlbXCJfZmluYWxpemFibGVcIl07XG5cblx0XHRjb25zdCBmaXJzdFRva2VuQWRkciA9IHN1bW1hcnlbXCJfZmlyc3RUb2tlblwiXTtcblx0XHRjb25zdCBzZWNvbmRUb2tlbkFkZHIgPSBzdW1tYXJ5W1wiX3NlY29uZFRva2VuXCJdO1xuXHRcdGNvbnN0IHRva2VuQWRkcmVzc2VzID0gW2ZpcnN0VG9rZW5BZGRyLCBzZWNvbmRUb2tlbkFkZHJdO1xuXG5cdFx0Y29uc3QgZmlyc3RUb2tlbiA9IGF3YWl0IFRva2VuKGZpcnN0VG9rZW5BZGRyKTtcblx0XHRjb25zdCBzZWNvbmRUb2tlbiA9IGF3YWl0IFRva2VuKHNlY29uZFRva2VuQWRkcik7XG5cdFx0Y29uc3QgZmlyc3RUb2tlbk5hbWUgPSBhd2FpdCBmaXJzdFRva2VuLm1ldGhvZHMubmFtZSgpLmNhbGwoKTtcblx0XHRjb25zdCBzZWNvbmRUb2tlbk5hbWUgPSBhd2FpdCBzZWNvbmRUb2tlbi5tZXRob2RzLm5hbWUoKS5jYWxsKCk7XG5cdFx0Y29uc3QgdG9rZW5zID0gW2ZpcnN0VG9rZW5OYW1lLCBzZWNvbmRUb2tlbk5hbWVdO1xuXG5cdFx0cmV0dXJuIHsgYWRkcmVzcywgcGFydGljaXBhbnRzLCBkZXBvc2l0Q291bnQsIGV4cGlyYXRpb25EYXRlLCB3aXRoZHJhd2FibGUsIGZpbmFsaXphYmxlLCB0b2tlbnMsIHRva2VuQWRkcmVzc2VzIH1cblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KHRoaXMucHJvcHMuYWRkcmVzcywgJ2NsaWVudCcpO1xuXHRcdGNvbnN0IHRva2VuID0gYXdhaXQgVG9rZW4odGhpcy5wcm9wcy50b2tlbkFkZHJlc3Nlc1t0aGlzLnByb3BzLnBhcnRpY2lwYW50cy5pbmRleE9mKGFjY291bnRzWzBdKV0sICdjbGllbnQnKTtcblxuXHRcdGNvbnN0IHVzZXJUb2tlblN5bWJvbCA9IGF3YWl0IHRva2VuLm1ldGhvZHMuc3ltYm9sKCkuY2FsbCgpO1xuXHRcdGNvbnN0IGJhbGFuY2UgPSBwYXJzZUludChhd2FpdCBhZ2VudC5tZXRob2RzLmJhbGFuY2VzKGFjY291bnRzWzBdKS5jYWxsKCkpO1xuXHRcdGxldCBkZXBvc2l0TWFkZSA9IGZhbHNlO1xuXHRcdFxuXHRcdGlmKGJhbGFuY2UgIT09IDApIHtcblx0XHRcdGRlcG9zaXRNYWRlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgZGVwb3NpdE1hZGUsIHVzZXJUb2tlblN5bWJvbCB9KVxuXHR9XG5cblx0b25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgcGFydGljaXBhbnRzID0gdGhpcy5wcm9wcy5wYXJ0aWNpcGFudHM7XG5cdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdGNvbnN0IGFnZW50ID0gYXdhaXQgQWdlbnQodGhpcy5wcm9wcy5hZGRyZXNzLCAnc2VydmVyJyk7XG5cdFx0Y29uc3QgdG9rZW4gPSBhd2FpdCBUb2tlbih0aGlzLnByb3BzLnRva2VuQWRkcmVzc2VzW3BhcnRpY2lwYW50cy5pbmRleE9mKGFjY291bnRzWzBdKV0sICdjbGllbnQnKTtcblxuXHRcdGNvbnN0IHNlbmRlckJhbGFuY2UgPSBhd2FpdCB0b2tlbi5tZXRob2RzLmJhbGFuY2VPZihhY2NvdW50c1swXSkuY2FsbCgpO1xuXHRcdGNvbnN0IGNvbnRyYWN0QmFsYW5jZSA9IGF3YWl0IHRva2VuLm1ldGhvZHMuYmFsYW5jZU9mKHRoaXMucHJvcHMuYWRkcmVzcykuY2FsbCgpO1xuXHRcdGNvbnN0IHNlcnZlckFjY291bnRzID0gYXdhaXQgc2VydmVyV2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblxuXHRcdGNvbnN0IGRlY2ltYWxzID0gYXdhaXQgd2ViMy51dGlscy50b0JOKDE4KTtcblx0XHRjb25zdCBtdWx0aXBsaWVyID0gYXdhaXQgd2ViMy51dGlscy50b0JOKDEwKS5wb3coZGVjaW1hbHMpO1xuXHRcdGNvbnN0IGFtb3VudCA9IGF3YWl0IHdlYjMudXRpbHMudG9CTih0aGlzLnN0YXRlLnZhbHVlKTtcblx0XHRjb25zdCB2YWx1ZSA9IGFtb3VudCAqIG11bHRpcGxpZXI7XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgZGVwb3NpdExvYWRpbmc6IHRydWUgfSk7XG5cblx0XHR0cnkge1xuXHRcdFx0YXdhaXQgdG9rZW4ubWV0aG9kc1xuXHRcdFx0XHQudHJhbnNmZXIodGhpcy5wcm9wcy5hZGRyZXNzLCB2YWx1ZSlcblx0XHRcdFx0LnNlbmQoe1xuXHRcdFx0XHRcdGZyb206IGFjY291bnRzWzBdXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBhZ2VudC5tZXRob2RzXG5cdFx0XHRcdFx0LmRlcG9zaXRTdWNjZXNzZnVsbCh2YWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2VuZGVyQmFsYW5jZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udHJhY3RCYWxhbmNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhY2NvdW50c1swXSlcblx0XHRcdFx0XHQuc2VuZCh7XG5cdFx0XHRcdFx0XHRmcm9tOiBzZXJ2ZXJBY2NvdW50c1swXVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHRcdH1cblxuXHRcdFx0Um91dGVyLnB1c2hSb3V0ZShgL2V4Y2hhbmdlcy8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcblx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgZGVwb3NpdExvYWRpbmc6IGZhbHNlLCB2YWx1ZTogJycgfSk7XG5cdH1cblxuXHRoYW5kbGVDbGljayA9IGFzeW5jIChldmVudCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnRJZCA9IGV2ZW50LnRhcmdldC5pZDtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdGNvbnN0IGFnZW50ID0gYXdhaXQgQWdlbnQodGhpcy5wcm9wcy5hZGRyZXNzLCAnY2xpZW50Jyk7XG5cblx0XHRpZihlbGVtZW50SWQgPT09ICdmaW5hbGl6ZScpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBmaW5hbGl6ZUxvYWRpbmc6IHRydWUgfSk7XG5cdFx0XHR0aGlzLmZpbmFsaXplKGFjY291bnRzWzBdLCBhZ2VudCk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgd2l0aGRyYXdMb2FkaW5nOiBmYWxzZSB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGZpbmFsaXplTG9hZGluZzogdHJ1ZSB9KTtcblx0XHRcdHRoaXMud2l0aGRyYXcoYWNjb3VudHNbMF0sIGFnZW50KTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyB3aXRoZHJhd0xvYWRpbmc6IGZhbHNlIH0pO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGZpbmFsaXplKGFjY291bnQsIGFnZW50KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IGFnZW50Lm1ldGhvZHNcblx0XHRcdFx0LmZpbmFsaXplRXhjaGFuZ2UoKVxuXHRcdFx0XHQuc2VuZCh7XG5cdFx0XHRcdFx0ZnJvbTogYWNjb3VudFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0Um91dGVyLnB1c2hSb3V0ZShgL2V4Y2hhbmdlcy8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcblx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyB3aXRoZHJhdyhhY2NvdW50LCBhZ2VudCkge1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBhZ2VudC5tZXRob2RzXG5cdFx0XHRcdC53aXRoZHJhdygpXG5cdFx0XHRcdC5zZW5kKHtcblx0XHRcdFx0XHRmcm9tOiBhY2NvdW50XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRSb3V0ZXIucHVzaFJvdXRlKGAvZXhjaGFuZ2VzLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApO1xuXHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlclBhcnRpY2lwYW50cygpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMucGFydGljaXBhbnRzLm1hcCgocGFydGljaXBhbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRoZWFkZXI6IHBhcnRpY2lwYW50LFxuXHRcdFx0XHRtZXRhOiB0aGlzLnByb3BzLnRva2Vuc1tpbmRleF0sXG5cdFx0XHRcdGZsdWlkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gPENhcmQuR3JvdXAgaXRlbXNQZXJSb3c9ezJ9IGl0ZW1zPXtpdGVtc30gLz5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzLmZpbmFsaXphYmxlKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8aDM+e3RoaXMucHJvcHMuYWRkcmVzc308L2gzPlxuXHRcdFx0XHQ8aDQ+VGltZSB0byBmaW5hbGl6ZToge3RoaXMucHJvcHMuZXhwaXJhdGlvbkRhdGV9PC9oND5cblxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm0uRmllbGQgc3R5bGU9e3t3aWR0aDogJzIwJSd9fT5cblx0XHRcdFx0XHRcdDxsYWJlbD5FbnRlciBhbW91bnQ6IDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXt0aGlzLnN0YXRlLnVzZXJUb2tlblN5bWJvbH1cblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ncmlnaHQnXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHsgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pIH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybS5GaWVsZD5cblxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnNXB4JywgbWFyZ2luQm90dG9tOiAnMTVweCd9fVxuXHRcdFx0XHRcdFx0cHJpbWFyeT17IXRoaXMuc3RhdGUuZGVwb3NpdE1hZGV9XG5cdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5zdGF0ZS5kZXBvc2l0TWFkZX1cblx0XHRcdFx0XHRcdGxvYWRpbmc9e3RoaXMuc3RhdGUuZGVwb3NpdExvYWRpbmd9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0RGVwb3NpdFxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHRcdDxoci8+XG5cblx0XHRcdFx0PGRpdiBzdHlsZT17e21hcmdpblRvcDogJzI0cHgnfX0+e3RoaXMucmVuZGVyUGFydGljaXBhbnRzKCl9PC9kaXY+XG5cdFx0XHRcdDxoNCBzdHlsZT17e21hcmdpblRvcDogJzEwcHgnfX0+RGVwb3NpdCBjb3VudDoge3RoaXMucHJvcHMuZGVwb3NpdENvdW50fTwvaDQ+XG5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGlkPSdmaW5hbGl6ZSdcblx0XHRcdFx0XHRwcmltYXJ5PXt0aGlzLnByb3BzLmRlcG9zaXRDb3VudCA9PT0gMn1cblx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5wcm9wcy5kZXBvc2l0Q291bnQgIT09IDIgfHwgIXRoaXMucHJvcHMuZmluYWxpemFibGV9XG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cblx0XHRcdFx0XHRsb2FkaW5nPXt0aGlzLnN0YXRlLmZpbmFsaXplTG9hZGluZ31cblx0XHRcdFx0PlxuXHRcdFx0XHRcdEZpbmFsaXplXG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0aWQ9J3dpdGhkcmF3J1xuXHRcdFx0XHRcdHByaW1hcnk9e3RoaXMucHJvcHMud2l0aGRyYXdhYmxlfVxuXHRcdFx0XHRcdGRpc2FibGVkPXshdGhpcy5wcm9wcy53aXRoZHJhd2FibGV9XG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cblx0XHRcdFx0XHRsb2FkaW5nPXt0aGlzLnN0YXRlLndpdGhkcmF3TG9hZGluZ31cblx0XHRcdFx0PlxuXHRcdFx0XHRcdFdpdGhkcmF3XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4Y2hhbmdlU2hvdztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9leGNoYW5nZXMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFMQTtBQW9EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUpBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFMQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBTkE7QUFBQTtBQVFBO0FBQ0E7QUFEQTtBQVJBO0FBQUE7QUFTQTtBQUNBO0FBREE7QUFUQTtBQUFBO0FBVUE7QUFDQTtBQURBO0FBVkE7QUFBQTtBQVlBO0FBQ0E7QUFEQTtBQVpBO0FBQUE7QUFhQTtBQUNBO0FBREE7QUFiQTtBQUFBO0FBY0E7QUFDQTtBQURBO0FBZEE7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7QUFsQkE7QUFBQTtBQW9CQTtBQUdBO0FBQUE7QUFDQTtBQXhCQTtBQUFBO0FBQUE7QUEyQkE7QUFNQTtBQUFBO0FBQ0E7QUFsQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBb0NBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBdkNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUF5Q0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQTdDQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7OztBQStDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOURBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUVBO0FBQ0E7QUFEQTs7OztBQUNBO0FBQ0E7O0FBREE7QUFDQTs7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUVBOztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBREE7Ozs7OztBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBREE7O0FBR0E7QUFBQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUdBO0FBQ0E7QUFDQTtBQURBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUpBOztBQUFBO0FBUUE7QUFSQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFBQTtBQUFBO0FBQ0E7O0FBUUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFMQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUEvTEE7QUFBQTs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcENBO0FBQ0E7QUFzTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==