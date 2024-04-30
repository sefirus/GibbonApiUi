import {SchemaField} from "./SchemaField";

export class SchemaObject {
  id: string;
  workspaceId: string;
  name: string;
  fields: { [key: string]: SchemaField };
  numberOfDocuments: number;
  numberOfFields: number;

  constructor(data: any) {
    this.id = data.id;
    this.workspaceId = data.workspaceId;
    this.name = data.name;
    this.fields = {};
    Object.keys(data.fields).forEach(key => {
      this.fields[key] = new SchemaField(data.fields[key]);
    });
    this.numberOfDocuments = data.numberOfDocuments;
    this.numberOfFields = data.numberOfFields;
  }
}
