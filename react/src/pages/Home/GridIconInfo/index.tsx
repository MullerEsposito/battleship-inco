import { CubeTransparent, Key, Timer, Trophy } from "@phosphor-icons/react";
import { GridIconInfoContainer, IconInfoContainer } from "./style";

export function GridIconInfo() {
  return (
    <GridIconInfoContainer>
      <IconInfoContainer background-color="yellow-dark">
        <span>
          <CubeTransparent  size={16} weight="fill" />
        </span>
        <p>Transparency</p>
      </IconInfoContainer>
      <IconInfoContainer background-color="yellow">
        <span>
          <Trophy size={16} weight="fill" />
        </span>
        <p>Digital asset rewards and exchanges</p>
      </IconInfoContainer>
      <IconInfoContainer background-color="text">
        <span>
          <Timer size={16} weight="fill" />
        </span>
        <p>Fast and reliable transactions</p>
      </IconInfoContainer>
      <IconInfoContainer background-color="purple">
        <span>
          <Key size={16} weight="fill" />
        </span>
        <p>Security and immutability</p>
      </IconInfoContainer>
    </GridIconInfoContainer>
  )
}
