'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var infura_apikey = 'Q2Il7DVs8vOaY8xerEgT';
var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	web3 = new _web2.default(window.web3.currentProvider);
} else {
	var provider = new _web2.default.providers.HttpProvider('https://ropsten.infura.io/' + infura_apikey);

	web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsImluZnVyYV9hcGlrZXkiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBTSxnQkFBZ0IsQUFBdEI7QUFDQSxJQUFJLFlBQUo7O0FBRUEsSUFBRyxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBM0QsYUFBd0UsQUFDdkU7UUFBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNBO0FBRkQsT0FFTyxBQUNOO0tBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2hCLCtCQUErQixBQURmLEFBQWpCLEFBSUE7O1FBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNBO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdG9tYW1hamljL0Rlc2t0b3AvVG9tYS9EZXYvb3RjLWV4Y2hhbmdlIn0=