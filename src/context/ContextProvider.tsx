"use client";

import { ReactNode, useReducer, useState } from "react";
import { initialState } from "./InitialState";
import { reducer } from "./Reducer";
import { CounterContext } from "./Context";

export const ContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [clickMenu, setClickMenu] = useState(false);

  const context = {
    state,
    dispatch,
    clickMenu,
    setClickMenu,
  }

  return (
    <CounterContext.Provider value={context}>
      {children}
    </CounterContext.Provider>
  );
};
