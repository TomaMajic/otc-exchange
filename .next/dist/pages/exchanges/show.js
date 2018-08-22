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
				var participants, accounts, agent, token, senderBalance, contractBalance, serverAccounts;
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

								_this.setState({ depositLoading: true });

								_context.prev = 21;
								_context.next = 24;
								return token.methods.transfer(_this.props.address, _this.state.value).send({
									from: accounts[0]
								});

							case 24:
								_context.prev = 24;
								_context.next = 27;
								return agent.methods.depositSuccessfull(_this.state.value, senderBalance, contractBalance, accounts[0]).send({
									from: serverAccounts[0]
								});

							case 27:
								_context.next = 32;
								break;

							case 29:
								_context.prev = 29;
								_context.t0 = _context['catch'](24);

								console.log(_context.t0);

							case 32:

								_routes.Router.pushRoute('/exchanges/' + _this.props.address);
								_context.next = 38;
								break;

							case 35:
								_context.prev = 35;
								_context.t1 = _context['catch'](21);

								console.log(_context.t1);

							case 38:

								_this.setState({ depositLoading: false, value: '' });

							case 39:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[21, 35], [24, 29]]);
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
					lineNumber: 162
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
					lineNumber: 168
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 169
				}
			}, this.props.address), _react2.default.createElement('h4', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 170
				}
			}, 'Time to finalize: ', this.props.expirationDate), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 172
				}
			}), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 173
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '20%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 174
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 175
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
					lineNumber: 176
				}
			})), _react2.default.createElement(_semanticUiReact.Button, {
				style: { marginTop: '5px', marginBottom: '15px' },
				primary: !this.state.depositMade,
				disabled: this.state.depositMade,
				loading: this.state.depositLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 184
				}
			}, 'Deposit')), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 193
				}
			}), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 195
				}
			}, this.renderParticipants()), _react2.default.createElement('h4', { style: { marginTop: '10px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 196
				}
			}, 'Deposit count: ', this.props.depositCount), _react2.default.createElement(_semanticUiReact.Button, {
				id: 'finalize',
				primary: this.props.depositCount === 2,
				disabled: this.props.depositCount !== 2,
				onClick: this.handleClick,
				loading: this.state.finalizeLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 198
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				id: 'withdraw',
				primary: this.props.withdrawable,
				disabled: !this.props.withdrawable,
				onClick: this.handleClick,
				loading: this.state.withdrawLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 207
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiQ2FyZCIsIklucHV0IiwiRm9ybSIsIkxheW91dCIsIkFnZW50IiwiVG9rZW4iLCJSb3V0ZXIiLCJ3ZWIzIiwic2VydmVyV2ViMyIsIkV4Y2hhbmdlU2hvdyIsInN0YXRlIiwidmFsdWUiLCJkZXBvc2l0TWFkZSIsInVzZXJUb2tlblN5bWJvbCIsImRlcG9zaXRMb2FkaW5nIiwiZmluYWxpemVMb2FkaW5nIiwid2l0aGRyYXdMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhbnRzIiwicHJvcHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYWRkcmVzcyIsImFnZW50IiwidG9rZW5BZGRyZXNzZXMiLCJpbmRleE9mIiwidG9rZW4iLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsInNlbmRlckJhbGFuY2UiLCJjb250cmFjdEJhbGFuY2UiLCJzZXJ2ZXJBY2NvdW50cyIsInNldFN0YXRlIiwidHJhbnNmZXIiLCJzZW5kIiwiZnJvbSIsImRlcG9zaXRTdWNjZXNzZnVsbCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoUm91dGUiLCJoYW5kbGVDbGljayIsImVsZW1lbnRJZCIsInRhcmdldCIsImlkIiwiZmluYWxpemUiLCJ3aXRoZHJhdyIsInN5bWJvbCIsInBhcnNlSW50IiwiYmFsYW5jZXMiLCJiYWxhbmNlIiwiYWNjb3VudCIsImZpbmFsaXplRXhjaGFuZ2UiLCJpdGVtcyIsIm1hcCIsInBhcnRpY2lwYW50IiwiaW5kZXgiLCJoZWFkZXIiLCJtZXRhIiwidG9rZW5zIiwiZmx1aWQiLCJleHBpcmF0aW9uRGF0ZSIsIndpZHRoIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicmVuZGVyUGFydGljaXBhbnRzIiwiZGVwb3NpdENvdW50Iiwid2l0aGRyYXdhYmxlIiwicXVlcnkiLCJnZXRTdW1tYXJ5Iiwic3VtbWFyeSIsIm5vdyIsIkRhdGUiLCJkYXlzTGVmdCIsIk1hdGgiLCJmbG9vciIsImhvdXJzTGVmdCIsImZpbmFsaXphYmxlIiwiZmlyc3RUb2tlbkFkZHIiLCJzZWNvbmRUb2tlbkFkZHIiLCJmaXJzdFRva2VuIiwic2Vjb25kVG9rZW4iLCJuYW1lIiwiZmlyc3RUb2tlbk5hbWUiLCJzZWNvbmRUb2tlbk5hbWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFRLEFBQU0sQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBUyxBQUFjOztBQUN2QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFHakI7Ozs7Ozs7Ozs7Ozs7OztzTkFDTCxBO1VBQVEsQUFDQSxBQUNQO2dCQUZPLEFBRU0sQUFDYjtvQkFITyxBQUdVLEFBQ2pCO21CQUpPLEFBSVMsQUFDaEI7b0JBTE8sQUFLVSxBQUNqQjtvQkFOTyxBQU1VLEE7QUFOVixBQUNQLFcsQUFvREQ7d0ZBQVcsaUJBQUEsQUFBTyxPQUFQOzhFQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQU0sQUFFQTs7QUFISSx1QkFHVyxNQUFBLEFBQUssTUFIaEIsQUFHc0I7d0JBSHRCO2VBSWEsY0FBQSxBQUFLLElBSmxCLEFBSWEsQUFBUzs7WUFBMUI7QUFKSSw0QkFBQTt3QkFBQTtlQUtVLHFCQUFNLE1BQUEsQUFBSyxNQUFYLEFBQWlCLFNBTDNCLEFBS1UsQUFBMEI7O1lBQXhDO0FBTEkseUJBQUE7d0JBQUE7ZUFNVSxxQkFBTSxNQUFBLEFBQUssTUFBTCxBQUFXLGVBQWUsYUFBQSxBQUFhLFFBQVEsU0FBckQsQUFBTSxBQUEwQixBQUFxQixBQUFTLE1BTnhFLEFBTVUsQUFBb0U7O1lBQWxGO0FBTkkseUJBQUE7d0JBQUE7ZUFRa0IsTUFBQSxBQUFNLFFBQU4sQUFBYyxVQUFVLFNBQXhCLEFBQXdCLEFBQVMsSUFSbkQsQUFRa0IsQUFBcUM7O1lBQTNEO0FBUkksaUNBQUE7d0JBQUE7ZUFTb0IsTUFBQSxBQUFNLFFBQU4sQUFBYyxVQUFVLE1BQUEsQUFBSyxNQUE3QixBQUFtQyxTQVR2RCxBQVNvQixBQUE0Qzs7WUFBcEU7QUFUSSxtQ0FBQTt3QkFBQTtlQVVtQixxQkFBQSxBQUFXLElBVjlCLEFBVW1CLEFBQWU7O1lBQXRDO0FBVkksa0NBWVY7O2NBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBWk4sQUFZVixBQUFjLEFBQWtCOzt3QkFadEI7d0JBQUE7cUJBZUgsQUFBTSxRQUFOLEFBQ0osU0FBUyxNQUFBLEFBQUssTUFEVixBQUNnQixTQUFTLE1BQUEsQUFBSyxNQUQ5QixBQUNvQyxPQURwQyxBQUVKO2VBQ00sU0FsQkMsQUFlSCxBQUVDLEFBQ0MsQUFBUztBQURWLEFBQ0wsU0FISTs7WUFmRzt3QkFBQTt3QkFBQTtxQkFzQkYsQUFBTSxRQUFOLEFBQ0osbUJBQW1CLE1BQUEsQUFBSyxNQURwQixBQUMwQixPQUQxQixBQUVBLGVBRkEsQUFHQSxpQkFDQSxTQUpBLEFBSUEsQUFBUyxJQUpULEFBS0o7ZUFDTSxlQTVCQSxBQXNCRixBQUtDLEFBQ0MsQUFBZTtBQURoQixBQUNMLFNBTkk7O1lBdEJFO3dCQUFBO0FBQUE7O1lBQUE7d0JBQUE7d0NBK0JSOztnQkFBQSxBQUFRLGFBL0JBOztZQWtDVDs7dUJBQUEsQUFBTywwQkFBd0IsTUFBQSxBQUFLLE1BbEMzQixBQWtDVCxBQUEwQzt3QkFsQ2pDO0FBQUE7O1lBQUE7d0JBQUE7d0NBb0NUOztnQkFBQSxBQUFRLGFBcENDOztZQXVDVjs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxnQkFBRixBQUFrQixPQUFPLE9BdkM3QixBQXVDVixBQUFjLEFBQWdDOztZQXZDcEM7WUFBQTt3QkFBQTs7QUFBQTt3Q0FBQTtBOzs7OzthLEFBMENYO3dGQUFjLGtCQUFBLEFBQU8sT0FBUDs2QkFBQTtvRUFBQTtlQUFBO3lDQUFBO1lBQ1A7QUFETyxvQkFDSyxNQUFBLEFBQU0sT0FEWCxBQUNrQixBQUMvQjs7Y0FGYSxBQUViLEFBQU07O3lCQUZPO2VBSVUsY0FBQSxBQUFLLElBSmYsQUFJVSxBQUFTOztZQUExQjtBQUpPLDZCQUFBO3lCQUFBO2VBS08scUJBQU0sTUFBQSxBQUFLLE1BQVgsQUFBaUIsU0FMeEIsQUFLTyxBQUEwQjs7WUFBeEM7QUFMTywwQkFPYjs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxpQkFBaEIsQUFBYyxBQUFtQixBQUVqQzs7WUFBRyxjQUFILEFBQWlCLFlBQVksQUFDNUI7ZUFBQSxBQUFLLFNBQVMsU0FBZCxBQUFjLEFBQVMsSUFBdkIsQUFBMkIsQUFDM0I7QUFGRCxlQUVPLEFBQ047ZUFBQSxBQUFLLFNBQVMsU0FBZCxBQUFjLEFBQVMsSUFBdkIsQUFBMkIsQUFDM0I7QUFFRDs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxpQkFmSCxBQWViLEFBQWMsQUFBbUI7O1lBZnBCO1lBQUE7eUJBQUE7O0FBQUE7aUJBQUE7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBekRVLGNBQUEsQUFBSyxJLEFBQUwsQUFBUzs7WUFBMUI7QTs7ZUFDYyxxQkFBTSxLQUFBLEFBQUssTUFBWCxBQUFpQixTLEFBQWpCLEFBQTBCOztZQUF4QztBOztlQUNjLHFCQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsZUFBZSxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsUUFBUSxTQUFoRSxBQUFNLEFBQTBCLEFBQWdDLEFBQVMsTSxBQUF6RSxBQUErRTs7WUFBN0Y7QTs7ZUFFd0IsTUFBQSxBQUFNLFFBQU4sQUFBYyxTQUFkLEFBQXVCLEE7O1lBQS9DO0E7dUJBQ1UsQTs7ZUFBZSxNQUFBLEFBQU0sUUFBTixBQUFjLFNBQVMsU0FBdkIsQUFBdUIsQUFBUyxJLEFBQWhDLEFBQW9DOzs7aUNBQTdEO0EsOENBQ0Y7QSxzQixBQUFjLEFBRWxCOztZQUFHLFlBQUgsQUFBZSxHQUFHLEFBQ2pCO3VCQUFBLEFBQWMsQUFDZDtBQUVEOzthQUFBLEFBQUssU0FBUyxFQUFFLGFBQUYsYUFBZSxpQkFBN0IsQUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswR0ErREEsQSxTLEFBQVM7Ozs7Ozs7cUJBRWhCLEFBQU0sUUFBTixBQUNKLG1CQURJLEFBRUo7ZSxBQUZJLEFBRUMsQUFDQztBQURELEFBQ0wsU0FISTs7WUFNTjs7dUJBQUEsQUFBTywwQkFBd0IsS0FBQSxBQUFLLE1BQXBDLEFBQTBDOzs7Ozs7MENBRTFDOztnQkFBQSxBQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBHLEFBSUssUyxBQUFTOzs7Ozs7O3FCQUVoQixBQUFNLFFBQU4sQUFDSixXQURJLEFBRUo7ZSxBQUZJLEFBRUMsQUFDQztBQURELEFBQ0wsU0FISTs7WUFNTjs7dUJBQUEsQUFBTywwQkFBd0IsS0FBQSxBQUFLLE1BQXBDLEFBQTBDOzs7Ozs7MENBRTFDOztnQkFBQSxBQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBSVc7Z0JBQ3BCOztPQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixJQUFJLFVBQUEsQUFBQyxhQUFELEFBQWMsT0FBVSxBQUNqRTs7YUFBTyxBQUNFLEFBQ1I7V0FBTSxPQUFBLEFBQUssTUFBTCxBQUFXLE9BRlgsQUFFQSxBQUFrQixBQUN4QjtZQUhELEFBQU8sQUFHQyxBQUVSO0FBTE8sQUFDTjtBQUZGLEFBQWMsQUFRZCxJQVJjOzt3Q0FRUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxhQUFaLEFBQXlCLEdBQUcsT0FBNUIsQUFBbUM7ZUFBbkM7aUJBQVAsQUFBTyxBQUNQO0FBRE87SUFBQTs7OzsyQkFHQztnQkFFUjs7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUEsQUFBSztBQUFMO0FBQUEsV0FBSyxBQUFLLE1BRFgsQUFDQyxBQUFnQixBQUNoQiwwQkFBQSxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUF1QiwyQkFBQSxBQUFLLE1BRjdCLEFBRUMsQUFBa0MsQUFFbEM7O2VBQUE7aUJBSkQsQUFJQyxBQUNBO0FBREE7QUFBQSx1QkFDQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUI7ZUFBckI7aUJBQUEsQUFDQztBQUREO3NCQUNFLGNBQUQsc0JBQUEsQUFBTSxTQUFNLE9BQU8sRUFBQyxPQUFwQixBQUFtQixBQUFRO2VBQTNCO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSxtQ0FBQSxBQUFDO1dBQ08sS0FBQSxBQUFLLE1BRGIsQUFDbUIsQUFDbEI7V0FBTyxLQUFBLEFBQUssTUFGYixBQUVtQixBQUNsQjttQkFIRCxBQUdlLEFBQ2Q7Y0FBVSxrQkFBQSxBQUFDLE9BQVUsQUFBRTtZQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sTUFBQSxBQUFNLE9BQTVCLEFBQWMsQUFBcUIsQUFBUztBQUpwRTs7ZUFBQTtpQkFIRixBQUNDLEFBRUMsQUFRRDtBQVJDO0FBQ0Msd0JBT0YsQUFBQztXQUNPLEVBQUMsV0FBRCxBQUFZLE9BQU8sY0FEM0IsQUFDUSxBQUFpQyxBQUN4QzthQUFTLENBQUMsS0FBQSxBQUFLLE1BRmhCLEFBRXNCLEFBQ3JCO2NBQVUsS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ3JCO2FBQVMsS0FBQSxBQUFLLE1BSmYsQUFJcUI7O2VBSnJCO2lCQUFBO0FBQUE7QUFDQyxNQWpCSCxBQUtDLEFBV0MsQUFTRDs7ZUFBQTtpQkF6QkQsQUF5QkMsQUFFQTtBQUZBO0FBQUEsdUJBRUEsY0FBQSxTQUFLLE9BQU8sRUFBQyxXQUFiLEFBQVksQUFBWTtlQUF4QjtpQkFBQSxBQUFrQztBQUFsQztXQTNCRCxBQTJCQyxBQUFrQyxBQUFLLEFBQ3ZDLHVDQUFBLGNBQUEsUUFBSSxPQUFPLEVBQUMsV0FBWixBQUFXLEFBQVk7ZUFBdkI7aUJBQUE7QUFBQTtNQUFnRCx3QkFBQSxBQUFLLE1BNUJ0RCxBQTRCQyxBQUEyRCxBQUUzRCwrQkFBQSxBQUFDO1FBQUQsQUFDSSxBQUNIO2FBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxpQkFGckIsQUFFc0MsQUFDckM7Y0FBVSxLQUFBLEFBQUssTUFBTCxBQUFXLGlCQUh0QixBQUd1QyxBQUN0QzthQUFTLEtBSlYsQUFJZSxBQUNkO2FBQVMsS0FBQSxBQUFLLE1BTGYsQUFLcUI7O2VBTHJCO2lCQUFBO0FBQUE7QUFDQyxNQS9CRixBQThCQyxBQVNBLDZCQUFBLEFBQUM7UUFBRCxBQUNJLEFBQ0g7YUFBUyxLQUFBLEFBQUssTUFGZixBQUVxQixBQUNwQjtjQUFVLENBQUMsS0FBQSxBQUFLLE1BSGpCLEFBR3VCLEFBQ3RCO2FBQVMsS0FKVixBQUllLEFBQ2Q7YUFBUyxLQUFBLEFBQUssTUFMZixBQUtxQjs7ZUFMckI7aUJBQUE7QUFBQTtBQUNDLE1BekNILEFBQ0MsQUF1Q0MsQUFXRjs7Ozs7MEdBck00QixBOzs7OztZQUN0QjtBLGtCQUFVLE1BQUEsQUFBTSxNLEFBQU07O2VBQ1IscUJBQUEsQSxBQUFNOztZQUFwQjtBOztlQUNnQixNQUFBLEFBQU0sUUFBTixBQUFjLGFBQWQsQUFBMkIsQTs7WUFBM0M7QSw0QkFDQTtBLHVCQUFlLFFBQUEsQUFBUSxBQUN2QixBO0EsdUJBQWUsU0FBUyxRQUFULEFBQVMsQSxBQUFRLEFBRWhDO0EsY0FBTSxJLEFBQUEsQUFBSSxBQUNWO0EsbUJBQVcsS0FBQSxBQUFLLE1BQU0sQ0FBQyxJQUFBLEFBQUksS0FBSyxRQUFBLEFBQVEscUJBQWpCLEFBQXNDLFFBQXZDLEFBQStDLFFBQVEsT0FBQSxBQUFLLEtBQUwsQUFBUSxLLEFBQTFFLEFBQVcsQUFBa0UsQUFDeEY7QSxvQkFBWSxLQUFBLEFBQUssTUFBTSxDQUFFLENBQUMsSUFBQSxBQUFJLEtBQUssUUFBQSxBQUFRLHFCQUFqQixBQUFzQyxRQUF2QyxBQUErQyxRQUFRLE9BQUEsQUFBSyxLQUFMLEFBQVEsS0FBaEUsQUFBQyxBQUFrRSxNQUFwRSxBQUEyRSxZQUF0RixBLEFBQWtHLEFBQzlHO0EseUJBQW9CLEEsd0IsQUFBbUIsWUFFdkM7QSx1QkFBZSxRQUFBLEEsQUFBUSxBQUN2QjtBLHNCQUFjLFEsQUFBQSxBQUFRLEFBRXRCO0EseUJBQWlCLFEsQUFBQSxBQUFRLEFBQ3pCO0EsMEJBQWtCLFFBQUEsQUFBUSxBQUMxQixBO0EseUJBQWlCLENBQUEsQUFBQyxnQkFBRCxBQUFpQixBOztlQUVmLHFCQUFBLEFBQU0sQTs7WUFBekI7QTs7ZUFDb0IscUJBQUEsQUFBTSxBOztZQUExQjtBOztlQUN1QixXQUFBLEFBQVcsUUFBWCxBQUFtQixPQUFuQixBQUEwQixBOztZQUFqRDtBOztlQUN3QixZQUFBLEFBQVksUUFBWixBQUFvQixPQUFwQixBQUEyQixBOztZQUFuRDtBLG9DQUNBO0EsaUJBQVMsQ0FBQSxBQUFDLGdCQUFELEFBQWlCLEE7MENBRXpCLEVBQUUsU0FBRixTQUFXLGNBQVgsY0FBeUIsY0FBekIsY0FBdUMsZ0JBQXZDLGdCQUF1RCxjQUF2RCxjQUFxRSxhQUFyRSxhQUFrRixRQUFsRixRQUEwRixnQkFBMUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5Da0IsZ0JBQU0sQSxBQWtOakM7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYW1hamljL0Rlc2t0b3AvVG9tYS9EZXYvb3RjLWV4Y2hhbmdlIn0=