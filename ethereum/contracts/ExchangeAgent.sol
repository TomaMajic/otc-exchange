pragma solidity ^0.4.23;

import '../../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';
import '../../node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol';

contract ExchangeAgent {
	using SafeMath for uint256;

	uint256 public expirationTime;
	uint256 public depositCount;
	bool public withdrawable;
	bool public finalizable;

	address[] participants;

	mapping(address => uint256) public balances;
	mapping(address => address) public participantToken;

	constructor(address[] _participants,
				uint256 _timeToExpire) 
	public {
		expirationTime = now + _timeToExpire;
		participants = _participants;
		withdrawable = false;
		finalizable = true;
	}

	function depositSuccessfull(uint256 _amount,
								uint256 _previousSenderBalance, 
								uint256 _previousContractBalance,
								address _tokenAddress,
								address _sender) 
	external {
		ERC20 token = ERC20(_tokenAddress);
		uint256 senderBalance = token.balanceOf(_sender);
		uint256 myBalance = token.balanceOf(address(this));

		require(senderBalance == _previousSenderBalance.sub(_amount));
		require(myBalance == _previousContractBalance.add(_amount));

		balances[_sender] = balances[_sender].add(_amount);
		participantToken[_sender] = _tokenAddress;
		depositCount = depositCount.add(1);
	}

	function finalizeExchange() external onlyParticipants {
		require(depositCount == participants.length);
		require(finalizable);

		uint256 balance = balances[participants[0]];
		balances[participants[0]] = balances[participants[1]];
		balances[participants[1]] = balance;

		address tokenAddress = participantToken[participants[0]];
		participantToken[participants[0]] = participantToken[participants[1]];
		participantToken[participants[1]] = tokenAddress;

		withdrawable = true;
	}

	function fraudPreventiveFinalize() external {
		require(expirationTime > now && depositCount != participants.length);

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

	function getParticipantsCount() external view returns(uint256) {
		return participants.length;
	}

	function getSummary() external view returns(address[] _participants,
												address _firstToken,
												address _secondToken, 
												uint256 _depositCount, 
												uint256 _expirationTime, 
												bool _withdrawable, 
												bool _finalizable)
	{	
		require(participants.length == 2);

		_participants = participants;
		_firstToken = participantToken[participants[0]];
		_secondToken = participantToken[participants[1]];
		_depositCount = depositCount;
		_expirationTime = expirationTime;
		_withdrawable = withdrawable;
		_finalizable = finalizable;
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