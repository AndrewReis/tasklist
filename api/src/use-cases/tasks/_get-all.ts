import { ITaskRepository } from '../../repositories/tasks/interface';

export class GetAllTasksUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  public async execute() {
    const tasks = await this.taskRepository.getAll();
    return tasks;
  }
}
