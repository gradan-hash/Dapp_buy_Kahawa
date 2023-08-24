const hre = require("hardhat");

async function main() {
  const kahawa = await hre.ethers.deployContract("kahawa");

  await kahawa.waitForDeployment();

  console.log(`ETH  deployed to,  ${kahawa.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
