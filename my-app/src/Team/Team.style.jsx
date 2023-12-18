import styled from "styled-components";

export const TeamPage = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #fffce9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

export const TeamBoxWrapper = styled.div`
  position: relative;
  height: 77vh;
  width: 100%;
  top: vh;
  display: flex;
  left: 5%;
  align-items: center;
  justify-content: center;
  padding-top: 8vh;
  padding-bottom: 8vh;
`;

export const TeamWrapper = styled.div`
  position: relative;
  height: 67.5vh;
  width: 90%;
  top: 7.5%;
  border: solid 2px #572e04;
`;

export const TeamTextHeader = styled.div`
  font-size: 1.5vw;
  position: relative;
  letter-spacing: 1vw;
  font-size: 5vw;
  left: 2vw;
  width: 96vw;
  height: 30%;
  top: 8vh;
  font-weight: bold;
`;

export const TeamNameHeader = styled.div`
  position: relative;
  letter-spacing: 0.5vw;
  font-size: 3vw;
  display: flex;
  justify-content: ${(props) => (props.isLeft ? "start" : "end")};
  left: ${(props) => (props.isLeft ? "5%" : "0%")};
  right: ${(props) => (props.isLeft ? "0%" : "5%")};
  width: 95%;
  height: fit-content;
  top: 5%;
  font-weight: bold;
`;

export const TeamImg = styled.img`
  position: relative;
  left: ${(props) => (props.isLeft ? "3%" : "57%")};
  top: 12.5%;
  height: 60%;
  width: 40%;
`;

export const TeamTextContentWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: ${(props) => (props.isLeft ? "50vw" : "4vw")};
  bottom: 0%;
  height: 100%;
  width: 40%;
`;

export const TeamTextContent = styled.div`
  font-size: 1.155vw;
  text-align: ${(props) => (props.isLeft ? "left" : "right")};
  bottom: 68.75%;
  height: 60%;
  width: 100%;
  display: flex;
  align-items: center;
  overflow-y: auto;
`;
