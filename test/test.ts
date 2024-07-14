import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";


describe("Goals", function () {

  describe("GoalsToken", function () {
    async function deployFixture() {
      const [owner, otherAccount] = await ethers.getSigners();
      const GoalsToken = await ethers.getContractFactory("GoalsToken");
      const goalsToken = await GoalsToken.deploy();
      return { goalsToken, owner, otherAccount };
    }
    
    it("Should deploy the GoalsToken", async function () {
      const { goalsToken } = await loadFixture(deployFixture);
      expect(await goalsToken.name()).to.equal("GoalsToken");
    });

    it("Should set the right owner", async function () {
      const { goalsToken, owner, otherAccount } = await loadFixture(deployFixture);
      expect(await goalsToken.owner()).to.equal(owner.address);
    });

    it("Should mint 1000 tokens to the owner", async function () {
      const { goalsToken, owner, otherAccount } = await loadFixture(deployFixture);
      await goalsToken.mint(owner.address, 1000);
      expect(await goalsToken.balanceOf(owner.address)).to.equal(1000);
    });

    it("Should mint 1000 tokens to the otherAccount", async function () {
      const { goalsToken, owner, otherAccount } = await loadFixture(deployFixture);
      await goalsToken.mint(otherAccount.address, 1000);
      expect(await goalsToken.balanceOf(otherAccount.address)).to.equal(1000);
    });

    it("Should transfer 100 tokens from owner to otherAccount", async function () {
      const { goalsToken, owner, otherAccount } = await loadFixture(deployFixture);
      await goalsToken.mint(owner.address, 1000);
      await goalsToken.transfer(otherAccount.address, 100);
      expect(await goalsToken.balanceOf(owner.address)).to.equal(900);
      expect(await goalsToken.balanceOf(otherAccount.address)).to.equal(100);
    });

    it("Should burn 100 tokens from owner", async function () {
      const { goalsToken, owner, otherAccount } = await loadFixture(deployFixture);
      await goalsToken.mint(owner.address, 1000);
      await goalsToken.burn(100);
      expect(await goalsToken.balanceOf(owner.address)).to.equal(900);
    });

  });
}

);