import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss']
})
export class DynamicFieldComponent  {

  @Input() field!: FormGroup;  // Ensure it's a FormGroup
  @Output() remove = new EventEmitter<void>();

  get options(): FormArray {
    return this.field.get('options') as FormArray; // Cast to FormArray
  }

  addOption() {
    this.options.push(new FormControl('')); // Add new option
  }

  removeOption(index: number) {
    this.options.removeAt(index); // Remove option at index
  }

  onRemove() {
    this.remove.emit(); // Emit remove event
  }
}
