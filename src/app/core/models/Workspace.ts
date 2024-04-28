export class Workspace {
  constructor(
    public id: string,
    public name: string,
    public accessLevel: string,
    public numOfSchemaObjects: number,
    public numOfDocuments: number
  ) {}
}
