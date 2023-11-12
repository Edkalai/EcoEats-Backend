import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FoodsModule } from './foods/foods.module';
import { InventoriesModule } from './inventories/inventories.module';
import { DonationsModule } from './donations/donations.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [UsersModule, FoodsModule, InventoriesModule, DonationsModule, LocationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
