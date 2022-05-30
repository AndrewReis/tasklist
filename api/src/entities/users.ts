// dependencies
import { v4 as uuidV4 } from 'uuid';

export class User {
  readonly id: string;
  public name: string;
  public email: string;
  readonly created_at: string;
  readonly updated_at: string;

  constructor(name: string, email: string) {
    this.id = uuidV4();
    this.name = name;
    this.email = email;
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
  }
}
