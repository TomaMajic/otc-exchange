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

var _FirstToken = require('./build/contracts/FirstToken.json');

var _FirstToken2 = _interopRequireDefault(_FirstToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address, type) {
	var instance = void 0;

	type === 'client' ? instance = new _web2.default.eth.Contract(_FirstToken2.default.abi, address) : instance = new _web3Server2.default.eth.Contract(_FirstToken2.default.abi, address);

	return instance;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3Rva2VuLmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwid2ViMyIsInNlcnZlcldlYjMiLCJUb2tlbiIsImFkZHJlc3MiLCJ0eXBlIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsImFiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXVCLEFBQXZCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQWtCLEFBQWxCLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBVSxBQUFWLE1BQW1CLEFBQ2pDO0tBQUksZ0JBQUosQUFFQTs7VUFBUyxBQUFULFdBQ0MsV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IscUJBQU0sQUFBNUIsS0FBaUMsQUFBakMsQUFEWixXQUVDLFdBQVcsSUFBSSxxQkFBVyxBQUFYLElBQWUsQUFBbkIsU0FBNEIscUJBQU0sQUFBbEMsS0FBdUMsQUFBdkMsQUFGWixBQUlBOztRQUFPLEFBQVAsQUFDQTtBQVJEIiwiZmlsZSI6InRva2VuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21hbWFqaWMvRGVza3RvcC9Ub21hL0Rldi9vdGMtZXhjaGFuZ2UifQ==