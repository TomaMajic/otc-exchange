'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _FirstToken = require('./build/contracts/FirstToken.json');

var _FirstToken2 = _interopRequireDefault(_FirstToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
	return new _web2.default.eth.Contract(_FirstToken2.default.abi, address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3Rva2VuLmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwid2ViMyIsIlRva2VuIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiYWJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBa0IsQUFBbEIsQUFFQTs7Ozs7O2tCQUFlLFVBQUMsQUFBRCxTQUFhLEFBQzNCO1FBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ04scUJBQU0sQUFEQSxLQUVOLEFBRk0sQUFBUCxBQUlBO0FBTEQiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RvbWFtYWppYy9EZXNrdG9wL1RvbWEvRGV2L290Yy1leGNoYW5nZSJ9