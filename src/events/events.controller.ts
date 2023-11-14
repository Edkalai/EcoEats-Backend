import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Put } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';




@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', { dest: './uploads' }))
  create(@Body() createEventDto: CreateEventDto,@UploadedFile() file: Express.Multer.File) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get("getEventsWithLikes/:idU")
  findAllWithLiked( @Param('idU') idU: string) {
    return this.eventsService.getEventsWithFavoriteAndParticipation(+idU);
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }


  @Patch("addEventParticipation")
  addEventParticipation(@Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.addEventParticipation(updateEventDto);
  }

  @Patch("removeEventParticipation")
  removeEventParticipation(@Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.removeEventParticipation(updateEventDto);
  }

  @Patch("removeEventfromFavorite")
  removeEventfromFavorite(@Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.removeEventFromFavorite(updateEventDto);
  }
  @Patch("addEventToFavorite")
  addEventToFavorite(@Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.addEventToFavorite(updateEventDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}
