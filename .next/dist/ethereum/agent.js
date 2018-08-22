'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _web3Server = require('./web3-server');

var _web3Server2 = _interopRequireDefault(_web3Server);

var _ExchangeAgent = require('./build/contracts/ExchangeAgent.json');

var _ExchangeAgent2 = _interopRequireDefault(_ExchangeAgent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address, type) {
	var instance = void 0;

	type === 'client' ? instance = new _web2.default.eth.Contract(_ExchangeAgent2.default.abi, address) : instance = new _web3Server2.default.eth.Contract(_ExchangeAgent2.default.abi, address);

	return instance;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2FnZW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwid2ViMyIsInNlcnZlcldlYjMiLCJFeGNoYW5nZUFnZW50IiwiYWRkcmVzcyIsInR5cGUiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiYWJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBdUIsQUFBdkI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBMEIsQUFBMUIsQUFFQTs7Ozs7O2tCQUFlLFVBQUMsQUFBRCxTQUFVLEFBQVYsTUFBbUIsQUFDakM7S0FBSSxnQkFBSixBQUVBOztVQUFTLEFBQVQsV0FDQyxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUFzQix3QkFBYyxBQUFwQyxLQUF5QyxBQUF6QyxBQURaLFdBRUMsV0FBVyxJQUFJLHFCQUFXLEFBQVgsSUFBZSxBQUFuQixTQUE0Qix3QkFBYyxBQUExQyxLQUErQyxBQUEvQyxBQUZaLEFBSUE7O1FBQU8sQUFBUCxBQUNBO0FBUkQiLCJmaWxlIjoiYWdlbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbWFtYWppYy9EZXNrdG9wL1RvbWEvRGV2L290Yy1leGNoYW5nZSJ9