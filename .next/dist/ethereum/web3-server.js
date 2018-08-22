'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HDWalletProvider = require('truffle-hdwallet-provider');
var infura_apikey = 'Q2Il7DVs8vOaY8xerEgT';
var mnemonic = 'party weird draw glad bulk bottom skull odor sock chimney bless glue';

var provider = new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/' + infura_apikey);

exports.default = new _web2.default(provider);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMtc2VydmVyLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJIRFdhbGxldFByb3ZpZGVyIiwicmVxdWlyZSIsImluZnVyYV9hcGlrZXkiLCJtbmVtb25pYyIsInByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQU0sbUJBQW1CLEFBQW5CLEFBQU47QUFDQSxJQUFNLGdCQUFnQixBQUF0QjtBQUNBLElBQU0sV0FBVyxBQUFqQjs7QUFFQSxJQUFNLFdBQVcsSUFBSSxBQUFKLGlCQUNoQixBQURnQixVQUVoQiwrQkFBK0IsQUFGZixBQUFqQixBQUtBOztrQkFBZSxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFmIiwiZmlsZSI6IndlYjMtc2VydmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy90b21hbWFqaWMvRGVza3RvcC9Ub21hL0Rldi9vdGMtZXhjaGFuZ2UifQ==