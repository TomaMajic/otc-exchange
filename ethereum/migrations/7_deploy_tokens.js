const FirstToken = artifacts.require("./FirstToken.sol");
const SecondToken = artifacts.require("./SecondToken.sol");

module.exports = function(deployer) {
  deployer.deploy(FirstToken);
  deployer.deploy(SecondToken);
};