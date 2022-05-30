// entities
import { User } from '../../entities/users';
// interfaces
import { IUserRepository } from '../../repositories/users/interface';

export class GetAllUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  public async execute(): Promise<User[]> {
    return this.userRepository.getAll();
  }
}
