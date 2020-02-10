import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './interfaces/users.interface';
import { CreateUsersDto } from './dto/users.dto';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
export type User = any;
@Injectable()
export class UsersService {
private readonly users: User[];
private abc:Users
constructor(@InjectModel('Users') private readonly usersModel: Model<Users>,@InjectConnection() private readonly connection: Connection) {
    this.users = [
        {
          userId: 1,
          username: 'john',
          password: 'changeme',
        },
        {
          userId: 2,
          username: 'chris',
          password: 'secret',
        },
        {
          userId: 3,
          username: 'maria',
          password: 'guess',
        },
      ];
}

  async findOne(username: string): Promise<User | undefined> {
    var query1 ={username:username}
    this.abc = await this.usersModel.findOne(query1).exec()
    //console.log(this.abc)
    return this.abc
    //this.usersModel.find(user => user.username === username);
  }
    async create(createUsersDto: CreateUsersDto): Promise<Users> {
        try{
            var query ={username:createUsersDto.username}
            console.log(query.username)
            this.abc = await this.usersModel.findOne(query).exec()
            console.log(this.abc)
            if(this.abc==null){
            const createdCat = new this.usersModel(createUsersDto);
            return createdCat.save();       
            }
            else if(this.abc.username === createUsersDto.username) {
            console.log("User Exists")
            }
            else{
            console.log("hi")
            }
            }catch(Exception ){
                console.log("fdsfdsf")
            }
        }
        async findAll(): Promise<Users[]> {
            return this.usersModel.find().exec();
        }
  
}