export class User {
  constructor(
    public userId: number,
    public userName: string,
    public firstName: string,
    public familyName: string,
    public role: string,
    public authData: string
  ) { }
}
