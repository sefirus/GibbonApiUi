export class Permission {
  userId: string;
  userName: string;
  email: string;
  role: string;

  constructor(data: any) {
    this.userId = data.userId;
    this.userName = data.userName;
    this.email = data.email;
    this.role = data.role;
  }
}
