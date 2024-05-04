export class SchemaField {
  fieldName: string;
  type: string;
  isPrimaryKey: boolean;
  min?: number;
  max?: number;
  length?: number;
  arrayElement?: SchemaField;
  fields: { [key: string]: SchemaField };

  constructor(data: any) {
    this.fieldName = data.fieldName;
    this.type = data.type;
    this.isPrimaryKey = data.isPrimaryKey;
    this.min = data.min;
    this.max = data.max;
    this.length = data.length;
    this.arrayElement = data.arrayElement ? new SchemaField(data.arrayElement) : undefined;
    this.fields = {};
    Object.keys(data.fields).forEach(key => {
      this.fields[key] = new SchemaField(data.fields[key]);
    });
  }
}
