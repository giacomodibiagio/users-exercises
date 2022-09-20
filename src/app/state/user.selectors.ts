import { createFeatureSelector } from '@ngrx/store';
import {User} from "../user-list/user.model";

export const selectUsers = createFeatureSelector<Array<User>>('users');

