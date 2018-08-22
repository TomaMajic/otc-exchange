const AgentFactory = artifacts.require("./AgentFactory.sol");

module.exports = function(deployer) {
  deployer.deploy(AgentFactory);
};