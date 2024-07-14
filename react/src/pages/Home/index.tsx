import { usePrivy } from "@privy-io/react-auth";
import battleshipBanner from "../../assets/battleship-inco-banner.webp";
import { GridIconInfo } from "./GridIconInfo";
import { Container, ContentBannerContainer, HomeContainer, PlayButton } from "./style";
import { Game } from "../Game";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";

export function Home() {
  const { login, authenticated } = usePrivy();
  const { isConnected } = useWeb3ModalAccount();

  return (
    <Container>
      {authenticated || isConnected ? (
        <Game />
      ) : (
        <HomeContainer>
          <div>
            <div>
              <ContentBannerContainer>
                <h1>Enter in a battleship game completly safe!</h1>
                <p>With blockchain technology, enjoy full transparency in your every move, all protected by Inco's robust security.</p>            
              </ContentBannerContainer>
    
              <GridIconInfo />
            </div>
            <img src={battleshipBanner} />
          </div>
          <PlayButton onClick={login}>Sign in to play!</PlayButton>
        </HomeContainer>
      )}
    </Container>
  )
}