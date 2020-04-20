export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_BREAK":
      return { ...state, breakLength: state.breakLength + 1 };
    case "DECREMENT_BREAK":
      return { ...state, breakLength: state.breakLength - 1 };
    case "INCREMENT_SESSION":
      return { ...state, sessionLength: state.sessionLength + 1 };
    case "DECREMENT_SESSION":
      return { ...state, sessionLength: state.sessionLength - 1 };
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
