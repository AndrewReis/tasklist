// repositories
import { UserFakeRepository } from '../../repositories/users/user-fake.repository';
// use-cases
import { CreateUserUseCase } from './_create';

// instances
const userFakeRepository = new UserFakeRepository();
const createUserUseCase = new CreateUserUseCase(userFakeRepository);

export {
  createUserUseCase,
};
