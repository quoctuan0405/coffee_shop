import {combineReducers} from "redux";
import {meReducer} from "./me";
import {User} from "../generated/operation";

export interface StoreState {
    me: User | null
}

export const reducers = combineReducers<StoreState>({
    me: meReducer
});