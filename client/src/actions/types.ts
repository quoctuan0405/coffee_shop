import {setMeAction, logoutAction} from "./me";

export enum ActionTypes {
    LOGIN,
    LOGOUT
}

export type Action = setMeAction | logoutAction