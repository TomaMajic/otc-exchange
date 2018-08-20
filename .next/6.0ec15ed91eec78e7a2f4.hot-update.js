webpackHotUpdate(6,{

/***/ 1175:
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

var _Layout = __webpack_require__(735);

var _Layout2 = _interopRequireDefault(_Layout);

var _agent = __webpack_require__(1172);

var _agent2 = _interopRequireDefault(_agent);

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
					lineNumber: 23
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}, this.props.address), _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}, this.props.participants), _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			}, this.props.depositCount), _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, this.props.expirationTime), _react2.default.createElement(_semanticUiReact.Button, {
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, 'Withdraw'));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var address, agent, summary, participants, depositCount, expirationTime, withdrawable, finalizable;
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
								expirationTime = summary["_expirationTime"];
								withdrawable = summary["_withdrawable"];
								finalizable = summary["_finalizable"];
								return _context.abrupt('return', { address: address, participants: participants, depositCount: depositCount, expirationTime: expirationTime, withdrawable: withdrawable, finalizable: finalizable });

							case 13:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQWdlbnQiLCJCdXR0b24iLCJFeGNoYW5nZVNob3ciLCJwcm9wcyIsImFkZHJlc3MiLCJwYXJ0aWNpcGFudHMiLCJkZXBvc2l0Q291bnQiLCJleHBpcmF0aW9uVGltZSIsInF1ZXJ5IiwiYWdlbnQiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Iiwid2l0aGRyYXdhYmxlIiwiZmluYWxpemFibGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFTOzs7Ozs7O0ksQUFFSDs7Ozs7Ozs7Ozs7MkJBZUksQUFDUjswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUFLO0FBQUw7QUFBQSxXQUFLLEFBQUssTUFEWCxBQUNDLEFBQWdCLEFBQ2hCLDBCQUFBLGNBQUE7O2VBQUE7aUJBQUEsQUFBSTtBQUFKO0FBQUEsV0FBSSxBQUFLLE1BRlYsQUFFQyxBQUFlLEFBQ2YsK0JBQUEsY0FBQTs7ZUFBQTtpQkFBQSxBQUFJO0FBQUo7QUFBQSxXQUFJLEFBQUssTUFIVixBQUdDLEFBQWUsQUFDZiwrQkFBQSxjQUFBOztlQUFBO2lCQUFBLEFBQUk7QUFBSjtBQUFBLFdBQUksQUFBSyxNQUpWLEFBSUMsQUFBZSxBQUVmLGlDQUFBLEFBQUM7YUFBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQ0MsTUFQRixBQU1DLEFBS0EsNkJBQUEsQUFBQzthQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFDQyxNQWJILEFBQ0MsQUFXQyxBQU9GOzs7Ozt3R0FqQzRCLEE7Ozs7O1lBQ3RCO0Esa0JBQVUsTUFBQSxBQUFNLE0sQUFBTTs7ZUFDUixxQkFBQSxBQUFNLEE7O1lBQXBCO0E7O2VBQ2dCLE1BQUEsQUFBTSxRQUFOLEFBQWMsYUFBZCxBQUEyQixBOztZQUEzQztBLDJCQUNBO0EsdUJBQWUsUUFBQSxBLEFBQVEsQUFDdkI7QSx1QkFBZSxRQUFBLEFBQVEsQSxBQUN2QjtBLHlCQUFpQixRQUFBLEFBQVEsQUFDekIsQTtBLHVCQUFlLFFBQUEsQUFBUSxBLEFBQ3ZCO0Esc0JBQWMsUUFBQSxBLEFBQVE7eUNBRXJCLEVBQUUsU0FBRixTQUFXLGNBQVgsY0FBeUIsY0FBekIsY0FBdUMsZ0JBQXZDLGdCQUF1RCxjQUF2RCxjQUFxRSxhQUFyRSxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBWmtCLGdCQUFNLEEsQUFzQ2pDOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbWFtYWppYy9EZXNrdG9wL1RvbWEvRGV2L290Yy1leGNoYW5nZSJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4wZWMxNWVkOTFlZWM3OGU3YTJmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/ZjJiY2ZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQWdlbnQgZnJvbSAnLi4vLi4vZXRoZXJldW0vYWdlbnQnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5jbGFzcyBFeGNoYW5nZVNob3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcblx0XHRjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcblx0XHRjb25zdCBhZ2VudCA9IGF3YWl0IEFnZW50KGFkZHJlc3MpO1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBhZ2VudC5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG5cdFx0Y29uc3QgcGFydGljaXBhbnRzID0gc3VtbWFyeVtcIl9wYXJ0aWNpcGFudHNcIl07XG5cdFx0Y29uc3QgZGVwb3NpdENvdW50ID0gc3VtbWFyeVtcIl9kZXBvc2l0Q291bnRcIl07XG5cdFx0Y29uc3QgZXhwaXJhdGlvblRpbWUgPSBzdW1tYXJ5W1wiX2V4cGlyYXRpb25UaW1lXCJdO1xuXHRcdGNvbnN0IHdpdGhkcmF3YWJsZSA9IHN1bW1hcnlbXCJfd2l0aGRyYXdhYmxlXCJdO1xuXHRcdGNvbnN0IGZpbmFsaXphYmxlID0gc3VtbWFyeVtcIl9maW5hbGl6YWJsZVwiXTtcblxuXHRcdHJldHVybiB7IGFkZHJlc3MsIHBhcnRpY2lwYW50cywgZGVwb3NpdENvdW50LCBleHBpcmF0aW9uVGltZSwgd2l0aGRyYXdhYmxlLCBmaW5hbGl6YWJsZSB9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XG5cdFx0XHRcdDxoMz57dGhpcy5wcm9wcy5hZGRyZXNzfTwvaDM+XG5cdFx0XHRcdDxwPnt0aGlzLnByb3BzLnBhcnRpY2lwYW50c308L3A+XG5cdFx0XHRcdDxwPnt0aGlzLnByb3BzLmRlcG9zaXRDb3VudH08L3A+XG5cdFx0XHRcdDxwPnt0aGlzLnByb3BzLmV4cGlyYXRpb25UaW1lfTwvcD5cblxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0cHJpbWFyeVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0RmluYWxpemVcblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRwcmltYXJ5XG5cdFx0XHRcdD5cblx0XHRcdFx0XHRXaXRoZHJhd1xuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZVNob3c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQTFCQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYkE7QUFDQTtBQXFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9