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