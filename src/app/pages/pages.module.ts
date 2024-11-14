import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { UserListComponent } from './user-list/user-list.component';
import { UserCrudOperationComponent } from './user-list/user-crud-operation/user-crud-operation.component';
import { FormsModule } from '@angular/forms';
import { TaskSecondComponent } from './task-second/task-second.component';
import { DynamicFieldComponent } from './task-second/dynamic-field/dynamic-field.component';  // Import FormsModule

@NgModule({
  declarations: [
    UserListComponent,
    UserCrudOperationComponent,
    TaskSecondComponent,
    DynamicFieldComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule,
    PagesRoutingModule,
    MaterialModule,
    FormsModule,   
  ]
})
export class PagesModule { }
