import React from "react";
import styled from "styled-components";
import waveSVG1 from "../../static/images/waves/hero-wave1.svg";
import waveSVG2 from "../../static/images/waves/hero-wave2.svg";
import waveSVG3 from "../../static/images/waves/hero-wave3.svg";

export default function WaveBackground() {
  return (
    <Wrapper>
      <Background />
      <Wave src={waveSVG1} style={{ top: "100px", filter: "blur(60px)" }} />
      <Wave src={waveSVG2} style={{ top: "350px" }} />
      <Wave src={waveSVG3} style={{ top: "550px" }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;
const Wave = styled.img`
  position: absolute;
  z-index: -1;
`;

const Background = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  position: absolute;
  width: 100%;
  height: 800px;
  z-index: -1;
`;
