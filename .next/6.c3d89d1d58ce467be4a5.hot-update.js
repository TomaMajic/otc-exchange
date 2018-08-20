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

var _token = __webpack_require__(1176);

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
					lineNumber: 32
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, this.props.address), _react2.default.createElement('p', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, this.props.participants), _react2.default.createElement(_semanticUiReact.Button, {
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, 'Withdraw'));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var address, agent, summary, participants, depositCount, expirationTime, withdrawable, finalizable, firstTokenAddr, secondTokenAddr, firstToken, secondToken;
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
								firstTokenAddr = summary["_firstToken"];
								secondTokenAddr = summary["_secondToken"];

								console.log(firstTokenAddr);
								_context.next = 17;
								return (0, _token2.default)(firstTokenAddr);

							case 17:
								firstToken = _context.sent;
								_context.next = 20;
								return (0, _token2.default)(secondTokenAddr);

							case 20:
								secondToken = _context.sent;
								return _context.abrupt('return', { address: address, participants: participants, depositCount: depositCount, expirationTime: expirationTime, withdrawable: withdrawable, finalizable: finalizable });

							case 22:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQWdlbnQiLCJUb2tlbiIsIkJ1dHRvbiIsIkV4Y2hhbmdlU2hvdyIsInByb3BzIiwiYWRkcmVzcyIsInBhcnRpY2lwYW50cyIsInF1ZXJ5IiwiYWdlbnQiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiZGVwb3NpdENvdW50IiwiZXhwaXJhdGlvblRpbWUiLCJ3aXRoZHJhd2FibGUiLCJmaW5hbGl6YWJsZSIsImZpcnN0VG9rZW5BZGRyIiwic2Vjb25kVG9rZW5BZGRyIiwiY29uc29sZSIsImxvZyIsImZpcnN0VG9rZW4iLCJzZWNvbmRUb2tlbiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFTOzs7Ozs7O0ksQUFFSDs7Ozs7Ozs7Ozs7MkJBdUJJLEFBQ1I7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFBSztBQUFMO0FBQUEsV0FBSyxBQUFLLE1BRFgsQUFDQyxBQUFnQixBQUNoQiwwQkFBQSxjQUFBOztlQUFBO2lCQUFBLEFBQUk7QUFBSjtBQUFBLFdBQUksQUFBSyxNQUZWLEFBRUMsQUFBZSxBQUVmLCtCQUFBLEFBQUM7YUFBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQ0MsTUFMRixBQUlDLEFBS0EsNkJBQUEsQUFBQzthQUFEOztlQUFBO2lCQUFBO0FBQUE7QUFDQyxNQVhILEFBQ0MsQUFTQyxBQU9GOzs7Ozt3RyxBQXZDNEI7Ozs7O1lBQ3RCO0Esa0JBQVUsTUFBQSxBQUFNLE0sQUFBTTs7ZUFDUixxQkFBQSxBLEFBQU07O1lBQXBCO0E7O2VBQ2dCLE1BQUEsQUFBTSxRQUFOLEFBQWMsYUFBZCxBQUEyQixBOztZQUEzQztBLDJCQUNBO0EsdUJBQWUsUUFBQSxBQUFRLEEsQUFDdkI7QSx1QkFBZSxRQUFBLEFBQVEsQUFDdkIsQTtBLHlCQUFpQixRQUFBLEFBQVEsQSxBQUN6QjtBLHVCQUFlLFFBQUEsQUFBUSxBLEFBQ3ZCO0Esc0JBQWMsUUFBQSxBQUFRLEEsQUFFdEI7QSx5QkFBaUIsUUFBQSxBQUNqQixBLEFBRHlCO0EsMEJBQ1AsUUFBQSxBQUFRLEEsQUFDaEM7O2dCQUFBLEFBQVEsSUFBUixBQUFZOztlQUNhLHFCQUFBLEFBQU0sQTs7WUFBekI7QTs7ZUFDb0IscUIsQUFBQSxBQUFNOztZQUExQjtBO3lDQUlDLEVBQUUsU0FBRixTQUFXLGNBQVgsY0FBeUIsY0FBekIsY0FBdUMsZ0JBQXZDLGdCQUF1RCxjQUF2RCxjQUFxRSxhQUFyRSxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcEJrQixnQkFBTSxBLEFBNENqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21hbWFqaWMvRGVza3RvcC9Ub21hL0Rldi9vdGMtZXhjaGFuZ2UifQ==

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5jM2Q4OWQxZDU4Y2U0NjdiZTRhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/NDAzN2YwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQWdlbnQgZnJvbSAnLi4vLi4vZXRoZXJldW0vYWdlbnQnO1xuaW1wb3J0IFRva2VuIGZyb20gJy4uLy4uL2V0aGVyZXVtL3Rva2VuJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuY2xhc3MgRXhjaGFuZ2VTaG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG5cdFx0Y29uc3QgYWRkcmVzcyA9IHByb3BzLnF1ZXJ5LmFkZHJlc3M7XG5cdFx0Y29uc3QgYWdlbnQgPSBhd2FpdCBBZ2VudChhZGRyZXNzKTtcblx0XHRjb25zdCBzdW1tYXJ5ID0gYXdhaXQgYWdlbnQubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuXHRcdGNvbnN0IHBhcnRpY2lwYW50cyA9IHN1bW1hcnlbXCJfcGFydGljaXBhbnRzXCJdO1xuXHRcdGNvbnN0IGRlcG9zaXRDb3VudCA9IHN1bW1hcnlbXCJfZGVwb3NpdENvdW50XCJdO1xuXHRcdGNvbnN0IGV4cGlyYXRpb25UaW1lID0gc3VtbWFyeVtcIl9leHBpcmF0aW9uVGltZVwiXTtcblx0XHRjb25zdCB3aXRoZHJhd2FibGUgPSBzdW1tYXJ5W1wiX3dpdGhkcmF3YWJsZVwiXTtcblx0XHRjb25zdCBmaW5hbGl6YWJsZSA9IHN1bW1hcnlbXCJfZmluYWxpemFibGVcIl07XG5cblx0XHRjb25zdCBmaXJzdFRva2VuQWRkciA9IHN1bW1hcnlbXCJfZmlyc3RUb2tlblwiXTtcblx0XHRjb25zdCBzZWNvbmRUb2tlbkFkZHIgPSBzdW1tYXJ5W1wiX3NlY29uZFRva2VuXCJdO1xuXHRcdGNvbnNvbGUubG9nKGZpcnN0VG9rZW5BZGRyKVxuXHRcdGNvbnN0IGZpcnN0VG9rZW4gPSBhd2FpdCBUb2tlbihmaXJzdFRva2VuQWRkcik7XG5cdFx0Y29uc3Qgc2Vjb25kVG9rZW4gPSBhd2FpdCBUb2tlbihzZWNvbmRUb2tlbkFkZHIpO1xuXHRcdC8vIGNvbnN0IGZpcnN0VG9rZW5OYW1lID0gYXdhaXQgZmlyc3RUb2tlbi5tZXRob2RzLm5hbWUoKS5jYWxsKCk7XG5cdFx0Ly8gY29uc3Qgc2Vjb25kVG9rZW5OYW1lID0gYXdhaXQgc2Vjb25kVG9rZW4ubWV0aG9kcy5uYW1lKCkuY2FsbCgpO1xuXG5cdFx0cmV0dXJuIHsgYWRkcmVzcywgcGFydGljaXBhbnRzLCBkZXBvc2l0Q291bnQsIGV4cGlyYXRpb25UaW1lLCB3aXRoZHJhd2FibGUsIGZpbmFsaXphYmxlIH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PGgzPnt0aGlzLnByb3BzLmFkZHJlc3N9PC9oMz5cblx0XHRcdFx0PHA+e3RoaXMucHJvcHMucGFydGljaXBhbnRzfTwvcD5cblxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0cHJpbWFyeVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0RmluYWxpemVcblx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRwcmltYXJ5XG5cdFx0XHRcdD5cblx0XHRcdFx0XHRXaXRoZHJhd1xuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGNoYW5nZVNob3c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZXhjaGFuZ2VzL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7OztBQWhDQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFDQTtBQUNBO0FBREE7O0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBckJBO0FBQ0E7QUEyQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==