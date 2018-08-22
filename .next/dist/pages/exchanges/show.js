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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _agent = require('../../ethereum/agent');

var _agent2 = _interopRequireDefault(_agent);

var _token = require('../../ethereum/token');

var _token2 = _interopRequireDefault(_token);

var _routes = require('../../routes');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _web3Server = require('../../ethereum/web3-server');

var _web3Server2 = _interopRequireDefault(_web3Server);

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
			depositLoading: false,
			finalizeLoading: false,
			withdrawLoading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var participants, accounts, agent, token, senderBalance, contractBalance, serverAccounts, decimals, multiplier, amount, value;
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
								return (0, _agent2.default)(_this.props.address, 'server');

							case 7:
								agent = _context.sent;
								_context.next = 10;
								return (0, _token2.default)(_this.props.tokenAddresses[participants.indexOf(accounts[0])], 'client');

							case 10:
								token = _context.sent;
								_context.next = 13;
								return token.methods.balanceOf(accounts[0]).call();

							case 13:
								senderBalance = _context.sent;
								_context.next = 16;
								return token.methods.balanceOf(_this.props.address).call();

							case 16:
								contractBalance = _context.sent;
								_context.next = 19;
								return _web3Server2.default.eth.getAccounts();

							case 19:
								serverAccounts = _context.sent;
								_context.next = 22;
								return _web2.default.utils.toBN(18);

							case 22:
								decimals = _context.sent;
								_context.next = 25;
								return _web2.default.utils.toBN(10).pow(decimals);

							case 25:
								multiplier = _context.sent;
								_context.next = 28;
								return _web2.default.utils.toBN(_this.state.value);

							case 28:
								amount = _context.sent;
								value = amount * multiplier;

								_this.setState({ depositLoading: true });

								_context.prev = 31;
								_context.next = 34;
								return token.methods.transfer(_this.props.address, value).send({
									from: accounts[0]
								});

							case 34:
								_context.prev = 34;
								_context.next = 37;
								return agent.methods.depositSuccessfull(value, senderBalance, contractBalance, accounts[0]).send({
									from: serverAccounts[0]
								});

							case 37:
								_context.next = 42;
								break;

							case 39:
								_context.prev = 39;
								_context.t0 = _context['catch'](34);

								console.log(_context.t0);

							case 42:

								_routes.Router.pushRoute('/exchanges/' + _this.props.address);
								_context.next = 48;
								break;

							case 45:
								_context.prev = 45;
								_context.t1 = _context['catch'](31);

								console.log(_context.t1);

							case 48:

								_this.setState({ depositLoading: false, value: '' });

							case 49:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[31, 45], [34, 39]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _this.handleClick = function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
				var elementId, accounts, agent;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								elementId = event.target.id;

								event.preventDefault();

								_context2.next = 4;
								return _web2.default.eth.getAccounts();

							case 4:
								accounts = _context2.sent;
								_context2.next = 7;
								return (0, _agent2.default)(_this.props.address, 'client');

							case 7:
								agent = _context2.sent;

								_this.setState({ finalizeLoading: true });

								if (elementId === 'finalize') {
									_this.finalize(accounts[0], agent);
								} else {
									_this.withdraw(accounts[0], agent);
								}

								_this.setState({ finalizeLoading: false });

							case 11:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this2);
			}));

			return function (_x2) {
				return _ref3.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ExchangeShow, [{
		key: 'componentDidMount',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
				var accounts, agent, token, userTokenSymbol, balance, depositMade;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								_context3.next = 2;
								return _web2.default.eth.getAccounts();

							case 2:
								accounts = _context3.sent;
								_context3.next = 5;
								return (0, _agent2.default)(this.props.address, 'client');

							case 5:
								agent = _context3.sent;
								_context3.next = 8;
								return (0, _token2.default)(this.props.tokenAddresses[this.props.participants.indexOf(accounts[0])], 'client');

							case 8:
								token = _context3.sent;
								_context3.next = 11;
								return token.methods.symbol().call();

							case 11:
								userTokenSymbol = _context3.sent;
								_context3.t0 = parseInt;
								_context3.next = 15;
								return agent.methods.balances(accounts[0]).call();

							case 15:
								_context3.t1 = _context3.sent;
								balance = (0, _context3.t0)(_context3.t1);
								depositMade = false;

								if (balance !== 0) {
									depositMade = true;
								}

								this.setState({ depositMade: depositMade, userTokenSymbol: userTokenSymbol });

							case 20:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function componentDidMount() {
				return _ref4.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: 'finalize',
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(account, agent) {
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.prev = 0;
								_context4.next = 3;
								return agent.methods.finalizeExchange().send({
									from: account
								});

							case 3:

								_routes.Router.pushRoute('/exchanges/' + this.props.address);
								_context4.next = 9;
								break;

							case 6:
								_context4.prev = 6;
								_context4.t0 = _context4['catch'](0);

								console.log(_context4.t0);

							case 9:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this, [[0, 6]]);
			}));

			function finalize(_x3, _x4) {
				return _ref5.apply(this, arguments);
			}

			return finalize;
		}()
	}, {
		key: 'withdraw',
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(account, agent) {
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								_context5.prev = 0;
								_context5.next = 3;
								return agent.methods.withdraw().send({
									from: account
								});

							case 3:

								_routes.Router.pushRoute('/exchanges/' + this.props.address);
								_context5.next = 9;
								break;

							case 6:
								_context5.prev = 6;
								_context5.t0 = _context5['catch'](0);

								console.log(_context5.t0);

							case 9:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this, [[0, 6]]);
			}));

			function withdraw(_x5, _x6) {
				return _ref6.apply(this, arguments);
			}

			return withdraw;
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
					lineNumber: 167
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
					lineNumber: 173
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 174
				}
			}, this.props.address), _react2.default.createElement('h4', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 175
				}
			}, 'Time to finalize: ', this.props.expirationDate), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 177
				}
			}), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 178
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '20%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 179
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 180
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
					lineNumber: 181
				}
			})), _react2.default.createElement(_semanticUiReact.Button, {
				style: { marginTop: '5px', marginBottom: '15px' },
				primary: !this.state.depositMade,
				disabled: this.state.depositMade,
				loading: this.state.depositLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 189
				}
			}, 'Deposit')), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 198
				}
			}), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 200
				}
			}, this.renderParticipants()), _react2.default.createElement('h4', { style: { marginTop: '10px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 201
				}
			}, 'Deposit count: ', this.props.depositCount), _react2.default.createElement(_semanticUiReact.Button, {
				id: 'finalize',
				primary: this.props.depositCount === 2,
				disabled: this.props.depositCount !== 2,
				onClick: this.handleClick,
				loading: this.state.finalizeLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 203
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				id: 'withdraw',
				primary: this.props.withdrawable,
				disabled: !this.props.withdrawable,
				onClick: this.handleClick,
				loading: this.state.withdrawLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 212
				}
			}, 'Withdraw'));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(props) {
				var address, agent, summary, participants, depositCount, now, daysLeft, hoursLeft, expirationDate, withdrawable, finalizable, firstTokenAddr, secondTokenAddr, tokenAddresses, firstToken, secondToken, firstTokenName, secondTokenName, tokens;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								address = props.query.address;
								_context6.next = 3;
								return (0, _agent2.default)(address);

							case 3:
								agent = _context6.sent;
								_context6.next = 6;
								return agent.methods.getSummary().call();

							case 6:
								summary = _context6.sent;
								participants = summary["_participants"];
								depositCount = parseInt(summary["_depositCount"]);
								now = new Date();
								daysLeft = Math.floor((new Date(summary["_expirationTime"] * 1000) - now) / (1000 * 60 * 60 * 24));
								hoursLeft = Math.floor(((new Date(summary["_expirationTime"] * 1000) - now) / (1000 * 60 * 60 * 24) - daysLeft) * 24);
								expirationDate = daysLeft + ' days & ' + hoursLeft + ' hours';
								withdrawable = summary["_withdrawable"];
								finalizable = summary["_finalizable"];
								firstTokenAddr = summary["_firstToken"];
								secondTokenAddr = summary["_secondToken"];
								tokenAddresses = [firstTokenAddr, secondTokenAddr];
								_context6.next = 20;
								return (0, _token2.default)(firstTokenAddr);

							case 20:
								firstToken = _context6.sent;
								_context6.next = 23;
								return (0, _token2.default)(secondTokenAddr);

							case 23:
								secondToken = _context6.sent;
								_context6.next = 26;
								return firstToken.methods.name().call();

							case 26:
								firstTokenName = _context6.sent;
								_context6.next = 29;
								return secondToken.methods.name().call();

							case 29:
								secondTokenName = _context6.sent;
								tokens = [firstTokenName, secondTokenName];
								return _context6.abrupt('return', { address: address, participants: participants, depositCount: depositCount, expirationDate: expirationDate, withdrawable: withdrawable, finalizable: finalizable, tokens: tokens, tokenAddresses: tokenAddresses });

							case 32:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function getInitialProps(_x7) {
				return _ref7.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return ExchangeShow;
}(_react2.default.Component);

exports.default = ExchangeShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiQ2FyZCIsIklucHV0IiwiRm9ybSIsIkxheW91dCIsIkFnZW50IiwiVG9rZW4iLCJSb3V0ZXIiLCJ3ZWIzIiwic2VydmVyV2ViMyIsIkV4Y2hhbmdlU2hvdyIsInN0YXRlIiwidmFsdWUiLCJkZXBvc2l0TWFkZSIsInVzZXJUb2tlblN5bWJvbCIsImRlcG9zaXRMb2FkaW5nIiwiZmluYWxpemVMb2FkaW5nIiwid2l0aGRyYXdMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhbnRzIiwicHJvcHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYWRkcmVzcyIsImFnZW50IiwidG9rZW5BZGRyZXNzZXMiLCJpbmRleE9mIiwidG9rZW4iLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsInNlbmRlckJhbGFuY2UiLCJjb250cmFjdEJhbGFuY2UiLCJzZXJ2ZXJBY2NvdW50cyIsInV0aWxzIiwidG9CTiIsImRlY2ltYWxzIiwicG93IiwibXVsdGlwbGllciIsImFtb3VudCIsInNldFN0YXRlIiwidHJhbnNmZXIiLCJzZW5kIiwiZnJvbSIsImRlcG9zaXRTdWNjZXNzZnVsbCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoUm91dGUiLCJoYW5kbGVDbGljayIsImVsZW1lbnRJZCIsInRhcmdldCIsImlkIiwiZmluYWxpemUiLCJ3aXRoZHJhdyIsInN5bWJvbCIsInBhcnNlSW50IiwiYmFsYW5jZXMiLCJiYWxhbmNlIiwiYWNjb3VudCIsImZpbmFsaXplRXhjaGFuZ2UiLCJpdGVtcyIsIm1hcCIsInBhcnRpY2lwYW50IiwiaW5kZXgiLCJoZWFkZXIiLCJtZXRhIiwidG9rZW5zIiwiZmx1aWQiLCJleHBpcmF0aW9uRGF0ZSIsIndpZHRoIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicmVuZGVyUGFydGljaXBhbnRzIiwiZGVwb3NpdENvdW50Iiwid2l0aGRyYXdhYmxlIiwicXVlcnkiLCJnZXRTdW1tYXJ5Iiwic3VtbWFyeSIsIm5vdyIsIkRhdGUiLCJkYXlzTGVmdCIsIk1hdGgiLCJmbG9vciIsImhvdXJzTGVmdCIsImZpbmFsaXphYmxlIiwiZmlyc3RUb2tlbkFkZHIiLCJzZWNvbmRUb2tlbkFkZHIiLCJmaXJzdFRva2VuIiwic2Vjb25kVG9rZW4iLCJuYW1lIiwiZmlyc3RUb2tlbk5hbWUiLCJzZWNvbmRUb2tlbk5hbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFRLEFBQU0sQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBUyxBQUFjOztBQUN2QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFHakI7Ozs7Ozs7Ozs7Ozs7OztzTixBQUNMO1VBQVEsQUFDQSxBQUNQO2dCQUZPLEFBRU0sQUFDYjtvQkFITyxBQUdVLEFBQ2pCO21CQUpPLEFBSVMsQUFDaEI7b0JBTE8sQUFLVSxBQUNqQjtvQixBQU5PLEFBTVU7QUFOVixBQUNQLFcsQUFvREQ7d0ZBQVcsaUJBQUEsQUFBTyxPQUFQOzRIQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQU0sQUFFQTs7QUFISSx1QkFHVyxNQUFBLEFBQUssTUFIaEIsQUFHc0I7d0JBSHRCO2VBSWEsY0FBQSxBQUFLLElBSmxCLEFBSWEsQUFBUzs7WUFBMUI7QUFKSSw0QkFBQTt3QkFBQTtlQUtVLHFCQUFNLE1BQUEsQUFBSyxNQUFYLEFBQWlCLFNBTDNCLEFBS1UsQUFBMEI7O1lBQXhDO0FBTEkseUJBQUE7d0JBQUE7ZUFNVSxxQkFBTSxNQUFBLEFBQUssTUFBTCxBQUFXLGVBQWUsYUFBQSxBQUFhLFFBQVEsU0FBckQsQUFBTSxBQUEwQixBQUFx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QixBQUFzQyxRQUF2QyxBQUErQyxRQUFRLE9BQUEsQUFBSyxLQUFMLEFBQVEsSyxBQUExRSxBQUFXLEFBQWtFLEFBQ3hGO0Esb0JBQVksS0FBQSxBQUFLLE1BQU0sQ0FBRSxDQUFDLElBQUEsQUFBSSxLQUFLLFFBQUEsQUFBUSxxQkFBakIsQUFBc0MsUUFBdkMsQUFBK0MsUUFBUSxPQUFBLEFBQUssS0FBTCxBQUFRLEtBQWhFLEFBQUMsQUFBa0UsTUFBcEUsQUFBMkUsWUFBdEYsQUFBa0csQUFDOUcsQTtBLHlCQUFvQixBLHdCLEFBQW1CLFlBRXZDO0EsdUJBQWUsUUFBQSxBLEFBQVEsQUFDdkI7QSxzQkFBYyxRLEFBQUEsQUFBUSxBQUV0QjtBLHlCQUFpQixRQUFBLEEsQUFBUSxBQUN6QjtBLDBCQUFrQixRQUFBLEFBQVEsQSxBQUMxQjtBLHlCQUFpQixDQUFBLEFBQUMsZ0JBQUQsQSxBQUFpQjs7ZUFFZixxQixBQUFBLEFBQU07O1lBQXpCO0E7O2VBQ29CLHFCLEFBQUEsQUFBTTs7WUFBMUI7QTs7ZUFDdUIsV0FBQSxBQUFXLFFBQVgsQUFBbUIsT0FBbkIsQUFBMEIsQTs7WUFBakQ7QTs7ZUFDd0IsWUFBQSxBQUFZLFFBQVosQUFBb0IsT0FBcEIsQSxBQUEyQjs7WUFBbkQ7QSxvQ0FDQTtBLGlCQUFTLENBQUEsQUFBQyxnQkFBRCxBLEFBQWlCOzBDQUV6QixFQUFFLFNBQUYsU0FBVyxjQUFYLGNBQXlCLGNBQXpCLGNBQXVDLGdCQUF2QyxnQkFBdUQsY0FBdkQsY0FBcUUsYUFBckUsYUFBa0YsUUFBbEYsUUFBMEYsZ0IsQUFBMUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFuQ2tCLGdCQUFNLEEsQUF1TmpDOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbWFtYWppYy9EZXNrdG9wL1RvbWEvRGV2L290Yy1leGNoYW5nZSJ9