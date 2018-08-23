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
								console.log(senderBalance, contractBalance);
								// try {
								// 	await token.methods
								// 		.transfer(this.props.address, value)
								// 		.send({
								// 			from: accounts[0]
								// 		});

								// 	try {
								// 		await agent.methods
								// 			.depositSuccessfull(value,
								// 								senderBalance,
								// 								contractBalance,
								// 								accounts[0])
								// 			.send({
								// 				from: serverAccounts[0],
								// 				gas: 5000000,
								// 				gasPrice: 22000000000
								// 			});
								// 	} catch(err) {
								// 		console.log(err);
								// 	}

								// 	Router.pushRoute(`/exchanges/${this.props.address}`);
								// } catch(err) {
								// 	console.log(err);
								// }

								_this.setState({ depositLoading: false, value: '' });

							case 33:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2);
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

								if (elementId === 'finalize') {
									_this.setState({ finalizeLoading: true });
									_this.finalize(accounts[0], agent);
									_this.setState({ withdrawLoading: false });
								} else {
									_this.setState({ finalizeLoading: true });
									_this.withdraw(accounts[0], agent);
									_this.setState({ withdrawLoading: false });
								}

							case 9:
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
				var accounts, agent, token, userTokenSymbol, depositMade;
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
								depositMade = false;

								if (parseInt(this.props.amountLeftToDeposit[accounts[0]]) === 0) {
									depositMade = true;
								}

								this.setState({ depositMade: depositMade, userTokenSymbol: userTokenSymbol });

							case 15:
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
					header: 'User address: ' + participant,
					meta: _this3.props.tokens[index],
					description: _react2.default.createElement('h5', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 164
						}
					}, 'Amount left to deposit: ', _this3.props.amountLeftToDeposit[index]),
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 2, items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 169
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
					lineNumber: 174
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 175
				}
			}, this.props.address), _react2.default.createElement('h4', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 176
				}
			}, 'Time to finalize: ', this.props.expirationDate), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 178
				}
			}), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 179
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '20%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 180
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 181
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
					lineNumber: 182
				}
			})), _react2.default.createElement(_semanticUiReact.Button, {
				style: { marginTop: '5px', marginBottom: '15px' },
				primary: !this.state.depositMade,
				disabled: this.state.depositMade,
				loading: this.state.depositLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 190
				}
			}, 'Deposit')), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 199
				}
			}), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 201
				}
			}, this.renderParticipants()), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 203
				}
			}, _react2.default.createElement(_semanticUiReact.Button, {
				id: 'finalize',
				primary: this.props.finalizable,
				disabled: !this.props.finalizable,
				onClick: this.handleClick,
				loading: this.state.finalizeLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 204
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				id: 'withdraw',
				primary: this.props.withdrawable,
				disabled: !this.props.withdrawable,
				onClick: this.handleClick,
				loading: this.state.withdrawLoading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 213
				}
			}, 'Withdraw')));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(props) {
				var address, agent, summary, participants, now, daysLeft, hoursLeft, expirationDate, withdrawable, finalizable, amountLeftToDeposit, firstTokenAddr, secondTokenAddr, tokenAddresses, firstToken, secondToken, firstTokenName, secondTokenName, tokens;
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
								now = new Date();
								daysLeft = Math.floor((new Date(summary["_expirationTime"] * 1000) - now) / (1000 * 60 * 60 * 24));
								hoursLeft = Math.floor(((new Date(summary["_expirationTime"] * 1000) - now) / (1000 * 60 * 60 * 24) - daysLeft) * 24);
								expirationDate = daysLeft + ' days & ' + hoursLeft + ' hours';
								withdrawable = summary["_withdrawable"];
								finalizable = summary["_finalizable"];
								amountLeftToDeposit = summary["_amountsLeft"];
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
								return _context6.abrupt('return', { address: address, participants: participants, expirationDate: expirationDate, withdrawable: withdrawable, finalizable: finalizable, tokens: tokens, tokenAddresses: tokenAddresses, amountLeftToDeposit: amountLeftToDeposit });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiQ2FyZCIsIklucHV0IiwiRm9ybSIsIkxheW91dCIsIkFnZW50IiwiVG9rZW4iLCJSb3V0ZXIiLCJ3ZWIzIiwic2VydmVyV2ViMyIsIkV4Y2hhbmdlU2hvdyIsInN0YXRlIiwidmFsdWUiLCJkZXBvc2l0TWFkZSIsInVzZXJUb2tlblN5bWJvbCIsImRlcG9zaXRMb2FkaW5nIiwiZmluYWxpemVMb2FkaW5nIiwid2l0aGRyYXdMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhbnRzIiwicHJvcHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYWRkcmVzcyIsImFnZW50IiwidG9rZW5BZGRyZXNzZXMiLCJpbmRleE9mIiwidG9rZW4iLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsInNlbmRlckJhbGFuY2UiLCJjb250cmFjdEJhbGFuY2UiLCJzZXJ2ZXJBY2NvdW50cyIsInV0aWxzIiwidG9CTiIsImRlY2ltYWxzIiwicG93IiwibXVsdGlwbGllciIsImFtb3VudCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwiZWxlbWVudElkIiwidGFyZ2V0IiwiaWQiLCJmaW5hbGl6ZSIsIndpdGhkcmF3Iiwic3ltYm9sIiwicGFyc2VJbnQiLCJhbW91bnRMZWZ0VG9EZXBvc2l0IiwiYWNjb3VudCIsImZpbmFsaXplRXhjaGFuZ2UiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIml0ZW1zIiwibWFwIiwicGFydGljaXBhbnQiLCJpbmRleCIsImhlYWRlciIsIm1ldGEiLCJ0b2tlbnMiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwiZXhwaXJhdGlvbkRhdGUiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclBhcnRpY2lwYW50cyIsImZpbmFsaXphYmxlIiwid2l0aGRyYXdhYmxlIiwicXVlcnkiLCJnZXRTdW1tYXJ5Iiwic3VtbWFyeSIsIm5vdyIsIkRhdGUiLCJkYXlzTGVmdCIsIk1hdGgiLCJmbG9vciIsImhvdXJzTGVmdCIsImZpcnN0VG9rZW5BZGRyIiwic2Vjb25kVG9rZW5BZGRyIiwiZmlyc3RUb2tlbiIsInNlY29uZFRva2VuIiwibmFtZSIsImZpcnN0VG9rZW5OYW1lIiwic2Vjb25kVG9rZW5OYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFNLEFBQU87O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQVMsQUFBYzs7QUFDdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBR2pCOzs7Ozs7Ozs7Ozs7Ozs7c05BQ0wsQTtVQUFRLEFBQ0EsQUFDUDtnQkFGTyxBQUVNLEFBQ2I7b0JBSE8sQUFHVSxBQUNqQjttQkFKTyxBQUlTLEFBQ2hCO29CQUxPLEFBS1UsQUFDakI7b0JBTk8sQUFNVSxBO0FBTlYsQUFDUCxXLEFBbUREO3dGQUFXLGlCQUFBLEFBQU8sT0FBUDs0SEFBQTtrRUFBQTtlQUFBO3VDQUFBO1lBQ1Y7Y0FBQSxBQUFNLEFBRUE7O0FBSEksdUJBR1csTUFBQSxBQUFLLE1BSGhCLEFBR3NCO3dCQUh0QjtlQUlhLGNBQUEsQUFBSyxJQUpsQixBQUlhLEFBQVM7O1lBQTFCO0FBSkksNEJBQUE7d0JBQUE7ZUFLVSxxQkFBTSxNQUFBLEFBQUssTUFBWCxBQUFpQixTQUwzQixBQUtVLEFBQTBCOztZQUF4QztBQUxJLHlCQUFBO3dCQUFBO2VBTVUscUJBQU0sTUFBQSxBQUFLLE1BQUwsQUFBVyxlQUFlLGFBQUEsQUFBYSxRQUFRLFNBQXJELEFBQU0sQUFBMEIsQUFBcUIsQUFBUyxNQU54RSxBQU1VLEFBQW9FOztZQUFsRjtB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dkM7QSx1QkFBZSxRQUFBLEFBQVEsQUFDdkIsQTtBLHNCQUFjLFFBQUEsQUFBUSxBQUN0QixBO0EsOEJBQXNCLFEsQUFBQSxBQUFRLEFBRTlCO0EseUJBQWlCLFFBQUEsQSxBQUFRLEFBQ3pCO0EsMEJBQWtCLFFBQUEsQSxBQUFRLEFBQzFCO0EseUJBQWlCLENBQUEsQUFBQyxnQkFBRCxBQUFpQixBOztlQUVmLHFCLEFBQUEsQUFBTTs7WUFBekI7QTs7ZUFDb0IscUIsQUFBQSxBQUFNOztZQUExQjtBOztlQUN1QixXQUFBLEFBQVcsUUFBWCxBQUFtQixPQUFuQixBQUEwQixBOztZQUFqRDtBOztlQUN3QixZQUFBLEFBQVksUUFBWixBQUFvQixPLEFBQXBCLEFBQTJCOztZQUFuRDtBLG9DQUNBO0EsaUJBQVMsQ0FBQSxBQUFDLGdCQUFELEFBQWlCLEE7MENBRXpCLEVBQUUsU0FBRixTQUFXLGNBQVgsY0FBeUIsZ0JBQXpCLGdCQUF5QyxjQUF6QyxjQUF1RCxhQUF2RCxhQUFvRSxRQUFwRSxRQUE0RSxnQkFBNUUsZ0JBQTRGLHFCQUE1RixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkNrQixnQkFBTSxBLEFBeU5qQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21hbWFqaWMvRGVza3RvcC9Ub21hL0Rldi9vdGMtZXhjaGFuZ2UifQ==