  import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
  import { RecipesService } from './recipes.service';
  import { CreateRecipeDto } from './dto/create-recipe.dto';
  import { UpdateRecipeDto } from './dto/update-recipe.dto';
  import { Response } from 'express';

  import { ApiTags } from '@nestjs/swagger';

  @Controller('recipes')
  @ApiTags('recipes')
  export class RecipesController {
    constructor(private readonly recipesService: RecipesService) {}

    @Post()
    create(@Body() createRecipeDto: CreateRecipeDto) {
      return this.recipesService.create(createRecipeDto);
    }
    @Get('search/:title')
    searchByTitle(@Param('title') title: string) {
      return this.recipesService.searchByTitle(title);
    }

    @Get()
    findAll() {
      return this.recipesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.recipesService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
      return this.recipesService.update(+id, updateRecipeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.recipesService.remove(+id);
    }
  
 // Example in your RecipesController
 @Post(':id/comment')
 addComment(@Param('id') id: string, @Body('comment') comment: string) {
   return this.recipesService.addComment(+id, comment);
 }
 @Patch("/addRecipeFavorite/:idrecipe/:iduser")
 addRecipeFavorite(@Param('idrecipe') idrecipe: string ,@Param('iduser') iduser: string) {
    return this.recipesService.addRecipeToFavorite(+idrecipe,+iduser);
  }
  @Patch("/removeRecipeFavorite/:idrecipe/:iduser")
  removeRecipeFavorite(@Param('idrecipe') idrecipe: string ,@Param('iduser') iduser: string) {
     return this.recipesService.removeRecipeToFavorite(+idrecipe,+iduser);
   }
 
 


  }
