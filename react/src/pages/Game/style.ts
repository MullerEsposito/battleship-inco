import styled, { keyframes, css } from 'styled-components';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Ocean = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  background-color: #1e90ff;
  overflow: hidden;
`;

export const Ship = styled.img`
  position: absolute;
  bottom: -20px;
  left: 50%;
  width: 250px !important;
  height: 100px;
  transform: translateX(-50%);
`;

export const fireAnimation = keyframes`
  0% {
    bottom: 60px;
    visibility: visible;
  }
  100% {
    bottom: 90%;
    visibility: hidden;
  }
`;

export const explodeAnimation = keyframes`
  0% {
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
`;

interface TorpedoProps {
  visible: boolean;
  fire: boolean;
}

export const Torpedo = styled.div<TorpedoProps>`
  position: absolute;
  bottom: 60px;
  left: 50%;
  width: 10px;
  height: 20px;
  background-color: #555;
  transform: translateX(-50%);
  visibility: ${ props => props.visible ? 'visible' : 'hidden' };
  ${props => props.fire && css`
    animation: ${fireAnimation} 2s forwards;  
  `}
`;

interface ExplosionProps {
  visible: boolean;
  explode: boolean;
}

export const Explosion = styled.div<ExplosionProps>`
  position: absolute;
  bottom: 90%;
  left: 50%;
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 50%;
  transform: translateX(-50%);
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  ${props => props.explode && css`
    animation: ${explodeAnimation} 1s forwards;
  `}
`;

export const FireButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;
