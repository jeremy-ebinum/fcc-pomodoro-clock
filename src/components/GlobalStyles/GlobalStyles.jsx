import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  /* stylelint-disable-next-line */
  "@global": {
    html: {
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    "*, *::before, *::after": {
      boxSizing: "inherit",
    },
    "strong, b": {
      fontWeight: "bolder",
    },
    body: {
      color: theme.palette.text.primary,
      ...theme.typography.body2,
      backgroundColor: theme.palette.background.default,
      "@media print": {
        backgroundColor: theme.palette.common.white,
      },
      "&::backdrop": {
        backgroundColor: theme.palette.background.default,
      },
    },
  },
}));

const GlobalStyles = ({ children }) => {
  useStyles();

  return <>{children}</>;
};

GlobalStyles.propTypes = {
  children: PropTypes.node,
};

GlobalStyles.defaultProps = {
  children: null,
};

export default GlobalStyles;
