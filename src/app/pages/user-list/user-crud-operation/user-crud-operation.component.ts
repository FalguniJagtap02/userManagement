import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-crud-operation',
  templateUrl: './user-crud-operation.component.html',
})
export class UserCrudOperationComponent implements OnInit {
  userForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserCrudOperationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.isEditMode = data.mode === 'edit';
    this.userForm = this.fb.group({
      name: [
        data.user?.name || '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')] // Alphabetic characters only
      ],
      email: [
        data.user?.email || '',
        [Validators.required, Validators.email] // Valid email format
      ],
      role: [data.user?.role || 'User', Validators.required] // Default role
    });
  }

  ngOnInit(): void {}

  onSave() {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
