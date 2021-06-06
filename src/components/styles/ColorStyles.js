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
  neutral600: `rgba(0, 0, 0, 0.7)`,
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
    textPrimary: `${colors.primary100}`,
    textSecondary: `${colors.primary200}`,
    backgroundColor: `${colors.neutral100}`,

    button: {
      primaryColor: `${colors.primary100}`,
      primaryHoverColor: `${colors.primary100dark}`,
      primaryActiveColor: `${colors.primary100lighter}`,
      textColorOnPrimary: `${colors.neutral100}`,
      textColor: `${colors.primary100dark}`,
      textColorInverted: `${colors.primary100dark}`,
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
    status: {
      backgroundColor: "rgba(68, 66, 178, 0.1)",
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
    textSecondary: `${colors.neutral200}`,
    backgroundColor: `${colors.primary100}`,
    card: {
      backgroundColor: `${colors.primary100dark}`,
      boxShadow: `0px 30px 60px rgba(0, 0, 0, 0.25),
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.2)`,
      backgroundColorFull: `${colors.primary100}`,
    },
    cardHover: {
      backgroundColor: `rgba(255, 255, 255, 0.1)`,
      boxShadow: `inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2)`,
    },
    pricingCard: {
      backgroundColor: `rgba(31, 31, 71, 0.6)`,
    },
    status: {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modal: {
      backgroundColor: `rgba(50, 61, 109, 0.5)`,
      boxShadow: `0px 50px 100px rgba(0, 0, 0, 0.25),
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.3)`,
      backgroundColorFull: `${colors.primary100lighter}`,
    },
  },
};
