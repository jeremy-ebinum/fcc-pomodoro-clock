import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

export const initialState = {
  isBreakTime: false,
  isRunning: false,
  breakLength: 5,
  sessionLength: 25,
};

export const StateContext = createContext(initialState);

export const StateProvider = ({ reducer, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  children: PropTypes.node,
};

StateProvider.defaultProps = {
  children: null,
};

export const useStateValue = () => useContext(StateContext);
