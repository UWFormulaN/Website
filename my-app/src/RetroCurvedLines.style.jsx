import React from 'react';
import styled from 'styled-components';

export const RetroCurvedLinesBackground = styled.div`
    position: absolute;
    height: 127.5%;
    width: 100%;
    opacity: 30%;
    left: 0;
    overflow: hidden;
`

export const RetroCurvedLines = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 -80 150 120" xmlns="http://www.w3.org/2000/svg">

    <path d="M -132.5 95 Q 10 -17.5, 90 -17.5 L 110 -17.5 " fill="transparent" stroke="#80450a" strokeWidth="18" />
    <path d="M 375 -90 Q 200 -19, 150 -17.5 L 100 -17.5 " fill="transparent" stroke="#80450a" strokeWidth="18" />

    <path d="M -130 120 Q 10 0, 90 0.25 L 110 0 " fill="transparent" stroke="#cc6600" strokeWidth="18" />
    <path d="M 365 -70 Q 200 0, 150 0.25 L 100 0 " fill="transparent" stroke="#cc6600" strokeWidth="18" />

    <path d="M -125 145 Q 10 17.5, 90 17.5 L 110 17.5 " fill="transparent" stroke="#ccba33" strokeWidth="18" />
    <path d="M 360 -50 Q 200 20, 150 17.5 L 100 17.5 " fill="transparent" stroke="#ccba33" strokeWidth="18" />
    </svg>
  );
};

export const RetroStackedLines = () => {
    return (
        <svg width="100%" height="80%" viewBox="50 60 100 100" xmlns="http://www.w3.org/2000/svg">
      {/* Bottom Line with Double Curve */}
      <path d="M -30 120 Q 50 150, 90 130 Q 130 110, 170 130 L300 183" fill="transparent" stroke="#ccba33" strokeWidth="10" />
    
    {/* Middle Line with Double Curve */}
    <path d="M -30 110 Q 50 140, 90 120 Q 130 100, 170 120 L300 173" fill="transparent" stroke="#cc6600" strokeWidth="10" />

    {/* Top Line with Double Curve */}
    <path d="M -30 100 Q 50 130, 90 110 Q 130 90, 170 110 L300 163" fill="transparent" stroke="#80450a" strokeWidth="10" />
    </svg>
    );
  };
  
