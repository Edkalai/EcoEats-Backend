import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventsService {
  removeEventParticipation(updateEventDto: UpdateEventDto) {
    return this.prismaService.event.update({
      where: {
        id: +updateEventDto.EventId
      },
      data: {
       users: {
        disconnect:{
          id:+updateEventDto.userId
        }
       }
      }
    });
  }



  addEventParticipation(updateEventDto: UpdateEventDto) {
    return this.prismaService.event.update({
      where: {
        id: +updateEventDto.EventId
      },
      data: {
       users: {
        connect:{
          id:+updateEventDto.userId
        }
       }
      }
    });
  }
  
  
  addEventToFavorite(updateEventDto: UpdateEventDto) {
   
    return this.prismaService.event.update({
      where: {
        id: +updateEventDto.EventId
      },
      data: {
       favoriteUsers: {
        connect:{
          id:+updateEventDto.userId
        }
       }
      }
    });
  }
 
  removeEventFromFavorite(updateEventDto: UpdateEventDto) {
   
    return this.prismaService.event.update({
      where: {
        id: +updateEventDto.EventId
      },
      data: {
       favoriteUsers: {
        disconnect:{
          id:+updateEventDto.userId
        }
       }
      }
    });
  }
   async getEventsWithFavoriteAndParticipation(idU) {
    const events=await this.prismaService.event.findMany();
    console.log(events);
    const a= await this.isEventLikedByUser(2, 1)
    console.log(a);
    const eventsWithLikedField = await Promise.all(
      events.map(async (event) => ({
        ...event,
        isLiked: await this.isEventLikedByUser(event.id, idU),
        participated:await this.isUserParticipated(event.id,idU),
      }))
    );
    return eventsWithLikedField;
  }
  async isUserParticipated(idE,idU){
    const user = await this.prismaService.user.findUnique({
      where: { id: idU },
      include: {
        eventsP: true,
      },
    });
    return  user?.eventsP.some((event) => event.id == idE);

  }


   async isEventLikedByUser(idE,idU ){
    const user = await this.prismaService.user.findUnique({
      where: { id: idU },
      include: {
        FavoriteEvents: true,
      },
    });
    return  user?.FavoriteEvents.some((event) => event.id == idE);
  }


  constructor(private readonly prismaService: PrismaService) {}
  create(createEventDto: CreateEventDto) {
    return this.prismaService.event.create({
      data: {
        name: createEventDto.name,
        description: createEventDto.description,
        place: createEventDto.location,
        date: createEventDto.date,
        ownerId: +createEventDto.userId,
        img:createEventDto.imageName
        
      },
    });
  }

  findAll() {
    return this.prismaService.event.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
