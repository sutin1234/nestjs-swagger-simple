import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat';
import { ApiUseTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private srv: CatsService) {}

  @Get()
  @ApiOperation({ title: 'Get cat' })
  @ApiResponse({
    status: 200,
    description: 'Get record has been successfully',
    type: Cat,
  })
  getCats() {
    return this.srv.getCats();
  }

  @Post()
  @ApiOperation({ title: 'Create cat' })
  @ApiResponse({
    status: 200,
    description: 'The record has been successfully created.',
    type: Cat,
  })
  createCat(@Body() cat: Cat) {
    this.srv.createCat(cat);
  }

  @Get(':id')
  @ApiOperation({ title: 'GetOne cat' })
  @ApiResponse({
    status: 200,
    description: 'Get one Cat successfully.',
    type: Cat,
  })
  getCat(@Param('id') id: number) {
    return this.srv.geCat(id);
  }
}