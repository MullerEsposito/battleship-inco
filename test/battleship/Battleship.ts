import hre from "hardhat";
import { expect } from "chai";
import { getSigners } from "../signers";
import { deployBattleshipFixture } from "./Battleship.fixture";
import { createInstances } from "../instance";
import { FhevmInstances } from "../types";


let battleship: any;
let player1: any;
let player2: any;
let instances: FhevmInstances;
let contractAddress: string;

beforeEach(async function () {
  // Contracts are deployed using the first signer/account by default
  const signers = await getSigners(hre.ethers);
  player1 = signers.bob;
  player2 = signers.alice;

  const battleshipContract = await deployBattleshipFixture();
  contractAddress = await battleshipContract.getAddress();
  
  instances = await createInstances(
    contractAddress, 
    hre.ethers,
    signers
  );
});

describe("Battleship", function () {
  describe("Pre battle tests", function () {
    it.only("Should be create the players in the game", async () => {
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
    it("should place the ship of the players in conform of the input", async () => {
      const boardPlayer1 = 0o0010001011001100;
      const boardPlayer2 = "0100001011000011";

      // const boardPlayer2Bytes = hre.ethers.utils.arrayify("0x" + parseInt(boardPlayer2, 2).toString(16).padStart(Math.ceil(boardPlayer2.length / 8) * 2, '0'));
      // const boardPlayer1Bytes = hre.ethers.getBytes(boardPlayer1);
      
      const boardPlayer1Bytes = instances.bob.encrypt32(boardPlayer1);
      console.log(boardPlayer1Bytes);

      // await battleship.connect(player1).placeShips(boardPlayer1Bytes);

      // console.log(await battleship.board());
      
    });
  });
});