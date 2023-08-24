const hre = require("hardhat");
const contractArtifact = require("../artifacts/contracts/buykahawa.sol/kahawa.json");

async function main() {
  const Kahawa = await hre.ethers.getContractFactory(
    "kahawa",
    contractArtifact.abi
  );
  const kahawa = await Kahawa.deploy(); // Deploying the contract

  await kahawa.waitForDeployment(); // Waiting for deployment to complete

  console.log("Deployed contract address:", kahawa.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
