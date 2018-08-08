'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _AgentFactory = require('./build/contracts/AgentFactory.json');

var _AgentFactory2 = _interopRequireDefault(_AgentFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var abi = _AgentFactory2.default.abi;
var address = '0x067de8a0bcc3c3c5520dc17bb1f0726d985305cc';

var instance = new _web2.default.eth.Contract(abi, address);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkFnZW50RmFjdG9yeSIsImFiaSIsImFkZHJlc3MiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBeUIsQUFBekI7Ozs7OztBQUVBLElBQU0sTUFBTSx1QkFBYSxBQUF6QjtBQUNBLElBQU0sVUFBVSxBQUFoQjs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2hCLEFBRGdCLEtBRWhCLEFBRmdCLEFBQWpCLEFBS0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYW1hamljL0Rlc2t0b3AvVG9tYS9EZXYvb3RjLWV4Y2hhbmdlIn0=