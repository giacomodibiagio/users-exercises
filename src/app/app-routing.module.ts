import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found.component";

const routes: Routes = [
  {
    path: 'user-list',
    loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule)
  },
  {path: '', redirectTo: 'user-list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
