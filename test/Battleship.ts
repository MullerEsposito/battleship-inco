import hre from "hardhat";
import { expect } from "chai";
import { AddressLike, ContractFactory } from "ethers";

let battleship: any;
let player1: AddressLike;
let player2: AddressLike;

beforeEach(async function () {
  // Contracts are deployed using the first signer/account by default
  const accounts = await hre.ethers.getSigners();
  player1 = accounts[0];
  player2 = accounts[1];

  const Battleship = await hre.ethers.getContractFactory("Battleship");
  battleship = await Battleship.deploy(player1, player2);
});

describe("Battleship", function () {
  describe("Pre battle tests", function () {
    it("Should be create the players in the game", async () => {
      expect(await battleship.player1()).to.equal(player1);
      expect(await battleship.player2()).to.equal(player2);
    });

    it("verifies if player 1 is the first to play", async () => {
      expect(await battleship.currentPlayer()).to.equal(player1);
    });

    it("certifies that the game and players aren't ready yet", async () => {
      expect(await battleship.player1Ready()).to.equal(false);
      expect(await battleship.player2Ready()).to.equal(false);
      expect(await battleship.gameReady()).to.equal(false);
    });
  });

  describe("Setting battle tests", function () {
    it("", () => {});
  });
});