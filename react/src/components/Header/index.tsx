import { MapPin, SignIn, SignOut } from "@phosphor-icons/react"

import battleshipLogo from "../../assets/battleship-inco-logo.png"
import { ActionsContainer, HeaderContainer, LogoImg } from "./style"
import { usePrivy } from "@privy-io/react-auth";
import { useDisconnect, useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react";

export function Header() {
  const { login, logout, authenticated } = usePrivy();
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();
  const { disconnect } = useDisconnect();

  return (
    <HeaderContainer>
      <LogoImg src={battleshipLogo} />
      <ActionsContainer>
        <div>
          {isConnected ? (
            <button onClick={() => disconnect()}>Disconnect</button>
          ) : (
            <button onClick={() => open()}>Open Connect Modal</button>
          )}
        </div>
        <div>
          {authenticated ? (
            <button onClick={logout}>
              Log out
              <SignOut size={18} weight="fill" />
            </button>
          ) : (
            <button onClick={login}>
              Sign In
              <SignIn size={18} weight="fill" />
            </button>
          )}
        </div>
        <div>
          <MapPin size={18} weight="fill" />
          Brussels, BE
        </div>
      </ActionsContainer>
    </HeaderContainer>
  )
}