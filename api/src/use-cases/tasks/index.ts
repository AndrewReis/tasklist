// repositories
import { TaskFakeRepository } from '../../repositories/tasks/task-fake.repository';
// use-cases
import { CreateTaskUseCase } from './_create';
import { GetAllTasksUseCase } from './_get-all';

// instances
const taskFakeRepository = new TaskFakeRepository();
const createTaskUseCase = new CreateTaskUseCase(taskFakeRepository);
const getAllTasksUseCase = new GetAllTasksUseCase(taskFakeRepository);

export {
  createTaskUseCase,
  getAllTasksUseCase,
};
