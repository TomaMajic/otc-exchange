'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _ExchangeAgent = require('./build/contracts/ExchangeAgent.json');

var _ExchangeAgent2 = _interopRequireDefault(_ExchangeAgent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
	return new _web2.default.eth.Contract(_ExchangeAgent2.default.abi, address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2FnZW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwid2ViMyIsIkV4Y2hhbmdlQWdlbnQiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7OztBQUNBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUEwQixBQUExQixBQUVBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQWEsQUFDM0I7UUFBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDTix3QkFBYyxBQURSLEtBRU4sQUFGTSxBQUFQLEFBSUE7QUFMRCIsImZpbGUiOiJhZ2VudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYW1hamljL0Rlc2t0b3AvVG9tYS9EZXYvb3RjLWV4Y2hhbmdlIn0=