import { IUserRepository } from '../../repositories/users/interface';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  public async execute(userRequest: { name: string, email: string, password: string }) {
    return '';
  }
}
