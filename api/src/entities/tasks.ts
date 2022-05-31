// dependencies
import { v4 as uuidV4 } from 'uuid';

export class Task {
  readonly id: string;
  readonly userId: string;
  public title: string;
  readonly done: boolean;
  readonly deadline: string;
  readonly created_at: string;

  constructor(title: string, userId: string) {
    this.id = uuidV4();
    this.userId = userId;
    this.title = title;
    this.done = false;
    this.deadline = new Date().toISOString();
    this.created_at = new Date().toISOString();
  }
}
