import { MapPin, SignIn, SignOut } from "@phosphor-icons/react"

import battleshipLogo from "../../assets/battleship-inco-logo.png"
import { ActionsContainer, HeaderContainer, LogoImg } from "./style"
import { usePrivy } from "@privy-io/react-auth";

export function Header() {
  const { login, logout, authenticated } = usePrivy();

  return (
    <HeaderContainer>
      <LogoImg src={battleshipLogo} />
      <ActionsContainer>
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