import { ActionType, StateType } from "./Types";

export const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        case "RESET":
            return { ...state, count: 0 };
        case "MENUMOBILE":
            return { ...state, clickMenu: !state.clickMenu };
        case "PERSONALDATACUSTOMER":
            return { ...state, personalDataCustomer: !state.personalDataCustomer };
        default:
            return state;
    }
};