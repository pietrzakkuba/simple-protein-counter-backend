import { IsInt, IsISO8601, Length, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDayDto {
  @ApiProperty({
    required: true,
    format: 'YYYY-MM-DD',
    example: '2022-12-31',
  })
  @Length(10, 10)
  @IsISO8601()
  date: string;

  @ApiProperty({
    required: true,
    minimum: 1,
    maximum: 500,
  })
  @IsInt()
  @Min(1)
  @Max(500)
  gramsGoal: number;
}
