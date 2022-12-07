import { Injectable } from '@nestjs/common';
import { CreateDayDto } from './dto/createDayDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Day } from './entities/day.entity';
import { Repository } from 'typeorm';
import { UpdateDayDto } from './dto/updateDayDto';

@Injectable()
export class DaysService {
  constructor(
    @InjectRepository(Day) private readonly daysRepository: Repository<Day>,
  ) {}

  create(createDayDto: CreateDayDto) {
    const newDay: Day = this.daysRepository.create({
      ...createDayDto,
      gramsConsumed: 0,
    });
    return this.daysRepository.save<Day>(newDay);
  }

  async update(updateDayDto: UpdateDayDto) {
    const day: Day = await this.daysRepository.findOneBy({
      id: updateDayDto.id,
    });
    return this.daysRepository.save({ ...day, ...updateDayDto });
  }

  getAll() {
    return this.daysRepository.find();
  }

  getOne(id: number) {
    return this.daysRepository.findOneBy({ id });
  }

  async removeOne(id: number) {
    const day: Day = await this.daysRepository.findOneBy({ id });
    return day ? this.daysRepository.remove(day) : null;
  }
}
