import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // ✅ Register the User entity
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // ✅ Needed so AuthModule can use UsersService
})
export class UsersModule {}
