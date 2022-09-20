import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {User} from "../../user-list/user.model";

@Component({
  selector: 'app-dialog-user-detail',
  templateUrl: './dialog-user-detail.component.html'
})
export class DialogUserDetailComponent{

  constructor(@Inject(MAT_DIALOG_DATA) public data: User) { }

}
