// repositories
import { UserFakeRepository } from '../../repositories/users/user-fake.repository';
// use-cases
import { CreateUserUseCase } from './_create';
import { GetAllUsersUseCase } from './_get-all';

// instances
const userFakeRepository = new UserFakeRepository();
const createUserUseCase = new CreateUserUseCase(userFakeRepository);
const getAllUsersUseCase = new GetAllUsersUseCase(userFakeRepository);

export {
  createUserUseCase,
  getAllUsersUseCase,
};
