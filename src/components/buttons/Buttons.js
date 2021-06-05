import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";

const Button = styled.button`
  padding: 12px auto;
  font-size: 1rem;
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Nunito", "monospace";
  height: 50px;
  width: 190px;
  left: 271px;
  top: 108px;
`;

const PrimaryButton = styled(Button)`
  background-color: ${themes.dark.backgroundColor};
  border: none;
  color: ${themes.dark.textPrimary};
`;

const SecondaryButton = styled(Button)`
  background-color: ${themes.light.backgroundColor};
  border: ${themes.light.textPrimary} solid 5px;
  color: ${themes.light.textPrimary};
`;

const TertiaryButton = styled(Button)`
  background-color: ${themes.light.backgroundColor};
  border: none;
  color: ${themes.light.textPrimary};
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
