import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { User } from './users/user.entity';
import { Book } from './books/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'shaurya',
      password: '1874',
      database: 'bookstore',
      entities: [User, Book],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    BooksModule,
  ],
})
export class AppModule {}
