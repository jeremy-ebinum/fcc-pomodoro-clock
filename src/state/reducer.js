import { initialState } from "./state";

const toSeconds = (minutes) => minutes * 60;

export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_BREAK":
      return {
        ...state,
        breakLength: state.breakLength + 1,
        breakTimeLeft: toSeconds(state.breakLength + 1),
      };

    case "DECREMENT_BREAK":
      return {
        ...state,
        breakLength: state.breakLength - 1,
        breakTimeLeft: toSeconds(state.breakLength - 1),
      };

    case "INCREMENT_SESSION":
      return {
        ...state,
        sessionLength: state.sessionLength + 1,
        sessionTimeLeft: toSeconds(state.sessionLength + 1),
      };

    case "DECREMENT_SESSION":
      return {
        ...state,
        sessionLength: state.sessionLength - 1,
        sessionTimeLeft: toSeconds(state.sessionLength - 1),
      };

    case "COUNTDOWN_BREAK_TIME":
      return state.breakTimeLeft > 0
        ? { ...state, breakTimeLeft: state.breakTimeLeft - 1 }
        : state;

    case "RESET_BREAK_TIME":
      return { ...state, breakTimeLeft: toSeconds(state.breakLength) };

    case "COUNTDOWN_SESSION_TIME":
      return state.sessionTimeLeft > 0
        ? { ...state, sessionTimeLeft: state.sessionTimeLeft - 1 }
        : state;

    case "RESET_SESSION_TIME":
      return { ...state, sessionTimeLeft: toSeconds(state.sessionLength) };

    case "SET_IS_BREAK_TIME":
      return { ...state, isBreakTime: action.payload };

    case "SET_IS_RUNNING":
      return { ...state, isRunning: action.payload };

    case "RESET_STATE":
      return { ...initialState, darkMode: state.darkMode };

    case "SET_DARK_MODE":
      return { ...state, darkMode: action.payload };

    default:
      return state;
  }
};

export const incrementBreak = () => {
  return { type: "INCREMENT_BREAK" };
};

export const decrementBreak = () => {
  return { type: "DECREMENT_BREAK" };
};

export const incrementSession = () => {
  return { type: "INCREMENT_SESSION" };
};

export const decrementSession = () => {
  return { type: "DECREMENT_SESSION" };
};

export const countdownBreakTime = () => {
  return { type: "COUNTDOWN_BREAK_TIME" };
};

export const resetBreakTime = () => {
  return { type: "RESET_BREAK_TIME" };
};

export const countdownSessionTime = () => {
  return { type: "COUNTDOWN_SESSION_TIME" };
};

export const resetSessionTime = () => {
  return { type: "RESET_SESSION_TIME" };
};

/**
 *
 * @param {boolean} payload
 */
export const setIsBreakTime = (payload) => {
  return { type: "SET_IS_BREAK_TIME", payload };
};

/**
 *
 * @param {boolean} payload
 */
export const setIsRunning = (payload) => {
  return { type: "SET_IS_RUNNING", payload };
};

export const resetState = () => {
  return { type: "RESET_STATE" };
};

/**
 *
 * @param {boolean} payload
 */
export const setDarkMode = (payload) => {
  return { type: "SET_DARK_MODE", payload };
};
