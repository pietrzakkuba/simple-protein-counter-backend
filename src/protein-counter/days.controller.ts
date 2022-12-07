import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { DaysService } from './days.service';
import { CreateDayDto } from './dto/createDayDto';
import { UpdateDayDto } from './dto/updateDayDto';
import { Day } from './entities/day.entity';
import { ApiBody, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('days')
@Controller('days')
export class daysController {
  constructor(private readonly daysService: DaysService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.CREATED, description: 'day created' })
  @ApiBody({ type: CreateDayDto })
  addSingleDay(@Body() createDayDto: CreateDayDto) {
    return this.daysService.create(createDayDto);
  }

  @Put()
  @ApiOkResponse({ description: 'day updated' })
  @ApiBody({ type: UpdateDayDto })
  updateSingleDay(@Body() updateDayDto: UpdateDayDto) {
    return this.daysService.update(updateDayDto);
  }

  @Get()
  @ApiOkResponse({ description: 'all days returned successfully' })
  getAllDays() {
    return this.daysService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'day with given id returned successfully' })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'day with given id does not exist',
  })
  async getSingleDay(@Param('id', ParseIntPipe) id: number) {
    const day: Day = await this.daysService.getOne(id);
    if (!day) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `day with id ${id} does not exist`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return day;
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'deleted' })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'day with given id does not exist',
  })
  async removeSingleDay(@Param('id', ParseIntPipe) id: number) {
    const removedDay: Day = await this.daysService.removeOne(id);
    if (!removedDay) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `day with id ${id} does not exist`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return removedDay;
  }
}
