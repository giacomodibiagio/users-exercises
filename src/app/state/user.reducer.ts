import { createReducer, on } from '@ngrx/store';
import {retrievedUsers} from "./user.actions";
import {User} from "../user-list/user.model";


export const initialState: Array<User> = [];

export const userReducer = createReducer(
  initialState,
  on(retrievedUsers, (state, { users }) => users)
);
