import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import { typeScale, primaryFont } from "../styles/TextStyles";

const Button = styled.button`
  padding: 12px auto;
  font-size: ${typeScale.paragraph};
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${primaryFont};
  height: 50px;
  width: 190px;
  left: 271px;
  top: 108px;
  border: none;
  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:hover {
    border: none;
    background-color: ${themes.light.button.primaryHoverColor};
    color: ${themes.light.button.textColorOnPrimary};
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }

  &:focus {
    border: ${themes.light.button.primaryFocusColor} solid 3px;
    background: ${themes.light.button.primaryColor};
    color: ${themes.light.button.textColorOnPrimary};
  }

  &:active {
    border: none;
    color: ${themes.light.button.textColorOnPrimary};
    background: ${themes.light.button.primaryColor};
  }
`;

const PrimaryButton = styled(Button)`
  background: ${themes.light.button.primaryColor};
  color: ${themes.light.button.textColorOnPrimary};

  &:disabled {
    border: none;
    color: ${themes.light.button.textOnDisabled};
    background: ${themes.light.button.disabled};
  }
`;

const SecondaryButton = styled(Button)`
  background: ${themes.light.button.neutral100};
  border: ${themes.light.button.primaryColor} solid 5px;
  color: ${themes.light.textColorOnPrimary};

  &:disabled {
    border: ${themes.light.button.disabled} solid 5px;
    color: ${themes.light.button.disabled};
    background: ${themes.light.button.neutral100};
  }
`;

const TertiaryButton = styled(Button)`
  background: none;
  color: ${themes.light.button.primaryColor};

  &:disabled {
    border: none;
    color: ${themes.light.button.disabled};
    background: ${themes.light.button.neutral100};
  }
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
