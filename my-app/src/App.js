import { TeamPage, TeamTextHeader } from "./Team/Team.style";
import "./App.css";
import {
  HomeImageWrapper,
  HomeImage,
  HomeImageText,
  RoundaboutWrapper,
} from "./Home/Home.style";
import {
  HeaderLogoWrapper,
  HeaderLogo,
  MenuList,
  NanoHeader,
  NanoLink,
  NanoLinkWrapper,
  Page,
  AllPages,
} from "./PageAndMenu.style";
import TeamSlides from "./Team/TeamSlides";
import Carousel from "./Team/Carousel.style";
import { AboutBoxWrapper, AboutPageWrapper, AboutTextHeader, AboutWrapper, MissionStatement } from "./About.style";
import { ArrowDown } from "./Home/Bounce.style";
import { RetroCurvedLines, RetroCurvedLinesBackground, RetroStackedLines } from "./RetroCurvedLines.style";
import { ContactBoxWrapper, ContactIconAndTextWrapper, ContactPage, ContactPageWrapper, ContactTextContentWrapper, ContactTextHeader, ContactWrapper, IconWrapper } from "./ContactUs.style";

const linkText = ["About", "Team", "Contact"];
const hrefLinks = ["#about", "#team", "#contact"];

const ContactIcons = [`location_on`, `photo_camera`, `groups`, `contact_mail`]
const ContactText = ["Find us @ QNC 69420", "Find us on Instagram", "Follow us on LinkedIn", "Email us @ formulanano@uwaterloo.ca"]

const ContactLinks = ["https://www.google.com/search?q=qnc+69420&rlz=1C1VDKB_enCA1004CA1004&oq=qnc+69420&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDE2OTZqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8", "https://www.instagram.com/", "https://www.linkedin.com/", "mailto:formulanano@uwaterloo.ca"]

const arrowColours = [
  "material-symbols-outlined red",
  "material-symbols-outlined orange",
  "material-symbols-outlined blonde",
];
const arrowPosn = ["57.5vw", "67.5vw", "77.5vw"];
const arrowDown = "45vh";



function App() {
  return (
    <AllPages>
      <NanoHeader>
        <HeaderLogoWrapper href="#home">
          <HeaderLogo src="FormulaNano Logo.png" />
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
        <ArrowDown>
        <span class="material-symbols-outlined arrow">
        keyboard_double_arrow_down
        </span>
          </ArrowDown>
          <HomeImage href="#about">
            <HomeImageText>UW Formula Nano</HomeImageText>
          </HomeImage>
        </HomeImageWrapper>
      </Page>

      <Page id="about">
        <AboutPageWrapper>
          <RetroCurvedLinesBackground>
          <RetroStackedLines style={{position: "relative"}}/>
          </RetroCurvedLinesBackground>
          <AboutTextHeader>
            ABOUT
          </AboutTextHeader>
          <AboutBoxWrapper>
            <AboutWrapper>
              <MissionStatement>
              At UW Formula Nano, our mission is to dominate the racing circuit through the fusion of nano-engineering and automotive excellence. We strive to push the limits of speed, efficiency, and innovation, embodying the spirit of relentless pursuit and achieving unparalleled success in the thrilling world of motorsports.
              </MissionStatement>
              
              {/* {arrowColours.map((arrow, index) => {
            return (
              <RoundaboutWrapper style={{ left: arrowPosn[index], top: arrowDown }}>
                <span class={arrow}>bubble_chart</span>
              </RoundaboutWrapper>
            );
          })} */}
            </AboutWrapper>
          </AboutBoxWrapper>


        </AboutPageWrapper>
      </Page>
      <TeamPage id="team">
        <TeamTextHeader>TEAM</TeamTextHeader>
        {TeamSlides.map((slide) => {
          return (<Carousel slides={slide}/> )
        })}
      </TeamPage>

      <ContactPage id="contact">
        <ContactTextHeader>
          CONTACT
        </ContactTextHeader>
        <ContactPageWrapper>
      <RetroCurvedLinesBackground>
          <RetroCurvedLines style={{position: "relative"}}/>
          </RetroCurvedLinesBackground>

          <ContactBoxWrapper>
            <ContactWrapper>
        {ContactIcons.map( (icon, index) => {
          return (
            <ContactIconAndTextWrapper>
              <IconWrapper href={ContactLinks[index]}>
            <span class="material-symbols-outlined contact">
              {icon}
            </span>
            </IconWrapper>
        <ContactTextContentWrapper>
          {ContactText[index]}
        </ContactTextContentWrapper>
        </ContactIconAndTextWrapper>
          )
        })}
            </ContactWrapper>
          </ContactBoxWrapper>
                    </ContactPageWrapper>
          </ContactPage>
    </AllPages>
  );
}

export default App;
