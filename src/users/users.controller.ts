import { Controller, Post, Get, Body, UseGuards,Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/users.dto';
import { Users } from './interfaces/users.interface';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Post()
    async create(@Body() createUsersDto: CreateUsersDto) {
      await this.usersService.create(createUsersDto);
    }
  
    @Get()
    async findAll(): Promise<Users[]> {
      return this.usersService.findAll();
    }

    
  
}