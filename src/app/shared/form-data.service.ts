import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  generateFormData(fields: any[]): any {
    const formData: any = {};
    fields.forEach(field => {
      if (field.type === 'Checkbox') {
        formData[field.label] = false;
      } else {
        formData[field.label] = field.placeholder || '';
      }
    });
    return formData;
  }
}
