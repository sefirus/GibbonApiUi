import {Permission} from "./Permission";
import {SchemaObject} from "./SchemaObject";

export class WorkspaceResponse {
  schemaObjects: SchemaObject[];
  permissions: Permission[];
  accessLevel: string;
  numOfSchemaObjects: number;
  numOfDocuments: number;
  id: string;
  name: string;

  constructor(data: any) {
    this.schemaObjects = data.schemaObjects.map((obj: any) => new SchemaObject(obj));
    this.permissions = data.permissions.map((perm: any) => new Permission(perm));
    this.accessLevel = data.accessLevel;
    this.numOfSchemaObjects = data.numOfSchemaObjects;
    this.numOfDocuments = data.numOfDocuments;
    this.id = data.id;
    this.name = data.name;
  }
}
