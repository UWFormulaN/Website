import {
  AboutPage,
  AboutTextContent,
  AboutTextContentWrapper,
  AboutTextHeader,
  AboutWrapper,
  TeamImg,
  TeamNameHeader,
  TeamWrapper,
} from "./About.style";
import "./App.css";
import {
  HomeImageWrapper,
  HomeImage,
  HomeImageText,
  RoundaboutWrapper,
} from "./Home.style";
import {
  HeaderLogoWrapper,
  HeaderLogo,
  MenuList,
  NanoHeader,
  NanoLink,
  NanoLinkWrapper,
  Page,
} from "./Page.style";
import { teamCopy } from "./AboutCopy";

const linkText = ["About", "Team", "Contact us"];
const hrefLinks = ["#about", "#team", "#contact-us"];
const arrowColours = [
  "material-symbols-outlined red",
  "material-symbols-outlined orange",
  "material-symbols-outlined blonde",
];
const arrowPosn = ["52.5vw", "62.5vw", "72.5vw"];
const teamName = ["Chem", "Comp", "Biz"];

function App() {
  return (
    <div style={{ backgroundColor: "#FFFCE9" }}>
      <NanoHeader>
        <HeaderLogoWrapper href="#home">
          <HeaderLogo src="Design for the corner of a ceiling 17th century anonymous italian roman-bolognese.jpg" />
        </HeaderLogoWrapper>
        <MenuList>
          {linkText.map((item, index) => {
            return (
              <NanoLinkWrapper href={hrefLinks[index]}>
                <NanoLink> {item} </NanoLink>
              </NanoLinkWrapper>
            );
          })}
        </MenuList>
      </NanoHeader>
      <Page id="home">
        <HomeImageWrapper>
          {arrowColours.map((arrow, index) => {
            return (
              <RoundaboutWrapper style={{ left: arrowPosn[index] }}>
                <span class={arrow}>arrow_forward_ios</span>
              </RoundaboutWrapper>
            );
          })}
          <HomeImage>
            <HomeImageText>uw nanocars</HomeImageText>
          </HomeImage>
        </HomeImageWrapper>
      </Page>
      <AboutPage id="about">
        <AboutTextHeader>ABOUT</AboutTextHeader>
        {teamName.map((team, index) => {
          return (
            <AboutWrapper>
              <TeamWrapper>
                <TeamNameHeader isLeft={index % 2 === 0 ? true : false}>
                  {team}
                </TeamNameHeader>
                <TeamImg
                  isLeft={index % 2 === 0 ? true : false}
                  src="Design for the corner of a ceiling 17th century anonymous italian roman-bolognese.jpg"
                />
                <AboutTextContentWrapper
                  isLeft={index % 2 === 0 ? true : false}
                >
                  <AboutTextContent>{teamCopy[index]}</AboutTextContent>
                </AboutTextContentWrapper>
              </TeamWrapper>
            </AboutWrapper>
          );
        })}
      </AboutPage>

      <Page id="team">team</Page>

      <Page id="contact-us">contact</Page>
    </div>
  );
}

export default App;
