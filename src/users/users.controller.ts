import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Mengambil semua pengguna
  @Get()
  async findAll() {
    const data = await this.usersService.findAll();
    return {
      success: true,
      data,
      message: 'User Fetched Successfully',
    };
  }

  // Mengambil pengguna berdasarkan ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<User | null> {
    return this.usersService.findOne(id);
  }

  // Menambahkan pengguna baru
  @Post()
  create(@Body() user: Partial<User>): Promise<User> {
    return this.usersService.create(user);
  }

  // Memperbarui pengguna
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() user: Partial<User>,
  ): Promise<User | null> {
    return this.usersService.update(id, user);
  }

  // Menghapus pengguna
}
