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
									from: serverAccounts[0],
									gas: 4600000,
									gasPrice: 22000000000
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiQ2FyZCIsIklucHV0IiwiRm9ybSIsIkxheW91dCIsIkFnZW50IiwiVG9rZW4iLCJSb3V0ZXIiLCJ3ZWIzIiwic2VydmVyV2ViMyIsIkV4Y2hhbmdlU2hvdyIsInN0YXRlIiwidmFsdWUiLCJkZXBvc2l0TWFkZSIsInVzZXJUb2tlblN5bWJvbCIsImRlcG9zaXRMb2FkaW5nIiwiZmluYWxpemVMb2FkaW5nIiwid2l0aGRyYXdMb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFydGljaXBhbnRzIiwicHJvcHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiYWRkcmVzcyIsImFnZW50IiwidG9rZW5BZGRyZXNzZXMiLCJpbmRleE9mIiwidG9rZW4iLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsInNlbmRlckJhbGFuY2UiLCJjb250cmFjdEJhbGFuY2UiLCJzZXJ2ZXJBY2NvdW50cyIsInV0aWxzIiwidG9CTiIsImRlY2ltYWxzIiwicG93IiwibXVsdGlwbGllciIsImFtb3VudCIsInNldFN0YXRlIiwidHJhbnNmZXIiLCJzZW5kIiwiZnJvbSIsImRlcG9zaXRTdWNjZXNzZnVsbCIsImdhcyIsImdhc1ByaWNlIiwiY29uc29sZSIsImxvZyIsInB1c2hSb3V0ZSIsImhhbmRsZUNsaWNrIiwiZWxlbWVudElkIiwidGFyZ2V0IiwiaWQiLCJmaW5hbGl6ZSIsIndpdGhkcmF3Iiwic3ltYm9sIiwicGFyc2VJbnQiLCJhbW91bnRMZWZ0VG9EZXBvc2l0IiwiYWNjb3VudCIsImZpbmFsaXplRXhjaGFuZ2UiLCJpdGVtcyIsIm1hcCIsInBhcnRpY2lwYW50IiwiaW5kZXgiLCJoZWFkZXIiLCJtZXRhIiwidG9rZW5zIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsImV4cGlyYXRpb25EYXRlIiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJQYXJ0aWNpcGFudHMiLCJmaW5hbGl6YWJsZSIsIndpdGhkcmF3YWJsZSIsInF1ZXJ5IiwiZ2V0U3VtbWFyeSIsInN1bW1hcnkiLCJub3ciLCJEYXRlIiwiZGF5c0xlZnQiLCJNYXRoIiwiZmxvb3IiLCJob3Vyc0xlZnQiLCJmaXJzdFRva2VuQWRkciIsInNlY29uZFRva2VuQWRkciIsImZpcnN0VG9rZW4iLCJzZWNvbmRUb2tlbiIsIm5hbWUiLCJmaXJzdFRva2VuTmFtZSIsInNlY29uZFRva2VuTmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVEsQUFBTSxBQUFPOztBQUM5QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFTLEFBQWM7O0FBQ3ZCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUdqQjs7Ozs7Ozs7Ozs7Ozs7O3NOQUNMLEE7VUFBUSxBQUNBLEFBQ1A7Z0JBRk8sQUFFTSxBQUNiO29CQUhPLEFBR1UsQUFDakI7bUJBSk8sQUFJUyxBQUNoQjtvQkFMTyxBQUtVLEFBQ2pCO29CQU5PLEFBTVUsQTtBQU5WLEFBQ1AsVyxBQW1ERDt3RkFBVyxpQkFBQSxBQUFPLE9BQVA7NEhBQUE7a0VBQUE7ZUFBQTt1Q0FBQTtZQUNWO2NBQUEsQUFBTSxBQUVBOztBQUhJLHVCQUdXLE1BQUEsQUFBSyxNQUhoQixBQUdzQjt3QkFIdEI7ZUFJYSxjQUFBLEFBQUssSUFKbEIsQUFJYSxBQUFTOztZQUExQjtBQUpJLDRCQUFBO3dCQUFBO2VBS1UscUJBQU0sTUFBQSxBQUFLLE1BQVgsQUFBaUIsU0FMM0IsQUFLVSxBQUEwQjs7WUFBeEM7QUFMSSx5QkFBQTt3QkFBQTtlQU1VLHFCQUFNLE1BQUEsQUFBSyxNQUFMLEFBQVcsZUFBZSxhQUFBLEFBQWEsUUFBUSxTQUFy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