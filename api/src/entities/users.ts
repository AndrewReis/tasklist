// dependencies
import { v4 as uuidV4 } from 'uuid';

export class User {
  readonly id: string;
  public name: string;
  public email: string;

  constructor({ name, email }: Omit<User, 'id'>) {
    this.id = uuidV4();
    this.name = name;
    this.email = email;
  }
}
