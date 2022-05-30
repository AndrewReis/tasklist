import { User } from '../../entities/users';
import { IUserRepository } from './interface';

export class UserFakeRepository implements IUserRepository {
  create(userEntity: { name: string; email: string; password: string; }): Promise<User> {
    throw new Error('Method not implemented.');
  }
  getByEmail(email: string): Promise<User | undefined> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<User | undefined> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}
