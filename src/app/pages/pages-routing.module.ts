import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { TaskSecondComponent } from './task-second/task-second.component';
const routes: Routes = [

  {
    path: "user",
    component: UserListComponent
  },
  {
    path: "task",
    component: TaskSecondComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
