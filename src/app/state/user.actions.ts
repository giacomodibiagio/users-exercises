import { createAction, props } from '@ngrx/store';
import {User} from "../user-list/user.model";

export const retrievedUsers = createAction(
  '[User List/API] Retrieve Users Success',
  props<{ users: Array<User> }>()
);
