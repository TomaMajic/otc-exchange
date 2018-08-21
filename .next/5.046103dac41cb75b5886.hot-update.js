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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wNDYxMDNkYWM0MWNiNzViNTg4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/MGIxY2YwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQWdlbnQgZnJvbSAnLi4vLi4vZXRoZXJldW0vYWdlbnQnO1xuaW1wb3J0IFRva2VuIGZyb20gJy4uLy4uL2V0aGVyZXVtL3Rva2VuJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgSW5wdXQsIEZvcm0gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcblxuY2xhc3MgRXhjaGFuZ2VTaG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0dmFsdWU6ICcnLFxuXHRcdGRlcG9zaXRNYWRlOiBmYWxzZSxcblx0XHR1c2VyVG9rZW5TeW1ib2w6ICcnXG5cdH1cblxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG5cdFx0Y29uc3QgYWRkcmVzcyA9IHByb3BzLnF1ZXJ5LmFkZHJlc3M7XG5cdFx0Y29uc3QgYWdlbnQgPSBhd2FpdCBBZ2VudChhZGRyZXNzKTtcblx0XHRjb25zdCBzdW1tYXJ5ID0gYXdhaXQgYWdlbnQubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuXHRcdGNvbnN0IHBhcnRpY2lwYW50cyA9IHN1bW1hcnlbXCJfcGFydGljaXBhbnRzXCJdO1xuXHRcdGNvbnN0IGRlcG9zaXRDb3VudCA9IHN1bW1hcnlbXCJfZGVwb3NpdENvdW50XCJdO1xuXG5cdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBkYXlzTGVmdCA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKHN1bW1hcnlbXCJfZXhwaXJhdGlvblRpbWVcIl0gKiAxMDAwKSAtIG5vdykgLyAoMTAwMCo2MCo2MCoyNCkpO1xuXHRcdGNvbnN0IGhvdXJzTGVmdCA9IE1hdGguZmxvb3IoKCgobmV3IERhdGUoc3VtbWFyeVtcIl9leHBpcmF0aW9uVGltZVwiXSAqIDEwMDApIC0gbm93KSAvICgxMDAwKjYwKjYwKjI0KSkgLSBkYXlzTGVmdCkgKiAyNCk7XG5cdFx0Y29uc3QgZXhwaXJhdGlvbkRhdGUgPSBgJHtkYXlzTGVmdH0gZGF5cyAmICR7aG91cnNMZWZ0fSBob3Vyc2A7XG5cblx0XHRjb25zdCB3aXRoZHJhd2FibGUgPSBzdW1tYXJ5W1wiX3dpdGhkcmF3YWJsZVwiXTtcblx0XHRjb25zdCBmaW5hbGl6YWJsZSA9IHN1bW1hcnlbXCJfZmluYWxpemFibGVcIl07XG5cblx0XHRjb25zdCBmaXJzdFRva2VuQWRkciA9IHN1bW1hcnlbXCJfZmlyc3RUb2tlblwiXTtcblx0XHRjb25zdCBzZWNvbmRUb2tlbkFkZHIgPSBzdW1tYXJ5W1wiX3NlY29uZFRva2VuXCJdO1xuXHRcdGNvbnN0IHRva2VuQWRkcmVzc2VzID0gW2ZpcnN0VG9rZW5BZGRyLCBzZWNvbmRUb2tlbkFkZHJdO1xuXG5cdFx0Y29uc3QgZmlyc3RUb2tlbiA9IGF3YWl0IFRva2VuKGZpcnN0VG9rZW5BZGRyKTtcblx0XHRjb25zdCBzZWNvbmRUb2tlbiA9IGF3YWl0IFRva2VuKHNlY29uZFRva2VuQWRkcik7XG5cdFx0Y29uc3QgZmlyc3RUb2tlbk5hbWUgPSBhd2FpdCBmaXJzdFRva2VuLm1ldGhvZHMubmFtZSgpLmNhbGwoKTtcblx0XHRjb25zdCBzZWNvbmRUb2tlbk5hbWUgPSBhd2FpdCBzZWNvbmRUb2tlbi5tZXRob2RzLm5hbWUoKS5jYWxsKCk7XG5cdFx0Y29uc3QgdG9rZW5zID0gW2ZpcnN0VG9rZW5OYW1lLCBzZWNvbmRUb2tlbk5hbWVdO1xuXG5cdFx0cmV0dXJuIHsgYWRkcmVzcywgcGFydGljaXBhbnRzLCBkZXBvc2l0Q291bnQsIGV4cGlyYXRpb25EYXRlLCB3aXRoZHJhd2FibGUsIGZpbmFsaXphYmxlLCB0b2tlbnMsIHRva2VuQWRkcmVzc2VzIH1cblx0fVxuXG5cdGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KHRoaXMucHJvcHMuYWRkcmVzcyk7XG5cdFx0Y29uc3QgdG9rZW4gPSBhd2FpdCBUb2tlbih0aGlzLnByb3BzLnRva2VuQWRkcmVzc2VzW3RoaXMucHJvcHMucGFydGljaXBhbnRzLmluZGV4T2YoYWNjb3VudHNbMF0pXSk7XG5cblx0XHRjb25zdCB1c2VyVG9rZW5TeW1ib2wgPSBhd2FpdCB0b2tlbi5tZXRob2RzLnN5bWJvbCgpLmNhbGwoKTtcblx0XHRjb25zdCBiYWxhbmNlID0gYXdhaXQgYWdlbnQubWV0aG9kcy5iYWxhbmNlcyhhY2NvdW50c1swXSkuY2FsbCgpO1xuXHRcdGxldCBkZXBvc2l0TWFkZSA9IGZhbHNlO1xuXG5cdFx0aWYoYmFsYW5jZSAhPT0gMCkge1xuXHRcdFx0ZGVwb3NpdE1hZGUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoeyBkZXBvc2l0TWFkZSwgdXNlclRva2VuU3ltYm9sIH0pXG5cdH1cblxuXHRvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcblx0fVxuXG5cdHJlbmRlclBhcnRpY2lwYW50cygpIHtcblx0XHRjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMucGFydGljaXBhbnRzLm1hcCgocGFydGljaXBhbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRoZWFkZXI6IHBhcnRpY2lwYW50LFxuXHRcdFx0XHRtZXRhOiB0aGlzLnByb3BzLnRva2Vuc1tpbmRleF0sXG5cdFx0XHRcdGZsdWlkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gPENhcmQuR3JvdXAgaXRlbXNQZXJSb3c9ezJ9IGl0ZW1zPXtpdGVtc30gLz5cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PGgzPnt0aGlzLnByb3BzLmFkZHJlc3N9PC9oMz5cblx0XHRcdFx0PGg0PlRpbWUgdG8gZmluYWxpemU6IHt0aGlzLnByb3BzLmV4cGlyYXRpb25EYXRlfTwvaDQ+XG5cblx0XHRcdFx0PGhyLz5cblx0XHRcdFx0PEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuXHRcdFx0XHRcdDxGb3JtLkZpZWxkIHN0eWxlPXt7d2lkdGg6ICcyMCUnfX0+XG5cdFx0XHRcdFx0XHQ8bGFiZWw+RW50ZXIgYW1vdW50OiA8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuXHRcdFx0XHRcdFx0XHRsYWJlbD17dGhpcy5zdGF0ZS51c2VyVG9rZW5TeW1ib2x9XG5cdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3JpZ2h0J1xuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiB7IHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KSB9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm0uRmllbGQ+XG5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRzdHlsZT17e21hcmdpblRvcDogJzVweCcsIG1hcmdpbkJvdHRvbTogJzE1cHgnfX1cblx0XHRcdFx0XHRcdHByaW1hcnk9e3RoaXMuc3RhdGUuZGVwb3NpdE1hZGV9XG5cdFx0XHRcdFx0XHRhY3RpdmU9eyF0aGlzLnN0YXRlLmRlcG9zaXRNYWRlfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdERlcG9zaXRcblx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0XHQ8aHIvPlxuXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6ICcyNHB4J319Pnt0aGlzLnJlbmRlclBhcnRpY2lwYW50cygpfTwvZGl2PlxuXHRcdFx0XHQ8cCBzdHlsZT17e21hcmdpblRvcDogJzEwcHgnfX0+RGVwb3NpdCBjb3VudDoge3RoaXMucHJvcHMuZGVwb3NpdENvdW50fTwvcD5cblxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0cHJpbWFyeT17dGhpcy5wcm9wcy5kZXBvc2l0Q291bnQgPT09IDJ9XG5cdFx0XHRcdFx0YWN0aXZlPXt0aGlzLnByb3BzLmRlcG9zaXRDb3VudCAhPT0gMn1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdEZpbmFsaXplXG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0cHJpbWFyeT17dGhpcy5wcm9wcy53aXRoZHJhd2FibGV9XG5cdFx0XHRcdFx0YWN0aXZlPXshdGhpcy5wcm9wcy53aXRoZHJhd2FibGV9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHRXaXRoZHJhd1xuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZVNob3c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTs7QUFGQTtBQWlEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZkE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTs7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQURBOztBQUdBO0FBQUE7QUFHQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSkE7O0FBQUE7QUFRQTtBQVJBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7O0FBSEE7QUFBQTtBQUFBO0FBQ0E7O0FBT0E7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTs7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7O0FBRkE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7QUFuR0E7QUFBQTs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakNBO0FBQ0E7QUFvSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==