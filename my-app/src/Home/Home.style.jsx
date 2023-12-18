import styled from "styled-components";

export const HomeImageWrapper = styled.div`
  top: 8vh;
  position: relative;
  height: 92vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeImage = styled.a`
  background-image: url("Design for the corner of a ceiling 17th century anonymous italian roman-bolognese.jpg");
  position: absolute;
  height: 100vh;
  width: 100%;
  bottom: 0%;
  text-decoration: none;
`;

export const HomeImageText = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 5vw;
  font-family: 'Russo One', sans-serif;
  letter-spacing: 0.5vw;
  color: white;
  text-shadow: 0.2vw 0.2vw #572e04;
`;

export const RoundaboutWrapper = styled.div`
  height: 400px;
  width: 400px;
  position: absolute;
  top: 30vh;
  z-index: 0;
  opacity: 50%;
`;
