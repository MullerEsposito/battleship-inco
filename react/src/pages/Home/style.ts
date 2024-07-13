import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;  
  gap: 20px;
  padding: 5.68rem 10rem;
  font-family: "Roboto", sans-serif;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  & img {
    width: 700px;
  }
`

export const ContentBannerContainer = styled.div`
  width: 36.375rem;

  & > h1 {
    font-family: "Baloo", sans-serif;
    font-size: 3rem;
  }

  & > p {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;
    padding-top: 10px;
  }
`

export const PlayButton = styled.button`
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  margin-top: 3rem;
  background: #1a8951;
  border: none;
  color: white;
  cursor: pointer;
  padding: 14px;
  border-radius: 8px;
  font-weight: bold;
  animation: bounce 2s infinite;

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`