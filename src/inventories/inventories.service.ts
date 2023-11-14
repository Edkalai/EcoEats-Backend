import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddFoodToInventoryDto } from './dto/add-food-to-inventory.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class InventoriesService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createInventoryDto: CreateInventoryDto) {
    return 'This action adds a new inventory';
  }

  findAll() {
    return this.prismaService.inventory.findMany({
      include: {
        foods: true,
      },
    });
  }

  findOne(userId: number) {
    return this.prismaService.inventory.findUnique({
      where: {
        userId: userId,
      },
      select: {
        foods: {
          select: {
            food: {
              select: {
                id: true,
                name: true,
                description: true,
                barcode: true,
                category: true,
                img: true,
              },
            },
            quantity: true,
            unit: true,
          },
        },
      },
    });
  }

  addFoodToInventory(id: number, addFoodtoInventoryDto: AddFoodToInventoryDto) {
    return this.prismaService.foodInInventory.create({
      data: {
        foodId: addFoodtoInventoryDto.foodId,
        inventoryId: id,
        quantity: addFoodtoInventoryDto.quantity,
        unit: addFoodtoInventoryDto.unit,
      },
    });
  }

  async addFoodToInventoryByBarcode(
    id: number,
    barcode: string,
    addFoodtoInventoryDto: AddFoodToInventoryDto,
  ) {
    const foodId = await this.prismaService.food.findFirst({
      where: {
        barcode: barcode,
      },
      select: {
        id: true,
      },
    });

    return this.prismaService.foodInInventory.create({
      data: {
        foodId: foodId.id,
        inventoryId: id,
        quantity: addFoodtoInventoryDto.quantity,
        unit: addFoodtoInventoryDto.unit,
      },
    });
  }

  removeFoodFromInventory(inventoryId: number, foodId: number) {
    return this.prismaService.foodInInventory.delete({
      where: {
        foodId_inventoryId: {
          inventoryId: inventoryId,
          foodId: foodId,
        },
      },
      select: {
        food: true,
      },
    });
  }
  update(id: number, updateInventoryDto: UpdateInventoryDto) {
    return `This action updates a #${id} inventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`;
  }
}
