import styled from "styled-components";

export const GridIconInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.75rem;
  width: 35.4375rem;
  margin-top: 3.9275rem;
`

interface IconInfoContainerProps {
  "background-color": "yellow-dark" | "yellow" | "text" | "purple";
}

export const IconInfoContainer = styled.div<IconInfoContainerProps>`
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: 400;
  font-size: 0.9rem;

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2rem;
      width: 2rem;
      background-color: ${props => props["background-color"] == "text" ? props.theme.base["base-text"] : props.theme.product[props["background-color"]]};
      border-radius: 50%;

      & > svg {
        fill: ${props => props.theme.base.white}
      }
    }
`