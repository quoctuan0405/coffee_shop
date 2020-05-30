import {Dispatch} from "redux";
import {User} from "../generated/operation";
import {ActionTypes} from "./types";

export interface setMeAction {
    type: ActionTypes.LOGIN,
    payload: User
}

export const setMe = (user: User) => (dispatch: Dispatch) => {
    dispatch<setMeAction>({
        type: ActionTypes.LOGIN,
        payload: user
    })
};

export interface logoutAction {
    type: ActionTypes.LOGOUT,
}

export const logMeOut = () => (dispatch: Dispatch) => {
    dispatch<logoutAction>({
        type: ActionTypes.LOGOUT
    })
};