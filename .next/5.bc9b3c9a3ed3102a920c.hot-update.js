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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tomamajic/Desktop/Toma/Dev/otc-exchange/pages/exchanges/show.js?entry';


var ExchangeShow = function (_React$Component) {
	(0, _inherits3.default)(ExchangeShow, _React$Component);

	function ExchangeShow() {
		(0, _classCallCheck3.default)(this, ExchangeShow);

		return (0, _possibleConstructorReturn3.default)(this, (ExchangeShow.__proto__ || (0, _getPrototypeOf2.default)(ExchangeShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(ExchangeShow, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, this.props.address), _react2.default.createElement('h4', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, 'Time to finalize: ', this.props.expirationDate), _react2.default.createElement(_semanticUiReact.Button, {
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, 'Withdraw'));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var address, agent, summary, participants, depositCount, now, daysLeft, hoursLeft, expirationDate, withdrawable, finalizable, firstTokenAddr, secondTokenAddr, firstToken, secondToken, firstTokenName, secondTokenName;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								address = props.query.address;
								_context.next = 3;
								return (0, _agent2.default)(address);

							case 3:
								agent = _context.sent;
								_context.next = 6;
								return agent.methods.getSummary().call();

							case 6:
								summary = _context.sent;
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
								_context.next = 19;
								return (0, _token2.default)(firstTokenAddr);

							case 19:
								firstToken = _context.sent;
								_context.next = 22;
								return (0, _token2.default)(secondTokenAddr);

							case 22:
								secondToken = _context.sent;
								_context.next = 25;
								return firstToken.methods.name().call();

							case 25:
								firstTokenName = _context.sent;
								_context.next = 28;
								return secondToken.methods.name().call();

							case 28:
								secondTokenName = _context.sent;
								return _context.abrupt('return', { address: address, participants: participants, depositCount: depositCount, expirationDate: expirationDate, withdrawable: withdrawable, finalizable: finalizable, firstTokenName: firstTokenName, secondTokenName: secondTokenName });

							case 30:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return ExchangeShow;
}(_react2.default.Component);

exports.default = ExchangeShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQWdlbnQiLCJUb2tlbiIsIkJ1dHRvbiIsIkV4Y2hhbmdlU2hvdyIsInByb3BzIiwiYWRkcmVzcyIsImV4cGlyYXRpb25EYXRlIiwicXVlcnkiLCJhZ2VudCIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJwYXJ0aWNpcGFudHMiLCJkZXBvc2l0Q291bnQiLCJub3ciLCJEYXRlIiwiZGF5c0xlZnQiLCJNYXRoIiwiZmxvb3IiLCJob3Vyc0xlZnQiLCJ3aXRoZHJhd2FibGUiLCJmaW5hbGl6YWJsZSIsImZpcnN0VG9rZW5BZGRyIiwic2Vjb25kVG9rZW5BZGRyIiwiZmlyc3RUb2tlbiIsInNlY29uZFRva2VuIiwibmFtZSIsImZpcnN0VG9rZW5OYW1lIiwic2Vjb25kVG9rZW5OYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVM7Ozs7Ozs7SUFFSCxBOzs7Ozs7Ozs7OzsyQkEyQkksQUFDUjswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUFLO0FBQUw7QUFBQSxXQUFLLEFBQUssTUFEWCxBQUNDLEFBQWdCLEFBQ2hCLDBCQUFBLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BQXVCLDJCQUFBLEFBQUssTUFGN0IsQUFFQyxBQUFrQyxBQUdsQyxpQ0FBQSxBQUFDO2FBQUQ7O2VBQUE7aUJBQUE7QUFBQTtBQUNDLE1BTkYsQUFLQyxBQUtBLDZCQUFBLEFBQUM7YUFBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQ0MsTUFaSCxBQUNDLEFBVUMsQUFPRjs7Ozs7d0dBNUM0QixBOzs7OztZQUN0QjtBLGtCQUFVLE1BQUEsQUFBTSxNQUFNLEE7O2VBQ1IscUJBQUEsQUFBTSxBOztZQUFwQjtBOztlQUNnQixNQUFBLEFBQU0sUUFBTixBQUFjLGFBQWEsQSxBQUEzQjs7WUFBaEI7QSwyQkFDQTtBLHVCQUFlLFFBQUEsQUFBUSxBLEFBQ3ZCO0EsdUJBQWUsUUFBUSxBLEFBQVIsQUFFZjtBLGNBQU0sSUFBQSxBLEFBQUksQUFDVjtBLG1CQUFXLEtBQUEsQUFBSyxNQUFNLENBQUMsSUFBQSxBQUFJLEtBQUssUUFBQSxBQUFRLHFCQUFqQixBQUFzQyxRQUF2QyxBQUErQyxRQUFRLE9BQUEsQUFBSyxLQUFMLEFBQVEsS0FBMUUsQUFBVyxBQUFrRSxBQUN4RixBO0Esb0JBQVksS0FBQSxBQUFLLE1BQU0sQ0FBRSxDQUFDLElBQUEsQUFBSSxLQUFLLFFBQUEsQUFBUSxxQkFBakIsQUFBc0MsUUFBdkMsQUFBK0MsUUFBUSxPQUFBLEFBQUssS0FBTCxBQUFRLEtBQWhFLEFBQUMsQUFBa0UsTUFBcEUsQUFBMkUsWSxBQUF0RixBQUFrRyxBQUM5RztBLHlCLEFBQW9CLHdCLEFBQW1CLFlBRXZDO0EsdUJBQWUsUUFBQSxBQUFRLEEsQUFDdkI7QSxzQkFBYyxRQUFBLEFBQVEsQUFFdEIsQTtBLHlCQUFpQixRQUFBLEFBQVEsQUFDekIsQTtBLDBCQUFrQixRQUFRLEEsQUFBUjs7ZUFDQyxxQixBQUFBLEFBQU07O1lBQXpCO0E7O2VBQ29CLHFCQUFBLEEsQUFBTTs7WUFBMUI7QTs7ZUFDdUIsV0FBQSxBQUFXLFFBQVgsQUFBbUIsT0FBbkIsQSxBQUEwQjs7WUFBakQ7QTs7ZUFDd0IsWUFBQSxBQUFZLFFBQVosQUFBb0IsT0FBcEIsQSxBQUEyQjs7WUFBbkQ7QTt5Q0FFQyxFQUFFLFNBQUYsU0FBVyxjQUFYLGNBQXlCLGNBQXpCLGNBQXVDLGdCQUF2QyxnQkFBdUQsY0FBdkQsY0FBcUUsYUFBckUsYUFBa0YsZ0JBQWxGLGdCQUFrRyxpQixBQUFsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhCa0IsZ0JBQU0sQSxBQWlEakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYW1hamljL0Rlc2t0b3AvVG9tYS9EZXYvb3RjLWV4Y2hhbmdlIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iYzliM2M5YTNlZDMxMDJhOTIwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/ODVmMmJiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQWdlbnQgZnJvbSAnLi4vLi4vZXRoZXJldW0vYWdlbnQnO1xuaW1wb3J0IFRva2VuIGZyb20gJy4uLy4uL2V0aGVyZXVtL3Rva2VuJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY2xhc3MgRXhjaGFuZ2VTaG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG5cdFx0Y29uc3QgYWRkcmVzcyA9IHByb3BzLnF1ZXJ5LmFkZHJlc3M7XG5cdFx0Y29uc3QgYWdlbnQgPSBhd2FpdCBBZ2VudChhZGRyZXNzKTtcblx0XHRjb25zdCBzdW1tYXJ5ID0gYXdhaXQgYWdlbnQubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuXHRcdGNvbnN0IHBhcnRpY2lwYW50cyA9IHN1bW1hcnlbXCJfcGFydGljaXBhbnRzXCJdO1xuXHRcdGNvbnN0IGRlcG9zaXRDb3VudCA9IHN1bW1hcnlbXCJfZGVwb3NpdENvdW50XCJdO1xuXG5cdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBkYXlzTGVmdCA9IE1hdGguZmxvb3IoKG5ldyBEYXRlKHN1bW1hcnlbXCJfZXhwaXJhdGlvblRpbWVcIl0gKiAxMDAwKSAtIG5vdykgLyAoMTAwMCo2MCo2MCoyNCkpO1xuXHRcdGNvbnN0IGhvdXJzTGVmdCA9IE1hdGguZmxvb3IoKCgobmV3IERhdGUoc3VtbWFyeVtcIl9leHBpcmF0aW9uVGltZVwiXSAqIDEwMDApIC0gbm93KSAvICgxMDAwKjYwKjYwKjI0KSkgLSBkYXlzTGVmdCkgKiAyNCk7XG5cdFx0Y29uc3QgZXhwaXJhdGlvbkRhdGUgPSBgJHtkYXlzTGVmdH0gZGF5cyAmICR7aG91cnNMZWZ0fSBob3Vyc2A7XG5cblx0XHRjb25zdCB3aXRoZHJhd2FibGUgPSBzdW1tYXJ5W1wiX3dpdGhkcmF3YWJsZVwiXTtcblx0XHRjb25zdCBmaW5hbGl6YWJsZSA9IHN1bW1hcnlbXCJfZmluYWxpemFibGVcIl07XG5cblx0XHRjb25zdCBmaXJzdFRva2VuQWRkciA9IHN1bW1hcnlbXCJfZmlyc3RUb2tlblwiXTtcblx0XHRjb25zdCBzZWNvbmRUb2tlbkFkZHIgPSBzdW1tYXJ5W1wiX3NlY29uZFRva2VuXCJdO1xuXHRcdGNvbnN0IGZpcnN0VG9rZW4gPSBhd2FpdCBUb2tlbihmaXJzdFRva2VuQWRkcik7XG5cdFx0Y29uc3Qgc2Vjb25kVG9rZW4gPSBhd2FpdCBUb2tlbihzZWNvbmRUb2tlbkFkZHIpO1xuXHRcdGNvbnN0IGZpcnN0VG9rZW5OYW1lID0gYXdhaXQgZmlyc3RUb2tlbi5tZXRob2RzLm5hbWUoKS5jYWxsKCk7XG5cdFx0Y29uc3Qgc2Vjb25kVG9rZW5OYW1lID0gYXdhaXQgc2Vjb25kVG9rZW4ubWV0aG9kcy5uYW1lKCkuY2FsbCgpO1xuXG5cdFx0cmV0dXJuIHsgYWRkcmVzcywgcGFydGljaXBhbnRzLCBkZXBvc2l0Q291bnQsIGV4cGlyYXRpb25EYXRlLCB3aXRoZHJhd2FibGUsIGZpbmFsaXphYmxlLCBmaXJzdFRva2VuTmFtZSwgc2Vjb25kVG9rZW5OYW1lIH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PGgzPnt0aGlzLnByb3BzLmFkZHJlc3N9PC9oMz5cblx0XHRcdFx0PGg0PlRpbWUgdG8gZmluYWxpemU6IHt0aGlzLnByb3BzLmV4cGlyYXRpb25EYXRlfTwvaDQ+XG5cdFx0XHRcdFxuXG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRwcmltYXJ5XG5cdFx0XHRcdD5cblx0XHRcdFx0XHRGaW5hbGl6ZVxuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdHByaW1hcnlcblx0XHRcdFx0PlxuXHRcdFx0XHRcdFdpdGhkcmF3XG5cdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4Y2hhbmdlU2hvdztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9leGNoYW5nZXMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBOztBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7O0FBckNBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF6QkE7QUFDQTtBQWdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9