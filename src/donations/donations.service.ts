import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDonationDto: CreateDonationDto) {
    
    return 'This action adds a new donation';
  }

  findAll() {
    return this.prismaService.donation.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} donation`;
  }

  update(id: number, updateDonationDto: UpdateDonationDto) {
    return `This action updates a #${id} donation`;
  }

  remove(id: number) {
    return `This action removes a #${id} donation`;
  }

  async getImage(filename: string): Promise<Buffer | null> {
    // Retrieve the image based on the filename
    
    const imagePath = `c:/Users/fadhe/OneDrive/Bureau/flutter/${filename}`;
    // Adjust the path to your image directory

    // You can use a library like `fs` to read the image file
    const fs = require('fs').promises;
    try {
      const imageBuffer = await fs.readFile(imagePath);
      return imageBuffer;
    } catch (error) {
      throw new NotFoundException('Image not found');
    }
  }
}
