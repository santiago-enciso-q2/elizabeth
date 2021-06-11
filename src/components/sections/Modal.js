import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import { typeScale } from "../styles/TextStyles";

const ModalWrapper = styled.div`
  width: 800px;
  height: 580px;
  box-shadow: 0px 5px 16px 1px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.themes.formElementBackground};
  color: ${(props) => props.themes.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;
