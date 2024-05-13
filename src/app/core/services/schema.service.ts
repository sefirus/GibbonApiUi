import { Injectable } from '@angular/core';
import {SchemaField} from "../models/SchemaField";
import {SchemaObject} from "../models/SchemaObject";
import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SchemaService {
  transform(schemaObject: SchemaObject): any {
    const transformed: { [key: string]: any } = {};
    Object.keys(schemaObject.fields).forEach(key => {
      const field = schemaObject.fields[key];
      transformed[field['fieldName']] = this.transformField(field);
    });
    return transformed;
  }

  private transformField(field: SchemaField): any {
    const transformedField: { [key: string]: any } = {
      'Type': this.normalizeType(field['type'])
    };

    if (field['isPrimaryKey']) {
      transformedField['IsPrimaryKey'] = field['isPrimaryKey'];
    }

    if (field['type'] === 'Array' && field['arrayElement']) {
      transformedField['ArrayElement'] = this.transformArrayElement(field['arrayElement']);
    }

    if (field['fields'] && Object.keys(field['fields']).length > 0) {
      transformedField['Fields'] = this.transformNestedFields(field['fields']);
    }

    return transformedField;
  }

  private transformArrayElement(arrayElement: SchemaField): any {
    const elementDetails: { [key: string]: any } = {
      'Type': this.normalizeType(arrayElement['type'])
    };

    if (arrayElement['min'] !== undefined) {
      elementDetails['Min'] = arrayElement['min'];
    }

    if (arrayElement['max'] !== undefined) {
      elementDetails['Max'] = arrayElement['max'];
    }

    if (arrayElement['length'] !== undefined) {
      elementDetails['Length'] = arrayElement['length'];
    }

    if (arrayElement['fields'] && Object.keys(arrayElement['fields']).length > 0) {
      elementDetails['Fields'] = this.transformNestedFields(arrayElement['fields']);
    }

    return elementDetails;
  }

  private transformNestedFields(fields: { [key: string]: SchemaField }): any[] {
    const fieldsArray: any[] = [];
    Object.keys(fields).forEach(key => {
      const nestedField = fields[key];
      const transformedNestedField: { [key: string]: any } = {
        'FieldName': nestedField['fieldName'],
        'Type': this.normalizeType(nestedField['type'])
      };

      if (nestedField['min'] !== undefined) {
        transformedNestedField['Min'] = nestedField['min'];
      }

      if (nestedField['max'] !== undefined) {
        transformedNestedField['Max'] = nestedField['max'];
      }

      if (nestedField['length'] !== undefined) {
        transformedNestedField['Length'] = nestedField['length'];
      }

      fieldsArray.push(transformedNestedField);
    });
    return fieldsArray;
  }

  private normalizeType(type: string): string {
    switch (type) {
      case 'Number': return 'Int'; // Adjust as needed for your data
      case 'String': return 'String';
      case 'Object': return 'Object';
      default: return type;
    }
  }
}
