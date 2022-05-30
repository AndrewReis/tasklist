import { User } from '../../entities/users';
import { IUserRepository } from './interface';

export class UserFakeRepository implements IUserRepository {
  private repository: User[];

  constructor() {
    this.repository = [];
  }

  async create(userEntity: { name: string; email: string; password: string; }): Promise<User> {
    const user = new User(userEntity.name, userEntity.email);
    this.repository.push(user);
    return user;
  }
  async getByEmail(email: string): Promise<User | undefined> {
    return this.repository.find((findUser) => findUser.email === email);
  }
  async getById(id: string): Promise<User | undefined> {
    return this.repository.find((findUser) => findUser.id === id);
  }
  async getAll(): Promise<User[]> {
    return this.repository;
  }
}
