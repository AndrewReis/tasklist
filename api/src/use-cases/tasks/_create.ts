import { ITaskRepository } from '../../repositories/tasks/interface';

export class CreateTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  public async execute(userId: string, title: string) {
    const task = await this.taskRepository.create(userId, title);
    return task;
  }
}
