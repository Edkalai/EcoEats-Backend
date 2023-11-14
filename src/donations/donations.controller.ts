import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { Response } from 'express';



@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  create(@Body() createDonationDto: CreateDonationDto) {
    return this.donationsService.create(createDonationDto);
  }

  @Get()
  findAll() {
    return this.donationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonationDto: UpdateDonationDto) {
    return this.donationsService.update(+id, updateDonationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donationsService.remove(+id);
  }
  @Get('image/:filename')
  async getImage(@Param('filename') filename: string, @Res() res: Response) {
    const imageBuffer = await this.donationsService.getImage(filename);

    if (imageBuffer) {
      // Set content type to image/png or image/jpeg, depending on your image type
      res.header('Content-Type', 'image/png');
      res.send(imageBuffer);
    } else {
      res.status(404).send('Image not found');
    }
  }
  
}
