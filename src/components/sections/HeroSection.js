import React from "react";
import styled, { keyframes } from "styled-components";
import { H1, MediumText } from "../styles/TextStyles";
import { themes } from "../styles/ColorStyles";
import PurchaseButton from "../buttons/PurchaseButton";
import MockupAnimation from "../animations/MockupAnimation";
import WaveBackground from "../backgrounds/WaveBackground";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "../buttons/Buttons";

const HeroSection = () => {
  return (
    <Wrapper>
      {" "}
      <PrimaryButton modifiers={["small", "success", "primaryButtonSuccess"]}>
        Hello world
      </PrimaryButton>
      <PrimaryButton modifiers={["warning", "primaryButtonWarning"]}>
        Hello world
      </PrimaryButton>
      <PrimaryButton modifiers={["large", "error", "primaryButtonError"]}>
        Hello world
      </PrimaryButton>
      <SecondaryButton
        modifiers={["small", "success", "secondaryButtonSuccess"]}
      >
        Goodbye world
      </SecondaryButton>
      <SecondaryButton modifiers={["warning", "secondaryButtonWarning"]}>
        Goodbye world
      </SecondaryButton>
      <SecondaryButton
        modifiers={["large", "warning", "secondaryButtonWarning"]}
      >
        Goodbye world
      </SecondaryButton>
      <TertiaryButton modifiers={["error", "tertiaryButtonError"]}>
        Hey world
      </TertiaryButton>
      <TertiaryButton modifiers={["error", "tertiaryButtonError"]}>
        Hey world
      </TertiaryButton>
      <TertiaryButton modifiers={["error", "tertiaryButtonError"]}>
        Hey world
      </TertiaryButton>
      {/*<WaveBackground />*/}
      {/*<ContentWrapper>*/}
      {/*  <TextWrapper>*/}
      {/*    <Title>*/}
      {/*      <span>Elizabeth</span> <br />*/}
      {/*      Design*/}
      {/*      <br />*/}
      {/*      System*/}
      {/*    </Title>*/}
      {/*    <Description>Welcome to your new site.</Description>*/}
      {/*    <PurchaseButton*/}
      {/*      title="Start Learning"*/}
      {/*      subtitle="120+ hours of video"*/}
      {/*    />*/}
      {/*  </TextWrapper>*/}
      {/*  <MockupAnimation />*/}
      {/*</ContentWrapper>*/}
    </Wrapper>
  );
};
export default HeroSection;

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`;

const Wrapper = styled.div`
  overflow: hidden;
  /* height added to prevent mockups from getting clipped at the bottom*/
  height: 800px;
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;

  /* button transition */
  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;

const Title = styled(H1)`
  color: ${themes.dark.text1};
  background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
  //background-clip: text;
  //color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 70px;

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 48px;
    line-height: 55px;
  }
`;

const Description = styled(MediumText)``;
