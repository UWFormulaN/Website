import styled from "styled-components";

export const PersonWrapper = styled.div`
  width: fit-content;
  height: fit-content;

`;

export const PersonImg = styled.img`
  width: 8.5vw;
  height: 8.5vw;
  border-radius: 50%;
`;

export const PersonTitle = styled.div`
  width: 100%;
  height: 30%;
  text-align: center;
`;

export const DisplayPeopleWrapper = styled.div`
  display: ${(props) => (props.isComp ? "grid": "flex")};
  align-items: center;
  justify-content: space-around;
  grid-template-areas: ${(props) => (props.isComp ? `"a a a"
  " b b b" ` : "none")};
  position: relative;
  width: 100%;
  height: 85%;
  top: 3.5vh;
`