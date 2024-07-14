import { useState } from "react";
import { Explosion, FireButton, GameContainer, Ocean, Ship, Torpedo } from "./style";

import shipImg from "../../assets/ship.png";

export function Game() {
  const [fire, setFire] = useState(false);
  const [explode, setExplode] = useState(false);
  
  const fireTorpedo = () => {
    setFire(false);
    setExplode(false);
    setTimeout(() => {
      setFire(true);
    }, 0);
  }

  return (
    <GameContainer>
      <Ocean>
        <Ship src={shipImg} />
        <Torpedo fire={fire} visible={fire} onAnimationEnd={() => setExplode(true)} />
        <Explosion explode={explode} visible={explode} />
      </Ocean>
  
      <FireButton onClick={fireTorpedo}>Fire Torpedo</FireButton>
    </GameContainer>
  )
}