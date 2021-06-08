import React from "react";
import styled from "styled-components";
import { themes } from "../styles/ColorStyles";
import { typeScale, primaryFont } from "../styles/TextStyles";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: auto 8px ;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: () => `
    background-color: ${themes.light.status.warningColor};
    color: ${themes.light.status.warningColorText};
    border: none;
    
    &:hover, &:focus {
      background-color: ${themes.light.warningColorHover};
      outline: 3px solid ${themes.light.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    
    &:active {
      background-color: ${themes.light.status.warningColorActive};
    }
  `,
  primaryButtonWarning: () => `
    background-color: ${themes.light.status.warningColor};
    color: ${themes.light.status.warningColorText};
  `,
  secondaryButtonWarning: () => `
    border: 2px solid ${themes.light.status.warningColor};
    background: none;
    color: ${themes.light.status.warningColor};
  `,
  error: () => `
    background: none;
    color: ${themes.light.status.errorColorText};
    &:hover, &:focus {
      background-color: ${themes.light.status.errorColorHover};
      outline: 3px solid ${themes.light.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${themes.light.status.errorColorActive};
    }
  `,
  primaryButtonError: () => `
    background-color: ${themes.light.status.errorColor};
    color: ${themes.light.status.errorColorText};
  `,
  secondaryButtonError: () => `
    border: 2px solid ${themes.light.status.warningColor};
  `,

  tertiaryButtonError: () => `
    border: none;
    background: none;
    color: ${themes.light.status.errorColor};
  `,
  success: () => `
    background: none;
    color: ${themes.light.status.successColorText};
    &:hover, &:focus {
      background-color: ${themes.light.status.successColorHover};
      outline: 3px solid ${themes.light.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${themes.light.status.successColorActive};
    }
  `,
  primaryButtonSuccess: () => `
    background-color: ${themes.light.status.successColor};
    color: ${themes.light.status.successColorText};
  `,
  secondaryButtonSuccess: () => `
    border: 2px solid ${themes.light.status.successColor};
    color: ${themes.light.status.successColor};
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 5px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${primaryFont};
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
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
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
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const TertiaryButton = styled(Button)`
  background: none;
  color: ${themes.light.button.primaryColor};

  &:disabled {
    border: none;
    color: ${themes.light.button.disabled};
    background: ${themes.light.button.neutral100};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export { PrimaryButton, SecondaryButton, TertiaryButton };
