import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';

// Type guard to check if a control is a FormGroup
function isFormGroup(control: AbstractControl): control is FormGroup {
  return control instanceof FormGroup;
}

@Component({
  selector: 'app-task-second',
  templateUrl: './task-second.component.html',
  styleUrls: ['./task-second.component.scss']
})
export class TaskSecondComponent implements OnInit {
isFormGroup(_t12: AbstractControl<any,any>): any {
throw new Error('Method not implemented.');
}
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      fields: this.fb.array([]), // Empty array to store fields
    });
  }

  get fields(): FormArray {
    return this.form.get('fields') as FormArray; // Cast to FormArray
  }

  addField(type: string): void {
    const field: FormGroup = this.fb.group({
      label: ['', Validators.required],
      placeholder: [''],
      type: [''],
      required: [false],
      options: this.fb.array([]),
    });
    this.fields.push(field); // Add field to FormArray
  }

  removeField(index: number): void {
    const field = this.fields.at(index);
    if (isFormGroup(field)) {  // Type guard check
      this.fields.removeAt(index); // Remove field if it's a FormGroup
    }
  }

  submit(): void {
    console.log(this.form.value); // Submit the form and log data
  }
}
