import { IsInt, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDayDto {
  @ApiProperty({
    required: true,
    type: Number,
  })
  id: number;

  @ApiProperty({
    required: true,
    minimum: 1,
    maximum: 500,
  })
  @IsInt()
  @Min(1)
  @Max(500)
  gramsGoal: number;

  @ApiProperty({
    required: true,
    minimum: 1,
    maximum: 500,
  })
  @IsInt()
  @Min(1)
  @Max(500)
  gramsConsumed: number;
}
