import { Task } from '../../entities/tasks';

export interface ITaskRepository {
  create(userId: string, title: string): Promise<Task>;
  getAll(): Promise<Task[]>;
}
