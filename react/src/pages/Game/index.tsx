import { useState } from "react";
import { Container, Explosion, FireButton, GameContainer, Ocean, Ship, Torpedo, WalletConnectInfo } from "./style";

import shipImg from "../../assets/ship.png";
import { useWalletInfo, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { usePrivy } from "@privy-io/react-auth";

export function Game() {
  const [fire, setFire] = useState(false);
  const [explode, setExplode] = useState(false);
  const { walletInfo } = useWalletInfo();
  const { address, isConnected } = useWeb3ModalAccount()
  const { user, authenticated} = usePrivy();
  
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
          You're connected through Wallet Connect SDK with <span>{walletInfo?.name}</span> in the Wallet: <span>{address?.slice(0,5) + "..." + address?.slice(-5)}</span>
        </WalletConnectInfo>
      )}
      {authenticated && user?.wallet && (
        <WalletConnectInfo>
          You're connected through Privy SDK with <span>{user.wallet.walletClientType}</span> in the Wallet: <span>{user.wallet.address?.slice(0,5) + "..." + user.wallet.address?.slice(-5)}</span>
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