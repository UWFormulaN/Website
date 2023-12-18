import { useState } from "react";
import styled from "styled-components";
import { TeamBoxWrapper } from "./Team.style";

const CarouselTrack = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  transition: transform 0.5s ease-in-out;
`;

const CarouselSlide = styled.div`
  flex: 0 0 100%;
  width: 50vw;
`;

const CarouselBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #3498db;
`;

const PrevBtn = styled(CarouselBtn)`
  right: 100%;
  color: #572e04;
  z-index: ${(props) => (props.page % 2 === 0 ? "-1" : "1")};
`;

const NextBtn = styled(CarouselBtn)`
  left: 90%;
  color: #572e04;
  z-index: ${(props) => (props.page % 2 === 0 ? "1" : "-1")};
`;

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex(1);
  };

  return (
    <TeamBoxWrapper>
      <CarouselTrack
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselSlide key={index}>{slide}</CarouselSlide>
        ))}
      </CarouselTrack>
      <PrevBtn onClick={handlePrev} page={currentIndex}>
        &#9665;
      </PrevBtn>
      <NextBtn onClick={handleNext} page={currentIndex}>
        &#9655;
      </NextBtn>
    </TeamBoxWrapper>
  );
};

export default Carousel;
