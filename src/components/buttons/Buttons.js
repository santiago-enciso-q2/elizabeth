import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Nunito", "monospace";
`;

const PrimaryButton = styled(Button)`
  // CSS
  background: red;
  border: none;
  color: white;
`;

export default PrimaryButton;
