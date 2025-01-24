import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';

export interface User {
  id: number;
  name: string;
  age: string;
}

@Injectable()
export class PenggunaService {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async getAllUsers() {
    const user = this.knex('user').select('*');

    return user;
  }

  async getUserById(id: number): Promise<User> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await this.knex('user').select('*').where('id', id).first();
  }

  async create(data: Partial<User>) {
    await this.knex('user').insert(data).returning('*'); // Menggunakan returning('*')
  }

  async update(id: number, data: Partial<User>) {
    return await this.knex('user').update(data).where('id', id);
  }

  async delete(id: number) {
    return await this.knex('user').delete().where('id', id);
  }
}
