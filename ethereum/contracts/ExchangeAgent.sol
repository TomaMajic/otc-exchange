pragma solidity ^0.4.23;

import '../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';
import '../../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol';

contract ExchangeAgent {
	using SafeMath for uint256;

	uint256 public expirationTime;
	bool public withdrawable;
	bool public finalizable;

	address[] participants;

	mapping(address => uint256) public amountLeftToDeposit;
	mapping(address => uint256) public balances;
	mapping(address => address) public participantToken;

	constructor(address[] _participants,
				address[] _tokens,
				uint256[] _promisedDeposits,
				uint256 _timeToExpire) 
	public {
		expirationTime = now + _timeToExpire;
		participants = _participants;
		participantToken[_participants[0]] = _tokens[0];
		participantToken[_participants[1]] = _tokens[1];
		amountLeftToDeposit[_participants[0]] = _promisedDeposits[0];
		amountLeftToDeposit[_participants[1]] = _promisedDeposits[1];
		withdrawable = false;
		finalizable = false;
	}

	function depositSuccessfull(uint256 _amount,
								uint256 _previousSenderBalance, 
								uint256 _previousContractBalance,
								address _sender) 
	external {
		require(amountLeftToDeposit[_sender] > 0);
		require(amountLeftToDeposit[_sender].sub(_amount) >= 0);

		address tokenAddress = participantToken[_sender];
		ERC20 token = ERC20(tokenAddress);
		uint256 senderBalance = token.balanceOf(_sender);
		uint256 myBalance = token.balanceOf(address(this));

		require(senderBalance == _previousSenderBalance.sub(_amount));
		require(myBalance == _previousContractBalance.add(_amount));

		balances[_sender] = balances[_sender].add(_amount);
		amountLeftToDeposit[_sender] = amountLeftToDeposit[_sender].sub(_amount);

		if(_depositsMade()) {
			finalizable = true;
		}
	}

	function finalizeExchange() external onlyParticipants {
		require(amountLeftToDeposit[participants[0]] == 0);
		require(amountLeftToDeposit[participants[1]] == 0);
		require(finalizable);

		uint256 balance = balances[participants[0]];
		balances[participants[0]] = balances[participants[1]];
		balances[participants[1]] = balance;

		address tokenAddress = participantToken[participants[0]];
		participantToken[participants[0]] = participantToken[participants[1]];
		participantToken[participants[1]] = tokenAddress;

		finalizable = false;
		withdrawable = true;
	}

	function fraudPreventiveFinalize() external {
		require(expirationTime > now);
		require(amountLeftToDeposit[msg.sender] == 0);

		finalizable = false;
		withdrawable = true;
	}

	function withdraw() external onlyParticipants {
		require(withdrawable);

		ERC20 token = ERC20(participantToken[msg.sender]);
		uint256 amount = balances[msg.sender];

		token.transfer(msg.sender, amount);
	}

	function getParticipants() external view returns(address[]) {
		return participants;
	}

	function getSummary() external view returns(address[] _participants,
												address _firstToken,
												address _secondToken,
												uint256[] _amountsLeft,
												uint256 _expirationTime,
												bool _withdrawable, 
												bool _finalizable)
	{	
		require(participants.length == 2);

		uint256[] memory amountsLeft = new uint256[](participants.length);
		amountsLeft[0] = amountLeftToDeposit[participants[0]];
		amountsLeft[1] = amountLeftToDeposit[participants[1]];   

		_participants = participants;
		_firstToken = participantToken[participants[0]];
		_secondToken = participantToken[participants[1]];
		_amountsLeft = amountsLeft;
		_expirationTime = expirationTime;
		_withdrawable = withdrawable;
		_finalizable = finalizable;
	}

	function _depositsMade() private view returns(bool) {
		return ((amountLeftToDeposit[participants[0]] == 0) && (amountLeftToDeposit[participants[1]] == 0));
	}

	function _isParticipant(address _user) private view returns(bool) {
		for(uint256 i = 0; i < participants.length; i++) {
			if(participants[i] == _user) {
				return true;
			}
		}

		return false;
	}

	modifier onlyParticipants {
		require(_isParticipant(msg.sender));
		_;
	}
}