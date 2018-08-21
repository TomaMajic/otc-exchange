webpackHotUpdate(5,{

/***/ 733:
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

var _Layout = __webpack_require__(734);

var _Layout2 = _interopRequireDefault(_Layout);

var _agent = __webpack_require__(1005);

var _agent2 = _interopRequireDefault(_agent);

var _token = __webpack_require__(1172);

var _token2 = _interopRequireDefault(_token);

var _semanticUiReact = __webpack_require__(482);

var _web = __webpack_require__(526);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(1174);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iZTkyZTBkNDA3NjRhZWE3ZTlmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/MTY3MjkyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQWdlbnQgZnJvbSAnLi4vLi4vZXRoZXJldW0vYWdlbnQnO1xuaW1wb3J0IFRva2VuIGZyb20gJy4uLy4uL2V0aGVyZXVtL3Rva2VuJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgSW5wdXQsIEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5cbmNsYXNzIEV4Y2hhbmdlU2hvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdHZhbHVlOiAnJyxcblx0XHRkZXBvc2l0TWFkZTogZmFsc2UsXG5cdFx0dXNlclRva2VuU3ltYm9sOiAnJyxcblx0XHRsb2FkaW5nOiBmYWxzZVxuXHR9XG5cblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuXHRcdGNvbnN0IGFkZHJlc3MgPSBwcm9wcy5xdWVyeS5hZGRyZXNzO1xuXHRcdGNvbnN0IGFnZW50ID0gYXdhaXQgQWdlbnQoYWRkcmVzcyk7XG5cdFx0Y29uc3Qgc3VtbWFyeSA9IGF3YWl0IGFnZW50Lm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcblx0XHRjb25zdCBwYXJ0aWNpcGFudHMgPSBzdW1tYXJ5W1wiX3BhcnRpY2lwYW50c1wiXTtcblx0XHRjb25zdCBkZXBvc2l0Q291bnQgPSBzdW1tYXJ5W1wiX2RlcG9zaXRDb3VudFwiXTtcblx0XHRjb25zb2xlLmxvZyhzdW1tYXJ5KVxuXHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgZGF5c0xlZnQgPSBNYXRoLmZsb29yKChuZXcgRGF0ZShzdW1tYXJ5W1wiX2V4cGlyYXRpb25UaW1lXCJdICogMTAwMCkgLSBub3cpIC8gKDEwMDAqNjAqNjAqMjQpKTtcblx0XHRjb25zdCBob3Vyc0xlZnQgPSBNYXRoLmZsb29yKCgoKG5ldyBEYXRlKHN1bW1hcnlbXCJfZXhwaXJhdGlvblRpbWVcIl0gKiAxMDAwKSAtIG5vdykgLyAoMTAwMCo2MCo2MCoyNCkpIC0gZGF5c0xlZnQpICogMjQpO1xuXHRcdGNvbnN0IGV4cGlyYXRpb25EYXRlID0gYCR7ZGF5c0xlZnR9IGRheXMgJiAke2hvdXJzTGVmdH0gaG91cnNgO1xuXG5cdFx0Y29uc3Qgd2l0aGRyYXdhYmxlID0gc3VtbWFyeVtcIl93aXRoZHJhd2FibGVcIl07XG5cdFx0Y29uc3QgZmluYWxpemFibGUgPSBzdW1tYXJ5W1wiX2ZpbmFsaXphYmxlXCJdO1xuXG5cdFx0Y29uc3QgZmlyc3RUb2tlbkFkZHIgPSBzdW1tYXJ5W1wiX2ZpcnN0VG9rZW5cIl07XG5cdFx0Y29uc3Qgc2Vjb25kVG9rZW5BZGRyID0gc3VtbWFyeVtcIl9zZWNvbmRUb2tlblwiXTtcblx0XHRjb25zdCB0b2tlbkFkZHJlc3NlcyA9IFtmaXJzdFRva2VuQWRkciwgc2Vjb25kVG9rZW5BZGRyXTtcblxuXHRcdGNvbnN0IGZpcnN0VG9rZW4gPSBhd2FpdCBUb2tlbihmaXJzdFRva2VuQWRkcik7XG5cdFx0Y29uc3Qgc2Vjb25kVG9rZW4gPSBhd2FpdCBUb2tlbihzZWNvbmRUb2tlbkFkZHIpO1xuXHRcdGNvbnN0IGZpcnN0VG9rZW5OYW1lID0gYXdhaXQgZmlyc3RUb2tlbi5tZXRob2RzLm5hbWUoKS5jYWxsKCk7XG5cdFx0Y29uc3Qgc2Vjb25kVG9rZW5OYW1lID0gYXdhaXQgc2Vjb25kVG9rZW4ubWV0aG9kcy5uYW1lKCkuY2FsbCgpO1xuXHRcdGNvbnN0IHRva2VucyA9IFtmaXJzdFRva2VuTmFtZSwgc2Vjb25kVG9rZW5OYW1lXTtcblxuXHRcdHJldHVybiB7IGFkZHJlc3MsIHBhcnRpY2lwYW50cywgZGVwb3NpdENvdW50LCBleHBpcmF0aW9uRGF0ZSwgd2l0aGRyYXdhYmxlLCBmaW5hbGl6YWJsZSwgdG9rZW5zLCB0b2tlbkFkZHJlc3NlcyB9XG5cdH1cblxuXHRhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cdFx0Y29uc3QgYWdlbnQgPSBhd2FpdCBBZ2VudCh0aGlzLnByb3BzLmFkZHJlc3MpO1xuXHRcdGNvbnN0IHRva2VuID0gYXdhaXQgVG9rZW4odGhpcy5wcm9wcy50b2tlbkFkZHJlc3Nlc1t0aGlzLnByb3BzLnBhcnRpY2lwYW50cy5pbmRleE9mKGFjY291bnRzWzBdKV0pO1xuXG5cdFx0Y29uc3QgdXNlclRva2VuU3ltYm9sID0gYXdhaXQgdG9rZW4ubWV0aG9kcy5zeW1ib2woKS5jYWxsKCk7XG5cdFx0Y29uc3QgYmFsYW5jZSA9IGF3YWl0IGFnZW50Lm1ldGhvZHMuYmFsYW5jZXMoYWNjb3VudHNbMF0pLmNhbGwoKTtcblx0XHRsZXQgZGVwb3NpdE1hZGUgPSBmYWxzZTtcblxuXHRcdGlmKGJhbGFuY2UgIT09IDApIHtcblx0XHRcdGRlcG9zaXRNYWRlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgZGVwb3NpdE1hZGUsIHVzZXJUb2tlblN5bWJvbCB9KVxuXHR9XG5cblx0b25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Y29uc3QgcGFydGljaXBhbnRzID0gdGhpcy5wcm9wcy5wYXJ0aWNpcGFudHM7XG5cdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdGNvbnN0IHRva2VuID0gYXdhaXQgVG9rZW4odGhpcy5wcm9wcy50b2tlbkFkZHJlc3Nlc1twYXJ0aWNpcGFudHMuaW5kZXhPZihhY2NvdW50c1swXSldKTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHRva2VuLm1ldGhvZHNcblx0XHRcdFx0LnRyYW5zZmVyKHRoaXMucHJvcHMuYWRkcmVzcywgdGhpcy5zdGF0ZS52YWx1ZSlcblx0XHRcdFx0LnNlbmQoe1xuXHRcdFx0XHRcdGZyb206IGFjY291bnRzWzBdXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRSb3V0ZXIucHVzaFJvdXRlKGAvZXhjaGFuZ2VzLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApO1xuXHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgdmFsdWU6ICcnIH0pO1xuXHR9XG5cblx0cmVuZGVyUGFydGljaXBhbnRzKCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5wYXJ0aWNpcGFudHMubWFwKChwYXJ0aWNpcGFudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGhlYWRlcjogcGFydGljaXBhbnQsXG5cdFx0XHRcdG1ldGE6IHRoaXMucHJvcHMudG9rZW5zW2luZGV4XSxcblx0XHRcdFx0Zmx1aWQ6IHRydWVcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtc1BlclJvdz17Mn0gaXRlbXM9e2l0ZW1zfSAvPlxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8aDM+e3RoaXMucHJvcHMuYWRkcmVzc308L2gzPlxuXHRcdFx0XHQ8aDQ+VGltZSB0byBmaW5hbGl6ZToge3RoaXMucHJvcHMuZXhwaXJhdGlvbkRhdGV9PC9oND5cblxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG5cdFx0XHRcdFx0PEZvcm0uRmllbGQgc3R5bGU9e3t3aWR0aDogJzIwJSd9fT5cblx0XHRcdFx0XHRcdDxsYWJlbD5FbnRlciBhbW91bnQ6IDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG5cdFx0XHRcdFx0XHRcdGxhYmVsPXt0aGlzLnN0YXRlLnVzZXJUb2tlblN5bWJvbH1cblx0XHRcdFx0XHRcdFx0bGFiZWxQb3NpdGlvbj0ncmlnaHQnXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHsgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pIH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvRm9ybS5GaWVsZD5cblxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHN0eWxlPXt7bWFyZ2luVG9wOiAnNXB4JywgbWFyZ2luQm90dG9tOiAnMTVweCd9fVxuXHRcdFx0XHRcdFx0cHJpbWFyeT17dGhpcy5zdGF0ZS5kZXBvc2l0TWFkZX1cblx0XHRcdFx0XHRcdGFjdGl2ZT17IXRoaXMuc3RhdGUuZGVwb3NpdE1hZGV9XG5cdFx0XHRcdFx0XHRsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0RGVwb3NpdFxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHRcdDxoci8+XG5cblx0XHRcdFx0PGRpdiBzdHlsZT17e21hcmdpblRvcDogJzI0cHgnfX0+e3RoaXMucmVuZGVyUGFydGljaXBhbnRzKCl9PC9kaXY+XG5cdFx0XHRcdDxwIHN0eWxlPXt7bWFyZ2luVG9wOiAnMTBweCd9fT5EZXBvc2l0IGNvdW50OiB7dGhpcy5wcm9wcy5kZXBvc2l0Q291bnR9PC9wPlxuXG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRwcmltYXJ5PXt0aGlzLnByb3BzLmRlcG9zaXRDb3VudCA9PT0gMn1cblx0XHRcdFx0XHRhY3RpdmU9e3RoaXMucHJvcHMuZGVwb3NpdENvdW50ICE9PSAyfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0RmluYWxpemVcblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRwcmltYXJ5PXt0aGlzLnByb3BzLndpdGhkcmF3YWJsZX1cblx0XHRcdFx0XHRhY3RpdmU9eyF0aGlzLnByb3BzLndpdGhkcmF3YWJsZX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdFdpdGhkcmF3XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4Y2hhbmdlU2hvdztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9leGNoYW5nZXMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBOztBQUhBO0FBa0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFKQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBQ0E7QUFNQTtBQUNBO0FBUkE7QUFBQTtBQVVBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBaEJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFrQkE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQXRCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWZBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUVBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7OztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBREE7O0FBR0E7QUFBQTtBQUdBO0FBSkE7QUFNQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFKQTs7QUFBQTtBQVFBO0FBUkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBQUE7QUFBQTtBQUNBOztBQVFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7O0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBOztBQUZBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FBdEhBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFsQ0E7QUFDQTtBQXdJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9