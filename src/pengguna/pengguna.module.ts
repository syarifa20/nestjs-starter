import { Module } from '@nestjs/common';
import { PenggunaController } from './pengguna.controller';
import { PenggunaService } from './pengguna.service';

@Module({
  controllers: [PenggunaController],
  providers: [PenggunaService],
})
export class PenggunaModule {}
