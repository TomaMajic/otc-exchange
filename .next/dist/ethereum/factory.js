'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _AgentFactory = require('./build/contracts/AgentFactory.json');

var _AgentFactory2 = _interopRequireDefault(_AgentFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var address = '0xf8ad0ef49e3fc6d3eb83ea42aee0cb026fcf1011';

var instance = new _web2.default.eth.Contract(_AgentFactory2.default.abi, address);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkFnZW50RmFjdG9yeSIsImFkZHJlc3MiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiYWJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBeUIsQUFBekI7Ozs7OztBQUVBLElBQU0sVUFBVSxBQUFoQjs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2hCLHVCQUFhLEFBREcsS0FFaEIsQUFGZ0IsQUFBakIsQUFLQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21hbWFqaWMvRGVza3RvcC9Ub21hL0Rldi9vdGMtZXhjaGFuZ2UifQ==