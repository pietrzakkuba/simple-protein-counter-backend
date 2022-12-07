import { Module } from '@nestjs/common';
import { DaysService } from './days.service';
import { daysController } from './days.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Day } from './entities/day.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Day])],
  controllers: [daysController],
  providers: [DaysService],
})
export class DaysModule {}
