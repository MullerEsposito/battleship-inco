import { usePrivy } from "@privy-io/react-auth";
import battleshipBanner from "../../assets/battleship-inco-banner.webp";
import { GridIconInfo } from "./GridIconInfo";
import { ContentBannerContainer, HomeContainer, PlayButton } from "./style";
import { Game } from "../Game";

export function Home() {
  const { login, authenticated } = usePrivy();

  return (
    <HomeContainer>
      {authenticated ? (
        <Game />
      ) : (
        <>
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
        </>
      )}
    </HomeContainer>
  )
}