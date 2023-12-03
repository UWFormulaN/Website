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

export const HomeImage = styled.div`
  background-image: url("Design for the corner of a ceiling 17th century anonymous italian roman-bolognese.jpg");
  position: absolute;
  height: 80vh;
  width: 90%;
  bottom: 11%;
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
  letter-spacing: 0.5vw;
  color: white;
  text-shadow: 0.2vw 0.2vw black;
`;

export const RoundaboutWrapper = styled.div`
  height: 400px;
  width: 400px;
  position: absolute;
  top: 30vh;
  z-index: 1;
  opacity: 50%;
`;
