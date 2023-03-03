import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Body,
  Patch,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get('Search')
  search(@Query('year') searchingYear: string) {
    return `We are searching something ${searchingYear}`;
  }
  @Get()
  getAll() {
    return '모든 영화목록 출력';
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `파라미터에 있는 변수 id: ${id}를 출력`;
  }
  @Post('/:id')
  create(@Body() movieData) {
    return movieData;
  }
  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return '영화를 삭제할 메소드';
  }
  @Patch('/:id')
  patch(@Param('id') movieid: string, @Body() updateData) {
    return {
      updateMovie: movieid,
      ...updateData,
    };
  }
}
