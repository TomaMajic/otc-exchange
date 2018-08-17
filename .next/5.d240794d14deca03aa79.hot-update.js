webpackHotUpdate(5,{

/***/ 732:
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

var _Layout = __webpack_require__(733);

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = __webpack_require__(1004);

var _factory2 = _interopRequireDefault(_factory);

var _agent = __webpack_require__(1172);

var _agent2 = _interopRequireDefault(_agent);

var _web = __webpack_require__(1005);

var _web2 = _interopRequireDefault(_web);

var _link = __webpack_require__(992);

var _link2 = _interopRequireDefault(_link);

var _semanticUiReact = __webpack_require__(540);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/tomamajic/Desktop/Toma/Dev/otc-exchange/pages/index.js?entry';


var OTCIndex = function (_React$Component) {
	(0, _inherits3.default)(OTCIndex, _React$Component);

	function OTCIndex() {
		(0, _classCallCheck3.default)(this, OTCIndex);

		return (0, _possibleConstructorReturn3.default)(this, (OTCIndex.__proto__ || (0, _getPrototypeOf2.default)(OTCIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(OTCIndex, [{
		key: 'renderAgents',
		value: function renderAgents() {
			var items = this.props.agents.map(function (agent) {
				var link = _react2.default.createElement(_link2.default, { route: '', __source: {
						fileName: _jsxFileName,
						lineNumber: 30
					}
				}, _react2.default.createElement('a', {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 30
					}
				}, 'View Exchange'));

				return {
					header: agent,
					description: link,
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, this.renderAgents()));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var agents;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return _factory2.default.methods.getExchangeAgents().call();

							case 2:
								agents = _context.sent;
								return _context.abrupt('return', { agents: agents });

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return OTCIndex;
}(_react2.default.Component);

exports.default = OTCIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiZmFjdG9yeSIsIkFnZW50Iiwid2ViMyIsIkxpbmsiLCJDYXJkIiwiT1RDSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiYWdlbnRzIiwibWFwIiwiYWdlbnQiLCJsaW5rIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckFnZW50cyIsIm1ldGhvZHMiLCJnZXRFeGNoYW5nZUFnZW50cyIsImNhbGwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7QUFDUCxBQUFTOzs7Ozs7O0lBRUgsQTs7Ozs7Ozs7Ozs7aUNBbUJVLEFBQ2Q7T0FBTSxhQUFRLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsSUFBSSxVQUFBLEFBQUMsT0FBVSxBQUM5QztRQUFJLHVCQUFPLEFBQUMsZ0NBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQWU7QUFBZjtLQUFBLGtCQUFlLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxPQUExQixBQUFXLEFBQWUsQUFFMUI7OzthQUFPLEFBQ0UsQUFDUjtrQkFGTSxBQUVPLEFBQ2I7WUFIRCxBQUFPLEFBR0MsQUFFUjtBQUxPLEFBQ047QUFKRixBQUFjLEFBVWQsSUFWYzs7d0NBVVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtlQUFuQjtpQkFBUCxBQUFPLEFBQ1A7QUFETztJQUFBOzs7OzJCQUdDLEFBQ1I7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFDRztBQURIO0FBQUEsV0FGRixBQUNDLEFBQ0MsQUFDRyxBQUFLLEFBSVY7Ozs7Ozs7Ozs7OztlQXRDcUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLG9CQUFoQixBQUFvQyxBOztZQUFuRDtBO3lDQWFDLEVBQUUsUUFBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEJjLGdCQUFNLEEsQUE0QzdCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21hbWFqaWMvRGVza3RvcC9Ub21hL0Rldi9vdGMtZXhjaGFuZ2UifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/tomamajic/Desktop/Toma/Dev/otc-exchange/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/tomamajic/Desktop/Toma/Dev/otc-exchange/pages/index.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kMjQwNzk0ZDE0ZGVjYTAzYWE3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjMzNmFjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5JztcbmltcG9ydCBBZ2VudCBmcm9tICcuLi9ldGhlcmV1bS9hZ2VudCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5jbGFzcyBPVENJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcblx0XHRjb25zdCBhZ2VudHMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RXhjaGFuZ2VBZ2VudHMoKS5jYWxsKCk7XG5cdFx0Ly8gY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdC8vIGNvbnNvbGUubG9nKGFjY291bnRzKVxuXG5cdFx0Ly8gY29uc3QgZmlsdGVyZWRBZ2VudHMgPSBhd2FpdCBhZ2VudHMubWFwKGFzeW5jIChhZGRyZXNzKSA9PiB7XG5cdFx0Ly8gXHRsZXQgYWdlbnQgPSBhd2FpdCBBZ2VudChhZGRyZXNzKTtcblx0XHQvLyBcdGxldCBwYXJ0aWNpcGFudHMgPSBhd2FpdCBhZ2VudC5tZXRob2RzLmdldFBhcnRpY2lwYW50cygpLmNhbGwoKTtcblxuXHRcdC8vIFx0aWYocGFydGljaXBhbnRzLmluZGV4T2YoYWNjb3VudHNbMF0pID4gLTEpIHtcblx0XHQvLyBcdFx0cmV0dXJuIGFkZHJlc3M7XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfSk7XG5cblx0XHRyZXR1cm4geyBhZ2VudHMgfVxuXHR9XG5cblx0cmVuZGVyQWdlbnRzKCkge1xuXHRcdGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5hZ2VudHMubWFwKChhZ2VudCkgPT4ge1xuXHRcdFx0bGV0IGxpbmsgPSA8TGluayByb3V0ZT0nJz48YT5WaWV3IEV4Y2hhbmdlPC9hPjwvTGluaz5cblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aGVhZGVyOiBhZ2VudCxcblx0XHRcdFx0ZGVzY3JpcHRpb246IGxpbmssXG5cdFx0XHRcdGZsdWlkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7IHRoaXMucmVuZGVyQWdlbnRzKCkgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgT1RDSW5kZXg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUdBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7QUFqQ0E7QUFDQTtBQURBOztBQWFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWpCQTtBQUNBO0FBMkNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=