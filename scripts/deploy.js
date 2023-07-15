const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy();

  await lock.waitForDeployment();

  console.log("Deployed by:", deployer.target);
  console.log("Lock deployed to:", lock.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
