import { Dispatch, createContext } from "react";
import { ActionType, StateType } from "./Types";
import { initialState } from "./InitialState";

export const CounterContext = createContext<{
    state: StateType;
    dispatch: Dispatch<ActionType>;
  }>({ state: initialState, dispatch: () => null });