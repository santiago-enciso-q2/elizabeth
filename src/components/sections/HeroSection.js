import React, { useState } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { H1, H2, MediumText } from "../styles/TextStyles";
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
  {
    /* useDarkTheme hook only affects the hero section. Move up the component hierarchy to use globally */
  }
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? themes.dark : themes.light}>
      <Wrapper>
        {" "}
        <button
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
          onClick={() => setUseDarkTheme(true)}
        >
          Dark Theme
        </button>
        <button
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
          onClick={() => setUseDarkTheme(false)}
        >
          Default Theme
        </button>
        <div
          style={{
            width: "100vw",
            height: "45vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {" "}
          <H1> Default Buttons</H1>
          <PrimaryButton>One </PrimaryButton>
          <SecondaryButton>Two</SecondaryButton>
          <TertiaryButton>Three</TertiaryButton>
        </div>
        <hr />
        <H1>Button Combinations</H1>
        <p>Primary Buttons</p>
        <PrimaryButton modifiers={["small", "success", "primaryButtonSuccess"]}>
          Hello world
        </PrimaryButton>
        <PrimaryButton modifiers={["warning", "primaryButtonWarning"]}>
          Hello world
        </PrimaryButton>
        <PrimaryButton modifiers={["large", "error", "primaryButtonError"]}>
          Hello world
        </PrimaryButton>
        <p>Secondary Buttons</p>
        <SecondaryButton
          modifiers={["small", "success", "secondaryButtonSuccess"]}
        >
          Goodbye world
        </SecondaryButton>
        <SecondaryButton modifiers={["warning", "secondaryButtonWarning"]}>
          Goodbye world
        </SecondaryButton>
        <SecondaryButton modifiers={["large", "error", "secondaryButtonError"]}>
          Goodbye world
        </SecondaryButton>
        <p>Tertiary Buttons</p>
        <TertiaryButton modifiers={["success", "tertiaryButtonSuccess"]}>
          Hey world
        </TertiaryButton>
        <TertiaryButton modifiers={["warning", "tertiaryButtonWarning"]}>
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
    </ThemeProvider>
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
  background: ${(props) => props.theme.backgroundColor}; ;
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
