import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FoodsModule } from './foods/foods.module';
import { InventoriesModule } from './inventories/inventories.module';
import { RecipesModule } from './recipes/recipes.module';
import { PrismaModule } from './prisma/prisma.module';



@Module({
  imports: [UsersModule, FoodsModule, InventoriesModule, RecipesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
