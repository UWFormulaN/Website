import styled from "styled-components";

export const ContactPage = styled.div`
    position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #fffce9;
`;

export const ContactPageWrapper = styled.div`
    width: 100%;
    height: 70%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContactTextHeader = styled.div`
  font-size: 1.5vw;
  position: relative;
  letter-spacing: 0.85vw;
  font-size: 5vw;
  left: 2vw;
  width: 96vw;
  height: 20%;
  top: 8vh;
  font-weight: bold;
`;

export const ContactWrapper = styled.div`
  position: relative;
  height: 80%;
  width: 90%;
  border: solid 2px #6a1d41;
  display: table-row;
  justify-content: space-around;
`;

export const ContactBoxWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpielText = styled.div`
    position: relative;
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ContactIconAndTextWrapper = styled.div`
    position: relative;
    height: 25%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const ContactTextContentWrapper = styled.div`
    position: relative;
    height: inherit;
    width: 80%;
    right: 0vh;
    display: flex;
    align-items: center;

    font-size: 2.5vw;
    letter-spacing: 0.2vw;
    text-shadow: 0.3vh 0.3vh #f7efbe;
    font-weight:bold;
    text-align: start;
`

export const IconWrapper = styled.a`

    :hover {
        opacity: 30%;
        cursor: pointer;
    }
`