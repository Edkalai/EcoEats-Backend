import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateEventDto } from './create-event.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateEventDto extends PartialType(CreateEventDto) {


    @ApiProperty()
    @IsNumber()
    EventId: number;

    @ApiProperty()
    @IsNumber()
    userId: number;



}
