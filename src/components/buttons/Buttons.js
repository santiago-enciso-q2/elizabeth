import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Nunito", "monospace";
`;

const PrimaryButton = styled(Button)`
  background-color: ${themes.dark.backgroundColor};
  border: none;
  color: ${themes.dark.textPrimary};
`;

export default PrimaryButton;
