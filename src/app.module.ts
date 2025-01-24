import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexModule } from 'nest-knexjs';
import { PenggunaController } from './pengguna/pengguna.controller';
import { PenggunaService } from './pengguna/pengguna.service';
import { PenggunaModule } from './pengguna/pengguna.module';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'mysql',
        version: '5.7',
        useNullAsDefault: true,
        connection: {
          database: 'crud_example',
          user: 'root',
          password: '',
          host: 'localhost',
          port: 3306,
          ssl: false,
        },
      },
    }),
    PenggunaModule,
  ],
  controllers: [AppController, PenggunaController],
  providers: [AppService, PenggunaService],
})
export class AppModule {}
