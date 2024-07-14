import { ethers } from "hardhat";

// import type { Battleship } from "../../types";
import { getSigners } from "../signers";

export async function deployBattleshipFixture(): Promise<any> {
  const signers = await getSigners(ethers);

  const contractFactory = await ethers.getContractFactory("Battleship");
  const contract = await contractFactory.connect(signers.alice).deploy(signers.bob, signers.alice);
  await contract.waitForDeployment();

  return contract;
}