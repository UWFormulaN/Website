import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #fffce9;
  display: flex;
  align-items: center;
`;

export const NanoHeader = styled.div`
  height: 8vh;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #6a1d41;
  display: flex;
  z-index: 2;
`;
export const HeaderLogoWrapper = styled.a`
  height: 7.4vh;
  width: 20%;
`;

export const HeaderLogo = styled.img`
  height: 7.4vh;
  width: 100%;
  border: solid 0.2vw #9c1933;
`;

export const MenuList = styled.div`
  height: 8vh;
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const NanoLinkWrapper = styled.a`
  height: inherit;
  width: 10vw;
  top: inherit;

  position: relative;
  text-decoration: none;

  :hover {
    background-color: #b21d3b;
  }
`;

export const NanoLink = styled.div`
  height: 8vh;
  width: 10vw;
  top: inherit;
  color: #fffce9;

  position: relative;
  font-weight: bold;
  font-size: 1.25vw;
  letter-spacing: 0.2vw;
  text-shadow: 0.25vh 0.25vh #6a1d41;
  display: flex;

  justify-content: center;
  align-items: center;

  :hover {
    background-color: #b21d3b;
    border: solid 0.2vw #9c1933;
  }
`;
