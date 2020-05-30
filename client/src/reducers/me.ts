import {User} from "../generated/operation";
import {Action, ActionTypes} from "../actions";

export const meReducer = (state: User | null = null, action: Action) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return action.payload;
        case ActionTypes.LOGOUT:
            return null;
        default:
            return state
    }
};