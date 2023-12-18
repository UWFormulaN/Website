import { DisplayPeopleWrapper, PersonImg, PersonTitle, PersonWrapper } from "./People.style";
import {
  TeamImg,
  TeamNameHeader,
  TeamTextContent,
  TeamTextContentWrapper,
  TeamWrapper,
} from "./Team.style";
import { teamCopy } from "./TeamCopy";

const teamName = ["Chemistry", "Computation", "Business"];
const chemTeam = ["a", "b", "c", "d"]
const compTeam = ["a", "b", "c", "d", "e", "f"]
const bizTeam = ["a", "b", "c"]
const allNames = [chemTeam, compTeam, bizTeam]
const TeamSlides = [];


for (let index = 0; index < 3; index++) {
  TeamSlides[index] = [
    <TeamWrapper>
      <TeamNameHeader isLeft={index % 2 === 0 ? true : false}>
        {teamName[index]}
      </TeamNameHeader>
      <TeamImg
        isLeft={index % 2 === 0 ? true : false}
        src="Design for the corner of a ceiling 17th century anonymous italian roman-bolognese.jpg"
      />
      <TeamTextContentWrapper isLeft={index % 2 === 0 ? true : false}>
        <TeamTextContent>{teamCopy[index]}</TeamTextContent>
      </TeamTextContentWrapper>
    </TeamWrapper>,
    <TeamWrapper>
      <TeamNameHeader isLeft={index % 2 === 0 ? true : false}>
        {teamName[index]}
      </TeamNameHeader>
      <DisplayPeopleWrapper isComp={index % 2=== 1 ? true : false}>
      {allNames[index].map( (person) => {
        return (
          <PersonWrapper>
        <PersonImg src="Design for the corner of a ceiling 17th century anonymous italian roman-bolognese.jpg"/>
        <PersonTitle>
          {person}
        </PersonTitle>
      </PersonWrapper>
        )
      })}
      </DisplayPeopleWrapper>
      
    </TeamWrapper>,
  ];
}

export default TeamSlides;