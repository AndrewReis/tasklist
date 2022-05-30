import { User } from '../../entities/users';

type UserEntity = {
  name: string;
  email: string;
  password: string;
}

export interface IUserRepository {
  create(userEntity: UserEntity): Promise<User>;
  getByEmail(email: string): Promise<User | undefined>;
  getById(id: string): Promise<User | undefined>;
  getAll(): Promise<User[]>;
}
