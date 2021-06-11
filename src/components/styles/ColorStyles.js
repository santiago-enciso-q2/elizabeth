export const colors = {
  primary100: `rgba(102, 44, 145, 1)`,
  primary200: `rgba(23, 163, 152, 1)`,
  primary300: `rgba(255, 31, 87, 1)`,
  primary400: `rgba(245, 255, 112, 1)`,
  primary100dark: `rgba(87, 38, 125, 1)`,
  primary100lighter: `rgba(148, 99, 186, 1)`,
  primary100lightest: `rgba(179, 130, 217, 1)`,
  neutral100: `rgba(255, 255, 255, 1)`,
  neutral200: `rgba(204, 204, 204, 0.7)`,
  neutral300: `rgba(133, 133, 133, 1)`,
  neutral400: `rgba(92, 92, 92, 0.6)`,
  neutral500: `rgba(51, 51, 51, 1)`,
  neutral600: `rgba(0, 0, 0, 1)`,
  success100: `rgba(23, 163, 152, 1)`,
  success200: `rgba(18, 125, 116, 1)`,
  success300: `rgba(13, 89, 83, 1)`,
  error100: `rgba(255, 31, 87, 1)`,
  error200: `rgba(245, 0, 61, 1)`,
  error300: `rgba(204, 0, 51, 1)`,
  warning100: `rgba(245, 255, 112, 1)`,
  warning200: `rgba(239, 255, 10, 1)`,
  warning300: `rgba(209, 224, 0, 1)`,
};

export const themes = {
  light: {
    textPrimary: `${colors.neutral100}`,
    textSecondary: `${colors.primary200}`,
    backgroundColor: `${colors.neutral100}`,
    formElementBackground: `${colors.neutral100}`,
    textOnFormElementBackground: `${colors.neutral500}`,
    button: {
      primaryColor: `${colors.primary100}`,
      primaryHoverColor: `${colors.primary100dark}`,
      primaryFocusColor: `${colors.primary100lightest}`,
      primaryActiveColor: `${colors.primary100lighter}`,
      textColorOnPrimary: `${colors.neutral100}`,
      textColor: `${colors.primary100dark}`,
      textColorInverted: `${colors.primary100dark}`,
      disabled: `${colors.neutral300}`,
      textOnDisabled: `${colors.neutral100}`,
    },
    status: {
      warningColor: `${colors.warning100}`,
      warningColorText: `${colors.primary100}`,
      warningColorHover: `${colors.warning200}`,
      warningColorActive: `${colors.warning300}`,

      errorColor: `${colors.error100}`,
      errorColorText: `${colors.neutral100}`,
      errorColorHover: `${colors.error200}`,
      errorColorActive: `${colors.error300}`,

      successColor: `${colors.success100}`,
      successColorText: `${colors.neutral100}`,
      successColorHover: `${colors.success200}`,
      successColorActive: `${colors.success300}`,
    },
    card: {
      backgroundColor: `${colors.neutral400}`,
      boxShadow: `0px 50px 100px rgba(34, 79, 169, 0.3),
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.6)`,
      backgroundColorFull: `${colors.neutral100}`,
    },
    cardHover: {
      backgroundColor: `rgba(68, 66, 178, 0.1)`,
      boxShadow: `inset 0px 0px 0px 0.5px rgba(68, 66, 178, 0.2)`,
    },
    pricingCard: {
      backgroundColor: `rgba(255, 255, 255, 0.3)`,
    },
    modal: {
      backgroundColor: `rgba(255, 255, 255, 0.6)`,
      boxShadow: `0px 50px 100px rgba(34, 79, 169, 0.3),
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.6)`,
      backgroundColorFull: `rgba(255, 255, 255, 1)`,
    },
  },
  dark: {
    textPrimary: `${colors.neutral100}`,
    textSecondary: `${colors.neutral600}`,
    backgroundColor: `${colors.primary100dark}`,
    formElementBackground: `${colors.neutral500}`,
    textOnFormElementBackground: `${colors.primary100lightest}`,
    button: {
      primaryColor: `${colors.neutral600}`,
      primaryHoverColor: `${colors.neutral600}`,
      primaryFocusColor: `${colors.primary100lightest}`,
      primaryActiveColor: `${colors.primary100lighter}`,
      textColorOnPrimary: `${colors.primary100}`,
      textColor: `${colors.neutral100}`,
      textColorInverted: `${colors.primary100dark}`,
      disabled: `${colors.neutral300}`,
      textOnDisabled: `${colors.neutral100}`,
    },
    status: {
      warningColor: `${colors.warning100}`,
      warningColorText: `${colors.primary100}`,
      warningColorHover: `${colors.warning200}`,
      warningColorActive: `${colors.warning300}`,

      errorColor: `${colors.error100}`,
      errorColorText: `${colors.neutral100}`,
      errorColorHover: `${colors.error200}`,
      errorColorActive: `${colors.error300}`,

      successColor: `${colors.success100}`,
      successColorText: `${colors.neutral100}`,
      successColorHover: `${colors.success200}`,
      successColorActive: `${colors.success300}`,
    },
    card: {
      backgroundColor: `${colors.neutral400}`,
      boxShadow: `0px 50px 100px rgba(34, 79, 169, 0.3),
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.6)`,
      backgroundColorFull: `${colors.neutral100}`,
    },
    cardHover: {
      backgroundColor: `rgba(68, 66, 178, 0.1)`,
      boxShadow: `inset 0px 0px 0px 0.5px rgba(68, 66, 178, 0.2)`,
    },
    pricingCard: {
      backgroundColor: `rgba(255, 255, 255, 0.3)`,
    },
    modal: {
      backgroundColor: `rgba(255, 255, 255, 0.6)`,
      boxShadow: `0px 50px 100px rgba(34, 79, 169, 0.3),
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.6)`,
      backgroundColorFull: `rgba(255, 255, 255, 1)`,
    },
  },
};
