import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Body,
  Patch,
} from '@nestjs/common';
import { Movie } from './entities/Movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  @Get('/:id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }
  @Post('/:id')
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }
  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }
  @Patch('/:id')
  patch(@Param('id') movieid: string, @Body() updateData) {
    return this.moviesService.update(movieid, updateData);
  }
}
