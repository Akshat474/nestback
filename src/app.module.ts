import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule,UsersModule,MongooseModule.forRoot('mongodb://localhost:27017/users',{ useNewUrlParser: true,useUnifiedTopology: true })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
