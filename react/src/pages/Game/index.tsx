import { useState } from "react";
import { Container, Explosion, FireButton, GameContainer, Ocean, Ship, Torpedo, WalletConnectInfo } from "./style";

import shipImg from "../../assets/ship.png";
import { useWalletInfo, useWeb3ModalAccount } from "@web3modal/ethers5/react";

export function Game() {
  const [fire, setFire] = useState(false);
  const [explode, setExplode] = useState(false);
  const { walletInfo } = useWalletInfo();
  const { address, isConnected } = useWeb3ModalAccount()
  
  const fireTorpedo = () => {
    setFire(false);
    setExplode(false);
    setTimeout(() => {
      setFire(true);
    }, 0);
  }

  return (
    <Container>
      {isConnected && (
        <WalletConnectInfo>
          <img src={walletInfo?.icon} alt="" />
          You're connected with <span>{walletInfo?.name}</span> in the Wallet: <span>{address?.slice(0,5) + "..." + address?.slice(-5)}</span>
        </WalletConnectInfo>
      )}

      <GameContainer>
        <Ocean>
          <Ship src={shipImg} />
          <Torpedo fire={fire} visible={fire} onAnimationEnd={() => setExplode(true)} />
          <Explosion explode={explode} visible={explode} />
        </Ocean>
    
        <FireButton onClick={fireTorpedo}>Fire Torpedo</FireButton>
      </GameContainer>
    </Container>
  )
}