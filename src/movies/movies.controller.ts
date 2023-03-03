import { Controller, Get, Param, Post, Delete } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return '모든 영화목록 출력';
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `파라미터에 있는 변수 id: ${id}를 출력`;
  }
  @Post('/:id')
  create(@Param('id') movieId: string) {
    return '영화를 추가할 메소드';
  }
  @Delete('/:id')
  delete(@Param('id') movieId: string) {
    return '영화를 삭제할 메소드';
  }
}
