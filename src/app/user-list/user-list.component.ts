import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {catchError, Observable} from "rxjs";
import {UserService} from "./user.service";
import {User} from "./user.model";
import {selectUsers} from "../state/user.selectors";
import {retrievedUsers} from "../state/user.actions";
import {MatDialog} from "@angular/material/dialog";
import {DialogUserDetailComponent} from "../dialog/dialog-user-detail/dialog-user-detail.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private userService: UserService,
    private store: Store,
    private dialog: MatDialog
  ) { }

  users: Observable<User[]> = this.store.select(selectUsers)
  displayedColumns: string[] = ['name', 'username', 'city', 'companyName'];
  clickedItems: Set<any> = new Set<any>()
  errorMessage: string | undefined;
  noUsersMessage: string | undefined;

  ngOnInit(): void {
    this._initUsers()
  }

  click(row: any) {
    this.clickedItems.clear()
    this.clickedItems.add(row)
    this.dialog.open(DialogUserDetailComponent, {data: row})
  }

  private _initUsers() {
    this.userService.getUsers()
      .pipe(
        catchError(err => {
          this.errorMessage = 'An error occurred while retrieving the users. Please try later'
          throw Error(err)
        })
      )
      .subscribe((users) => {
        this.store.dispatch(retrievedUsers({users}))
        if (users.length === 0) {
          this.noUsersMessage = 'No users retrieved'
        }
      }
    )
  }
}
