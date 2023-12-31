import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventoriesService } from './inventories.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { AddFoodToInventoryDto } from './dto/add-food-to-inventory.dto';

@Controller('inventories')
export class InventoriesController {
  constructor(private readonly inventoriesService: InventoriesService) {}

  @Post()
  create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoriesService.create(createInventoryDto);
  }

  @Get()
  findAll() {
    return this.inventoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventoriesService.findOne(+id);
  }

  @Post('/addFoodToInventory/:id')
  addFoodToInventory(
    @Param('id') id: string,
    @Body() addFoodToInventoryDto: AddFoodToInventoryDto,
  ) {
    return this.inventoriesService.addFoodToInventory(
      +id,
      addFoodToInventoryDto,
    );
  }

  @Post('/addFoodToInventory/:id/:barcode')
  addFoodToInventoryByBarcode(
    @Param('id') id: string,
    @Param('barcode') barcode: string,
    @Body() addFoodToInventoryDto: AddFoodToInventoryDto,
  ) {
    return this.inventoriesService.addFoodToInventoryByBarcode(
      +id,
      barcode,
      addFoodToInventoryDto,
    );
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    return this.inventoriesService.update(+id, updateInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoriesService.remove(+id);
  }

  @Delete(':inventoryId/:foodId')
  removeFoodFromInventory(
    @Param('inventoryId') inventoryId: string,
    @Param('foodId') foodId: string,
  ) {
    return this.inventoriesService.removeFoodFromInventory(
      +inventoryId,
      +foodId,
    );
  }
}
