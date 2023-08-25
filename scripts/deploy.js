const hre = require("hardhat");

async function main() {
  const gasPrice = hre.ethers.parseUnits("3000000", "gwei"); // Adjust the gas price here
  const gasLimit = 3000000; // Increase the gas limit here

  const KahawaContract = await hre.ethers.getContractFactory("kahawa"); // Replace "Kahawa" with your actual contract's name
  const kahawa = await KahawaContract.deploy();

  await kahawa.deployed();

  console.log(`Contract deployed to address: ${kahawa.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
