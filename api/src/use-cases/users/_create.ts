import { User } from '../../entities/users';
import { AppError } from '../../helpers/app-error.helper';
import { IUserRepository } from '../../repositories/users/interface';

type UserRequest = {
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  public async execute(userRequest: UserRequest): Promise<User> {
    const checkUserExist = await this.userRepository.getByEmail(userRequest.email);

    if (!checkUserExist) {
      const user = await this.userRepository.create(userRequest);
      return user;
    }

    throw new AppError('User already exist', 409);
  }
}
