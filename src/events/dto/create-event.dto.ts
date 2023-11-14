import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateEventDto {
   
    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    location: string;

    @ApiProperty()
    @IsString()
    date: string;

    @ApiProperty()
    @IsNumber()
    userId: number;


    @ApiProperty()
    @IsString()
    imageName: string;



}
