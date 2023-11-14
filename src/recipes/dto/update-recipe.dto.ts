import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRecipeDto } from './create-recipe.dto';
import { IsNumber } from 'class-validator';

export class UpdateRecipeDto {
  @ApiProperty()
  @IsNumber()
    idrecipe?: number;
    @ApiProperty()
    @IsNumber()
    iduser?: number;
   
  }
  