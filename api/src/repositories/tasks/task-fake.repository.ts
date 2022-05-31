import { Task } from '../../entities/tasks';
import { ITaskRepository } from './interface';

export class TaskFakeRepository implements ITaskRepository {
  private repository: Task[];

  constructor() {
    this.repository = [];
  }

  async create(userId: string, title: string): Promise<Task> {
    const task = new Task(title, userId);
    this.repository.push(task);
    return task;
  }

  async getAll(): Promise<Task[]> {
    return this.repository;
  }
}
