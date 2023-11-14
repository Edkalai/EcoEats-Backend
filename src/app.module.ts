import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FoodsModule } from './foods/foods.module';
import { InventoriesModule } from './inventories/inventories.module';
import { RecipesModule } from './recipes/recipes.module';
import { DonationsModule } from './donations/donations.module';
import { LocationsModule } from './locations/locations.module';
import { EventsModule } from './events/events.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({

  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/images',
    }),
    UsersModule,
    FoodsModule,
    InventoriesModule,
    EventsModule,
    DonationsModule, 
    LocationsModule,
    RecipesModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
