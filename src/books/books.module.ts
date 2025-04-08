import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book])], // ✅ Register Book entity
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
