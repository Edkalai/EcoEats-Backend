import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService){}
  create(createRecipeDto: CreateRecipeDto) {
    return 'This action adds a new recipe';
  }

  findAll() {
    return this.prisma.recipes.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }
  async addComment(id: number, comment: string) {
    const recipe = await this.prisma.recipes.update({
      where: { id },
      data: { comment },
    });

    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }

    return recipe;
  }


  async searchByTitle(title: string) {
    return this.prisma.recipes.findMany({
      where: {
        title: {
          contains: title,
          mode: 'insensitive', // Case-insensitive search
        },
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
  

  addRecipeToFavorite(idrecipe:number,iduser:number) {
    
   
    return this.prisma.recipes.update({
      where: {
        id: idrecipe
      },
      data: {
        favoritedBy: {
          connect:{
            id: iduser
          }
         
        }}
    });
  }
  removeRecipeToFavorite(idrecipe:number,iduser:number) {
    
   
    return this.prisma.recipes.update({
      where: {
        id: idrecipe
      },
      data: {
        favoritedBy: {
          disconnect:{
            id: iduser
          }
         
        }}
    });
  }

  
}
