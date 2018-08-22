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
			loading: false
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

								_this.setState({ loading: true });

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

								_this.setState({ loading: false, value: '' });

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
		}(), _this.finalize = function () {
			var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								event.preventDefault();

							case 1:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, _this2);
			}));

			return function (_x2) {
				return _ref3.apply(this, arguments);
			};
		}(), _this.withdraw = function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								event.preventDefault();

								console.log('Withdraw');

							case 2:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, _this2);
			}));

			return function (_x3) {
				return _ref4.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ExchangeShow, [{
		key: 'componentDidMount',
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
				var accounts, agent, token, userTokenSymbol, balance, depositMade;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								_context4.next = 2;
								return _web2.default.eth.getAccounts();

							case 2:
								accounts = _context4.sent;
								_context4.next = 5;
								return (0, _agent2.default)(this.props.address, 'client');

							case 5:
								agent = _context4.sent;
								_context4.next = 8;
								return (0, _token2.default)(this.props.tokenAddresses[this.props.participants.indexOf(accounts[0])], 'client');

							case 8:
								token = _context4.sent;
								_context4.next = 11;
								return token.methods.symbol().call();

							case 11:
								userTokenSymbol = _context4.sent;
								_context4.next = 14;
								return agent.methods.balances(accounts[0]).call();

							case 14:
								balance = _context4.sent;
								depositMade = false;

								if (balance !== 0) {
									depositMade = true;
								}

								this.setState({ depositMade: depositMade, userTokenSymbol: userTokenSymbol });

							case 18:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function componentDidMount() {
				return _ref5.apply(this, arguments);
			}

			return componentDidMount;
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
					lineNumber: 126
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
					lineNumber: 132
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 133
				}
			}, this.props.address), _react2.default.createElement('h4', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 134
				}
			}, 'Time to finalize: ', this.props.expirationDate), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 136
				}
			}), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: function onSubmit() {
					return _this4.state.depositMade ? null : _this4.onSubmit;
				}, __source: {
					fileName: _jsxFileName,
					lineNumber: 137
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, { style: { width: '20%' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 138
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 139
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
					lineNumber: 140
				}
			})), _react2.default.createElement(_semanticUiReact.Button, {
				style: { marginTop: '5px', marginBottom: '15px' },
				primary: !this.state.depositMade,
				disabled: this.state.depositMade,
				loading: this.state.loading,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 148
				}
			}, 'Deposit')), _react2.default.createElement('hr', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 157
				}
			}), _react2.default.createElement('div', { style: { marginTop: '24px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 159
				}
			}, this.renderParticipants()), _react2.default.createElement('h4', { style: { marginTop: '10px' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 160
				}
			}, 'Deposit count: ', this.props.depositCount), _react2.default.createElement(_semanticUiReact.Button, {
				primary: this.props.depositCount === 2,
				disabled: this.props.depositCount !== 2,
				onClick: this.finalize,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 162
				}
			}, 'Finalize'), _react2.default.createElement(_semanticUiReact.Button, {
				primary: this.props.withdrawable,
				disabled: !this.props.withdrawable,
				onClick: this.withdraw,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 169
				}
			}, 'Withdraw'));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(props) {
				var address, agent, summary, participants, depositCount, now, daysLeft, hoursLeft, expirationDate, withdrawable, finalizable, firstTokenAddr, secondTokenAddr, tokenAddresses, firstToken, secondToken, firstTokenName, secondTokenName, tokens;
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								address = props.query.address;
								_context5.next = 3;
								return (0, _agent2.default)(address);

							case 3:
								agent = _context5.sent;
								_context5.next = 6;
								return agent.methods.getSummary().call();

							case 6:
								summary = _context5.sent;
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
								_context5.next = 20;
								return (0, _token2.default)(firstTokenAddr);

							case 20:
								firstToken = _context5.sent;
								_context5.next = 23;
								return (0, _token2.default)(secondTokenAddr);

							case 23:
								secondToken = _context5.sent;
								_context5.next = 26;
								return firstToken.methods.name().call();

							case 26:
								firstTokenName = _context5.sent;
								_context5.next = 29;
								return secondToken.methods.name().call();

							case 29:
								secondTokenName = _context5.sent;
								tokens = [firstTokenName, secondTokenName];
								return _context5.abrupt('return', { address: address, participants: participants, depositCount: depositCount, expirationDate: expirationDate, withdrawable: withdrawable, finalizable: finalizable, tokens: tokens, tokenAddresses: tokenAddresses });

							case 32:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function getInitialProps(_x4) {
				return _ref6.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return ExchangeShow;
}(_react2.default.Component);

exports.default = ExchangeShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2V4Y2hhbmdlcy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiQ2FyZCIsIklucHV0IiwiRm9ybSIsIkxheW91dCIsIkFnZW50IiwiVG9rZW4iLCJSb3V0ZXIiLCJ3ZWIzIiwic2VydmVyV2ViMyIsIkV4Y2hhbmdlU2hvdyIsInN0YXRlIiwidmFsdWUiLCJkZXBvc2l0TWFkZSIsInVzZXJUb2tlblN5bWJvbCIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXJ0aWNpcGFudHMiLCJwcm9wcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJhZGRyZXNzIiwiYWdlbnQiLCJ0b2tlbkFkZHJlc3NlcyIsImluZGV4T2YiLCJ0b2tlbiIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwic2VuZGVyQmFsYW5jZSIsImNvbnRyYWN0QmFsYW5jZSIsInNlcnZlckFjY291bnRzIiwic2V0U3RhdGUiLCJ0cmFuc2ZlciIsInNlbmQiLCJmcm9tIiwiZGVwb3NpdFN1Y2Nlc3NmdWxsIiwiY29uc29sZSIsImxvZyIsInB1c2hSb3V0ZSIsImZpbmFsaXplIiwid2l0aGRyYXciLCJzeW1ib2wiLCJiYWxhbmNlcyIsImJhbGFuY2UiLCJpdGVtcyIsIm1hcCIsInBhcnRpY2lwYW50IiwiaW5kZXgiLCJoZWFkZXIiLCJtZXRhIiwidG9rZW5zIiwiZmx1aWQiLCJleHBpcmF0aW9uRGF0ZSIsIndpZHRoIiwidGFyZ2V0IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicmVuZGVyUGFydGljaXBhbnRzIiwiZGVwb3NpdENvdW50Iiwid2l0aGRyYXdhYmxlIiwicXVlcnkiLCJnZXRTdW1tYXJ5Iiwic3VtbWFyeSIsInBhcnNlSW50Iiwibm93IiwiRGF0ZSIsImRheXNMZWZ0IiwiTWF0aCIsImZsb29yIiwiaG91cnNMZWZ0IiwiZmluYWxpemFibGUiLCJmaXJzdFRva2VuQWRkciIsInNlY29uZFRva2VuQWRkciIsImZpcnN0VG9rZW4iLCJzZWNvbmRUb2tlbiIsIm5hbWUiLCJmaXJzdFRva2VuTmFtZSIsInNlY29uZFRva2VuTmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVEsQUFBTSxBQUFPOztBQUM5QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFTLEFBQWM7O0FBQ3ZCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUdqQjs7Ozs7Ozs7Ozs7Ozs7O3NOQUNMLEE7VUFBUSxBQUNBLEFBQ1A7Z0JBRk8sQUFFTSxBQUNiO29CQUhPLEFBR1UsQUFDakI7WSxBQUpPLEFBSUU7QUFKRixBQUNQLFcsQUFrREQ7d0ZBQVcsaUJBQUEsQUFBTyxPQUFQOzhFQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQU0sQUFFQTs7QUFISSx1QkFHVyxNQUFBLEFBQUssTUFIaEIsQUFHc0I7d0JBSHRCO2VBSWEsY0FBQSxBQUFLLElBSmxCLEFBSWEsQUFBUzs7WUFBMUI7QUFKSSw0QkFBQTt3QkFBQTtlQUtVLHFCQUFNLE1BQUEsQUFBSyxNQUFYLEFBQWlCLFNBTDNCLEFBS1UsQUFBMEI7O1lBQXhDO0FBTEkseUJBQUE7d0JBQUE7ZUFNVSxxQkFBTSxNQUFBLEFBQUssTUFBTCxBQUFXLGVBQWUsYUFBQSxBQUFhLFFBQVEsU0FBckQsQUFBTSxBQUEwQixBQUFxQixBQUFTLE1BTnhFLEFBTVUsQUFBb0U7O1lBQWxGO0FBTkkseUJBQUE7d0JBQUE7ZUFRa0IsTUFBQSxBQUFNLFFBQU4sQUFBYyxVQUFVLFNBQXhCLEFBQXdCLEFBQVMsSUFSbkQsQUFRa0IsQUFBcUM7O1lBQTNEO0FBUkksaUNBQUE7d0JBQUE7ZUFTb0IsTUFBQSxBQUFNLFFBQU4sQUFBYyxVQUFVLE1BQUEsQUFBSyxNQUE3QixBQUFtQyxT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RixBQUFrRyxBQUM5RyxBO0EseUIsQUFBb0Isd0IsQUFBbUIsWUFFdkM7QSx1QkFBZSxRQUFBLEFBQVEsQSxBQUN2QjtBLHNCQUFjLFFBQUEsQSxBQUFRLEFBRXRCO0EseUJBQWlCLFEsQUFBQSxBQUFRLEFBQ3pCO0EsMEJBQWtCLFFBQUEsQUFBUSxBLEFBQzFCO0EseUJBQWlCLENBQUEsQUFBQyxnQkFBRCxBQUFpQixBOztlQUVmLHFCQUFBLEFBQU0sQTs7WUFBekI7QTs7ZUFDb0IscUJBQUEsQSxBQUFNOztZQUExQjtBOztlQUN1QixXQUFBLEFBQVcsUUFBWCxBQUFtQixPQUFPLEEsQUFBMUI7O1lBQXZCO0E7O2VBQ3dCLFlBQUEsQUFBWSxRQUFaLEFBQW9CLE9BQXBCLEFBQTJCLEE7O1lBQW5EO0Esb0NBQ0E7QSxpQkFBUyxDQUFBLEFBQUMsZ0JBQUQsQSxBQUFpQjswQ0FFekIsRUFBRSxTQUFGLFNBQVcsY0FBWCxjQUF5QixjQUF6QixjQUF1QyxnQkFBdkMsZ0JBQXVELGNBQXZELGNBQXFFLGFBQXJFLGFBQWtGLFFBQWxGLFFBQTBGLGdCQUExRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakNrQixnQkFBTSxBLEFBMEtqQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21hbWFqaWMvRGVza3RvcC9Ub21hL0Rldi9vdGMtZXhjaGFuZ2UifQ==