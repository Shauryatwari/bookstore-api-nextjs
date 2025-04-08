import { Controller, Get, Query, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAll(@Query() query) {
    return this.booksService.findAll(query);
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.booksService.findOne(id);
  }
}
