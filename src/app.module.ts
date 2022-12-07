import { Module } from '@nestjs/common';
import { DaysModule } from './protein-counter/days.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DaysModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
