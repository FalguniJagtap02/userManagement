import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/user.service';
import { UserCrudOperationComponent } from './user-crud-operation/user-crud-operation.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'role', 'actions'];
  users: any[] = [];

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  addUser() {
    const dialogRef = this.dialog.open(UserCrudOperationComponent, {
      width: '300px',
      data: { mode: 'add' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.addUser(result);
        this.users = this.userService.getUsers();
      }
    });
  }

  editUser(user: any) {
    const dialogRef = this.dialog.open(UserCrudOperationComponent, {
      width: '400px',
      data: { mode: 'edit', user: user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.updateUser(user.id, result);
        this.users = this.userService.getUsers();
      }
    });
  }

  deleteUser(id: number) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteUser(id);
      this.users = this.userService.getUsers();
    }
  }
}
