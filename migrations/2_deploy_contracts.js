var DDTest = artifacts.require("./contracts/DDTest.sol");
module.exports = function(deployer) {
  deployer.deploy(DDTest);
};
