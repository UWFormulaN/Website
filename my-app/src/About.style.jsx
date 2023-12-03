import styled from "styled-components";

export const AboutPage = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #fffce9;
`;

export const AboutWrapper = styled.div`
  position: relative;
  height: 77vh;
  width: 100%;
  top: 2vw;
`;
export const TeamWrapper = styled.div`
  position: relative;
  height: 92.5%;
  width: 90%;
  top: 7.5%;
  left: 4vw;
  border: solid 2px #6a1d41;
`;

export const AboutTextHeader = styled.div`
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

export const AboutTextContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  left: ${(props) => (props.isLeft ? "50vw" : "4vw")};
  bottom: 68.75%;
  height: 100%;
  width: 40%;
`;

export const AboutTextContent = styled.div`
  font-size: 1.155vw;
  text-align: ${(props) => (props.isLeft ? "left" : "right")};
  bottom: 68.75%;
  height: 60%;
  width: 100%;
  display: flex;
  align-items: center;
  overflow-y: auto;
`;
