import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PenggunaService } from './pengguna.service';

export interface User {
  name: string;
  age: string;
}

export interface Message {
  success: boolean;
  id?: number;
  message: string;
  data?: User[];
}

@Controller('pengguna')
export class PenggunaController {
  constructor(private readonly usersService: PenggunaService) {}

  @Get()
  async findAll(): Promise<Message> {
    const data = await this.usersService.getAllUsers();

    return {
      success: true,
      data,
      message: 'Data Successfully Fetched',
    };
  }

  @Post()
  async create(@Body() user: Partial<User>): Promise<Message> {
    await this.usersService.create(user);

    return {
      success: true,
      message: 'User Created Successfully',
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() user: Partial<User>,
  ): Promise<Message> {
    await this.usersService.update(id, user);
    const data = await this.usersService.getUserById(id);

    return {
      success: true,
      data,
      message: 'User Updated Successfully',
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<Message> {
    await this.usersService.delete(id);

    return {
      success: true,
      message: 'User deleted Successfully',
    };
  }
}
