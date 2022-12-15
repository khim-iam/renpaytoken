const hre = require("hardhat");

async function main() {
  const RenToken = await hre.ethers.getContractFactory("RenToken");
  const renToken = await RenToken.deploy(500000000, 50);

  await renToken.deployed();

  console.log("Ren Token deployed: ", renToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});