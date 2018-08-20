'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _agent = require('../../ethereum/agent');

var _agent2 = _interopRequireDefault(_agent);

var _semanticUiReact = require('semantic-ui-react');

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