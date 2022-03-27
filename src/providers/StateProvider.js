import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// Wrap the app and provide layer
export const StateProvider = ({ reducer, initialState, children }) => (
  // => {
  //   console.log({reducer, initialState, children});
  // }
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull data from the data layer
export const useStateValue = () => useContext(StateContext);