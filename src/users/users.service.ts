import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Mengambil semua pengguna
  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();
    console.log('Users found:', users); // Debugging log
    return users;
  }

  // Mengambil pengguna berdasarkan ID
  async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  // Menambahkan pengguna baru
  async create(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  // Memperbarui pengguna
  async update(id: number, user: Partial<User>): Promise<User | null> {
    await this.userRepository.update(id, user);
    return this.findOne(id);
  }
}
