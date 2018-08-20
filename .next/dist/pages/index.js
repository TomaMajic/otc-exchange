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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _agent = require('../ethereum/agent');

var _agent2 = _interopRequireDefault(_agent);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _semanticUiReact = require('semantic-ui-react');

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
				var link = _react2.default.createElement(_link2.default, { href: '/exchanges/' + agent, __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiZmFjdG9yeSIsIkFnZW50Iiwid2ViMyIsIkxpbmsiLCJDYXJkIiwiT1RDSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiYWdlbnRzIiwibWFwIiwiYWdlbnQiLCJsaW5rIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckFnZW50cyIsIm1ldGhvZHMiLCJnZXRFeGNoYW5nZUFnZW50cyIsImNhbGwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7QUFDUCxBQUFTOzs7Ozs7O0lBRUgsQTs7Ozs7Ozs7Ozs7aUNBbUJVLEFBQ2Q7T0FBTSxhQUFRLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsSUFBSSxVQUFBLEFBQUMsT0FBVSxBQUM5QztRQUFJLHVCQUFPLEFBQUMsZ0NBQUssc0JBQU4sQUFBMEI7Z0JBQTFCO2tCQUFBLEFBQW1DO0FBQW5DO0tBQUEsa0JBQW1DLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxPQUE5QyxBQUFXLEFBQW1DLEFBRTlDOzs7YUFBTyxBQUNFLEFBQ1I7a0JBRk0sQUFFTyxBQUNiO1lBSEQsQUFBTyxBQUdDLEFBRVI7QUFMTyxBQUNOO0FBSkYsQUFBYyxBQVVkLElBVmM7O3dDQVVQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7ZUFBbkI7aUJBQVAsQUFBTyxBQUNQO0FBRE87SUFBQTs7OzsyQkFHQyxBQUNSOzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0c7QUFESDtBQUFBLFdBRkYsQUFDQyxBQUNDLEFBQ0csQUFBSyxBQUlWOzs7Ozs7Ozs7Ozs7ZUF0Q3FCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixvQkFBaEIsQUFBb0MsQTs7WUFBbkQ7QTt5Q0FhQyxFQUFFLFFBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhCYyxnQkFBTSxBLEFBNEM3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYW1hamljL0Rlc2t0b3AvVG9tYS9EZXYvb3RjLWV4Y2hhbmdlIn0=