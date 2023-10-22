import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FoodsModule } from './foods/foods.module';
import { InventoriesModule } from './inventories/inventories.module';

@Module({
  imports: [UsersModule, FoodsModule, InventoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
