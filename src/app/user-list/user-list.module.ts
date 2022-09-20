import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {UserListComponent} from "./user-list.component";
import {MatTableModule} from "@angular/material/table";
import {StoreModule} from "@ngrx/store";
import {userReducer} from "../state/user.reducer";
import {DialogUserDetailComponent} from "../dialog/dialog-user-detail/dialog-user-detail.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    UserListComponent,
    DialogUserDetailComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: UserListComponent
            },
        ]),
        MatTableModule,
        StoreModule.forRoot({users: userReducer}),
        MatDialogModule,
        MatCardModule,
    ]
})
export class UserListModule { }
