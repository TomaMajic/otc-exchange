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

var _token = require('../../ethereum/token');

var _token2 = _interopRequireDefault(_token);

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