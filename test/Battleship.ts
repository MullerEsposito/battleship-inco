import hre from "hardhat";
import { expect } from "chai";

let battleship;
let player1;
let player2;

beforeEach(async function () {
  // Contracts are deployed using the first signer/account by default
  const accounts = await hre.ethers.getSigners();
  player1 = accounts[0];
  player2 = accounts[1];

  const Battleship = await hre.ethers.getContractFactory("Battleship");
  battleship = await Battleship.deploy(player1, player2);
});