import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    NestConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        //entities: [__dirname + '../**/*.entity.ts],
        autoLoadEntities: true,
        synchronize: true, // Apenas em dev
        //logging: true, // <--- isso ativa os logs SQL
      }),
    }),
  ],
})
export class ConfigModule {}
